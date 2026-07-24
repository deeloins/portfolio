"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const Ctx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark", toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("mp-theme") as Theme | null;
    if (stored) setTheme(stored);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mp-theme", theme);
  }, [theme, mounted]);

  return (
    <Ctx.Provider value={{ theme, toggle: () => setTheme(t => t === "dark" ? "light" : "dark") }}>
      {children}
    </Ctx.Provider>
  );
}

export const useTheme = () => useContext(Ctx);
