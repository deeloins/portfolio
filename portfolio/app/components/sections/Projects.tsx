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

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "var(--border-radius-card)",
        border: "1px solid var(--color-border-subtle)",
        background: "var(--color-bg-surface)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 200ms",
        borderColor: hovered ? "var(--color-border)" : "var(--color-border-subtle)",
      }}
    >
      {/* Screenshot reveal on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
            }}
          >
            <Image
              src={project.image}
              alt={`${project.company} screenshot`}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Dark overlay so text stays readable */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          minHeight: "180px",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <p className="eyebrow" style={{ marginBottom: "0.375rem" }}>
            {project.eyebrow}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: hovered ? "#f9fafb" : "var(--color-text-primary)",
                transition: "color 200ms",
              }}
            >
              {project.company}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                color: hovered ? "#f9fafb" : "var(--color-text-dim)",
                transition: "color 200ms",
                flexShrink: 0,
              }}
              aria-label={`Visit ${project.company}`}
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <p
          style={{
            fontSize: "0.8125rem",
            color: hovered ? "rgba(249,250,251,0.8)" : "var(--color-text-muted)",
            lineHeight: 1.6,
            transition: "color 200ms",
          }}
        >
          {project.summary}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="tag"
              style={hovered ? {
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.2)",
                color: "rgba(249,250,251,0.8)",
              } : {}}
            >
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
    <section
      style={{
        paddingBlock: "var(--spacing-section)",
        borderTop: "1px solid var(--color-border-subtle)",
        background: "var(--color-bg-surface)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
        >
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Freelance</p>
          <h2
            className="text-h1"
            style={{ fontWeight: 700, color: "var(--color-text-primary)" }}
          >
            Client projects
          </h2>
          <p style={{
            fontSize: "0.9375rem",
            color: "var(--color-text-muted)",
            marginTop: "0.75rem",
            maxWidth: "36rem",
          }}>
            End-to-end builds delivered independently — brief, design, build, and deployment. Hover to preview.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
