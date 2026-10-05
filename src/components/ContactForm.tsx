"use client";

const social = [
  { label: "LinkedIn", sub: "neerajraisinghani", href: "https://www.linkedin.com/in/neerajraisinghani/", icon: "in" },
  { label: "Portfolio", sub: "neerajraisinghani.com", href: "https://neerajraisinghani.com", icon: "w" },
  { label: "Email", sub: "neeraj@neerajraisinghani.com", href: "mailto:neeraj@neerajraisinghani.com", icon: "@" },
];

export default function ContactForm() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "64px", alignItems: "start" }} className="contact-grid">
          <div className="card-lg" style={{ maxWidth: "640px", width: "100%" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "32px" }}>
              Send a message
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = fd.get("name");
                const msg = fd.get("body");
                window.location.href = `mailto:neeraj@neerajraisinghani.com?subject=Message from ${name}&body=${msg}`;
              }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "0.8rem", color: "var(--text-dim)", fontWeight: 600, letterSpacing: "0.04em" }}>
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "14px 16px",
                    fontSize: "0.95rem",
                    color: "var(--text)",
                    outline: "none",
                    width: "100%",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "0.8rem", color: "var(--text-dim)", fontWeight: 600, letterSpacing: "0.04em" }}>
                  MESSAGE
                </label>
                <textarea
                  name="body"
                  rows={6}
                  placeholder="What is on your mind?"
                  required
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "14px 16px",
                    fontSize: "0.95rem",
                    color: "var(--text)",
                    outline: "none",
                    resize: "vertical",
                    width: "100%",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: "flex-start", border: "none", cursor: "pointer" }}
              >
                Send message
              </button>
            </form>
          </div>

          {/* Right: contact info */}
          <div style={{ minWidth: "220px", paddingTop: "8px" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "24px" }}>
              Find me on
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px 16px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  <span style={{ width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, background: "rgba(124,106,255,0.12)", color: "var(--accent)", flexShrink: 0 }}>
                    {s.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{s.label}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: "2px" }}>{s.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
