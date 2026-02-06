

# Update CTAs for Brand Humanizing Section and Book Section

Two simple text and link updates to connect users to external resources.

---

## Changes Overview

### 1. BrandHumanizingSection.tsx

**Current state:**
- Button text: "Have a question about this?"
- Action: Opens the message panel

**New state:**
- Button text: "Want to learn more about this?"
- Action: Links to brandhumanizing.com (opens in new tab)

### 2. BookSection.tsx

**Current state:**
- "Get the book" button has no href (non-functional)

**New state:**
- "Get the book" button links to brandhumanizingboek.nl (opens in new tab)

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/sections/BrandHumanizingSection.tsx` | Update CTA text and convert to external link |
| `src/components/sections/BookSection.tsx` | Add href to "Get the book" button |

---

## Implementation Details

**BrandHumanizingSection.tsx:**
- Remove the `openMessagePanel` function (no longer needed)
- Change the button to an anchor tag with `href="https://brandhumanizing.com"` and `target="_blank"`
- Update text from "Have a question about this?" to "Want to learn more about this?"

**BookSection.tsx:**
- Convert the "Get the book" Button to use `asChild` with an anchor tag
- Add `href="https://brandhumanizingboek.nl"` and `target="_blank" rel="noopener noreferrer"`

