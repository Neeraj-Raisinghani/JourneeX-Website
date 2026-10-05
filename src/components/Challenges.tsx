const challenges = [
  {
    num: "01",
    title: "Getting the AI tone exactly right",
    body: "The hardest part wasn't the code — it was the prompt. Early versions produced summaries structured like reports: bullet points, section headers, clinical observations. That felt cold and wrong for something as personal as a journal. Multiple iterations of prompt engineering were required to get Claude writing in natural, conversational prose under 250 words — warm, personal, and human. The final prompt instructs it to write the way a thoughtful friend would speak.",
  },
  {
    num: "02",
    title: "Single-file architecture constraints",
    body: "Building everything into one index.html file meant no bundler, no build step, no component framework. Every design decision had to work within those constraints. This was intentional — Cloudflare Workers serves static assets extremely efficiently, and the simplicity of a single file means zero deployment complexity. But it required disciplined, well-organised vanilla JavaScript.",
  },
  {
    num: "03",
    title: "Mobile experience from scratch",
    body: "Journal apps live or die on mobile. A bottom tab navigation system was designed and implemented from scratch in vanilla CSS and JavaScript to give the app a native-feeling mobile experience — no framework overhead, no libraries, just precise CSS and careful state management.",
  },
  {
    num: "04",
    title: "API key security — learned the hard way",
    body: "During development, an API key was accidentally exposed and had to be revoked immediately. This prompted a proper rethink of how secrets are managed in Cloudflare Workers environment variables. A lesson learned once, never forgotten.",
  },
];

export default function Challenges() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4">
          {challenges.map((c) => (
            <div
              key={c.num}
              className="rounded-2xl p-8 flex flex-col md:flex-row gap-6 transition-all duration-200 hover:border-opacity-60"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="text-3xl font-bold shrink-0 tabular-nums"
                style={{ color: "var(--border)" }}
              >
                {c.num}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
