"use client";
import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function AnimatedHeading({ text, className, style, delay = 0 }: Props) {
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "flex", flexWrap: "wrap", gap: "0.25em", ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          initial={{ opacity: 0, y: 35, rotateX: -15 }}
          whileInView={{
            opacity: 1, y: 0, rotateX: 0,
            transition: { duration: 0.55, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] },
          }}
          viewport={{ once: false, margin: "-80px" }}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}