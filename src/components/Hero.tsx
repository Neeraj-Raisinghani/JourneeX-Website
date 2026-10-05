export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0 80px",
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div style={{ position: "absolute", top: "30%", right: "10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,106,255,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", left: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,106,155,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="hero-grid">
          {/* Left: text */}
          <div className="animate-fade-up">
            <h1
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: "0 0 24px 0",
              }}
            >
              Write your day.{" "}
              <span className="gradient-text-animated">Hear it back.</span>
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.75,
                color: "var(--text-muted)",
                maxWidth: "480px",
                margin: "0 0 40px 0",
              }}
            >
              JourneeX is a personal AI journal that reads what you write and reflects
              it back, warm, human, and honest. Like a thoughtful friend who actually
              listened.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a
                href="https://app.journeex.neerajraisinghani.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                Start journaling free
              </a>
              <a href="#problem" className="btn-ghost" style={{ fontSize: "1rem", padding: "14px 32px" }}>
                Learn more
              </a>
            </div>

            <div style={{ display: "flex", gap: "32px", marginTop: "56px" }}>
              {[
                { value: "Free", label: "No credit card" },
                { value: "<800ms", label: "Load time" },
                { value: "AI", label: "Reflections" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }} className="gradient-text">{s.value}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-dim)", marginTop: "2px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: journal card mockup */}
          <div className="animate-float animate-fade-up-2"
            style={{
              borderRadius: "20px",
              padding: "32px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-hero)",
            }}
          >
            <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--text-dim)", marginBottom: "20px" }}>
              Today, October 5
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "24px" }}>
              Had a slow morning but finally got the prompt tuned the way I wanted.
              The AI summary felt warm for the first time, like it actually read
              what I wrote instead of summarising it...
            </p>
            <div
              style={{
                borderRadius: "12px",
                padding: "20px",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    background: "var(--accent)",
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  AI
                </div>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", color: "var(--accent)" }}>
                  Reflection
                </span>
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
                Today had a quiet momentum to it. That moment when the words finally
                felt right, that is the kind of thing worth noticing. You have been
                patient with this and it is starting to show.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
