"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

// ─── Encode folder names with spaces / special chars ───────────────────────
function imgSrc(folder: string, file: string): string {
  return (
    "/" +
    encodeURIComponent(folder) +
    "/" +
    encodeURIComponent(file)
  );
}

// ─── Category data ──────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    title: "Kött & Vilt",
    description:
      "Nöt, gris, lamm, fågel och vilt från svenska gårdar. Nearproducerat och noggrant utvalt.",
    images: [
      imgSrc("kött och vilt", "huvudbild_kott.JPG"),
      imgSrc("kött och vilt", "IMG_1108.JPG"),
      imgSrc("kött och vilt", "IMG_1111.JPG"),
      imgSrc("kött och vilt", "IMG_1114.JPG"),
      imgSrc("kött och vilt", "IMG_1118.JPG"),
      imgSrc("kött och vilt", "IMG_1120.JPG"),
      imgSrc("kött och vilt", "IMG_1121.JPG"),
      imgSrc("kött och vilt", "IMG_1124.JPG"),
      imgSrc("kött och vilt", "IMG_1125.JPG"),
    ],
  },
  {
    title: "Charkuterier",
    description:
      "Hantverksmässigt producerad chark med rötter i svensk och europeisk tradition.",
    images: [
      imgSrc("chark", "huvudbild_chark.JPG"),
      imgSrc("chark", "IMG_1109.JPG"),
      imgSrc("chark", "IMG_1117.JPG"),
      imgSrc("chark", "IMG_9982.jpeg"),
    ],
  },
  {
    title: "Ost & Mejeri",
    description:
      "Långlagrade hårdostar och krämiga dessertostar från svenska och europeiska mejerier.",
    images: [
      imgSrc("ost", "huvudbild_ost.jpeg"),
      imgSrc("ost", "IMG_1106.JPG"),
      imgSrc("ost", "IMG_1112.JPG"),
      imgSrc("ost", "IMG_1115.JPG"),
      imgSrc("ost", "IMG_1116.JPG"),
    ],
  },
  {
    title: "Skafferi",
    description:
      "Kryddor, marmelader, honung, knäckebröd och delikatesser som kompletterar hantverket.",
    images: [
      imgSrc("skafferi", "huvudbilde_skafferi.jpeg"),
      imgSrc("skafferi", "IMG_1119.JPG"),
      imgSrc("skafferi", "IMG_1122.JPG"),
      imgSrc("skafferi", "IMG_1123.JPG"),
      imgSrc("skafferi", "IMG_9978.jpeg"),
      imgSrc("skafferi", "IMG_9979.jpeg"),
    ],
  },
];

// ─── Single category card ───────────────────────────────────────────────────
function CategoryCard({
  cat,
  index,
}: {
  cat: (typeof CATEGORIES)[0];
  index: number;
}) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycling = useCallback(() => {
    setCurrent(1 % cat.images.length);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cat.images.length);
    }, 1400);
  }, [cat.images.length]);

  const stopCycling = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent(0);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-60px" }}
      onMouseEnter={() => {
        setHovered(true);
        startCycling();
      }}
      onMouseLeave={() => {
        setHovered(false);
        stopCycling();
      }}
      style={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: "16 / 10",
        cursor: "pointer",
        backgroundColor: "#1C1714",
        borderRadius: "10px",
      }}
    >
      {/* ── Image stack ── */}
      {cat.images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${cat.title} – bild ${i + 1}`}
          className="gallery-img"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: current === i ? 1 : 0,
            transition: "opacity 0.7s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transitionProperty: "opacity, transform",
            transitionDuration: "0.7s, 0.9s",
            transitionTimingFunction: "ease, cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        />
      ))}

      {/* ── Gradient overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,6,4,0.85) 0%, rgba(10,6,4,0.3) 45%, transparent 75%)",
          transition: "opacity 0.5s ease",
          opacity: hovered ? 1 : 0.75,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── Text panel ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.4rem 1.6rem 1.6rem",
          zIndex: 3,
        }}
      >
        {/* Category title */}
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
            color: "white",
            letterSpacing: "0.01em",
            marginBottom: "0.5rem",
            textShadow: "0 1px 8px rgba(0,0,0,0.6)",
            transition: "transform 0.4s ease",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          {cat.title}
        </h3>

        {/* Description — slides in on hover */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.6,
            letterSpacing: "0.02em",
            maxHeight: hovered ? "4rem" : "0",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            transition: "opacity 0.4s ease, max-height 0.4s ease",
            marginBottom: hovered ? "1rem" : "0",
          }}
        >
          {cat.description}
        </p>

        {/* Dot / dash indicators */}
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            opacity: hovered ? 1 : 0.35,
            transition: "opacity 0.4s ease",
          }}
        >
          {cat.images.map((_, i) => (
            <div
              key={i}
              style={{
                height: "2px",
                width: i === current ? "18px" : "6px",
                backgroundColor: "white",
                borderRadius: "2px",
                opacity: i === current ? 1 : 0.4,
                transition: "width 0.3s ease, opacity 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section wrapper ────────────────────────────────────────────────────────
export function SortimentSection() {
  return (
    <section
      id="sortiment"
      style={{ backgroundColor: "#F2EDE5", padding: "4rem 2rem 8rem" }}
    >
      {/* Header */}
      <motion.div
        style={{ textAlign: "center", marginBottom: "4rem" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#7A1C2E",
            marginBottom: "1rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Vad vi erbjuder
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: "#1C1714",
          }}
        >
          Sortiment
        </h2>
      </motion.div>

      {/* 2×2 card grid */}
      <div
        className="sortiment-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "8px",
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        {CATEGORIES.map((cat, i) => (
          <CategoryCard key={cat.title} cat={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
