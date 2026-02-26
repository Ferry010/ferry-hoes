

## Replace hero collage image

Copy the uploaded photo to `src/assets/ferry-brand-humanizing.jpg`, then update `src/pages/About.tsx` to import and use it in place of `ferry-on-stage.jpg` in the hero collage (both desktop and mobile layouts). Update alt text accordingly.

### Changes

**Copy file**
- `user-uploads://PHOTO-2025-11-21-23-06-46.jpg` → `src/assets/ferry-brand-humanizing.jpg`

**`src/pages/About.tsx`**
- Replace `import ferryOnStage` with import of the new image
- Update all references from `ferryOnStage` to the new import
- Update alt text from "Ferry Hoes on stage" to "Ferry Hoes with Brand Humanizing banner"

