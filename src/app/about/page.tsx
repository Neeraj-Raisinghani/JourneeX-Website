import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | JourneeX",
  description: "How JourneeX works, the philosophy behind it, and the story of how it was built.",
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* ── Page header (dark, editorial) ── */}
      <section
        style={{
          background: "var(--bg-dark)",
          color: "var(--text-light)",
          padding: "80px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: -8,
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(8rem, 22vw, 24rem)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          ABOUT
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              margin: "0 0 28px 0",
              color: "#fff",
            }}
          >
            What JourneeX is<br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--text-light-muted)",
              }}
            >
              and how it works
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontStyle: "italic",
              lineHeight: 1.7,
              color: "var(--text-light-muted)",
              margin: 0,
              maxWidth: "560px",
            }}
          >
            A personal AI journal. One job: write your day and hear it reflected
            back - warm, honest, and human.
          </p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="page-heading-parent">
            <h1>How It Works</h1>
            <hr className="line-grey" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "var(--border)",
            }}
            className="steps-grid"
          >
            {[
              {
                step: "01",
                title: "Write freely",
                desc: "Open JourneeX and write whatever is on your mind. No prompts, no templates. Just a blank page and your thoughts.",
              },
              {
                step: "02",
                title: "Save your entry",
                desc: "Your entry is saved securely to Supabase. It is yours, private, persistent, accessible anywhere.",
              },
              {
                step: "03",
                title: "Hear it back",
                desc: "Claude reads what you wrote and responds with a warm, conversational reflection. Under 250 words, in prose, like a thoughtful friend.",
              },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  background: "var(--bg)",
                  padding: "40px 32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
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
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:767px){.steps-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── Philosophy ── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="page-heading-parent">
            <h1>Philosophy</h1>
            <hr className="line-grey" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "flex-start",
            }}
            className="philosophy-grid"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                  fontStyle: "italic",
                  lineHeight: 1.75,
                  color: "var(--text-muted)",
                  margin: "0 0 24px 0",
                  fontWeight: 400,
                }}
              >
                JourneeX was built around one philosophy:{" "}
                <span className="highlighted-text">restraint</span>. One job -
                write, get a thoughtful response back. No generic affirmations.
                No AI therapy. A genuine reflection of what you{" "}
                <span className="highlighted-text">actually wrote</span>.
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  color: "var(--text-muted)",
                  margin: 0,
                }}
              >
                Every feature that is not that is a feature that was not built.
              </p>
            </div>

            <div>
              {[
                { label: "No streak padding", desc: "Miss a day and the streak resets. It is honest or it is worthless." },
                { label: "No mood graphs", desc: "Your feelings are not a dashboard. They are in what you wrote." },
                { label: "No social sharing", desc: "A journal is private by design. Always." },
                { label: "No generic affirmations", desc: "The AI reads your specific entry, not a wellness template." },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    padding: "20px 0",
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  <span style={{ color: "var(--text)", fontWeight: 700, flexShrink: 0, fontSize: "1rem" }}>+</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        marginBottom: "4px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:767px){.philosophy-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
      </section>

      {/* ── How it was built ── */}
      <section className="section" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="page-heading-parent">
            <h1>How it was built</h1>
            <hr className="line-grey" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }} className="how-built-grid">
            {[
              { label: "Stack", body: "Next.js, Cloudflare Workers, Supabase, and Claude as the AI layer. Everything runs at the edge - fast and private by default." },
              { label: "AI layer", body: "Claude reads each entry and generates a reflection tuned for tone, not just content. Hundreds of prompt iterations to get it feeling human." },
              { label: "Design", body: "Editorial, no-frills, dark-first. Built to feel like a journal, not a dashboard. Every decision was made to keep writing at the centre." },
            ].map((item, i) => (
              <div key={item.label} style={{ padding: "40px 36px", border: "1px solid var(--border)", marginLeft: i === 0 ? 0 : "-1px" }}>
                <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "20px" }}>{item.label}</div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:767px){.how-built-grid{grid-template-columns:1fr!important;} .how-built-grid > div{margin-left:0!important;margin-top:-1px;}}`}</style>
      </section>

      {/* ── The builder ── */}
      <section className="section" style={{ background: "var(--bg-dark)", color: "var(--text-light)" }}>
        <div className="container">
          <div className="page-heading-parent">
            <h1 style={{ color: "var(--text-light)" }}>The Builder</h1>
            <hr className="line-dark" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
            className="builder-grid"
          >
            <p
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                fontStyle: "italic",
                lineHeight: 1.75,
                color: "var(--text-light-muted)",
                margin: 0,
                fontWeight: 400,
              }}
            >
              Built <span style={{ background: "var(--highlight)", color: "#000", padding: "0 3px" }}>solo</span> by{" "}
              <span style={{ color: "var(--text-light)" }}>Neeraj Raisinghani</span> - product,
              design, and development, all one person.
              JourneeX started as a question: what if your journal could write back?
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              <a
                href="https://app.journeex.neerajraisinghani.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "12px 28px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  letterSpacing: "0.04em",
                  color: "#000",
                  background: "#fff",
                  textDecoration: "none",
                  border: "2px solid #fff",
                  whiteSpace: "nowrap",
                }}
              >
                Try JourneeX
              </a>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  padding: "12px 28px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  letterSpacing: "0.04em",
                  color: "#fff",
                  background: "transparent",
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.3)",
                  whiteSpace: "nowrap",
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:767px){.builder-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
      </section>
    </main>
  );
}
