

## Reality check on the SEO/crawl claim

**You're partially right, but for a different reason than you think.**

What I found:
1. **The homepage HTML returned to Googlebot is empty** — `<div id="root"></div>` with no body content. The site is a Vite SPA (client-side React), so crawlers must execute JavaScript to see anything. Google does this, but slower and less reliably than for static HTML. Bing, LinkedIn, Reddit, ChatGPT, Perplexity, and most AI crawlers see a blank page.
2. **The hero chat itself is fine** — even if the JS executes, the bubbles ("What I actually do?", "I help brands become more human", etc.) are real `<div>` text and Google reads them. It's no worse than any other JS-rendered text.
3. **The real SEO killers** are:
   - Hero `<h1>` is missing — the visual headline lives in chat bubbles and `<p>` tags. The page has no `<h1>` at all on the homepage above the fold.
   - The huge name "FERRY HOES" tagline uses `<p>`, not `<h1>`.
   - All content is client-rendered (no SSR/SSG).

**Learning curve concern is also valid** — a corporate booker landing on a video + chat bubbles needs to immediately see: who, what, proof. Right now they see a video and a question.

## What your three sites have in common (the "Ferry signature")

Looking at brandhumanizing.com and aigeletterdheid.academy:

| Element | Pattern |
|---|---|
| **Hero headline** | Massive (5xl–7xl), bold, two-tone (dark + accent color word), ends with a period |
| **Structure** | Label (uppercase tracked) → giant headline with period → short subline → 1-2 CTAs → social proof logos right under hero |
| **Tone** | Declarative statements, not questions. "Everyone can copy your technology. No one can copy your people." |
| **Proof** | Polaroid/photo cards with handwritten captions ("actual humans") |
| **Color discipline** | Cream/off-white background, one bold brand color for the punch word, accent (orange/coral) for CTAs |
| **Periods** | Every headline closes with a period or full-stop dot |

This is **the Ferry signature** — and your personal site is the only one that doesn't use it.

## The overhaul

### 1. Hero rebuild (replaces current chat-only hero)

Keep the video (it's beautiful) but layer a **proper editorial hero** on top so bookers and crawlers get the message in 2 seconds.

```text
┌─────────────────────────────────────────────────┐
│  [video bg, dark overlay]                       │
│                                                 │
│  • INTERNATIONAL KEYNOTE SPEAKER                │
│                                                 │
│  Most people make AI                            │
│  complicated.                                   │
│  I make it human.                               │
│                                                 │
│  Through keynotes, a book, and one big idea:    │
│  Brand Humanizing.                              │
│                                                 │
│  [ Book Ferry → ]   [ Watch the reel ]          │
│                                                 │
│  Trusted by Vodafone · GSK · Toshiba · Atos    │
└─────────────────────────────────────────────────┘
```

- Real `<h1>` with the headline (every word ends with period dot in brand coral).
- The chat experience moves to a small "Continue the conversation →" link, OR becomes the `/conversation` page only (it stays as the easter egg it was designed to be).
- Below the hero: the existing client logo marquee.

### 2. Apply the "Ferry signature" to every section title

Every `<h2>` across the homepage gets the same treatment:
- Large (5xl–6xl), bold, Plus Jakarta Sans
- One word colored in teal or coral
- Closing period in coral (you already have a `HeadingDot` — formalize and apply everywhere consistently)

Examples:
- About: "I help brands become more **human**." 
- Brand Humanizing: "A strategy for the **digital age**."
- Speaker: "On stages where it **matters**."
- Book: "I wrote the book on it. **Literally**."
- Podcast: "Conversations worth your **commute**."

### 3. Booker-friendly "Quick facts" strip

Add a thin strip directly under the hero (above logos) so corporate visitors see the essentials in <5 seconds:
- 100+ keynotes · 12 countries · EN/NL · Available 2026

### 4. Crawlability fixes

- Add **prerendering** via `vite-plugin-prerender` or `react-snap` for the static routes (/, /about, /speaking, /blog, /contact, /podcast, /press). Crawlers and AI bots get real HTML; users still get the SPA.
- Add a real `<h1>` to the homepage (hero headline).
- Move SEOHead defaults into `index.html` for the root route so the initial response carries the right title/description/OG.

### 5. Keep what's working

- Conversation page stays exactly as is (it's brilliant as the "second layer")
- Color palette (teal #0E7490 + coral #E86A4A + cream)
- Section structure (AboutBlock, BrandHumanizing, Speaker, Book, Podcast, Blog, AboutFerryLLM, Community, Footer)
- All blog/admin/press infrastructure

## Files to change

| File | Change |
|---|---|
| `src/components/sections/HeroVideo.tsx` | Rebuild: editorial hero with `<h1>`, keep video bg, add CTAs, demote chat to a small "Continue the conversation" link |
| `src/components/sections/QuickFacts.tsx` | NEW — thin proof strip under hero |
| `src/components/SectionLabel.tsx` | Already good; reuse |
| `src/components/HeadingDot.tsx` | NEW — small coral dot component for closing every h1/h2 (formalizes the signature) |
| `src/components/sections/AboutBlock.tsx` | Restyle headline in Ferry signature (giant, period-dot) |
| `src/components/sections/BrandHumanizingSection.tsx` | Same treatment |
| `src/components/sections/SpeakerSection.tsx` | Same |
| `src/components/sections/BookSection.tsx` | Same |
| `src/components/sections/PodcastSection.tsx` | Same |
| `src/components/sections/BlogSection.tsx` | Same |
| `src/pages/Index.tsx` | Insert `<QuickFacts />` after hero |
| `vite.config.ts` + `package.json` | Add `vite-plugin-prerender` for static-route prerendering |
| `index.html` | Update default title/description to match homepage |

## Out of scope (ask later if wanted)

- Rebuilding interior pages (About, Speaking, Blog) — only homepage signature lift in this pass
- Smashlab comparison (site isn't published, couldn't analyze)
- Migrating off SPA to Next.js — prerendering covers 95% of the SEO benefit at ~5% of the effort

