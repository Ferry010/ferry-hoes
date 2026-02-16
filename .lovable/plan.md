

# Replace Hero YouTube Embed with Local WebM Video

## Overview
Swap the YouTube iframe background in the hero section with a self-hosted HTML5 `<video>` element using the uploaded WebM file. This gives better control over playback, removes YouTube branding/loading delays, and avoids external dependencies.

## Steps

### 1. Copy the video file to the project
- Copy `user-uploads://Ferry_Hero_vid_2026.webm` to `public/videos/Ferry_Hero_vid_2026.webm`
- Using the `public` folder because large media files should not go through Vite's bundler (src/assets would try to bundle it, which is inefficient for large videos)

### 2. Update `src/components/sections/HeroVideo.tsx`
- Replace the YouTube `<iframe>` with a native HTML5 `<video>` element
- Attributes: `autoPlay`, `muted`, `loop`, `playsInline`, `preload="auto"`
- Use `object-cover` with `absolute inset-0 w-full h-full` to achieve the same full-bleed background effect
- Keep the existing dark overlay div for text readability
- Keep all other elements unchanged (name animation, scroll indicator)

### Technical details
- Video source: `/videos/Ferry_Hero_vid_2026.webm`
- The `<video>` tag replaces the iframe and its sizing styles, simplifying the CSS (no more `177.78vh` width trick needed)
- `muted` is required for autoplay to work in all browsers
- No new dependencies needed

