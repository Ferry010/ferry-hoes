

# Hero & Speaker Section Updates

Two changes: gold-colored centered hero text and add your on-stage photo to the Speaker section.

---

## Change 1: Hero Text - Centered, Fitted, Gold

### Current Issues
- Text uses teal (`text-primary`)
- Font sizes are very large, may overflow on smaller screens

### New Approach
- Change color to gold (`text-brand-gold`) - matching the "Speaker enquiries" button
- Use `w-fit` on the text container to naturally center
- Scale font sizes to fit better within the viewport

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│         [YouTube video - looped, muted]             │
│                                                     │
│              Ferry Hoes                             │
│          (gold, centered, fitted)                   │
│                                                     │
│                  ↓ scroll                           │
└─────────────────────────────────────────────────────┘
```

---

## Change 2: Speaker Section - Add Stage Photo

Transform the Speaker section from centered text-only to a split layout with your on-stage photo.

### Current Layout
- Centered text with decorative blurs
- No image

### New Layout
- Two-column grid on desktop
- Left: Photo of you on stage
- Right: Existing content (badge, title, description, CTA)

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [On-stage photo]           On Stage                         │
│   You presenting                                             │
│   to audience               Keynotes that                    │
│                             inspire action                   │
│                                                              │
│                             [Speaker enquiries →]            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/sections/HeroVideo.tsx` | Change to gold color, adjust sizing for fit |
| `src/components/sections/SpeakerSection.tsx` | Add two-column layout with photo |

## File to Copy

| From | To |
|------|-----|
| `user-uploads://Ferry_Hoes_on_stage.jpg` | `src/assets/ferry-on-stage.jpg` |

---

## Technical Details

### HeroVideo.tsx

```typescript
// Change from teal to gold
className="inline-block text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold text-brand-gold animate-fade-up opacity-0"
```

Font size adjustments:
- Current: `text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem]`
- New: `text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem]`

This ensures the text fits within the frame while still being impactful.

### SpeakerSection.tsx

```typescript
import stagePhoto from "@/assets/ferry-on-stage.jpg";

<section className="min-h-screen relative overflow-hidden bg-primary text-primary-foreground">
  <div className="grid md:grid-cols-2 min-h-screen">
    {/* Left: Photo */}
    <div className="relative min-h-[400px] md:min-h-screen">
      <img 
        src={stagePhoto}
        alt="Ferry Hoes presenting on stage"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    
    {/* Right: Content */}
    <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-0">
      {/* Badge, title, description, CTA - existing content */}
    </div>
  </div>
</section>
```

---

## Expected Result

- Hero: "Ferry Hoes" displays in eye-catching gold letters, properly centered and fitted within the viewport
- Speaker section: Your on-stage photo appears on the left, with the content on the right
- Both changes maintain the editorial, magazine-like aesthetic

