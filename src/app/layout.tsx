import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JourneeX | AI Journal That Reflects Back",
    template: "%s | JourneeX",
  },
  description:
    "Write your daily thoughts and get a warm, honest AI reflection back. JourneeX is the personal journal that actually responds.",
  keywords: [
    "AI journal",
    "personal journal app",
    "daily journaling",
    "AI reflections",
    "journaling habit",
    "mood tracker",
    "habit tracker",
    "JourneeX",
    "Neeraj Raisinghani",
  ],
  authors: [{ name: "Neeraj Raisinghani", url: "https://neerajraisinghani.com" }],
  creator: "Neeraj Raisinghani",
  metadataBase: new URL("https://journeex.neerajraisinghani.com"),
  openGraph: {
    title: "JourneeX | AI Journal That Reflects Back",
    description: "Write your daily thoughts and get a warm, honest AI reflection back. JourneeX is the personal journal that actually responds.",
    url: "https://journeex.neerajraisinghani.com",
    siteName: "JourneeX",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "JourneeX — AI Journal That Reflects Back",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JourneeX | AI Journal That Reflects Back",
    description: "Write your daily thoughts and get a warm, honest AI reflection back. JourneeX is the personal journal that actually responds.",
    creator: "@neerajraisinghani",
    images: ["/api/og"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <div style={{ paddingTop: "64px" }}>{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
