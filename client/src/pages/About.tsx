/*
 * About — Farah Rose
 * Editorial v2: Bone bg, 1px borders, Swiss split-pane, Playfair body text
 */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400255510/HV832KvPDPboRqaK8bLCUX";

const experience = [
  { company: "Instagram Business", role: "Product Designer", period: "2024–2025", accent: "#FF4D32" },
  { company: "Instagram", role: "Product Designer", period: "2022–2024", accent: "#0033FF" },
  { company: "Messenger", role: "Product Designer", period: "2020–2022", accent: "#D4FF00" },
  { company: "Independent", role: "Painter & Photographer", period: "2018–Present", accent: "#0A0A0A" },
];

const facts = [
  { label: "Based in", value: "Brooklyn, NY" },
  { label: "Currently", value: "Open to freelance" },
  { label: "Painting since", value: "2018" },
  { label: "Inspired by", value: "Travel, people, color" },
];

export default function About() {
  return (
    <div style={{ minHeight: "100vh", background: "#F2F2F2" }}>
      <Nav />

      {/* ── HERO SPLIT ── */}
      <section style={{
        paddingTop: "52px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: "1px solid #0A0A0A",
        minHeight: "70vh",
      }}>
        {/* Left: photo */}
        <div style={{ borderRight: "1px solid #0A0A0A", overflow: "hidden", background: "#E8E8E0", position: "relative" }}>
          <img
            src={`${CDN}/farahrose_hero_21db5409.jpg`}
            alt="Farah Rose"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
          <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#D4FF00", border: "1px solid #0A0A0A", padding: "0.3rem 0.75rem", fontFamily: "'Space Mono', monospace", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Brooklyn, NY
          </div>
        </div>

        {/* Right: intro */}
        <div style={{ padding: "4rem 3.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#888", marginBottom: "0.5rem" }}>About</p>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.055em", lineHeight: 0.84, color: "#0A0A0A", marginBottom: "2rem" }}>
              Farah Rose.
            </h1>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#333", lineHeight: 1.75, maxWidth: "420px", marginBottom: "1.5rem" }}>
              Multidisciplinary creative based in Brooklyn, New York — maintaining a career as a Product Designer while pursuing a passion for the visual arts.
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.95rem", color: "#666", lineHeight: 1.75, maxWidth: "420px" }}>
              Her digital portfolio highlights five years at Meta, featuring design roles for Messenger, Instagram, and Instagram Business. Beyond her corporate experience, she is a prolific painter and photographer whose work is inspired by global travels to cities like Mexico City, Lisbon, and Zurich.
            </p>
          </div>

          {/* Quick facts */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderTop: "1px solid #0A0A0A", marginTop: "2.5rem" }}>
            {facts.map((f, i) => (
              <div key={i} style={{ padding: "1rem 0", borderBottom: i < 2 ? "1px solid #0A0A0A" : "none", borderRight: i % 2 === 0 ? "1px solid #0A0A0A" : "none", paddingLeft: i % 2 !== 0 ? "1.25rem" : "0" }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: "0.3rem" }}>{f.label}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "-0.02em", color: "#0A0A0A" }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section style={{ borderBottom: "1px solid #0A0A0A" }}>
        <div style={{ padding: "2.5rem 3rem", borderBottom: "1px solid #0A0A0A" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.05em", lineHeight: 0.88, color: "#0A0A0A" }}>Experience</h2>
        </div>
        {experience.map((e, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr", borderBottom: i < experience.length - 1 ? "1px solid #0A0A0A" : "none" }}>
            <div style={{ borderRight: "1px solid #0A0A0A", padding: "2rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: e.accent, border: "1px solid #0A0A0A" }} />
            </div>
            <div style={{ padding: "2rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "1.4rem", letterSpacing: "-0.04em", color: "#0A0A0A" }}>{e.company}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#666", marginTop: "0.2rem" }}>{e.role}</div>
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", color: "#888" }}>{e.period}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ── PHILOSOPHY ── */}
      <section style={{ borderBottom: "1px solid #0A0A0A", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ borderRight: "1px solid #0A0A0A", padding: "4rem 3rem", background: "#0A0A0A" }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#D4FF00", marginBottom: "1rem" }}>Philosophy</p>
          <blockquote style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.4rem", color: "#F2F2F2", lineHeight: 1.55, borderLeft: "3px solid #FF4D32", paddingLeft: "1.5rem" }}>
            "Blending professional history with a personal creative archive — bridging the gap between technology and aesthetics."
          </blockquote>
        </div>
        <div style={{ padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#888", marginBottom: "1rem" }}>Get in touch</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.05em", lineHeight: 0.88, color: "#0A0A0A", marginBottom: "1.5rem" }}>Let's connect.</h2>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#555", lineHeight: 1.7, marginBottom: "2rem" }}>Open to new opportunities, creative collaborations, and commissions.</p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="mailto:hello@farahrose.xyz">
              <span className="btn-primary">Email →</span>
            </a>
            <Link href="/work">
              <span className="btn-lime">View Work →</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          section[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="180px 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
