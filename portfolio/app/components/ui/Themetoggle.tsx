"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const nextTheme = stored === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  const toggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: "36px", height: "36px", borderRadius: "8px",
        background: "var(--color-bg-elevated)",
        border: "1px solid var(--color-border-subtle)",
        color: "var(--color-text-muted)",
        cursor: "pointer", transition: "all 150ms",
        flexShrink: 0,
      }}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}