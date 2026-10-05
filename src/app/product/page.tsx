import Link from "next/link";
import { features } from "@/data/features";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | JourneeX",
  description: "Explore every feature inside JourneeX. Daily entries, AI reflections, habit tracking, mood logging, search, and more.",
  openGraph: {
    title: "Product | JourneeX",
    description: "Explore every feature inside JourneeX.",
    type: "website",
  },
};

const accentClass: Record<string, string> = {
  "#7c6aff": "feature-card-purple",
  "#22d3a5": "feature-card-teal",
  "#ff6a9b": "feature-card-pink",
};

export default function ProductPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <div className="page-header">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Product</span>
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 20px 0" }}>
              Everything inside <span className="gradient-text">JourneeX</span>
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0, maxWidth: "560px" }}>
              A journal built around one thing: making it easier to show up, write honestly,
              and feel heard.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-gap)" }}>
            {features.map((f) => (
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
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div style={{ maxWidth: "560px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>Ready to try it?</h2>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "32px" }}>
              All features are live. Free to use. No credit card.
            </p>
            <a href="https://app.journeex.neerajraisinghani.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open JourneeX
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
