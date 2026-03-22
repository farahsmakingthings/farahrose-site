import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "#F2F2F2", borderTop: "1px solid #0A0A0A" }}>
      {/* Lime marquee bar */}
      <div style={{ background: "#D4FF00", borderBottom: "1px solid #0A0A0A", overflow: "hidden", padding: "0.5rem 0" }}>
        <div className="marquee-track">
          {Array(20).fill(null).map((_, i) => (
            <span key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0A0A0A", padding: "0 1.5rem", whiteSpace: "nowrap" }}>
              {i % 2 === 0 ? "FARAH ROSE" : "✦"}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer grid */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderBottom: "1px solid #0A0A0A" }}>
        {/* Brand column */}
        <div style={{ padding: "3rem", borderRight: "1px solid #0A0A0A" }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "2.5rem", letterSpacing: "-0.055em", lineHeight: 0.88, color: "#0A0A0A", marginBottom: "1rem" }}>
            FARAH<br />
            <span style={{ WebkitTextStroke: "1.5px #0A0A0A", color: "transparent" }}>ROSE</span>
          </div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#666", lineHeight: 1.65, maxWidth: "240px" }}>
            Product designer & painter based in Brooklyn, New York.
          </p>
        </div>

        {/* Work column */}
        <div style={{ padding: "3rem 2rem", borderRight: "1px solid #0A0A0A" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1.25rem" }}>Work</div>
          {[{ href: "/work", label: "Portfolio" }, { href: "/art", label: "Paintings" }, { href: "/experimental", label: "Lab" }].map((l) => (
            <Link key={l.href} href={l.href}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "-0.02em", color: "#0A0A0A", marginBottom: "0.6rem", cursor: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF4D32"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#0A0A0A"; }}
              >{l.label}</div>
            </Link>
          ))}
        </div>

        {/* Shop column */}
        <div style={{ padding: "3rem 2rem", borderRight: "1px solid #0A0A0A" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1.25rem" }}>Shop</div>
          {[{ href: "/shop", label: "All Prints" }, { href: "/shop", label: "Limited Editions" }, { href: "/about", label: "About" }].map((l, i) => (
            <Link key={i} href={l.href}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "-0.02em", color: "#0A0A0A", marginBottom: "0.6rem", cursor: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF4D32"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#0A0A0A"; }}
              >{l.label}</div>
            </Link>
          ))}
        </div>

        {/* Connect column */}
        <div style={{ padding: "3rem 2rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1.25rem" }}>Connect</div>
          {[
            { href: "https://instagram.com", label: "Instagram" },
            { href: "https://linkedin.com", label: "LinkedIn" },
            { href: "mailto:hello@farahrose.xyz", label: "Email" },
          ].map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer">
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "-0.02em", color: "#0A0A0A", marginBottom: "0.6rem", cursor: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF4D32"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#0A0A0A"; }}
              >{l.label}</div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: "1rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", color: "#888" }}>
          © {new Date().getFullYear()} Farah Rose. All rights reserved.
        </span>
        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.8rem", color: "#888" }}>
          Brooklyn, New York
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
