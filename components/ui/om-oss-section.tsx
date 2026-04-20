"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 1.1, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const PHOTOS = [
  { src: "/gallery-2.png",  alt: "Köttdisken",      position: "center 62%" },
  { src: "/mitten.jpeg",    alt: "Gudagott skylten", position: "center 22%" },
  { src: "/gallery-3.jpeg", alt: "Ostdisken",        position: "center 58%" },
];

export function OmOssSection() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % PHOTOS.length);
    }, 3800);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="om-oss" className="om-oss-section" style={{ backgroundColor: "#F2EDE5" }}>

      {/* ── Text ovanför bilderna — mjuk övergång från hero ── */}
      <div
        className="om-oss-copy"
        style={{
          textAlign: "center",
          padding: "4rem 1.5rem 3rem",
        }}
      >
        {/* Ornament */}
        <div
          className="om-oss-ornament"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.2rem",
            marginBottom: "1.8rem",
          }}
        >
          <div style={{ width: "3.5rem", height: "1px", backgroundColor: "#7A1C2E", opacity: 0.35 }} />
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#7A1C2E", opacity: 0.5 }} />
          <div style={{ width: "3.5rem", height: "1px", backgroundColor: "#7A1C2E", opacity: 0.35 }} />
        </div>

        <motion.p
          className="om-oss-kicker"
          style={{
            fontSize: "11px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#7A1C2E",
            marginBottom: "1.2rem",
            fontFamily: "'Inter', sans-serif",
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Majorna · Göteborg · Sedan 2009
        </motion.p>

        <motion.h2
          className="om-oss-title"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(3rem, 6vw, 5rem)",
            letterSpacing: "0.1em",
            color: "#1C1714",
            lineHeight: 1.06,
            marginBottom: "1.5rem",
          }}
          variants={fadeIn}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Gudagott — sedan 2009
        </motion.h2>

        <motion.div
          className="om-oss-divider"
          style={{
            width: "3rem",
            height: "1px",
            backgroundColor: "#7A1C2E",
            margin: "0 auto 1.5rem",
          }}
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <motion.p
          className="om-oss-body"
          style={{
            fontFamily: "'Courier Prime', monospace",
            color: "#4A3F38",
            fontSize: "1rem",
            lineHeight: 1.85,
            fontWeight: 400,
            maxWidth: "520px",
            margin: "0 auto",
          }}
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Närproducerat kött &amp; chark från glada djur, ostar till frukost &amp; fest —
          samt mycket mer! Från svans till mule, välkomna till Mariaplan i Majorna!
        </motion.p>
      </div>

      {/* ── Desktop: tre bilder med parallax ── */}
      <div ref={gridRef} className="om-oss-grid">
        {PHOTOS.map((photo) => (
          <div key={photo.src} className="om-oss-grid-item">
            {/* Parallax-wrapper med hover-zoom */}
            <motion.div
              style={{
                position: "absolute",
                inset: "-10% 0",
                y: parallaxY,
                willChange: "transform",
              }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery-img om-oss-grid-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: photo.position,
                  display: "block",
                }}
              />
            </motion.div>
            {/* Hover-overlay */}
            <div className="om-oss-grid-overlay" />
          </div>
        ))}
      </div>

      {/* ── Mobil: slideshow ── */}
      <div className="om-oss-mobile-show">
        <div className="om-oss-slideshow">
          <motion.div
            style={{
              position: "absolute",
              inset: "-8% 0",
              y: parallaxY,
              willChange: "transform",
            }}
          >
            {PHOTOS.map((photo, i) => (
              <motion.img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="gallery-img"
                animate={{ opacity: currentPhoto === i ? 1 : 0 }}
                transition={{ opacity: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: photo.position,
                  display: "block",
                }}
              />
            ))}
          </motion.div>

          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(12,8,6,0.35) 0%, transparent 40%)",
            pointerEvents: "none",
            zIndex: 2,
          }} />

          <div
            className="om-oss-slideshow-dots"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "1.2rem",
              zIndex: 3,
              display: "flex",
              gap: "0.45rem",
              transform: "translateX(-50%)",
            }}
          >
            {PHOTOS.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Visa bild ${i + 1}`}
                onClick={() => setCurrentPhoto(i)}
                style={{
                  width: currentPhoto === i ? "1.8rem" : "0.45rem",
                  height: "0.45rem",
                  borderRadius: "999px",
                  border: "none",
                  backgroundColor: currentPhoto === i
                    ? "rgba(255,255,255,0.92)"
                    : "rgba(255,255,255,0.4)",
                  transition: "width 0.3s ease, background-color 0.3s ease",
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
