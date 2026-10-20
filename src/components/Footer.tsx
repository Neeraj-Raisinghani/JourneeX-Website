"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Big background brand text */}
      <div className="footer-bg-text">JourneeX</div>

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "80px", paddingBottom: "60px" }}>
        {/* Footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "60px",
            marginBottom: "60px",
          }}
          className="footer-grid"
        >
          {/* Brand + newsletter */}
          <div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--text-light)",
                margin: "0 0 32px 0",
                lineHeight: 1.2,
              }}
            >
              Write your day.<br />
              <span style={{ color: "var(--text-light-muted)", fontStyle: "italic", fontWeight: 400 }}>
                Hear it back.
              </span>
            </h2>

            <a
              href="https://app.journeex.neerajraisinghani.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "8px",
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
          </div>

          {/* Product */}
          <div>
            <h4
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-light-muted)",
                margin: "0 0 20px 0",
              }}
            >
              Product
            </h4>
            {[
              { label: "Features", href: "/product" },
              { label: "Changelog", href: "/changelog" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "var(--text-light-muted)",
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light-muted)")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Information */}
          <div>
            <h4
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-light-muted)",
                margin: "0 0 20px 0",
              }}
            >
              Information
            </h4>
            {[
              { label: "About", href: "/about" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "var(--text-light-muted)",
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light-muted)")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-light-muted)",
                margin: "0 0 20px 0",
              }}
            >
              Contact
            </h4>
            {[
              { label: "Try JourneeX", href: "https://app.journeex.neerajraisinghani.com/", external: true },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/neerajraisinghani/", external: true },
              { label: "Portfolio", href: "https://neerajraisinghani.com", external: true },
              { label: "Email", href: "mailto:neeraj@neerajraisinghani.com", external: false },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "var(--text-light-muted)",
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light-muted)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid var(--border-dark)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "0.78rem", color: "var(--text-light-muted)" }}>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <Link
              href="/"
              style={{ color: "var(--text-light-muted)", fontStyle: "italic", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light-muted)")}
            >JourneeX</Link>
          </span>
          <span style={{ fontSize: "0.78rem", color: "var(--text-light-muted)", display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link
              href="/privacy"
              style={{ color: "var(--text-light-muted)", textDecoration: "underline", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light-muted)")}
            >Privacy Policy</Link>
            <Link
              href="/terms"
              style={{ color: "var(--text-light-muted)", textDecoration: "underline", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light-muted)")}
            >Terms of Service</Link>
            <a
              href="https://neerajraisinghani.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-light-muted)", textDecoration: "underline", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light-muted)")}
            >
              @neerajraisinghani
            </a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
