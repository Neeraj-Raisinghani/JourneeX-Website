"use client";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "Changelog", href: "/changelog" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/neerajraisinghani/" },
  { label: "Portfolio", href: "https://neerajraisinghani.com" },
  { label: "Email", href: "mailto:neeraj@neerajraisinghani.com" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "56px 0" }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "40px", marginBottom: "48px" }}>
          <div style={{ maxWidth: "220px" }}>
            <div className="gradient-text" style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "8px" }}>JourneeX</div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-dim)", margin: "0 0 20px 0" }}>
              Write your day. Hear it back.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-dim)",
                    textDecoration: "none",
                    padding: "5px 10px",
                    borderRadius: "6px",
                    border: "1px solid var(--border)",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav style={{ display: "flex", flexWrap: "wrap", gap: "8px 4px" }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: "0.875rem" }}>
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://app.journeex.neerajraisinghani.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.875rem", padding: "10px 22px" }}
          >
            Try it live
          </a>
        </div>

        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", margin: 0 }}>
            &copy; {new Date().getFullYear()} JourneeX. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", margin: 0 }}>
            Built by{" "}
            <a href="https://neerajraisinghani.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              Neeraj Raisinghani
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
