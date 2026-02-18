

## Redesign Timeline: Alternating Cards with Updated Milestones

Replace the current left-aligned list with an alternating left/right card layout centered on the vertical timeline line, and update all milestones with the corrected dates and new entries.

### Updated milestones

| Year | Text |
|------|------|
| 1987 | Born in Delft, the Netherlands |
| 1997 | Built my first website at age 10 |
| 2002 | Made it to the final 16 of the Junior Eurovision auditions |
| 2009 | Started my career in IT sales |
| 2016 | Quit corporate life to become a full-time entrepreneur and business owner |
| 2017 | Coined Brand Humanizing |
| 2019 | Founded the Brand Humanizing Institute |
| 2021 | Joined Speakers Academy as my agent |
| 2022 | Won the prestigious Dutch Government's AI Hackathon |
| 2025 | Over 40 stages annually, making it to the top most booked speakers in the country |
| 2025 | Published the Brand Humanizing book |

### Card layout

- A vertical line runs down the center of the container
- Each milestone is a small card (rounded, subtle border, light background) with the year in bold accent (Teal) and the description below
- Cards alternate left and right: even-indexed items on the left, odd-indexed items on the right
- A small dot sits on the center line at each milestone
- On mobile, cards stack in a single column to the right of the line (like the current layout) since alternating doesn't work well on small screens

### Visual style

- Cards use `bg-card border border-border rounded-xl p-4 shadow-soft` for a clean, on-brand look
- Year text in `text-accent font-bold font-display`
- Description in `text-muted-foreground`
- Center line uses `border-border` (same as current)
- Dots use `bg-accent` (Teal, same as current)
- No images or decorative elements, keeping the minimalist About page style

### Technical details

**File: `src/pages/About.tsx`** (lines 153-181)

- Replace the entire timeline section with the new alternating card layout
- Desktop: use a relative container with the vertical line centered (`left-1/2`), and position each card at 50% width on alternating sides using conditional classes
- Mobile: fall back to a simple left-aligned layout with `md:` breakpoint for the alternating behavior
- The two 2025 entries will use unique keys (e.g., "2025a" and "2025b") to avoid React key conflicts
