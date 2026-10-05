export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="card-lg"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 60% 0%, rgba(124,106,255,0.15) 0%, transparent 60%)" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "560px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "20px" }}>
              Ready to write your day?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "36px" }}>
              JourneeX is live and free to use. Write something and see what comes back.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <a href="https://app.journeex.neerajraisinghani.com/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
                Open JourneeX
              </a>
              <span style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>
                Free, no credit card needed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
