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

  // Split name: use "&" if present, otherwise first word vs rest
  const hasAmp = feature.name.includes("&");
  const nameParts = hasAmp
    ? feature.name.split("&").map((s) => s.trim())
    : [feature.name.split(" ")[0], feature.name.split(" ").slice(1).join(" ")];
  const nameFirst = nameParts[0];
  const nameRest = nameParts[1] || "";

  return (
    <main style={{ paddingTop: "64px" }}>

      {/* ── 1. HERO ── */}
      <section style={{ background: "var(--bg-dark)", color: "var(--text-light)", padding: "100px 0 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -20, left: -8, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(6rem, 18vw, 20rem)", fontWeight: 900, color: "rgba(255,255,255,0.025)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1, letterSpacing: "-0.04em" }}>
          {feature.name.toUpperCase()}
        </div>
        <div style={{ position: "absolute", top: "10%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,230,66,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", alignItems: "stretch" }}>
            {/* Left */}
            <div style={{ paddingRight: "64px", borderRight: "1px solid var(--border-dark)", paddingBottom: "80px" }}>
              <h1 className="display" style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, margin: "0 0 28px", color: "#fff" }}>
                {nameFirst}
                {nameRest && (
                  <>
                    <br />
                    <span className="display" style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
                      {nameRest}
                    </span>
                  </>
                )}
              </h1>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontStyle: "italic", lineHeight: 1.7, color: "var(--text-light-muted)", margin: "0 0 44px", maxWidth: "400px" }}>
                {feature.tagline}
              </p>
              <a href="https://app.journeex.neerajraisinghani.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "14px 40px", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", background: "transparent", border: "1px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>
                Start writing
              </a>
            </div>

            {/* Right: stat */}
            <div style={{ paddingLeft: "64px", paddingBottom: "80px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
              <svg style={{ position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)", width: "280px", height: "280px", opacity: 0.07, pointerEvents: "none" }} viewBox="0 0 280 280" fill="none">
                <circle cx="140" cy="140" r="130" stroke="#f5e642" strokeWidth="1" />
                <circle cx="140" cy="140" r="90" stroke="#f5e642" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="140" cy="140" r="50" stroke="#f5e642" strokeWidth="1" />
                <line x1="10" y1="140" x2="270" y2="140" stroke="#f5e642" strokeWidth="0.5" />
                <line x1="140" y1="10" x2="140" y2="270" stroke="#f5e642" strokeWidth="0.5" />
                <circle cx="140" cy="140" r="4" fill="#f5e642" />
              </svg>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="display" style={{ fontSize: "clamp(5rem, 11vw, 9.5rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88, color: "#f5e642", marginBottom: "24px" }}>
                  {feature.stat.value}
                </div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text-light-muted)", maxWidth: "300px", margin: 0, borderLeft: "2px solid #f5e642", paddingLeft: "16px" }}>
                  {feature.stat.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. QUOTE ── */}
      <section style={{ background: "var(--surface)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", right: 0, top: 0, width: "340px", height: "100%", opacity: 0.4, pointerEvents: "none" }} preserveAspectRatio="xMaxYMid slice">
          <defs>
            <pattern id="dotgrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#ccc9c0" />
            </pattern>
          </defs>
          <rect width="340" height="100%" fill="url(#dotgrid)" />
        </svg>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "800px" }}>
            <div className="display" style={{ fontSize: "clamp(5rem, 14vw, 12rem)", fontWeight: 900, lineHeight: 0.75, color: "rgba(0,0,0,0.05)", letterSpacing: "-0.04em", userSelect: "none", marginBottom: "-8px" }}>
              &ldquo;
            </div>
            <p className="display" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.25, color: "#000", margin: "0 0 32px" }}>
              {feature.quote}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "40px", height: "3px", background: "#f5e642" }} />
              <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", fontFamily: "monospace" }}>
                On {feature.name}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ── */}
      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }} className="method-wrap">
            <div style={{ position: "sticky", top: "100px" }}>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 24px" }}>
                The<br /><span style={{ fontStyle: "italic", fontWeight: 400 }}>method</span>
              </h2>
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ opacity: 0.15 }}>
                <rect x="10" y="10" width="30" height="30" stroke="currentColor" strokeWidth="1.5" />
                <rect x="10" y="55" width="30" height="30" stroke="currentColor" strokeWidth="1.5" />
                <rect x="10" y="100" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
                <line x1="25" y1="40" x2="25" y2="55" stroke="currentColor" strokeWidth="1.5" />
                <line x1="25" y1="85" x2="25" y2="100" stroke="currentColor" strokeWidth="1.5" />
                <line x1="40" y1="25" x2="80" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="40" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
              </svg>
            </div>
            <div>
              {feature.details.map((d, i) => (
                <div key={i} className="step-row" style={{ borderTop: "1px solid var(--border)", padding: "48px 0", display: "grid", gridTemplateColumns: "64px 1fr", gap: "32px", alignItems: "start" }}>
                  <span className="display step-num" style={{ fontSize: "3.5rem", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, color: "var(--surface)", transition: "color 0.25s" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display" style={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 12px", lineHeight: 1.15 }}>
                      {d.heading}
                    </h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "var(--text-muted)", margin: 0 }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. BIG STAT BANNER ── */}
      <section style={{ background: "var(--bg-dark)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", left: "-120px", top: "50%", transform: "translateY(-50%)", width: "500px", height: "500px", opacity: 0.04, pointerEvents: "none" }} viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="240" stroke="white" strokeWidth="1" />
          <circle cx="250" cy="250" r="180" stroke="white" strokeWidth="1" />
          <circle cx="250" cy="250" r="120" stroke="white" strokeWidth="1" />
          <circle cx="250" cy="250" r="60" stroke="white" strokeWidth="1" />
        </svg>
        <svg style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", opacity: 0.03, pointerEvents: "none" }} preserveAspectRatio="xMaxYMid slice">
          <defs>
            <pattern id="hlines" x="0" y="0" width="1" height="20" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="1000" y2="0" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hlines)" />
        </svg>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="stat-banner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div>
              <div className="display" style={{ fontSize: "clamp(5rem, 14vw, 13rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88, color: "#fff" }}>
                {feature.stat.value}
              </div>
            </div>
            <div style={{ borderLeft: "1px solid var(--border-dark)", paddingLeft: "80px" }}>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "var(--text-light-muted)", margin: "0 0 36px", maxWidth: "380px" }}>
                {feature.stat.label}
              </p>
              <a href="https://app.journeex.neerajraisinghani.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "12px 28px", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", background: "transparent", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                See it yourself
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHAT IS INCLUDED ── */}
      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "56px", flexWrap: "wrap", gap: "16px" }}>
            <h2 className="display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", margin: 0, lineHeight: 1 }}>
              Core capabilities
            </h2>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" style={{ opacity: 0.2 }}>
              <rect x="0" y="24" width="12" height="16" fill="currentColor" />
              <rect x="17" y="12" width="12" height="28" fill="currentColor" />
              <rect x="34" y="4" width="12" height="36" fill="currentColor" />
              <rect x="51" y="16" width="12" height="24" fill="currentColor" />
              <rect x="68" y="8" width="12" height="32" fill="currentColor" />
            </svg>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)" }} className="cap-grid">
            {feature.details.map((d, i) => {
              const icons = [
                <svg key={0} width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="#f5e642" strokeWidth="1.5" /><path d="M9 14l3 3 7-7" stroke="#f5e642" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                <svg key={1} width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="2" stroke="#f5e642" strokeWidth="1.5" /><path d="M9 14h10M14 9v10" stroke="#f5e642" strokeWidth="1.5" strokeLinecap="round" /></svg>,
                <svg key={2} width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4l2.5 7H24l-6 4.4 2.3 7L14 18.4 7.7 22.4 10 15 4 10.5h7.5z" stroke="#f5e642" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
              ];
              return (
                <div key={i} style={{ background: "var(--bg)", padding: "44px 36px", display: "flex", flexDirection: "column", gap: "20px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "48px", background: "#f5e642" }} />
                  <div style={{ paddingTop: "8px" }}>{icons[i % 3]}</div>
                  <h3 className="display" style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, margin: 0 }}>
                    {d.heading}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.85, color: "var(--text-muted)", margin: 0, flexGrow: 1 }}>
                    {d.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. VISUAL INTERLUDE ── */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "80px 0", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", right: "-80px", top: "-80px", width: "500px", height: "500px", opacity: 0.12, pointerEvents: "none" }}>
          <svg viewBox="0 0 500 500" fill="none" width="500" height="500">
            <path d="M500 0 Q0 0 0 500" stroke="var(--text)" strokeWidth="1.5" />
            <path d="M500 80 Q80 80 80 500" stroke="var(--text)" strokeWidth="1" />
            <path d="M500 160 Q160 160 160 500" stroke="var(--text)" strokeWidth="1" />
            <path d="M500 240 Q240 240 240 500" stroke="var(--text)" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "40px" }}>
            <div style={{ maxWidth: "480px" }}>
              <p className="display" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, margin: "0 0 20px", color: "var(--text)" }}>
                {feature.name} is <span className="highlighted-text">built into</span> the journal.
              </p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "var(--text-muted)", margin: 0 }}>
                {feature.description}
              </p>
            </div>
            <svg width="220" height="180" viewBox="0 0 220 180" fill="none" style={{ flexShrink: 0, opacity: 0.6 }}>
              <rect x="20" y="10" width="130" height="160" rx="4" stroke="var(--text)" strokeWidth="1.5" />
              <rect x="30" y="10" width="6" height="160" rx="2" fill="var(--border)" />
              <line x1="48" y1="40" x2="132" y2="40" stroke="var(--border)" strokeWidth="1.5" />
              <line x1="48" y1="56" x2="132" y2="56" stroke="var(--border)" strokeWidth="1.5" />
              <line x1="48" y1="72" x2="110" y2="72" stroke="var(--border)" strokeWidth="1.5" />
              <line x1="48" y1="88" x2="132" y2="88" stroke="var(--border)" strokeWidth="1.5" />
              <line x1="48" y1="104" x2="120" y2="104" stroke="var(--border)" strokeWidth="1.5" />
              <line x1="48" y1="120" x2="132" y2="120" stroke="var(--border)" strokeWidth="1.5" />
              <line x1="48" y1="136" x2="90" y2="136" stroke="var(--border)" strokeWidth="1.5" />
              <path d="M155 130 L195 45 L205 55 L165 140 Z" stroke="var(--text)" strokeWidth="1.5" fill="none" />
              <path d="M155 130 L165 140 L158 145 Z" fill="var(--text)" />
              <rect x="48" y="84" width="60" height="8" fill="#f5e642" opacity="0.4" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section style={{ background: "var(--bg-dark)", color: "var(--text-light)", padding: "120px 0", borderTop: "1px solid var(--border-dark)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -60, right: -40, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(12rem, 32vw, 34rem)", fontWeight: 900, color: "rgba(255,255,255,0.02)", pointerEvents: "none", lineHeight: 1, letterSpacing: "-0.04em" }}>J</div>
        <svg style={{ position: "absolute", left: 0, top: 0, width: "40%", height: "100%", opacity: 0.03, pointerEvents: "none" }} preserveAspectRatio="xMinYMid slice">
          <defs>
            <pattern id="diaglines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diaglines)" />
        </svg>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "48px", flexWrap: "wrap" }}>
            <div>
              <h2 className="display" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, margin: "0 0 24px", color: "#fff" }}>
                Your journal<br />
                <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
                  is waiting for you.
                </span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-light-muted)", lineHeight: 1.8, margin: 0, maxWidth: "480px" }}>
                Open in your browser. Write your first entry. JourneeX does the rest.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap", flexShrink: 0 }}>
              <a href="https://app.journeex.neerajraisinghani.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 48px", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#000", background: "#fff", textDecoration: "none" }}>
                Open JourneeX
              </a>
              <Link href="/product" style={{ display: "inline-block", padding: "16px 48px", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
                All features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 991px) {
          .hero-split { grid-template-columns: 1fr !important; }
          .hero-split > div:first-child { border-right: none !important; border-bottom: 1px solid var(--border-dark); padding-right: 0 !important; }
          .hero-split > div:last-child { padding-left: 0 !important; padding-top: 48px; }
          .method-wrap { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stat-banner { grid-template-columns: 1fr !important; gap: 48px !important; }
          .stat-banner > div:last-child { border-left: none !important; padding-left: 0 !important; border-top: 1px solid var(--border-dark); padding-top: 48px; }
        }
        @media (max-width: 767px) {
          .cap-grid { grid-template-columns: 1fr !important; }
          .step-row { grid-template-columns: 48px 1fr !important; gap: 20px !important; }
        }
        .step-row:hover .step-num { color: var(--text) !important; }
      `}</style>
    </main>
  );
}
