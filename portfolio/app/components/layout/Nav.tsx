"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/Themetoggle";


const links = [
  { label: "Work",    href: "#work"    },
  { label: "About",   href: "#about"   },
  { label: "Skills",  href: "#skills"  },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        background: scrolled ? "rgba(var(--bg-base-rgb, 10,10,10), 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border-subtle)" : "1px solid transparent",
      }}
    >
      <nav className="container" style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "64px",
      }}>
        <a href="#" style={{
          fontWeight: 700, fontSize: "1rem",
          letterSpacing: "-0.02em", color: "var(--color-text-primary)",
          textDecoration: "none", transition: "color 150ms",
        }}>
          MP
        </a>

        <ul style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}
          className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontSize: "0.875rem", color: "var(--color-text-muted)",
                textDecoration: "none", transition: "color 150ms",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <ThemeToggle />
          <a href="#contact" className="btn-primary nav-cta" style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}>
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "var(--color-text-muted)", display: "none",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: "hidden",
              background: "var(--color-bg-surface)",
              borderTop: "1px solid var(--color-border-subtle)",
            }}
          >
            <ul className="container" style={{
              display: "flex", flexDirection: "column", gap: "1rem",
              paddingBlock: "1.25rem", listStyle: "none", margin: 0,
            }}>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)} style={{
                    fontSize: "0.9375rem", color: "var(--color-text-muted)",
                    textDecoration: "none",
                  }}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <ThemeToggle />
                <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}>
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 767px) {
          .nav-links, .nav-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
}