

# Update About Page Copy

## Overview
Replace the biography text in `src/pages/About.tsx` with the new copy provided. The page structure stays exactly the same: title, paragraphs, CTA, footer. No layout, styling, or structural changes needed.

## What changes

### `src/pages/About.tsx`
Replace all biography paragraphs in the `<main>` section with the new copy. Key differences from the current version:

- Opening paragraph expanded with more detail about home atmosphere ("always conversation in the house, always movement and energy")
- School paragraph expanded: "The place where I felt most at ease wasn't the classroom or the playground, but behind a computer screen"
- High school section rewritten as a single flowing paragraph instead of separate chunks
- Developer/marketing pivot condensed into fewer, tighter paragraphs
- 2016 section reworded: "reached a breaking point" and "creatively suffocating" replace previous phrasing
- Brand Humanizing paragraph now includes "human behavior" in the list of fascinations
- Speaking journey condensed: "Then I did it again, and again, slowly gaining confidence and refining the message" merged into one paragraph
- Closing reflection completely rewritten: replaces the poetic four-line format with a single flowing paragraph ("The talkative kid at home. The introverted student at school...")
- Final mission statement updated to include the life goal about UD Las Palmas
- Removes the standalone "Put me on a stage..." closing line

No em dashes in the new copy. No images, no layout changes, no new imports, no new files. Just paragraph content replacement in the single `<main>` section.

## Technical details

- File: `src/pages/About.tsx`
- Edit scope: Only the `<p>` tags inside the `<main>` element (the biography content)
- Everything else remains untouched: SEOHead, header, CTA section, Footer, AskFerryBubble

