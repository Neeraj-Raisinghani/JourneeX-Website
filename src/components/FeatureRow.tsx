"use client";
import Link from "next/link";
import { useState } from "react";
import type { Feature } from "@/data/features";

export default function FeatureRow({ feature: f, index: i }: { feature: Feature; index: number; total: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/product/${f.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "52px 1fr auto auto 40px",
        alignItems: "center",
        gap: "0 32px",
        padding: "22px 0",
        borderBottom: "1px solid var(--border)",
        textDecoration: "none",
        background: hovered ? "var(--surface)" : "transparent",
        transition: "background 0.2s",
        cursor: "pointer",
        paddingLeft: hovered ? "16px" : "0",
        paddingRight: hovered ? "16px" : "0",
        marginLeft: hovered ? "-16px" : "0",
        marginRight: hovered ? "-16px" : "0",
      }}
      className="feature-row"
    >
      {/* Index */}
      <span
        style={{
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          color: "var(--text-dim)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        {String(i + 1).padStart(2, "0")}
      </span>

      {/* Feature name */}
      <span
        className="display"
        style={{
          fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: hovered ? "var(--text)" : "var(--text)",
          lineHeight: 1.2,
          transition: "color 0.2s",
        }}
      >
        {f.name}
        {hovered && (
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              background: "var(--highlight)",
              borderRadius: "50%",
              marginLeft: "10px",
              verticalAlign: "middle",
              marginBottom: "2px",
            }}
          />
        )}
      </span>

      {/* Category */}
      <span
        style={{
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-dim)",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
        className="feature-row-cat"
      >
        {f.category}
      </span>

      {/* Tagline */}
      <span
        style={{
          fontSize: "0.875rem",
          color: "var(--text-muted)",
          lineHeight: 1.5,
          maxWidth: "320px",
          textAlign: "right",
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.2s",
        }}
        className="feature-row-tagline"
      >
        {f.tagline}
      </span>

      {/* Arrow */}
      <span
        style={{
          fontSize: "1rem",
          color: hovered ? "var(--text)" : "var(--text-dim)",
          transition: "color 0.2s, transform 0.2s",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          display: "block",
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        →
      </span>
    </Link>
  );
}
