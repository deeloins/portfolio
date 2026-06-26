// In Tailwind v4, design tokens are defined in globals.css via @theme.
// This file is kept for any plugin additions in future.
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
