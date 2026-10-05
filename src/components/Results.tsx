const stats = [
  { value: "<800ms", label: "Global cold load", sub: "via Cloudflare edge" },
  { value: "250", label: "Max words per AI reflection", sub: "pure prose, no bullet points" },
  { value: "∞", label: "Infrastructure cost", sub: "zero, at current scale" },
  { value: "1", label: "File to deploy", sub: "single index.html" },
];

const outcomes = [
  "End-to-end journaling flow live: write, save, receive AI summary",
  "AI summaries consistently praised in testing for feeling warm and non-clinical",
  "Mobile bottom-tab navigation gives app a native feel on all screen sizes",
  "Cold load under 800ms globally via Cloudflare edge deployment",
  "Zero infrastructure cost at current scale",
];

export default function Results() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="text-3xl font-bold mb-1 gradient-text"
              >
                {s.value}
              </div>
              <div className="text-sm font-medium mb-1">{s.label}</div>
              <div className="text-xs" style={{ color: "var(--text-dim)" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Outcomes list */}
        <div
          className="rounded-2xl p-8"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <h3 className="text-lg font-semibold mb-6">Shipped outcomes</h3>
          <ul className="space-y-4">
            {outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0"
                  style={{ background: "rgba(124,106,255,0.15)", color: "var(--accent)" }}
                >
                  ✓
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {o}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lesson learned */}
        <div
          className="mt-8 rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,106,255,0.08), rgba(255,106,155,0.05))",
            border: "1px solid rgba(124,106,255,0.2)",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-dim)" }}>
            Key learning
          </p>
          <p className="text-lg sm:text-xl font-medium leading-relaxed">
            "In AI-powered products,{" "}
            <span className="gradient-text font-bold">the prompt is the product.</span>{" "}
            The underlying technology was straightforward — the hard work was
            figuring out exactly what to say to Claude to get it to respond the way
            a human would. Tone, word choice, constraints, length limits — all of
            it matters enormously."
          </p>
        </div>
      </div>
    </section>
  );
}
