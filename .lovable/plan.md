

## Blog Post Page Improvements

Two changes needed:

### 1. Remove gradient overlay from hero image

Currently the hero has two gradient overlays (line 67: teal-to-coral brand gradient, line 69: bottom fade to background). The user wants the image shown cleanly — remove both gradients. Move the title + meta below the image instead of overlaying it.

**Layout change:**
- Full-width hero image with no overlays
- Title, date, and read time rendered below the image in a clean text block

### 2. Rich text support with Markdown

Currently content is split by `\n\n` and rendered as plain `<p>` tags. Need to:

- **BlogPost.tsx**: Use `react-markdown` (already installed) to render content with proper heading, bold, italic, list support
- **PostEditor.tsx**: Add a toolbar or helper text indicating Markdown support (headings with `##`, `**bold**`, etc.)
- Style the rendered markdown using Tailwind's `prose` classes (already partially in place)

### Files to change

| File | Change |
|------|--------|
| `src/pages/BlogPost.tsx` | Remove gradient overlays, move title below image, replace paragraph splitting with `react-markdown` |
| `src/pages/PostEditor.tsx` | Add Markdown formatting hints/toolbar above the content textarea |

