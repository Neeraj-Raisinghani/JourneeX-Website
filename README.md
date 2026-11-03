# JourneeX

JourneeX is a personal AI journal. Write an entry, and it reads what you actually wrote and reflects it back, not generic wellness copy, not a therapy bot, just a mirror that remembers. The product (separate from this website) includes:

- **Daily journal entries** with an AI-generated reflection after each one
- **Weekly AI summaries**, a single warm reflection on the shape of your week
- **Habit tracking** with one-tap daily logging and a 90-day heatmap
- **Mood and day-rating logging**, plotted as trends over time
- **Full-text search** across every past entry
- End-to-end encrypted storage, no ads, no data selling, no training AI models on journal content

The app itself lives at [app.journeex.neerajraisinghani.com](https://app.journeex.neerajraisinghani.com). 
---

## Favicon & Social / Share Icons

- **Favicon**: `public/favicon.svg`, wired up in `src/app/layout.tsx` via `metadata.icons` (`icon` + `shortcut`).
- **Open Graph / Twitter card image**: generated dynamically at request time by `src/app/api/og/route.tsx` using `next/og`'s `ImageResponse`, no static image file to keep in sync. Referenced from `metadata.openGraph.images` and `metadata.twitter.images` in `layout.tsx`.
- **Social links** (footer, contact page, metadata `authors`/`creator`):
  - LinkedIn: [linkedin.com/in/neerajraisinghani](https://www.linkedin.com/in/neerajraisinghani/)
  - Portfolio: [neerajraisinghani.com](https://neerajraisinghani.com)
  - Twitter/X handle in `metadata.twitter.creator`: `@neerajraisinghani`
- **App link**: every primary CTA ("Start journaling", "Open JourneeX") points to [app.journeex.neerajraisinghani.com](https://app.journeex.neerajraisinghani.com/).

---

## License

Private, unlicensed. All rights reserved by Neeraj Raisinghani.
