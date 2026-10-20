import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "JourneeX | Write your day. Hear it back.",
    template: "%s | JourneeX",
  },
  description:
    "JourneeX is a personal AI journal. Write your day and get a warm, human reflection back.",
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
    title: "JourneeX | Write your day. Hear it back.",
    description: "A personal AI journal that reads what you write and reflects it back, warm, human, and honest.",
    url: "https://journeex.neerajraisinghani.com",
    siteName: "JourneeX",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JourneeX | Write your day. Hear it back.",
    description: "A personal AI journal that reads what you write and reflects it back, warm, human, and honest.",
    creator: "@neerajraisinghani",
  },
  robots: { index: false, follow: false },
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
      </body>
    </html>
  );
}
