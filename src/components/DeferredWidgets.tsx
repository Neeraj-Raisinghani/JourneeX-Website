"use client";
import dynamic from "next/dynamic";

const CookieBanner = dynamic(() => import("./CookieBanner"), { ssr: false });
const Analytics = dynamic(() => import("./Analytics"), { ssr: false });

export default function DeferredWidgets() {
  return (
    <>
      <CookieBanner />
      <Analytics />
    </>
  );
}
