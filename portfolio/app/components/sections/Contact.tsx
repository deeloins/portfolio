"use client";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";
import AnimatedHeading from "@/app/components/ui/AnimatedHeading";
import AnimatedLine from "@/app/components/ui/AnimatedLine";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mpodeke@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <AnimatedLine />
        <div style={{ paddingTop: "4rem", maxWidth: "48rem" }}>
          <motion.p className="eyebrow"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }} transition={{ duration: 0.5 }}
            style={{ marginBottom: "1rem" }}>
            Get in touch
          </motion.p>

          <AnimatedHeading
            text="Let's work together"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
              letterSpacing: "-0.03em", color: "var(--color-text-primary)",
              marginBottom: "1.5rem", lineHeight: 1.1,
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "3rem" }}>
            Open to full-stack roles, frontend contracts, and remote opportunities.
            I usually respond within 24 hours.
          </motion.p>

          {/* Email copy button */}
          <motion.button
            onClick={copyEmail}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              width: "100%", padding: "1.25rem 1.5rem",
              background: "var(--color-bg-surface)",
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "12px", cursor: "pointer",
              marginBottom: "1rem",
              transition: "border-color 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border-subtle)")}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Mail size={18} color="var(--color-accent)" />
              <span style={{ fontSize: "0.9375rem", color: "var(--color-text-primary)", fontWeight: 500 }}>
                mpodeke@gmail.com
              </span>
            </div>
            <span style={{
              fontSize: "0.75rem", fontFamily: "JetBrains Mono, monospace",
              color: copied ? "#22c55e" : "var(--color-text-dim)",
              transition: "color 200ms",
            }}>
              {copied ? "Copied!" : "Click to copy"}
            </span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "4rem" }}
          >
            <a href="https://www.linkedin.com/in/michael-podeke/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <ExternalLink size={15} /> LinkedIn
            </a>
            <a href="https://github.com/deeloins" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <ExternalLink size={15} /> GitHub
            </a>
            <a href="/cv.pdf" className="btn-ghost">
              <ArrowRight size={15} /> Download CV
            </a>
          </motion.div>

          <AnimatedLine />
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              paddingTop: "1.5rem", fontSize: "0.75rem",
              fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-dim)",
            }}>
            Michael Podeke · Lagos, Nigeria · {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </section>
  );
}