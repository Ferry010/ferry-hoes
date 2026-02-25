

## Auto-Scrolling Logo Ticker

Replace the static 5-column grid with a single-row, infinitely auto-scrolling horizontal ticker (marquee effect). Logos will be larger and more readable.

### Approach

Use a CSS animation-based marquee: duplicate the logo set twice inside a flex row, animate it with `translateX(-50%)` so it loops seamlessly. No JavaScript timers needed — pure CSS `@keyframes`.

### Changes

| File | Change |
|---|---|
| `src/components/sections/ClientLogos.tsx` | Replace grid layout with a horizontal scrolling marquee. Render logos twice for seamless loop. Increase logo sizes (e.g. `h-10`→`h-14`, wider max-widths). Add `overflow-hidden` wrapper and CSS animation via inline keyframes or a Tailwind `animate-` class. |
| `src/index.css` | Add a `@keyframes marquee` animation that translates the row from `0` to `-50%` over ~30s, `linear infinite`. |

### Technical Detail

```text
┌─────────────────────────────────────────┐  ← overflow-hidden
│ [logos set 1] [logos set 2]             │  ← flex row, animates left
│  ──────────────────────────►            │
└─────────────────────────────────────────┘
```

- The flex row contains all 10 logos twice (20 total)
- `animation: marquee 30s linear infinite` slides the row left
- When the first set scrolls out, the duplicate takes its place — seamless loop
- `pause on hover` via `hover:animation-play-state: paused` for accessibility
- Logos get bumped to `h-12`–`h-16` range with wider max-widths so they're legible
- Gaps between logos via `gap-12` or `gap-16`

