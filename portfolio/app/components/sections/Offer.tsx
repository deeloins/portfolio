"use client";
import { motion } from "framer-motion";
import { OFFER } from "@/app/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Offer() {
  return (
    <section id="offer" style={{ background: "var(--sand)", overflow: "hidden" }}>
      {/* Massive heading */}
      <div style={{ padding: "5rem 3rem 2rem", overflow: "hidden" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center",
            border: "1px solid rgba(0,0,0,0.2)", borderRadius: "9999px",
            padding: "0.3rem 0.875rem", marginBottom: "1.5rem",
          }}
        >
          <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-dark)" }}>
            CAPABILITIES OVERVIEW
          </span>
        </motion.div>

        <div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{
              fontSize: "clamp(4rem, 12vw, 11rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
              color: "var(--text-dark)",
            }}
          >
            What
          </motion.h2>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
            style={{
              fontSize: "clamp(4rem, 12vw, 11rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
              color: "var(--text-dark)",
            }}
          >
            I Offer.
          </motion.h2>
        </div>
      </div>

      {/* Large flowing paragraph */}
      <div style={{ padding: "2rem 3rem 4rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 700,
            lineHeight: 1.5,
            color: "var(--text-dark)",
            maxWidth: "900px",
            letterSpacing: "-0.02em",
          }}
        >
          Strategy, precision, and development combined — turning{" "}
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.25rem",
            background: "#f5ff00", color: "#131313",
            borderRadius: "8px", padding: "0 0.5rem",
            fontSize: "0.85em", fontWeight: 700,
          }}>⚡ React</span>
          {" "}your vision into a powerful digital experience that feels effortless.
        </motion.p>
      </div>

      {/* Capabilities grid */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", padding: "0 3rem 6rem" }}>
        {OFFER.map((item, i) => (
          <div key={i}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.04, ease: EASE }}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 1fr",
                gap: "1.5rem",
                alignItems: "start",
                paddingBlock: "2rem",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                cursor: "default",
              }}
              className="offer-row"
              whileHover={{ x: 6 }}
            >
              <span style={{
                fontSize: "0.72rem", fontFamily: "JetBrains Mono, monospace",
                color: "var(--text-muted)", paddingTop: "0.3rem",
              }}>
                {item.num}
              </span>
              <h3 style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                fontWeight: 800, color: "var(--text-dark)",
                letterSpacing: "-0.02em",
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.75 }}>
                {item.desc}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .offer-row { grid-template-columns: 40px 1fr !important; }
          .offer-row > :last-child { grid-column: 2 !important; }
        }
      `}</style>
    </section>
  );
}
