import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    step: "01",
    title: "Write freely",
    desc: "Open JourneeX and write whatever is on your mind. No prompts, no templates. Just a blank page and your thoughts.",
  },
  {
    step: "02",
    title: "Save your entry",
    desc: "Your entry is saved securely and encrypted. Private, persistent, and only ever accessible by you.",
  },
  {
    step: "03",
    title: "Hear it back",
    desc: "The AI reads what you wrote and responds with a warm, honest reflection. In prose, like a thoughtful friend.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <ScrollReveal>
          <div className="page-heading-parent">
            <h1>How It Works</h1>
            <hr className="line-grey" />
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
          }}
          className="hiw-grid"
        >
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 100}>
              <div style={{ padding: "0 40px 0 0", paddingLeft: i > 0 ? "40px" : "0", borderRight: i < steps.length - 1 ? "1px solid var(--border)" : "none" }}>
                <div
                  className="display"
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "var(--border)",
                    marginBottom: "20px",
                    lineHeight: 1,
                  }}
                >
                  {s.step}
                </div>
                <h3
                  className="display"
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                    color: "var(--text)",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
