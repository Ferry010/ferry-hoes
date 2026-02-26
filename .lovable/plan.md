

## Podcast Page: Stack Cards + New Hero Image

### 1. Copy uploaded image to project assets
- Copy `user-uploads://Podcast_hero.jpg` to `src/assets/podcast-hero.jpg`

### 2. Replace video hero with static image hero (lines 90-152)
- Remove the `<video>` element
- Use the new image as background via an `<img>` with `object-cover` (imported as ES6 module)
- Keep all existing overlay gradients, text, and CTAs

### 3. Redesign episodes layout (lines 184-274)
Replace the 2-column (1 featured + 2x2 grid) layout with:
- **Left column**: Single tall featured card for `allEpisodes[0]` (unchanged content)
- **Right column**: 4 smaller cards stacked vertically (`flex flex-col gap-4`) for `allEpisodes[1-4]` (unchanged content, compact row style)
- On mobile: stack everything vertically

