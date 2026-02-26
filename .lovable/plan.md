

## Fix Image Collage + Replace Top Middle Image

### Changes in `src/pages/About.tsx`

**1. Copy uploaded image**
- Copy `user-uploads://PHOTO-2025-11-17-13-37-58.jpg` → `src/assets/ferry-speaking-audience.jpg`

**2. Update imports**
- Replace `ferrySpeaking` import with new `ferrySpeakingAudience` from `ferry-speaking-audience.jpg`

**3. Fix image cropping — add `object-center` or `object-top` positioning**
- All collage images: change `object-cover` to `object-cover object-center` (or `object-top` where faces are near the top) so subjects aren't awkwardly cropped
- Increase collage container height from `h-[380px] lg:h-[420px]` to `h-[440px] lg:h-[480px]` to give images more room
- Adjust individual image tile aspect ratios (increase heights slightly) so content isn't as tightly cropped

**4. Replace top middle image**
- Swap `ferrySpeaking` → `ferrySpeakingAudience` in the desktop collage (line 40) and mobile grid (line 62)
- Update alt text to "Ferry Hoes speaking to audience"

