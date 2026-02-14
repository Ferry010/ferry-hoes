
# Update About Page with Real Biography

## Overview
Replace the placeholder bio copy across the About page with Ferry's actual story. The narrative is rich and chronological, so we'll restructure the page sections to match the real content.

## Changes to `src/pages/About.tsx`

### 1. Hero section
- Keep the visual structure
- Update subtitle to: "Speaker, author, entrepreneur -- but mostly just someone who started talking once and never stopped."

### 2. "My Story" split section (section 2)
Replace the three placeholder paragraphs with the early life narrative:
- Born in 1987 in Delft, hardworking father, stay-at-home mom, grandmother's quote
- Introverted kid at school, fell in love with the internet, built first website at ten (Ja Rule track, email feature)
- High school, greenhouse job, always optimizing

### 3. Update timeline (section 4)
Replace with milestones that match the real story:
- **1997**: Built first website at age 10
- **2009**: Graduated marketing after pivoting from development
- **2016**: Quit corporate life, started as freelance growth hacker
- **2017**: Coined "Brand Humanizing" over lunch with Jonathan
- **2018**: Spent a year researching Brand Humanizing
- **2020**: Joined speakers agency, started speaking professionally
- **2025**: Published the Brand Humanizing book

### 4. Add a new narrative section between story and values
A second split-layout section (photo right) covering the professional transformation arc:
- Studying development, realizing it wasn't for him, teacher's marketing advice
- Account manager in IT sales, night-time self-education (Cambridge, social psychology, change management)
- 2016: quitting corporate, going freelance
- 2017 lunch with Jonathan, coining Brand Humanizing
- The year of research, falling in love with the intersection of tech, psychology, and innovation

### 5. "Off Stage" section (section 5) -- becomes "Finding my voice"
Replace placeholder personal content with the speaking journey arc:
- Was deeply introverted, public speaking was never the plan
- Realized the idea wouldn't spread if kept private
- Started with small student groups, then a LinkedIn request, then a speakers agency
- Grew to one of the most booked speakers in the Netherlands
- "That shy, introverted kid grew into someone who now spends most of his time on stages around the world"

### 6. Values section (section 3)
Keep the three values cards as-is -- they align well with the real story.

### 7. Final CTA (section 6)
Update closing copy to: "Because what I love most is helping people and technology work together in a way that actually makes work and life more human." -- drawn directly from the final line of the bio.

## Technical Details

### Single file edit: `src/pages/About.tsx`
- Update the hero `<p>` subtitle text
- Replace the three `<p>` tags in the "My Story" section with early-life paragraphs
- Update the `timeline` array with new milestones
- Change "My Story" heading from "From entrepreneur to thought leader" to "From Delft to the world stage"
- Add a second narrative `<article>` block after the story section for the professional journey (marketing pivot, corporate years, freelancing, Brand Humanizing origin)
- Rewrite the "Off Stage" section heading to "Finding my voice" and replace paragraphs with the speaking journey narrative
- Update final CTA paragraph text

No new files, no database changes, no new dependencies -- just content updates to a single page.
