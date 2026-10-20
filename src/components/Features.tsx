"use client";
import Link from "next/link";
import { features } from "@/data/features";
import ScrollReveal from "./ScrollReveal";

export default function Features() {
  const preview = features.slice(0, 6);

  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        {/* Heading */}
        <ScrollReveal>
          <div className="page-heading-parent">
            <h1>Features</h1>
            <hr className="line-grey" />
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "flex-start",
          }}
          className="features-layout"
        >
          {/* Left: intro text */}
          <ScrollReveal delay={80}>
            <div>
              <p
                className="display"
                style={{
                  fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                  fontStyle: "italic",
                  lineHeight: 1.75,
                  color: "var(--text-muted)",
                  margin: "0 0 32px 0",
                  fontWeight: 400,
                }}
              >
                Everything you need to{" "}
                <span className="highlighted-text">actually journal</span>.
                From AI reflections to habit tracking - built around one thing:
                making it easier to{" "}
                <span className="highlighted-text">show up and write</span>.
              </p>
              <Link href="/product" className="btn-ghost">
                View All Features
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: feature list */}
          <div>
            {preview.map((f, i) => (
              <ScrollReveal key={f.slug} delay={i * 60}>
                <Link
                  href={`/product/${f.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "16px",
                    borderBottom: "1px solid var(--border)",
                    padding: "20px 0",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "padding-left 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = "8px"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = "0"; }}
                >
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flex: 1 }}>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "var(--text-dim)",
                        paddingTop: "4px",
                        minWidth: "20px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div
                        className="display"
                        style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "4px", letterSpacing: "-0.01em" }}
                      >
                        {f.name}
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                        {f.tagline}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", paddingTop: "4px", flexShrink: 0 }}>→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .features-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
