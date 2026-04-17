"use client";

import { useState, useEffect, useRef } from "react";

const LEFT_LINKS = [
  ["Om oss", "#om-oss"],
  ["Sortiment", "#sortiment"],
] as const;

const RIGHT_LINKS = [
  ["Hitta oss", "#hitta-oss"],
  ["Kontakt", "#kontakt"],
] as const;

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const pastHero = currentY > window.innerHeight * 0.75;
      const scrollingUp = currentY < lastY.current;

      setVisible(pastHero && scrollingUp);
      lastY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
        background: "rgba(242,237,229,0.9)",
        backdropFilter: "blur(18px) saturate(1.6)",
        WebkitBackdropFilter: "blur(18px) saturate(1.6)",
        boxShadow: "0 1px 0 rgba(122,28,46,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── Vänster-länkar ── */}
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {LEFT_LINKS.map(([label, href]) => (
            <a key={label} href={href} className="nav-link" style={{ color: "#1C1714" }}>
              {label}
            </a>
          ))}
        </div>

        {/* ── Centrerat varumärke ── */}
        <a
          href="#"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            fontStyle: "italic",
            color: "#1C1714",
            textDecoration: "none",
            fontWeight: 400,
          }}
        >
          Gudagott
        </a>

        {/* ── Höger-länkar ── */}
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {RIGHT_LINKS.map(([label, href]) => (
            <a key={label} href={href} className="nav-link" style={{ color: "#1C1714" }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
