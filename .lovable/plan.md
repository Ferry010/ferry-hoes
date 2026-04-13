

# Redesign Hero Chat: Centered, Bottom-Half Layout

## Changes to `src/components/sections/HeroVideo.tsx`

### Layout
- Move the entire content block to **center-aligned, bottom half** of the hero using `items-end justify-center text-center` and bottom padding (`pb-16 md:pb-20`).
- Remove the current `max-w-lg` left-aligned container; replace with a centered `max-w-xl mx-auto` wrapper.

### Bubble styling
- **First bubble** ("So Ferry, what do you actually do?"): Use `bg-brand-teal text-white` (the site's teal/green) instead of `bg-white/20`. Keep `self-start`.
- **Ferry response bubbles**: Use `bg-white text-primary` (solid white) instead of `bg-white/30 text-white`. Keep `self-end`.
- **CTA button**: Stays as-is with `bg-accent` (coral/orange).

### Add name + tagline below chat
- After the CTA button, add a centered block with:
  - "Ferry Hoes" in white, bold, ~`text-2xl md:text-3xl`
  - "International keynote speaker. Author. Entrepreneur. Helping organizations stay powerfully human in a world full of AI." in white/80, ~`text-sm md:text-base`
- This block fades in after the CTA (animationDelay ~4.8s).

### File changed
| File | Change |
|------|--------|
| `src/components/sections/HeroVideo.tsx` | Restyle bubbles, center layout at bottom, add name/tagline |

