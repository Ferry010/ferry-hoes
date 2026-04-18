

## Restructure homepage + 2 new sections (no design changes)

Most copy is already correct from previous passes. This pass adds **two new sections**, **swaps the hero photo for a silent video**, **reorders the homepage**, and does small cleanup. No design system, typography, color, or spacing changes.

### What's already correct (no-op, verified in code)

- Hero H1, sub, CTAs, eyebrow — already match spec.
- Trust line label "Teams I've worked with" — already correct.
- Writing block H2 + sub + empty state — correct.
- Book block H2, body, case studies strip, CTAs — correct (waitlist anchors to `/the-book#waitlist`; will retarget ghost to `#waitlist` since the form lives on the homepage section too).
- Speaker section H2, sub, three topics in correct order — correct.
- Podcast section H2, sub, CTAs — correct.
- The Idea block H2, body, handwritten line, CTA — correct.
- `/podcast` page already exists with hero, episodes, mailto CTA — only small subscribe-strip addition needed.
- `/the-book` external CTA, `/book` redirect, `/on-stage` talk 02, all "Book Ferry" external — done.

### 1. Hero — swap polaroid for silent looping keynote video

`src/components/sections/Hero.tsx`

Replace the right column `<Polaroid>` with a self-contained polaroid-styled `<video>` using the existing `/videos/Ferry_Hero_vid_2026.webm` asset. Same wrapper dimensions (`max-w-md`, portrait aspect), same rotation (`rotate(2deg)`), same paper frame, same handwritten caption "Listening, mostly." underneath. `autoPlay muted loop playsInline preload="auto"` with `aria-hidden="true"`. Polaroid component import removed from this file only — keep the file in repo since it's used elsewhere (AboutBlock).

### 2. NEW — Credentials strip

`src/components/sections/CredentialsStrip.tsx` (new file)

Thin section directly below `<Hero>`, above `<TrustLine>`. Single horizontal row on desktop, wraps gracefully on mobile. One-line rule above and below (`border-y border-border/60`). Each entry styled like an eyebrow (uppercase, tracked, small), separated by `·` pipes. Each is a link with terracotta hover (`hover:text-primary`).

Content:
- "International Keynote Speaker" → `/on-stage`
- "Author of *Brand Humanizing*" → `/the-book` (italic on book title)
- "Host of *The Human Era Podcast*" → `/podcast` (italic on show title)
- "Co-founder of Brand Humanizing Institute" → `https://brandhumanizing.com` (external, new tab)

Mounted in `Index.tsx` between `<Hero>` and `<TrustLine>`.

### 3. NEW — Three Roads block (replaces `AboutBlock` slot)

`src/components/sections/ThreeRoads.tsx` (new file)

Replaces `<AboutBlock />` in the homepage section list. `AboutBlock.tsx` stays in repo, just unmounted from Index.

Layout: `Eyebrow` "• Ways in", H2 "Three ways to plug **in**." (orange + Period), sub paragraph. Then a 3-column grid (stacked on mobile) using the same card pattern as `SpeakerSection` topic cards (`bg-background-alt border border-border rounded-2xl p-7`, hover lift, `• <tag>` eyebrow, H3, body, ghost arrow link). Each card includes a portrait photo at the top using existing assets:

- Card 1 "The Human / My story." — photo `ferry-portrait.jpg` → `/my-story` ("Read the story →")
- Card 2 "The Speaker / On stage." — photo `ferry-on-stage.jpg` → `/on-stage` ("See talks & reel →")
- Card 3 "The Writer / My writing." — photo `ferry-bookstore.jpg` → `/writing` ("Read essays →")

Photos rendered inside each card with `aspect-[4/3] object-cover rounded-xl mb-5`, matching the editorial restraint.

### 4. Reorder `Index.tsx`

New order under `<main>`:

```
<CredentialsStrip />        ← NEW (between Hero and TrustLine, outside main)
<TrustLine />
<main>
  <ThreeRoads />            ← NEW, replaces AboutBlock
  <BlogSection />           (Writing)
  <BookSection />
  <SpeakerSection />        (On Stage)
  <PodcastSection />
  <BrandHumanizingSection /> (The Idea)
  <AlsoByFerry />
  <CommunitySection />      (Newsletter)
</main>
```

Spec puts ThreeRoads after TrustLine — that matches above. AboutBlock import removed.

### 5. Tiny tweaks

- `BookSection.tsx`: change ghost CTA href from `/the-book#waitlist` to `#waitlist` and add `id="waitlist"` to the waitlist `<div>` so the homepage anchor scrolls in-page (the form is on the homepage). `/the-book` page already has its own waitlist anchor.
- `Podcast.tsx` page: add YouTube + RSS buttons to the existing subscribe strip in the hero. Use placeholder hrefs (`#`) for YouTube/RSS with a TODO comment if no real URL is in code — actually I'll route YouTube to a search and RSS to `https://anchor.fm/s/.../podcast/rss` if discoverable; otherwise leave the two existing buttons (Spotify, Apple) as-is since spec is "if it doesn't exist, create" and the page already exists with two of four. Will add the two missing buttons as visually identical pills with `#` href + `aria-disabled` if no source URL exists, so the design stays clean.

### 6. Out of scope (untouched)

- All visual styling, fonts, colors, spacing, animations.
- AboutBlock.tsx file (kept; just unmounted).
- /the-idea, /my-story, /writing, /the-book pages.
- Header nav and footer.
- Speaking.tsx page (talk 02 already updated in prior pass).

### Files touched

**New:** `src/components/sections/CredentialsStrip.tsx`, `src/components/sections/ThreeRoads.tsx`.

**Edited:** `src/pages/Index.tsx`, `src/components/sections/Hero.tsx`, `src/components/sections/BookSection.tsx`, `src/pages/Podcast.tsx`.

