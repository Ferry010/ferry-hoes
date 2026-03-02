

## Update Brand Humanizing section copy and layout

### Changes to `src/components/sections/BrandHumanizingSection.tsx`

1. **Remove** the badge, the `<h2>` heading, and the tagline `<p>`. Keep only the section wrapper, decorative blurs, and the bottom link.

2. **Replace body content** with:
   - First sentence as a paragraph: *"Brand Humanizing is my idea. I co-created it, I wrote a book about it, and I've spent the last ten years putting it on stages across the world."*
   - Pull quote styled as a handwritten margin note: *"Sounds obvious. Turns out it isn't."* — using Google Font **Caveat**, ~`text-2xl`, `text-primary` (teal), `rotate-[-2deg]`, inline-block with some vertical margin.
   - Second paragraph: *"Technology should make organisations more human, not less. It's not a framework I borrowed. It's something I built from scratch."*
   - Keep the existing "Want to learn more" `<a>` link below.

3. **Add Caveat font** import to `src/index.css` alongside the existing Google Fonts import.

### Files changed
- `src/index.css` — add `Caveat` to Google Fonts import
- `src/components/sections/BrandHumanizingSection.tsx` — restructure content

