import FaqAccordion from "@/components/FaqAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | JourneeX",
  description: "Answers to the most common questions about JourneeX - how it works, privacy, AI reflections, and more.",
};

const faqs = [
  {
    q: "What is JourneeX?",
    a: "JourneeX is a personal AI journal. You write your day - anything on your mind - and it reflects it back to you. Not generic advice, not therapy. A warm, honest response to what you actually wrote.",
  },
  {
    q: "Do I need an account to try it?",
    a: "No. You can write your first entry directly on the product page without signing up. Your draft is saved in your browser. When you're ready to keep it, create an account and it's waiting for you.",
  },
  {
    q: "How does the AI reflection work?",
    a: "When you save an entry, the AI reads exactly what you wrote and generates a response tuned to your words. It picks up on mood, patterns, and things you said between the lines. The reflection is under 250 words, written in prose, like a thoughtful friend.",
  },
  {
    q: "Is it just generic wellness advice?",
    a: "No. That's exactly what we built against. The AI only knows what you tell it in that entry. It won't give you generic affirmations. It responds to the specific thing you wrote.",
  },
  {
    q: "What is the weekly AI summary?",
    a: "Every week, all your entries from the past seven days are read and distilled into a single summary - the shape of your week, recurring themes, mood patterns. It's stored permanently alongside your daily entries.",
  },
  {
    q: "Who can see my journal entries?",
    a: "Only you. Entries are stored securely in Supabase and are never shared, sold, or used to train any AI model. Your journal is private by design.",
  },
  {
    q: "Is my data encrypted?",
    a: "Yes. JourneeX uses end-to-end encryption. Your entries are encrypted at rest and in transit.",
  },
  {
    q: "Does JourneeX use my entries to train AI?",
    a: "No. Your entries are never used to train AI models. The AI reads your entry to generate a reflection, and that's it. We do not store or pass your content to any third party beyond what is necessary to generate your reflection.",
  },
  {
    q: "What features are included?",
    a: "Daily entries, AI reflections, entry history, search, habit tracker, mood and day tracker, streak counter, weekly AI summary, tags and categories, writing stats, and a full mobile experience. All features are live.",
  },
  {
    q: "Are there ads?",
    a: "Never. JourneeX has no ads, no tracking pixels, and no third-party analytics that read your content.",
  },
  {
    q: "Is there a mobile app?",
    a: "JourneeX is a progressive web app - it works on any device through your browser, and can be added to your home screen on iOS and Android for a native feel.",
  },
];

export default function FAQPage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* ── Hero ── */}
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
          FAQ
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
            Questions<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
              answered honestly.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontStyle: "italic",
              lineHeight: 1.7,
              color: "var(--text-light-muted)",
              maxWidth: "520px",
              margin: 0,
            }}
          >
            Everything you want to know before you start writing.
          </p>
        </div>
      </section>

      {/* ── Accordion ── */}
      <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── CTA ── */}
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
            className="faq-cta-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
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
              Still have questions?{" "}
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
                Just ask.
              </span>
            </h2>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              <a
                href="mailto:neeraj@neerajraisinghani.com"
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
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Email
              </a>
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
                  color: "#fff",
                  background: "transparent",
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.3)",
                  whiteSpace: "nowrap",
                }}
              >
                Try JourneeX
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .faq-cta-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </main>
  );
}
