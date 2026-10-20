"use client";
import { useState, useEffect } from "react";

export default function PageIntro() {
  const [phase, setPhase] = useState<"visible" | "sliding" | "gone">("visible");

  useEffect(() => {
    // Hold the white page, then slide it up
    const t1 = setTimeout(() => setPhase("sliding"), 900);
    const t2 = setTimeout(() => setPhase("gone"), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 48px 80px",
        transform: phase === "sliding" ? "translateY(-100%)" : "translateY(0)",
        transition: phase === "sliding"
          ? "transform 0.95s cubic-bezier(0.76, 0, 0.24, 1)"
          : "none",
        pointerEvents: phase === "sliding" ? "none" : "auto",
      }}
    >
      {/* Title - same size/style as the real hero */}
      <div style={{ overflow: "hidden", marginBottom: "32px" }}>
        <h1
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(5.5rem, 20vw, 18rem)",
            fontWeight: 900,
            margin: 0,
            lineHeight: 0.88,
            letterSpacing: "-0.04em",
            color: "var(--text)",
            animation: "introTitleUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          JOUR<br />NEEX
        </h1>
      </div>

      {/* Thin line + tagline */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "24px",
          animation: "introFadeUp 0.6s 0.25s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
            fontStyle: "italic",
            color: "var(--text-muted)",
            margin: 0,
            fontWeight: 400,
          }}
        >
          A personal AI journal. Write your day. Hear it back.
        </p>
      </div>

      <style>{`
        @keyframes introTitleUp {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes introFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          /* Reduce padding on mobile */
        }
      `}</style>
    </div>
  );
}
