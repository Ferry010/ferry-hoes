

## Tighten copy + align speaker/podcast hero with brand

Three small fixes. No design system changes.

### 1. Add Unilever to TrustLine

`src/components/sections/TrustLine.tsx`: insert "Unilever" into the `TEAMS` array between Atos and ASR.

### 2. Connect "Three ways to plug in" cards to the headline

Currently the H2 says "Three ways to plug in" but the card eyebrows ("The Human / The Speaker / The Writer") don't echo that idea, so the metaphor goes nowhere.

`src/components/sections/ThreeRoads.tsx` — rewrite each card's eyebrow + body so each card *literally is* a plug-in path:

- Card 1 — eyebrow "Plug into the room" / title **On stage.** / body: "Plug in by booking a keynote. Around 40 a year — boards, leadership teams, and anyone trying to figure out what 'human' means in a tech-heavy world."
- Card 2 — eyebrow "Plug into the page" / title **My writing.** / body: "Plug in by reading. Short essays on humans, technology, and the work in between."
- Card 3 — eyebrow "Plug into the story" / title **My story.** / body: "Plug in by getting to know me. How a talkative kid from Delft ended up coining Brand Humanizing."

Reorder so the strongest CTA (booking) leads, writing in the middle (the dark navy card stays as the visual anchor in the centre), story last.

Sub-line under H2 changes to: *"Plug in on stage, on the page, or into the story behind it all. Pick your entry."*

### 3. On-brand hero for `/on-stage` and `/podcast`

Both heroes currently use a generic full-bleed video/photo + heavy dark gradient + centred chips, which clashes with the cream/ink editorial brand established on the homepage and `/my-story`, `/the-idea`, `/writing`, `/the-book`.

Replace both with the same editorial-hero pattern those other pages use:

- Cream `bg-background` (no full-bleed video, no dark blur overlay).
- Two-column on desktop: left = eyebrow + big H1 (`clamp(48px, 7vw, 104px)`, ink type, accent highlight word, `Period` dot) + lede + primary action button. Right = a real photo treated as a polaroid (white frame, soft shadow, slight rotation, handwritten Caveat caption underneath).
- Section padding `pt-28 md:pt-36 pb-16 md:pb-20`, container `max-w-[1280px]`.

Specifically:

**`src/pages/Speaking.tsx`** (`/on-stage`)
- Drop the video element, the dark gradient stack, and the centred chip layout (lines ~133–185).
- New hero: H1 "AI keynotes for **conferences and corporate events**." with the "&" highlighted as accent. Lede keeps the existing copy. Buttons: "Book Ferry" (primary pill) + "Watch the reel" (ghost). Right-side polaroid uses `ferry-presenting.jpg` (or `ferryBts`) with caption "Mid-flow on stage."
- Keep all sections below unchanged.

**`src/pages/Podcast.tsx`**
- Drop the dark gradient + dotted overlay + blurred image stack (lines ~107–166).
- New hero: H1 "The Human Era **Podcast.**" Lede: "Deep dives with founders, artists, scientists, and anyone doing interesting work at the intersection of humans and technology." Buttons: "Listen on Spotify" (green Spotify pill, kept) + "Apple Podcasts" (ghost). Right-side polaroid uses `podcast-hero.jpg` with caption "Mic on. Real talk."
- Keep the continuous gradient rail, episode cards, and everything else below.

### Files touched

- `src/components/sections/TrustLine.tsx`
- `src/components/sections/ThreeRoads.tsx`
- `src/pages/Speaking.tsx` (hero block only)
- `src/pages/Podcast.tsx` (hero block only)

### Out of scope

- Design tokens, fonts, palette.
- Other sections of the speaker / podcast pages.
- Homepage hero, blog, book page.

