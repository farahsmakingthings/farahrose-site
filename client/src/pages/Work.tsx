/*
 * Work — Product Design Portfolio
 * Editorial v2: Bone bg, 1px borders, Swiss grid, Playfair captions
 */
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const roles = [
  {
    company: "Instagram Business",
    role: "Product Designer",
    period: "2024–2025",
    description: "Designing tools and surfaces for businesses and creators to grow their presence on Instagram. Focused on monetization, analytics, and advertising experiences that help millions of businesses reach their audiences.",
    tags: ["Product Design", "B2B", "Monetization", "Meta"],
    index: "01",
    accent: "#FF4D32",
  },
  {
    company: "Instagram",
    role: "Product Designer",
    period: "2022–2024",
    description: "Worked across core Instagram surfaces including Feed, Stories, and Reels. Contributed to creator tools, engagement features, and the overall visual design language of the app.",
    tags: ["Product Design", "Consumer", "Social", "Meta"],
    index: "02",
    accent: "#0033FF",
  },
  {
    company: "Messenger",
    role: "Product Designer",
    period: "2020–2022",
    description: "Designing the messaging experience used by billions. Led design for chat, calls, and group features. Contributed to the Messenger redesign and cross-platform consistency efforts.",
    tags: ["Product Design", "Messaging", "Cross-platform", "Meta"],
    index: "03",
    accent: "#D4FF00",
  },
];

const skills = [
  "Product Design", "UX Research", "Prototyping", "Design Systems",
  "Figma", "Motion Design", "User Testing", "Visual Design",
  "Information Architecture", "Cross-functional Collaboration",
];

export default function Work() {
  const [activeRole, setActiveRole] = useState<number | null>(null);

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
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Product Design</span>
        </div>
        <div style={{ padding: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "flex-end" }}>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#888", marginBottom: "0.5rem" }}>5 years at Meta</p>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.055em", lineHeight: 0.84, color: "#0A0A0A" }}>
              Design<br />that ships.
            </h1>
          </div>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "#555", lineHeight: 1.7, maxWidth: "360px" }}>
              Product design across Messenger, Instagram, and Instagram Business — reaching billions of people worldwide.
            </p>
            <div style={{ marginTop: "2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {skills.slice(0, 5).map((s) => (
                <span key={s} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.25rem 0.65rem", border: "1px solid #0A0A0A", color: "#0A0A0A", background: "transparent" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ROLES ── */}
      {roles.map((r, i) => (
        <div
          key={i}
          style={{
            borderBottom: "1px solid #0A0A0A",
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            cursor: "none",
            transition: "background 0.2s",
            background: activeRole === i ? r.accent + (r.accent === "#D4FF00" ? "" : "10") : "transparent",
          }}
          onMouseEnter={() => setActiveRole(i)}
          onMouseLeave={() => setActiveRole(null)}
        >
          {/* Index column */}
          <div style={{ borderRight: "1px solid #0A0A0A", padding: "2.5rem 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "1rem" }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", color: "#aaa" }}>{r.index}</span>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: r.accent, border: "1px solid #0A0A0A", flexShrink: 0 }} />
          </div>

          {/* Content */}
          <div style={{ padding: "2.5rem 3rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.25rem" }}>
              <div>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.04em", lineHeight: 0.9, color: "#0A0A0A" }}>{r.company}</h2>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#666", marginTop: "0.4rem" }}>{r.role}</p>
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", color: "#888", paddingTop: "0.2rem" }}>{r.period}</span>
            </div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#444", lineHeight: 1.7, maxWidth: "560px", marginBottom: "1.5rem" }}>{r.description}</p>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {r.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.6rem", border: "1px solid #0A0A0A", color: "#0A0A0A", background: activeRole === i ? "rgba(255,255,255,0.5)" : "transparent" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* ── SKILLS GRID ── */}
      <section style={{ borderBottom: "1px solid #0A0A0A", background: "#0A0A0A" }}>
        <div style={{ padding: "3rem", borderBottom: "1px solid #222" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.05em", lineHeight: 0.88, color: "#F2F2F2" }}>Skills & Tools</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {skills.map((s, i) => (
            <div key={s} style={{
              padding: "1.5rem",
              borderRight: (i + 1) % 5 !== 0 ? "1px solid #222" : "none",
              borderBottom: i < 5 ? "1px solid #222" : "none",
            }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "-0.02em", color: "#F2F2F2" }}>{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "4rem 3rem", borderBottom: "1px solid #0A0A0A", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", background: "#D4FF00" }}>
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.05em", lineHeight: 0.88, color: "#0A0A0A" }}>Let's work together.</h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "#333", marginTop: "0.75rem" }}>Open to new opportunities and collaborations.</p>
        </div>
        <a href="mailto:hello@farahrose.xyz">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.02em", padding: "0.75rem 1.75rem", background: "#0A0A0A", color: "#F2F2F2", border: "1px solid #0A0A0A", cursor: "none", boxShadow: "3px 3px 0 #0A0A0A", transition: "background 0.15s, transform 0.1s, box-shadow 0.1s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FF4D32"; (e.currentTarget as HTMLElement).style.transform = "translate(-1px,-1px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0A0A0A"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >Get in Touch →</span>
        </a>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="repeat(5, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
          section > div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
