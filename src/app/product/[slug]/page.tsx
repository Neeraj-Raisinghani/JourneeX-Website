import { features } from "@/data/features";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const feature = features.find((f) => f.slug === slug);
  if (!feature) return {};
  return {
    title: `${feature.name} | JourneeX`,
    description: feature.description,
    openGraph: { title: `${feature.name} | JourneeX`, description: feature.description, type: "website" },
  };
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = features.find((f) => f.slug === slug);
  if (!feature) notFound();

  const featureIndex = features.findIndex((f) => f.slug === slug);
  const others = features.filter((_, i) => i !== featureIndex).slice(0, 3);

  return (
    <main style={{ paddingTop: "64px" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ padding: "16px 32px" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "var(--text-dim)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "var(--text-dim)" }}>/</span>
            <Link href="/product" style={{ color: "var(--text-dim)", textDecoration: "none" }}>Product</Link>
            <span style={{ color: "var(--text-dim)" }}>/</span>
            <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>{feature.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "680px" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", fontWeight: 700, marginBottom: "32px", background: feature.accentColor + "18", color: feature.accentColor }}>
              {feature.name.charAt(0)}
            </div>
            <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: "6px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px", background: feature.accentColor + "18", color: feature.accentColor, border: `1px solid ${feature.accentColor}30` }}>
              {feature.category}
            </div>
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 16px 0" }}>
              {feature.name}
            </h1>
            <p style={{ fontSize: "1.15rem", color: feature.accentColor, marginBottom: "16px", fontWeight: 500 }}>{feature.tagline}</p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>{feature.description}</p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-gap)" }}>
            {feature.details.map((d, i) => (
              <div key={i} className="card" style={{ background: "var(--bg)" }}>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "20px", fontVariantNumeric: "tabular-nums", color: feature.accentColor + "44" }}>0{i + 1}</div>
                <h3 style={{ fontSize: "0.975rem", fontWeight: 600, marginBottom: "12px" }}>{d.heading}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--text-muted)", margin: 0 }}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More features */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>More features</h2>
            <Link href="/product" style={{ fontSize: "0.875rem", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>View all</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {others.map((f) => (
              <Link key={f.slug} href={`/product/${f.slug}`} className="feature-card feature-card-purple">
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, marginBottom: "16px", background: f.accentColor + "18", color: f.accentColor }}>
                  {f.name.charAt(0)}
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "6px" }}>{f.name}</div>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--text-dim)", margin: 0 }}>{f.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt">
        <div className="container">
          <div style={{ maxWidth: "560px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              Try {feature.name} now
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "32px" }}>
              Free to use. Open in your browser, no download needed.
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
