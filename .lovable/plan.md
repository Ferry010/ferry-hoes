

## Continue the Conversation -- Threaded Homepage

The idea: the entire homepage becomes a conversation. Each section is introduced by a small chat bubble "bridge" -- a visitor question that the section itself answers. "Continue the conversation" in the hero scrolls down to the first bridge, and from there the user is naturally guided through the page. Anyone who scrolls freely just sees subtle conversation markers between sections.

### How it works

The hero CTA changes from opening the contact form to smooth-scrolling to the AboutBlock. Between each major section, a small `ConversationBridge` component renders a single visitor-style chat bubble (right-aligned, same styling as the hero bubbles) that poses the question the next section answers.

```text
 Hero
   "So what do you actually do?"
   "I help brands become more human."
   "Through keynotes, a book, and one big idea."
   [Continue the conversation] ----scrolls-to---+
                                                 |
 Bridge: "Wait, who are you?"  <-----------------+
 AboutBlock (answers that question)

 Bridge: "So what exactly is Brand Humanizing?"
 BrandHumanizingSection

 Bridge: "Can I see you in action?"
 SpeakerSection

 Bridge: "Is there a book?"
 BookSection

 Bridge: "Got a podcast too?"
 PodcastSection

 Bridge: "What else are you thinking about?"
 BlogSection

 Bridge: "How do I stay in the loop?"
 CommunitySection
```

### The ConversationBridge component

A new, tiny component that renders a single right-aligned chat bubble (visitor style) with a fade-in-on-scroll animation. It sits in a narrow container with generous vertical padding, acting as a visual "beat" between sections. Uses `IntersectionObserver` to animate in only when scrolled into view, so the conversation unfolds as the user explores.

Each bridge receives:
- `question`: the text to display
- `id`: optional anchor for scroll targeting

The styling matches the hero visitor bubble exactly -- `bg-primary/80 backdrop-blur-md text-primary-foreground rounded-2xl rounded-br-md` -- so it reads as one continuous thread.

### Changes to HeroVideo

The "Continue the conversation" button changes from `window.dispatchEvent(new Event("open-contact"))` to `document.getElementById("conversation-continue").scrollIntoView({ behavior: "smooth" })`. This scrolls to the first bridge below the hero.

### Changes to Index.tsx

Insert `ConversationBridge` components between each section with appropriate questions. The first bridge gets `id="conversation-continue"` as the scroll target.

### The conversation script

| Bridge | Question | Section it introduces |
|--------|----------|-----------------------|
| 1 | "Wait, who are you?" | AboutBlock |
| 2 | "So what exactly is Brand Humanizing?" | BrandHumanizingSection |
| 3 | "Can I see you in action?" | SpeakerSection |
| 4 | "Is there a book?" | BookSection |
| 5 | "Got a podcast too?" | PodcastSection |
| 6 | "What else are you thinking about?" | BlogSection |
| 7 | "How do I stay in the loop?" | CommunitySection |

### Scroll-triggered animation

Each bridge uses a simple `IntersectionObserver` hook (or a small `useInView` custom hook) to trigger a CSS fade-up animation when it enters the viewport. This creates the feeling that the conversation is unfolding as you scroll, without requiring any scroll-jacking or forced navigation. Users are always free to scroll past.

### What stays the same

- All existing section content and styling
- The contact bubble (still accessible via the floating mail icon)
- Mobile responsiveness
- All micro-engagement touchpoints within sections

### Technical details

**New file:** `src/components/ConversationBridge.tsx`
- Small component (~30 lines) with `IntersectionObserver` for scroll-triggered fade-in
- Props: `question: string`, `id?: string`
- Matches hero visitor bubble styling

**Modified:** `src/components/sections/HeroVideo.tsx`
- CTA `onClick` changes from dispatching `open-contact` event to smooth-scrolling to `#conversation-continue`

**Modified:** `src/pages/Index.tsx`
- Import and insert 7 `ConversationBridge` components between existing sections

