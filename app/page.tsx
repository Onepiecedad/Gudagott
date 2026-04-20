"use client";

import { useRef } from "react";
import { ImageScrollHero } from "@/components/ui/image-scroll-hero";
import { OmOssSection } from "@/components/ui/om-oss-section";
import { SortimentSection } from "@/components/ui/sortiment-section";
import { Navbar } from "@/components/ui/navbar";
import { motion, useScroll, useTransform } from "framer-motion";


const C = {
  cream: "#F2EDE5",
  creamDark: "#E8E1D6",
  burgundy: "#7A1C2E",
  burgundyDark: "#5C1422",
  charcoal: "#1C1714",
  warmGray: "#6B5F57",
  offWhite: "#FAF7F3",
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};



export default function Home() {
  const interiorRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: interiorProgress } = useScroll({
    target: interiorRef,
    offset: ["start end", "end start"],
  });
  const interiorY = useTransform(interiorProgress, [0, 1], ["-8%", "8%"]);

  return (
    <main className="snap-container" style={{ backgroundColor: C.cream }}>
      <Navbar />
      <div className="snap-section"><ImageScrollHero /></div>

      {/* ─── OM OSS ─── */}
      <div className="snap-section"><OmOssSection /></div>

      {/* ─── SORTIMENT ─── */}
      <div className="snap-section"><SortimentSection /></div>


      <section
        ref={interiorRef}
        className="snap-section interior-section"
        style={{ height: "55vh", position: "relative", overflow: "hidden" }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: "-8% 0",
            y: interiorY,
            backgroundImage: "url(/interior-real.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            willChange: "transform",
            filter: "brightness(0.97) saturate(0.88)",
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(28,23,20,0.28)" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 2rem",
          }}
        >
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.88)",
                marginBottom: "1.5rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Välkommen in
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                letterSpacing: "0.08em",
                color: "white",
                lineHeight: 1.1,
                maxWidth: "700px",
                margin: "0 auto",
                textAlign: "center",
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              Gedigen kvalitet.
              <br />
              Äkta hantverk.
            </h2>
          </motion.div>
        </div>
      </section>

      <section id="hitta-oss" className="snap-section info-section" style={{ backgroundColor: C.offWhite, padding: "4rem 1.5rem" }}>
        <div
          className="info-grid"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: C.burgundy,
                marginBottom: "1.5rem",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Öppettider
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { dag: "Måndag – Fredag", tid: "10:00 – 18:00" },
                { dag: "Lördag", tid: "10:00 – 14:00" },
                { dag: "Söndag", tid: "Stängt" },
              ].map(({ dag, tid }) => (
                <div
                  key={dag}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "1rem 0",
                    borderBottom: `1px solid ${C.creamDark}`,
                  }}
                >
                  <span
                    style={{
                  fontFamily: "'Courier Prime', monospace",
                      fontSize: "1.2rem",
                      fontWeight: 300,
                      color: C.charcoal,
                    }}
                  >
                    {dag}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      color: C.warmGray,
                    }}
                  >
                    {tid}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: C.burgundy,
                marginBottom: "1.5rem",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Hitta oss
            </p>
            <div style={{ marginBottom: "2.5rem" }}>
              <p
                style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: C.charcoal,
                  marginBottom: "0.25rem",
                }}
              >
                Slottskogsgatan 42
              </p>
              <p
                style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: C.charcoal,
                }}
              >
                414 53 Göteborg
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: C.warmGray,
                  marginTop: "0.75rem",
                  fontWeight: 300,
                }}
              >
                Majorna · Nära Mariaplans hållplats
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "tel:031164950", label: "031 – 16 49 50" },
                { href: "https://www.instagram.com/gudagott/", label: "@gudagott på Instagram" },
                { href: "https://www.facebook.com/Gudagott", label: "Gudagott på Facebook" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="line" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer
        id="kontakt"
        className="site-footer"
        style={{ backgroundColor: C.charcoal, padding: "5rem 1.5rem", textAlign: "center" }}
      >
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "0.18em",
            fontSize: "2rem",
            color: "white",
            marginBottom: "0.5rem",
          }}
        >
          GUDAGOTT
        </h2>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "3rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Svenska Delikatesser · Majorna · Göteborg
        </p>

        <nav className="footer-nav" style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "3rem" }}>
          {[
            ["Sortiment", "#sortiment"],
            ["Om oss", "#om-oss"],
            ["Hitta oss", "#hitta-oss"],
            ["Kontakt", "#kontakt"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "color 0.3s",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div
          style={{
            width: "4rem",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.15)",
            margin: "0 auto 2rem",
          }}
        />

        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          © {new Date().getFullYear()} Gudagott Ekonomisk Förening
        </p>
      </footer>
    </main>
  );
}
