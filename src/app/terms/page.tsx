import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of JourneeX.",
};

const LAST_UPDATED = "October 21, 2025";
const CONTACT_EMAIL = "neeraj@neerajraisinghani.com";

export default function TermsPage() {
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
          Terms
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
            Terms of<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
              Service.
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

            <Section title="Acceptance of terms">
              <p>By creating an account or using JourneeX, you agree to these Terms of Service. If you do not agree, do not use the service.</p>
              <p>JourneeX is operated by Neeraj Raisinghani. References to "we", "us", or "our" mean Neeraj Raisinghani individually.</p>
            </Section>

            <Section title="Eligibility">
              <p>You must be at least <strong>13 years old</strong> to use JourneeX. By creating an account, you confirm that you meet this requirement. If you are under 18, you should review these terms with a parent or guardian.</p>
              <p>We do not knowingly allow children under 13 to use our service. If we discover an account belongs to a child under 13, we will delete it.</p>
            </Section>

            <Section title="Your account">
              <p>You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account.</p>
              <p>You must provide an accurate email address when registering. You may not use JourneeX for any unlawful purpose or in any way that violates these terms.</p>
            </Section>

            <Section title="Your content">
              <p>You own your journal entries. By using JourneeX, you grant us a limited license to process your content solely for the purpose of delivering the service, specifically generating AI reflections and summaries.</p>
              <p>We do not use your entries to train AI models, share them with third parties for commercial purposes, or access them outside of the processes described in our Privacy Policy.</p>
              <p>You are solely responsible for the content you write. Do not write content that is illegal or that infringes the rights of others.</p>
            </Section>

            <Section title="Acceptable use">
              <p>You agree not to:</p>
              <ul>
                <li>Use JourneeX to store content that is illegal under applicable law.</li>
                <li>Attempt to reverse-engineer, scrape, or interfere with the service.</li>
                <li>Share your account with others.</li>
                <li>Use automated tools to interact with the service.</li>
              </ul>
            </Section>

            <Section title="Service availability">
              <p>We aim for high availability but do not guarantee that JourneeX will be available at all times. We may modify, suspend, or discontinue any part of the service at any time. We will make reasonable efforts to notify users of significant changes.</p>
            </Section>

            <Section title="Pricing and payments">
              <p>If JourneeX offers paid plans in the future, the pricing, billing interval, and renewal terms will be clearly displayed before you complete any purchase. Subscriptions, if offered, will auto-renew at the stated interval unless cancelled before the renewal date. Cancellation instructions will be provided at the time of purchase.</p>
            </Section>

            <Section title="Termination">
              <p>You may delete your account at any time. We may suspend or terminate your access if you violate these terms. Upon termination, your data will be deleted in accordance with our Privacy Policy.</p>
            </Section>

            <Section title="Disclaimer of warranties">
              <p>JourneeX is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the service will be error-free, uninterrupted, or that AI reflections will meet your expectations.</p>
            </Section>

            <Section title="Limitation of liability">
              <p>To the maximum extent permitted by law, Neeraj Raisinghani shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of JourneeX. Our total liability to you for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
            </Section>

            <Section title="Governing law">
              <p>These terms are governed by the laws of the Province of Ontario, Canada. Any disputes will be resolved in the courts of Ontario.</p>
            </Section>

            <Section title="Changes to these terms">
              <p>We may update these terms from time to time. Material changes will be communicated by email or by a notice on the site. Continued use after changes are posted constitutes acceptance of the revised terms.</p>
            </Section>

            <Section title="Contact">
              <p>For any questions about these terms:</p>
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
