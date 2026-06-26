"use client";

import { motion } from "framer-motion";
import { work } from "@/app/data";
import { ExternalLink } from "lucide-react";

function CaseStudyCard({ project, i }: { project: typeof work[0]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.08 }}
      className="card"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <p className="eyebrow mb-2">{project.eyebrow}</p>
          <h3 className="text-h3 font-semibold mb-0.5" style={{ color: "var(--color-text-primary)" }}>
            {project.company}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--color-text-dim)" }}>
            {project.role} · {project.period}
          </p>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ fontSize: "0.8rem", padding: "0.4rem 0.875rem", width: "fit-content", flexShrink: 0 }}
          >
            <ExternalLink size={13} />
            View site
          </a>
        )}
      </div>

      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "1.25rem", maxWidth: "48rem" }}>
        {project.summary}
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1.25rem",
        borderTop: "1px solid var(--color-border-subtle)",
        paddingTop: "1.25rem",
        marginBottom: "1.25rem",
      }}>
        {[
          { label: "Problem",  text: project.problem  },
          { label: "Approach", text: project.approach },
          { label: "Outcome",  text: project.outcome  },
        ].map(({ label, text }) => (
          <div key={label}>
            <p style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--color-text-dim)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.375rem" }}>
              {label}
            </p>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              {text}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}

function FreelanceCard({ project, i }: { project: typeof work[0]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.07 }}
      className="card"
      style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow mb-1">{project.eyebrow}</p>
          <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
            {project.company}
          </h3>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-text-dim)", flexShrink: 0, marginTop: "2px" }}
            aria-label={`View ${project.company}`}
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>

      <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
        {project.summary}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "auto" }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Work() {
  const featured  = work.filter((w) => w.featured);
  const freelance = work.filter((w) => !w.featured);

  return (
    <section id="work" className="section">
      <div className="container">

        {/* ── Featured case studies ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className="text-h1 font-bold" style={{ color: "var(--color-text-primary)" }}>
            Case studies
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 mb-24">
          {featured.map((project, i) => (
            <CaseStudyCard key={project.slug} project={project} i={i} />
          ))}
        </div>

        {/* ── Freelance projects ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="eyebrow mb-3">Freelance</p>
          <h2 className="text-h1 font-bold" style={{ color: "var(--color-text-primary)" }}>
            Client projects
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", marginTop: "0.75rem", maxWidth: "36rem" }}>
            End-to-end builds delivered independently — brief, design, build, and deployment.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {freelance.map((project, i) => (
            <FreelanceCard key={project.slug} project={project} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
