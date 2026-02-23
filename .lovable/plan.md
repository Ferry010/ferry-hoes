

## Branded Blog Hero Images

Two complementary approaches to give every blog post a recognizable, on-brand hero image treatment.

### Approach 1: CSS Brand Overlay (instant, no processing)

Apply a consistent branded overlay to every uploaded hero image using CSS -- no image processing needed. This ensures every blog post looks cohesive regardless of the source photo.

The overlay treatment:
- A teal-to-coral diagonal gradient overlay at ~30% opacity on top of the photo
- The blog title rendered directly over the hero image with a text shadow
- A subtle bottom fade to the page background (already in place)
- Optional: a small brand watermark or logo corner element

This is purely visual -- the original uploaded image stays untouched, and the branded look is applied at render time on both the blog card thumbnails and the full blog post page.

### Approach 2: AI-Processed Brand Images (generate on upload)

Add a "Generate branded version" button to the post editor's image upload. When clicked, the uploaded image is sent to the AI image model with a prompt like *"Add a professional teal (#0E7490) gradient overlay to the lower third, with a subtle coral (#E8653A) accent line"* -- producing a new, permanently branded version stored alongside the original.

This creates an actual processed image file, so the branded look appears everywhere the image is used (social sharing, RSS, embeds).

### Recommendation

Start with **Approach 1** (CSS overlay) -- it is instant, costs nothing, and covers the blog cards + hero display. Approach 2 can be added later for social/OG image generation if needed.

### What changes

**File: `src/pages/BlogPost.tsx`**
- Add a teal-to-coral gradient overlay (`bg-gradient-to-br from-primary/30 via-transparent to-accent/20`) on top of the hero image
- Render the post title and meta info directly over the hero image for a magazine-style branded header
- Keep the existing bottom fade gradient

**File: `src/components/blog/BlogCard.tsx`**
- Add a matching but lighter gradient overlay on the card thumbnail image (`from-primary/20 to-accent/10`)
- This ties the card previews visually to the full post hero

**File: `src/index.css`** (optional)
- Add a reusable `.brand-hero-overlay` utility class if we want to apply the same treatment elsewhere (e.g., Speaking page photos)

### Visual result

Every blog hero image will have the same teal-to-coral gradient wash over it, making them all feel like part of the same visual family -- regardless of what photo is uploaded. The title text over the image completes the "magazine cover" effect.

