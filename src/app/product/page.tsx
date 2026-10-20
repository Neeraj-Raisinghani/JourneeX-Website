import { featuresByCategory, categoryOrder } from "@/data/features";
import FeatureRow from "@/components/FeatureRow";
import TryEntry from "@/components/TryEntry";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | JourneeX",
  description: "Explore every feature inside JourneeX - daily entries, AI reflections, habit tracking, mood logging, search, and more.",
};

export default function ProductPage() {
  return (
    <main>

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg-dark)",
          color: "var(--text-light)",
          padding: "80px 0",
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
            fontSize: "clamp(6rem, 18vw, 20rem)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          PRODUCT
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1
            className="display"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              margin: "0 0 28px",
              color: "#fff",
            }}
          >
            Everything<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
              inside JourneeX
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontStyle: "italic",
              lineHeight: 1.7,
              color: "var(--text-light-muted)",
              maxWidth: "560px",
              margin: "0 0 64px",
            }}
          >
            A journal built around one thing - making it easier to show up,
            write honestly, and{" "}
            <span style={{ background: "var(--highlight)", color: "#000", padding: "0 3px", fontStyle: "normal" }}>
              feel heard.
            </span>
          </p>

          {/* Stats row inside hero */}
          <div style={{ borderTop: "1px solid var(--border-dark)", paddingTop: "40px" }}>
            <div
              className="stats-strip"
              style={{ display: "flex", gap: 0, alignItems: "stretch" }}
            >
              {[
                { value: "Daily", label: "Journaling habit" },
                { value: "E2E", label: "Encrypted" },
                { value: "<1 min", label: "First entry" },
                { value: "No ads", label: "Ever. Period." },
                { value: "Weekly", label: "AI summary" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    padding: "0 32px",
                    borderLeft: i === 0 ? "none" : "1px solid var(--border-dark)",
                  }}
                >
                  <div
                    className="display"
                    style={{
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-light-muted)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. HOW IT WORKS ──────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ marginBottom: "64px" }}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: "8px 0 0",
                color: "var(--text)",
                maxWidth: "600px",
              }}
            >
              Three steps.<br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}>
                One daily habit.
              </span>
            </h2>
          </div>

          <div
            className="how-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}
          >
            {[
              {
                step: "01",
                heading: "Write",
                body: "Open JourneeX and write. Anything - your morning thoughts, a frustration, a win. No format required. Most people are done in under a minute.",
              },
              {
                step: "02",
                heading: "AI reflects it back",
                body: "JourneeX reads your entry and responds - not with generic advice, but with what it actually picked up from your words. Patterns, tone, things you said without saying.",
              },
              {
                step: "03",
                heading: "You grow",
                body: "Over days and weeks, your mood trends, streaks, and summaries build up a picture of yourself you couldn't see day to day. The habit compounds.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  padding: "48px 40px",
                  border: "1px solid var(--border)",
                  marginLeft: i === 0 ? 0 : "-1px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)",
                    marginBottom: "28px",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  className="display"
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    margin: "0 0 16px",
                  }}
                >
                  {item.heading}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHO IT'S FOR ──────────────────────────────────────── */}
      <section
        style={{
          background: "var(--surface)",
          padding: "100px 0",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <div style={{ marginBottom: "64px" }}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: "8px 0 0",
                color: "var(--text)",
              }}
            >
              You'll recognise<br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}>
                yourself in one of these.
              </span>
            </h2>
          </div>

          <div
            className="persona-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}
          >
            {[
              {
                type: "The Overthinker",
                desc: "Your brain doesn't stop. Writing slows it down. The reflection helps you see which worries are real and which are just noise.",
              },
              {
                type: "The Goal Setter",
                desc: "You track everything. JourneeX adds the layer you've been missing: the why behind the numbers, not just the streak.",
              },
              {
                type: "The Venter",
                desc: "No judgment, no advice unless you want it. Sometimes you just need somewhere to put it all. JourneeX holds it.",
              },
              {
                type: "The Builder",
                desc: "You're shipping, growing, learning. A daily entry keeps you honest about what's working and where you're actually headed.",
              },
            ].map((p, i) => (
              <div
                key={p.type}
                style={{
                  padding: "40px 32px",
                  border: "1px solid var(--border)",
                  marginLeft: i === 0 ? 0 : "-1px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "var(--highlight)",
                    marginBottom: "24px",
                  }}
                />
                <h3
                  className="display"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    margin: "0 0 14px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.type}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.8,
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. AI REFLECTION EXPLAINER ───────────────────────────── */}
      <section
        style={{
          background: "var(--bg-dark)",
          color: "var(--text-light)",
          padding: "100px 0",
        }}
      >
        <div className="container">
          <div
            className="ai-explainer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "100px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  margin: "12px 0 28px",
                  color: "#fff",
                }}
              >
                It reads what<br />
                <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
                  you actually wrote.
                </span>
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "var(--text-light-muted)",
                  margin: "0 0 20px",
                }}
              >
                Most AI tools give you generic responses. JourneeX is different - it only knows what you tell it, and it responds to that specifically.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "var(--text-light-muted)",
                  margin: 0,
                }}
              >
                Write about a rough meeting, and it notices the tension. Write about a good run, and it tracks the streak. It isn't therapy. It's a mirror that remembers.
              </p>
            </div>

            {/* Mock reflection card */}
            <div
              style={{
                background: "var(--surface-dark)",
                border: "1px solid var(--border-dark)",
                padding: "40px",
              }}
            >
              <div
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-light-muted)",
                  marginBottom: "20px",
                }}
              >
                Today's reflection
              </div>
              <p
                className="display"
                style={{
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "var(--text-light)",
                  margin: "0 0 28px",
                }}
              >
                "You mentioned feeling behind three times today. That's not a productivity problem - it sounds like the bar keeps moving. What would 'enough' actually look like?"
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {["Clarity", "Self-awareness", "Reflection"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-light-muted)",
                      border: "1px solid var(--border-dark)",
                      padding: "4px 10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ALL FEATURES — BENTO GRID ─────────────────────────── */}
      <section style={{ background: "var(--bg)", padding: "100px 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ marginBottom: "48px" }}>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0, color: "var(--text)" }}>
              Built to last.<br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}>Used every day.</span>
            </h2>
          </div>

          <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)" }}>
            {categoryOrder.flatMap((cat) => featuresByCategory[cat] ?? []).map((f, i, all) => {
              const isHero = i === 0 || i === 1;
              const nonHeroCount = all.length - 2;
              const needsLastPair = nonHeroCount % 4 !== 0;
              const isLastPair = needsLastPair && (i === all.length - 2 || i === all.length - 1);
              const spanTwo = isHero || isLastPair;
              return (
                <Link
                  key={f.slug}
                  href={`/product/${f.slug}`}
                  style={{
                    gridColumn: spanTwo ? "span 2" : "span 1",
                    background: "var(--bg)",
                    padding: isHero ? "48px 40px" : "32px 28px",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: isHero ? "20px" : "12px",
                    transition: "background 0.2s",
                  }}
                  className="bento-card"
                >
                  <h3 className="display" style={{ fontSize: isHero ? "clamp(1.4rem, 2.5vw, 2rem)" : "1.05rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", margin: 0, lineHeight: 1.2 }}>{f.name}</h3>
                  {isHero && <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>{f.description}</p>}
                  {!isHero && <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--text-muted)", margin: 0 }}>{f.tagline}</p>}
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "auto" }}>→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. A DAY IN THE LIFE ─────────────────────────────────── */}
      <section className="section" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div
            className="daylife-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "100px",
              alignItems: "start",
            }}
          >
            <div style={{ position: "sticky", top: "100px" }}>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  margin: "8px 0 24px",
                  color: "var(--text)",
                }}
              >
                A day with<br />
                <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}>
                  JourneeX.
                </span>
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0, maxWidth: "360px" }}>
                Most people spend less than two minutes. Over time those minutes add up to something you can actually learn from.
              </p>
            </div>

            <div>
              {[
                {
                  time: "Morning",
                  action: "Open JourneeX before your first meeting.",
                  detail: "Write what's on your mind. Could be yesterday's leftover stress or just what you're hoping for today. 3 sentences is enough.",
                },
                {
                  time: "Afternoon",
                  action: "Check back after something worth noting.",
                  detail: "A tough call, a breakthrough, a moment you want to remember. Add a quick note. No pressure to write a full entry.",
                },
                {
                  time: "Evening",
                  action: "Read your AI reflection.",
                  detail: "JourneeX picks up on the mood, the patterns, the things you circled without realising. It asks one question back.",
                },
                {
                  time: "Weekend",
                  action: "Review the week.",
                  detail: "Your mood trends, day ratings, and a weekly summary show you the shape of your week - not just how it felt in the moment.",
                },
              ].map((item, i, arr) => (
                <div
                  key={item.time}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "96px 1fr",
                    gap: "28px",
                    paddingBottom: i < arr.length - 1 ? "40px" : 0,
                    marginBottom: i < arr.length - 1 ? "40px" : 0,
                    borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--text-dim)",
                      paddingTop: "4px",
                    }}
                  >
                    {item.time}
                  </div>
                  <div>
                    <div
                      className="display"
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: "10px",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.action}
                    </div>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WRITE YOUR FIRST ENTRY ────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div
            className="try-entry-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  margin: "8px 0 20px",
                  color: "var(--text)",
                }}
              >
                Write today's<br />
                <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}>
                  entry right here.
                </span>
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 16px" }}>
                No account needed to start. Your draft is saved in your browser automatically.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
                When you're ready, hit <strong style={{ color: "var(--text)" }}>Save my entry</strong> - create an account and it's waiting for you inside.
              </p>
            </div>
            <TryEntry />
          </div>
        </div>
      </section>

      {/* ── 8. POSITIONING STRIP ─────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg-dark)",
          color: "var(--text-light)",
          padding: "80px 0",
          borderTop: "1px solid var(--border-dark)",
        }}
      >
        <div className="container">
          <div
            className="positioning-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
              marginTop: "32px",
            }}
          >
            {[
              { not: "Not a notes app.", is: "Notes don't reflect back. JourneeX does." },
              { not: "Not a therapy app.", is: "It won't diagnose you. It'll help you hear yourself." },
              { not: "Not a social feed.", is: "No followers. No likes. Just you." },
            ].map((item, i) => (
              <div
                key={item.not}
                style={{
                  padding: "40px 36px",
                  border: "1px solid var(--border-dark)",
                  marginLeft: i === 0 ? 0 : "-1px",
                }}
              >
                <div
                  className="display"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "12px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  <span style={{
                    textDecoration: "line-through",
                    textDecorationColor: "var(--highlight)",
                    textDecorationThickness: "2px",
                  }}>
                    {item.not.replace(".", "")}
                  </span>
                  .
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "var(--text-light-muted)",
                    margin: 0,
                  }}
                >
                  {item.is}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg-dark)",
          color: "var(--text-light)",
          padding: "100px 0",
          borderTop: "1px solid var(--border-dark)",
        }}
      >
        <div className="container">
          <div
            className="product-cta-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            <h2
              className="display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: 0,
                color: "#fff",
              }}
            >
              All features are live.{" "}
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
                Start writing today.
              </span>
            </h2>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              <a
                href="https://app.journeex.neerajraisinghani.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "14px 36px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.04em",
                  color: "#000",
                  background: "#fff",
                  textDecoration: "none",
                  border: "2px solid #fff",
                  transition: "opacity 0.2s",
                }}
              >
                Open JourneeX
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bento-card:hover { background: var(--surface) !important; }
        .twocol-card:hover { background: var(--surface) !important; }
        .cat-row:hover span:first-child { color: var(--text) !important; }
        @media (max-width: 991px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bento-card { grid-column: span 1 !important; }
          .twocol-grid { grid-template-columns: 1fr !important; }
          .cat-group-grid { grid-template-columns: 1fr !important; }
          .cat-group-grid > div:first-child { border-right: none !important; border-bottom: 1px solid var(--border); padding-right: 0 !important; padding-bottom: 16px; margin-bottom: 24px; }
          .cat-group-grid > div:last-child { padding-left: 0 !important; }
        }
        @media (max-width: 767px) {
          .feature-row { grid-template-columns: 40px 1fr 24px !important; }
          .feature-row-cat { display: none !important; }
          .feature-row-tagline { display: none !important; }
        }
        @media (max-width: 991px) {
          .how-grid { grid-template-columns: 1fr !important; }
          .how-grid > div { margin-left: 0 !important; margin-top: -1px; }
          .persona-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .persona-grid > div { margin-left: 0 !important; }
          .positioning-grid { grid-template-columns: 1fr !important; }
          .positioning-grid > div { margin-left: 0 !important; margin-top: -1px; }
          .ai-explainer-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .daylife-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .try-entry-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .product-cta-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .feature-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-strip { flex-wrap: wrap; gap: 24px !important; }
          .stats-strip > div { border-left: none !important; padding: 0 !important; flex: none !important; width: calc(50% - 12px); }
        }
        @media (max-width: 640px) {
          .persona-grid { grid-template-columns: 1fr !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .stats-strip > div { width: 100%; }
        }
      `}</style>
    </main>
  );
}
