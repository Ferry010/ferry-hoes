
# Hero Video & About Block Updates

Two focused changes: embed the YouTube video as a looping background and update the About copy.

---

## Change 1: Hero Video Background

Replace the gradient placeholder with the actual YouTube video as a looping background.

### Current
- Dark gradient with grain overlay
- Name in ALL CAPS: "FERRY HOES"

### New
- YouTube video embed (first 15 seconds, looping, muted, autoplay)
- Name in title case: "Ferry Hoes"
- Even larger font size

### Video Implementation

YouTube videos can't be directly used with `<video>` tags. We'll use a YouTube embed with specific parameters:

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│         [YouTube video - looped, muted]             │
│                                                     │
│              Ferry Hoes                             │
│           (title case, massive)                     │
│                                                     │
│                  ↓ scroll                           │
└─────────────────────────────────────────────────────┘
```

YouTube embed URL with parameters:
- `autoplay=1` - starts automatically
- `mute=1` - muted (required for autoplay)
- `loop=1` - loops continuously
- `playlist=foEehJ_pwck` - required for loop to work
- `controls=0` - hides controls
- `showinfo=0` - hides title
- `start=0&end=15` - plays first 15 seconds
- `modestbranding=1` - minimal YouTube branding

### Font Size Increase
Current: `text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem]`
New: `text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem]`

---

## Change 2: About Block Copy

### Current Copy
```text
FERRY HOES (small header)

Ferry Hoes; Speaker, Entrepreneur, Author and host of 
'The Human Side' podcast - exploring the intersection 
of technology and humanity.
```

### New Copy
```text
International speaker, published author and entrepreneur. 
My mission is to unleash super-human potential with the 
help of technology.

About Ferry →
```

- Remove the small "FERRY HOES" header
- Remove highlighted keywords (cleaner read)
- New mission-focused copy
- Keep the "About Ferry" link

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/sections/HeroVideo.tsx` | YouTube video background, title case name, larger font |
| `src/components/sections/AboutBlock.tsx` | Updated copy, remove header |

---

## Technical Details

### HeroVideo.tsx

```typescript
// Name in title case
const name = "Ferry Hoes";

// YouTube iframe as background
<iframe
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  src="https://www.youtube.com/embed/foEehJ_pwck?autoplay=1&mute=1&loop=1&playlist=foEehJ_pwck&controls=0&showinfo=0&start=0&end=15&modestbranding=1&rel=0"
  allow="autoplay; encrypted-media"
  style={{ 
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    transform: 'scale(1.5)' // Zoom to crop and fill screen
  }}
/>

// Larger font
className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem]"
```

### AboutBlock.tsx

```typescript
<section className="min-h-screen bg-background">
  <div className="grid md:grid-cols-2 min-h-screen">
    <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
      {/* No more small header */}
      
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-10 text-foreground">
        International speaker, published author and entrepreneur. 
        My mission is to unleash super-human potential with the help of technology.
      </h2>
      
      <Link to="/about" className="...">
        About Ferry
        <ArrowRight />
      </Link>
    </div>
    
    {/* Photo placeholder unchanged */}
  </div>
</section>
```

---

## Expected Result

- Hero opens with your actual video playing silently in background
- "Ferry Hoes" appears in title case, even larger than before
- About section has clean, mission-focused copy without redundant headers
- Both sections maintain the bold, editorial feel
