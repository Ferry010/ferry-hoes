

# Fix blog rendering + clean up post page

## What's wrong

The editor IS rich — bold/italic, H1–H3, lists, quotes, links, images all work and are saved as proper HTML. The problem is on the **public side**: `@tailwindcss/typography` (the `prose` plugin) is installed in `package.json` but missing from `tailwind.config.ts`, so every `prose-*` class on the blog page is silently ignored. That's why your post collapses into "one big alinea" with no paragraph spacing, no heading hierarchy, and no list bullets — even though the HTML is correct underneath.

## Changes

**1. Enable rich rendering (the real fix)**
- Register `@tailwindcss/typography` in `tailwind.config.ts` plugins.
- Result on `/blog/:slug`: paragraphs get proper spacing, H1/H2/H3 scale and weight correctly, bullet & numbered lists show markers and indentation, blockquotes get the accent left-border + cream background, inline code and code blocks render styled, links pick up the accent color and underline, images keep their rounded corners. Same will apply inside the editor itself (it uses the same `prose` classes), so the writing surface in `/admin/posts/...` will finally look like the published article — true WYSIWYG, matching the Brand Humanizing Institute editor feel.

**2. Remove "You might also like"**
- In `src/pages/BlogPost.tsx`, delete the entire Related Posts block (the `{relatedPosts.length > 0 && …}` section, lines ~209–237) including the "See Ferry's keynote topics" link below it.
- Also drop the now-unused `relatedPosts` calculation.
- Keep the Previous / Next two-card nav (already in place).
- Keep the "Back to all articles" link at the bottom.

## Out of scope
- No changes to the editor toolbar (already complete).
- No changes to the SEO / focus-keyphrase panel.
- No DB migration needed.

