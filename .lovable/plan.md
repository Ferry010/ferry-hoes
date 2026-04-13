

# Polaroid consistency + hero intro card

## Changes

### 1. Standardize all polaroid captions to `font-caveat`

**AboutBlock.tsx** (line 45-48): Currently uses inline `style={{ fontFamily: "'Caveat', cursive" }}`. Replace with Tailwind class `font-caveat` to match the other polaroids. Also remove the `italic` class (Caveat is already handwritten, italic looks off).

**SpeakerSection.tsx**: Already uses `font-caveat`. No change needed.

**HeroVideo.tsx**: Already uses `font-caveat`. No change needed.

### 2. Fix image cropping in polaroids

All three polaroids use `aspect-[4/3]` with `object-cover`, which can crop heads/faces. Adjust:

- **AboutBlock.tsx** (line 43): Add `object-top` so the speaker's head isn't cut off
- **SpeakerSection.tsx** (line 23): Add `object-top` for the same reason  
- **HeroVideo.tsx** (line 67): Video is fine with `object-cover` but add `object-center` explicitly

### 3. Move "Ferry Hoes" intro from polaroid to a card below the chat

**HeroVideo.tsx**:
- Remove the "Ferry Hoes" name and tagline from the polaroid caption. Keep only "Ferry Hoes" as a small label on the polaroid (like the other polaroids have short captions).
- Below the chat bubbles and CTA, add a subtle card with the intro text:

```tsx
<div className="mt-6 opacity-0 animate-fade-up bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-4 border border-border/50 max-w-md" style={{ animationDelay: "4.5s" }}>
  <p className="font-display text-base font-bold text-foreground">Ferry Hoes</p>
  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
    International keynote speaker. Author. Entrepreneur. Helping organizations stay powerfully human in a world full of AI.
  </p>
</div>
```

The polaroid caption becomes simply: `"Ferry Hoes, 2026"` in `font-caveat`.

## Files changed

| File | Change |
|------|--------|
| `src/components/sections/HeroVideo.tsx` | Move intro text to card below chat; simplify polaroid caption |
| `src/components/sections/AboutBlock.tsx` | Use `font-caveat` class instead of inline style; add `object-top`; remove `italic` |
| `src/components/sections/SpeakerSection.tsx` | Add `object-top` to prevent image cropping |

