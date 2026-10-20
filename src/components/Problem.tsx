import ScrollReveal from "./ScrollReveal";

export default function Problem() {
  return (
    <section className="section" id="problem" style={{ background: "var(--bg)" }}>
      <div className="container">
        {/* Top: heading + divider */}
        <ScrollReveal>
          <div className="page-heading-parent">
            <h1>The Problem</h1>
            <hr className="line-grey" />
          </div>
        </ScrollReveal>

        {/* Two-column: cards left, editorial paragraph right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "flex-start",
          }}
          className="problem-grid"
        >
          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
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
                desc: "AI responses that feel like therapy notes or bullet-point summaries - cold and impersonal.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div
                  style={{
                    borderBottom: "1px solid var(--border)",
                    padding: "28px 0",
                  }}
                >
                  <h3
                    className="display"
                    style={{ fontSize: "1.15rem", fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.01em" }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Editorial paragraph with highlighted text */}
          <ScrollReveal delay={150}>
            <div>
              <p
                className="display"
                style={{
                  fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                  fontStyle: "italic",
                  lineHeight: 1.75,
                  color: "var(--text-muted)",
                  margin: "0 0 40px 0",
                  fontWeight: 400,
                }}
              >
                Journaling is one of those habits{" "}
                <span className="highlighted-text">almost everyone wants</span>.
                Few maintain it. The blank page is{" "}
                <span className="highlighted-text">intimidating</span>. Most apps
                are either too minimal or too feature-heavy, and neither addresses
                the core problem.
              </p>

              <blockquote
                style={{
                  borderLeft: "3px solid var(--text)",
                  paddingLeft: "28px",
                  margin: "0 0 40px 0",
                }}
              >
                <p
                  className="display"
                  style={{
                    fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    color: "var(--text)",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  &ldquo;What if your journal could write back? Not with generic
                  affirmations, but with a{" "}
                  <span className="highlighted-text">genuine, warm</span> summary
                  of what you actually wrote - the way a close friend would
                  reflect it back after listening carefully.&rdquo;
                </p>
              </blockquote>

              <a href="https://app.journeex.neerajraisinghani.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Try JourneeX
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .problem-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
