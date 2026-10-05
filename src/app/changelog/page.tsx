import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | JourneeX",
  description: "What is new in JourneeX. Every update, improvement, and new feature documented.",
  openGraph: {
    title: "Changelog | JourneeX",
    description: "Every update to JourneeX, documented.",
    type: "website",
  },
};

const entries = [
  {
    version: "v1.3",
    date: "October 2025",
    tag: "Feature",
    tagColor: "#7c6aff",
    title: "Weekly AI Summaries",
    items: [
      "Every Sunday, Claude reads your week's entries and writes a warm weekly reflection",
      "Summaries are stored permanently alongside your daily entries",
      "Same prompt philosophy as daily reflections, prose only, no bullet points",
    ],
  },
  {
    version: "v1.2",
    date: "September 2025",
    tag: "Feature",
    tagColor: "#7c6aff",
    title: "Habit Tracker | Mood Logging",
    items: [
      "Log daily habits with a one-tap checklist at the top of each entry",
      "Rate your day on a 1 to 5 scale and add mood tags",
      "90-day habit heatmap to visualise consistency over time",
      "Mood and day rating trends plotted across months",
    ],
  },
  {
    version: "v1.1",
    date: "August 2025",
    tag: "Improvement",
    tagColor: "#22d3a5",
    title: "Prompt refinements | Mobile UX",
    items: [
      "Multiple rounds of Claude prompt tuning, reflections now feel noticeably warmer",
      "Removed clinical formatting from AI output, pure prose only",
      "Bottom tab navigation redesigned for better thumb reach on mobile",
      "Auto-save now triggers on blur, not just on submit",
    ],
  },
  {
    version: "v1.0",
    date: "July 2025",
    tag: "Launch",
    tagColor: "#ff6a9b",
    title: "Initial launch",
    items: [
      "Core journaling flow: write, save, receive AI reflection",
      "Supabase authentication and entry storage",
      "Claude-powered reflections, warm conversational prose under 250 words",
      "Single-file architecture deployed on Cloudflare Workers",
      "Mobile-first design with bottom tab navigation",
      "Full-text search across all entries",
      "Entry history timeline",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <div className="page-header">
        <div className="container">
          <div style={{ maxWidth: "600px" }}>
            <span className="eyebrow">Changelog</span>
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 20px 0" }}>
              What&apos;s <span className="gradient-text">new</span>
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
              Every update to JourneeX, documented. No fluff, just what changed and why.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ position: "relative", maxWidth: "720px" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: "11px",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "var(--border)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
              {entries.map((entry) => (
                <div key={entry.version} style={{ paddingLeft: "48px", position: "relative" }}>
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "4px",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "var(--surface)",
                      border: `2px solid ${entry.tagColor}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: entry.tagColor }} />
                  </div>

                  {/* Meta row */}
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: "6px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        background: entry.tagColor + "18",
                        color: entry.tagColor,
                        border: `1px solid ${entry.tagColor}30`,
                      }}
                    >
                      {entry.tag}
                    </span>
                    <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{entry.version}</span>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-dim)" }}>{entry.date}</span>
                  </div>

                  <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px", letterSpacing: "-0.01em" }}>
                    {entry.title}
                  </h2>

                  <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, margin: 0 }}>
                    {entry.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <span
                          style={{
                            marginTop: "2px",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            flexShrink: 0,
                            background: entry.tagColor + "18",
                            color: entry.tagColor,
                          }}
                        >
                          +
                        </span>
                        <span style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-muted)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "80px",
              borderRadius: "var(--radius-lg)",
              padding: "48px",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(124,106,255,0.08), rgba(255,106,155,0.05))",
              border: "1px solid rgba(124,106,255,0.2)",
            }}
          >
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px" }}>Try the latest version</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "28px" }}>
              All updates are live. Free to use.
            </p>
            <a href="https://app.journeex.neerajraisinghani.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open JourneeX
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
