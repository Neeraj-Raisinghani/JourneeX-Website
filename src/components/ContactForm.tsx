"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import PhoneInput, { getCountryCallingCode as getCode } from "react-phone-number-input";
import type { Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type CountrySelectProps = {
  value: Country;
  onChange: (country: Country) => void;
  options: { value: Country | undefined; label: string }[];
  disabled?: boolean;
};

function CountrySelect({ value, onChange, options }: CountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const filtered = options
    .filter((o) => o.value !== undefined)
    .filter((o) => {
      const name = o.label || "";
      const code = o.value ? `+${getCode(o.value)}` : "";
      return (
        name.toLowerCase().includes(search.toLowerCase()) ||
        code.includes(search)
      );
    });

  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      const target = e.target as Node;
      const portal = document.getElementById("country-dropdown-portal");
      if (btnRef.current && !btnRef.current.contains(target) && portal && !portal.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const navbar = document.querySelector<HTMLElement>(".pub-header");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    if (navbar) navbar.style.right = `${scrollbarWidth}px`;
    return () => {
      document.removeEventListener("mousedown", handler);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      if (navbar) navbar.style.right = "";
    };
  }, [open]);

  function handleOpen() {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setDropdownPos({ top: rect.bottom + window.scrollY + 4, left: rect.left + window.scrollX });
    }
    setOpen((o) => !o);
    setSearch("");
  }

  const callingCode = value ? `+${getCode(value)}` : "";

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={handleOpen}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "11px 10px 11px 14px",
          background: "none",
          border: "none",
          borderRight: "1px solid var(--border)",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "var(--text)",
          whiteSpace: "nowrap",
          height: "100%",
        }}
      >
        {callingCode}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ marginLeft: "2px", flexShrink: 0 }}>
          <path d="M1 1l3 3 3-3" stroke="#888480" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <div
          id="country-dropdown-portal"
          style={{
            position: "absolute",
            top: dropdownPos.top,
            left: dropdownPos.left,
            zIndex: 9999,
            background: "var(--bg)",
            border: "1px solid var(--border)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
            width: "240px",
            maxHeight: "280px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "10px 12px", borderBottom: "1px solid #eee" }}>
            <input
              autoFocus
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid var(--border)",
                padding: "7px 10px",
                fontSize: "0.82rem",
                fontFamily: "inherit",
                outline: "none",
                color: "var(--text)",
                background: "var(--bg)",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ overflowY: "auto", flex: 1 }}>
            {filtered.length === 0 ? (
              <div style={{ padding: "12px 14px", fontSize: "0.82rem", color: "#888480" }}>No results</div>
            ) : (
              filtered.map((o) => {
                const c = o.value as Country;
                const name = o.label;
                const code = `+${getCode(c)}`;
                const isSelected = c === value;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => { onChange(c); setOpen(false); setSearch(""); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "8px 14px",
                      background: isSelected ? "var(--surface)" : "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontSize: "0.85rem",
                      color: "var(--text)",
                      textAlign: "left",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = "var(--surface)"; }}
                    onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = "none"; }}
                  >
                    <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", flexShrink: 0 }}>{code}</span>
                  </button>
                );
              })
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

const fieldLabel: React.CSSProperties = {
  display: "block",
  fontSize: "0.82rem",
  fontWeight: 600,
  color: "#1a1816",
  marginBottom: "6px",
};

const boxField: React.CSSProperties = {
  background: "var(--bg)",
  border: "1px solid var(--border)",
  padding: "11px 14px",
  fontSize: "0.875rem",
  color: "var(--text)",
  outline: "none",
  width: "100%",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

const errorText: React.CSSProperties = {
  fontSize: "0.75rem",
  color: "#c0392b",
  marginTop: "5px",
};

function validateEmail(email: string): boolean {
  const atIdx = email.indexOf("@");
  if (atIdx < 1) return false;
  const afterAt = email.slice(atIdx + 1);
  const dotIdx = afterAt.indexOf(".");
  return dotIdx >= 1 && dotIdx < afterAt.length - 1;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formKey, setFormKey] = useState(0);
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<Country>("IN");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => { if (data.country) setCountry(data.country as Country); })
      .catch(() => {});
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string || "").trim();
    const email = (fd.get("email") as string || "").trim();
    const message = (fd.get("message") as string || "").trim();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Please enter your name.";
    if (!email) newErrors.email = "Please enter your email.";
    else if (!validateEmail(email)) newErrors.email = "Please enter a valid email address.";
    if (!message) newErrors.message = "Please enter a message.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    window.location.href = `mailto:neeraj@neerajraisinghani.com?subject=Message from ${name}&body=${message}%0A%0APhone: ${phone || "Not provided"}%0AReply to: ${email}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPhone(undefined);
      setFormKey((k) => k + 1);
    }, 5000);
  }

  return (
    <section style={{ background: "var(--bg)", minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center", padding: "80px 0" }}>
      <div className="container" style={{ width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "72px", alignItems: "center" }} className="contact-grid">

          {/* ── Left ── */}
          <div>
            <Image
              src="/magnific__digital-illustration-a-30yearold-woman-with-dark-h__19161.png"
              alt="Send us a message"
              width={400}
              height={400}
              sizes="(max-width: 900px) 100vw, 400px"
              style={{ width: "100%", maxWidth: "400px", marginBottom: "40px", display: "block" }}
              loading="lazy"
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Start a conversation", detail: "neeraj@neerajraisinghani.com", href: "mailto:neeraj@neerajraisinghani.com" },
                { label: "Connect on LinkedIn", detail: "linkedin.com/in/neerajraisinghani", href: "https://www.linkedin.com/in/neerajraisinghani/" },
                { label: "See my work", detail: "neerajraisinghani.com", href: "https://neerajraisinghani.com" },
              ].map((c) => (
                <div key={c.label}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "3px" }}>{c.label}</div>
                  <a
                    href={c.href}
                    target={c.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.9rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {c.detail}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div>
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "40px 0" }}>
                <div style={{ width: "48px", height: "48px", background: "var(--bg-dark)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 8px" }}>Thanks for your submission.</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    I have received your details and will get back to you as soon as possible.
                  </p>
                </div>
              </div>
            ) : (
              <form key={formKey} onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                {/* Name */}
                <div>
                  <label style={fieldLabel}>Name <span style={{ color: "#888480" }}>*</span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    style={{ ...boxField, borderColor: errors.name ? "#c0392b" : "#ccc9c0" }}
                    onChange={() => errors.name && setErrors((p) => ({ ...p, name: "" }))}
                    onFocus={(e) => (e.currentTarget.style.borderColor = errors.name ? "#c0392b" : "#1a1816")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? "#c0392b" : "#ccc9c0")}
                  />
                  {errors.name && <div style={errorText}>{errors.name}</div>}
                </div>

                {/* Phone */}
                <div>
                  <label style={fieldLabel}>Phone number</label>
                  <div className="phone-input-wrapper">
                    <PhoneInput
                      defaultCountry={country}
                      value={phone}
                      onChange={setPhone}
                      onCountryChange={(c) => c && setCountry(c)}
                      countrySelectComponent={CountrySelect}
                      placeholder="98765 43210"
                      className="phone-input-inner"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label style={fieldLabel}>Email <span style={{ color: "#888480" }}>*</span></label>
                  <input
                    type="text"
                    name="email"
                    placeholder="you@example.com"
                    style={{ ...boxField, borderColor: errors.email ? "#c0392b" : "#ccc9c0" }}
                    onChange={() => errors.email && setErrors((p) => ({ ...p, email: "" }))}
                    onFocus={(e) => (e.currentTarget.style.borderColor = errors.email ? "#c0392b" : "#1a1816")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? "#c0392b" : "#ccc9c0")}
                  />
                  {errors.email && <div style={errorText}>{errors.email}</div>}
                </div>

                {/* Message */}
                <div>
                  <label style={fieldLabel}>Message <span style={{ color: "#888480" }}>*</span></label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Leave us a message..."
                    style={{ ...boxField, resize: "none", borderColor: errors.message ? "#c0392b" : "#ccc9c0" }}
                    onChange={() => errors.message && setErrors((p) => ({ ...p, message: "" }))}
                    onFocus={(e) => (e.currentTarget.style.borderColor = errors.message ? "#c0392b" : "#1a1816")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? "#c0392b" : "#ccc9c0")}
                  />
                  {errors.message && <div style={errorText}>{errors.message}</div>}
                </div>

                {/* Submit error */}
                {submitError && (
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 14px", background: "#fdf2f2", border: "1px solid #f5c6c6" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
                      <circle cx="12" cy="12" r="10" stroke="#c0392b" strokeWidth="2" />
                      <path d="M12 8v4M12 16h.01" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontSize: "0.85rem", color: "#c0392b", lineHeight: 1.5 }}>{submitError}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  style={{ width: "100%", padding: "12px 28px", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.04em", color: "var(--bg)", background: "var(--text)", border: "2px solid var(--text)", cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        /* Phone input wrapper */
        .phone-input-wrapper {
          display: flex;
          align-items: center;
          border: 1px solid var(--border);
          background: var(--bg);
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .phone-input-wrapper:focus-within {
          border-color: var(--text);
        }

        /* Inner phone input */
        .phone-input-inner {
          flex: 1;
          display: flex;
          align-items: center;
        }
        .phone-input-inner input[type="tel"] {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.875rem;
          color: var(--text);
          font-family: inherit;
          padding: 11px 14px;
        }
        .phone-input-inner input[type="tel"]::placeholder {
          color: var(--text-dim);
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
