

## Reimagine the Conversation Section

### The problem

Right now the section feels like a FAQ with chat bubble styling -- all questions visible at once on a light, empty background. It doesn't feel like you're actually talking to Ferry. It feels like a help center.

### The fix: a real conversation flow

Instead of showing all questions upfront, the section works like a threaded DM conversation:

1. **Ferry opens** with a message: "Glad you scrolled down. What are you curious about?"
2. **The visitor sees 2-3 reply options** as clickable bubbles (right-aligned, like they're choosing what to say)
3. **When they pick one**, Ferry's answer appears below, followed by a new set of follow-up options
4. **The conversation builds vertically** -- previous exchanges stay visible above, creating a real chat transcript
5. **After 2-3 exchanges**, Ferry closes with something like "Want to keep going? Shoot me a message." which opens the contact form

### Visual overhaul

- **Dark background** (`bg-foreground` with light text) to match the hero's mood and create visual continuity -- the conversation literally continues from the dark hero into a dark section
- **Same bubble styling** as the hero: visitor bubbles in `primary/80` with backdrop blur, Ferry bubbles in `background/90`
- **Subtle entrance animations** on new messages (fade-up, same as hero)
- **Compact, centered layout** -- feels intimate, like a real chat window

### Conversation tree structure

```text
Ferry: "Glad you scrolled down. What are you curious about?"

  Option A: "What is Brand Humanizing?"
  Option B: "I want to book you as a speaker"
  Option C: "Tell me about your book"

  --> If A: Ferry answers about Brand Humanizing
      Follow-ups: "How did you come up with it?" / "Can I read more?"

  --> If B: Ferry answers about speaking
      Follow-ups: "What topics do you cover?" / "Let's talk"

  --> If C: Ferry answers about the book
      Follow-ups: "Where can I get it?" / "What's it about?"

Final Ferry message: "I could keep going, but it's better in person. Shoot me a message."
  CTA: [Shoot me a message] (opens contact form)
```

### Technical approach

**File: `src/components/sections/ConversationSection.tsx`** (full rewrite)

- Replace flat Q&A array with a conversation tree (object with nodes, each node has Ferry's message + visitor reply options that point to the next node)
- State tracks the path of conversation steps taken (array of node IDs)
- Each new step animates in with `animate-fade-up`
- Auto-scrolls within the section as conversation grows
- Previous messages stay visible (read-only) above active choices
- Dark background with light text, matching hero aesthetic
- Final node shows the "Shoot me a message" CTA instead of reply options

### What stays the same

- Section `id="conversation"` for smooth scroll target from hero
- The `open-contact` event dispatch for the final CTA
- Position in page (after hero, before AboutBlock)

### Result

Visitors feel like they're actually chatting with a virtual Ferry -- choosing what to say, watching responses appear, building a real exchange. It's engaging, on-brand, and way more human than a static FAQ.

