"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { features } from "@/data/features";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductOpen(false);
  }, [pathname]);

  const beforeProduct = [{ label: "About", href: "/about" }];
  const afterProduct = [
    { label: "Changelog", href: "/changelog" },
    { label: "Contact", href: "/contact" },
  ];

  const isProductActive = pathname.startsWith("/product");

  const openDropdown = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setProductOpen(true);
  };
  const closeDropdown = () => {
    hoverTimeout.current = setTimeout(() => setProductOpen(false), 150);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: scrolled ? "rgba(10,10,15,0.95)" : "rgba(10,10,15,0.82)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 32px",
          height: "64px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "32px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ fontWeight: 700, fontSize: "1.15rem", letterSpacing: "-0.02em", textDecoration: "none", flexShrink: 0 }}>
          <span className="gradient-text">JourneeX</span>
        </Link>

        {/* Desktop nav — centered column */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "4px", justifyContent: "center" }}>
          {beforeProduct.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} className={`nav-link${active ? " active" : ""}`}>
                {l.label}
              </Link>
            );
          })}

          {/* Product dropdown — opens on hover */}
          <div
            ref={dropdownRef}
            style={{ position: "relative" }}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              href="/product"
              className={`nav-link${isProductActive ? " active" : ""}`}
              style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
            >
              Product
              <span style={{ fontSize: "0.6rem", opacity: 0.5, transition: "transform 0.2s", transform: productOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                ▼
              </span>
            </Link>

            {productOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-40%)",
                  width: "600px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "16px",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4px",
                }}
              >
                <div style={{ gridColumn: "1 / -1", marginBottom: "8px", paddingBottom: "10px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-dim)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Features</span>
                  <Link href="/product" style={{ fontSize: "0.75rem", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>
                    View all
                  </Link>
                </div>

                {features.map((f) => (
                  <Link key={f.slug} href={`/product/${f.slug}`} className="dropdown-item">
                    <span style={{ width: "30px", height: "30px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", flexShrink: 0, background: f.accentColor + "15", color: f.accentColor, fontWeight: 600 }}>
                      {f.name.charAt(0)}
                    </span>
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--text)", marginBottom: "1px" }}>{f.name}</div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", lineHeight: 1.4 }}>{f.tagline}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {afterProduct.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} className={`nav-link${active ? " active" : ""}`}>
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-end" }}>
          <a
            href="https://app.journeex.neerajraisinghani.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-block"
            style={{ fontSize: "0.875rem", padding: "8px 18px" }}
          >
            Try it live
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              color: "var(--text)",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
              flexDirection: "column",
              padding: "8px",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <span style={{ fontSize: "1rem", lineHeight: 1 }}>x</span>
            ) : (
              <>
                <span style={{ display: "block", width: "14px", height: "1.5px", background: "var(--text-muted)", borderRadius: "2px" }} />
                <span style={{ display: "block", width: "14px", height: "1.5px", background: "var(--text-muted)", borderRadius: "2px" }} />
                <span style={{ display: "block", width: "14px", height: "1.5px", background: "var(--text-muted)", borderRadius: "2px" }} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "rgba(10,10,15,0.98)",
            borderTop: "1px solid var(--border)",
            padding: "8px 24px 24px",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
          className="md:hidden"
        >
          {[...beforeProduct, ...afterProduct].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                display: "block",
                padding: "14px 0",
                fontSize: "0.975rem",
                color: pathname === l.href ? "var(--text)" : "var(--text-muted)",
                textDecoration: "none",
                fontWeight: pathname === l.href ? 500 : 400,
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </Link>
          ))}

          <div>
            <button
              onClick={() => setMobileProductOpen((o) => !o)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "14px 0",
                fontSize: "0.975rem",
                color: isProductActive ? "var(--text)" : "var(--text-muted)",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--border)",
                cursor: "pointer",
                fontWeight: isProductActive ? 500 : 400,
              }}
            >
              Product
              <span style={{ fontSize: "0.6rem", opacity: 0.5, transform: mobileProductOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
            </button>
            {mobileProductOpen && (
              <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
                <Link href="/product" style={{ display: "block", padding: "10px 16px", fontSize: "0.875rem", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>
                  View all features
                </Link>
                {features.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/product/${f.slug}`}
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none" }}
                  >
                    <span style={{ width: "24px", height: "24px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", background: f.accentColor + "15", color: f.accentColor, fontWeight: 600 }}>
                      {f.name.charAt(0)}
                    </span>
                    {f.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://app.journeex.neerajraisinghani.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: "block", marginTop: "16px", textAlign: "center", fontSize: "0.95rem" }}
          >
            Try it live
          </a>
        </div>
      )}
    </nav>
  );
}
