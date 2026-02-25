

## Improve Speaking Hero Readability

The current overlay is `from-foreground/80 via-foreground/60 to-primary/50` which lets too much video through, especially in the center/right areas. Two changes to fix this:

### Changes in `src/pages/Speaking.tsx`

**1. Darken the gradient overlay** (line 85)

Increase opacity across the gradient so the video is more muted and white text pops:

- Before: `from-foreground/80 via-foreground/60 to-primary/50`
- After: `from-foreground/90 via-foreground/80 to-primary/70`

**2. Increase backdrop blur** (line 83)

Soften the video further so it becomes a texture rather than competing with the text:

- Before: `backdrop-blur-[2px]`
- After: `backdrop-blur-[6px]`

These two changes together will make the video a soft, teal-tinted backdrop that "shines through" without competing with the text for attention.

