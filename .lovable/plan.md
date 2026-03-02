

## Redesign Blog Section on Homepage

### Changes to `src/components/sections/BlogSection.tsx`

Split the posts array: first post = featured card, remaining posts = secondary cards. Replace the uniform 3-column grid with a stacked layout.

**Featured card (first post):**
- No thumbnail image
- Teal left border (`border-l-4 border-primary`)
- Pull quote from the excerpt in Caveat font, italic, teal color
- Article title in bold below the quote
- Date + read time in small grey text
- Full-width card

**Secondary posts (posts 2+):**
- Displayed in a 2-column grid
- Thumbnail with dark overlay (`bg-black/50`) and title in white text on top
- No separate title/excerpt below the image — all info overlaid
- Date + read time in small white/grey text overlaid

### Changes to `src/components/blog/BlogCard.tsx`

Add a `variant` prop: `"featured"` | `"secondary"` (default keeps current behavior for the `/blog` page).

- **`variant="featured"`**: Renders the quote-based card with teal left border, no image, Caveat pull quote, bold title, meta below.
- **`variant="secondary"`**: Renders image with dark gradient overlay, title + meta in white on top of image, no content below.

### Files changed
- `src/components/blog/BlogCard.tsx` — add `variant` prop with featured/secondary rendering
- `src/components/sections/BlogSection.tsx` — split posts into featured + secondary, use new variants

