const stats = [
  { value: "<800ms", label: "Global load time", sub: "Cloudflare edge" },
  { value: "250", label: "Words per reflection", sub: "Prose, no bullet points" },
  { value: "$0", label: "Infrastructure cost", sub: "At current scale" },
  { value: "1", label: "File to deploy", sub: "Single index.html" },
];

type Variant = "home" | "about";

export default function HowItWasBuilt({ variant = "home" }: { variant?: Variant }) {
  const isHome = variant === "home";

  return (
    <section className={isHome ? "section-alt" : "section"}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow" style={{ color: isHome ? "var(--accent)" : "var(--accent-2)" }}>
            How it was built
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 20px 0" }}>
            {isHome ? (
              <>The prompt is <span className="gradient-text">the product</span></>
            ) : (
              <>Building JourneeX: <span className="gradient-text">decisions and trade-offs</span></>
            )}
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
            {isHome
              ? "JourneeX was built solo. Product, design, and engineering, one person. The real work was not in the code. It was in the details that do not show up in a tech stack."
              : "A solo build from idea to live product. Every decision was deliberate, the architecture, the AI prompt, the mobile experience."}
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "24px" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ borderRadius: "var(--radius-card)", padding: "28px 24px", background: isHome ? "var(--bg)" : "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="gradient-text" style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "6px" }}>{s.value}</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "4px" }}>{s.label}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Key learning */}
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            padding: "48px",
            background: "linear-gradient(135deg, rgba(124,106,255,0.08), rgba(255,106,155,0.05))",
            border: "1px solid rgba(124,106,255,0.2)",
          }}
        >
          <p style={{ fontSize: "1.15rem", fontWeight: 500, lineHeight: 1.8, maxWidth: "680px", margin: 0, color: "var(--text)" }}>
            "In AI-powered products,{" "}
            <span className="gradient-text" style={{ fontWeight: 700 }}>the prompt is the product.</span>{" "}
            The technology is straightforward. The hard work is figuring out exactly
            what to say to get it to respond the way a human would."
          </p>
        </div>
      </div>
    </section>
  );
}
