

## Restructure About Page to Stacked Layout

Change the hero from a 2-column grid to a single-column stacked layout: collage on top, then headline + subtitle below.

### Changes in `src/pages/About.tsx`

**Hero section (lines ~33-82)**:
- Remove the `grid md:grid-cols-2` layout — make it a single centered column
- Move the image collage above the text (currently text is left, images right)
- Center the headline "My story" and subtitle below the collage
- Keep the collage styling (rotations, overlays, animations) intact but adjust sizing to work as a full-width centered element
- Reduce collage height since it now spans the full width
- On mobile, keep the compact 2-col grid as-is, just ensure it sits above the title

**Structure order**:
1. Image collage (full-width, centered)
2. "My story" headline + subtitle (centered text)
3. Biography copy (unchanged)

