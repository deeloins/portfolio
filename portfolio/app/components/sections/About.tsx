"use client";

import { motion } from "framer-motion";
import { timeline } from "@/app/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mb-3">Background</p>
            <h2 className="text-h1 font-bold text-text-primary mb-6">About me</h2>
            <div className="space-y-4 text-sm text-text-muted leading-relaxed">
              <p>
                I started out freelancing in 2021 — taking on client projects, figuring out
                what production-quality code actually looks like, and building long-term
                relationships through reliability. That hands-on foundation is something
                I carry into every role.
              </p>
              <p>
                Since then I've worked in EdTech, HealthTech, and consulting — building
                component libraries, refactoring legacy frontends, integrating APIs, and
                more recently taking on full-stack work at Stringify. I was promoted at
                Undoquest because I earned it, and I'm in the middle of a deliberate
                transition from frontend specialist to full-stack engineer.
              </p>
              <p>
                I have experience in both React and Angular — which is rarer than it sounds
                in the startup world — and I care about accessibility, maintainability, and
                code that other engineers can actually read.
              </p>
              <p>
                Based in Lagos, Nigeria. Open to remote roles worldwide.
              </p>
            </div>
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="eyebrow mb-6">Career timeline</p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border-subtle" />

              <div className="space-y-8 pl-8">
                {timeline.map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div
                      className={`absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                        entry.current
                          ? "bg-accent border-accent"
                          : "bg-bg-base border-border"
                      }`}
                    />
                    <p className="text-xs font-mono text-text-dim mb-0.5">{entry.year}</p>
                    <p className="text-sm font-semibold text-text-primary">{entry.company}</p>
                    <p className="text-sm text-text-muted">{entry.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
