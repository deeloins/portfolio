"use client";

import { motion } from "framer-motion";
import { hero } from "@/app/data";
import { ArrowRight, Download } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#f9fafb 1px, transparent 1px), linear-gradient(90deg, #f9fafb 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 py-24">
        <motion.p {...fadeUp(0)} className="eyebrow mb-6">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-display font-bold text-text-primary text-balance max-w-3xl mb-6"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-body text-text-muted max-w-xl mb-10 leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-16">
          {hero.ctas.map((cta) =>
            cta.variant === "primary" ? (
              <a key={cta.label} href={cta.href} className="btn-primary">
                {cta.label}
                <ArrowRight size={15} />
              </a>
            ) : (
              <a key={cta.label} href={cta.href} className="btn-ghost">
                <Download size={15} />
                {cta.label}
              </a>
            )
          )}
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-2">
          {hero.stack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-base to-transparent pointer-events-none" />
    </section>
  );
}
