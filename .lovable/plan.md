

## Fix Hero Text Readability

The teal-tinted overlay (`from-foreground/70 via-primary/40 to-foreground/70`) has a weak middle section — `primary/40` is only 40% opacity, letting the video bleed through and washing out the white text.

### Change

| File | Line | Before | After |
|---|---|---|---|
| `src/pages/Speaking.tsx` | 83 | `bg-gradient-to-br from-foreground/70 via-primary/40 to-foreground/70` | `bg-gradient-to-br from-foreground/80 via-foreground/60 to-primary/50` |

This darkens the center of the overlay significantly (foreground/60 instead of primary/40) while keeping a subtle teal tint at the bottom-right edge. White text will have strong contrast across the entire hero.

