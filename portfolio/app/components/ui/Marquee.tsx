"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
}

export default function Marquee({ items, speed = 35, direction = "left" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div style={{
      overflow: "hidden",
      borderTop: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      paddingBlock: "0.75rem",
      maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    }}>
      <div style={{
        display: "flex",
        width: "max-content",
        animation: `marquee-${direction} ${speed}s linear infinite`,
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1.5rem",
            paddingInline: "1.5rem",
            fontSize: "0.8125rem",
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-dim)",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}>
            {item}
            <span style={{ color: "var(--color-accent)", fontSize: "0.5rem" }}>◆</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}