

## Hero Section Refinements

Three tweaks to `src/components/sections/HeroVideo.tsx`:

### 1. Shrink the name and subtitle
- Reduce "Ferry Hoes" from `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` to `text-2xl sm:text-3xl md:text-4xl`
- Reduce subtitle text size accordingly

### 2. Move CTA up, right after the last chat bubble
- Move the "Continue the conversation" button out of the name/subtitle block and place it directly after the last Ferry bubble ("I call it Brand Humanizing.") inside the chat flex column
- Adjust its animation delay to follow the last bubble (~5.9s instead of 7.2s)
- The name and subtitle still appear below, but smaller and more understated

### 3. Remove the bouncing scroll indicator
- Delete the entire `absolute bottom-20` scroll/chevron div at the bottom of the section

### Technical detail

**File: `src/components/sections/HeroVideo.tsx`**
- Move the `<button>` element into the chat `flex-col` div, after the last Ferry bubble
- Reduce heading font sizes
- Delete the scroll indicator div (~6 lines at the bottom)
- Adjust animation delays: CTA at ~5.9s, name at ~6.5s, subtitle at ~7.0s

