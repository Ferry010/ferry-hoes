

# Design upgrade — borrow AIGA + Brand Humanizing vibe

## Summary

Replace the logo with the new uploaded version (which already has the orange dot baked in). Create a reusable `SectionLabel` component inspired by AIGA's pattern — a simple dot + uppercase text, no pill background — and apply it consistently. Then make several flow improvements to reduce the "corporate sections stacked on top of each other" feeling.

---

## 1. New logo asset

Copy the uploaded `Ferry_Hoes_logo_2026-2.png` to `src/assets/` as both the black logo (it already has the orange dot). Update imports in `SiteHeader.tsx` and `Footer.tsx`. Remove the manually-added `<span>` coral dot from the header since it's now part of the logo itself.

Also need a white version for the footer — we'll keep the existing white logo for now (or invert with CSS if needed).

## 2. Reusable `SectionLabel` component

**New file:** `src/components/SectionLabel.tsx`

Borrowing AIGA's pattern — minimal, no pill background:
```tsx
const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2.5 mb-4">
    <div className="w-2 h-2 bg-accent rounded-full" />
    <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
      {text}
    </span>
  </div>
);
```

Replace all current inline pill badges across every section with this component. This gives a cleaner, less corporate feel — the orange dot becomes the consistent brand mark matching the logo.

**Sections to update:** `AboutBlock`, `BrandHumanizingSection`, `SpeakerSection`, `BookSection`, `PodcastSection`, `BlogSection`, `CommunitySection`, `AboutFerryLLM`.

## 3. Reduce section padding + remove backdrop-blur

The current sections feel heavy and disconnected because they each have `min-h-screen`, heavy padding, and `backdrop-blur-sm`. Changes:

- Remove `backdrop-blur-sm` from all sections (it adds a corporate glass feel)
- Remove `min-h-screen` from `BrandHumanizingSection` — let content determine height
- Reduce some `py-24 md:py-32` to `py-16 md:py-24` for tighter flow
- Remove decorative blur orbs from `SpeakerSection` and `BlogSection` (the subtle coral/teal blobs add visual noise)

## 4. Headings — add orange dot after key words

Following the logo's signature style, add a small orange square/dot after section heading text. This can be done with a CSS pseudo-element or a small inline span. Applied to all `h2` section headings:

```tsx
<h2 className="font-display text-5xl font-bold">
  Brand <span className="text-accent">Humanizing</span>
  <span className="inline-block w-2 h-2 bg-accent rounded-sm ml-1 mb-1 align-baseline" />
</h2>
```

This mirrors the logo's orange dot and creates visual consistency.

## 5. Flow improvements

- **Remove `bg-secondary/90`** from BrandHumanizing and BookSection — use `bg-background` so sections flow into each other on the same cream instead of alternating grey/cream
- **Add thin dividers** between sections instead: a subtle `<div className="max-w-xs mx-auto border-t border-border" />` between major sections in `Index.tsx`
- **SpeakerSection**: remove the full-bleed photo grid layout — wrap the photo in a polaroid treatment like AboutBlock for consistency, or keep the current layout but with no decorative blobs

## 6. Typography refinement

- Section headings: reduce max size from `text-7xl/text-8xl` to `text-5xl/text-6xl` — the current sizes feel like a startup landing page
- Body text: increase line-height slightly for warmth (already using Inter which is good)

---

## Files changed

| File | Change |
|------|--------|
| `src/assets/ferry-hoes-logo-black.png` | Replace with new uploaded logo |
| `src/components/SectionLabel.tsx` | New reusable component |
| `src/components/SiteHeader.tsx` | Remove manual coral dot span, use new logo |
| `src/components/sections/AboutBlock.tsx` | Use SectionLabel, add heading dot |
| `src/components/sections/BrandHumanizingSection.tsx` | Use SectionLabel, remove min-h-screen/backdrop-blur, reduce heading size, add heading dot |
| `src/components/sections/SpeakerSection.tsx` | Use SectionLabel, remove blur orbs, add heading dot |
| `src/components/sections/BookSection.tsx` | Use SectionLabel, remove backdrop-blur, add heading dot |
| `src/components/sections/PodcastSection.tsx` | Use SectionLabel, remove backdrop-blur, add heading dot |
| `src/components/sections/BlogSection.tsx` | Use SectionLabel, remove blur orbs, add heading dot |
| `src/components/sections/CommunitySection.tsx` | Use SectionLabel (light variant for dark bg), add heading dot |
| `src/components/sections/AboutFerryLLM.tsx` | Use SectionLabel |
| `src/pages/Index.tsx` | Add subtle dividers between sections |

