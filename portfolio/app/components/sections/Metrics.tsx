"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 4,  suffix: "+", label: "Years in production"   },
  { value: 10, suffix: "+", label: "Clients & companies"   },
  { value: 3,  suffix: "",  label: "Industries"             },
  { value: 5,  suffix: "+", label: "Frameworks & runtimes" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView) { setCount(0); return; }
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Metrics() {
  return (
    <section style={{
      borderTop: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      background: "var(--color-bg-surface)",
    }}>
      <div className="container" style={{ paddingBlock: "3rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}
          className="metrics-grid"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ textAlign: "center" }}
            >
              <p style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800, letterSpacing: "-0.04em",
                color: "var(--color-text-primary)", lineHeight: 1, marginBottom: "0.375rem",
              }}>
                <Counter target={m.value} suffix={m.suffix} />
              </p>
              <p style={{
                fontSize: "0.75rem", fontFamily: "JetBrains Mono, monospace",
                color: "var(--color-text-dim)", textTransform: "uppercase", letterSpacing: "0.08em",
              }}>
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 640px) { .metrics-grid { grid-template-columns: repeat(4, 1fr) !important; } }
      `}</style>
    </section>
  );
}