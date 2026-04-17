---
name: Visual Direction
description: Warm editorial minimalist design rules for the 2026 redesign
type: design
---
**The site is a thinker's home base, not a speaker sales page.**

Aesthetic: warm editorial minimalism, author-style. Think Seth Godin / Rory Sutherland cadence in copy, BHI / AIGA visual language for layout.

Core rules:
- Cream background, ink type, single orange accent. No teal, no gradients on hero, no purple.
- **No hero video.** Hero is polaroid-led: editorial copy on the left, rotated white-bordered photo on the right, optional handwritten Caveat caption.
- Every major section starts with an `<Eyebrow>` (orange dot + uppercase tracked label).
- Every H1/H2 ends with `<Period />` (orange full stop). The period is part of the brand.
- Polaroid component: `src/components/Polaroid.tsx`. Rotation -3 to +3 deg, hover-straightens, navy Caveat caption.
- Pill buttons: `src/components/PillButton.tsx`. Variants `primary` (orange fill) and `ghost` (ink outline). Arrow nudges 4px right on hover.
- 12-col grid, max width 1280px, 72–96px vertical rhythm between sections.
- Left-aligned by default. No centered marketing blocks. No card shadows except polaroid.
- No backdrop-blurs, no chatbot widgets on homepage, no logo wall (use plain TrustLine sentence).
- Motion: 8px headline rise + fade, 300ms ease-out. Respect `prefers-reduced-motion`.
