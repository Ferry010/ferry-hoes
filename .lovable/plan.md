

Looking at the current state of the Speaking hero, there are two distinct directions here. Let me present both options for you to choose.

## Option A: Bolder Textmarker (quick fix)

Increase the highlight span from `bg-accent/50` to `bg-accent/95` for a near-solid coral marker effect behind "stories, insights, and practical ideas".

**Change:** `src/pages/Speaking.tsx` line 99 — `bg-accent/50` → `bg-accent/95`

## Option B: Abstract Video Overlay + Bold Marker (recommended)

Add a subtle pattern or noise texture overlay on top of the video to soften it further, making all text pop without needing an extremely dark solid overlay. Combined with the bolder textmarker.

**Changes in `src/pages/Speaking.tsx`:**
- Add a second overlay `div` with a CSS dot-pattern or frosted-glass effect (e.g., `backdrop-blur-[1px]` with a subtle repeating gradient) between the video and the existing gradient overlay
- Increase textmarker to `bg-accent/95`

---

Both options include the denser marker. The question is whether we also soften the video.

