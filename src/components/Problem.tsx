export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">The Problem</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 20px 0" }}>
            Journaling is one of those habits{" "}
            <span className="gradient-text">almost everyone wants.</span>
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
            Few maintain it. The blank page is intimidating. Most apps are either
            too minimal or too feature-heavy, and neither addresses the core problem.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-gap)", marginBottom: "24px" }}>
          {[
            {
              title: "Too minimal",
              desc: "Just a text box. You write into the void and nothing writes back. It feels pointless after a few days.",
            },
            {
              title: "Too complex",
              desc: "Mood graphs, streak counters, habit trackers. Features that bury the core act of writing.",
            },
            {
              title: "Too clinical",
              desc: "AI responses that feel like therapy notes or bullet-point summaries, cold and impersonal.",
            },
          ].map((card) => (
            <div key={card.title} className="card">
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>{card.title}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--text-muted)", margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            borderRadius: "var(--radius-lg)",
            padding: "48px",
            background: "linear-gradient(135deg, rgba(124,106,255,0.08), rgba(255,106,155,0.05))",
            border: "1px solid rgba(124,106,255,0.2)",
          }}
        >
          <p style={{ fontSize: "1.2rem", fontWeight: 500, lineHeight: 1.75, maxWidth: "700px", margin: 0, color: "var(--text)" }}>
            "What if your journal could{" "}
            <span className="gradient-text" style={{ fontWeight: 700 }}>write back?</span>{" "}
            Not with generic affirmations, but with a genuine, warm summary of what you
            actually wrote, the way a close friend would reflect it back after listening carefully."
          </p>
        </div>
      </div>
    </section>
  );
}
