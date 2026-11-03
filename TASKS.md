# JourneeX Tasks

## Legal / Compliance

- [x] Add Privacy Policy page (`/privacy`)
- [x] Add Terms of Service page (`/terms`)
- [x] Link both in footer (nav column + bottom bar)
- [ ] **Marketing emails** — every email sent (launch, newsletter, etc.) must include a physical mailing address and an unsubscribe link in the email template itself. CAN-SPAM requires this per email. Not a code fix, needs to be done in whatever email tool is used. Address to use: 2nd Floor, House No. 18, Roots Courtyard, Sector 48, Gurugram, Haryana, India 122018.
- [ ] **DMCA agent registration** — register at copyright.gov/dmca-directory as a service provider ($6, ~10 min). Required for safe harbor protection if users ever upload copyrighted content. Skip until user volume grows.
- [x] **Update Privacy Policy and Terms of Service** — updated with real address, correct jurisdiction (India), GDPR/CCPA/DPDP Act coverage, named AI provider policy, breach notification, and correct contact email.
- [x] **Contact form backend** — Resend email delivery, reCAPTCHA Enterprise verification, in-memory rate limiting (3/IP/10min), HTML emails to operator and submitter, IP geolocation, device/browser/OS detection.
- [x] **Cookie consent banner** — Implemented; stores preference in localStorage; GA4 not activated until accepted.
- [x] **Hide reCAPTCHA badge** — Hidden via CSS; functionality intact; covered in Privacy Policy (same approach as Airbnb, Stripe).
- [x] **Cookie reset preferences link** — Added to footer so EU/UK users can withdraw consent without manually clearing browser data.
- [x] **Privacy Policy + Terms audit (legal-risk-assessment + compliance-check)** — All risks YELLOW or below. No critical gaps.

### Remaining legal action items (internal — no code changes needed)
- [ ] **Article 30 Record of Processing Activities** — Internal GDPR document (not published). List all processing activities, lawful basis, data categories, recipients, retention periods. Required if EU users are expected.
- [ ] **Data Protection Impact Assessment (DPIA)** — Lightweight internal document for the journal entry + AI processing flow. Not published. Documents that risk was assessed and found acceptable.
- [ ] **AI provider DPA / zero-retention confirmation** — Verify that the actual AI API provider (e.g. Anthropic, OpenAI) has a Data Processing Agreement or zero data-retention policy in place. Keep a copy.
- [ ] **Monitor DPDP Act secondary legislation** — MeitY (India) is still issuing rules under the DPDP Act 2023. Review policy when new rules are notified.

## Pre-launch Checklist

- [x] **Social preview image** — Dynamic OG image via Next.js ImageResponse at `/api/og`. Wired into `layout.tsx` for both OpenGraph and Twitter cards.
- [x] **Custom 404 page** — Created `src/app/not-found.tsx` with branded dark hero, ghost "404" text, and links to home and contact.
- [x] **robots.txt / indexing** — Flipped to `index: true, follow: true` in `layout.tsx`.
- [ ] **Page load speed** — Run a Lighthouse audit before launch. Can't verify in code.
- [ ] **Color contrast** — Needs a visual check. Can't verify without rendering.
- [ ] **Mobile responsiveness** — Coded with responsive breakpoints. Worth a manual check on a real phone.
- [ ] **Broken links** — All internal links look valid from the code. Verify manually before launch.
- [x] **Contact form backend** — Stale item. Form already posts to `/api/contact` (Resend + reCAPTCHA Enterprise, see Legal/Compliance section above). The `mailto:` link in the contact info block is just a display link, not the submission path.
- [ ] **Image compression** — Check `public/` folder manually for uncompressed images.
- [x] **Update email address** — Replaced all instances of `neeraj@neerajraisinghani.com` with `journeex@neerajraisinghani.com` across ContactForm, Footer, Navbar, and FAQ.
- [x] **Meta titles and descriptions for all pages** — Each page currently has a basic title and description set via Next.js `metadata` export. Review and update all of them before going live. Pages to update: `/` (homepage, in `layout.tsx`), `/about`, `/product`, `/faq`, `/contact`, `/privacy`, `/terms`. Each title should follow the pattern `Page Name | JourneeX` and the description should be a specific, compelling one-liner (under 160 characters) that reflects the page content, not a generic tagline. Also verify `openGraph.title` and `openGraph.description` in `layout.tsx` match.

## Content

- [ ] **Changelog images** — Replace placeholder/current images in the changelog page (`src/app/changelog/page.tsx`) with real product screenshots or updated visuals for each version entry.

## Features

- [x] **Dynamic featured reflection** — Implemented without a database. `src/data/reflections.ts` holds a pool of 12 written quotes; `getFeaturedReflection()` picks one deterministically by UTC day-of-year. Product page re-validates every 24h (`export const revalidate = 86400`) so it rotates daily.

## Notes (no action needed)

- **Cookie consent banner** — Implemented. Stores "accepted"/"declined" in localStorage under key `journeex_cookie_consent`. GA4 not activated until accepted. Reset link added to footer.
- **Spam protection** — reCAPTCHA Enterprise on contact form. Rate limiting (3 submissions/IP/10 min) in API route.
- **Analytics** — Google Analytics 4 + Google Tag Manager on both website and app. PostHog on app only. Cookie consent covers GDPR requirement for EU/UK users.
