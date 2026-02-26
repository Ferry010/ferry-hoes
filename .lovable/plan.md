

## About Page Hero — Image Collage

Replace the plain text header with a full-height hero section featuring a dynamic image collage and the "My story" headline.

### Layout

```text
┌─────────────────────────────────────────────┐
│                                             │
│   "My story"          ┌──────┐ ┌──────┐    │
│   subtitle text       │ img1 │ │ img2 │    │
│                       └──────┘ └──────┘    │
│                       ┌──────┐ ┌──────┐    │
│                       │ img3 │ │ img4 │    │
│                       └──────┘ └──────┘    │
│                                  ┌──────┐  │
│                                  │ img5 │  │
│                                  └──────┘  │
└─────────────────────────────────────────────┘
```

**Desktop**: Two-column split — left has the headline + a short subtitle, right has a staggered collage grid of 5 photos with varying sizes, rounded corners, subtle rotation/offset, and the brand gradient overlay on each image.

**Mobile**: Title stacks on top, collage becomes a 2-column masonry-style grid below.

### Images used (from `src/assets/`)
1. `ferry-on-stage.jpg` — largest, anchor image
2. `ferry-speaking.jpg`
3. `ferry-bookstore.jpg`
4. `ferry-presenting.jpg`
5. `ferry-bts.jpg`

### Changes

**`src/pages/About.tsx`**
- Replace the current `<header>` block (lines 23-32) with a new hero section component
- Import 5 images from `src/assets/`
- Hero section: `min-h-[80vh]` with `grid md:grid-cols-2`, left column centered vertically with "My story" headline + subtitle "International speaker, published author, entrepreneur", right column with the collage grid
- Each collage image gets `rounded-2xl shadow-lg` + the brand overlay (`bg-gradient-to-br from-primary/20 via-transparent to-accent/15`) + slight CSS transforms (rotate, translate) for an editorial scattered look
- Subtle entrance animations using existing `animate-fade-up` with staggered delays
- On mobile, reduce to a compact 2-col grid with smaller images above the title

