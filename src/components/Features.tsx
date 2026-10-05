import Link from "next/link";
import { features } from "@/data/features";

const accentClass: Record<string, string> = {
  "#7c6aff": "feature-card-purple",
  "#22d3a5": "feature-card-teal",
  "#ff6a9b": "feature-card-pink",
};

export default function Features() {
  const preview = features.slice(0, 6);

  return (
    <section className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Features</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 20px 0" }}>
            Everything you need to{" "}
            <span className="gradient-text">actually journal</span>
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
            From AI reflections to habit tracking. Built around one thing: making
            it easier to show up and write.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-gap)" }}>
          {preview.map((f) => (
            <Link key={f.slug} href={`/product/${f.slug}`} className={`feature-card ${accentClass[f.accentColor] ?? "feature-card-purple"}`}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, marginBottom: "20px", background: f.accentColor + "18", color: f.accentColor }}>
                {f.name.charAt(0)}
              </div>
              <h3 style={{ fontSize: "0.975rem", fontWeight: 600, marginBottom: "8px" }}>{f.name}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "20px" }}>{f.tagline}</p>
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: f.accentColor }}>Learn more</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <Link href="/product" className="btn-ghost">View all {features.length} features</Link>
        </div>
      </div>
    </section>
  );
}
