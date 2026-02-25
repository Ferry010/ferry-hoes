

## Add "Watch the reel" CTA to Meet Ferry Section

### Changes in `src/pages/Speaking.tsx`

After the three paragraphs in the "Meet Ferry" text column (around line 173), add a "Watch the reel" button that smooth-scrolls to the video section.

**Implementation:**
- Add an `id="speaker-reel"` to the video section's `<section>` element so we have a scroll target
- Add a `Button` with a play icon (`Play` from lucide-react) styled as outline/ghost with accent color, using `onClick` to `document.getElementById('speaker-reel')?.scrollIntoView({ behavior: 'smooth' })`
- Import `Play` from lucide-react (already using lucide in this file)

This keeps users on the page and naturally guides them to the video proof point after reading the bio.

