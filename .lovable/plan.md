

## Copy + CTA overhaul (no design changes)

Pure text/link work. Zero design, layout, or component changes. Constants used:
- `SPEAKERS_ACADEMY_URL = "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"`
- `BOOK_RETAILER_URL = "https://brandhumanizingboek.nl"`

### 1. Homepage — `Hero.tsx`

- Eyebrow stays.
- H1 → `The 'now what' after AI. For the` `humans running the place.` (orange + Period). Two-line wrap preserved via existing `<br />` structure.
- Sub → "AI is settling. The economy has shifted. The real question isn't which tool to buy next — it's how to lead organisations that still feel human. That's the work of Brand Humanizing. Ten years in the making."
- Primary CTA stays: `Read the idea` → `/the-idea`.
- Ghost CTA `Book Ferry` → swap from `to="/book"` to `href={SPEAKERS_ACADEMY_URL}` with `target="_blank" rel="noopener noreferrer"`. (Will pass `href` instead of `to` to `PillButton`; component already supports it — confirmed in `BookSection`.)
- Polaroid + caption untouched.

### 2. Homepage — `SpeakerSection.tsx`

- Intro paragraph → "From Brand Humanizing and the future of work to AI leadership. Talks that challenge assumptions, spark conversations, and leave audiences with something they'll actually use on Monday."
- Reorder topics array so **Brand Humanizing is #1**, **The Human Era of Work #2**, **AI, without the noise #3** (copy already matches the spec).
- Primary CTA: change label `Speaker enquiries` → `Book Ferry` and route externally to `SPEAKERS_ACADEMY_URL` (new tab).
- Ghost CTA `See talks & reel` → `/on-stage` (unchanged).

### 3. Homepage — `BookSection.tsx`

- Body unchanged.
- Change primary CTA label from `Get the book` → `See the book` and route from external `brandhumanizingboek.nl` → internal `to="/the-book"`.
- Waitlist form unchanged.

### 4. `SiteHeader.tsx` — Book Ferry pill

- Desktop pill: replace `<Link to="/book">` with `<a href={SPEAKERS_ACADEMY_URL} target="_blank" rel="noopener noreferrer">`. Keep classes/icon identical.
- Mobile menu pill: same swap.

### 5. `App.tsx` + `/book` route

- Replace `<Route path="/book" element={<Book />} />` with a tiny `BookRedirect` component that does `window.location.replace(SPEAKERS_ACADEMY_URL)` on mount and renders null. Keeps any stray legacy links functional. `Book.tsx` import removed.
- The legacy `/contact` redirect currently goes to `/book` — repoint it directly to the same external URL via the same redirect pattern (or to `/`). Will route `/contact` → `BookRedirect` for consistency.

### 6. `/on-stage` — promote `Speaking.tsx`

- Change `<Route path="/on-stage" element={<OnStage />} />` to render `<Speaking />` (rename file optional; minimum-touch = swap the element). `OnStage.tsx` placeholder no longer used (kept in repo).
- Inside `Speaking.tsx`:
  - **Hero sub** → "Talks on Brand Humanizing, the future of work, and AI leadership. No death-by-PowerPoint. Just stories, insights, and practical ideas that spark real conversations and drive meaningful change."
  - **Hero CTA** "Book Ferry for your event" stays external (already correct URL); rename label to `Book Ferry →` per spec. Add a "Watch the reel" anchor link beside it pointing to `#speaker-reel` (uses existing scroll target).
  - **Keynote topics array** → replace entry index 1 (`The AI conversation most organisations skip`) with **The Human Era of Work** (title, body, audience, takeaways) per spec. Keep entries 0, 2, 3, 4 untouched.
  - **"Enquire about this talk"** buttons inside each topic card → change `<Link to="/contact">` to external anchor → `SPEAKERS_ACADEMY_URL` (new tab). Same for "Discuss a custom keynote" inside the custom-topic card.
  - **Final CTA** H2 → "Ready to inspire your `audience`." (orange word + Period). Body → "Ferry replies personally within two working days. For formal bookings he is exclusively represented by Speakers Academy." CTA label → `Book Ferry →` (already external).
  - **SEO** title/description on this page: leave for now (spec says only homepage meta updates).

### 7. `/the-idea` and `/my-story`

Both are still placeholders today (no "Bring this talk to your team" / "Book Ferry" CTAs exist on them). Spec asks to update those CTAs at the bottom — but they don't exist yet. **No-op for this pass**; will be wired when the long-form copy lands. Noting this so it's not silently skipped.

### 8. `/the-book` — `TheBook.tsx`

Currently a `PlaceholderPage` (no hero CTAs to swap). Spec says "Hero CTAs — UPDATE: Change 'Get the Dutch edition' primary CTA to external link." Since no such CTA exists yet, **add a single primary `PillButton` to the placeholder** linking externally to `BOOK_RETAILER_URL` (new tab) labelled `Get the Dutch edition →`. This is the smallest possible addition that satisfies the spec without changing layout.

### 9. `/podcast`

Already exists (`Podcast.tsx`). Per spec: skip.

### 10. SEO meta — homepage only

`Index.tsx` `SEOHead description` → "The 'now what' after AI. Ferry Hoes helps organisations stay human in a tech-heavy world. International keynote speaker, author of Brand Humanizing, host of The Human Era Podcast."

### Files touched

`src/components/sections/Hero.tsx`, `src/components/sections/SpeakerSection.tsx`, `src/components/sections/BookSection.tsx`, `src/components/SiteHeader.tsx`, `src/App.tsx`, `src/pages/Speaking.tsx`, `src/pages/TheBook.tsx`, `src/pages/Index.tsx`. New tiny inline `BookRedirect` component (in `App.tsx`, no new file needed).

### Out of scope (unchanged)

- All visual styling, fonts, colors, spacing, components, animations.
- Polaroid image/caption.
- Trust line, The Idea block, My Story block, Podcast block, Writing block, Also by Ferry, Newsletter.
- All other page meta.
- `/the-idea` and `/my-story` long-form CTAs (page bodies don't exist yet).

