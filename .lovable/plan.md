

# Move intro card down, unify polaroid captions

## Changes

### 1. HeroVideo.tsx
- **Move intro card outside** the chat `flex-col` container so it sits below with more spacing. Change `mt-6` to `mt-10` for more distance from the chat/CTA.
- **Change polaroid caption** from "Ferry Hoes, 2026" to "My passion"

### 2. Unify all polaroid caption styling
All three polaroids should use identical font/size classes: `font-caveat text-lg text-muted-foreground`

- **HeroVideo.tsx** (line 87): currently `font-caveat text-base` → change to `font-caveat text-lg`
- **AboutBlock.tsx** (line 45): currently `font-caveat text-lg` → already correct, no change
- **SpeakerSection.tsx** (line 26): currently `font-caveat text-base` → change to `font-caveat text-lg`

## Files changed

| File | Change |
|------|--------|
| `src/components/sections/HeroVideo.tsx` | Move intro card down with more margin; change polaroid caption to "My passion"; unify font size to `text-lg` |
| `src/components/sections/SpeakerSection.tsx` | Change caption font size from `text-base` to `text-lg` |

