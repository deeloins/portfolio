import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5 } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const staggerContainer = (stagger = 0.1, delay = 0): Variants => ({
  hidden: {},
  show:   { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 32, rotateX: -12 },
  show:   { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease: EASE } },
};

export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  show:   { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
};

export const drawLineY: Variants = {
  hidden: { scaleY: 0 },
  show:   { scaleY: 1, transition: { duration: 1.1, ease: EASE } },
};
