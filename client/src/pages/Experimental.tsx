/*
 * Experimental — The Lab
 * Editorial v2: Bone bg, Coral header band, 1px borders, Playfair captions
 */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400255510/HV832KvPDPboRqaK8bLCUX";

const experiments = [
  {
    title: "Warped Lens Series",
    subtitle: "Photography × Distortion",
    year: "2022",
    description: "A self-portrait series exploring how perception distorts identity. Shot on film, manipulated in darkroom.",
    tag: "Photography",
    accent: "#0033FF",
    img: `${CDN}/Farah_Rose_Warped_Lens_II_dcb80fdf.webp`,
  },
  {
    title: "Mind, Fully Mindful",
    subtitle: "Digital Art × Meditation",
    year: "2021",
    description: "An exploration of mindfulness through generative digital imagery. Created during lockdown.",
    tag: "Digital",
    accent: "#FF4D32",
    img: `${CDN}/Mind%2CFullyMindful_17c0c30e.png`,
  },
  {
    title: "Mindfully, Mind Full",
    subtitle: "Digital Art × Duality",
    year: "2021",
    description: "The companion piece to Mind, Fully Mindful. Two states of the same mind.",
    tag: "Digital",
    accent: "#FF4D32",
    img: `${CDN}/Mindfully%2CMindFull_bf443c02.webp`,
  },
  {
    title: "Studio Trip",
    subtitle: "Documentation × Process",
    year: "2024–2025",
    description: "Behind-the-scenes documentation of studio practice. Raw, unfiltered process work.",
    tag: "Process",
    accent: "#D4FF00",
    img: `${CDN}/StudioTripVersion1_d1b9f9bc.webp`,
  },
  {
    title: "Self Portrait Series",
    subtitle: "Photography × Identity",
    year: "2022",
    description: "A series of self-portraits exploring identity, gaze, and the performance of self.",
    tag: "Photography",
    accent: "#0033FF",
    img: `${CDN}/Self-Sunglass-1_a5645f6b.webp`,
  },
  {
    title: "Tat Gang 2018",
    subtitle: "Documentary Photography",
    year: "2018",
    description: "Early documentary work capturing community and belonging. Shot in Brooklyn.",
    tag: "Documentary",
    accent: "#D4FF00",
    img: `${CDN}/Tat-Gang-2018_0b02650b.webp`,
  },
];

export default function Experimental() {
  return (
    <div style={{ minHeight: "100vh", background: "#F2F2F2" }}>
      <Nav />

      {/* ── CORAL HEADER BAND ── */}
      <section style={{
        paddingTop: "52px",
        background: "#FF4D32",
        borderBottom: "1px solid #0A0A0A",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Blob decoration */}
        <div style={{ position: "absolute", right: "8%", top: "-20%", width: "320px", height: "320px", background: "rgba(0,0,0,0.06)", borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%", pointerEvents: "none" }} />
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr" }}>
          <div style={{ borderRight: "1px solid rgba(0,0,0,0.2)", padding: "3rem 1.5rem", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Experimental</span>
          </div>
          <div style={{ padding: "3rem", position: "relative", zIndex: 1 }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", marginBottom: "0.5rem" }}>Weird stuff. Design explorations.</p>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.055em", lineHeight: 0.84, color: "#F2F2F2" }}>
              The Lab.
            </h1>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.8)", maxWidth: "480px", lineHeight: 1.7, marginTop: "1.5rem" }}>
              Things that don't fit anywhere else — experimental projects, process documentation, and design explorations that live outside the portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXPERIMENT GRID ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        {experiments.map((exp, i) => (
          <div
            key={i}
            style={{
              borderRight: i % 2 === 0 ? "1px solid #0A0A0A" : "none",
              borderBottom: "1px solid #0A0A0A",
              display: "flex",
              flexDirection: "column",
              cursor: "none",
              overflow: "hidden",
            }}
            className="lab-card"
            onClick={() => toast("Case study coming soon — stay tuned.")}
          >
            {/* Image */}
            <div style={{ aspectRatio: "16/9", overflow: "hidden", borderBottom: "1px solid #0A0A0A", position: "relative" }}>
              <img
                src={exp.img}
                alt={exp.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                className="lab-img"
              />
              <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: exp.accent, border: "1px solid #0A0A0A", padding: "0.2rem 0.6rem", fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: exp.accent === "#D4FF00" ? "#0A0A0A" : "#F2F2F2" }}>
                {exp.tag}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "1.5rem", letterSpacing: "-0.04em", lineHeight: 0.9, color: "#0A0A0A" }}>{exp.title}</h2>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#aaa", letterSpacing: "0.06em", flexShrink: 0, paddingTop: "0.2rem" }}>{exp.year}</span>
              </div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", color: "#888" }}>{exp.subtitle}</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "#444", lineHeight: 1.65 }}>{exp.description}</p>
              <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#888", borderBottom: "1px solid #888" }}>View Project →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── SUBMIT SECTION ── */}
      <section style={{ padding: "4rem 3rem", borderTop: "1px solid #0A0A0A", borderBottom: "1px solid #0A0A0A", background: "#D4FF00", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.05em", lineHeight: 0.88, color: "#0A0A0A" }}>Want to collaborate?</h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "#333", marginTop: "0.75rem" }}>Open to experimental commissions and creative collaborations.</p>
        </div>
        <a href="mailto:hello@farahrose.xyz">
          <span style={{ display: "inline-flex", alignItems: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.8rem", padding: "0.75rem 1.75rem", background: "#0A0A0A", color: "#F2F2F2", border: "1px solid #0A0A0A", cursor: "none", boxShadow: "3px 3px 0 #0A0A0A" }}>
            Get in Touch →
          </span>
        </a>
      </section>

      <Footer />

      <style>{`
        .lab-card:hover .lab-img { transform: scale(1.04); }
        @media (max-width: 768px) {
          div[style*="repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
          .lab-card { border-right: none !important; }
        }
      `}</style>
    </div>
  );
}
