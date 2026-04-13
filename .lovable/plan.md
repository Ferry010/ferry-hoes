

# Fix hero polaroid caption overflow

## Problem
The caption text ("Ferry Hoes" + the full tagline) is crammed into the bottom white area of the polaroid (`pb-20` = 80px). The long tagline overflows or gets clipped at smaller viewports.

## Solution
Move the caption **below** the polaroid as a standalone block instead of trying to fit it inside the white border. This is cleaner and gives the text room to breathe.

### HeroVideo.tsx changes

- Remove `pb-20` from the polaroid wrapper (change to `pb-3` so the polaroid is a simple even-bordered frame)
- Remove the absolute-positioned caption `div` from inside the polaroid
- Add a new `div` directly **below** the polaroid card with:
  - "FERRY HOES" in `font-display text-sm font-bold uppercase tracking-wide`
  - The tagline in `font-caveat text-lg text-muted-foreground`
  - Centered, with `mt-4` spacing

This keeps the polaroid clean (just the video in a white frame) and lets the text flow naturally underneath without any overflow issues.

## Files changed

| File | Change |
|------|--------|
| `src/components/sections/HeroVideo.tsx` | Move caption below polaroid, remove `pb-20` |

