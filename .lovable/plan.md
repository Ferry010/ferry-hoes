

## Plan: Set GA ID, remove floating bubble, make contact form CTA-only

### 1. Set Google Analytics Measurement ID

**`src/lib/analytics.ts`** — Change `G-XXXXXXXXXX` to `G-039HEJE92H`.

### 2. Remove the floating message bubble

**`src/components/AskFerryBubble.tsx`** — Remove the floating bubble button at the bottom of the component (the `<button>` with `aria-label`). Keep the panel and backdrop — it will only open via the `open-contact` custom event.

### 3. Update all CTAs to use the `open-contact` event

Currently 6 places use `document.querySelector('[aria-label="Send a message"]').click()`. Since the bubble is removed, switch all of them to `window.dispatchEvent(new Event("open-contact"))`:

- **`src/components/sections/Hero.tsx`** — `openMessagePanel`
- **`src/components/sections/BookSection.tsx`** — `openMessagePanel`
- **`src/components/sections/PodcastSection.tsx`** — `openMessagePanel`
- **`src/components/sections/MiniAbout.tsx`** — `openMessagePanel`
- **`src/components/sections/ContentGrid.tsx`** — inline onClick
- **`src/pages/About.tsx`** — `openMessagePanel`
- **`src/pages/Podcast.tsx`** — `openMessagePanel`

### 4. Remove `<AskFerryBubble />` from individual pages, render once in App

Currently `<AskFerryBubble />` is rendered on every page individually (Index, About, Speaking, Podcast, Contact). Since it's now a headless panel (no bubble), render it once in `src/App.tsx` and remove it from all page files.

### Files changed
- `src/lib/analytics.ts` — GA ID
- `src/components/AskFerryBubble.tsx` — remove floating button
- `src/App.tsx` — add `<AskFerryBubble />`
- `src/pages/Index.tsx`, `src/pages/About.tsx`, `src/pages/Speaking.tsx`, `src/pages/Podcast.tsx`, `src/pages/Contact.tsx` — remove `<AskFerryBubble />`
- `src/components/sections/Hero.tsx`, `BookSection.tsx`, `PodcastSection.tsx`, `MiniAbout.tsx`, `ContentGrid.tsx`, `src/pages/About.tsx`, `src/pages/Podcast.tsx` — update `openMessagePanel` to use `open-contact` event

