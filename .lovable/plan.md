

## Enhanced Speaking FAQ

Update the Q&A data in `src/components/sections/SpeakingQA.tsx` with the 10 new questions and multi-paragraph answers.

### Changes in `src/components/sections/SpeakingQA.tsx`

**Data**: Replace the 4-item `qAndA` array with 10 new items. Answers contain multiple paragraphs, so change the `answer` field from a single string to a `string[]` (array of paragraphs).

New questions:
1. What topics do you speak about? (3 paragraphs)
2. Is your keynote inspirational or practical? (3 paragraphs)
3. Who are your talks best suited for? (2 paragraphs)
4. Do you speak in Dutch or English? (3 paragraphs)
5. What formats do you offer? (3 paragraphs)
6. How can we book you? (2 paragraphs)
7. Do you customize your keynote? (3 paragraphs)
8. What makes your talks different from other AI speakers? (3 paragraphs)
9. Can you host or moderate events? (2 paragraphs)
10. Slightly important question: do you use slides? (3 paragraphs)

**Rendering**: Update the answer rendering from a single `<p>` to mapping over the array, rendering each paragraph as a separate `<p>` with `mb-2 last:mb-0` spacing.

**Section header**: Update subtitle to something like "Everything you need to know about working with Ferry." to better fit a proper FAQ.

Everything else (bubble styling, expand/collapse behavior, layout) stays exactly the same.

