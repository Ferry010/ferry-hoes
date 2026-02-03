

# Hero & About Block Updates

Three changes: bigger teal name in hero, add name header to About, and add your photo.

---

## Change 1: Hero Name - Bigger & Teal

### Current
- Font size: `text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem]`
- Color: `text-background` (white)

### New
- Font size: `text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem]`
- Color: `text-primary` (teal)

This makes the name significantly larger and uses your brand teal color to pop against the video background.

---

## Change 2: About Block - Add Name Header

Add "Ferry Hoes" as a small header above the mission copy.

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   Ferry Hoes                    [Your photo -                │
│                                  holding book                │
│   International speaker,         in bookstore]               │
│   published author and                                       │
│   entrepreneur. My mission                                   │
│   is to unleash super-human                                  │
│   potential with technology.                                 │
│                                                              │
│   About Ferry →                                              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Change 3: Add Your Photo

The uploaded photo (you in a bookstore holding the Brand Humanizing book) will be placed on the right side of the About block as a full-height image with `object-cover`.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/sections/HeroVideo.tsx` | Increase font size, change to teal color |
| `src/components/sections/AboutBlock.tsx` | Add name header, add your photo |

## File to Copy

| From | To |
|------|-----|
| `user-uploads://1768228693973.jpeg` | `src/assets/ferry-bookstore.jpg` |

---

## Technical Details

### HeroVideo.tsx

```typescript
// Change text color and increase size
className="inline-block text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-primary animate-fade-up opacity-0"
```

### AboutBlock.tsx

```typescript
import ferryPhoto from "@/assets/ferry-bookstore.jpg";

// Add name header above the copy
<p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
  Ferry Hoes
</p>

<h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl ...">
  International speaker...
</h2>

// Replace placeholder with actual photo
<div className="relative min-h-[400px] md:min-h-screen order-first md:order-last">
  <img 
    src={ferryPhoto}
    alt="Ferry Hoes holding Brand Humanizing book"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>
```

---

## Expected Result

- Hero: "Ferry Hoes" displays in massive teal letters over the video
- About: Your name appears in teal above the mission statement
- About: Your bookstore photo fills the right side

