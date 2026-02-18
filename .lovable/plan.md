

## Collapsible Testimonial Cards in a Carousel

Turn the testimonials into compact cards that show a preview (first ~2 lines of the quote), with a "Read full review" button that expands the card inline. This keeps the carousel clean and allows 2-3 cards per slide, matching the podcast section's style.

### How it works

- Each card shows the company/name, the Quote icon, and a truncated preview of the testimonial (2 lines, using `line-clamp-2`)
- A "Read full review" link at the bottom toggles the card open to reveal the full quote
- When expanded, the text shows in full and the link changes to "Show less"
- Cards are shown 1 per slide on mobile, 2 on tablet, 3 on desktop (`basis-full md:basis-1/2 lg:basis-1/3`)
- Carousel navigation (arrows + dots) stays the same as the podcast section

### Visual style

- Cards match the podcast card aesthetic: rounded-2xl, gradient background, left accent border, hover shadow
- Compact height when collapsed so multiple cards fit nicely per slide
- Smooth height transition when expanding/collapsing

### Technical details

**File: `src/pages/Speaking.tsx`**

1. Add `useState` import from React
2. Create a small `TestimonialCard` component inside the file (or inline) that:
   - Accepts `quote`, `name`, `company` props
   - Uses local `const [expanded, setExpanded] = useState(false)` state
   - Renders the quote with `line-clamp-2` when collapsed, no clamp when expanded
   - Shows a "Read full review" / "Show less" toggle button
   - Wraps content in a transition for smooth expand/collapse
3. Update the `CarouselItem` className to `pl-6 basis-full md:basis-1/2 lg:basis-1/3`
4. Keep the existing testimonial data array, carousel wrapper, arrows, and dots unchanged

No new dependencies or files needed -- just React state and Tailwind utility classes.
