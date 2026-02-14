

# Add Breathing Room to Podcast Cards

## Problem
The carousel cards sit too tight together and get cut off at the bottom due to tight padding and gap values.

## Changes

**File: `src/components/sections/PodcastSection.tsx`**

1. **Increase gap between cards**: Change `CarouselContent` from `-ml-4` to `-ml-6` and `CarouselItem` from `pl-4` to `pl-6` to widen the spacing between cards.

2. **Add vertical padding to the carousel wrapper**: Add `py-4` to `CarouselContent` so shadow and border effects on cards aren't clipped at top/bottom.

3. **Increase card internal padding**: Bump the article padding from `p-8` to `p-8 md:p-10` for more internal breathing room on larger screens.

These are small spacing tweaks in a single file -- no structural or layout changes needed.

