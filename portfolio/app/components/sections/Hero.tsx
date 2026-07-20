"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

const roles = ["Full-Stack Engineer", "React Developer", "UI/UX Minded", "Frontend Specialist"];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  useEffect(() => {
    setDisplay(words[wordIndex].slice(0, charIndex));
  }, [charIndex, wordIndex, words]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Noise texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03, zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Ghost MP watermark */}
      <div style={{
        position: "absolute", right: "-2rem", top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(16rem, 30vw, 28rem)",
        fontWeight: 900,
        color: "transparent",
        WebkitTextStroke: "1px rgba(255,255,255,0.03)",
        lineHeight: 1,
        userSelect: "none",
        zIndex: 0,
        letterSpacing: "-0.05em",
        pointerEvents: "none",
      }}>
        MP
      </div>

      {/* Accent blob */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "20%", left: "55%",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingBlock: "6rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
        >
          {/* Left: text */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                marginBottom: "2rem",
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                border: "1px solid rgba(34,197,94,0.2)",
                background: "rgba(34,197,94,0.05)",
              }}
            >
              <span style={{
                width: "7px", height: "7px", borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
                display: "inline-block",
                animation: "pulse-green 2s ease-in-out infinite",
              }} />
              <span style={{
                fontSize: "0.75rem", fontFamily: "var(--font-mono)",
                color: "#4ade80", letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}>
                Available for work · Lagos, Nigeria
              </span>
            </motion.div>

            {/* Name */}
            <div style={{ marginBottom: "1.5rem", lineHeight: 0.92 }}>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 7rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--color-text-primary)",
                  display: "block",
                }}
              >
                Michael
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 7rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(249,250,251,0.2)",
                  display: "block",
                }}
              >
                Podeke
              </motion.h1>
            </div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                marginBottom: "1.75rem",
              }}
            >
              <span style={{
                width: "2rem", height: "2px",
                background: "var(--color-accent)",
                display: "inline-block", flexShrink: 0,
                borderRadius: "1px",
              }} />
              <span style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "var(--color-accent)",
                fontWeight: 500,
                fontFamily: "var(--font-mono)",
                minWidth: "20ch",
              }}>
                {typed}
                <span style={{
                  display: "inline-block", width: "2px", height: "1.1em",
                  background: "var(--color-accent)", marginLeft: "2px",
                  verticalAlign: "text-bottom",
                  animation: "blink 1s step-end infinite",
                }} />
              </span>
            </motion.div>

            {/* Sub copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                maxWidth: "34rem",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              I turn complex requirements into clean, maintainable interfaces.
              From Figma to production — I own the frontend, and the backend that powers it.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}
            >
              <a href="#work" className="btn-primary" style={{ fontSize: "0.9375rem", padding: "0.75rem 1.5rem" }}>
                View my work <ArrowRight size={16} />
              </a>
              <a href="/cv.pdf" className="btn-ghost" style={{ fontSize: "0.9375rem", padding: "0.75rem 1.5rem" }}>
                <Download size={15} /> Download CV
              </a>
            </motion.div>

            {/* Stack tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
            >
              {["React", "Next.js", "TypeScript", "Node.js", "Angular", "SQL"].map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              {/* Decorative ring */}
              <div style={{
                position: "absolute", inset: "-8px",
                borderRadius: "20px",
                border: "1px solid var(--color-border-subtle)",
                zIndex: 0,
              }} />
              {/* Accent corner */}
              <div style={{
                position: "absolute", bottom: "-12px", right: "-12px",
                width: "80px", height: "80px",
                borderRadius: "12px",
                background: "var(--color-accent)",
                opacity: 0.15,
                zIndex: 0,
              }} />
              {/* Photo */}
              <div style={{
                width: "clamp(240px, 30vw, 320px)",
                height: "clamp(300px, 38vw, 420px)",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
                border: "1px solid var(--color-border-subtle)",
              }}>
                <Image
                  src="/photo.jpg"
                  alt="Michael Podeke"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                  sizes="(max-width: 768px) 240px, 320px"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", bottom: "1.5rem", left: "-3rem",
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "10px",
                  padding: "0.625rem 0.875rem",
                  zIndex: 2,
                  backdropFilter: "blur(8px)",
                }}
              >
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.1rem" }}>4+ Years</p>
                <p style={{ fontSize: "0.65rem", color: "var(--color-text-dim)", fontFamily: "var(--font-mono)" }}>in production</p>
              </motion.div>
              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{
                  position: "absolute", top: "1.5rem", right: "-2.5rem",
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "10px",
                  padding: "0.625rem 0.875rem",
                  zIndex: 2,
                  backdropFilter: "blur(8px)",
                }}
              >
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.1rem" }}>10+ Clients</p>
                <p style={{ fontSize: "0.65rem", color: "var(--color-text-dim)", fontFamily: "var(--font-mono)" }}>delivered</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: "absolute", bottom: "2rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        }}
      >
        <span style={{
          fontSize: "0.65rem", fontFamily: "var(--font-mono)",
          color: "var(--color-text-dim)", letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px", height: "2.5rem",
            background: "linear-gradient(to bottom, var(--color-border), transparent)",
          }}
        />
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0.08); }
        }
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr auto !important;
          }
        }
      `}</style>
    </section>
  );
}