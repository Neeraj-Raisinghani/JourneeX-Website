"use client";
import { useEffect, useRef } from "react";

function mapRange(t: number, start: number, end: number, a: number, b: number) {
  const p = Math.max(0, Math.min(1, (t - start) / (end - start)));
  return a + p * (b - a);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subRef     = useRef<HTMLDivElement>(null);
  const sideRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sub     = subRef.current;
    const side    = sideRef.current;
    if (!section || !sub || !side) return;

    // On mobile, skip the scroll animation — show content immediately
    if (window.innerWidth <= 767) {
      section.style.transform = "none";
      sub.style.opacity   = "1";
      sub.style.transform = "none";
      side.style.opacity  = "0";
      return;
    }

    const vh = window.innerHeight;

    sub.style.opacity   = "0";
    sub.style.transform = "translateY(40px)";
    side.style.opacity  = "0";

    const update = () => {
      const scrollY = window.scrollY;

      // Phase 1 (0 → 1×vh): whole section unwinds
      const raw1 = Math.min(scrollY / vh, 1);
      const t1   = 1 - Math.pow(1 - raw1, 3);
      section.style.transform = `scale(${0.45 + t1 * 0.55}) rotateZ(${28 - t1 * 28}deg)`;

      // Side element fades in as phase 1 completes (t1 > 0.7)
      side.style.opacity = String(mapRange(t1, 0.7, 1, 0, 1));

      // Phase 2 (1×vh → 2×vh): subtitle + CTA fade in
      const raw2 = Math.max(0, Math.min((scrollY - vh) / vh, 1));
      const t2   = 1 - Math.pow(1 - raw2, 3);
      sub.style.opacity   = String(mapRange(t2, 0, 0.6, 0, 1));
      sub.style.transform = `translateY(${mapRange(t2, 0, 0.6, 40, 0)}px)`;
    };

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="hero-wrapper" style={{ height: "300vh", position: "relative" }}>
      <section
        ref={sectionRef}
        className="hero-section"
        style={{
          position: "sticky",
          top: "64px",
          height: "calc(100vh - 64px)",
          background: "var(--bg-dark)",
          color: "var(--text-light)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: "60px",
          paddingTop: "20px",
          overflow: "hidden",
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        <div className="container">

          {/* JOURNEEX title */}
          <div style={{ marginBottom: "40px" }}>
            <h1
              className="display"
              style={{
                fontSize: "clamp(4rem, 16vw, 13rem)",
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#fff",
              }}
            >
              JOUR<br />NEEX
            </h1>
          </div>

          {/* Subtitle + CTA - appears in phase 2 */}
          <div
            ref={subRef}
            className="hero-sub"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "40px",
              alignItems: "flex-end",
              borderTop: "1px solid var(--border-dark)",
              paddingTop: "28px",
              willChange: "opacity, transform",
              opacity: 0,
              transform: "translateY(40px)",
            }}
          >
            <div>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.3rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--text-light-muted)",
                  margin: "0 0 24px 0",
                  lineHeight: 1.55,
                  maxWidth: "480px",
                }}
              >
                A personal AI journal that reads<br />what you write and reflects it back.
              </h2>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
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
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Start journaling
                </a>
                <a
                  href="/product"
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
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
                >
                  All features
                </a>
              </div>
            </div>

            <div className="hero-stats" style={{ display: "flex", gap: "36px", flexShrink: 0 }}>
              {[
                { value: "Daily",  label: "Journaling habit" },
                { value: "E2E",    label: "Encrypted" },
                { value: "<1 min", label: "First entry" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "right" }}>
                  <div className="display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-light-muted)", marginTop: "6px", letterSpacing: "0.05em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Right-side editorial element ── */}
        <div
          ref={sideRef}
          className="hero-side"
          style={{
            position: "absolute",
            right: "48px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            willChange: "opacity",
            opacity: 0,
          }}
        >
          {/* Vertical label */}
          <span
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-light-muted)",
            }}
          >
            Personal AI Journal
          </span>
          {/* Vertical line */}
          <span style={{ width: "1px", height: "80px", background: "var(--border-dark)", display: "block" }} />
          {/* Issue stamp */}
          <span
            style={{
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-light-muted)",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Est. 2024
          </span>
        </div>

        <style>{`
          @media (max-width: 767px) {
            /* ── Collapse scroll wrapper ── */
            .hero-wrapper { height: auto !important; }

            /* ── Section: simple block, no sticky, generous padding ── */
            .hero-section {
              position: relative !important;
              top: 0 !important;
              height: auto !important;
              min-height: 0 !important;
              padding: 52px 0 48px !important;
              justify-content: flex-start !important;
            }

            /* ── Yellow accent bar above title ── */
            .hero-section .container::before {
              content: '';
              display: block;
              width: 32px;
              height: 3px;
              background: var(--highlight);
              margin-bottom: 28px;
            }

            /* ── Title ── */
            .hero-section .container h1 {
              font-size: clamp(4rem, 19vw, 6rem) !important;
              line-height: 0.95 !important;
              letter-spacing: -0.04em !important;
            }

            /* ── Title wrapper spacing ── */
            .hero-section .container > div:first-child {
              margin-bottom: 28px !important;
            }

            /* ── Sub: single column ── */
            .hero-side { display: none !important; }
            .hero-sub {
              display: flex !important;
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 0 !important;
              padding-top: 20px !important;
              opacity: 1 !important;
              transform: none !important;
            }
            .hero-sub > div:first-child {
              width: 100% !important;
            }

            /* ── Subtitle ── */
            .hero-sub h2 {
              font-size: 1rem !important;
              line-height: 1.7 !important;
              margin-bottom: 24px !important;
              max-width: 100% !important;
            }

            /* ── Buttons: side by side, content-sized, no text wrap ── */
            .hero-sub > div > div {
              flex-direction: row !important;
              flex-wrap: nowrap !important;
              gap: 10px !important;
              width: 100% !important;
            }
            .hero-sub > div > div a {
              flex: 0 1 auto !important;
              text-align: center !important;
              box-sizing: border-box !important;
              padding: 10px 16px !important;
              font-size: 0.75rem !important;
              letter-spacing: 0.02em !important;
              white-space: nowrap !important;
              overflow: hidden !important;
              text-overflow: ellipsis !important;
              max-width: 100% !important;
            }

            /* ── Stats: divider row below buttons ── */
            .hero-stats {
              display: flex !important;
              gap: 0 !important;
              margin-top: 32px !important;
              padding-top: 24px !important;
              border-top: 1px solid var(--border-dark) !important;
            }
            .hero-stats > div {
              flex: 1 !important;
              text-align: left !important;
            }
            .hero-stats > div + div {
              border-left: 1px solid var(--border-dark) !important;
              padding-left: 14px !important;
            }
            .hero-stats > div .display {
              font-size: 1.1rem !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
