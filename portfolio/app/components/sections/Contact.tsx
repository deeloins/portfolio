"use client";

import { motion } from "framer-motion";
import { contact } from "@/app/data";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-border-subtle">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-3">Get in touch</p>
          <h2 className="text-h1 font-bold text-text-primary mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-text-muted text-sm leading-relaxed mb-10">
            {contact.availability} I usually respond within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href={`mailto:${contact.email}`} className="btn-primary">
              <Mail size={15} />
              Send an email
              <ArrowRight size={15} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <ExternalLink size={15} />
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <ExternalLink size={15} />
              GitHub
            </a>
          </div>

          <div className="divider pt-8">
            <p className="text-xs text-text-dim font-mono">
              Michael Podeke · Lagos, Nigeria · {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
