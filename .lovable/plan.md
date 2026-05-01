# JSON import for blog posts (matching AIGA pattern)

Add a "JSON importeren" / "Import JSON" button to the blog post editor (`/admin/posts/new` and `/admin/posts/:id`) so you can drop in a JSON file and have all fields pre-filled — same flow as in your AIGA project.

## What you'll get

In the post editor header, next to "Save Draft" and "Publish", a new outline button: **Import JSON** (file icon). Clicking it opens a file picker. After selecting a `.json` file:
- All matching fields in the form get filled in
- The slug auto-regenerates from the title (unless the JSON specifies one)
- A toast confirms success or reports a parse error
- You can then review, tweak, and hit Publish or Save Draft as usual

Importing on an existing post overwrites the in-memory form (not the DB) until you save — so you can preview before committing.

## JSON shape

The schema mirrors the AIGA importer but maps to this project's blog fields. All keys optional except needing at least `title` or `content`:

```json
{
  "title": "AI is making you dumber",
  "slug": "ai-is-making-you-dumber",
  "excerpt": "Short summary shown in cards and search.",
  "content": "<p>Full HTML content for the rich text editor…</p>",
  "header_image_url": "https://…/header.jpg",
  "seo_title": "AI is making you dumber | Ferry Hoes",
  "seo_description": "Meta description, ~155 chars.",
  "seo_focus_keyphrase": "ai cognitive offloading",
  "seo_keywords": ["ai", "cognition", "thinking"],
  "seo_og_image_url": "https://…/og.jpg",
  "sources": [
    { "title": "Harvard Business Review", "url": "https://hbr.org/…" }
  ]
}
```

Lenient parsing details:
- `seo_keywords` accepts either an array of strings or a comma-separated string
- `sources` accepts either the array-of-objects form above, or a simple object `{ "Title": "url" }`
- Missing keys leave the existing form value alone (so partial JSON works for quick edits)
- If neither `title` nor `content` is present, import is rejected with a toast

## Technical changes

**New file**: `src/components/admin/BlogJsonImport.tsx`
- Lucide `FileJson` icon button styled to match the editor's outline buttons
- Hidden `<input type="file" accept=".json,application/json">`
- Reads file with `file.text()`, `JSON.parse`, validates, calls `onImport(parsed)`
- Uses `@/hooks/use-toast` (the project already standardises on this, not sonner)

**Edited**: `src/pages/PostEditor.tsx`
- Import `BlogJsonImport`
- Add an `applyJsonImport(data)` helper that conditionally calls each `setX` setter only when the key is present in the parsed JSON
- For `seo_keywords`: normalise array → comma-separated string (matches existing `seoKeywords` state)
- For `sources`: accept array-of-objects directly; if it's a plain object, map entries to `{ title, url }`
- If JSON includes a `slug`, set `slugManuallyEdited = true` so the title-based auto-slug doesn't overwrite it
- Mount `<BlogJsonImport onImport={applyJsonImport} />` in the header action row, before "Save Draft"

## Out of scope
- No PDF import (AIGA has one; you only asked for JSON)
- No bulk import of multiple posts in one file
- No auto-publish on import — you still click Publish
- No changes to the database schema or `useAdminPosts` hooks

## Files touched
- **New**: `src/components/admin/BlogJsonImport.tsx`
- **Edited**: `src/pages/PostEditor.tsx`
