

# Podcast Cards Carousel

Transform the podcast episode cards from a static grid to a swipeable carousel with larger cards.

---

## Current vs New Layout

```text
CURRENT (Static Grid)
┌────────────────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                      │
│  │ Ep 127   │  │ Ep 126   │  │ Ep 125   │                      │
│  │ [player] │  │ [player] │  │ [player] │                      │
│  └──────────┘  └──────────┘  └──────────┘                      │
└────────────────────────────────────────────────────────────────┘

NEW (Swipeable Carousel)
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ←  ┌──────────────────────┐  ┌──────────────────────┐   →     │
│     │     Episode 127      │  │     Episode 126      │         │
│     │  The Future of...    │  │  Building Brands...  │         │
│     │  with Sarah Chen     │  │  with Marcus W.      │         │
│     │                      │  │                      │         │
│     │  [Spotify Player]    │  │  [Spotify Player]    │         │
│     │  ▶ ─────●───── ♪     │  │  ▶ ─────○───── ♪     │         │
│     └──────────────────────┘  └──────────────────────┘         │
│                                                                │
│                    ● ○ ○  (dots)                               │
└────────────────────────────────────────────────────────────────┘
```

---

## Key Changes

### 1. Replace Grid with Carousel

- Import Carousel components from `@/components/ui/carousel`
- Wrap episode cards in `Carousel`, `CarouselContent`, and `CarouselItem`
- Show 1 card on mobile, 2 on tablet, staying centered

### 2. Larger Cards

- Increase padding from `p-6` to `p-8`
- Larger title font: `text-xl` to `text-2xl`
- Increase Spotify embed height from `152px` to `180px`
- Add more vertical spacing between elements

### 3. Navigation Controls

- Add left/right arrow buttons using `CarouselPrevious` and `CarouselNext`
- Style arrows to match the editorial aesthetic (rounded, subtle)
- Enable touch/swipe on mobile via Embla's built-in drag

### 4. Responsive Behavior

- Mobile: 1 card visible at a time (full width swipe)
- Tablet/Desktop: 2 cards visible with peek effect
- Smooth snap scrolling between cards

---

## File to Modify

| File | Changes |
|------|---------|
| `src/components/sections/PodcastSection.tsx` | Replace grid with carousel, enlarge cards |

---

## Technical Details

### Carousel Configuration

```typescript
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="w-full"
>
  <CarouselContent className="-ml-4">
    {featuredEpisodes.map((episode) => (
      <CarouselItem 
        key={episode.number} 
        className="pl-4 basis-full md:basis-1/2 lg:basis-1/2"
      >
        {/* Episode card content - enlarged */}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="left-0 md:-left-12" />
  <CarouselNext className="right-0 md:-right-12" />
</Carousel>
```

### Enlarged Card Styling

```typescript
<article className="group bg-background rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-transparent hover:border-primary/20">
  {/* Episode number and duration */}
  <div className="flex items-start justify-between mb-6">
    <span className="text-sm font-medium text-primary">
      Episode {episode.number}
    </span>
    <span className="text-sm text-muted-foreground">
      {episode.duration}
    </span>
  </div>
  
  {/* Larger title */}
  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
    {episode.title}
  </h3>
  
  {/* Guest */}
  <p className="text-base text-muted-foreground mb-6">
    with {episode.guest}
  </p>
  
  {/* Taller Spotify embed */}
  <iframe
    height="180"
    ...
  />
</article>
```

---

## Expected Result

- Swipeable carousel with touch/drag support
- Larger, more prominent episode cards
- Arrow navigation buttons on desktop
- Smooth looping behavior
- Maintains the editorial magazine aesthetic

