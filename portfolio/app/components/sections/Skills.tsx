"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/data";

export default function Skills() {
  return (
    <section id="skills" className="section bg-bg-surface border-y border-border-subtle">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="eyebrow mb-3">What I work with</p>
          <h2 className="text-h1 font-bold text-text-primary">Technical skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4 pb-2 border-b border-border-subtle">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
