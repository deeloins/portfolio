"use client";
import { motion } from "framer-motion";
import AnimatedHeading from "@/app/components/ui/AnimatedHeading";
import AnimatedLine from "@/app/components/ui/AnimatedLine";

const timeline = [
  { year: "2024 – Present", company: "Stringify Consulting",  role: "Full-Stack Engineer",    current: true  },
  { year: "2023 – 2024",    company: "Undoquest",             role: "Frontend Developer II",  current: false },
  { year: "2022 – 2023",    company: "Undoquest",             role: "Frontend Developer",     current: false },
  { year: "2022",           company: "Victor University",     role: "Frontend Developer",     current: false },
  { year: "2021 – Present", company: "Freelance",             role: "Independent Developer",  current: false },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedLine />
        <div style={{ paddingTop: "4rem", display: "grid", gap: "4rem" }} className="about-grid">

          {/* Left */}
          <div>
            <motion.p className="eyebrow"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }} transition={{ duration: 0.5 }}
              style={{ marginBottom: "1rem" }}>
              Background
            </motion.p>
            <AnimatedHeading
              text="About me"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 700,
                letterSpacing: "-0.02em", color: "var(--color-text-primary)",
                marginBottom: "2rem", display: "flex",
              }}
            />
            {[
              "I started freelancing in 2021 — taking on client projects, learning what production-quality code actually looks like, and building long-term relationships through reliability.",
              "Since then I've worked in EdTech, HealthTech, InsurTech, and consulting — building component libraries, refactoring legacy frontends, integrating APIs, and taking on full-stack work at Stringify Consulting.",
              "I have experience in both React and Angular — which is rare in the startup world — and I care deeply about accessibility, maintainability, and code other engineers can actually read.",
              "Based in Lagos, Nigeria. Open to remote roles worldwide.",
            ].map((para, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: "0.9375rem", color: "var(--color-text-muted)",
                  lineHeight: 1.8, marginBottom: "1rem",
                }}>
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right: timeline */}
          <div>
            <motion.p className="eyebrow"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }} transition={{ duration: 0.5 }}
              style={{ marginBottom: "2rem" }}>
              Career timeline
            </motion.p>
            <div style={{ position: "relative" }}>
              <motion.div
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute", left: "5px", top: 0, bottom: 0,
                  width: "1px", background: "var(--color-border-subtle)",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem", paddingLeft: "2rem" }}>
                {timeline.map((entry, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    style={{ position: "relative" }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.35, delay: i * 0.08 + 0.1 }}
                      style={{
                        position: "absolute", left: "-2rem", top: "4px",
                        width: "11px", height: "11px", borderRadius: "50%",
                        background: entry.current ? "var(--color-accent)" : "var(--color-bg-elevated)",
                        border: `2px solid ${entry.current ? "var(--color-accent)" : "var(--color-border)"}`,
                        boxShadow: entry.current ? "0 0 0 3px rgba(37,99,235,0.2)" : "none",
                      }}
                    />
                    <p style={{ fontSize: "0.75rem", fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-dim)", marginBottom: "0.25rem" }}>
                      {entry.year}
                    </p>
                    <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
                      {entry.company}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                      {entry.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}