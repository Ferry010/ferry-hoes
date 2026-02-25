

## Flip Card for "Meet Ferry" Section

Replace the 3-image stack with a single card that shows the first uploaded image (behind-the-scenes filming) by default and flips to the second image (presenting at Visma/Dyade event) on hover.

### Assets
1. Copy `user-uploads://PHOTO-2025-01-20-15-51-14-2.jpg` → `src/assets/ferry-bts.jpg` (behind the scenes, green screen)
2. Copy `user-uploads://Aestate-88-2.jpg` → `src/assets/ferry-presenting.jpg` (presenting at event)

### Changes in `src/pages/Speaking.tsx`

**Imports**: Replace the 3 photo imports (`speakingBlue`, `speakingAestate`, `ferryPortrait`) with 2 new imports (`ferryBts`, `ferryPresenting`).

**"Meet Ferry" section image area** (lines ~142-158): Replace the 3-image stack with a CSS 3D flip card:

- Outer container with `perspective` and fixed aspect ratio
- Inner wrapper that rotates `rotateY(180deg)` on group-hover
- Front face: `ferry-bts.jpg` (filming setup)
- Back face: `ferry-presenting.jpg` (on stage presenting)
- Both faces use `backface-visibility: hidden`, `rounded-2xl`, `object-cover`
- Smooth `transition-transform duration-700` for the flip
- Keep the existing decorative blur circle

This gives a polished, interactive reveal without carousel complexity.

