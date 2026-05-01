# Two images per post + redesigned blog hero

Currently a blog post has a single `header_image_url` that is used everywhere: as the card thumbnail in `/blog`, as the OG/social image, AND as the giant hero on the post page itself. Your card images already have text baked in — perfect for previews, ugly when re-used as a hero behind the H1.

This plan splits that into two distinct images and gives the post hero a proper editorial overlay.

## What changes

### 1. Two image fields in the editor

In `PostEditor.tsx` rename / reframe the existing image as the **Preview / Social image** and add a new **Hero image** below it.

- **Preview image** (existing `header_image_url`)
  - Used in: `BlogCard` thumbnails on `/blog`, homepage `BlogSection`, related-post nav, and as the OG/social fallback.
  - Label updated to *"Preview & social image"* with helper text: *"Used in blog overviews and when shared on LinkedIn/X. Text on the image is fine here."*
- **Hero image** (new field, stored as `hero_image_url`)
  - Used only as the full-bleed hero on `/blog/:slug`.
  - Label *"Hero image (clean, no text)"* with helper *"Sits behind the H1. Keep it text-free; an overlay will be applied for legibility."*
  - If empty, the post page falls back to the preview image (so existing posts don't break).

### 2. Category eyebrow

Add a `category` field on the post. Free single-select with a small preset list to keep things consistent: `General`, `AI`, `Speaking`, `Brand`, `Leadership`, `Personal`. Stored as plain text so you can add new ones later without migration.

- Editor: a `Select` with the presets + an "Other…" option that reveals a text input.
- Rendered as a small uppercase eyebrow in the post hero (e.g. `AI ·`).
- Optional everywhere — defaults to "General" only if you choose to set it.

### 3. New blog post hero

Redesign the hero block in `src/pages/BlogPost.tsx` to match the editorial feel of the rest of the site (cream/ink, accent dot, handwritten touch where it fits).

Layout (centered, max width matching the article body so the H1 lines up with the prose below):

```text
                ┌──────────────────────────────┐
                │   [hero image, full-bleed,   │
                │    soft dark gradient bottom │
                │    so text stays legible]    │
                │                              │
                │       AI · 4 MIN READ        │  ← eyebrow (category · read time)
                │                              │
                │   Technology should make     │  ← H1, centered, same max-width
                │   us more human, not less.   │     as article content below
                │                              │
                │   By Ferry  ·  Apr 30, 2026  │  ← "By Ferry" links to /my-story
                └──────────────────────────────┘
```

Specifics:
- Background: hero image with a `bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent` overlay (only on the bottom 60%) — keeps the image clean at the top while making the text readable at the bottom.
- Constrain the inner content to `max-w-3xl` so the H1 width matches the article body width below.
- Eyebrow line: `CATEGORY · READ TIME` in small uppercase tracked text, white.
- H1: same display font as today, white, centered.
- Meta line under H1: `By Ferry · {date}`. "By Ferry" is a `<Link to="/my-story">` styled as a subtle underline-on-hover.
- If no hero image exists: render the same composition on a cream background with ink text (no overlay needed) so the layout stays consistent.
- Remove the duplicate meta row that currently sits at the top of the article body (date · read time) since it's now in the hero.

### 4. JSON import + JSON schema

Extend `BlogJsonImport` to accept the two new fields so you can keep authoring posts via JSON the same way:

```json
{
  "title": "…",
  "category": "AI",
  "header_image_url": "https://…/with-text.jpg",
  "hero_image_url": "https://…/clean.jpg",
  "content": "<p>…</p>"
}
```

Backwards compatible: if `hero_image_url` is missing, the existing single-image behaviour is preserved.

## Technical details

**Database migration**
- `ALTER TABLE blog_posts ADD COLUMN hero_image_url text;`
- `ALTER TABLE blog_posts ADD COLUMN category text;`
- No backfill needed; both nullable.

**Types & hooks**
- Add `hero_image_url: string | null` and `category: string | null` to the `BlogPost` interface in `src/hooks/useBlogPosts.ts`.
- Add the same to `CreatePostData` in `src/hooks/useAdminPosts.ts`.
- `src/integrations/supabase/types.ts` regenerates automatically after the migration.

**Editor (`src/pages/PostEditor.tsx`)**
- Add state: `heroImageUrl`, `category`.
- Reframe existing "Header Image" section as "Preview & social image".
- New "Hero image" section using the same `ImageUpload` component.
- New "Category" section with `Select` (presets + "Other…" → `Input`).
- Include both in `postData` on save and in `applyJsonImport`.

**Post page (`src/pages/BlogPost.tsx`)**
- Compute `heroSrc = post.hero_image_url || post.header_image_url`.
- Replace the current hero block with the new centered overlay layout described above.
- Remove the now-redundant date/read-time row above the prose.
- "By Ferry" → `<Link to="/my-story">`.

**JSON import (`src/components/admin/BlogJsonImport.tsx`)**
- Add `hero_image_url?: string` and `category?: string` to `BlogJsonImportData`.

**SEO/OG**
- No changes needed: `seo_og_image_url` already falls back to `header_image_url` (the preview image), which is exactly what we want for social shares.

**Out of scope**
- No filtering by category on `/blog` yet (can be a follow-up once you have a few categorised posts).
- `BlogCard` keeps using `header_image_url` — no changes needed there.
- No changes to `BlogSection`, `Press`, or any other consumer of `header_image_url`.

## Files touched

- **Migration**: add `hero_image_url` and `category` columns to `blog_posts`.
- **Edited**: `src/hooks/useBlogPosts.ts`, `src/hooks/useAdminPosts.ts`, `src/pages/PostEditor.tsx`, `src/pages/BlogPost.tsx`, `src/components/admin/BlogJsonImport.tsx`.
