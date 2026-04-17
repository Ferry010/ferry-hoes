

## What you're asking for

A full editorial repositioning of the homepage as a **thinker's home base**, not a speaker sales page. Plus scaffolded routes for the new IA so the nav works end-to-end. New visual system (no teal, no hero video, polaroid-led, orange-only accent), new headline formula, new microcopy, new section order, and outbound cards to BHI + AIGA.

I'll keep the homepage polished and ship the rest of the pages as scaffolded placeholders you'll fill in later passes.

## Conflicts with prior decisions (flagging before I touch anything)

1. **Teal is killed entirely.** Current site uses teal as secondary (nav CTA "Get in touch", some highlights, current `--primary` token). I'll repoint `--primary` to coral and remove all teal usage. Saved memory will be updated.
2. **No hero video.** Current `HeroVideo.tsx` autoplays a webm. I'll replace with the polaroid-led editorial hero. The video file stays in `/videos/` (you can reuse later).
3. **Navy `#0B2447` is new.** I'll add it as `--ink-navy` for the handwritten captions and the BHI/AIGA cards.
4. **Headline formula change.** Currently the accent word + dot pattern is in place but the dot is outside the period. New rule: `plain. accent.` (the period itself is part of the brand, in orange, replacing the dot graphic on H1/H2). I'll repurpose `HeadingDot` so it can render either as a standalone dot bullet (eyebrows) or as a coral period inside headlines.
5. **Plausible analytics + no cookie banner.** Current site has GA4 + `CookieConsent`. I'll leave GA4 in place but hide the cookie banner (since you want Plausible eventually). Swapping to Plausible is a separate pass — flag it if you want it in this build.
6. **Chatbot widget removed.** `AskFerryBubble` (floating chat) and the "Or continue the conversation" link in hero will be removed from the homepage. The `/conversation` page itself stays as an easter egg accessible by URL only.

## Build plan

### 1. Design tokens — rewrite `src/index.css` + `tailwind.config.ts`

- `--background` → `#F6F1EA` (warm cream)
- `--background-alt` → `#EFE7DB` (deeper cream for alt sections)
- `--foreground` (ink) → `#0F1115`
- `--primary` → `#F2542D` (orange — replaces teal everywhere)
- `--accent` → same orange (collapse the two tokens to one)
- `--ink-navy` → `#0B2447`
- `--muted-foreground` → `#5C5A55`
- `--border` → `#E3D9C9`
- New fonts: Inter Tight (display, 700/800, tight tracking), Inter (body), Caveat (handwritten). Load via Google Fonts in `index.html`. Drop Plus Jakarta + The Nautigal.
- Add `@keyframes` for the 8px headline rise + reduced-motion media query.

### 2. New signature primitives

- `HeadingDot` → repurposed into two exports: `<Eyebrow>` (orange dot + uppercase tracked label) and `<Period>` (the orange period closing every headline).
- `<Polaroid>` → reusable white-bordered card, configurable rotation (-2 to +3 deg), optional Caveat caption, drop shadow, hover-to-straighten.
- `<PillButton variant="primary|ghost">` → orange-filled or ink-outlined pill with arrow.

### 3. Homepage rebuild — section by section

Replace `HeroVideo` with `Hero` (polaroid + editorial copy, no video), then rebuild each section to match the spec:

| Section | Component | Status |
|---|---|---|
| Hero | new `Hero.tsx` | rewrite |
| Trust line (plain text, no logos) | new `TrustLine.tsx` | replaces `ClientLogos` on home |
| The Idea (hook) | rewrite `BrandHumanizingSection.tsx` | new copy + CTA `Read the full idea →` |
| My Story | rewrite `AboutBlock.tsx` | shorter, polaroid stays |
| On Stage | rewrite `SpeakerSection.tsx` | + 3 talk-topic cards |
| The Book | rewrite `BookSection.tsx` | new headline `We wrote the book on it. Literally.` |
| The Podcast | rewrite `PodcastSection.tsx` | keep Spotify-green inside cards only |
| Writing | rewrite `BlogSection.tsx` | 4-6 editorial cards |
| Also by Ferry | new `AlsoByFerry.tsx` | BHI navy card + AIGA purple card, outbound |
| The Letter | rewrite `CommunitySection.tsx` | newsletter only, drop Discord from home |
| Footer | rewrite `Footer.tsx` | left bio + middle links + right "Also by Ferry" mini cards |

`QuickFacts.tsx` and `ClientLogos.tsx` are removed from the homepage (kept in repo for reuse on `/on-stage`).

### 4. Global nav — rewrite `SiteHeader.tsx`

New items: `The Idea` (/the-idea) · `My Story` (/my-story) · `On Stage` (/on-stage) · `Podcast` (/podcast) · `Writing` (/writing) · `The Book` (/the-book). CTA pill (orange): `Book Ferry →` → `/book`. Sticky cream bg, hairline border on scroll.

### 5. Scaffold the new routes (placeholder pages)

Add to `App.tsx`: `/the-idea`, `/my-story`, `/on-stage`, `/writing`, `/the-book`, `/book`. Each page = `<SiteHeader />` + Eyebrow + H1 with accent word + Period + one-line "Coming soon" + `<Footer />`. Existing `/about`, `/speaking`, `/blog`, `/contact`, `/podcast` routes stay and redirect to the new URLs (301-style via `<Navigate />`).

### 6. Microcopy + a11y pass

- Replace banned words globally (no "leverage", "unlock", "disrupt", "game-changer").
- Confirmation toasts → "Got it. Ferry will read this himself and reply within two working days."
- New `404` page: `This page is missing.` + 3 useful links.
- Verify orange #F2542D contrast: only on cream and as headline accent / button fill — never as body text.
- Keyboard focus: 2px orange outline globally.

### 7. Cleanup / removals

- Remove `AskFerryBubble` from `App.tsx`.
- Hide `CookieConsent` (keep file).
- Remove `ClientLogos` and `QuickFacts` from `Index.tsx` (files retained).
- Remove the chat-link "Or continue the conversation" from hero.

### 8. Memory updates

Update `mem://style/color-palette` (kill teal), `mem://style/visual-direction` (no hero video, polaroid-led), `mem://style/typography` (Inter Tight + Caveat, no Plus Jakarta), and add `mem://features/homepage-IA-2026` documenting the new section order.

## Out of scope for this pass

- Filling in `/the-idea`, `/my-story`, `/on-stage`, `/writing`, `/the-book` long-form content (you said you'll do these).
- Migrating GA4 → Plausible.
- MDX content pipeline for blog posts (current Supabase-backed blog stays for now).
- Dutch i18n toggle (scaffold only later).
- Speaker enquiry form on `/on-stage` (you'll fill `/book` page in next pass).
- OG image generator (separate pass).
- Prerendering (separate pass — was approved earlier but deferred so we don't double-rip the site this round).

## Files touched

**Rewrite:** `src/index.css`, `tailwind.config.ts`, `index.html` (fonts), `src/components/SiteHeader.tsx`, `src/components/sections/Footer.tsx`, `src/components/HeadingDot.tsx`, `src/components/SectionLabel.tsx`, `src/components/sections/AboutBlock.tsx`, `src/components/sections/BrandHumanizingSection.tsx`, `src/components/sections/SpeakerSection.tsx`, `src/components/sections/BookSection.tsx`, `src/components/sections/PodcastSection.tsx`, `src/components/sections/BlogSection.tsx`, `src/components/sections/CommunitySection.tsx`, `src/pages/Index.tsx`, `src/pages/NotFound.tsx`, `src/App.tsx`.

**New:** `src/components/sections/Hero.tsx`, `src/components/sections/TrustLine.tsx`, `src/components/sections/AlsoByFerry.tsx`, `src/components/Polaroid.tsx`, `src/components/PillButton.tsx`, `src/pages/TheIdea.tsx`, `src/pages/MyStory.tsx`, `src/pages/OnStage.tsx`, `src/pages/Writing.tsx`, `src/pages/TheBook.tsx`, `src/pages/Book.tsx`.

**Delete from homepage (keep file):** `HeroVideo.tsx`, `QuickFacts.tsx`, `ClientLogos.tsx`, `AskFerryBubble` mount in `App.tsx`.

