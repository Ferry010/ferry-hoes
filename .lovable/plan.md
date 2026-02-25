

## Photo Stack for "Meet Ferry" Section

Replace the single image with a stacked/overlapping collage of 3 photos showing Ferry from different angles and settings.

### Assets to copy
1. `user-uploads://Ferry_Hoes_Public_Speaking-2.jpg` → `src/assets/ferry-speaking-2.jpg` (on stage, blue background)
2. `user-uploads://Aestate-88.jpg` → `src/assets/ferry-speaking-aestate.jpg` (workshop/intimate setting)
3. `user-uploads://Ferry_Hoes_Calendly.jpg` → `src/assets/ferry-portrait.jpg` (professional portrait)

### Changes in `src/pages/Speaking.tsx`

**Imports** (top of file): Add 3 new image imports alongside the existing `stagePhoto`.

**"Meet Ferry" section** (lines 139-146): Replace the single `<img>` with a stacked photo composition:

- A `relative` container with defined aspect ratio
- 3 images positioned with slight rotation and offset, layered using `z-index`
  - Back image: rotated -6deg, offset left — the Aestate workshop shot
  - Middle image: rotated +4deg, offset right — the blue-stage close-up
  - Front image: centered, no rotation, largest — the professional portrait
- Each image gets `rounded-xl shadow-lg` and `object-cover` with fixed dimensions
- On hover, a subtle scale/rotation transition for interactivity
- The existing decorative blur circle stays

This creates a casual, dynamic "spread of photos" feel that shows range (stage, workshop, portrait) without needing a carousel.

