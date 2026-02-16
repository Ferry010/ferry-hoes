

## Simplify the Hero Section

The core problem: too many moving parts at once -- video, 7 animated bubbles, labels, CTA, name/subtitle, plus the fixed gradient stripe and floating orbs bleeding through. Here's how to calm it down.

### What changes

**1. Reduce the conversation to 5 elements (from 9)**

Cut the back-and-forth down to the essential beats:

| Element | Text |
|---------|------|
| Visitor | "So what do you actually do?" |
| Ferry | "I help brands become more human." |
| Ferry | "Through keynotes, a book, and one big idea: Brand Humanizing." |
| CTA button | "Continue the conversation" |
| Name + subtitle | Ferry Hoes -- Speaker. Author. Brand Humanizing. |

This removes 4 bubbles and both "Ferry" labels. Fewer items = less visual clutter, and the message lands faster.

**2. Darken the video overlay more**

Change the overlay from `bg-foreground/55` to `bg-foreground/70` so the video becomes more of a texture than a competing focal point. The bubbles pop more against a quieter background.

**3. Slow down the spacing, speed up the total time**

With fewer bubbles, each one gets more breathing room. New timing:

| Delay | Element |
|-------|---------|
| 0.5s | Visitor: "So what do you actually do?" |
| 1.5s | Ferry: "I help brands become more human." |
| 2.5s | Ferry: "Through keynotes, a book, and one big idea: Brand Humanizing." |
| 3.5s | CTA button |
| 4.3s | Ferry Hoes |
| 4.8s | Speaker. Author. Brand Humanizing. |

Total: ~5 seconds instead of ~7. Faster payoff, less waiting.

**4. Remove the fixed decorative elements during the hero**

Remove the floating orbs and the left gradient stripe from `Index.tsx`. These add visual noise that competes with the hero content. They can be revisited later if needed for other sections, but for now they're adding clutter without purpose.

### Files changed

- **`src/components/sections/HeroVideo.tsx`** -- Simplified to 3 bubbles + CTA + name/subtitle, darker overlay, updated timing
- **`src/pages/Index.tsx`** -- Remove the fixed gradient stripe and floating orb divs

### What stays the same

- Video background (just darker overlay)
- Chat bubble visual style (rounded, backdrop-blur, brand colors)
- CTA linking to contact form via `open-contact` event
- Name and subtitle at the bottom
- All other page sections below the hero

