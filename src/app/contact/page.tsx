import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | JourneeX",
  description: "Get in touch with Neeraj Raisinghani, the builder behind JourneeX.",
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* ── Page hero ── */}
      <section style={{ background: "var(--bg-dark)", color: "var(--text-light)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -20, left: -8, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(8rem, 22vw, 24rem)", fontWeight: 900, color: "rgba(255,255,255,0.03)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1, letterSpacing: "-0.04em" }}>
          CONTACT
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.95, margin: "0 0 28px", color: "#fff" }}>
            Get in touch<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>I read every message</span>
          </h1>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1rem, 1.8vw, 1.25rem)", fontStyle: "italic", lineHeight: 1.7, color: "var(--text-light-muted)", margin: 0, maxWidth: "560px" }}>
            Have a question about JourneeX, a feature request, or just want to say hi?
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
