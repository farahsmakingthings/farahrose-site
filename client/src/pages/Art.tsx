/*
 * Art — Painting Gallery
 * Editorial v2: Bone bg, 1px black borders, Swiss grid, Playfair captions
 */
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400255510/HV832KvPDPboRqaK8bLCUX";

const paintings = [
  { src: `${CDN}/Farah_Rose_Warped_Lens_II_dcb80fdf.webp`, title: "Warped Lens II", year: "2022", medium: "Photography" },
  { src: `${CDN}/Farah_Rose_Warped_Lens_III_53214cc0.webp`, title: "Warped Lens III", year: "2022", medium: "Photography" },
  { src: `${CDN}/Farah_Serur_LadiesOfLately_fa27c596.webp`, title: "Ladies of Lately", year: "2022", medium: "Oil on canvas" },
  { src: `${CDN}/Farah_Serur_ThatNight_81c8a84f.webp`, title: "That Night", year: "2020", medium: "Acrylic" },
  { src: `${CDN}/Farah_Rose_Time_Travel_7e60cd38.webp`, title: "Time Travel", year: "2023", medium: "Oil on canvas" },
  { src: `${CDN}/Farah_Serur_BoyMeetBed_4520f83a.webp`, title: "Boy Meet Bed", year: "2020", medium: "Oil on canvas" },
  { src: `${CDN}/ADrink%26aDance_53b035a2.webp`, title: "A Drink & A Dance", year: "2023", medium: "Oil on canvas" },
  { src: `${CDN}/StudioTrip2025Version__6a3b167a.webp`, title: "Studio Trip 2025", year: "2025", medium: "Mixed media" },
  { src: `${CDN}/NightwiththeBand(1)_16ac5f49.png`, title: "Night with the Band", year: "2021", medium: "Acrylic" },
  { src: `${CDN}/Mind%2CFullyMindful_17c0c30e.png`, title: "Mind, Fully Mindful", year: "2021", medium: "Digital" },
  { src: `${CDN}/FarahRoseArt2018LR21_0435c920.webp`, title: "Early Work 2018", year: "2018", medium: "Oil on canvas" },
  { src: `${CDN}/Bahn-mi_a6e927b5.webp`, title: "Bánh Mì", year: "2022", medium: "Oil on canvas" },
  { src: `${CDN}/HawaiiMomDad_22a62333.webp`, title: "Hawaii Mom Dad", year: "2019", medium: "Oil on canvas" },
  { src: `${CDN}/Farah_Rose_T(h)at_Night_6aef5674.webp`, title: "T(h)at Night", year: "2022", medium: "Oil on canvas" },
  { src: `${CDN}/Farah_Serur_EmbodiedBody_a1442b0f.webp`, title: "Embodied Body", year: "2021", medium: "Oil on canvas" },
  { src: `${CDN}/hawaiimomdad2_19ee3985.webp`, title: "Hawaii II", year: "2019", medium: "Oil on canvas" },
  { src: `${CDN}/Tat-Gang-2018_0b02650b.webp`, title: "Tat Gang 2018", year: "2018", medium: "Photography" },
  { src: `${CDN}/IMG_2451_6a215dfa.webp`, title: "Untitled I", year: "2021", medium: "Photography" },
  { src: `${CDN}/IMG_0637copy_47750b91.webp`, title: "Untitled II", year: "2022", medium: "Photography" },
  { src: `${CDN}/StudioTripVersion1_d1b9f9bc.webp`, title: "Studio Trip I", year: "2024", medium: "Photography" },
  { src: `${CDN}/Mindfully%2CMindFull_bf443c02.webp`, title: "Mindfully, Mind Full", year: "2021", medium: "Digital" },
  { src: `${CDN}/Self-Sunglass-1_a5645f6b.webp`, title: "Self Portrait", year: "2022", medium: "Photography" },
  { src: `${CDN}/LisbonArt_ac918868.webp`, title: "Lisbon", year: "2023", medium: "Oil on canvas" },
];

export default function Art() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const mediums = ["All", ...Array.from(new Set(paintings.map((p) => p.medium)))];
  const filtered = filter === "All" ? paintings : paintings.filter((p) => p.medium === filter);

  const handlePrev = () => { if (selected === null) return; setSelected((selected - 1 + filtered.length) % filtered.length); };
  const handleNext = () => { if (selected === null) return; setSelected((selected + 1) % filtered.length); };

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
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Fine Art</span>
        </div>
        <div style={{ padding: "3rem" }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#888", marginBottom: "0.5rem" }}>Selected works, 2018–2025</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.055em", lineHeight: 0.84, color: "#0A0A0A", marginBottom: "2rem" }}>
            The Art.
          </h1>
          {/* Filter pills */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {mediums.map((m) => (
              <button
                key={m}
                onClick={() => setFilter(m)}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.8rem",
                  border: "1px solid #0A0A0A",
                  background: filter === m ? "#D4FF00" : "transparent",
                  color: "#0A0A0A",
                  cursor: "none",
                  transition: "background 0.15s",
                }}
              >{m}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderBottom: "1px solid #0A0A0A" }}>
        {filtered.map((p, i) => (
          <div
            key={p.src}
            onClick={() => setSelected(i)}
            style={{
              borderRight: (i + 1) % 3 !== 0 ? "1px solid #0A0A0A" : "none",
              borderBottom: "1px solid #0A0A0A",
              overflow: "hidden",
              position: "relative",
              cursor: "none",
              background: "#F2F2F2",
            }}
            className="art-grid-cell"
          >
            <div style={{ aspectRatio: "3/4", overflow: "hidden" }}>
              <img
                src={p.src}
                alt={p.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                className="art-img"
              />
            </div>
            <div style={{
              padding: "1rem 1.25rem",
              borderTop: "1px solid #0A0A0A",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "0.5rem",
            }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "-0.02em", color: "#0A0A0A" }}>{p.title}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.75rem", color: "#888", marginTop: "0.2rem" }}>{p.medium}</div>
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#aaa", letterSpacing: "0.06em", flexShrink: 0, paddingTop: "0.1rem" }}>{p.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── LIGHTBOX ── */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(10,10,10,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "2rem",
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            style={{ position: "absolute", left: "2rem", top: "50%", transform: "translateY(-50%)", background: "#D4FF00", border: "1px solid #0A0A0A", width: "44px", height: "44px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "1.2rem", cursor: "none", display: "flex", alignItems: "center", justifyContent: "center" }}
          >←</button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "600px", width: "100%", background: "#F2F2F2", border: "1px solid #0A0A0A" }}
          >
            <img src={filtered[selected].src} alt={filtered[selected].title} style={{ width: "100%", display: "block", maxHeight: "70vh", objectFit: "contain" }} />
            <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid #0A0A0A", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.03em", color: "#0A0A0A" }}>{filtered[selected].title}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", color: "#666", marginTop: "0.2rem" }}>{filtered[selected].medium}, {filtered[selected].year}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "transparent", border: "none", fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", color: "#888", cursor: "none" }}>CLOSE ✕</button>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            style={{ position: "absolute", right: "2rem", top: "50%", transform: "translateY(-50%)", background: "#D4FF00", border: "1px solid #0A0A0A", width: "44px", height: "44px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "1.2rem", cursor: "none", display: "flex", alignItems: "center", justifyContent: "center" }}
          >→</button>
        </div>
      )}

      <Footer />

      <style>{`
        .art-grid-cell:hover .art-img { transform: scale(1.04); }
        @media (max-width: 768px) {
          .art-grid-cell { border-right: none !important; }
          div[style*="repeat(3, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
