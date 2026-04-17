---
name: Typography
description: Font families and sizing rules for the editorial 2026 redesign
type: design
---
**Fonts (loaded via Google Fonts in `index.html` and `src/index.css`):**

- Display / headlines: **Inter Tight** (700/800), `letter-spacing: -0.02em`. Tailwind: `font-display`.
- Body: **Inter** (400–600), 17–19px, line-height 1.55. Tailwind: `font-sans` (default).
- Handwritten accent: **Caveat**, navy ink. Tailwind: `font-handwritten` (alias `font-signature` kept for back-compat).

**Sizing (use clamp inline on H1/H2):**
- H1: `clamp(48px, 8.5vw, 128px)`
- H2: `clamp(40px, 6vw, 88px)`
- H3: 32–40px

**Headline formula (signature device — use everywhere):**
- Plain ink + one accent word in orange + an orange `<Period />`.
- Example: `I help brands become more <span className="text-primary">human</span><Period />`
- Period component lives in `src/components/HeadingDot.tsx` as a named export.

**Dropped fonts:** Plus Jakarta Sans, The Nautigal — do not reintroduce.
