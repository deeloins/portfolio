"use client";
import { motion } from "framer-motion";

export default function AnimatedLine({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        height: "1px",
        background: "var(--color-border-subtle)",
        marginBlock: "0",
      }}
    />
  );
}