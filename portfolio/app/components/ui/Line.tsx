"use client";
import { motion } from "framer-motion";

interface Props {
  delay?: number;
  axis?: "x" | "y";
  style?: React.CSSProperties;
}

export default function Line({ delay = 0, axis = "x", style }: Props) {
  const isX = axis === "x";
  return (
    <motion.div
      initial={{ [isX ? "scaleX" : "scaleY"]: 0 }}
      whileInView={{ [isX ? "scaleX" : "scaleY"]: 1 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        transformOrigin: isX ? "left center" : "top center",
        background: "var(--border)",
        ...(isX ? { height: "1px", width: "100%" } : { width: "1px", height: "100%" }),
        ...style,
      }}
    />
  );
}
