/*
 * Home — Editorial Design System v2
 * Crisp Bone #F2F2F2 · Electric Lime #D4FF00 · Vivid Coral #FF4D32 · Ink #0A0A0A
 * Swiss International layout × Luxury Art Magazine energy
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400255510/HV832KvPDPboRqaK8bLCUX";

const MARQUEE_ITEMS = [
  "PRODUCT DESIGNER", "✦", "PAINTER", "✦", "BROOKLYN, NY", "✦",
  "META ALUMNI", "✦", "FINE ARTIST", "✦", "PRINT SHOP", "✦",
  "PRODUCT DESIGNER", "✦", "PAINTER", "✦", "BROOKLYN, NY", "✦",
  "META ALUMNI", "✦", "FINE ARTIST", "✦", "PRINT SHOP", "✦",
];

const FEATURED = [
  { src: `${CDN}/Farah_Rose_Warped_Lens_II_dcb80fdf.webp`, title: "Warped Lens II", year: "2022" },
  { src: `${CDN}/Farah_Serur_LadiesOfLately_fa27c596.webp`, title: "Ladies of Lately", year: "2021" },
  { src: `${CDN}/Farah_Rose_Time_Travel_7e60cd38.webp`, title: "Time Travel", year: "2023" },
  { src: `${CDN}/ADrink%26aDance_53b035a2.webp`, title: "A Drink & A Dance", year: "2022" },
];

function Starburst({ text, size = 88, bg = "#FF4D32" }: { text: string; size?: number; bg?: string }) {
  return (
    <div
      style={{
        width: size, height: size, background: bg,
        clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}
    >
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: size * 0.1 + "px",
        fontWeight: 700,
        color: bg === "#D4FF00" ? "#0A0A0A" : "white",
        textAlign: "center",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        lineHeight: 1.2,
        padding: "0 14%",
        display: "block",
      }}>{text}</span>
    </div>
  );
}

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "#F2F2F2", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: "1px solid #0A0A0A",
        paddingTop: "52px",
      }}>
        {/* Left pane */}
        <div style={{
          borderRight: "1px solid #0A0A0A",
          padding: "3.5rem 3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          background: "#F2F2F2",
        }}>
          {/* Top meta row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span className="pill-tag">Est. 2018</span>
            <span className="pill-tag">Brooklyn, NY</span>
          </div>

          {/* Display name */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
          }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(4.5rem, 9vw, 10rem)",
              letterSpacing: "-0.055em",
              lineHeight: 0.84,
              color: "#0A0A0A",
            }}>FARAH</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(4.5rem, 9vw, 10rem)",
              letterSpacing: "-0.055em",
              lineHeight: 0.84,
              WebkitTextStroke: "2px #0A0A0A",
              color: "transparent",
            }}>ROSE</div>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "#555",
              marginTop: "1.5rem",
              lineHeight: 1.65,
              maxWidth: "300px",
            }}>
              Product designer & painter, bridging technology and fine art from Brooklyn.
            </p>
          </div>

          {/* CTA row */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/work"><span className="btn-primary">View Work →</span></Link>
            <Link href="/shop"><span className="btn-lime">Shop Prints →</span></Link>
          </div>

          {/* Lime blob decoration */}
          <div style={{
            position: "absolute", bottom: "3.5rem", right: "-3.5rem",
            width: "130px", height: "130px",
            background: "#D4FF00",
            borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
            opacity: 0.65, zIndex: 0,
          }} />
          <div style={{ position: "absolute", bottom: "4rem", right: "-1.5rem", transform: "rotate(10deg)", zIndex: 1 }}>
            <Starburst text={"SHOP\nPRINTS"} size={88} bg="#FF4D32" />
          </div>
        </div>

        {/* Right pane — hero image */}
        <div style={{ position: "relative", overflow: "hidden", background: "#E8E8E0" }}>
          <img
            src={`${CDN}/farahrose_hero_21db5409.jpg`}
            alt="Farah Rose"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center top",
              display: "block",
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(1.04)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          />
          <div style={{
            position: "absolute", bottom: "1.5rem", left: "1.5rem",
            background: "#D4FF00", border: "1px solid #0A0A0A",
            padding: "0.3rem 0.75rem",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.55rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", color: "#0A0A0A",
          }}>Artist & Product Designer</div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{
        borderBottom: "1px solid #0A0A0A",
        overflow: "hidden",
        background: "#D4FF00",
        padding: "0.55rem 0",
      }}>
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.62rem", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#0A0A0A", padding: "0 1.5rem", whiteSpace: "nowrap",
            }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── WORK SECTION ── */}
      <section style={{ borderBottom: "1px solid #0A0A0A" }}>
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", borderBottom: "1px solid #0A0A0A" }}>
          <div style={{
            borderRight: "1px solid #0A0A0A", padding: "2rem 1.5rem",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: "0.58rem",
              fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#888", writingMode: "vertical-rl", transform: "rotate(180deg)",
            }}>Product Design</span>
          </div>
          <div style={{ padding: "2.5rem 3rem" }}>
            <h2 className="fade-in-up" style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 5.5rem)", letterSpacing: "-0.05em",
              lineHeight: 0.88, color: "#0A0A0A", marginBottom: "1rem",
            }}>Design that ships.</h2>
            <p className="fade-in-up" style={{
              fontFamily: "'Playfair Display', serif", fontStyle: "italic",
              fontSize: "1.05rem", color: "#555", maxWidth: "420px",
              lineHeight: 1.65, marginBottom: "2rem",
            }}>Five years at Meta — Messenger, Instagram, Instagram Business. Product design reaching billions.</p>
            <Link href="/work"><span className="btn-primary">See Case Studies →</span></Link>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            { label: "Messenger", year: "2020–2022", accent: "#0033FF", desc: "Chat & calling redesign" },
            { label: "Instagram", year: "2022–2024", accent: "#FF4D32", desc: "Feed & discovery systems" },
            { label: "IG Business", year: "2024–2025", accent: "#D4FF00", desc: "Creator monetisation" },
          ].map((item, i) => (
            <Link key={i} href="/work">
              <div
                className="fade-in-up"
                style={{
                  borderRight: i < 2 ? "1px solid #0A0A0A" : "none",
                  padding: "2.5rem 2rem", minHeight: "200px",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  background: "transparent", transition: "background 0.2s", cursor: "none",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = item.accent === "#D4FF00" ? "#D4FF00" : item.accent + "12"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: item.accent, border: "1px solid #0A0A0A" }} />
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "1.6rem", letterSpacing: "-0.04em", color: "#0A0A0A" }}>{item.label}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", color: "#666", marginTop: "0.25rem" }}>{item.desc}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#999", letterSpacing: "0.08em", marginTop: "0.4rem" }}>{item.year}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ART SECTION ── */}
      <section style={{ borderBottom: "1px solid #0A0A0A" }}>
        <div style={{
          padding: "2.5rem 3rem 2rem", borderBottom: "1px solid #0A0A0A",
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: "1rem",
        }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#888", display: "block", marginBottom: "0.5rem" }}>Selected works</span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 5.5rem)", letterSpacing: "-0.05em", lineHeight: 0.88, color: "#0A0A0A" }}>The Art.</h2>
          </div>
          <Link href="/art"><span className="btn-ghost">View All Paintings →</span></Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {FEATURED.map((p, i) => (
            <Link key={i} href="/art">
              <div
                style={{
                  borderRight: i < 3 ? "1px solid #0A0A0A" : "none",
                  aspectRatio: "3/4", overflow: "hidden",
                  position: "relative", cursor: "none",
                }}
                className="fade-in-up art-card"
              >
                <img src={p.src} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }} />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "rgba(242,242,242,0.95)", borderTop: "1px solid #0A0A0A",
                  padding: "0.6rem 0.85rem",
                  transform: "translateY(100%)", transition: "transform 0.25s ease",
                }} className="art-caption">
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "-0.02em", color: "#0A0A0A" }}>{p.title}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.7rem", color: "#888" }}>{p.year}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SHOP SECTION ── */}
      <section style={{
        borderBottom: "1px solid #0A0A0A",
        background: "#0A0A0A",
        padding: "5rem 3rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
      }}>
        <div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#D4FF00", display: "block", marginBottom: "1rem" }}>Print Shop</span>
          <h2 className="fade-in-up" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 5.5rem)", letterSpacing: "-0.05em", lineHeight: 0.88, color: "#F2F2F2", marginBottom: "1.5rem" }}>Own a piece.</h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "#888", maxWidth: "360px", lineHeight: 1.65, marginBottom: "2rem" }}>
            High-quality art prints from original paintings. Limited editions, shipped worldwide.
          </p>
          <Link href="/shop"><span className="btn-lime">Shop Now →</span></Link>
        </div>
        <div style={{ position: "relative" }}>
          <img
            src={`${CDN}/Farah_Rose_Warped_Lens_III_53214cc0.webp`}
            alt="Art print"
            style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", border: "1px solid #333", display: "block" }}
          />
          <div style={{ position: "absolute", top: "-1.2rem", right: "-1.2rem", transform: "rotate(8deg)" }}>
            <Starburst text={"LIMITED\nEDITION"} size={80} bg="#D4FF00" />
          </div>
        </div>
      </section>

      {/* ── LAB / EXPERIMENTAL ── */}
      <section style={{
        borderBottom: "1px solid #0A0A0A",
        background: "#FF4D32",
        padding: "5rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        flexWrap: "wrap",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: "12%", top: "-30%",
          width: "280px", height: "280px",
          background: "rgba(0,0,0,0.07)",
          borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: "0.75rem" }}>Experimental</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 5.5rem)", letterSpacing: "-0.05em", lineHeight: 0.88, color: "#F2F2F2" }}>The Lab.</h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.8)", maxWidth: "380px", lineHeight: 1.65, marginTop: "1rem" }}>
            Weird stuff. Experimental projects, design explorations, and things that don't fit anywhere else.
          </p>
        </div>
        <Link href="/experimental" style={{ position: "relative", zIndex: 1 }}>
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.8rem", padding: "0.7rem 1.5rem", background: "#F2F2F2", color: "#0A0A0A", border: "1px solid #0A0A0A", cursor: "none", boxShadow: "3px 3px 0 #0A0A0A", transition: "background 0.15s, transform 0.1s, box-shadow 0.1s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#D4FF00"; (e.currentTarget as HTMLElement).style.transform = "translate(-1px,-1px)"; (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 #0A0A0A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#F2F2F2"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "3px 3px 0 #0A0A0A"; }}
          >Enter the Lab →</span>
        </Link>
      </section>

      <Footer />

      <style>{`
        .art-card:hover img { transform: scale(1.05); }
        .art-card:hover .art-caption { transform: translateY(0) !important; }
        @media (max-width: 768px) {
          section { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
