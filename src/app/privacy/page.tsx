import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How JourneeX collects, uses, and protects your personal data.",
};

const LAST_UPDATED = "October 21, 2025";
const CONTACT_EMAIL = "neeraj@neerajraisinghani.com";

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* Hero */}
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
            fontSize: "clamp(4rem, 14vw, 16rem)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Privacy
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
            Privacy<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
              Policy.
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
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ maxWidth: "720px" }}>

            <Section title="Who we are">
              <p>JourneeX is a personal AI journaling product created and operated by Neeraj Raisinghani, an individual developer based in Canada. You can reach us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </Section>

            <Section title="Minimum age requirement">
              <p>JourneeX is intended for users who are <strong>13 years of age or older</strong>. We do not knowingly collect, store, or process personal information from children under the age of 13.</p>
              <p>If we become aware that a user is under 13, we will delete that account and all associated data promptly. If you believe a child under 13 has created an account, please contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will act within 72 hours.</p>
              <p>If you are between 13 and 18, we recommend reviewing this policy with a parent or guardian before creating an account.</p>
            </Section>

            <Section title="What data we collect">
              <p>We collect only what is necessary to operate the service:</p>
              <ul>
                <li><strong>Account data</strong>: your email address, used for login and account recovery.</li>
                <li><strong>Journal entries</strong>: the text you write. These are stored securely in Supabase and encrypted at rest and in transit.</li>
                <li><strong>Usage data</strong>: entry timestamps, streak counts, and similar metadata used to power features like the weekly summary and habit tracker.</li>
              </ul>
              <p>We do not collect your full name, phone number, payment information, or location data.</p>
            </Section>

            <Section title="How we use your data">
              <ul>
                <li>To generate your AI reflection in response to each entry.</li>
                <li>To produce your weekly AI summary.</li>
                <li>To operate features such as search, streaks, and mood tracking.</li>
                <li>To send transactional emails (account confirmation, password reset).</li>
              </ul>
              <p>We do not use your journal entries for advertising, profiling, or AI model training. The AI reads your entry solely to generate your personal reflection, and that content is not retained by the AI provider beyond the request lifecycle per their usage policies.</p>
            </Section>

            <Section title="Who we share your data with">
              <p>We share data only with the services required to operate JourneeX:</p>
              <ul>
                <li><strong>Supabase</strong>: database and authentication.</li>
                <li><strong>AI provider</strong>: AI reflection generation. Your entry text is sent to the AI API per request only.</li>
              </ul>
              <p>We do not sell, rent, or share your personal data with any third party for marketing or commercial purposes.</p>
            </Section>

            <Section title="Cookies and tracking">
              <p>JourneeX does not use advertising cookies, tracking pixels, or third-party analytics that read your content. We use only session cookies necessary to keep you logged in.</p>
            </Section>

            <Section title="Data retention">
              <p>Your data is retained for as long as your account is active. If you delete your account, all entries and personal data are deleted from our systems within 30 days. Backups are purged within 90 days.</p>
            </Section>

            <Section title="Your rights">
              <p>Depending on where you live, you may have the right to:</p>
              <ul>
                <li>Access a copy of the personal data we hold about you.</li>
                <li>Correct inaccurate data.</li>
                <li>Request deletion of your data.</li>
                <li>Object to or restrict processing of your data.</li>
                <li>Port your data to another service.</li>
              </ul>
              <p>To exercise any of these rights, email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within 30 days.</p>
            </Section>

            <Section title="Security">
              <p>Your entries are encrypted at rest and in transit using industry-standard TLS. Access to production data is restricted to the operator only. We cannot read your journal entries outside of the processes described in this policy.</p>
            </Section>

            <Section title="Changes to this policy">
              <p>If we make material changes to this policy, we will update the date at the top of this page and, where required, notify you by email. Continued use of JourneeX after changes are posted constitutes your acceptance of the updated policy.</p>
            </Section>

            <Section title="Contact">
              <p>For any privacy questions or data requests:</p>
              <p>
                Neeraj Raisinghani<br />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </Section>

          </div>
        </div>
      </section>

      <style>{`
        .legal-section { margin-bottom: 52px; }
        .legal-section h2 {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--text);
          margin: 0 0 16px 0;
          border-bottom: 1px solid var(--border);
          padding-bottom: 10px;
        }
        .legal-section p, .legal-section li {
          font-size: 0.9375rem;
          line-height: 1.75;
          color: var(--text-muted);
          margin: 0 0 12px 0;
        }
        .legal-section ul { padding-left: 20px; margin: 0 0 12px 0; }
        .legal-section li { margin-bottom: 6px; }
        .legal-section a { color: var(--text); }
        .legal-section strong { color: var(--text); font-weight: 600; }
      `}</style>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="legal-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
