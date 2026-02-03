

# About Block Redesign

Transforming the About section from a glassmorphism card to a bold, editorial split-layout inspired by Steven Bartlett's website - but brighter and more open using your teal/white palette.

---

## Current vs New Design

**Current**: Gradient background with a glassmorphism card containing all text

**New**: Split layout with text on left, photo placeholder on right, bright background, highlighted keywords

---

## New Layout Structure

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  FERRY HOES                                 [Photo area]     │
│                                              placeholder     │
│  FERRY HOES;                                (right side)     │
│  SPEAKER, ENTREPRENEUR,                                      │
│  AUTHOR AND HOST OF                                          │
│  'THE HUMAN SIDE' PODCAST                                    │
│  - exploring the intersection                                │
│  of technology and humanity.                                 │
│                                                              │
│  ABOUT FERRY →                                               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Design Details

### Background
- **Light, open feel**: Use `bg-background` (off-white) instead of dark gradients
- Optional subtle gradient overlay for depth

### Typography
- **Name header**: Small, uppercase, tracking-wide (like "STEVEN BARTLETT" in the reference)
- **Main text**: Large, bold, uppercase display font
- **Highlighted words**: Coral accent color (`text-accent`) for key terms like "Speaker", "Entrepreneur", "Author"
- **Regular words**: Foreground color (dark)

### Layout
- **Two columns**: Text on left (60%), photo placeholder on right (40%)
- **Mobile**: Stack vertically, photo on top or below
- **Full height section**: `min-h-screen`

### Photo Placeholder
- Right side of the screen
- Currently a subtle gradient or solid teal placeholder
- Ready for your actual photo later

### CTA Link
- Simple text link with arrow: "About Ferry →"
- Coral/accent color on hover

---

## Copy Structure

```text
FERRY HOES

FERRY HOES;
[SPEAKER], [ENTREPRENEUR],
[AUTHOR] AND HOST OF
'THE HUMAN SIDE' PODCAST
- exploring the intersection
of technology and humanity.

ABOUT FERRY →
```

Words in brackets will be highlighted in coral/accent color.

---

## File to Modify

| File | Changes |
|------|---------|
| `src/components/sections/AboutBlock.tsx` | Complete redesign with split layout |

---

## Technical Implementation

### Component Structure

```typescript
<section className="min-h-screen bg-background">
  <div className="container h-full">
    <div className="grid md:grid-cols-2 gap-8 min-h-screen items-center">
      
      {/* Left: Text content */}
      <div className="py-16 md:py-0">
        <p className="text-sm tracking-widest mb-8">FERRY HOES</p>
        
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl 
                       font-bold uppercase leading-tight mb-8">
          FERRY HOES;{" "}
          <span className="text-accent">SPEAKER</span>,{" "}
          <span className="text-accent">ENTREPRENEUR</span>,{" "}
          <span className="text-accent">AUTHOR</span> AND HOST OF{" "}
          <span className="text-accent">'THE HUMAN SIDE' PODCAST</span>{" "}
          - exploring the intersection of technology and humanity.
        </h2>
        
        <Link className="group inline-flex items-center text-sm 
                         tracking-widest hover:text-accent">
          ABOUT FERRY
          <ArrowRight className="ml-2 group-hover:translate-x-1" />
        </Link>
      </div>
      
      {/* Right: Photo placeholder */}
      <div className="relative h-full min-h-[400px] md:min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br 
                        from-primary/20 to-brand-teal/30" />
        {/* Placeholder for actual photo */}
      </div>
      
    </div>
  </div>
</section>
```

### Bright & Open Approach
- White/off-white background instead of dark
- Coral highlights pop against the light background
- Clean whitespace
- No glassmorphism cards - content flows naturally

### Photo Placeholder Options
- Light teal gradient
- Subtle pattern or texture
- Ready to accept `<img>` when photo is provided

---

## Expected Result

A bold, editorial About section that:
- Immediately shows your name prominently
- Uses highlighted keywords for your key roles
- Feels bright, open, and approachable (not dark like the reference)
- Has space for your photo on the right
- Maintains the clean, magazine-like aesthetic
- Links to the full About page

