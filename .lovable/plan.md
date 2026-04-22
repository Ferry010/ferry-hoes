

# Blog Editor Upgrade + On-Brand Author Card

The current editor is already a TipTap WYSIWYG with bold/italic/underline/strike, H1–H3, lists, blockquote, code, links, images (URL + upload), alignment and undo/redo, and the SEO panel already has title, description, keywords with click-to-add suggestions, OG image, slug, Google preview, social card preview, and word count + reading time. Two real gaps remain: a Yoast-style **Focus Keyphrase** with usage checks, and a **brand-on-point author experience** (portrait byline + end-of-post bio, with reading time made more visible).

## What changes for you

**In the post editor (`/admin/posts/...`):**
- New **Focus Keyphrase** field at the top of the SEO panel (single primary phrase).
- Live **SEO checklist** based on that keyphrase:
  - In SEO Title? In Meta Description? In Slug? In first paragraph? In any subheading (H2/H3)? Density 0.5–2.5% in body? Slug ≤ 60 chars? Title 50–60 chars? Description 140–160 chars? Has alt-able header image?
  - Each item shows green/amber/red with a one-line fix tip.
- An overall **SEO score** (0–100) and **Readability** mini-score (sentence length, paragraph length, passive voice hints) shown next to word count.
- Existing fields (SEO title, meta description, keywords, OG image, slug) stay; small polish: focus phrase auto-adds itself to keywords if missing.

**On every blog post page (`/blog/:slug`):**
- Replace the "FH" circle with a real **portrait byline** using `src/assets/ferry-portrait.jpg` (round, 48px), name, role, date · reading time on a second line. Reading time becomes always-visible (it's currently only in the hero overlay).
- New **"About the author"** card after the post (before related posts): portrait, "Ferry Hoes", one-line role, 2–3 sentence on-brand bio, and two quiet links — *More about Ferry* → `/about`, *Book Ferry to speak* → `/contact`.
- Both new pieces use the warm editorial style (cream surface, soft border, accent dot), no hype copy, matches `mem://brand/identity-and-tone`.

## Technical changes

**New files**
- `src/lib/seoAnalysis.ts` — pure functions: `analyzeFocusKeyphrase({ keyphrase, title, slug, metaDescription, content, headings })` returns `{ score, checks: [{ id, label, status, hint }] }`. Also `readabilityScore(plainText)` (Flesch-ish, sentence/paragraph length).
- `src/components/admin/FocusKeyphrasePanel.tsx` — the field + checklist UI (uses `seoAnalysis.ts`, renders rows with `CheckCircle`/`AlertCircle`/`AlertTriangle` and color tokens already in `SEOFields`).
- `src/components/blog/AuthorByline.tsx` — compact byline (portrait + name + role + date · read time).
- `src/components/blog/AuthorBioCard.tsx` — rich end-of-post bio card.

**DB / types**
- Add column `seo_focus_keyphrase text` to `blog_posts` (migration). Update `BlogPost` interface in `src/hooks/useBlogPosts.ts` and `CreatePostData`/`UpdatePostData` in `src/hooks/useAdminPosts.ts`.

**Editor wiring (`src/pages/PostEditor.tsx`)**
- New state `focusKeyphrase`, persisted on save.
- Render `<FocusKeyphrasePanel>` at the top of the SEO section, passing title, slug, content (plain text via existing `stripHtml`), seoTitle, seoDescription. Extract H2/H3 from `content` HTML for the heading check.

**SEO panel (`src/components/admin/SEOFields.tsx`)**
- Add overall SEO score chip and readability chip in the header (next to "X words · Y min read").
- Pass keyphrase through; if not in keywords list, show a one-click "Add to keywords".

**Post page (`src/pages/BlogPost.tsx`)**
- Replace inline FH avatar block with `<AuthorByline date={...} readTime={...} />`.
- Insert `<AuthorBioCard />` between `<PostCTA />` and Related Posts.
- Reading time stays computed via existing `getReadTime`.

**Brand**
- Bio copy (final wording confirmed before write):
  > "Ferry Hoes is a keynote speaker and author of *Brand Humanizing*. He helps leaders and teams put humans first in a world racing to automate everything."
- No em dashes, no removed tagline (per `mem://brand/identity-and-tone`).

## Out of scope
- No changes to inline editing toolbar (already feature-complete).
- No multi-author support.
- No AI-generated SEO suggestions beyond what `seoSuggest.ts` already does.

