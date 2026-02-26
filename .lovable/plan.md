

## Premium "Index" Navigation Overlay

### Route Mapping

The five navigation items map to existing routes:

| Item | Route |
|------|-------|
| ON STAGE | `/speaking` |
| IN WRITING | `/blog` |
| THE STORY | `/about` |
| IDEAS | `/podcast` |
| CONNECT | `/conversation` |

### Files to Create

**`src/components/IndexOverlay.tsx`** — The full-screen overlay component

Core behavior:
- Controlled via `open` / `onClose` props
- Full viewport white overlay with `backdrop-blur-[4px]` on underlying content
- Fade-in 200ms + translateY 15px → 0px entrance animation
- Fade-out 180ms + subtle scale 1.02 → 1.00 exit
- Five nav items rendered as large uppercase `font-display` links
- Desktop: two-column grid (70/30), right column shows micro-copy on hover with 150ms fade
- Mobile: single column, first tap reveals micro-copy below item, second tap navigates
- Top-right shows "Close" button (same style as "Index" trigger)
- Idle timer: after 12s show "Architecture matters." at bottom-left, after 25s fade in "So does curiosity." below it
- On item click: close overlay, navigate via `react-router-dom`

**`src/components/IndexButton.tsx`** — The persistent header trigger

- Fixed top-right corner, high z-index
- Displays "Index" in `font-display`, medium weight, slightly smaller than headline
- 3% brightness increase on hover, no underline, no animation
- On click: opens the overlay
- Hidden when overlay is open (overlay shows "Close" instead)

### Files to Modify

**`src/pages/Index.tsx`** — Add `IndexButton` to the page layout

**`src/pages/About.tsx`**, **`src/pages/Speaking.tsx`**, **`src/pages/Blog.tsx`**, **`src/pages/Podcast.tsx`**, **`src/pages/Conversation.tsx`**, **`src/pages/BlogPost.tsx`** — Add `IndexButton` to each page

Alternatively, place the `IndexButton` + `IndexOverlay` in `src/App.tsx` outside `<Routes>` so it appears globally on all public pages (excluding admin routes). This is the cleaner approach.

### Styling Details

- Background: `bg-white` (not theme `bg-background` to ensure pure white)
- Nav items: `font-display uppercase tracking-wide text-foreground`, large size (~4xl desktop, ~2xl mobile), generous vertical spacing
- Micro-copy: `text-muted-foreground text-base font-sans`, max-width constrained
- No shadows, no borders, no rounded playful elements
- High contrast black on white
- CSS transitions only, no spring/bounce physics
- Grid alignment with generous negative space

### Technical Approach

- Use React state for overlay open/close, `useState` for hovered item, `useRef` + `useEffect` for idle timers
- `useNavigate` for programmatic navigation on click
- `AnimatePresence`-style CSS transitions (pure CSS, no framer-motion needed)
- Conditional rendering with CSS opacity/transform transitions for enter/exit
- `pointer-events-none` on body when overlay is open to prevent scroll
- Mobile detection via existing `useIsMobile` hook for tap-to-reveal behavior

