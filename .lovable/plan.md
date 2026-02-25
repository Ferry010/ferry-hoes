

## AI-Generated Abstract Hero Background for Speaking Page

Generate a custom abstract background image using Lovable AI's image generation model, then use it as a full-bleed hero background with a dark overlay — similar to how the homepage video hero works.

### Image Concept

A textural, abstract visual in the teal/coral palette: think soft gradients, organic shapes, maybe subtle light effects — something that feels warm, human, and premium without being literal or stock-photo-generic. The vibe should match the brand: intelligent, calm, natural.

### Implementation

| Step | Detail |
|---|---|
| **1. Generate image** | Use `google/gemini-3-pro-image-preview` via an edge function to create a high-quality abstract background. Save the resulting image as `src/assets/speaking-hero-bg.png`. |
| **2. Update Speaking hero** | Replace the current plain `bg-background` + blurred circles with the generated image as a full-bleed `<img>` background, overlaid with a dark gradient (similar to the homepage video overlay). |

### Speaking Hero Layout (after)

```text
┌──────────────────────────────────────────┐
│  [AI-generated abstract bg image]        │
│  [dark overlay gradient]                 │
│                                          │
│         🎤 Keynote Speaker               │
│     Keynotes that inspire action         │
│        subtitle text...                  │
│      [ Book Ferry button ]               │
│                                          │
└──────────────────────────────────────────┘
```

### File Changes

| File | Change |
|---|---|
| `src/assets/speaking-hero-bg.png` | New file — AI-generated abstract background |
| `src/pages/Speaking.tsx` | Replace hero background markup: add `<img>` with the generated asset, add a dark overlay `<div>`, adjust text colors to work on dark background (white text, lighter muted text) |

### Technical Notes

- The image will be generated once at build time using the AI image model, then stored as a static asset — no runtime API calls needed.
- Text will use `text-white` / `text-white/70` styling over the dark overlay, matching the homepage hero treatment.
- The blurred circle decorations will be removed since the generated image replaces them.

