

## Single-Row Image Collage

Replace the absolute-positioned overlapping collage with a simple horizontal flex row of all 5 images, each in a taller card for better cropping.

### Changes in `src/pages/About.tsx`

**Desktop collage (lines 35-56)**: Replace the `relative h-[440px]` absolute-positioned layout with a `flex gap-4` row. Each image gets a `flex-1 h-[280px] lg:h-[320px] rounded-2xl overflow-hidden shadow-lg` container with subtle alternating rotations kept. Images use `object-cover object-center`.

**Mobile grid (lines 58-70)**: Change to a horizontal scroll row (`flex gap-3 overflow-x-auto snap-x`) showing all 5 images at `w-[70vw] h-48 flex-shrink-0 snap-center` for swipeable browsing.

**Container**: Widen from `max-w-4xl` to `max-w-6xl` to give the row more space.

