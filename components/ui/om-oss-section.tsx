"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  { src: "/gallery-2.png", alt: "Köttdisken", position: "center 58%" },
  { src: "/mitten.jpeg", alt: "Gudagott skylten", position: "center 40%" },
  { src: "/gallery-3.jpeg", alt: "Ostdisken", position: "center 52%" },
];

export function OmOssSection() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % PHOTOS.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="om-oss" className="om-oss-section" style={{ backgroundColor: "#F2EDE5" }}>

      {/* ── Ornament ── */}
      <div
        className="om-oss-ornament"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.2rem",
          padding: "1.8rem 0 1.5rem",
        }}
      >
        <div style={{ width: "3.5rem", height: "1px", backgroundColor: "#7A1C2E", opacity: 0.35 }} />
        <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#7A1C2E", opacity: 0.5 }} />
        <div style={{ width: "3.5rem", height: "1px", backgroundColor: "#7A1C2E", opacity: 0.35 }} />
      </div>

      {/* ── Fotopanel med bildspel och kremgradient i botten ── */}
      <div className="om-oss-media-shell" style={{ position: "relative" }}>
        <motion.div
          className="om-oss-slideshow"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, margin: "-40px" }}
          style={{
            position: "relative",
            height: "56vh",
            minHeight: "320px",
            maxHeight: "520px",
            overflow: "hidden",
            backgroundColor: "#1C1714",
          }}
        >
          {PHOTOS.map((photo, i) => (
            <motion.img
              key={photo.src}
              className="om-oss-slide gallery-img"
              src={photo.src}
              alt={photo.alt}
              animate={{
                opacity: currentPhoto === i ? 1 : 0,
                scale: currentPhoto === i ? 1.03 : 1,
              }}
              transition={{
                opacity: { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] },
                scale: { duration: 4.2, ease: [0.25, 0.1, 0.25, 1] },
              }}
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

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(12,8,6,0.58) 0%, rgba(12,8,6,0.14) 26%, rgba(12,8,6,0.08) 44%, rgba(12,8,6,0.18) 100%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          <div
            className="om-oss-slideshow-dots"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "1.5rem",
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
                  backgroundColor:
                    currentPhoto === i ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.38)",
                  transition: "width 0.3s ease, background-color 0.3s ease",
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Kremgradient fade i botten av fotopanelen */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, #F2EDE5 20%, rgba(242,237,229,0.5) 60%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      </div>

      {/* ── Text glider upp ur foto-faden ── */}
      <div
        className="om-oss-copy"
        style={{
          marginTop: "-0.5rem",
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          padding: "0 1.5rem 2.5rem",
        }}
      >
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
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            color: "#1C1714",
            lineHeight: 1.06,
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
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
            fontFamily: "'Cormorant Garamond', serif",
            color: "#4A3F38",
            fontSize: "1.35rem",
            lineHeight: 1.75,
            fontWeight: 500,
            maxWidth: "520px",
            margin: "0 auto",
          }}
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Närproducerat kött & chark från glada djur, ostar till frukost & fest — samt mycket mer!
          Från svans till mule, välkomna till Mariaplan i Majorna!
        </motion.p>
      </div>

    </section>
  );
}
