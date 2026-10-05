export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "80px", alignItems: "start" }}>
          <div>
            <span className="eyebrow">About the builder</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 24px 0" }}>
              Built solo, from idea to{" "}
              <span className="gradient-text">live product</span>
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "16px" }}>
              JourneeX was designed, built, and shipped by Neeraj Raisinghani,
              handling product, design, and development as a solo builder.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "36px" }}>
              The philosophy was restraint. One job: write, get a thoughtful
              summary back. The Claude integration was tuned over many iterations
              to produce reflections that feel personal and grounded.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="https://app.journeex.neerajraisinghani.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Try JourneeX
              </a>
              <a href="https://neerajraisinghani.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Portfolio
              </a>
            </div>
          </div>

          <div className="card" style={{ padding: "36px" }}>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "20px" }}>
              JourneeX started as a single question: what if your journal could write back?
              Not with generic affirmations, but with a genuine reflection, the way a
              close friend would listen and respond.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text-muted)", margin: 0 }}>
              It is live, it is free, and every word it says back to you was shaped by
              hundreds of prompt iterations until it finally felt human.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
