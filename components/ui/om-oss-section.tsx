"use client";

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
  { src: "/gallery-2.png", alt: "Köttdisken" },
  { src: "/mitten.jpeg", alt: "Gudagott skylten" },
  { src: "/gallery-3.jpeg", alt: "Ostdisken" },
];

export function OmOssSection() {
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

      {/* ── Fotopanel med kremgradient i botten ── */}
      <div className="om-oss-media-shell" style={{ position: "relative" }}>
        <div
          className="om-oss-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "4px",
            width: "100%",
            padding: "0 3rem",
            boxSizing: "border-box",
          }}
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              variants={fadeUp}
              custom={i * 0.25}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              style={{ overflow: "hidden", aspectRatio: "4 / 5" }}
            >
              <img
                className="gallery-img"
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
            </motion.div>
          ))}
        </div>

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
