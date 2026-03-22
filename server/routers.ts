import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import Stripe from "stripe";
import { getDb } from "./db";
import { orders } from "../drizzle/schema";
import { getProductById, PRODUCTS } from "./products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  shop: router({
    /** Return the full product catalogue (public) */
    listProducts: publicProcedure.query(() => PRODUCTS),

    /** Create a Stripe Checkout Session for a single print */
    createCheckout: publicProcedure
      .input(
        z.object({
          productId: z.string(),
          size: z.enum(["8x10", "11x14", "16x20"]),
          quantity: z.number().int().min(1).max(10),
          origin: z.string().url(),
          customerEmail: z.string().email().optional(),
          customerName: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const product = getProductById(input.productId);
        if (!product) throw new Error("Product not found");

        const sizeOption = product.sizes.find((s) => s.size === input.size);
        if (!sizeOption) throw new Error("Size not found");

        const session = await stripe.checkout.sessions.create({
          mode: "payment",
          payment_method_types: ["card"],
          allow_promotion_codes: true,
          line_items: [
            {
              price_data: {
                currency: "usd",
                unit_amount: sizeOption.priceUsd,
                product_data: {
                  name: `${product.title} — ${sizeOption.stripePriceLabel} Print`,
                  description: product.description,
                  images: [product.imageUrl],
                },
              },
              quantity: input.quantity,
            },
          ],
          customer_email: input.customerEmail,
          metadata: {
            productId: input.productId,
            productTitle: product.title,
            size: input.size,
            quantity: String(input.quantity),
            customerEmail: input.customerEmail ?? "",
            customerName: input.customerName ?? "",
          },
          success_url: `${input.origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${input.origin}/shop`,
        });

        // Persist a pending order record
        const db = await getDb();
        if (db) {
          await db.insert(orders).values({
            stripeSessionId: session.id,
            customerEmail: input.customerEmail ?? null,
            customerName: input.customerName ?? null,
            lineItems: JSON.stringify([
              {
                productId: input.productId,
                title: product.title,
                size: input.size,
                quantity: input.quantity,
                price: sizeOption.priceUsd,
              },
            ]),
            amountTotal: sizeOption.priceUsd * input.quantity,
            currency: "usd",
            status: "pending",
          });
        }

        return { url: session.url! };
      }),

    /** Verify a completed checkout session (for success page) */
    verifySession: publicProcedure
      .input(z.object({ sessionId: z.string() }))
      .query(async ({ input }) => {
        const session = await stripe.checkout.sessions.retrieve(input.sessionId);
        return {
          status: session.payment_status,
          customerEmail: session.customer_email,
          amountTotal: session.amount_total,
          currency: session.currency,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
