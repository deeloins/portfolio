"use client";
import { motion } from "framer-motion";
import AnimatedHeading from "@/app/components/ui/AnimatedHeading";
import AnimatedLine from "@/app/components/ui/AnimatedLine";

const skills = {
  Frontend:  ["React", "Next.js", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Responsive Design", "Accessibility (WCAG)"],
  Backend:   ["Node.js", "Express", "REST API Design", "SQL", "PostgreSQL", "MySQL"],
  Tooling:   ["Git & GitHub", "Figma → Code", "VS Code", "CI/CD", "Agile / Scrum", "Code Review"],
  Soft:      ["Client Communication", "Cross-functional Collaboration", "Architecture Ownership", "Long-term Product Thinking"],
};

export default function Skills() {
  return (
    <section id="skills" className="section" style={{
      borderTop: "1px solid var(--color-border-subtle)",
      background: "var(--color-bg-surface)",
    }}>
      <div className="container">
        <AnimatedLine />
        <div style={{ paddingTop: "4rem" }}>
          <motion.p className="eyebrow"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }} transition={{ duration: 0.5 }}
            style={{ marginBottom: "1rem" }}>
            What I work with
          </motion.p>
          <AnimatedHeading
            text="Technical skills"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 700,
              letterSpacing: "-0.02em", color: "var(--color-text-primary)",
              marginBottom: "3rem",
            }}
          />

          <div style={{ display: "grid", gap: "2.5rem" }} className="skills-grid">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <p style={{
                    fontSize: "0.7rem", fontFamily: "JetBrains Mono, monospace",
                    color: "var(--color-accent)", textTransform: "uppercase",
                    letterSpacing: "0.1em", fontWeight: 500,
                  }}>
                    {category}
                  </p>
                  <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
                    style={{ flex: 1, height: "1px", background: "var(--color-border-subtle)" }}
                  />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {items.map((skill, j) => (
                    <motion.span key={skill} className="tag"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3, delay: i * 0.05 + j * 0.03 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}