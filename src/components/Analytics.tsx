"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const STORAGE_KEY = "journeex_cookie_consent";
const GTM_ID = "GTM-NN357BKB";
export const COOKIE_CONSENT_EVENT = "journeex-cookie-consent-changed";

export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function check() {
      try {
        setEnabled(localStorage.getItem(STORAGE_KEY) === "accepted");
      } catch {
        setEnabled(false);
      }
    }
    check();
    window.addEventListener(COOKIE_CONSENT_EVENT, check);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, check);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      />
      <Script id="gtm-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());`}
      </Script>
    </>
  );
}
