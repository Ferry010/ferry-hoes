
## Hero Text Update

Replace the current crossfading "Ferry" / "Hoes" animation with a single, clean static statement: **"The shy kid who ended up on stage."**

### What changes

**File: `src/components/sections/HeroVideo.tsx`**

- Remove the alternating "Ferry" / "Hoes" letter-by-letter spans and their animation wrappers
- Replace with a single static `<h1>` displaying the new line
- Style: large serif/display font, light color (white/off-white) with a subtle text shadow for legibility over video, centered
- Keep the video background, overlay, and scroll indicator exactly as they are

### Visual result

- Full-screen video plays behind a semi-dark overlay
- Centered on screen: *The shy kid who ended up on stage.*
- Clean, confident typography -- no animation gimmicks, just the words and the video
- Scroll indicator remains at the bottom
