"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "journeex_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      // localStorage blocked — don't show banner
    }
  }, []);

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch {}
    setVisible(false);
  }

  function decline() {
    try { localStorage.setItem(STORAGE_KEY, "declined"); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        background: "var(--bg-dark)",
        borderTop: "1px solid var(--border-dark)",
        padding: "20px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.82rem",
            color: "var(--text-light-muted)",
            lineHeight: 1.65,
            flex: 1,
            minWidth: "200px",
          }}
        >
          Analytics cookies are used to understand how visitors use this site.{" "}
          <Link href="/privacy" style={{ color: "#fff", fontWeight: 600, textDecoration: "underline" }}>
            Privacy Policy
          </Link>
        </p>
        <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              padding: "8px 20px",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "var(--text-light-muted)",
              background: "transparent",
              border: "1px solid var(--border-dark)",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-light-muted)";
              e.currentTarget.style.borderColor = "var(--border-dark)";
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              padding: "8px 20px",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "#000",
              background: "var(--highlight)",
              border: "1px solid var(--highlight)",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
