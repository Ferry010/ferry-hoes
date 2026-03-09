

## Blog Section — Colored Background Cards

### `src/components/blog/BlogCard.tsx`
- Change `homepage` variant to accept a `colorIndex` prop (0 = teal, 1 = coral)
- Remove `line-clamp-2` from title to allow full display
- Card backgrounds: first card `bg-[#5aa6b2]`, second card `bg-[#E86A4A]`
- Title text: white, bold, no truncation
- "Blog" tag: white text on `white/20` background
- Excerpt: `text-white/70`
- Date/read time: `text-white/60`, border-t `border-white/20`
- Remove hover text color change (already white)

### `src/components/sections/BlogSection.tsx`
- Pass `colorIndex` to each `BlogCard` so first gets teal, second gets coral

### Files changed
- `src/components/blog/BlogCard.tsx`
- `src/components/sections/BlogSection.tsx`

