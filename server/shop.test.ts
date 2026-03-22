import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("shop.listProducts", () => {
  it("returns 8 products with required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const products = await caller.shop.listProducts();

    expect(products).toHaveLength(8);
    for (const p of products) {
      expect(p.id).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.imageUrl).toBeTruthy();
      expect(p.sizes).toHaveLength(3);
      for (const s of p.sizes) {
        expect(s.priceUsd).toBeGreaterThan(0);
      }
    }
  });
});
