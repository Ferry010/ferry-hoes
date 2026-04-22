

## Homepage refresh + page restructure (warmer, more human)

Eleven concrete fixes. No design-system rewrite — I'm keeping cream/ink/orange + Inter Tight + Caveat — but adding warmth via accent color usage, varied card backgrounds, and editorial details.

### 1. Hero fits in the hero section

`Hero.tsx`:
- Reduce H1 clamp to `clamp(38px, 6.4vw, 96px)` and remove the forced `<br />` so it flows naturally instead of pushing past viewport. Keeps two-line look on desktop, fits nicely on tablet/mobile.
- Tighten section padding to `pt-28 md:pt-32 pb-16 md:pb-20`.
- Result: hero comfortably within first viewport on the 1067px width preview.

### 2. Hero polaroid caption

`Hero.tsx`: change "Listening, mostly." → **"Doing what I love most."**

### 3. Three Roads — better photo positioning, no double face

`ThreeRoads.tsx`:
- Card 1 (My story): keep `ferry-portrait.jpg` (face).
- Card 2 (On stage): keep `ferry-on-stage.jpg` (action / Ferry mid-talk, often a different framing — verify).
- Card 3 (My writing): swap `ferry-bookstore.jpg` for `brand-humanizing-book.jpg` (book cover, no face). This removes the "face twice" issue and gives the writer card a bookish object instead of another portrait.
- Add `object-position: center 25%` so heads aren't cropped off.
- Add a subtle warm tint per card (cream, peach, navy-tinted) using `bg-[#...]`-style backgrounds matching the AlsoByFerry treatment, so the row feels colorful, not grey.

### 4. Blog/Writing section becomes real cards

`BlogSection.tsx`: replace the bare-link layout with proper cards:
- Each post = padded card (`bg-background rounded-2xl shadow-soft hover:shadow-soft-lg p-7 hover:-translate-y-1`).
- Inside: orange `• Thought` eyebrow, large title, excerpt, footer row with date + read time + arrow.
- Three colorways rotated across the grid (cream, peach `#F2542D/8`, navy ink card with light text) so the row pops.

### 5. The Book gets its own page, removed from homepage

- `Index.tsx`: remove `<article><BookSection /></article>`.
- `TheBook.tsx`: rebuild as the real Book page — hero with cover + headline ("The full argument, on **paper.**"), pull-out body, case studies strip (a.s.r., Ben & Jerry's, Dove, Octopus Energy, Patagonia), reviews/blurbs slot, English waitlist form (move the existing form + Supabase logic from `BookSection` into here), Dutch retailer CTA. Homepage no longer sells the book; it links to `/the-book` from the credentials strip and Three Roads can optionally surface it via a small "Also: the book →" anchor inside the Writer card. (Keeping homepage as intro + content per spec.)

### 6. "Want this in your room" moves to /on-stage

- `SpeakerSection.tsx` (homepage): remove this component from `Index.tsx` entirely. Homepage no longer has a speaker block — speaker route lives in CredentialsStrip + Three Roads.
- `Speaking.tsx` (`/on-stage`): add a new top section under the hero titled **"Want this in your room."** with the same H2 treatment + the three short topic cards (Brand Humanizing / Human Era of Work / AI without the noise) + Book Ferry CTA, before the existing detailed `KEYNOTE_TOPICS` deep-dive. Acts as a quick overview.

### 7. Podcast cards — warmer, more designed

`PodcastSection.tsx`: redesign the episode card:
- Dark navy ink background (`bg-ink-navy text-white`) with cream type for contrast — feels like a podcast cover.
- Top row: orange `• EP` chip + duration on the right.
- Big bold episode title in cream.
- Guest line in warm orange (`text-primary`).
- Bottom: green Spotify play pill (filled, not outline) — primary visual hit.
- Spacing tightened, hover lifts and brightens.
Result: a colorful, podcast-feeling row instead of grey rectangles.

### 8. One Idea content moves to /the-idea

- `Index.tsx`: remove `<article><BrandHumanizingSection /></article>`.
- `BrandHumanizingSection.tsx` keeps existing for backwards-compat but unmounted from home.
- `TheIdea.tsx` already has the full long-form copy — confirmed in code. Just add the homepage's three short paragraphs and handwritten line ("Sounds obvious. Turns out it isn't.") as the **opening Premise block** of `/the-idea` so nothing is lost. The CredentialsStrip + Three Roads card already give homepage visitors a way in.

### 9. Buttons single-line

`PillButton.tsx`: add `whitespace-nowrap` to the inner `<span>` so labels never wrap to two lines, regardless of container width. Also reduce side padding on small screens (`px-5 sm:px-6`) and slightly tighten `py-3` so taller pills don't stack words.

### 10. My Story — milestones become a real timeline

`MyStory.tsx` Timeline section: replace the divider list with a proper vertical timeline:
- Left rail: vertical orange line.
- Each item: orange dot on the rail + year (orange, bold display) + milestone text.
- Year and text aligned in two columns, dots centered on the rail, line continuing between them.
- Tasteful animation (each row fades+slides as it enters viewport via existing scroll-reveal).

### 11. My Story hero polaroid caption

`MyStory.tsx`: change "Where it all started." → **"Me, an actual human being."**

### Bonus warmth pass (covered inside the above components, no new files)

- Section backgrounds alternate cream / cream-alt / navy ink so the page has rhythm instead of uniform grey.
- Eyebrow dots, orange Period, and orange "highlight word" stay — they're the warmth signature.
- Card hover states get a slightly stronger lift + warm shadow (`shadow-soft → shadow-soft-lg`).

### New homepage order after this pass

1. Hero
2. Credentials strip
3. Trust line
4. Three Roads (router)
5. Writing (real cards)
6. Podcast (warm dark cards)
7. Also by Ferry
8. Newsletter / Community
9. Footer

(Book, On Stage detail, and The Idea live on their own pages — homepage is intro + content, as requested.)

### Files touched

**Edited:** `src/components/sections/Hero.tsx`, `src/components/sections/ThreeRoads.tsx`, `src/components/sections/BlogSection.tsx`, `src/components/sections/PodcastSection.tsx`, `src/components/PillButton.tsx`, `src/pages/Index.tsx`, `src/pages/TheBook.tsx`, `src/pages/Speaking.tsx`, `src/pages/MyStory.tsx`, `src/pages/TheIdea.tsx`.

**Unmounted from homepage (kept in repo):** `BookSection.tsx`, `SpeakerSection.tsx`, `BrandHumanizingSection.tsx`.

### Out of scope

- Design tokens, fonts, color palette.
- Other pages (/writing, /podcast, /press, /now, blog post page, admin).
- Footer, header nav.

