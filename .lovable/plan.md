

# Circular Image Sections with Gradient Flow

Remove waves entirely and create a new visual language: images in circular compositions with smooth gradient transitions.

---

## Concept

Instead of full-bleed rectangular images in colored blocks, each image section becomes a **floating circular focal point** with gradient backgrounds that smoothly transition from white to teal and back.

```text
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│                    white background                            │
│                                                                │
│          ╭─────────────────────────────────────────╮           │
│         ╱   gradient fading to teal                 ╲          │
│        │                                             │         │
│        │     ○ ○ ○                                   │         │
│        │   ○       ○                                 │         │
│        │  ○  ┌───────┐  ○    [Text content]          │         │
│        │  ○  │ PHOTO │  ○    Headline here           │         │
│        │  ○  └───────┘  ○    Description text...     │         │
│        │   ○       ○                                 │         │
│        │     ○ ○ ○                                   │         │
│        │                                             │         │
│         ╲   gradient fading back to white           ╱          │
│          ╰─────────────────────────────────────────╯           │
│                                                                │
│                    white background                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Changes

| File | Change |
|------|--------|
| `src/components/sections/HeroVideo.tsx` | Remove wave divider import and JSX |
| `src/components/sections/AboutBlock.tsx` | Circular image with gradient background |
| `src/components/sections/SpeakerSection.tsx` | Circular image with gradient background |

---

## About Section New Design

The image becomes a large circle with smaller decorative circles around it, sitting in a gradient zone:

```typescript
<section className="py-24 md:py-32 relative overflow-hidden">
  {/* Gradient background - white to teal to white */}
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `linear-gradient(
        180deg,
        hsl(var(--background)) 0%,
        hsl(var(--background)) 10%,
        hsl(var(--primary) / 0.15) 30%,
        hsl(var(--primary)) 50%,
        hsl(var(--primary) / 0.15) 70%,
        hsl(var(--background)) 90%,
        hsl(var(--background)) 100%
      )`
    }}
  />

  <div className="container relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Circular image composition */}
      <div className="relative flex justify-center">
        {/* Decorative smaller circles */}
        <div className="absolute -top-8 -left-4 w-16 h-16 rounded-full bg-accent/30" />
        <div className="absolute -top-4 right-8 w-12 h-12 rounded-full bg-brand-gold/40" />
        <div className="absolute bottom-12 -left-8 w-20 h-20 rounded-full bg-primary/20" />
        <div className="absolute -bottom-6 right-4 w-14 h-14 rounded-full bg-accent/25" />
        <div className="absolute top-1/3 -right-6 w-10 h-10 rounded-full bg-brand-gold/30" />
        
        {/* Main circular image */}
        <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-background/50">
          <img 
            src={ferryPhoto}
            alt="Ferry Hoes"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="text-center md:text-left">
        ...existing content...
      </div>
    </div>
  </div>
</section>
```

---

## Speaker Section New Design

Same circular approach but with colors adapted for this section:

```typescript
<section className="py-24 md:py-32 relative overflow-hidden">
  {/* Gradient background - white to teal to white */}
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `linear-gradient(
        180deg,
        hsl(var(--background)) 0%,
        hsl(var(--background)) 5%,
        hsl(var(--primary) / 0.2) 25%,
        hsl(var(--primary)) 45%,
        hsl(var(--primary)) 55%,
        hsl(var(--primary) / 0.2) 75%,
        hsl(var(--background)) 95%,
        hsl(var(--background)) 100%
      )`
    }}
  />

  <div className="container relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Text content (with adjusted colors for gradient area) */}
      <div className="order-2 md:order-1">
        ...content with dynamic text colors...
      </div>

      {/* Circular image composition */}
      <div className="relative flex justify-center order-1 md:order-2">
        {/* Decorative circles */}
        <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-brand-gold/40" />
        <div className="absolute top-1/4 -right-4 w-18 h-18 rounded-full bg-white/20" />
        <div className="absolute -bottom-4 left-4 w-12 h-12 rounded-full bg-accent/30" />
        <div className="absolute bottom-1/3 -right-8 w-16 h-16 rounded-full bg-brand-gold/25" />
        
        {/* Main circular image */}
        <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
          <img 
            src={stagePhoto}
            alt="Ferry on stage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Visual Flow Result

```text
Hero (dark video)
      │
      ▼
white background
      │
      ▼ (gradient fades to teal)
  ○ ○ ○
 ○ ┌───┐ ○   About content
 ○ │ ● │ ○   "Ferry Hoes..."
 ○ └───┘ ○
  ○ ○ ○
      │
      ▼ (gradient fades back to white)
white background
      │
      ▼
Brand Humanizing (unchanged)
      │
      ▼ (gradient fades to teal)
  ○ ○ ○
 ○ ┌───┐ ○   Speaker content
 ○ │ ● │ ○   "Keynotes that..."
 ○ └───┘ ○
  ○ ○ ○
      │
      ▼ (gradient fades back to white)
white background
      │
      ▼
Book section...
```

---

## Summary

- **No waves** - clean gradient transitions only
- **Circular images** with decorative orbiting circles
- **Gradient zones** that flow seamlessly from white → teal → white
- Creates an elegant, unified one-pager feel
- Book section stays as-is (it's already a contained image, not full-bleed)

