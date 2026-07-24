"use client";
import { useTheme } from "@/app/lib/theme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} aria-label="Toggle theme" style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: "34px", height: "34px", borderRadius: "8px",
      background: "var(--bg-3)", border: "1px solid var(--border)",
      color: "var(--text-2)", cursor: "pointer",
      transition: "background 150ms, border-color 150ms, color 150ms",
      flexShrink: 0,
    }}>
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
