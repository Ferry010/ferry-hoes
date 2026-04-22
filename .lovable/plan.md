

## Bring the editor in line with AIGA + BHI, plus smarter SEO

The current editor is already TipTap-based and actually has a few features the other two projects don't (link popover, image upload, alignment, undo/redo). The real gaps versus AIGA/BHI are: a few missing toolbar buttons, a sources list, and weaker SEO defaults. I'll close those gaps and significantly improve the SEO automation.

### 1. Editor toolbar parity (`src/components/admin/RichTextEditor.tsx`)

Add to the existing toolbar:
- **H1 button** (BHI has it; useful when not auto-applied by page).
- **Code block** button (AIGA has it).
- **Inline code** button (small upgrade).
- Slightly bigger editor min-height (`min-h-[600px]`) and BHI-style prose treatment for blockquotes (rounded, accent border, soft background) so the in-editor preview matches the published look more closely.
- Keep all existing nicer-than-BHI features: link popover with new-tab toggle, image upload dialog with drag area, alignment row.

No new dependencies needed (StarterKit already includes `codeBlock` and `code`).

### 2. Sources list field (`src/pages/PostEditor.tsx`)

Add an editable Sources block (like BHI) — array of `{ title, url }` rows with add / remove buttons. Stored on the post and rendered at the bottom of `BlogPost.tsx` as a "Sources" footer list.

**Schema change** — `blog_posts` needs a `sources jsonb` column (default `'[]'::jsonb`, nullable). Migration adds the column; `useAdminPosts.ts` types extended; `BlogPost` interface gets `sources?: { title: string; url: string }[]`.

### 3. Smarter SEO auto-fill (`src/components/admin/SEOFields.tsx` + `PostEditor.tsx`)

The biggest "more pre-added" win. Today only `seo_title` falls back to title and `seo_description` falls back to excerpt at save time, and the user has no visibility. I'll make the SEO panel actively prefill and show what will ship:

- **Auto-fill on first edit**: when `seoTitle` is empty, mirror the post title live (placeholder shows the value, "Use title" button writes it in). Same for description ← excerpt, and excerpt ← first paragraph of content (already exists, but make it visible).
- **Auto-keywords suggestion**: derive top 5–8 keyword candidates from title + headings + first paragraph (simple stopword strip + frequency, client-side, no API). One-click "Suggest keywords" chip-picker — user clicks to accept.
- **OG image field**: today the schema has `seo_og_image_url` but it's not in the editor. Add an image picker (reusing `ImageUpload`) — defaults to header image preview if empty.
- **Reading time + word count** display next to the SEO panel header.
- **Live Google preview** redesigned to match BHI's (blue title `#1a0dab`, green URL, grey snippet) and a **Twitter/OG card preview** below it using OG image + SEO title + description.
- **Validations as you type**: title 50–60 chars green, 30–50 amber, >60 red; description 120–160 green, 70–120 amber, >160 red.
- Collapsible panel (BHI pattern), open by default.

### 4. Save logic (`PostEditor.tsx`)

- Persist `seo_og_image_url` and `sources`.
- On save, if SEO fields are blank: write `seoTitle ← title`, `seoDescription ← excerpt || first 160 chars of stripped content`, `seo_og_image_url ← header_image_url`. So even a lazy save ships with full SEO.
- Toast confirms what was auto-filled ("SEO title and OG image filled from post").

### 5. Render the new fields on the public post (`src/pages/BlogPost.tsx`, `src/components/blog/SEOHead.tsx`)

- `SEOHead` already takes title/description; ensure it now also passes `og:image` from `seo_og_image_url || header_image_url`.
- Footer Sources block on `BlogPost`: small "Sources" heading + numbered list of links (open in new tab, `rel="noopener nofollow"`).

### 6. Out of scope

- Editor library swap (TipTap stays).
- Public blog card design (just shipped).
- Categories/tags column.
- AI-generated SEO copy via Lovable AI — I can add this in a follow-up if you want; for now the suggestions are deterministic and instant.

### Files touched

- **Edited**: `src/components/admin/RichTextEditor.tsx`, `src/components/admin/SEOFields.tsx`, `src/pages/PostEditor.tsx`, `src/pages/BlogPost.tsx`, `src/components/blog/SEOHead.tsx`, `src/hooks/useAdminPosts.ts`, `src/hooks/useBlogPosts.ts` (type only).
- **Migration**: add `sources jsonb default '[]'` to `blog_posts`.

