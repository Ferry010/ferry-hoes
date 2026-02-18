

## Add a Timeline to the About Page

A vertical timeline placed right after the biography text and before the CTA section, highlighting the key milestones from Ferry's story.

### Timeline milestones (extracted from the bio)

| Year | Milestone |
|------|-----------|
| 1987 | Born in Delft, the Netherlands |
| 1997 | Built first website at age 10 |
| 2003 | Made it to the final 16 of Junior Eurovision auditions |
| 2010 | Graduated in Marketing, started career in IT sales |
| 2016 | Quit corporate life, became a growth hacker |
| 2017 | Coined the term Brand Humanizing |
| 2018 | First public speaking gig at a college |
| 2019 | Joined a speakers agency, started speaking internationally |
| Today | One of the most booked speakers in the Netherlands |

### Design

- Clean vertical line on the left with small dots/circles at each milestone
- Year displayed in bold accent color, milestone text in muted foreground
- Max-width matches the biography text (max-w-3xl, centered)
- Subtle fade-in animation as user scrolls (optional, can keep it static for simplicity)
- Follows the minimalist, text-focused style of the rest of the About page (no images, no decorative elements)

### Technical details

**File: `src/pages/About.tsx`**

- Add a new timeline section between the `</main>` closing tag (line 151) and the CTA `<section>` (line 154)
- The timeline will be built inline as a simple mapped array of `{ year, text }` objects -- no separate component needed since it's only used here
- Uses existing Tailwind classes and brand colors (accent for years, muted-foreground for descriptions, border for the vertical line)

