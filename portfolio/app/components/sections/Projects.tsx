"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    slug: "surebase",
    company: "Surebase",
    eyebrow: "InsurTech · Stringify Consulting",
    summary: "B2B insurance aggregation platform. Built the partner carousel and interactive flip card.",
    tags: ["React", "TypeScript", "Framer Motion"],
    link: "https://surebase.vercel.app",
    image: "/project-screenshots/surebase.jpg",
  },
  {
    slug: "hosc-global",
    company: "HOSC Global",
    eyebrow: "Commodities Trading · Freelance",
    summary: "Corporate site for a premier commodities trading firm with global reach.",
    tags: ["React", "Next.js", "Responsive Design"],
    link: "https://www.hoscglobal.com",
    image: "/project-screenshots/hosc-global.jpg",
  },
  {
    slug: "compenergies",
    company: "CompEnergies",
    eyebrow: "Energy Sector · Freelance",
    summary: "Corporate site for a petroleum products supplier across Nigeria.",
    tags: ["React", "Responsive Design", "Corporate Web"],
    link: "https://www.compenergies.com",
    image: "/project-screenshots/compenergies.jpg",
  },
  {
    slug: "spring-and-bells",
    company: "Spring & Bells",
    eyebrow: "Travel & Tourism · Freelance",
    summary: "Lagos-based travel agency specialising in luxury and adventure packages worldwide.",
    tags: ["React", "Next.js", "Responsive Design"],
    link: "https://springandbells.com",
    image: "/project-screenshots/spring-and-bells.jpg",
  },
];

function ProjectCard({ project, i }: { project: typeof projects[0]; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "12px",
        border: `1px solid ${hovered ? "var(--color-border)" : "var(--color-border-subtle)"}`,
        background: "var(--color-bg-surface)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 200ms",
        /* Fixed height so all cards are same size */
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* Screenshot reveal */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          >
            <Image
              src={project.image}
              alt={`${project.company} screenshot`}
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.05) 100%)",
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card content always above image */}
      <div style={{
        position: "relative", zIndex: 2,
        padding: "1.25rem",
        display: "flex", flexDirection: "column", gap: "0.625rem",
      }}>
        <p className="eyebrow" style={{
          color: hovered ? "rgba(147,197,253,0.9)" : "var(--color-accent)",
          transition: "color 200ms",
        }}>
          {project.eyebrow}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
          <h3 style={{
            fontSize: "1rem", fontWeight: 600,
            color: hovered ? "#f9fafb" : "var(--color-text-primary)",
            transition: "color 200ms", margin: 0,
          }}>
            {project.company}
          </h3>
          <a
            href={project.link} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              color: hovered ? "rgba(249,250,251,0.7)" : "var(--color-text-dim)",
              transition: "color 200ms", flexShrink: 0,
            }}
          >
            <ExternalLink size={15} />
          </a>
        </div>

        <p style={{
          fontSize: "0.8125rem", lineHeight: 1.65,
          color: hovered ? "rgba(249,250,251,0.75)" : "var(--color-text-muted)",
          transition: "color 200ms",
        }}>
          {project.summary}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "0.25rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              display: "inline-block",
              fontSize: "0.7rem", fontFamily: "JetBrains Mono, monospace",
              padding: "0.125rem 0.5rem", borderRadius: "4px",
              background: hovered ? "rgba(255,255,255,0.12)" : "var(--color-bg-elevated)",
              border: `1px solid ${hovered ? "rgba(255,255,255,0.18)" : "var(--color-border-subtle)"}`,
              color: hovered ? "rgba(249,250,251,0.8)" : "var(--color-text-muted)",
              transition: "all 200ms",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section style={{
      paddingBlock: "6rem",
      borderTop: "1px solid var(--color-border-subtle)",
      background: "var(--color-bg-surface)",
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
        >
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Freelance</p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 700,
            letterSpacing: "-0.02em", color: "var(--color-text-primary)", marginBottom: "0.75rem",
          }}>
            Client projects
          </h2>
          <p style={{
            fontSize: "0.9375rem", color: "var(--color-text-muted)",
            maxWidth: "36rem", lineHeight: 1.7,
          }}>
            End-to-end builds delivered independently — brief, design, build, and deployment.{" "}
            <span style={{ color: "var(--color-text-dim)" }}>Hover to preview.</span>
          </p>
        </motion.div>

        {/* 2-column grid — avoids orphan on 4 items */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }} className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} i={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}