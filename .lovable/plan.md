

# Update Speaker Section Styling

Match the Speaker section ("Keynotes that inspire action") to the About section's light background and use the coral/orange accent color for highlights.

---

## Changes Overview

| Element | Current | New |
|---------|---------|-----|
| Section background | `bg-primary` (dark teal) | `bg-background/95 backdrop-blur-sm` (light) |
| Text color | `text-primary-foreground` (white) | `text-foreground` (dark) |
| "inspire action" text | `text-brand-gold` | `text-accent` (coral orange) |
| Speaker enquiries button | `bg-brand-gold` | `bg-accent` (coral orange) |
| "Want to discuss" link | `text-brand-gold` | `text-accent` (coral orange) |
| Badge background | `bg-white/10` | `bg-accent/10` |
| Description text | `text-white/80` | `text-muted-foreground` |
| Decorative blur orbs | Gold/white tints | Accent/primary tints |

---

## File Changes

**`src/components/sections/SpeakerSection.tsx`**

```typescript
// Line 11: Change section background
<section className="min-h-screen relative overflow-hidden bg-background/95 backdrop-blur-sm">

// Lines 13-15: Update decorative orbs colors
<div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
<div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

// Line 32: Update badge styling
<span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8 w-fit">

// Lines 37-40: Update title text colors
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-foreground">
  Keynotes that{" "}
  <span className="text-accent">inspire action</span>
</h2>

// Line 44: Update description text color
<p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-12">

// Line 52: Update button colors
<Button 
  asChild
  size="lg"
  className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 group"
>

// Line 63: Update micro-engagement link color
<button
  onClick={openMessagePanel}
  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group w-fit"
>
```

---

## Visual Result

```text
Before (dark teal background):
┌────────────────────────────────────────────────────────┐
│  [Photo]  │  🎤 On Stage                               │
│           │  Keynotes that inspire action (gold)       │
│           │  Description text (white)                  │
│           │  [Speaker enquiries] (gold button)         │
│           │  Want to discuss? (gold link)              │
└────────────────────────────────────────────────────────┘

After (light background, matching About section):
┌────────────────────────────────────────────────────────┐
│  [Photo]  │  🎤 On Stage (coral badge)                 │
│           │  Keynotes that inspire action (coral)      │
│           │  Description text (muted)                  │
│           │  [Speaker enquiries] (coral button)        │
│           │  Want to discuss? (coral link)             │
└────────────────────────────────────────────────────────┘
```

---

## Result

- Speaker section now has the same light, semi-transparent background as the About section
- All accent elements use the coral/orange color (`text-accent`, `bg-accent`) instead of gold
- Creates better visual consistency with the About block
- Maintains the editorial, magazine-like aesthetic

