

# Show all logos as a static grid on /on-stage

On `/on-stage` (which renders `Speaking.tsx`), the client logos currently appear as a scrolling marquee via `<ClientLogos />`. Replace that with a static, fully-visible grid so visitors can see every brand at a glance — fitting for the speaker page where credibility matters more than motion.

## What changes

**1. New component: `src/components/sections/ClientLogosGrid.tsx`**
- Imports the same 12 logos from `@/assets/logos/*` as `ClientLogos.tsx` (single source of truth stays in sync visually because we're using the same files).
- Renders them in a responsive grid inside a soft card:
  - Mobile: 2 columns
  - `sm`: 3 columns
  - `md`: 4 columns
  - `lg`: 6 columns
- Each cell: centered, fixed height (~`h-20`), `object-contain`, `opacity-60 grayscale` with `hover:opacity-100 hover:grayscale-0` transition (matches the marquee's tone but slightly more vivid since they're stationary).
- Wrapped in a `bg-background-alt border border-border rounded-2xl p-8 md:p-10` card so the grid feels intentional rather than floating.
- Same eyebrow copy as the marquee: *"I've had the pleasure to work with great brands like"*.
- Same "Want to join this list?" link underneath, pointing to the Speakers Academy quote URL.
- Uses `useScrollReveal` for a subtle fade-in (consistent with other Speaking.tsx sections).

**2. Edit `src/pages/Speaking.tsx`**
- Replace `import ClientLogos from "@/components/sections/ClientLogos"` with `import ClientLogosGrid from "@/components/sections/ClientLogosGrid"`.
- Replace `<ClientLogos />` with `<ClientLogosGrid />` (line 187).

## Out of scope
- No changes to `ClientLogos.tsx` — the marquee version stays as-is for the homepage and `/press`.
- No changes to the logo set, ordering, or assets.
- No changes to other sections of `Speaking.tsx`.

## Files touched
- **New**: `src/components/sections/ClientLogosGrid.tsx`
- **Edited**: `src/pages/Speaking.tsx` (import + one tag swap)

