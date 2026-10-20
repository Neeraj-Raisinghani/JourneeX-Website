import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | JourneeX",
  description: "What is new in JourneeX. Every update, improvement, and new feature documented.",
};

const entries = [
  {
    version: "v1.3",
    date: "October 2025",
    tag: "Feature",
    title: "Weekly AI Summaries",
    summary:
      "Every Sunday, your week is read and written back to you as a single warm reflection. No bullet points, no summaries of summaries. Just the shape of your week in prose.",
    items: [
      { heading: "Sunday reflections", body: "Every Sunday, the AI reads your week's entries and writes a warm weekly reflection. No action needed from you." },
      { heading: "Stored permanently", body: "Summaries live alongside your daily entries so you can read back through them months later like chapters." },
      { heading: "Prose only", body: "Same prompt philosophy as daily reflections. No bullet points, no headers, no generic affirmations." },
    ],
    banner: (
      <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="1200" height="400" fill="#0c0c0a" />
        {/* Grid lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#161614" strokeWidth="1" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={50 * i} x2="1200" y2={50 * i} stroke="#161614" strokeWidth="1" />
        ))}
        {/* Calendar */}
        <rect x="100" y="60" width="360" height="300" rx="4" fill="#111110" stroke="#2e2e2a" strokeWidth="1" />
        <rect x="100" y="60" width="360" height="52" rx="4" fill="#161614" />
        <rect x="100" y="96" width="360" height="16" fill="#161614" />
        <text x="280" y="92" textAnchor="middle" fill="#888480" fontSize="13" fontFamily="monospace" fontWeight="700" letterSpacing="3">OCTOBER 2025</text>
        {["MON","TUE","WED","THU","FRI","SAT","SUN"].map((d, i) => (
          <text key={d} x={127 + i * 48} y="124" textAnchor="middle" fill="#3e3e3a" fontSize="9" fontFamily="monospace" fontWeight="700">{d}</text>
        ))}
        {Array.from({ length: 31 }).map((_, i) => {
          const col = i % 7; const row = Math.floor(i / 7);
          const x = 127 + col * 48; const y = 154 + row * 44;
          const isSunday = col === 6;
          return (
            <g key={i}>
              {isSunday && <rect x={x - 18} y={y - 20} width="36" height="36" rx="18" fill="#f5e642" opacity="0.12" />}
              <text x={x} y={y} textAnchor="middle" fill={isSunday ? "#f5e642" : "#3e3e3a"} fontSize="13" fontFamily="monospace" fontWeight={isSunday ? "700" : "400"}>{i + 1}</text>
            </g>
          );
        })}
        {/* Summary card */}
        <rect x="560" y="60" width="500" height="300" rx="4" fill="#111110" stroke="#2e2e2a" strokeWidth="1" />
        <rect x="560" y="60" width="500" height="2" fill="#f5e642" />
        <text x="580" y="100" fill="#888480" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">WEEKLY SUMMARY — W42</text>
        <line x1="580" y1="116" x2="1040" y2="116" stroke="#2e2e2a" strokeWidth="1" />
        {[0,1,2,3,4,5,6,7,8].map((i) => (
          <rect key={i} x="580" y={130 + i * 20} width={120 + (i % 5) * 40} height="10" rx="2" fill="#1e1e1c" />
        ))}
        <rect x="580" y="326" width="120" height="24" rx="2" fill="#f5e642" opacity="0.1" />
        <text x="640" y="342" textAnchor="middle" fill="#f5e642" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="1">READ REFLECTION</text>
        {/* Ghost text */}
        <text x="900" y="340" fontFamily="Georgia, serif" fontSize="200" fontWeight="900" fill="#0e0e0d" letterSpacing="-8">7</text>
      </svg>
    ),
  },
  {
    version: "v1.2",
    date: "September 2025",
    tag: "Feature",
    title: "Habit Tracker & Mood Logging",
    summary:
      "Log your habits with a single tap each day. Rate your mood, tag how you felt, and watch the patterns emerge after a few weeks. The data is yours and it lives inside your journal.",
    items: [
      { heading: "One-tap habit logging", body: "A checklist at the top of each entry. Tap once to mark a habit done. No separate app, no context switching." },
      { heading: "Mood and day rating", body: "Rate your day on a 1 to 5 scale and add mood tags. Multiple tags per day, create your own." },
      { heading: "Habit heatmap", body: "See a heatmap of any habit over the past 90 days. Patterns emerge faster than you would expect." },
      { heading: "Mood trends over time", body: "Your mood and day ratings are plotted across months so you can spot seasonal shifts and rough patches." },
    ],
    banner: (
      <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="1200" height="400" fill="#0c0c0a" />
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#161614" strokeWidth="1" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={50 * i} x2="1200" y2={50 * i} stroke="#161614" strokeWidth="1" />
        ))}
        {/* Heatmap */}
        <text x="100" y="75" fill="#888480" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">HABIT HEATMAP — 90 DAYS</text>
        {Array.from({ length: 90 }).map((_, i) => {
          const col = i % 18; const row = Math.floor(i / 18);
          const seed = (i * 13 + 7) % 10;
          const fill = seed > 6 ? "#f5e642" : seed > 3 ? "#f5e64244" : "#1e1e1c";
          return <rect key={i} x={100 + col * 28} y={90 + row * 28} width="22" height="22" rx="3" fill={fill} />;
        })}
        {/* Mood chart */}
        <rect x="700" y="60" width="400" height="280" rx="4" fill="#111110" stroke="#2e2e2a" strokeWidth="1" />
        <text x="720" y="96" fill="#888480" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">MOOD TREND</text>
        <line x1="720" y1="108" x2="1080" y2="108" stroke="#2e2e2a" strokeWidth="1" />
        {[1,2,3,4,5].map((v) => (
          <g key={v}>
            <text x="724" y={288 - v * 36} fill="#3e3e3a" fontSize="9" fontFamily="monospace">{v}</text>
            <line x1="740" y1={280 - v * 36} x2="1080" y2={280 - v * 36} stroke="#1e1e1c" strokeWidth="1" />
          </g>
        ))}
        <polyline points="755,244 800,208 845,226 890,172 935,190 980,154 1025,172 1070,136" stroke="#f5e642" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="755,244 800,208 845,226 890,172 935,190 980,154 1025,172 1070,136" stroke="#f5e642" strokeWidth="30" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.04" />
        {[755,800,845,890,935,980,1025,1070].map((x, i) => {
          const ys = [244,208,226,172,190,154,172,136];
          return <circle key={i} cx={x} cy={ys[i]} r="4" fill="#f5e642" />;
        })}
      </svg>
    ),
  },
  {
    version: "v1.1",
    date: "August 2025",
    tag: "Improvement",
    title: "Prompt refinements & Mobile UX",
    summary:
      "We rewrote the reflection prompt from scratch. The previous version was too clinical. The new version is warmer, more specific to what you actually wrote, and shorter when it has less to say.",
    items: [
      { heading: "Warmer reflections", body: "Multiple rounds of prompt tuning. The new version references what you actually wrote rather than producing generic wellness copy." },
      { heading: "Prose only output", body: "Removed all clinical formatting from AI output. No bullet points, no bold headers, no numbered steps. Pure prose." },
      { heading: "Redesigned mobile nav", body: "Bottom tab navigation reworked for better thumb reach. The most-used actions are now in the thumb zone." },
      { heading: "Smarter auto-save", body: "Auto-save now triggers on blur, not just on submit. Close the tab mid-thought and your entry is still there." },
    ],
    banner: (
      <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="1200" height="400" fill="#0c0c0a" />
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#161614" strokeWidth="1" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={50 * i} x2="1200" y2={50 * i} stroke="#161614" strokeWidth="1" />
        ))}
        {/* Before / After prompt */}
        <rect x="100" y="60" width="440" height="280" rx="4" fill="#111110" stroke="#2e2e2a" strokeWidth="1" />
        <rect x="100" y="60" width="440" height="40" fill="#1a1a18" />
        <text x="120" y="85" fill="#3e3e3a" fontSize="10" fontFamily="monospace" fontWeight="700">BEFORE — v1.0</text>
        {["Your entry demonstrates signs of emotional processing.", "Key themes identified: stress, uncertainty, growth.", "Recommended action: reflect on boundaries."].map((line, i) => (
          <text key={i} x="120" y={122 + i * 26} fill="#3e3e3a" fontSize="11" fontFamily="Georgia, serif" fontStyle="italic">{line}</text>
        ))}
        <rect x="660" y="60" width="440" height="280" rx="4" fill="#111110" stroke="#2e2e2a" strokeWidth="1" />
        <rect x="660" y="60" width="440" height="2" fill="#f5e642" />
        <rect x="660" y="60" width="440" height="40" fill="#1a1a18" />
        <text x="680" y="85" fill="#f5e642" fontSize="10" fontFamily="monospace" fontWeight="700">AFTER — v1.1</text>
        {["You wrote about the meeting three times.", "That probably means it is still sitting with you.", "The part about your colleague sounds like it mattered."].map((line, i) => (
          <text key={i} x="680" y={122 + i * 26} fill="#888480" fontSize="11" fontFamily="Georgia, serif" fontStyle="italic">{line}</text>
        ))}
        {/* Arrow */}
        <path d="M560 200 L640 200" stroke="#f5e642" strokeWidth="2" strokeLinecap="round" />
        <path d="M632 192 L640 200 L632 208" stroke="#f5e642" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    version: "v1.0",
    date: "July 2025",
    tag: "Launch",
    title: "JourneeX ships",
    summary:
      "Write. Save. Receive a reflection. That is the whole product. We wanted to see if a journal that talks back felt useful before adding anything else. It did.",
    items: [
      { heading: "Core journaling flow", body: "Write an entry, save it, receive a reflection. That is the entire loop. Nothing more, nothing less." },
      { heading: "Authentication and storage", body: "Supabase handles sign-in and entry storage. Your entries are private and yours." },
      { heading: "AI-powered reflections", body: "Warm conversational prose under 250 words. Grounded in what you wrote, not a wellness template." },
      { heading: "Cloudflare Workers", body: "Single-file architecture deployed globally. Fast everywhere, no cold starts." },
      { heading: "Mobile-first", body: "Designed for the phone. Bottom tab navigation, thumb-zone actions, fast load on a slow connection." },
    ],
    banner: (
      <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="1200" height="400" fill="#0c0c0a" />
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#161614" strokeWidth="1" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={50 * i} x2="1200" y2={50 * i} stroke="#161614" strokeWidth="1" />
        ))}
        {/* Giant J */}
        <text x="80" y="420" fontFamily="Georgia, serif" fontSize="480" fontWeight="900" fill="#111110" letterSpacing="-20">J</text>
        {/* Launch badge */}
        <rect x="560" y="120" width="240" height="80" rx="2" fill="#f5e642" />
        <text x="680" y="153" textAnchor="middle" fill="#000" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="3">JOURNEEX</text>
        <text x="680" y="175" textAnchor="middle" fill="#000" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="3">IS LIVE — JUL 2025</text>
        {/* Stack pills */}
        {["Cloudflare Workers", "Supabase", "Next.js", "AI Reflections"].map((tech, i) => (
          <g key={tech}>
            <rect x="560" y={224 + i * 36} width="240" height="28" rx="2" fill="#161614" stroke="#2e2e2a" strokeWidth="1" />
            <text x="680" y={242 + i * 36} textAnchor="middle" fill="#888480" fontSize="10" fontFamily="monospace">{tech}</text>
          </g>
        ))}
      </svg>
    ),
  },
];

const tagStyle: Record<string, { bg: string; color: string }> = {
  Feature:     { bg: "#f5e642", color: "#000" },
  Improvement: { bg: "var(--surface-dark)", color: "var(--text-light-muted)" },
  Launch:      { bg: "var(--text-light)", color: "var(--bg-dark)" },
};

export default function ChangelogPage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* ── HERO ── */}
      <section style={{ background: "var(--bg-dark)", color: "var(--text-light)", padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -20, left: -8, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(6rem, 18vw, 20rem)", fontWeight: 900, color: "rgba(255,255,255,0.025)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1, letterSpacing: "-0.04em" }}>
          CHANGELOG
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 className="display" style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, margin: "0 0 28px", color: "#fff" }}>
            What&apos;s<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>new</span>
          </h1>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontStyle: "italic", lineHeight: 1.7, color: "var(--text-light-muted)", margin: 0, maxWidth: "440px" }}>
            Every update to JourneeX, documented. No fluff, just what changed and why.
          </p>
        </div>
      </section>

      {/* ── ENTRIES ── */}
      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        {entries.map((entry) => (
          <article key={entry.version} id={entry.version} style={{ borderBottom: "1px solid var(--border)" }}>

            {/* Content */}
            <div className="container">
              <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "64px", padding: "56px 0 72px", alignItems: "start" }} className="cl-content-grid">

                {/* Left: meta */}
                <div style={{ position: "sticky", top: "88px" }}>
                  <span style={{ display: "inline-block", padding: "4px 10px", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "monospace", background: tagStyle[entry.tag]?.bg, color: tagStyle[entry.tag]?.color, marginBottom: "16px" }}>
                    {entry.tag}
                  </span>
                  <div style={{ fontFamily: "monospace", fontSize: "0.75rem", fontWeight: 700, color: "var(--text-dim)", marginBottom: "4px" }}>{entry.version}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontFamily: "monospace" }}>{entry.date}</div>
                </div>

                {/* Right: content */}
                <div>
                  <h2 className="display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 20px" }}>
                    {entry.title}
                  </h2>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 36px", maxWidth: "600px" }}>
                    {entry.summary}
                  </p>
                  {/* Banner — sits between summary and change list */}
                  <div style={{ width: "75%", aspectRatio: "16/9", overflow: "hidden", marginBottom: "36px", borderRadius: "16px" }}>
                    {entry.banner}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {(entry.items as { heading: string; body: string }[]).map((item, j) => (
                      <li key={j} style={{ display: "flex", gap: "20px", alignItems: "flex-start", padding: "10px 0" }}>
                        <div>
                          <h3 className="display" style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, margin: "0 0 8px", color: "var(--text)" }}>{item.heading}</h3>
                          <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--text-muted)", margin: 0 }}>{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--bg-dark)", borderTop: "1px solid var(--border-dark)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -60, right: -40, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(12rem, 32vw, 34rem)", fontWeight: 900, color: "rgba(255,255,255,0.02)", pointerEvents: "none", lineHeight: 1, letterSpacing: "-0.04em" }}>J</div>
        <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "48px", flexWrap: "wrap" }}>
          <div>
            <p className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 12px", color: "#fff" }}>
              All updates are <span className="highlighted-text">live</span>.
            </p>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontStyle: "italic", color: "var(--text-light-muted)", margin: 0 }}>
              Open the app and see for yourself.
            </p>
          </div>
          <a href="https://app.journeex.neerajraisinghani.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 48px", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#000", background: "#fff", textDecoration: "none", flexShrink: 0 }}>
            Open JourneeX
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .cl-content-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </main>
  );
}
