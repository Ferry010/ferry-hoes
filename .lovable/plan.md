

## Full-Screen Chat Overlay with Gated Entry

### Concept

When visitors click "Continue the conversation" in the hero, instead of scrolling to a section, a **full-screen overlay** takes over. The page scroll is locked -- they're now "in the chat." The first thing Ferry asks is a fork:

1. **"I'll explore myself"** -- closes the overlay, unlocks scroll, visitor browses the site freely
2. **"Let's talk"** -- kicks off the interactive conversation tree about Ferry, Brand Humanizing, and the book

This creates a moment of intentional engagement. Visitors who want to chat get an immersive experience; those who want to browse aren't held hostage.

### How it works

1. Hero CTA click opens a full-screen overlay (not a new section -- a fixed overlay on top of everything)
2. Body scroll is disabled (`overflow: hidden` on `document.body`)
3. Ferry opens: "Nice. What would you like to do?"
4. Two options appear:
   - "I'll look around myself" -- closes overlay, re-enables scroll
   - "Let's talk" -- starts the conversation tree
5. The conversation plays out exactly like the current ConversationSection but inside the overlay
6. When conversation ends (final CTA or "Start over"), visitor can close the overlay and return to the site

### Layout

```text
+------------------------------------------+
|                    [X]   |  (close button, top-right)
|                                          |
|          (breathing room)                |
|                                          |
|   [Ferry bubble]                         |
|                          [Your reply]    |
|   [Ferry bubble]                         |
|                                          |
|         [Option A] [Option B] [Option C] |
+------------------------------------------+
```

Dark background matching the hero. Same bubble styling. Content anchored to the bottom with `flex justify-end`.

### Updated conversation tree

**Gate node** (new root):
- Ferry: "Nice. What would you like to do?"
  - "I'll look around myself" --> closes overlay
  - "Let's talk" --> moves to current "start" node

**Start node** (after choosing "Let's talk"):
- Ferry: "Glad you're staying. What are you curious about?"
  - "What is Brand Humanizing?"
  - "Tell me about your speaking"
  - "Tell me about your book"

All subsequent branches stay the same as the current tree (Brand Humanizing deep-dives, speaking topics/venues, book details). Every non-final node has 3 options. Final nodes show the "Shoot me a message" CTA plus a "Close" option to exit the overlay.

### Files changed

**`src/components/sections/ConversationSection.tsx`** -- rewrite as overlay component
- Change from a `<section>` to a `fixed inset-0 z-50` overlay
- Accept `isOpen` and `onClose` props
- Add gate node at the start with the "explore myself" / "let's talk" fork
- On "explore myself", call `onClose()`
- Lock body scroll when open (`useEffect` toggling `document.body.style.overflow`)
- Add close button (X) in top-right corner
- Keep all existing conversation tree nodes and logic
- Keep bubble styling, animations, auto-scroll

**`src/components/sections/HeroVideo.tsx`** -- manage overlay state
- Add `useState<boolean>(false)` for overlay visibility
- CTA onClick sets state to `true` instead of scrolling
- Render `ConversationSection` with `isOpen` / `onClose` props

**`src/pages/Index.tsx`** -- remove standalone ConversationSection
- Remove the `<ConversationSection />` from the page layout since it's now rendered inside HeroVideo as an overlay

### Technical details

- Scroll lock: `useEffect` that sets `document.body.style.overflow = 'hidden'` when open, restores on close/unmount
- Overlay uses `fixed inset-0 z-50 bg-foreground` -- completely covers the page
- Close button: subtle X in top-right, plus the "explore myself" option also closes
- Conversation state resets when overlay closes (so re-opening starts fresh)
- The overlay fades in with `animate-fade-in` for a smooth entrance
- ESC key also closes the overlay for accessibility
