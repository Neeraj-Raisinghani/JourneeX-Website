import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main style={{ paddingTop: "64px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Hero */}
      <section
        style={{
          background: "var(--bg-dark)",
          color: "var(--text-light)",
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost text */}
        <div
          style={{
            position: "absolute",
            top: -20,
            right: 120,
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(8rem, 22vw, 24rem)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          404
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              margin: "0 0 28px",
              color: "#fff",
            }}
          >
            This page<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
              doesn&apos;t exist.
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontStyle: "italic",
              lineHeight: 1.7,
              color: "var(--text-light-muted)",
              maxWidth: "480px",
              margin: "0 0 48px",
            }}
          >
            The page you were looking for has moved, been deleted, or never existed. Let&apos;s get you back.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/"
              style={{
                display: "inline-block",
                background: "#f5e642",
                color: "#0c0c0a",
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                padding: "14px 28px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Go home
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "var(--text-light-muted)",
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                padding: "14px 28px",
                borderRadius: "4px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
