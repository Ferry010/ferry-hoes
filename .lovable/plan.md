

## Interactive Q&A Section: "Continue the Conversation"

### Concept

The hero ends with "Continue the conversation" -- so let's actually continue it. The CTA smooth-scrolls to a new section that extends the chat metaphor: a set of clickable question bubbles that visitors can tap to reveal Ferry's answers. Same visual language as the hero (chat bubbles, same styling), but now the visitor is in control.

This is stronger than static text because:
- It maintains the conversational tone established in the hero
- It gives visitors agency -- they choose what they're curious about
- It keeps people engaged longer (interactive > passive)
- It naturally guides visitors toward the content sections below (each answer can hint at speaking, book, brand humanizing, etc.)

### How it works

1. **"Continue the conversation" CTA** in the hero smooth-scrolls down to the new section (instead of opening the contact form)
2. **The new section** shows 4-5 clickable question bubbles styled like the visitor bubble from the hero (right-aligned, primary color)
3. **When a visitor clicks a question**, Ferry's answer fades in below it (left-aligned, light background -- same as hero Ferry bubbles)
4. **Only one answer is open at a time** -- clicking a new question collapses the previous one, keeping it clean
5. **A final CTA** at the bottom of the section opens the actual contact form for questions not covered

### Question/Answer content

| Question (visitor clicks) | Ferry's answer |
|---|---|
| "What is Brand Humanizing?" | "It's the practice of using technology to make brands more human, not less. Think of it as the antidote to soulless automation." |
| "Can I book you as a speaker?" | "Absolutely. I speak at conferences and corporate events worldwide about Brand Humanizing, technology, and human connection." |
| "Tell me about your book" | "Brand Humanizing is available now. It's the playbook for making your brand feel more human in a tech-driven world." |
| "How can I work with you?" | "From keynotes to workshops to consulting -- let's figure out what fits. Drop me a message and we'll talk." |

### Visual design

- Clean background (secondary/light) to contrast with the dark hero above
- Section header: small, understated -- something like "Pick a question" or just a subtle prompt
- Question bubbles: same rounded style as hero visitor bubble, with a subtle hover effect (scale, shadow)
- Answer bubbles: same style as hero Ferry bubbles, animate in with `animate-fade-up`
- Final CTA: "Ask me something else" button that opens the contact form
- The whole section stays compact -- not a full-screen affair, more like a focused interaction zone

### Files changed

**New file: `src/components/sections/ConversationSection.tsx`**
- New component with the interactive Q&A logic
- Uses React state to track which question is active
- Smooth collapse/expand animation for answers
- Final "Ask me something else" CTA triggers the existing `open-contact` event

**Modified: `src/components/sections/HeroVideo.tsx`**
- Change the CTA `onClick` from dispatching `open-contact` to smooth-scrolling to `#conversation`

**Modified: `src/pages/Index.tsx`**
- Import and place `ConversationSection` directly after the hero (before `AboutBlock`)

### Technical details

- The Q&A state is a simple `useState<number | null>(null)` tracking the active question index
- Clicking the same question again collapses it (toggle behavior)
- Answer reveal uses CSS transition on `max-height` and `opacity` for a smooth expand
- The section gets `id="conversation"` for the scroll target
- Scroll behavior uses `document.getElementById('conversation')?.scrollIntoView({ behavior: 'smooth' })`
- No database or backend needed -- content is hardcoded since it's curated messaging

