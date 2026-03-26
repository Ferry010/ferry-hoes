

# Warmth and personality upgrade

A visual-only pass across the site. No copy, structure, or functional changes. Nine coordinated style tweaks to shift the feel from "clean SaaS" to "warm editorial."

---

## 1. Warm background base
**File:** `src/index.css`

Update CSS custom properties in `:root`:
- `--background: 38 30% 97.5%` (warm cream)
- `--secondary: 38 30% 95%` (deeper cream)
- `--card: 38 25% 99%` (warm white cards)
- `--muted: 38 20% 94%`
- `--border: 38 15% 90%`
- `--input: 38 15% 92%`

Dark mode values stay unchanged.

## 2. Heading font → Plus Jakarta Sans
**Files:** `src/index.css` (Google Fonts import), `tailwind.config.ts` (font-family)

- Replace Archivo with Plus Jakarta Sans in the Google Fonts `@import` URL
- Update `fontFamily.display` to `["Plus Jakarta Sans", "system-ui", "sans-serif"]`

## 3. Polaroid-style photo on AboutBlock
**File:** `src/components/sections/AboutBlock.tsx`

Wrap the hero photo in a polaroid frame:
- White card with `p-2 pb-8`, slight rotation (`-1.5deg`), soft drop shadow
- Below the image: handwritten annotation *"Ferry — actual human"* using Caveat font at ~18px

## 4. Section label chips → dot + text
**Files:** `BookSection.tsx`, `PodcastSection.tsx`, `BlogSection.tsx`, `SpeakerSection.tsx`, `BrandHumanizingSection.tsx`

Replace the icon inside each `<span>` badge with a small filled circle (8×8px, `rounded-full`, accent-colored). Remove the lucide icon from the badge. Keep the label text.

## 5. Warm card backgrounds
**File:** `src/components/sections/PodcastSection.tsx`
- Episode cards: change gradient `from-background` to `from-[hsl(38,40%,96%)]`

**File:** `src/components/blog/BlogCard.tsx`
- Default variant text area: add `bg-[hsl(38,30%,97%)]` to the text `<div>`
- Default variant: alternate slight rotation on the article element using `colorIndex % 2 === 0 ? 'rotate-[0.5deg]' : 'rotate-[-0.5deg]'`

## 6. CTA buttons — more playful
**File:** `src/components/ui/button.tsx`

- Default variant: add `hover:scale-[1.03] transition-all duration-150` to the base cva string (already has `transition-colors`, change to `transition-all`)
- Buttons already use `rounded-full` where needed; ensure the primary CTAs across sections keep `rounded-full` (they already do)
- Outline variant: add `hover:bg-[hsl(38,30%,95%)]` instead of generic accent hover

## 7. Footer — warm dark
**File:** `src/components/sections/Footer.tsx`

- Change `bg-foreground` to inline style `backgroundColor: 'hsl(25, 15%, 13%)'`
- Nav/social links: change `text-white/70` → `text-[hsl(38,30%,88%)]` and `text-white/50` → `text-[hsl(38,30%,75%)]`

## 8. Scroll-reveal animations
**New file:** `src/hooks/useScrollReveal.ts`

Create a small hook using `IntersectionObserver` that adds a `revealed` class when elements enter the viewport. Apply to section headings and card grids in the main homepage sections via a `ref` or a wrapper component. CSS: `opacity: 0; transform: translateY(20px)` → revealed state with 500ms ease-out. Stagger children by 80ms using CSS `transition-delay`.

**File:** `src/index.css` — add `.scroll-reveal` and `.scroll-reveal.revealed` utility classes.

**Files:** Apply the hook in `BookSection`, `PodcastSection`, `BlogSection`, `SpeakerSection`, `BrandHumanizingSection`, `CommunitySection`, `AboutBlock`.

## 9. Stay connected section — warm gradient
**File:** `src/components/sections/CommunitySection.tsx`

Change `bg-secondary/40` to `bg-gradient-to-br from-[hsl(38,35%,95%)] to-[hsl(188,30%,94%)]`.

---

## Files changed summary

| File | Change |
|------|--------|
| `src/index.css` | Warm color vars, scroll-reveal CSS, Plus Jakarta Sans import |
| `tailwind.config.ts` | Display font family |
| `src/components/sections/AboutBlock.tsx` | Polaroid photo treatment |
| `src/components/sections/BookSection.tsx` | Dot badge, scroll-reveal |
| `src/components/sections/PodcastSection.tsx` | Dot badge, warm card bg, scroll-reveal |
| `src/components/sections/BlogSection.tsx` | Dot badge, scroll-reveal |
| `src/components/sections/SpeakerSection.tsx` | Dot badge, scroll-reveal |
| `src/components/sections/BrandHumanizingSection.tsx` | Dot badge, scroll-reveal |
| `src/components/sections/CommunitySection.tsx` | Warm gradient bg, scroll-reveal |
| `src/components/blog/BlogCard.tsx` | Warm text bg, slight rotation |
| `src/components/ui/button.tsx` | Hover scale, warm outline hover |
| `src/components/sections/Footer.tsx` | Warm dark bg, warm link colors |
| `src/hooks/useScrollReveal.ts` | New — IntersectionObserver hook |

