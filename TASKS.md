# JourneeX Tasks

## Legal / Compliance

- [x] Add Privacy Policy page (`/privacy`)
- [x] Add Terms of Service page (`/terms`)
- [x] Link both in footer (nav column + bottom bar)
- [ ] **Marketing emails** — every email sent (launch, newsletter, etc.) must include a physical mailing address and an unsubscribe link in the email template itself. CAN-SPAM requires this per email. Not a code fix, needs to be done in whatever email tool is used (Resend, SendGrid, etc.).
- [ ] **Update Privacy Policy and Terms of Service** — both pages were auto-generated with placeholder details. Review and update with accurate information before going live (company address, jurisdiction, data retention specifics, etc.).

## Pre-launch Checklist

- [ ] **Social preview image** — OG image not set. Links shared to Slack/Twitter/Discord will show blank. Create a 1200x630 image and add it to `layout.tsx` openGraph.images.
- [ ] **Custom 404 page** — Falls back to Next.js default. Create `src/app/not-found.tsx` with branded styling.
- [ ] **robots.txt / indexing** — Entire site currently blocked (`disallow: "/"` + `index: false`). Flip to allow when ready to go live.
- [ ] **Page load speed** — Run a Lighthouse audit before launch. Can't verify in code.
- [ ] **Color contrast** — Needs a visual check. Can't verify without rendering.
- [ ] **Mobile responsiveness** — Coded with responsive breakpoints. Worth a manual check on a real phone.
- [ ] **Broken links** — All internal links look valid from the code. Verify manually before launch.
- [ ] **Contact form backend** — Current form uses `mailto:` which opens the visitor's email client. This is unreliable on mobile and many browsers. Replace with a real backend so that: (1) submissions are delivered to `neeraj@neerajraisinghani.com` automatically, (2) submissions are stored somewhere (database or a tool like Notion/Airtable) for reference. Options: Resend + Supabase (already used in the app), or a form service like Formspree. Also add spam protection (honeypot or Turnstile) once a backend endpoint exists.
- [ ] **Image compression** — Check `public/` folder manually for uncompressed images.
- [ ] **Update email address** — Replace `neeraj@neerajraisinghani.com` used throughout the site (footer, contact page, privacy policy, terms) with the official JourneeX contact email once decided.
- [ ] **Meta titles and descriptions for all pages** — Each page currently has a basic title and description set via Next.js `metadata` export. Review and update all of them before going live. Pages to update: `/` (homepage, in `layout.tsx`), `/about`, `/product`, `/faq`, `/contact`, `/privacy`, `/terms`. Each title should follow the pattern `Page Name | JourneeX` and the description should be a specific, compelling one-liner (under 160 characters) that reflects the page content, not a generic tagline. Also verify `openGraph.title` and `openGraph.description` in `layout.tsx` match.

## Features

- [ ] **Dynamic featured reflection** — replace the hardcoded "Today's reflection" quote on the marketing site with a live fetch from Supabase. Create a `featured_reflection` table with the quote text and tags. Add a Next.js API route (`/api/featured-reflection`) that reads the current row. For fully automatic daily rotation, add a `publish_date` column and batch-write reflections in advance. Update the component to fetch instead of using hardcoded text.

## Notes (no action needed)

- **Cookie consent banner** — Not needed. No tracking cookies in use. Revisit if analytics are added later.
- **Spam protection** — Currently N/A (form uses `mailto:`). Once the form is moved to a real backend, add a honeypot field or Cloudflare Turnstile.
- **Analytics** — FAQ explicitly states "no tracking". Intentional choice, not a gap.
