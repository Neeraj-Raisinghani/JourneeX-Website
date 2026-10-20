"use client";
import { useState } from "react";
import Link from "next/link";
import { featuresByCategory, categoryOrder } from "@/data/features";

const ALL = "All";
const tabs = [ALL, ...categoryOrder];

export default function FeaturesTabbedList() {
  const [active, setActive] = useState(ALL);

  const features =
    active === ALL
      ? categoryOrder.flatMap((cat) => featuresByCategory[cat] ?? [])
      : featuresByCategory[active] ?? [];

  return (
    <div>
      {/* Tab bar */}
      <div
        style={{
          display: "flex",
          gap: "0",
          borderBottom: "1px solid var(--border)",
          marginBottom: "0",
          overflowX: "auto",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: "14px 24px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "transparent",
              border: "none",
              borderBottom: active === tab ? "2px solid var(--text)" : "2px solid transparent",
              color: active === tab ? "var(--text)" : "var(--text-muted)",
              cursor: "pointer",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
              marginBottom: "-1px",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Feature rows */}
      {features.map((f, i, all) => (
        <Link
          key={f.slug}
          href={`/product/${f.slug}`}
          style={{
            display: "grid",
            gridTemplateColumns: "52px 1fr auto auto 40px",
            alignItems: "center",
            gap: "0 32px",
            padding: "22px 0",
            borderBottom: "1px solid var(--border)",
            textDecoration: "none",
            background: "transparent",
            cursor: "pointer",
          }}
          className="feature-row"
        >
          <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--text-dim)", textTransform: "uppercase", flexShrink: 0 }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="display" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.2, transition: "color 0.2s" }}>
            {f.name}
          </span>
          <span className="feature-row-cat" style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", whiteSpace: "nowrap", flexShrink: 0 }}>
            {f.category}
          </span>
          <span className="feature-row-tagline" style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5, maxWidth: "320px", textAlign: "right", opacity: 0.6, transition: "opacity 0.2s" }}>
            {f.tagline}
          </span>
          <span style={{ fontSize: "1rem", color: "var(--text-dim)", transition: "color 0.2s, transform 0.2s", transform: "translateX(0)", display: "block", textAlign: "right", flexShrink: 0 }}>→</span>
        </Link>
      ))}
    </div>
  );
}
