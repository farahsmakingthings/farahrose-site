/*
 * ShopSuccess — Post-checkout confirmation page.
 * Verifies the Stripe session and shows order details.
 */
import { useLocation } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

export default function ShopSuccess() {
  const [location] = useLocation();
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id") ?? "";

  const { data, isLoading, error } = trpc.shop.verifySession.useQuery(
    { sessionId },
    { enabled: !!sessionId }
  );

  const formatAmount = (cents: number | null | undefined, currency: string | null | undefined) => {
    if (!cents) return "";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency ?? "usd",
    }).format(cents / 100);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF5" }}>
      <Nav />

      <section
        style={{
          paddingTop: "calc(56px + 6rem)",
          paddingBottom: "6rem",
          padding: "calc(56px + 6rem) 2.5rem 6rem",
          maxWidth: "640px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {isLoading && (
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "#888",
            }}
          >
            Verifying your order…
          </div>
        )}

        {error && (
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: "2rem",
                letterSpacing: "-0.04em",
                color: "#FF5C00",
                marginBottom: "1rem",
              }}
            >
              Something went wrong.
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#666" }}>
              We couldn't verify your order. Please contact hello@farahrose.xyz with your receipt.
            </p>
          </div>
        )}

        {data && (
          <div>
            {/* Big checkmark starburst */}
            <div
              style={{
                width: "100px",
                height: "100px",
                background: "#D4F53C",
                border: "1.5px solid #0A0A0A",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 2rem",
                fontSize: "2.5rem",
              }}
            >
              ✓
            </div>

            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#888",
                marginBottom: "0.75rem",
              }}
            >
              Order Confirmed
            </div>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "-0.05em",
                lineHeight: 0.9,
                color: "#0A0A0A",
                marginBottom: "1.5rem",
              }}
            >
              Thank you!
            </h1>

            <div
              style={{
                border: "1.5px solid #0A0A0A",
                padding: "1.5rem",
                marginBottom: "2rem",
                textAlign: "left",
                background: "#fff",
              }}
            >
              {data.customerEmail && (
                <div style={{ marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#888",
                      display: "block",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Confirmation sent to
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#0A0A0A",
                    }}
                  >
                    {data.customerEmail}
                  </span>
                </div>
              )}
              {data.amountTotal && (
                <div>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#888",
                      display: "block",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Total charged
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      letterSpacing: "-0.03em",
                      color: "#0A0A0A",
                    }}
                  >
                    {formatAmount(data.amountTotal, data.currency)}
                  </span>
                </div>
              )}
            </div>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.9rem",
                color: "#555",
                lineHeight: 1.6,
                marginBottom: "2rem",
              }}
            >
              Your print will ship within 5–7 business days. Questions? Reach out at{" "}
              <a href="mailto:hello@farahrose.xyz" style={{ color: "#FF5C00", fontWeight: 700 }}>
                hello@farahrose.xyz
              </a>
            </p>

            <a
              href="/shop"
              style={{
                display: "inline-block",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "0.85rem",
                letterSpacing: "-0.01em",
                padding: "0.75rem 1.5rem",
                background: "#0A0A0A",
                color: "#FAFAF5",
                border: "1.5px solid #0A0A0A",
                textDecoration: "none",
                boxShadow: "3px 3px 0 #FF5C00",
              }}
            >
              ← Back to Shop
            </a>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
