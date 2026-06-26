"use client";

import { motion } from "framer-motion";
import { metrics } from "@/app/data";

export default function Metrics() {
  return (
    <section className="border-y border-border-subtle bg-bg-surface">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-text-primary tracking-tight mb-1">{m.value}</p>
              <p className="text-xs text-text-dim uppercase tracking-wider font-mono">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
