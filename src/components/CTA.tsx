"use client";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section
      style={{
        background: "var(--bg-dark)",
        color: "var(--text-light)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background large text */}
      <div
        style={{
          position: "absolute",
          bottom: -20,
          right: -8,
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(8rem, 20vw, 22rem)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.025)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}
      >
        WRITE
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div className="page-heading-parent">
            <h1 style={{ color: "var(--text-light)" }}>Start Journaling</h1>
            <hr className="line-dark" />
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="cta-grid"
        >
          <ScrollReveal delay={80}>
            <p
              className="display"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                fontStyle: "italic",
                lineHeight: 1.75,
                color: "var(--text-light-muted)",
                margin: 0,
                fontWeight: 400,
              }}
            >
              JourneeX is <span style={{ background: "var(--highlight)", color: "#000", padding: "0 3px" }}>live</span>.
              Write something and see what comes back.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div>
              <a
                href="https://app.journeex.neerajraisinghani.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "14px 36px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.04em",
                  color: "#000",
                  background: "#fff",
                  textDecoration: "none",
                  border: "2px solid #fff",
                  transition: "opacity 0.2s",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Open JourneeX
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
