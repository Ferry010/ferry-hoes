

## Reposition Hero Content to Bottom-Left

The chat bubbles and name currently sit dead-center, covering your face and body in the video. The fix: anchor everything to the bottom-left so your upper body stays visible and the content feels like a natural overlay.

### Layout change

Instead of `flex items-center justify-center` (which centers everything vertically and horizontally), switch to `flex items-end` so the content block sits at the bottom of the viewport. Combined with left-alignment and bottom padding, the bubbles will stack in the lower-left corner -- out of the way of the main subject in the video.

### What changes

**File: `src/components/sections/HeroVideo.tsx`**

1. Change the section from `flex items-center justify-center` to `flex items-end` so content gravitates to the bottom
2. Add `pb-16 md:pb-20` padding to give breathing room from the screen edge
3. Remove `justify-center` -- content naturally aligns left already
4. The name/subtitle block moves below the bubbles at the bottom-left, which is a common speaker-site pattern (like a lower-third in broadcast)

### What stays the same

- All bubble text, styling, and animation timing
- Video background and overlay darkness
- CTA button behavior (opens contact form)
- Mobile responsiveness (content just hugs the bottom instead of the center)

### Result

Your face and upper body stay fully visible in the top/center of the frame. The chat conversation reads like a lower-third overlay -- clean, professional, and out of the way.
