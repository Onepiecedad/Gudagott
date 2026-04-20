"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageScrollHeroProps {
  backgroundSrc?: string;
  mobileSrc?: string;
}

export function ImageScrollHero({
  backgroundSrc = "/exterior-new.jpg",
  mobileSrc = "/exterior-mobile-hero.jpg",
}: ImageScrollHeroProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <div
      id="hero"
      ref={heroRef}
      className="hero-section"
      style={{ position: "relative", height: "100vh", overflow: "hidden", backgroundColor: "#000" }}
    >
      {/* ── MOBIL: <img> hanteras av webbläsaren direkt, portrait-format ── */}
      {isMobile && (
        <img
          src={mobileSrc}
          alt="Gudagott exteriör"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      )}

      {/* ── DESKTOP: parallax bakgrundsbild ── */}
      {!isMobile && (
        <motion.div
          style={{
            position: "absolute",
            inset: "-4% 0",
            y: backgroundY,
            backgroundImage: `url(${backgroundSrc})`,
            backgroundSize: "100% auto",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000",
            willChange: "transform",
          }}
        />
      )}

      {/* ── Top shadow overlay ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 40%)",
      }} />

      {/* ── Bottom dark vignette — text readability ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 20%, transparent 45%)",
        pointerEvents: "none",
      }} />

      <motion.div
        className="hero-mobile-lockup"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.9 }}
        style={{
          position: "absolute",
          left: "1.25rem",
          right: "1.25rem",
          bottom: "10.75rem",
          zIndex: 25,
          display: "none",
        }}
      >
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.76)",
          marginBottom: "0.9rem",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
        }}>
          Svenska delikatesser
        </p>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontWeight: 400,
          fontSize: "clamp(3.5rem, 14vw, 6rem)",
          lineHeight: 0.92,
          letterSpacing: "0.12em",
          color: "#fff",
          maxWidth: "8ch",
          textShadow: "0 4px 24px rgba(0,0,0,0.32)",
        }}>
          Gudagott
        </h1>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="hero-scroll-indicator"
        style={{
          position: "absolute",
          bottom: "8rem",
          left: 0,
          right: 0,
          zIndex: 30,
          textAlign: "center",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <p style={{
            fontSize: "12px",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "#ffffff",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            textShadow: "0 1px 12px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.5)",
            animation: "textPulse 3s ease-in-out infinite",
          }}>
            Välkommen in
          </p>
          <svg width="24" height="15" viewBox="0 0 24 15" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animation: "arrowPulse 2.2s ease-in-out infinite",
              filter: "drop-shadow(0 0 8px rgba(0,0,0,0.8)) drop-shadow(0 2px 4px rgba(0,0,0,0.6))",
            }}>
            <polyline points="1,1 12,13 23,1" stroke="rgba(255,255,255,0.95)"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
