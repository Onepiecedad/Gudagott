"use client";

import { ImageScrollHero } from "@/components/ui/image-scroll-hero";
import { motion } from "framer-motion";

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

const categories = [
  {
    title: "Kött & Vilt",
    description: "Nöt, gris, lamm, fågel och vilt från svenska gårdar. Nearproducerat och noggrant utvald.",
    items: ["Nötfilé", "Lammracks", "Vildsvin", "Älg & hjort", "Kyckling", "Anka"],
    accentColor: C.burgundy,
  },
  {
    title: "Charkuterier",
    description: "Hantverksmässigt producerad chark med rötter i svensk och europeisk tradition.",
    items: ["Lufttorkad skinka", "Ryggskinka", "Salami & chorizo", "Paté", "Leverpastej", "Rökt oxfilé"],
    accentColor: C.charcoal,
  },
  {
    title: "Ost & Mejeri",
    description: "Långlagrade hårdostar och krämiga dessertostar från svenska och europeiska mejerier.",
    items: ["Bredsjö Blå", "Präst 36 mån", "Vasterbotten", "Brie & Camembert", "Ägg från frigående höns", "Smör"],
    accentColor: C.warmGray,
  },
  {
    title: "Skafferi",
    description: "Kryddor, marmelader, honung, knäckebröd och delikatesser som kompletterar hantverket.",
    items: ["Lokalt honung", "Hemkokad sylt", "Knäckebröd", "Kryddor & salt", "Olivolja extra virgin", "Chutneys"],
    accentColor: C.burgundyDark,
  },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: C.cream, minHeight: "100vh" }}>

      {/* ─── HERO ─── */}
      <ImageScrollHero />

      {/* ─── INTRO ─── */}
      <section id="om-oss" style={{ backgroundColor: C.offWhite, padding: "8rem 1.5rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <motion.p
            style={{ fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: C.burgundy, marginBottom: "1.5rem", fontFamily: "'Inter', sans-serif" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Majorna · Göteborg · Sedan 2009
          </motion.p>

          <motion.h2
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.8rem, 6vw, 5rem)", color: C.charcoal, lineHeight: 1.06, marginBottom: "2.5rem" }}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Det gudagoda hantverkets butik
          </motion.h2>

          <motion.div
            style={{ width: "3rem", height: "1px", backgroundColor: C.burgundy, margin: "0 auto 2.5rem" }}
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.p
            style={{ fontFamily: "'Cormorant Garamond', serif", color: C.warmGray, fontSize: "1.25rem", lineHeight: 1.75, fontWeight: 300, maxWidth: "520px", margin: "0 auto" }}
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            En short promenad från Mariaplan hittar du oss — en butik för dig som värdesätter
            äkta råvaror, snillrikt hantverk och den lilla extra detaljen som gör måltiden minnesvärd.
          </motion.p>
        </div>
      </section>

      {/* ─── SORTIMENT ─── */}
      <section id="sortiment" style={{ backgroundColor: C.cream, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Header */}
          <motion.div
            style={{ textAlign: "center", marginBottom: "5rem" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p style={{ fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: C.burgundy, marginBottom: "1rem", fontFamily: "'Inter', sans-serif" }}>
              Vad vi erbjuder
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: C.charcoal }}>
              Sortiment
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="sortiment-grid">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="sortiment-card"
                variants={fadeUp}
                custom={i * 0.4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <div style={{ width: "4px", height: "2rem", backgroundColor: cat.accentColor, marginBottom: "2rem" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: C.charcoal, marginBottom: "1rem", fontWeight: 400 }}>
                  {cat.title}
                </h3>
                <p style={{ color: C.warmGray, fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "2rem", fontWeight: 300, fontFamily: "'Inter', sans-serif" }}>
                  {cat.description}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {cat.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "13px", color: C.charcoal, letterSpacing: "0.03em", fontFamily: "'Inter', sans-serif" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: C.burgundy, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARALLAX DIVIDER ─── */}
      <section style={{ height: "60vh", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/interior.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(28,23,20,0.55)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 1.5rem" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem", fontFamily: "'Inter', sans-serif" }}>
              Välkommen in
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "white", lineHeight: 1.2, maxWidth: "600px", margin: "0 auto" }}>
              Gedigen kvalitet.<br />Äkta hantverk.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ─── ÖPPETTIDER & HITTA OSS ─── */}
      <section id="hitta-oss" style={{ backgroundColor: C.offWhite, padding: "8rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>

          {/* Öppettider */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p style={{ fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: C.burgundy, marginBottom: "1.5rem", fontFamily: "'Inter', sans-serif" }}>
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
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 300, color: C.charcoal }}>
                    {dag}
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.05em", color: C.warmGray }}>
                    {tid}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Adress */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p style={{ fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: C.burgundy, marginBottom: "1.5rem", fontFamily: "'Inter', sans-serif" }}>
              Hitta oss
            </p>
            <div style={{ marginBottom: "2.5rem" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 300, color: C.charcoal, marginBottom: "0.25rem" }}>
                Slottskogsgatan 42
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 300, color: C.charcoal }}>
                414 53 Göteborg
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: C.warmGray, marginTop: "0.75rem", fontWeight: 300 }}>
                Majorna · Nära Mariaplans hållplats
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "tel:031164950", label: "031 – 16 49 50" },
                { href: "https://www.instagram.com/gudagott/", label: "@gudagott på Instagram" },
                { href: "https://www.facebook.com/Gudagott", label: "Gudagott på Facebook" },
              ].map(({ href, label }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-link">
                  <span className="line" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        id="kontakt"
        style={{ backgroundColor: C.charcoal, padding: "5rem 1.5rem", textAlign: "center" }}
      >
        <h2
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.18em", fontSize: "2rem", color: "white", marginBottom: "0.5rem" }}
        >
          GUDAGOTT
        </h2>
        <p style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "3rem", fontFamily: "'Inter', sans-serif" }}>
          Svenska Delikatesser · Majorna · Göteborg
        </p>

        <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "3rem" }}>
          {[
            ["Sortiment", "#sortiment"],
            ["Om oss", "#om-oss"],
            ["Hitta oss", "#hitta-oss"],
            ["Kontakt", "#kontakt"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.3s", fontFamily: "'Inter', sans-serif" }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div style={{ width: "4rem", height: "1px", backgroundColor: "rgba(255,255,255,0.15)", margin: "0 auto 2rem" }} />

        <p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontFamily: "'Inter', sans-serif" }}>
          © {new Date().getFullYear()} Gudagott Ekonomisk Förening
        </p>
      </footer>
    </main>
  );
}
