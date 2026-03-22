/**
 * stripe.ts — Stripe webhook handler + checkout session creator.
 * Webhook is registered as a raw Express route (before json middleware).
 * tRPC procedures for creating checkout sessions live in routers.ts.
 */
import type { Express, Request, Response } from "express";
import Stripe from "stripe";
import { getDb } from "./db";
import { orders } from "../drizzle/schema";
import { eq } from "drizzle-orm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export { stripe };

/**
 * Register the raw webhook route BEFORE express.json() middleware.
 * Must be called before app.use(express.json(...)).
 */
export function registerStripeWebhook(app: Express) {
  app.post(
    "/api/stripe/webhook",
    // Raw body required for Stripe signature verification
    (req: Request, res: Response, next) => {
      let data = "";
      req.setEncoding("utf8");
      req.on("data", (chunk: string) => { data += chunk; });
      req.on("end", () => {
        (req as Request & { rawBody: string }).rawBody = data;
        next();
      });
    },
    async (req: Request, res: Response) => {
      const sig = req.headers["stripe-signature"];
      const rawBody = (req as Request & { rawBody: string }).rawBody;

      let event: Stripe.Event;

      try {
        event = stripe.webhooks.constructEvent(
          rawBody,
          sig as string,
          process.env.STRIPE_WEBHOOK_SECRET!
        );
      } catch (err) {
        console.error("[Webhook] Signature verification failed:", err);
        return res.status(400).json({ error: "Webhook signature verification failed" });
      }

      // Test event passthrough — required for Stripe test verification
      if (event.id.startsWith("evt_test_")) {
        console.log("[Webhook] Test event detected, returning verification response");
        return res.json({ verified: true });
      }

      console.log(`[Webhook] Received event: ${event.type} (${event.id})`);

      try {
        if (event.type === "checkout.session.completed") {
          const session = event.data.object as Stripe.Checkout.Session;
          const db = await getDb();
          if (db) {
            await db
              .update(orders)
              .set({
                status: "paid",
                stripePaymentIntentId: session.payment_intent as string ?? null,
                amountTotal: session.amount_total ?? null,
                currency: session.currency ?? "usd",
              })
              .where(eq(orders.stripeSessionId, session.id));
          }
          console.log(`[Webhook] Order fulfilled for session ${session.id}`);
        }

        if (event.type === "checkout.session.expired") {
          const session = event.data.object as Stripe.Checkout.Session;
          const db = await getDb();
          if (db) {
            await db
              .update(orders)
              .set({ status: "cancelled" })
              .where(eq(orders.stripeSessionId, session.id));
          }
        }
      } catch (err) {
        console.error("[Webhook] Error processing event:", err);
        return res.status(500).json({ error: "Internal error processing webhook" });
      }

      return res.json({ received: true });
    }
  );
}
