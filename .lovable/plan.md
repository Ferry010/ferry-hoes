

## Blog Post Hero: Full Image with Title Overlay

**File: `src/pages/BlogPost.tsx`**

### Changes

Remove the gradient overlay (`bg-gradient-to-br from-primary/30 via-transparent to-accent/20`) from the hero image. Keep only the bottom-fade gradient (`bg-gradient-to-t from-background`) so the white title text remains readable against the image.

The current layout already has the title + date/read-time overlaid on the bottom of the image — this matches what you want (like the homepage cards without excerpt). Just need to remove line 67's color gradient overlay.

**Summary of edits (lines 66-68):**
- Delete the brand overlay div (line 67)
- Keep the bottom fade (line 69) for text legibility

Single file, single line removal.

