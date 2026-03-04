

## Remove placeholder stats and em dashes site-wide

Two changes: remove the fake "400+" number from the Community/Discord section, and replace all em dashes (—) with natural prose across all affected files.

### Files and changes

**`src/components/sections/CommunitySection.tsx`** (line 30)
- Remove the "Join 400+ builders..." social proof line entirely, or rewrite without a number. Replace with something like: "A growing community of builders, thinkers, and doers."

**`src/components/sections/NewsletterSection.tsx`** (line 39)
- "...Brand Humanizing — straight to your inbox" → "...Brand Humanizing, straight to your inbox"

**`src/components/sections/AboutBlock.tsx`** (line 16)
- "...Brand Humanizing — helping organisations..." → "...Brand Humanizing. He helps organisations..."

**`src/pages/Speaking.tsx`** (line 151)
- "...from scratch — not borrowed, not adapted —" → "...from scratch. Not borrowed, not adapted." or similar natural phrasing

**`src/pages/About.tsx`** (lines 105, 115, 139, 162, 178, 184)
- Replace each em dash with a period, comma, or rewritten clause. Examples:
  - "a different kid — introverted" → "a different kid. Introverted"
  - "— Ferry's grandmother" → remove dash, use plain attribution
  - "After studying development — and realising" → "After studying development (and realising" or rephrase
  - "things moved quickly — speaking across" → "things moved quickly. Speaking across"
  - "technology is used — and to use" → "technology is used, and to use"

**`src/pages/Press.tsx`** (lines 21-23, 77, 101)
- Topics list: "Brand Humanizing — using technology..." → "Brand Humanizing: using technology..." (use colon)
- Same for other topic items
- Extended bio line 77: "Brand Humanizing — a framework" → "Brand Humanizing, a framework"
- Headshot alt text: "Ferry Hoes — Portrait" → "Ferry Hoes, Portrait"

**`src/components/sections/ContentGrid.tsx`** (line 16)
- "Isn't Remote—It's Human" → "Isn't Remote. It's Human."

**`src/components/sections/SpeakingQA.tsx`** (lines 104, 116)
- These are JSX comments only (`{/* Question — right-aligned */}`), not user-visible. Can clean up but low priority.

**`src/pages/Speaking.tsx`** keynote durations (lines 51, 56, 61)
- "45–60 min" uses an en dash which is correct for ranges, not an em dash. No change needed.

