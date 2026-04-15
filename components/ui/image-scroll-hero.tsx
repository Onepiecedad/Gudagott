"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ImageScrollHeroProps {
  backgroundSrc?: string;
  foregroundSrc?: string;
  enableAnimations?: boolean;
  className?: string;
  startScale?: number;
}

export function ImageScrollHero({
  backgroundSrc = "/exterior-real.jpg",
  foregroundSrc = "/interior-real.jpg",
  enableAnimations = true,
  className = "",
  startScale = 0.70,
}: ImageScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollScale, setScrollScale] = useState(startScale);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
      const newScale = startScale + progress * (1 - startScale);
      setScrollScale(newScale);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion;
  const textOpacity = Math.max(0, 1 - scrollProgress * 3.2);
  const borderRadius = Math.max(0, 12 - scrollProgress * 14);

  return (
    <div className={`relative ${className}`} id="hero">
      <div ref={containerRef} style={{ height: "250vh", position: "relative" }}>
        <div style={{ position: "sticky", top: 0, width: "100%", height: "100vh", overflow: "hidden" }}>

          {/* ── Background: Real Storefront — full image visible ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${backgroundSrc})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              /* Match the light gray of the building facade */
              backgroundColor: "#d8d5d0",
            }}
          />

          {/* Frosted glass overlay — warm neutral tint */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              backgroundColor: `rgba(235, 228, 218, ${(1 - scrollProgress) * 0.04})`,
              transition: "backdrop-filter 0.08s linear",
            }}
          />

          {/* Vignette */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 40%, rgba(0,0,0,0.35) 100%)",
          }} />


          {/* ── Foreground: Interior image scales on scroll ── */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "13vh",
            zIndex: 20,
          }}>
            <div
              style={{
                transform: shouldAnimate ? `scale(${scrollScale})` : "scale(1)",
                transformOrigin: "center center",
                willChange: "transform",
                transition: "transform 0.05s linear",
              }}
            >
              <div style={{
                position: "relative",
                width: "32vw",
                maxWidth: "500px",
                aspectRatio: "3 / 4",
                borderRadius: `${borderRadius}px`,
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(28,23,20,0.45), 0 8px 24px rgba(28,23,20,0.25)",
              }}>
                <Image
                  src={foregroundSrc}
                  alt="Gudagott butiksinredning"
                  fill
                  sizes="(max-width: 768px) 78vw, 32vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(122,28,46,0.04)",
                }} />
              </div>

            </div>
          </div>

          {/* ── Scroll indicator: pulsing white orb ── */}
          <div
            style={{
              position: "absolute",
              bottom: "2.5rem",
              left: 0,
              right: 0,
              zIndex: 30,
              textAlign: "center",
              opacity: textOpacity,
              transition: "opacity 0.1s",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
            >
              {/* Pulsing text */}
              <p style={{
                fontSize: "13px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                animation: "textPulse 2.5s ease-in-out infinite",
              }}>
                Scrolla för att utforska
              </p>
              {/* Fading line */}
              <div style={{
                width: "1px",
                height: "36px",
                background: "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0))",
                animation: "lineFade 2.5s ease-in-out infinite",
              }} />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
