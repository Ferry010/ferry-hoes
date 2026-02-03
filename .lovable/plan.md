

# Immersive Homepage Redesign

A bold, full-screen experience that puts Ferry front and center with cinematic sections, animated text, and multiple engagement touchpoints.

---

## New Page Structure

```text
1. Hero (full screen video)
   - Large animated "FERRY HOES" text
   - Full-screen video background (placeholder)
   - Scroll indicator

2. About Block (full screen image)
   - Your photo as background
   - Copy: "Public speaker, published author & entrepreneur..."
   - Button to About page

3. Brand Humanizing Section (full screen)
   - Life mission around Brand Humanizing
   - Placeholder content

4. Speaker Section (full screen)
   - About speaking work
   - "Speaker enquiries" button

5. Book Section (full screen)
   - Translate to English
   - Note about Dutch-only + English request option

6. Podcast Section
   - Featured episodes (top 3 or recent 3)
   - Listen links

7. Discord Community (keep existing)

8. Footer
```

---

## Section 1: Hero with Animated Name

Full-screen with video background and large animated typography.

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│          ████████████████████████████████          │
│          █                              █          │
│          █    F E R R Y   H O E S       █          │
│          █    (animated, very large)    █          │
│          █                              █          │
│          ████████████████████████████████          │
│                                                     │
│               [full screen video BG]                │
│                                                     │
│                     ↓ scroll                        │
└─────────────────────────────────────────────────────┘
```

Features:
- Video element with `object-fit: cover` as background
- Placeholder: dark gradient overlay until real video
- "FERRY HOES" text animates in letter by letter or with a reveal effect
- Scroll indicator at bottom

---

## Section 2: About Block

Full-screen with photo background.

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│   [your photo - full screen background]             │
│                                                     │
│          ┌────────────────────────────┐             │
│          │  Ferry Hoes                 │            │
│          │                             │            │
│          │  Public speaker, published  │            │
│          │  author & entrepreneur with │            │
│          │  a mission to unleash human │            │
│          │  potential with technology. │            │
│          │                             │            │
│          │  [ More about me → ]        │            │
│          └────────────────────────────┘             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Section 3: Brand Humanizing

Full-screen mission statement.

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│              BRAND HUMANIZING                       │
│                                                     │
│    The superpower that makes your brand more        │
│    human and your business grow faster.             │
│                                                     │
│    [Placeholder text about this being your          │
│     life's work and mission...]                     │
│                                                     │
│         "Have a question about this?" →             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Section 4: Speaker Section

Full-screen with bold visual.

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│             ON STAGE                                │
│                                                     │
│    Keynotes that challenge, inspire, and            │
│    spark action. Topics from AI and the             │
│    future of work to human-centered design.         │
│                                                     │
│         [ Speaker enquiries → ]                     │
│                                                     │
│         "Want to discuss an event?" →               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Section 5: The Book

Full-screen, translated to English, with Dutch note.

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│    [book cover image]       THE BOOK                │
│                                                     │
│                             Brand Humanizing        │
│                                                     │
│                             The superpower that     │
│                             makes your brand more   │
│                             human and your business │
│                             grow faster.            │
│                                                     │
│                             Co-authored with        │
│                             Jonathan Flores         │
│                                                     │
│                             [ Get the book → ]      │
│                             [ Read a preview ]      │
│                                                     │
│      ─────────────────────────────────────────      │
│      Currently in Dutch only. Want an English       │
│      edition? Let me know - with enough interest    │
│      we'll publish!                                 │
│      [ Request English edition → ]                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Section 6: Podcast with Featured Episodes

Grid of top/recent episodes.

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│                 THE PODCAST                         │
│                                                     │
│    Conversations that matter. No scripts.           │
│    No soundbites. Just real talk.                   │
│                                                     │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│    │ Ep 127   │  │ Ep 126   │  │ Ep 125   │        │
│    │ Guest... │  │ Guest... │  │ Guest... │        │
│    │ Listen → │  │ Listen → │  │ Listen → │        │
│    └──────────┘  └──────────┘  └──────────┘        │
│                                                     │
│         [ Listen to all episodes → ]                │
│                                                     │
│         "Got a topic suggestion?" →                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Micro-Engagement Points

Throughout the page, subtle conversation starters:

| Location | Prompt | Action |
|----------|--------|--------|
| Hero | Scroll indicator only | - |
| About | - | Button to /about |
| Brand Humanizing | "Have a question about this?" | Opens chat |
| Speaker | "Want to discuss an event?" | Opens chat |
| Book | "Request English edition" | Opens chat |
| Podcast | "Got a topic suggestion?" | Opens chat |
| Discord | Join waitlist | - |
| Footer | Message link | Opens chat |
| Floating bubble | Always visible | Opens chat |

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/sections/HeroVideo.tsx` | Full-screen hero with animated name |
| `src/components/sections/AboutBlock.tsx` | Full-screen photo + bio block |
| `src/components/sections/BrandHumanizingSection.tsx` | Mission statement section |
| `src/components/sections/SpeakerSection.tsx` | Speaking work section |

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | New section order |
| `src/components/sections/BookSection.tsx` | Translate, add English request |
| `src/components/sections/PodcastSection.tsx` | Add episode cards |
| `tailwind.config.ts` | Add text-reveal animation |

## Files to Remove from Homepage

| File | Reason |
|------|--------|
| `src/components/sections/Hero.tsx` | Replaced by HeroVideo |
| `src/components/sections/ThreePillars.tsx` | Content distributed to full sections |
| `src/components/sections/ContentGrid.tsx` | Blog content for separate page |

---

## Technical Details

### HeroVideo.tsx Animation

Name animation using staggered letter reveal:

```typescript
const name = "FERRY HOES";
const letters = name.split("");

// Each letter animates in with delay
{letters.map((letter, i) => (
  <span 
    key={i}
    className="inline-block animate-fade-up"
    style={{ animationDelay: `${i * 0.08}s` }}
  >
    {letter === " " ? "\u00A0" : letter}
  </span>
))}
```

Font size: `text-7xl sm:text-8xl md:text-9xl lg:text-[12rem]`

Video placeholder: Dark gradient with subtle animated grain or noise pattern.

### Full-Screen Section Pattern

Each section uses:
```typescript
<section className="min-h-screen flex items-center justify-center relative">
  {/* Background (video/image/color) */}
  <div className="absolute inset-0 -z-10">
    {/* ... */}
  </div>
  
  {/* Content */}
  <div className="container relative z-10">
    {/* ... */}
  </div>
</section>
```

### AboutBlock.tsx Structure

```typescript
<section className="min-h-screen relative flex items-center">
  {/* Photo background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-foreground/70" /> {/* Overlay */}
    {/* Placeholder until real photo */}
    <div className="w-full h-full bg-gradient-to-br from-primary to-brand-teal-dark" />
  </div>
  
  {/* Content card */}
  <div className="container">
    <div className="max-w-2xl bg-background/90 backdrop-blur p-12 rounded-3xl">
      <h2>Ferry Hoes</h2>
      <p>Public speaker, published author & entrepreneur...</p>
      <Button>More about me</Button>
    </div>
  </div>
</section>
```

### BookSection.tsx Updates

Changes needed:
1. Translate Dutch copy to English
2. Add note: "Currently available in Dutch only"
3. Add micro-engagement: "Want an English edition? Let me know"
4. Keep existing book cover and layout

### PodcastSection.tsx Episode Cards

Add featured episodes array:

```typescript
const featuredEpisodes = [
  {
    number: 127,
    title: "The Future of Human Work",
    guest: "Sarah Chen",
    duration: "58 min",
  },
  // ...
];
```

Grid layout for 3 episode cards with play buttons.

### New Animations (tailwind.config.ts)

```typescript
keyframes: {
  "text-reveal": {
    "0%": { 
      opacity: "0", 
      transform: "translateY(100%) rotateX(-90deg)" 
    },
    "100%": { 
      opacity: "1", 
      transform: "translateY(0) rotateX(0)" 
    },
  },
},
animation: {
  "text-reveal": "text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
}
```

---

## New Page Flow

```text
Index.tsx
├── HeroVideo (name animation, video bg)
├── AboutBlock (photo, bio, CTA)
├── BrandHumanizingSection (mission)
├── SpeakerSection (speaking work)
├── BookSection (updated, translated)
├── PodcastSection (with episode cards)
├── CommunitySection (Discord)
├── Footer
└── FloatingChatBubble
```

---

## Sections Removed from Homepage

| Section | Where it goes |
|---------|---------------|
| ThreePillars | Content split into full sections |
| ContentGrid (blog) | Future /writing or /blog page |

---

## Placeholders Needed

| Element | Placeholder |
|---------|-------------|
| Hero video | Dark gradient with subtle grain animation |
| About photo | Teal gradient with overlay |
| Speaker background | Accent color gradient |
| Podcast episodes | 3 placeholder episodes |

---

## Expected Result

A bold, immersive homepage that:
- Opens with cinematic animated name reveal
- Uses full-screen sections for maximum impact
- Clearly communicates who you are and what you do
- Makes Brand Humanizing central to your identity
- Provides easy paths to book you as a speaker
- Shows the book with English request option
- Features podcast with actual episodes
- Maintains 6+ micro-engagement touchpoints
- Feels open, approachable, and authentically you

