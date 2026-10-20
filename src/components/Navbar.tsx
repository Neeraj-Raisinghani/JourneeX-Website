"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { features } from "@/data/features";

const featureIcons: Record<string, React.ReactNode> = {
  "daily-entries": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><line x1="5" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="5" y1="8" x2="11" y2="8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="5" y1="10.5" x2="8.5" y2="10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
  ),
  "ai-reflections": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l1.2 3.6L13 7l-3.8 1.4L8 12l-1.2-3.6L3 7l3.8-1.4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><circle cx="13" cy="3" r="1" fill="currentColor"/><circle cx="3" cy="12" r="0.8" fill="currentColor"/></svg>
  ),
  "habit-tracker": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M5.5 8l1.8 1.8L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  "mood-day-tracker": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="6" cy="6.5" r="0.8" fill="currentColor"/><circle cx="10" cy="6.5" r="0.8" fill="currentColor"/><path d="M5.5 9.5c.7 1 3.3 1 4.5 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
  ),
  "streak-counter": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9 2C9 2 7 5 7 7c0 .8.4 1.5 1 2C7.5 8.5 6.5 8 6 7c0 0-1.5 2-1.5 3.5C4.5 12.4 6 14 8 14s3.5-1.6 3.5-3.5C11.5 8 9 2 9 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
  ),
  "weekly-summary": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><line x1="5" y1="2" x2="5" y2="4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="11" y1="2" x2="11" y2="4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="2" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.4"/></svg>
  ),
  "reminders": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a4.5 4.5 0 0 0-4.5 4.5c0 2.5-1 3.5-1 3.5h11s-1-1-1-3.5A4.5 4.5 0 0 0 8 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M6.5 10.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
  ),
  "insights-dashboard": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="9" width="3" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="6.5" y="6" width="3" height="8" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="11" y="3" width="3" height="11" rx="1" stroke="currentColor" strokeWidth="1.3"/></svg>
  ),
  "tags-categories": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2h5.5l6.5 6.5-5 5L2.5 7.5V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><circle cx="5.5" cy="5.5" r="1" fill="currentColor"/></svg>
  ),
  "writing-stats": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 12l3.5-4 3 2.5L12 5l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
};

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "Changelog", href: "/changelog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [productOpen, setProductOpen] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => { setNavOpen(false); }, [pathname]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) { setVisible(true); }
      else if (y > lastY) { setVisible(false); }
      else { setVisible(true); }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (productRef.current && !productRef.current.contains(e.target as Node)) {
        setProductOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header className="pub-header" style={{ transform: visible ? "translateY(0)" : "translateY(-100%)", transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%" }}>

          {/* Logo */}
          <Link href="/" className="pub-logo" style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
            Journee
            <span style={{ display: "inline-flex", flexDirection: "column", justifyContent: "center", gap: "5px", width: "24px", height: "24px", marginLeft: "2px" }}>
              <span className="pub-line" style={{ transform: "rotate(45deg) translate(0px, 7px)" }} />
              <span className="pub-line" style={{ opacity: 0 }} />
              <span className="pub-line" style={{ transform: "rotate(-45deg) translate(0px, -7px)" }} />
            </span>
          </Link>

          {/* Center nav links - desktop only */}
          <nav className="pub-desktop-nav">
            {navLinks.map((l) => {
              if (l.href === "/product") {
                return (
                  <div key={l.href} ref={productRef} style={{ position: "relative" }} onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
                    <Link
                      href="/product"
                      className={`pub-desktop-link${pathname === l.href || pathname.startsWith(l.href) ? " active" : ""}`}
                      style={{ display: "flex", alignItems: "center", gap: "5px" }}
                    >
                      {l.label}
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.2s", transform: productOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    {productOpen && (
                      <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", paddingTop: "12px", zIndex: 100, width: "480px" }}>
                        <div style={{ background: "var(--bg-dark)", border: "1px solid var(--border-dark)", boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                            {features.map((f, i) => (
                              <Link
                                key={f.slug}
                                href={`/product/${f.slug}`}
                                onClick={() => setProductOpen(false)}
                                style={{ display: "block", padding: "12px 20px", textDecoration: "none", borderBottom: "1px solid var(--border-dark)", borderRight: i % 2 === 0 ? "1px solid var(--border-dark)" : "none" }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-dark)")}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                              >
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                                  <span style={{ color: "var(--text-light-muted)", flexShrink: 0, display: "flex" }}>{featureIcons[f.slug]}</span>
                                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }}>{f.name}</span>
                                </div>
                                <div style={{ fontSize: "0.72rem", color: "var(--text-light-muted)", lineHeight: 1.4, paddingLeft: "24px" }}>{f.tagline}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`pub-desktop-link${pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href)) ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Right - CTA + mobile hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            <a
              href="https://app.journeex.neerajraisinghani.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="pub-btn"
            >
              Try it live
            </a>
            <button
              className="pub-hamburger pub-mobile-only"
              onClick={() => setNavOpen((o) => !o)}
              aria-label={navOpen ? "Close menu" : "Open menu"}
            >
              <span className="pub-line" style={navOpen ? { transform: "rotate(45deg) translate(0px, 7px)" } : {}} />
              <span className="pub-line" style={navOpen ? { opacity: 0 } : {}} />
              <span className="pub-line" style={navOpen ? { transform: "rotate(-45deg) translate(0px, -7px)" } : {}} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <nav className={`pub-nav${navOpen ? " open" : ""}`} aria-hidden={!navOpen}>
        <div className="container" style={{ display: "flex", flexDirection: "column", height: "100%", paddingTop: "28px", paddingBottom: "40px" }}>
          <div className="pub-nav-toggle">
            <button
              className="pub-hamburger pub-nav-toggle-icon"
              onClick={() => setNavOpen(false)}
              aria-label="Close menu"
            >
              <span className="pub-line" style={{ transform: "rotate(45deg) translate(0px, 7px)" }} />
              <span className="pub-line" style={{ opacity: 0 }} />
              <span className="pub-line" style={{ transform: "rotate(-45deg) translate(0px, -7px)" }} />
            </button>
            <div className="pub-nav-toggle-text">Menu</div>
          </div>

          <div className="pub-nav-links">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`pub-big-link${pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href)) ? " active" : ""}`}
                onClick={() => setNavOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="pub-nav-misc">
            <a href="https://www.linkedin.com/in/neerajraisinghani/" target="_blank" rel="noopener noreferrer" className="pub-text-link">LinkedIn</a>
            <a href="https://neerajraisinghani.com" target="_blank" rel="noopener noreferrer" className="pub-text-link">Portfolio</a>
            <a href="mailto:neeraj@neerajraisinghani.com" className="pub-text-link">Email</a>
            <a
              href="https://app.journeex.neerajraisinghani.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: "auto",
                display: "inline-block",
                padding: "10px 24px",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.04em",
                color: "#000",
                background: "var(--highlight)",
                textDecoration: "none",
              }}
            >
              Try it live
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
