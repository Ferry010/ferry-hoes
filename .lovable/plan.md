
# Simplify About Page: Title + Text, No Images, No Em Dashes

## Overview
Strip the About page down to a clean, simple layout: one title at the top, followed by the full biography as flowing text paragraphs. Remove all images, split-layout sections, timeline, values cards, decorative orbs, and the visual thread. Also remove every em dash character across the page.

## What changes

### `src/pages/About.tsx`
- **Remove** unused imports: `Card`, `CardContent`, image assets (`ferryBookstore`, `ferryOnStage`), and icons no longer needed (`BookOpen`, `Sparkles`, `Mic`, `Cpu`, `Heart`, `Users`, `User`)
- **Remove** the `values` and `timeline` arrays
- **Remove** the fixed visual thread (gradient stripe), floating orbs, and all decorative background elements
- **Remove** all image sections and split-layout grids
- **Remove** the values cards section and timeline section
- **Replace all em dashes** (`—`) with commas, periods, or nothing depending on context
- **Simplify structure** to:
  1. A hero/title area with "About" heading
  2. A single content column with all biography paragraphs flowing naturally (the full text the user provided earlier)
  3. The final CTA section stays at the bottom
  4. Footer and AskFerryBubble remain

### Resulting page structure
```text
[Title: "About Ferry" or similar]

[Full biography text as consecutive paragraphs]

[CTA: "Want to work together?"]

[Footer]
```

## Technical details

### Single file edit: `src/pages/About.tsx`
- Remove imports: `Card`, `CardContent`, `BookOpen`, `Sparkles`, `Mic`, `Cpu`, `Heart`, `Users`, `User`, `ferryBookstore`, `ferryOnStage`
- Remove `values` and `timeline` constants
- Replace the hero + 5 content sections with a simple centered container holding a title and all paragraphs
- Keep: `Button`, `ArrowRight`, `MessageCircle`, `Link`, `Footer`, `AskFerryBubble`, `SEOHead`, and the `openMessagePanel` function
- Keep the final CTA section as-is (minus em dashes)
- All em dashes replaced throughout (hero subtitle, body text, CTA text)
