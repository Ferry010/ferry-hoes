

# Flowing Section Transitions

Add organic, wave-like transitions between sections to create a seamless, magazine-quality flow instead of hard block edges.

---

## Transition Strategy

Each section-to-section transition gets a custom SVG wave or diagonal shape divider that bleeds the previous section's color into the next, creating visual continuity.

```text
CURRENT (Hard Blocks)
┌──────────────────────────────────────────────┐
│             Hero (dark)                      │
├──────────────────────────────────────────────┤  ← Hard edge
│             About (light)                    │
├──────────────────────────────────────────────┤  ← Hard edge
│             Brand Humanizing (secondary)     │
└──────────────────────────────────────────────┘

NEW (Flowing Transitions)
┌──────────────────────────────────────────────┐
│             Hero (dark)                      │
│    ╭─────────────────────────────────────────│  
│   ╱                                          │  ← Soft wave
│  ╱          About (light)                    │
│ ╱                                            │
│╱─────────────────────────────────────────────│
│    ╰──╮                                      │  ← Organic curve
│        ╲     Brand Humanizing (secondary)    │
└──────────────────────────────────────────────┘
```

---

## Transition Map

| From | To | Transition Style |
|------|----|--------------------|
| Hero (dark) | About (light) | Soft wave curving down - dramatic contrast |
| About | Brand Humanizing | Subtle diagonal gradient blend |
| Brand Humanizing | Speaker (dark teal) | Bold wave sweeping left-to-right |
| Speaker | Book (light) | Inverted wave, opposite direction |
| Book | Podcast | Minimal: soft gradient fade |
| Podcast | Community (dark) | Strong wave, creates visual anchor |
| Community | Footer | Sharp diagonal - finality |

---

## Implementation Approach

### 1. Create Reusable Transition Components

Create a new file with SVG-based divider components:

```typescript
// src/components/ui/section-divider.tsx

// Wave divider (organic, flowing)
const WaveDivider = ({ 
  topColor, 
  bottomColor, 
  flip = false 
}: Props) => (
  <div className="relative h-24 md:h-32 -mt-1">
    <svg 
      viewBox="0 0 1440 120" 
      className="absolute w-full h-full"
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <path 
        fill={topColor}
        d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,0 L0,0 Z"
      />
    </svg>
    <div className="absolute inset-0 bg-[var(--bottom-color)]" />
  </div>
);

// Diagonal divider (sharp, modern)
const DiagonalDivider = ({ topColor, bottomColor }: Props) => (
  <div className="relative h-16 md:h-24">
    <svg viewBox="0 0 1440 100" className="absolute w-full h-full">
      <polygon 
        fill={topColor} 
        points="0,0 1440,0 1440,30 0,100" 
      />
    </svg>
  </div>
);

// Curve divider (soft, organic)
const CurveDivider = ({ topColor }: Props) => (
  <div className="relative h-20 md:h-28">
    <svg viewBox="0 0 1440 100" className="absolute w-full h-full">
      <ellipse 
        fill={topColor} 
        cx="720" cy="-350" 
        rx="900" ry="450" 
      />
    </svg>
  </div>
);
```

### 2. Integrate Dividers Between Sections

Update each section to include a divider either at its top or bottom:

```typescript
// Example: HeroVideo.tsx - add wave at bottom
<section className="...">
  {/* existing content */}
  
  {/* Transition to About */}
  <div className="absolute bottom-0 left-0 right-0 z-20">
    <svg 
      viewBox="0 0 1440 120" 
      className="w-full h-16 md:h-24"
      preserveAspectRatio="none"
    >
      <path 
        className="fill-background"
        d="M0,40 C480,120 960,0 1440,60 L1440,120 L0,120 Z"
      />
    </svg>
  </div>
</section>
```

### 3. CSS Variables for Color References

Use CSS custom properties to reference the design system colors in SVG fills:

```css
/* Already available via Tailwind classes */
fill-background    → hsl(var(--background))
fill-secondary     → hsl(var(--secondary))
fill-primary       → hsl(var(--primary))
fill-card          → hsl(var(--card))
fill-foreground    → hsl(var(--foreground))
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/ui/section-divider.tsx` | **New file** - Reusable divider components |
| `src/components/sections/HeroVideo.tsx` | Add wave divider at bottom |
| `src/components/sections/AboutBlock.tsx` | Add subtle curve at bottom |
| `src/components/sections/BrandHumanizingSection.tsx` | Add wave at bottom (into dark) |
| `src/components/sections/SpeakerSection.tsx` | Add inverted wave at bottom |
| `src/components/sections/BookSection.tsx` | Add gradient fade at bottom |
| `src/components/sections/PodcastSection.tsx` | Add wave at bottom (into dark) |
| `src/components/sections/CommunitySection.tsx` | Add diagonal at bottom |

---

## Visual Preview

```text
Hero (dark video)
    ╰──────────────────────────────╮ wave down
                                   │
About (light)                      │
    ╭──────────────────────────────╯ soft curve
    │
Brand Humanizing (secondary)
    │  ╭───────────────────────────╮ bold wave
    ╰──╯                           │
                                   │
Speaker (dark teal)                │
    ╭──────────────────────────────╯ inverted wave
    │
Book (secondary)
    │ . . . . . . . . . . . . . . .  soft gradient
    │
Podcast (card/white)
    │  ╭───────────────────────────╮ wave
    ╰──╯                           │
                                   │
Community (dark teal)              │
    ╲──────────────────────────────╱ sharp diagonal
                                   
Footer (dark)
```

---

## Technical Details

### Wave Path Variations

Different wave paths for variety:

```typescript
// Gentle wave
"M0,60 C360,120 720,20 1080,80 S1440,40 1440,60 L1440,120 L0,120 Z"

// Bold wave
"M0,0 C240,100 480,20 720,80 C960,140 1200,40 1440,80 L1440,120 L0,120 Z"

// Subtle curve
"M0,100 Q720,0 1440,100 L1440,120 L0,120 Z"
```

### Responsive Sizing

```typescript
<div className="relative h-16 sm:h-20 md:h-28 lg:h-32">
  <svg 
    viewBox="0 0 1440 120" 
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full"
  >
    ...
  </svg>
</div>
```

### Z-Index Management

Dividers positioned at `z-10` to sit above section backgrounds but below content.

---

## Result

- Seamless visual flow between all sections
- Organic, magazine-quality aesthetic matching the editorial direction
- Each transition feels intentional and designed
- Maintains brand colors while creating movement
- Fully responsive across all screen sizes

