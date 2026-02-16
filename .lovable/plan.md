

## DM-Style Hero Section

Replace the current static hero text with an interactive-feeling chat conversation that plays out over the video background. Messages appear one by one with staggered delays, mimicking a real DM thread.

### Layout

The chat conversation is left-aligned (not centered) within a constrained container, sitting over the darkened video. Messages appear sequentially with typing-style delays:

1. **"You" bubble** (right-aligned, muted style): "So what do you actually talk about on stage?"
2. **"Ferry" bubble** (left-aligned, white/light): "Mostly one thing."
3. **"Ferry" bubble**: "How to make work more human in a world full of AI."
4. **"Ferry" bubble**: "More than 40 keynotes a year on that."
5. After all bubbles land, **Ferry Hoes** fades in below in large display type
6. Subtitle: **Speaker . Author . Podcast host** in smaller muted text

### Animation sequence

- Each message fades up with a slight upward slide, staggered ~0.8s apart
- Uses CSS animation-delay on each bubble (no JS timers needed)
- The name and subtitle fade in last, after all chat bubbles have appeared
- Total sequence: ~4-5 seconds from page load to full reveal

### Visual style

- Chat bubbles: rounded corners, semi-transparent backgrounds with backdrop-blur
- "You" messages: slightly different color (muted/dark) and right-aligned
- "Ferry" messages: light/white background, left-aligned, with a small "Ferry" label above the first one
- Name reveal: large display font, gold or white depending on brand feel
- Subtitle: spaced-out uppercase tracking, muted white
- Video background and overlay stay exactly as they are
- Scroll indicator remains at the bottom

### Technical details

**File: `src/components/sections/HeroVideo.tsx`**
- Replace the current `<h1>` with the chat bubble layout
- Each bubble is a `<div>` with `animate-fade-up` and increasing `animation-delay` via inline styles
- Name and subtitle use `opacity-0` with delayed `animate-fade-in`
- All animation uses existing Tailwind keyframes (`fade-up`, `fade-in`) already defined in `tailwind.config.ts`
- No new dependencies needed -- pure CSS animations with Tailwind classes

### Mobile considerations

- Bubbles stack naturally, text sizes scale down
- Container has horizontal padding to keep bubbles from edge
- On small screens, bubble max-width is narrower to maintain the chat feel

