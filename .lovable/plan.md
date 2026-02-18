

## Screen-Wide Photo Carousel on Speaking Page

Add a cinematic, screen-wide photo carousel between sections on the Speaking page. The carousel will show placeholder images in a "photobook" style with overlapping/stacked visual treatment, full viewport width but constrained height.

### Design

- **Full-width strip** spanning edge-to-edge (`w-screen`), with a constrained height (~400px on desktop, ~250px on mobile)
- **Overlapping card style**: Each slide slightly overlaps the next using negative margins and a subtle rotation/offset, giving a "spread out photobook" feel
- **3 visible slides** at once: the center image is prominent, flanking images peek in from the sides with reduced opacity/scale
- **Smooth horizontal scrolling** via the existing Embla carousel, with arrow navigation and optional drag
- **Placeholder images** using `/placeholder.svg` for now, easy to swap for real photos later
- **Placement**: Between the "Meet Ferry" about section and the Q&A section, acting as a visual breather

### Visual Treatment

- Images have `rounded-xl` corners, subtle `shadow-2xl`, and a slight `rotate` on non-active slides
- Center/active image: full opacity, `scale-100`, no rotation
- Side images: `opacity-60`, `scale-90`, slight `rotate-2` / `-rotate-2`
- Dark gradient overlay at left/right edges for a vignette fade effect
- No dots -- just prev/next arrows styled minimally

### Technical Details

**File: `src/pages/Speaking.tsx`**

1. Add a new `PhotoCarousel` section between the "Meet Ferry" article and the `<SpeakingQA />` component
2. Use the existing `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` components
3. Configure Embla with `{ align: "center", loop: true }` and `slidesToScroll: 1`
4. Each `CarouselItem` uses `basis-2/3 md:basis-1/2` so flanking slides are visible
5. Use the carousel API's `selectedScrollSnap` to apply active/inactive styles (opacity, scale, rotation) to each slide via a small state hook
6. Render ~6-8 placeholder images with `aspect-[3/2]` ratio inside each slide
7. Add left/right gradient overlays (`pointer-events-none`) on the container edges for the vignette effect
8. Wrap in a full-width section with `py-12 bg-secondary/20` for subtle background contrast

No new files or dependencies needed -- reuses the existing carousel infrastructure.

