

## What you're asking for

A full editorial rebuild of ferryhoes.com as a credibility hub (not a storefront). New design system (Fraunces serif + Inter, warm off-white + ink + teal/terracotta accents), new headline formula (bold word inside headline, not orange period), 7 pages total, every "Book Ferry" CTA goes external to Speakers Academy, no internal forms except newsletter/waitlist stubs.

## Conflicts with current build (flagging before touching)

1. **Typography flips entirely.** Current = Inter Tight (sans display) + Caveat. New = **Fraunces** (serif display) + Inter + Caveat. Drops Inter Tight everywhere.
2. **Color palette shifts.** Current = cream `#F6F1EA` + ink + orange `#F2542D` (single accent). New = warm off-white `#F5F1EA` + ink + **teal `#2A5F6A`** + **terracotta `#B8472E`** + highlight yellow `#F4D35E`. **Teal returns** (after we just killed it). Orange is gone. Memory will be rewritten.
3. **Headline signature changes.** Current = `plain. accent-orange-word. <Period />` (orange dot full-stop). New = `plain. **bold-word.**` where the bold word stays the same weight but gets a subtle teal tint OR sits at 100% while rest is 85% opacity. **The orange `<Period />` component dies.** I'll pick the teal-tint approach for consistency.
4. **`/book` page is killed.** Current `/book` has a real Zod-validated speaker enquiry form wired to Supabase + edge function. New spec: every "Book Ferry" is `target="_blank"` to `https://www.speakersacademy.com/nl/spreker/ferry-hoes/`. The Supabase form, `contact_messages` table, and `notify-contact` edge function become orphaned (I'll keep them in repo, unmount the route, redirect `/book` and `/contact` externally via a thin redirect component).
5. **`/podcast` becomes a real page** (currently a homepage block with a `Podcast.tsx` placeholder). New: hero + subscribe strip + episode list + about + pitch-a-guest mailto.
6. **`/the-book` adds an English-edition waitlist.** Currently the waitlist lives on the homepage `BookSection`. Per spec it moves to `/the-book` (and a smaller version stays on the homepage block).
7. **Site is English-only.** Removes any leftover Dutch i18n scaffolding intent.
8. **Buttons restyle.** No rounded pills. New = solid ink rectangles with off-white text, uppercase 12px tracked label, hover→teal. Ghost = text-only with underline-on-hover. `<PillButton>` gets renamed/restyled to `<Button>` (two variants: `primary`, `ghost`).
9. **Cards lose their roundness.** `border-radius` capped at 2px globally. `--radius` token drops from `0.75rem` → `2px`.
10. **Bold-in-headline pattern.** I'll add a `<Bold>` helper (or just use `<strong className="text-foreground">` with the rest of the headline at `opacity-85`) so the markdown-style `**word**` in your copy renders consistently.

## Build plan

### 1. Design tokens — rewrite `src/index.css` + `tailwind.config.ts`

Tokens:
- `--background` `#F5F1EA`, `--background-alt` (subtle warm), `--foreground` `#1A1A1A`
- `--primary` `#1A1A1A` (ink — buttons), `--primary-foreground` `#F5F1EA`
- `--accent` `#2A5F6A` (teal — links + signature moments + button hover)
- `--terracotta` `#B8472E` (eyebrows, captions)
- `--highlight` `#F4D35E` (italic-bold body emphasis, 1×/section)
- `--muted-foreground`, `--border` `#D4CDC0`
- `--radius` → `2px`

Fonts (Google): Fraunces (display, 400/500/600/700 + italic), Inter (body, 400/500/600), Caveat (handwritten, 400). Swap in `index.html`. Drop Inter Tight.

Animations: fade-up-on-scroll (400ms ease-out, 80ms stagger), link underline draw (200ms), photo hover scale 1.02 + ink overlay. Respect `prefers-reduced-motion`.

### 2. Primitives

| Component | Change |
|---|---|
| `Eyebrow` (in `HeadingDot.tsx`) | Restyle: terracotta, `•` bullet glyph (not a colored dot div), uppercase, 0.15em tracking |
| `Period` | **Delete** (no longer in headline formula) |
| `Bold` (new, tiny) | Renders the bold word inside headlines with subtle teal tint, while parent applies `opacity-85` to the rest. Or: `<strong className="text-foreground">` with parent set to muted ink. I'll go with **strong + parent opacity** — simpler. |
| `Polaroid` | Keep but soften: white border, less rotation (max 2°), warm tone overlay, hover scale 1.02 |
| `PillButton` → `Button` | Rewrite: rectangular, sharp corners, two variants `primary` (ink bg) and `ghost` (text + underline-on-hover). Add `external` prop that auto-adds `target="_blank" rel="noopener noreferrer"` |
| `RuleLine` (new) | 1px `--border` divider for magazine-style section breaks |
| `HandwrittenCaption` (new) | Caveat font, ink color, sized for photo overlays |
| `PullQuote` (new) | Oversized Fraunces italic, optional terracotta quotation mark |

### 3. Constant for the agent URL

`src/config/site.ts` already exists — add `SPEAKERS_ACADEMY_URL = "https://www.speakersacademy.com/nl/spreker/ferry-hoes/"` and import everywhere a "Book Ferry" CTA appears.

### 4. Global elements

- **`SiteHeader`** rewrite: Fraunces wordmark "FERRY HOES.", center nav (Inter 14px, terracotta underline-on-hover), right CTA = ink rectangle "Book Ferry →" external. Sticky, off-white, backdrop-blur on scroll, hairline border.
- **`Footer`** rewrite: 3 columns (bio / The Letter newsletter / Also by Ferry + site links + socials). Newsletter = stub (logs to console + success toast for now per spec — but we already have `email_subscribers` Supabase table working, so I'll **keep the real Supabase wiring** rather than downgrade to a stub).

### 5. Homepage (`src/pages/Index.tsx` + sections)

Rewrite every section with new copy and signature. Order: Hero · TrustStrip · TheIdeaBlock · MyStoryBlock · OnStageBlock · TheBookBlock · PodcastBlock · WritingBlock · AlsoByFerry · NewsletterBlock · Footer.

- `Hero` — new headline, photo right with Caveat caption "Listening, mostly." (reuse existing `ferry-speaking-audience.jpg`)
- `TrustLine` → `TrustStrip` — rule lines + grayscale logo lockups (placeholder rectangles labeled where assets are missing, since current site has no logo files)
- `BrandHumanizingSection` → `TheIdeaBlock` — new headline, handwritten margin caption
- `AboutBlock` → `MyStoryBlock` — new copy + photo
- `SpeakerSection` → `OnStageBlock` — 3 talk cards separated by rule lines (typographic, no boxes), 2 CTAs
- `BookSection` → `TheBookBlock` — new headline, internal CTA to `/the-book`, smaller waitlist callout
- `PodcastSection` → `PodcastBlock` — 3 featured episodes with new titles
- `BlogSection` → `WritingBlock` — 3-col grid w/ empty state
- `AlsoByFerry` — restyled, asymmetric
- `CommunitySection` → `NewsletterBlock` — keeps Supabase wiring

### 6. Pages

| Page | Action |
|---|---|
| `/the-idea` | Rewrite: editorial 720px column, premise → shift → method (3 numbered) → CTA. Asymmetric handwritten margin pull-out "Efficiency is not a strategy. It's table stakes." |
| `/my-story` | Rewrite: 6 narrative sections + pull quotes + photos with Caveat captions + Timeline (year left, event right) + CTA. Reuse existing portrait/keynote photos. |
| `/on-stage` | Rewrite: hero + availability strip + 5 keynote topics (always-open editorial blocks desktop / accordion mobile) + 4-item booking expectations grid + reel embed + 6 testimonials in 2-col editorial layout + final CTA |
| `/podcast` | Rewrite from placeholder: hero + subscribe strip (Spotify/Apple/YT/RSS) + editorial row-list of episodes (use existing `useBlogPosts`-style hook if podcast data exists, else hardcode the 3 featured + empty state) + about + mailto CTA |
| `/writing` | Rewrite: hero + category pill filter (All · BH · AI · Leadership · Future of Work) + 3-col editorial card grid wired to existing `useBlogPosts` hook + empty state |
| `/the-book` | Rewrite: hero with book cover floating + handwritten caption + "What's inside" + case-studies strip + pull quote + English waitlist (Supabase `email_subscribers`, source `english_waitlist`) |
| `/book` | **Remove route**, replace with `<ExternalRedirect to={SPEAKERS_ACADEMY_URL} />` (tiny component that does `window.location.replace` on mount) |
| `/contact` | Already redirects to `/book` — change to redirect external to Speakers Academy |
| `/blog` & `/blog/:slug` | Keep functional but add redirect from `/blog` → `/writing` (slugs stay reachable for SEO) |
| `/now`, `/press`, `/conversation`, `/admin/*` | Untouched |

### 7. Cleanup / removals

- Delete homepage mount of any orange-period headlines, all `<Period />` usage across the codebase
- Remove `PillButton` usages, swap to new `Button`
- Remove the `/book` form (file kept in repo, route swapped to redirect)
- Drop Inter Tight from `index.html` font import
- Remove "orange" references in memory and CSS
- Hide cookie banner (already hidden)

### 8. Memory updates

Rewrite: `mem://style/color-palette` (warm off-white + ink + teal + terracotta), `mem://style/typography` (Fraunces + Inter + Caveat, no Inter Tight), `mem://style/visual-direction` (editorial magazine, sharp corners, bold-in-headline signature, no orange period), `mem://features/homepage-IA-2026` → archive and add `mem://features/credibility-hub-2026` documenting: external Book Ferry CTA, no internal forms, 7-page site, Speakers Academy URL constant. Add `mem://brand/identity-and-tone` updates (Rotterdam-direct, banned words list extended).

### 9. Out of scope this pass

- Real podcast episode data fetching (will hardcode the 3 featured + empty state — wire to RSS/Spotify in a later pass)
- Logo lockup assets for Trust Strip (placeholder rectangles where missing)
- `/writing` post detail page restyling (cards on index restyled now, individual `BlogPost.tsx` template restyled in next pass)
- OG image regeneration with new visual system
- Prerendering / SSR
- Removing the orphaned `contact_messages` table + `notify-contact` edge function (kept for now in case `/press` or future forms reuse them)

### 10. Files touched

**Rewrite:** `src/index.css`, `tailwind.config.ts`, `index.html`, `src/config/site.ts`, `src/components/SiteHeader.tsx`, `src/components/HeadingDot.tsx`, `src/components/PillButton.tsx` → `src/components/Button.tsx`, `src/components/Polaroid.tsx`, `src/components/sections/Footer.tsx`, `src/components/sections/Hero.tsx`, `src/components/sections/TrustLine.tsx`, `src/components/sections/BrandHumanizingSection.tsx`, `src/components/sections/AboutBlock.tsx`, `src/components/sections/SpeakerSection.tsx`, `src/components/sections/BookSection.tsx`, `src/components/sections/PodcastSection.tsx`, `src/components/sections/BlogSection.tsx`, `src/components/sections/AlsoByFerry.tsx`, `src/components/sections/CommunitySection.tsx`, `src/pages/Index.tsx`, `src/pages/TheIdea.tsx`, `src/pages/MyStory.tsx`, `src/pages/OnStage.tsx`, `src/pages/Podcast.tsx`, `src/pages/Writing.tsx`, `src/pages/TheBook.tsx`, `src/App.tsx`, `src/pages/NotFound.tsx`.

**New:** `src/components/Bold.tsx` (or a strong-tag convention — TBD during build), `src/components/RuleLine.tsx`, `src/components/HandwrittenCaption.tsx`, `src/components/PullQuote.tsx`, `src/components/ExternalRedirect.tsx`.

**Delete from routing (file retained):** `src/pages/Book.tsx`, `src/pages/Contact.tsx`.

