

## Updated DM-Style Hero Conversation

Update the chat bubble copy and flow in `src/components/sections/HeroVideo.tsx` to match the new conversation script. The visual style (bubbles, backdrop-blur, animations) stays the same -- only the text and number of messages change.

### New conversation flow

1. **Visitor bubble** (right-aligned): "So what do you actually do?"
2. **Ferry bubble**: "I spend most of my year on stages."
3. **Ferry bubble**: "Last year that was 40+ keynotes."
4. **Visitor bubble** (right-aligned): "About what?"
5. **Ferry bubble**: "One idea, really."
6. **Ferry bubble**: "How humans and technology should actually work together."
7. **Ferry bubble**: "I call it Brand Humanizing."

Then the name and subtitle fade in:

- **Ferry Hoes** (large display font)
- **Speaker . Author . Brand Humanizing** (subtitle -- updated from "Podcast host")

### Technical changes

**File: `src/components/sections/HeroVideo.tsx`**

- Replace the current 4-bubble sequence with the 7-bubble sequence above
- Add a second "You" label before the "About what?" bubble
- Add a second "Ferry" label before "One idea, really."
- Adjust animation delays to keep ~0.8s spacing across 7 bubbles plus the name reveal (total ~7-8s)
- Update subtitle text from "Speaker . Author . Podcast host" to "Speaker . Author . Brand Humanizing"
- All existing styling (rounded corners, backdrop-blur, colors, scroll indicator) remains unchanged

### Timing

| Delay | Element |
|-------|---------|
| 0.3s | Visitor: "So what do you actually do?" |
| 1.1s | Ferry label + "I spend most of my year on stages." |
| 1.9s | "Last year that was 40+ keynotes." |
| 2.7s | Visitor: "About what?" |
| 3.5s | Ferry label + "One idea, really." |
| 4.3s | "How humans and technology should actually work together." |
| 5.1s | "I call it Brand Humanizing." |
| 6.2s | Ferry Hoes |
| 6.7s | Speaker . Author . Brand Humanizing |

