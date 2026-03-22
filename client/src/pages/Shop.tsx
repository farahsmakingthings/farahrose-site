/*
 * Shop — Art Prints with Stripe Checkout
 * Editorial v2: Bone bg, 1px borders, Lime/Coral accents, Playfair captions
 */
import { useState } from "react";
import { toast } from "sonner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

type PrintSize = "8x10" | "11x14" | "16x20";

const SIZE_LABELS: Record<PrintSize, string> = {
  "8x10": '8×10"',
  "11x14": '11×14"',
  "16x20": '16×20"',
};

const SIZE_PRICES: Record<PrintSize, number> = {
  "8x10": 45,
  "11x14": 75,
  "16x20": 120,
};

export default function Shop() {
  const { data: products, isLoading } = trpc.shop.listProducts.useQuery();
  const createCheckout = trpc.shop.createCheckout.useMutation();

  const [selectedSizes, setSelectedSizes] = useState<Record<string, PrintSize>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const getSize = (productId: string): PrintSize => selectedSizes[productId] ?? "8x10";

  const handleBuy = async (productId: string) => {
    const size = getSize(productId);
    setLoadingId(productId);
    try {
      const { url } = await createCheckout.mutateAsync({
        productId, size, quantity: 1, origin: window.location.origin,
      });
      toast.success("Redirecting to checkout…");
      window.open(url, "_blank");
    } catch (err) {
      console.error(err);
      toast.error("Could not start checkout. Please try again.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F2F2F2" }}>
      <Nav />

      {/* ── PAGE HEADER ── */}
      <section style={{
        paddingTop: "calc(52px + 3rem)",
        borderBottom: "1px solid #0A0A0A",
        display: "grid",
        gridTemplateColumns: "180px 1fr",
      }}>
        <div style={{ borderRight: "1px solid #0A0A0A", padding: "3rem 1.5rem", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Print Shop</span>
        </div>
        <div style={{ padding: "3rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#888", marginBottom: "0.5rem" }}>Archival pigment prints</p>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.055em", lineHeight: 0.84, color: "#0A0A0A" }}>
              Own a piece.
            </h1>
          </div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.95rem", color: "#555", maxWidth: "300px", lineHeight: 1.7 }}>
            High-quality prints from original paintings. Limited editions, shipped worldwide.
          </p>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <div style={{ background: "#D4FF00", borderBottom: "1px solid #0A0A0A", padding: "0.6rem 3rem", display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
        {["Free shipping on orders over $100", "Archival pigment prints", "Ships within 5–7 business days"].map((t, i) => (
          <span key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0A0A0A" }}>✦ {t}</span>
        ))}
      </div>

      {/* ── PRODUCT GRID ── */}
      {isLoading ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "40vh", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "#888" }}>
          Loading prints…
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
          {(products ?? []).map((product, i) => {
            const size = getSize(product.id);
            const price = SIZE_PRICES[size];
            const isCheckingOut = loadingId === product.id;

            return (
              <div key={product.id} style={{ borderRight: "1px solid #0A0A0A", borderBottom: "1px solid #0A0A0A", display: "flex", flexDirection: "column" }}>
                {/* Image */}
                <div style={{ aspectRatio: "3/4", overflow: "hidden", borderBottom: "1px solid #0A0A0A", position: "relative", background: "#E8E8E0" }}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.45s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: "#F2F2F2", border: "1px solid #0A0A0A", padding: "0.2rem 0.55rem", fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Fine Art Print
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "1.15rem", letterSpacing: "-0.03em", color: "#0A0A0A", marginBottom: "0.3rem" }}>{product.title}</h3>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{product.description}</p>
                  </div>

                  {/* Size selector */}
                  <div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.52rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: "0.5rem" }}>Select Size</div>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {(["8x10", "11x14", "16x20"] as PrintSize[]).map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSizes((prev) => ({ ...prev, [product.id]: s }))}
                          style={{
                            fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.08em",
                            padding: "0.3rem 0.65rem", border: "1px solid #0A0A0A",
                            background: size === s ? "#0A0A0A" : "transparent",
                            color: size === s ? "#F2F2F2" : "#0A0A0A",
                            cursor: "none", transition: "all 0.15s",
                          }}
                        >{SIZE_LABELS[s]}</button>
                      ))}
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid #ddd" }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "1.4rem", letterSpacing: "-0.04em", color: "#0A0A0A" }}>${price}</span>
                    <button
                      onClick={() => handleBuy(product.id)}
                      disabled={isCheckingOut}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.02em",
                        padding: "0.6rem 1.25rem", border: "1px solid #0A0A0A",
                        background: isCheckingOut ? "#D4FF00" : "#FF4D32",
                        color: isCheckingOut ? "#0A0A0A" : "#F2F2F2",
                        cursor: isCheckingOut ? "wait" : "none",
                        boxShadow: "2px 2px 0 #0A0A0A",
                        transition: "background 0.15s, transform 0.1s",
                      }}
                      onMouseEnter={(e) => { if (!isCheckingOut) (e.currentTarget as HTMLElement).style.background = "#D4FF00"; (e.currentTarget as HTMLElement).style.color = "#0A0A0A"; }}
                      onMouseLeave={(e) => { if (!isCheckingOut) (e.currentTarget as HTMLElement).style.background = "#FF4D32"; (e.currentTarget as HTMLElement).style.color = "#F2F2F2"; }}
                    >
                      {isCheckingOut ? "Opening…" : "Buy Print →"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── SHIPPING INFO ── */}
      <section style={{ borderTop: "1px solid #0A0A0A", borderBottom: "1px solid #0A0A0A", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {[
          { title: "Archival Quality", desc: "Printed on 100% cotton rag paper with archival pigment inks. Guaranteed to last 100+ years." },
          { title: "Worldwide Shipping", desc: "Ships from Brooklyn, NY. Free shipping on orders over $100. Arrives in 5–7 business days." },
          { title: "Limited Editions", desc: "Each print is signed and numbered. Once sold out, they're gone forever." },
        ].map((item, i) => (
          <div key={i} style={{ padding: "2.5rem", borderRight: i < 2 ? "1px solid #0A0A0A" : "none" }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "1rem", letterSpacing: "-0.03em", color: "#0A0A0A", marginBottom: "0.5rem" }}>{item.title}</h3>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", color: "#666", lineHeight: 1.65 }}>{item.desc}</p>
          </div>
        ))}
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          div[style*="auto-fill, minmax(320px"] { grid-template-columns: 1fr !important; }
          section[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
          div[style*="180px 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
