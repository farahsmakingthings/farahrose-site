import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const LINKS = [
  { href: "/work",         label: "Work" },
  { href: "/art",          label: "Art" },
  { href: "/shop",         label: "Shop" },
  { href: "/experimental", label: "Lab" },
  { href: "/about",        label: "About" },
];

export default function Nav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(242,242,242,0.97)" : "#F2F2F2",
          borderBottom: "1px solid #0A0A0A",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          transition: "background 0.3s",
          height: "52px",
          display: "flex",
          alignItems: "center",
          padding: "0 2.5rem",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <Link href="/">
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "1rem",
              letterSpacing: "-0.04em",
              color: "#0A0A0A",
              textDecoration: "none",
              cursor: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            FARAH
            <span
              style={{
                background: "#FF4D32",
                color: "#F2F2F2",
                padding: "0.05rem 0.35rem",
                fontWeight: 900,
                lineHeight: 1,
              }}
            >
              ROSE
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          className="hide-mobile"
        >
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: location === l.href ? "#FF4D32" : "#0A0A0A",
                  textDecoration: "none",
                  cursor: "none",
                  fontWeight: location === l.href ? 700 : 400,
                  borderBottom: location === l.href ? "1px solid #FF4D32" : "1px solid transparent",
                  paddingBottom: "1px",
                  transition: "color 0.15s, border-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#FF4D32";
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "#FF4D32";
                }}
                onMouseLeave={(e) => {
                  if (location !== l.href) {
                    (e.currentTarget as HTMLElement).style.color = "#0A0A0A";
                    (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
                  }
                }}
              >
                {l.label}
              </span>
            </Link>
          ))}
          <Link href="/shop">
            <span className="btn-primary" style={{ padding: "0.4rem 1rem", fontSize: "0.65rem" }}>
              Shop Prints
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "none",
            padding: "0.25rem",
            display: "none",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", height: "1px", background: "#0A0A0A",
                transition: "transform 0.2s, opacity 0.2s",
                transform: menuOpen && i === 0 ? "rotate(45deg) translate(4px, 4px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(4px, -4px)" : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "52px", left: 0, right: 0,
            background: "#F2F2F2",
            borderBottom: "1px solid #0A0A0A",
            zIndex: 999,
            padding: "2rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              <span
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  fontSize: "2rem",
                  letterSpacing: "-0.04em",
                  color: location === l.href ? "#FF4D32" : "#0A0A0A",
                  display: "block",
                  cursor: "none",
                }}
              >
                {l.label}
              </span>
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
