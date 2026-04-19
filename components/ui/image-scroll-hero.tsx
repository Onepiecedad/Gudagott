"use client";

import React from "react";
import { motion } from "framer-motion";

interface ImageScrollHeroProps {
  backgroundSrc?: string;
}

export function ImageScrollHero({
  backgroundSrc = "/exterior-new.jpg",
}: ImageScrollHeroProps) {
  return (
    <div id="hero" className="hero-section" style={{ position: "relative", height: "100vh" }}>

      {/* ── Background: background-image div — fungerar reliabelt cross-browser ── */}
      <div className="hero-bg" style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${backgroundSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
        backgroundRepeat: "no-repeat",
      }} />

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

      {/* ── Scroll indicator ── */}
      <motion.div
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
