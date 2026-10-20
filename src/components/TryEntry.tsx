"use client";
import { useEffect, useRef, useState } from "react";

export default function TryEntry() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  useEffect(() => {
    try {
      const cached = localStorage.getItem("jx_draft");
      if (cached) setText(cached);
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("jx_draft", text); } catch {}
  }, [text]);

  const handleSave = () => {
    const encoded = btoa(unescape(encodeURIComponent(text)));
    window.open(
      `https://app.journeex.neerajraisinghani.com/signup?draft=${encoded}`,
      "_blank"
    );
    setSaved(true);
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div
      style={{
        background: "var(--surface-dark)",
        border: "1px solid var(--border-dark)",
        padding: "48px",
        position: "relative",
      }}
    >
      {/* Journal header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "28px",
          paddingBottom: "20px",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--text-light-muted)",
              marginBottom: "6px",
            }}
          >
            New Entry
          </div>
          <div
            className="display"
            style={{
              fontSize: "1rem",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--text-light-muted)",
            }}
          >
            {today}
          </div>
        </div>
        {text.length > 0 && (
          <div
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-light-muted)",
              opacity: 0.6,
            }}
          >
            {wordCount} {wordCount === 1 ? "word" : "words"}
          </div>
        )}
      </div>

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => { setText(e.target.value); setSaved(false); }}
        placeholder="How was your day? What's on your mind? There's no wrong answer - just start writing."
        style={{
          width: "100%",
          minHeight: "200px",
          background: "transparent",
          border: "none",
          outline: "none",
          resize: "none",
          color: "var(--text-light)",
          fontSize: "1.05rem",
          lineHeight: 1.85,
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          caretColor: "var(--highlight)",
        }}
      />

      {/* Footer row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "28px",
          paddingTop: "20px",
          borderTop: "1px solid var(--border-dark)",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-light-muted)",
            margin: 0,
            maxWidth: "360px",
            lineHeight: 1.6,
          }}
        >
          {text.length === 0
            ? "Your entry stays in your browser until you're ready to save it."
            : saved
            ? "Draft saved - finish signing up to keep it forever."
            : "Draft auto-saved in your browser."}
        </p>

        <button
          onClick={handleSave}
          disabled={text.trim().length < 5}
          style={{
            display: "inline-block",
            padding: "12px 28px",
            fontWeight: 700,
            fontSize: "0.875rem",
            letterSpacing: "0.04em",
            color: text.trim().length < 5 ? "rgba(0,0,0,0.4)" : "#000",
            background: text.trim().length < 5 ? "rgba(245,230,66,0.3)" : "var(--highlight)",
            textDecoration: "none",
            border: "2px solid transparent",
            cursor: text.trim().length < 5 ? "not-allowed" : "pointer",
            transition: "opacity 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => { if (text.trim().length >= 5) e.currentTarget.style.opacity = "0.8"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          Save my entry →
        </button>
      </div>
    </div>
  );
}
