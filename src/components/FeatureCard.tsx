"use client";
import Link from "next/link";
import type { Feature } from "@/data/features";

export default function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <Link
      href={`/product/${feature.slug}`}
      style={{
        background: "var(--bg)",
        padding: "36px 32px",
        textDecoration: "none",
        display: "block",
        transition: "background 0.2s",
        border: "1px solid var(--border)",
        marginTop: "-1px",
        marginLeft: "-1px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
    >
      <div
        style={{
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          color: "var(--text-dim)",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3
        className="display"
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--text)",
          margin: "0 0 10px",
          lineHeight: 1.2,
        }}
      >
        {feature.name}
      </h3>

      <p
        style={{
          fontSize: "0.875rem",
          lineHeight: 1.75,
          color: "var(--text-muted)",
          margin: "0 0 24px",
        }}
      >
        {feature.tagline}
      </p>

      <span
        style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          borderBottom: "1px solid var(--text-muted)",
          paddingBottom: "1px",
        }}
      >
        Read more →
      </span>
    </Link>
  );
}
