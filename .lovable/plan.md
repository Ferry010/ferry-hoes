

## Redesign Blog Section — Clean, Minimal Cards

### `src/components/sections/BlogSection.tsx`
- Change from stacked layout (featured + secondary grid) to a single **2-column grid** for all posts (limit to 2 posts instead of 3)
- Update loading skeleton to match the new 2-column equal layout
- Remove the featured/secondary distinction

### `src/components/blog/BlogCard.tsx`
- Add new `variant="homepage"` (or repurpose `featured`/`secondary` into one)
- Card structure: `bg-background rounded-2xl p-6 md:p-8`, no image, no overlay, no pull quote, no Caveat font
  - Small teal category tag at top (use a `<span>` styled like a pill badge in `bg-primary/10 text-primary`)
  - Bold title
  - One-line excerpt in grey (`text-muted-foreground`, `line-clamp-1`)
  - Date + read time small at bottom
- Keep hover effects consistent with site (`shadow-soft`, `hover:-translate-y-1`)

### Files changed
- `src/components/blog/BlogCard.tsx` — replace `featured` and `secondary` variants with a single clean `homepage` variant
- `src/components/sections/BlogSection.tsx` — 2-column grid, limit 2, use `homepage` variant

