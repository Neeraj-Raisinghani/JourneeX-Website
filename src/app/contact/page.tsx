import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | JourneeX",
  description: "Get in touch with Neeraj Raisinghani, the builder behind JourneeX. Ask a question, share feedback, or just say hi.",
  openGraph: {
    title: "Contact | JourneeX",
    description: "Get in touch with the builder behind JourneeX.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <div className="page-header">
        <div className="container">
          <div style={{ maxWidth: "600px" }}>
            <span className="eyebrow">Contact</span>
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 20px 0" }}>
              Let&apos;s <span className="gradient-text">connect</span>
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
              Have a question about JourneeX, want to collaborate, or just want to say hi?
            </p>
          </div>
        </div>
      </div>

      <ContactForm />
    </main>
  );
}
