"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What do you specialise in?",
    a: "I specialise in building fast, accessible frontend interfaces with React and Next.js, and increasingly full-stack work with Node.js, REST APIs, and SQL. I'm comfortable across the entire delivery chain — from Figma handoff to production deployment.",
  },
  {
    q: "Are you available for freelance or contract work?",
    a: "Yes. I'm open to freelance projects, short-term contracts, and remote full-time roles. If you have something in mind, the best first step is to send me an email and we can talk through the scope.",
  },
  {
    q: "What does your typical project process look like?",
    a: "It usually starts with a conversation about goals, timeline, and constraints. From there I scope the work, align on deliverables, and build in stages — sharing progress as I go so feedback is easy and nothing drifts. I hand off clean, well-structured code with clear documentation.",
  },
  {
    q: "Can you work from a Figma design?",
    a: "Yes — Figma to production is a core part of my workflow. I know how to read design files accurately, ask the right questions early, and translate layouts pixel-perfectly without losing interactivity or responsiveness.",
  },
  {
    q: "Do you work with teams or solo clients?",
    a: "Both. I've worked embedded in product teams at startups (Undoquest, Stringify Consulting) and independently for solo founders and small businesses. I adapt to whatever workflow and communication style the project needs.",
  },
  {
    q: "What industries have you worked in?",
    a: "InsurTech, HealthTech, EdTech, Energy, Travel and Tourism, and Consulting. The variety means I can get up to speed quickly in new domains and understand that different industries have different trust and compliance requirements.",
  },
  {
    q: "How do I get in touch?",
    a: "Email is best — mpodeke@gmail.com. I usually respond within 24 hours. You can also reach me on LinkedIn if that's easier.",
  },
];

function FAQItem({ item, isOpen, onToggle }: {
  item: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          paddingBlock: "1.25rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 500,
            color: isOpen ? "var(--color-text-primary)" : "var(--color-text-muted)",
            transition: "color 200ms",
          }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, color: isOpen ? "var(--color-accent)" : "var(--color-text-dim)" }}
        >
          <Plus size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.75,
                paddingBottom: "1.25rem",
                maxWidth: "48rem",
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      style={{
        paddingBlock: "var(--spacing-section)",
        borderTop: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>FAQ</p>
            <h2
              className="text-h1"
              style={{ fontWeight: 700, color: "var(--color-text-primary)", maxWidth: "24rem" }}
            >
              Got any questions?
            </h2>
          </motion.div>

          {/* Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ borderTop: "1px solid var(--color-border-subtle)" }}
          >
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}