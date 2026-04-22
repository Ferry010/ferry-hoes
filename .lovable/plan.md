

# Bigger logos + "Want to join this list?" link

Two small tweaks to `src/components/sections/ClientLogos.tsx`:

**1. Slightly larger logos**
Bump each logo's max-height by one step (≈30%) and widen the max-width to match, keeping the marquee balanced:
- `max-h-12` (48px) → `max-h-16` (64px)
- `max-h-14` (56px) → `max-h-[72px]`
- `max-h-16` (64px) → `max-h-20` (80px)
- Widths grow proportionally (e.g. `160px` → `200px`, `180px` → `220px`)

Result: logos read more confidently without overpowering the "I've had the pleasure to work with…" eyebrow above. Marquee animation, opacity (50% grayscale → 80% on hover), spacing and mask gradient stay untouched.

**2. Add a quiet text link below the marquee**
Centered under the logo strip:

> *Want to join this list?*

Styled as an understated underlined link (small, foreground/70, primary on hover, underline-offset-4) so it feels like an editorial footnote, not a CTA button. Opens the Speakers Academy quote form in a new tab:
`https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966`

## Out of scope
- No changes to logo set, ordering, marquee speed, or section padding.
- No changes elsewhere on the page.

