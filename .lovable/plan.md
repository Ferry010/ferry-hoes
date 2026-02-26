

## Plan: Two-column layout — cards left, form right

### Change in `src/pages/Contact.tsx`

Restructure the page below the header into a two-column grid layout:

- **Left column**: The two info cards (Press + Book Ferry To Speak), stacked vertically
- **Right column**: The contact form

**Layout details:**
- Wrap cards and form in a single `container max-w-6xl` section with `grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12`
- Left column contains the two cards stacked with `space-y-6`
- Right column contains the form (or the success message)
- On mobile, cards stack above the form (single column)
- Remove the separate Info Cards `<section>` and merge into the Form section
- Widen the container from `max-w-2xl` to `max-w-5xl` or `max-w-6xl` to accommodate the side-by-side layout
- Keep the header at `max-w-2xl` centered as-is

