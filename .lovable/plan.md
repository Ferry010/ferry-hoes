

# Podcast Card Styling Enhancement

Upgrade the episode cards in `PodcastSection.tsx` with subtle audio-themed visual flair while keeping the Spotify green for logos and CTAs.

## What Changes

**File: `src/components/sections/PodcastSection.tsx`**

### Card Background
- Add a subtle audio waveform SVG pattern as a background element inside each card (low opacity, positioned bottom-right or spanning the card)
- Use `text-muted-foreground/5` or similar near-invisible tint so it reads as texture, not illustration

### Visual Details
- Add a soft gradient overlay on the card (e.g. `bg-gradient-to-br from-transparent to-primary/5`) for depth
- Include a small decorative sound-wave or equalizer bar element near the episode duration badge
- Add a subtle left border accent in Spotify green (`border-l-2 border-[#1DB954]/30`) that intensifies on hover (`hover:border-[#1DB954]`)

### Spotify Green Preserved
- Keep the Spotify icon and "Listen on Spotify" link in `#1DB954`
- Keep the main Spotify CTA button unchanged
- No changes to Apple Podcasts styling

### Implementation Approach
- Use an inline SVG waveform pattern (3-4 simple rounded bars at varying heights) as a purely decorative `aria-hidden` element positioned absolutely within the card
- The waveform uses `text-muted-foreground` at ~5-8% opacity in resting state, shifting to ~12% on hover
- Card gets a subtle `bg-gradient-to-br from-background to-[#1DB954]/[0.03]` to hint at the Spotify connection without being heavy-handed

### No New Dependencies
All changes are CSS/SVG only within the existing component.

