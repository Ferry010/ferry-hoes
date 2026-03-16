

# WordPress-style WYSIWYG Blog Editor

The current editor has a basic TipTap toolbar (bold, italic, headings, lists). To make it feel more like WordPress, I'll add missing features: links, images inline, blockquotes, text alignment, and a link insertion dialog. I'll also add keyboard shortcuts display and improve the toolbar UX.

## Changes

### `src/components/admin/RichTextEditor.tsx` — Major upgrade

**Add TipTap extensions:**
- `@tiptap/extension-link` — clickable links with a URL input popover
- `@tiptap/extension-image` — inline images within content
- `@tiptap/extension-placeholder` — "Start writing..." placeholder text
- `@tiptap/extension-underline` — underline formatting
- `@tiptap/extension-text-align` — left/center/right alignment
- `@tiptap/extension-blockquote` (already in StarterKit)

**Enhanced toolbar with grouped sections:**
- **Text formatting**: Bold, Italic, Underline, Strikethrough
- **Headings**: H2, H3
- **Lists**: Bullet, Ordered
- **Block**: Blockquote, Horizontal rule
- **Insert**: Link (popover dialog for URL input), Image (URL input or upload)
- **Alignment**: Left, Center, Right
- **History**: Undo, Redo

**Link insertion**: A small popover/dialog that appears when clicking the Link button — input for URL, option to open in new tab, and apply/remove buttons.

**Image insertion**: A button that opens a dialog to paste an image URL or upload directly to storage (reusing existing upload logic from `ImageUpload.tsx`).

**Better editor area**: Increase min-height, add placeholder text, improve prose styling to better match the published blog appearance.

### New packages to install
- `@tiptap/extension-link`
- `@tiptap/extension-image`
- `@tiptap/extension-placeholder`
- `@tiptap/extension-underline`
- `@tiptap/extension-text-align`

### Files changed

| File | Change |
|------|--------|
| `src/components/admin/RichTextEditor.tsx` | Full rewrite with expanded toolbar, link/image dialogs, new extensions |
| `package.json` | Add 5 new TipTap extension packages |

