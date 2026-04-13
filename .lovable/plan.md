

# Hero chat alignment, wider polaroid, and AboutBlock caption update

## Changes

### 1. HeroVideo.tsx

- **Remove** the H1 "AI & Technology Keynote Speaker" entirely
- **Flip chat alignment**: visitor bubble ("So Ferry, what do you actually do?") aligned **left** (self-start), Ferry's replies and CTA aligned **right** (self-end)
- **Wider polaroid**: change `max-w-sm` to `max-w-md`, change aspect ratio from `aspect-[3/4]` to `aspect-[4/3]` (landscape/wider)
- **Caption rewrite**: increase `pb-16` to `pb-20` to give more room. Replace the three separate caption lines with a single block:
  - "FERRY HOES" in `font-display` bold uppercase (keep)
  - Below: "International keynote speaker. Author. Entrepreneur. Helping organizations stay powerfully human in a world full of AI." in `font-caveat text-base` on one flowing line
- Use `absolute bottom-4 left-4 right-4` positioning so text sits on the white paper area

### 2. AboutBlock.tsx

- Change the polaroid caption from `"Ferry, actual human"` to `"Often times listening is more important than talking"`

## Files changed

| File | Change |
|------|--------|
| `src/components/sections/HeroVideo.tsx` | Remove H1, flip bubble alignment, widen polaroid, fit caption on paper |
| `src/components/sections/AboutBlock.tsx` | Update polaroid caption text |

