"use client";

import { useState, useEffect, useRef } from "react";

const LEFT_LINKS = [
  ["Om oss", "#om-oss"],
  ["Sortiment", "#sortiment"],
];

const RIGHT_LINKS = [
  ["Hitta oss", "#hitta-oss"],
  ["Kontakt", "#hitta-oss"],
];

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const scrollRoot =
      document.querySelector<HTMLElement>(".snap-container") ?? window;
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateViewportMode = () => {
      setIsMobile(mediaQuery.matches);
      if (mediaQuery.matches) {
        setVisible(true);
      }
    };

    const getScrollTop = () =>
      scrollRoot instanceof Window ? scrollRoot.scrollY : scrollRoot.scrollTop;

    const onScroll = () => {
      if (mediaQuery.matches) {
        setVisible(true);
        return;
      }

      const currentY = getScrollTop();
      const pastHero = currentY > window.innerHeight * 0.75;
      const scrollingUp = currentY < lastY.current;
      setVisible(pastHero && scrollingUp);
      lastY.current = currentY;
    };

    updateViewportMode();
    onScroll();

    mediaQuery.addEventListener("change", updateViewportMode);
    scrollRoot.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", updateViewportMode);
      scrollRoot.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transform: visible ? "translateY(0)" : "translateY(-6px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          background: isMobile ? "rgba(250,247,243,0.94)" : "rgba(242,237,229,0.92)",
          backdropFilter: "blur(18px) saturate(1.6)",
          WebkitBackdropFilter: "blur(18px) saturate(1.6)",
          boxShadow: isMobile
            ? "0 8px 30px rgba(28,23,20,0.08), 0 1px 0 rgba(122,28,46,0.08)"
            : "0 1px 0 rgba(122,28,46,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: isMobile ? "0 1rem" : "0 1.5rem",
            height: isMobile ? "64px" : "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Desktop: vänster-länkar ── */}
          <div className="nav-desktop-links" style={{ display: "flex", gap: "2.5rem" }}>
            {LEFT_LINKS.map(([label, href]) => (
              <a key={label} href={href} className="nav-link" style={{ color: "#1C1714" }}>
                {label}
              </a>
            ))}
          </div>

          {/* ── Logga (alltid synlig) ── */}
          <a
            href="#"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: isMobile ? "1.1rem" : "1.2rem",
              letterSpacing: isMobile ? "0.22em" : "0.3em",
              textTransform: "uppercase",
              color: "#1C1714",
              textDecoration: "none",
              fontWeight: 400,
            }}
          >
            Gudagott
          </a>

          {/* ── Desktop: höger-länkar ── */}
          <div className="nav-desktop-links" style={{ display: "flex", gap: "2.5rem" }}>
            {RIGHT_LINKS.map(([label, href]) => (
              <a key={label} href={href} className="nav-link" style={{ color: "#1C1714" }}>
                {label}
              </a>
            ))}
          </div>

          {/* ── Mobil: hamburger ── */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Öppna meny"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span style={{
              display: "block", width: "22px", height: "1.5px",
              background: "#1C1714",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: "22px", height: "1.5px",
              background: "#1C1714",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }} />
            <span style={{
              display: "block", width: "22px", height: "1.5px",
              background: "#1C1714",
              transition: "transform 0.3s ease",
              transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>

        {/* ── Mobil dropdown-meny ── */}
        <div
          className="nav-mobile-menu"
            style={{
              maxHeight: menuOpen ? "360px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
              borderTop: menuOpen ? "1px solid rgba(122,28,46,0.1)" : "none",
              background: "rgba(250,247,243,0.96)",
            }}
        >
          <div style={{ display: "flex", flexDirection: "column", padding: "1rem 1.5rem 1.5rem" }}>
            {ALL_LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#1C1714",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  letterSpacing: "0.08em",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(28,23,20,0.08)",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
