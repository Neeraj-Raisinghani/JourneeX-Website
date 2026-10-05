import HowItWasBuilt from "@/components/HowItWasBuilt";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | JourneeX",
  description: "How JourneeX works, the philosophy behind it, and the story of how it was built.",
  openGraph: {
    title: "About | JourneeX",
    description: "How JourneeX works and why it was built.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div style={{ maxWidth: "640px" }}>
            <span className="eyebrow">About</span>
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 20px 0" }}>
              What JourneeX is and{" "}
              <span className="gradient-text">how it works</span>
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
              A personal AI journal. One job: write your day and hear it reflected
              back, warm, honest, and human.
            </p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", marginBottom: "64px" }}>
            <span className="eyebrow">How it works</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Three steps. That is it.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-gap)" }}>
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
              <div key={s.step} className="card">
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--border)", marginBottom: "20px", fontVariantNumeric: "tabular-nums" }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "12px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-muted)", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "80px", alignItems: "start" }}>
            <div>
              <span className="eyebrow" style={{ color: "var(--accent-2)" }}>Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ marginBottom: "24px" }}>
                Built on <span className="gradient-text">radical restraint</span>
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "16px" }}>
                Most journal apps are either too minimal, just a text box writing into a void, or
                too complex, buried under mood graphs, streak counters, and habit trackers that
                have nothing to do with why you opened the app.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "16px" }}>
                JourneeX was built around one philosophy: restraint. One job, write, get a
                thoughtful response back. No generic affirmations. No AI therapy. A genuine
                reflection of what you actually wrote.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
                Every feature that is not that is a feature that was not built.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "No streak padding", desc: "Miss a day and the streak resets. It is honest or it is worthless." },
                { label: "No mood graphs", desc: "Your feelings are not a dashboard. They are in what you wrote." },
                { label: "No social sharing", desc: "A journal is private by design. Always." },
                { label: "No generic affirmations", desc: "The AI reads your specific entry, not a wellness template." },
              ].map((item) => (
                <div key={item.label} className="about-check">
                  <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0, fontWeight: 700 }}>+</span>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "4px" }}>{item.label}</div>
                    <div style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it was built */}
      <HowItWasBuilt variant="about" />

      {/* Builder */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">The builder</span>
          <h2 className="text-3xl font-bold tracking-tight" style={{ marginBottom: "20px" }}>
            Built solo by <span className="gradient-text">Neeraj Raisinghani</span>
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "40px" }}>
            Product, design, and development, all one person. JourneeX started as a question:
            what if your journal could write back?
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href="https://app.journeex.neerajraisinghani.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Try JourneeX
            </a>
            <Link href="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
