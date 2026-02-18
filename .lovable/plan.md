

## Conversation Section: Full-Height Chat Window

### The problem

The current section is a compact block floating in the middle of the page. It doesn't feel immersive -- there's no sense of "being in a conversation." The options only show 2 at a time, and the layout doesn't evoke a chat window or messaging app.

### The fix

Transform the section into a **full-viewport-height dark block** that feels like opening a chat window. The layout flips: conversation history grows upward from the bottom, with the active reply options always anchored near the bottom of the screen -- just like iMessage or WhatsApp.

### Layout concept

```text
+------------------------------------------+
|                                          |
|          (empty space at top,            |
|           fills as conversation grows)   |
|                                          |
|   [Ferry bubble]                         |
|                          [Your reply]    |
|   [Ferry bubble]                         |
|                          [Your reply]    |
|   [Ferry bubble]                         |
|                                          |
|              [Option A]  [Option B]      |
|                     [Option C]           |
+------------------------------------------+
```

### Key changes

1. **Full viewport height** -- `min-h-screen` so the section commands the entire screen, creating an immersive "you're in a chat" feeling

2. **Flex-column with justify-end** -- conversation content is pushed to the bottom. Early in the conversation there's breathing room above; as the transcript grows it fills upward naturally

3. **3 options per node** -- every conversation node now offers 3 reply choices (instead of 2), giving visitors more agency and making the tree feel richer

4. **Options anchored at bottom** -- the clickable reply bubbles always appear at the bottom of the conversation, right where your thumb would be on a phone

5. **Expanded conversation tree** -- more branches so the conversation can go 3-4 exchanges deep before hitting the final CTA

### Updated conversation tree

Every node now has 3 options:

- **start**: "Glad you scrolled down. What are you curious about?"
  - "What is Brand Humanizing?"
  - "I want to book you as a speaker"
  - "Tell me about your book"

- **brandHumanizing**: Ferry explains Brand Humanizing
  - "How did you come up with it?"
  - "Can I read more?"
  - "How does it work in practice?"

- **speaking**: Ferry explains speaking
  - "What topics do you cover?"
  - "Where have you spoken?"
  - "Let's talk"

- **book**: Ferry explains the book
  - "Where can I get it?"
  - "What's it about?"
  - "Who is it for?"

Each follow-up leads to either another 3-option node or a final CTA node.

### Technical approach

**File: `src/components/sections/ConversationSection.tsx`** (rewrite)

- Section gets `min-h-screen` and uses `flex flex-col justify-end` so content anchors to the bottom
- Inner container uses a scroll area for when conversation gets long, with the transcript scrolling upward
- Conversation tree expanded: every non-final node has exactly 3 options
- Options render in a row/wrap layout at the bottom (not stacked vertically) -- feels more like quick-reply chips
- Auto-scroll behavior stays, targeting the bottom of the conversation
- Same dark background, same bubble styling, same animations
- Same `id="conversation"`, same `open-contact` event dispatch

### What stays the same

- Dark `bg-foreground` background with light text
- Bubble styling (Ferry left in `background/90`, visitor right in `primary/80`)
- `animate-fade-in` on new messages
- Section ID and contact form integration
- Position on the page (after hero, before AboutBlock)

