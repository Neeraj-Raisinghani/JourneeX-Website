# JourneeX Website — Pending Tasks

---

## 1. OG image for social sharing

**Issue:** There is no `opengraph-image.png` (or `.jpg`) file in `src/app/`. When someone shares any JourneeX URL on Twitter, LinkedIn, or iMessage, the preview card will have no image — just text.

**Why it matters:** OG images dramatically increase click-through on social shares. Without one the card looks unfinished.

**How to fix:** Two options:
- **Static:** Create a 1200x630px branded image and place it at `src/app/opengraph-image.png`. Next.js picks it up automatically.
- **Dynamic:** Create `src/app/opengraph-image.tsx` using the Next.js `ImageResponse` API (from `next/og`) to generate the image at build time. This also lets feature sub-pages generate their own OG image with the feature name and icon.

**When:** Before going live. High priority for social sharing.

---

## 2. Scroll-triggered animations

**Issue:** CSS animation classes (`animate-fade-up`, etc.) are defined in `globals.css` and applied to the Hero section, but no other section animates on scroll. Problem cards, feature cards, changelog entries, and about cards all appear instantly with no entrance.

**Why it matters:** The site feels static below the hero. Scroll-triggered animations make the page feel alive and polished.

**How to fix:** Create `src/components/FadeUp.tsx` — a client component that uses `IntersectionObserver` to add an `animate-fade-up` class when the element enters the viewport. Wrap card grids and section headers with it.

**When:** Nice to have before launch. Medium priority.

---

## 3. About page "How it works" is centre-aligned

**Issue:** In `src/app/about/page.tsx`, the "How it works" section header has `textAlign: "center"` and `margin: "0 auto"` applied inline. Every other section header on the site is left-aligned.

**How to fix:** Remove `textAlign: "center"` and `margin: "0 auto"` from the section header div. Use `.section-header` class instead.

**When:** Quick fix — 5 minutes.

---

## 4. Mobile nav order does not match desktop

**Issue:** On desktop the nav order is: About | Product | Changelog | Contact. In the mobile menu, Product renders as a separate accordion block at the bottom — so the mobile order is: About, Changelog, Contact, Product.

**How to fix:** In the mobile menu section of `src/components/Navbar.tsx`, move the Product accordion to appear between About and Changelog.

**When:** Quick fix — 10 minutes.

---

## 5. Custom 404 page

**Issue:** There is no `src/app/not-found.tsx`. Any invalid URL shows Next.js's default white 404 page, completely off-brand.

**How to fix:** Create `src/app/not-found.tsx` with the site's dark theme, a short message, and links back to Home and Product.

**When:** Before launch. Medium priority.

---

## 6. Enable indexing before launch

**Issue:** `src/app/layout.tsx` has `robots: { index: false, follow: false }` and `src/app/robots.ts` has `disallow: "/"`. Set intentionally during development.

**How to fix:**
- `layout.tsx`: change `index: false, follow: false` → `index: true, follow: true` in both `robots` and `googleBot` blocks
- `robots.ts`: change `disallow: "/"` → `allow: "/"`

**When:** Last step before going live.

---

## Summary

| # | Task | Priority | Effort |
|---|------|----------|--------|
| 1 | OG image for social sharing | High | ~1 hour |
| 2 | Scroll-triggered animations | Medium | ~1–2 hours |
| 3 | About page centre-align fix | Low | ~5 min |
| 4 | Mobile nav order fix | Low | ~10 min |
| 5 | Custom 404 page | Medium | ~30 min |
| 6 | Enable indexing before launch | High | ~2 min |

---

## Completed

| Task | Notes |
|---|---|
| Multi-page site (Home, About, Product, Changelog, Contact) | Done |
| Product dropdown (hover) with 12 feature sub-pages | Done |
| Breadcrumb on feature sub-pages | Done |
| Full SEO metadata (global + per-page + dynamic for /product/[slug]) | Done |
| sitemap.xml covering all 17 pages | Done |
| robots.txt | Done |
| noindex / nofollow during development | Done — flip before launch (task 6) |
| Contact page metadata (server/client split) | Done — `ContactForm.tsx` is the client component |
| No em dashes anywhere (use \| instead) | Done |
| No emojis | Done |
| Consistent spacing via CSS tokens | Done |
| Left-aligned content site-wide | Done |
| Navbar = footer width alignment (both use .container) | Done |
| Centered navbar links (3-column grid layout) | Done |
| Nav order: About | Product | Changelog | Contact (Home removed) | Done |
| Hero animations (fade-up, float, animated gradient) | Done |
| Social links in footer (LinkedIn, Portfolio, Email) | Done |
| Contact page two-column layout (form + social cards) | Done |
| About builder section — Portfolio removed, Get in touch → /contact | Done |
| Hero spacing fixed (removed minHeight: 100vh) | Done |
