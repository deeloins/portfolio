"use client";
import { motion } from "framer-motion";
import { wordReveal, staggerContainer, EASE } from "@/app/lib/motion";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function WordReveal({
  text, className, style, stagger = 0.08, delay = 0, as: Tag = "h2",
}: Props) {
  const words = text.split(" ");
  return (
    <motion.div
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-80px" }}
      style={{ display: "flex", flexWrap: "wrap", columnGap: "0.3em", rowGap: "0.05em", ...style }}
      className={className}
    >
      {words.map((word, i) => (
        <div key={i} style={{ overflow: "hidden", display: "inline-block" }}>
          <motion.span
            variants={wordReveal}
            style={{
              display: "inline-block",
              transformOrigin: "bottom center",
              perspective: "400px",
            }}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}
