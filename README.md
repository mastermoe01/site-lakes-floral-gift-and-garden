# site-lakes-floral-gift-and-garden

Website for **Lakes Floral Gift & Garden**, 508 Lake Street South, Forest Lake, MN — built by
the Universal Business Studio (`clients/lakes-floral-gift-and-garden/` in the studio repo holds
the research, design brief and status).

- Next.js App Router · Tailwind v4 · React Three Fiber (hero greenhouse) · Motion
- All ordering, events and checkout link out to **lakesfloral.com** (Floranext), the store that
  takes payment. Business facts, prices and reviews live in `lib/site.ts`.
- Video slots: drop `walkthrough.mp4` / `flyover.mp4` (+ `poster-*.jpg`) into
  `public/videos/508-lake-st-s/` and the "Inside Lakes Floral" section appears on the next deploy.

```bash
npm install
npm run dev
```
