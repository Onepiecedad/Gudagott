"use client";

import { ImageScrollHero } from "@/components/ui/image-scroll-hero";
import { motion } from "framer-motion";

const C = {
  cream: "#F2EDE5",
  burgundy: "#7A1C2E",
  burgundyDark: "#5C1422",
  charcoal: "#1C1714",
  warmGray: "#6B5F57",
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
    description:
      "Nöt, gris, lamm, fågel och vilt från svenska gårdar. Närproducerat och noggrant utvalt.",
    items: ["Nötfilé", "Lammracks", "Vildsvin", "Älg & hjort", "Kyckling", "Anka"],
    accentColor: C.burgundy,
  },
  {
    title: "Charkuterier",
    description:
      "Hantverksmässigt producerad chark med rötter i svensk och europeisk tradition.",
    items: [
      "Lufttorkad skinka",
      "Ryggskinka",
      "Salami & chorizo",
      "Paté",
      "Leverpastej",
      "Rökt oxfilé",
    ],
    accentColor: C.charcoal,
  },
  {
    title: "Ost & Mejeri",
    description:
      "Långlagrade hårdostar och krämiga dessertostar från svenska och europeiska mejerier.",
    items: [
      "Bredsjö Blå",
      "Präst 36 mån",
      "Västerbotten",
      "Brie & Camembert",
      "Ägg från frigående höns",
      "Smör",
    ],
    accentColor: C.warmGray,
  },
  {
    title: "Skafferi",
    description:
      "Kryddor, marmelader, honung, knäckebröd och delikatesser som kompletterar hantverket.",
    items: [
      "Lokal honung",
      "Hemkokad sylt",
      "Knäckebröd",
      "Kryddor & salt",
      "Olivolja extra virgin",
      "Chutneys",
    ],
    accentColor: C.burgundyDark,
  },
];

const openingHours = [
  { day: "Måndag – Fredag", time: "10:00 – 18:00" },
  { day: "Lördag", time: "10:00 – 14:00" },
  { day: "Söndag", time: "Stängt" },
];

const contactLinks = [
  { href: "tel:031164950", label: "031 – 16 49 50" },
  { href: "https://www.instagram.com/gudagott/", label: "@gudagott på Instagram" },
  { href: "https://www.facebook.com/Gudagott", label: "Gudagott på Facebook" },
];

const footerLinks = [
  ["Sortiment", "#sortiment"],
  ["Om oss", "#om-oss"],
  ["Hitta oss", "#hitta-oss"],
  ["Kontakt", "#kontakt"],
] as const;

export default function Home() {
  return (
    <main style={{ backgroundColor: C.cream, minHeight: "100vh" }}>
      <ImageScrollHero />

      <section id="om-oss" className="section section-offwhite">
        <div className="intro-shell">
          <motion.p
            className="section-label intro-eyebrow"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Majorna · Göteborg · Sedan 2009
          </motion.p>

          <motion.h2
            className="display-heading-italic intro-title"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Det gudagoda hantverkets butik
          </motion.h2>

          <motion.div
            className="intro-divider"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.p
            className="intro-body"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            En kort promenad från Mariaplan hittar du oss — en butik för dig som värdesätter
            äkta råvaror, snillrikt hantverk och den lilla extra detaljen som gör måltiden
            minnesvärd.
          </motion.p>
        </div>
      </section>

      <section id="sortiment" className="section section-cream">
        <div className="section-shell section-shell-wide">
          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="section-label section-header-label">Vad vi erbjuder</p>
            <h2 className="display-heading section-header-title">Sortiment</h2>
          </motion.div>

          <div className="sortiment-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="sortiment-card"
                variants={fadeUp}
                custom={index * 0.4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <div
                  className="sortiment-accent"
                  style={{ backgroundColor: category.accentColor }}
                />
                <h3 className="sortiment-card-title">{category.title}</h3>
                <p className="sortiment-card-description">{category.description}</p>
                <ul className="sortiment-list">
                  {category.items.map((item) => (
                    <li key={item} className="sortiment-list-item">
                      <span className="sortiment-list-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="parallax-section">
        <div className="parallax-image" />
        <div className="parallax-overlay" />
        <div className="parallax-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="parallax-label">Välkommen in</p>
            <h2 className="parallax-title">
              Gedigen kvalitet.
              <br />
              Äkta hantverk.
            </h2>
          </motion.div>
        </div>
      </section>

      <section id="hitta-oss" className="section section-offwhite">
        <div className="info-grid section-shell">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="section-label info-label">Öppettider</p>
            <div>
              {openingHours.map(({ day, time }) => (
                <div key={day} className="hours-row">
                  <span className="hours-day">{day}</span>
                  <span className="hours-time">{time}</span>
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
            <p className="section-label info-label">Hitta oss</p>
            <div className="address-block">
              <p className="address-line">Slottskogsgatan 42</p>
              <p className="address-line">414 53 Göteborg</p>
              <p className="address-subline">Majorna · Nära Mariaplans hållplats</p>
            </div>
            <div className="contact-links">
              {contactLinks.map(({ href, label }) => (
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

      <footer id="kontakt" className="site-footer">
        <h2 className="footer-title">GUDAGOTT</h2>
        <p className="footer-subtitle">Svenska Delikatesser · Majorna · Göteborg</p>

        <nav className="footer-nav">
          {footerLinks.map(([label, href]) => (
            <a key={label} href={href} className="footer-nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="footer-divider" />

        <p className="footer-meta">© {new Date().getFullYear()} Gudagott Ekonomisk Förening</p>
      </footer>
    </main>
  );
}
