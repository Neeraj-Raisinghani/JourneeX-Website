"use client";
import { useState } from "react";

type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items = [] }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={item.q}
          style={{
            borderBottom: "1px solid var(--border)",
            paddingBottom: "0",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "20px 0",
              textAlign: "left",
            }}
          >
            <span
              className="display"
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}
            >
              {item.q}
            </span>
            <span
              style={{
                flexShrink: 0,
                width: "22px",
                height: "22px",
                border: "1.5px solid var(--border)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: open === i ? "var(--text)" : "transparent",
                transition: "background 0.2s, border-color 0.2s",
                marginTop: "2px",
              }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                style={{
                  transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <line x1="5" y1="1" x2="5" y2="9" stroke={open === i ? "#fff" : "var(--text-muted)"} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="1" y1="5" x2="9" y2="5" stroke={open === i ? "#fff" : "var(--text-muted)"} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>

          <div
            style={{
              overflow: "hidden",
              maxHeight: open === i ? "300px" : "0px",
              opacity: open === i ? 1 : 0,
              transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.85,
                color: "var(--text-muted)",
                margin: "0 0 20px",
                paddingRight: "32px",
              }}
            >
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
