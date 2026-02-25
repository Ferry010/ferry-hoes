

## Conversation Page: Content and Tone Rewrite with Linear 7-Step Paths

The current implementation has the right structural bones (phased branching, typing indicator, history-based rendering) but needs significant changes to match the new requirements: completely rewritten content with natural conversational tone, a linear 7-interaction maximum per path with proper closing, real CTA links, and path termination instead of loops.

### What Changes

#### 1. Data Structure Update (`src/data/conversationPaths.ts`)

The current two-phase model (phase1 + phase2 + directional) needs to become a **linear 7-step chain** per branch. Each step has a response and the next set of options. The structure changes to:

```text
Step {
  question: string
  answer: string
}

DirectionalOption {
  label: string
  handler: "deeper" | "cta" | "switch"
}

Branch {
  label: string
  response: string                    // step 1 response
  steps: Step[][]                     // steps[0] = 3 options after response, steps[1] = 3 options after that, etc.
  directional: {
    deeperLabel: string
    deeperResponse: string
    ctaLabel: string
    ctaResponse: string
    switchLabel: string
    ctas: CTA[]
    closingMessage: string            // NEW: "Sounds good. I look forward to hearing from you."
  }
}
```

All content rewritten with the exact copy from the brief. Key differences from current:
- **Greeting changes** from "I love your curiosity." to "I like curious people. What would you like to know?"
- **Starter labels change**: "What's your story?" becomes "What is your story?", "Why does this matter for us?" becomes "Why does this matter for our organization?"
- **All answers rewritten** in natural prose (no dramatic line breaks, no em dashes, 3-5 sentences)
- **CTA links are real URLs** instead of placeholder `#` or `action: "contact"`:
  - Speaker booking: `https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966`
  - Email: `mailto:ferry@brandhumanizing.com`
  - Book: `https://brandhumanizingbook.nl`
- **Each branch has a closing message** shown after CTA click

**Full content per branch (exact from brief):**

**Branch 1: speaking**
- Steps flow: starter response -> 3 options (Brand Humanizing / AI / problem) -> answer -> 3 options (example / transformation / relevance) -> answer -> 3 options (wrong / results / organization) -> answer -> directional (deeper / CTA / switch)
- CTA response about events + keynotes
- CTAs: "Check availability for your event" (speakers academy link), "Discuss keynote content directly" (mailto)
- Closing: "Sounds good. I look forward to hearing from you."

**Branch 2: story**
- Steps flow: starter -> 3 options (thinking change / speaking / long term) -> answer -> 3 options (moment / influence / now) -> answer -> directional
- CTA response about events/podcasts
- CTAs: "Invite Ferry to speak" (speakers academy), "Invite Ferry to your podcast or discuss collaboration" (mailto), "Discover the book" (book link)
- Closing: "Thank you. I will personally respond."

**Branch 3: relevance**
- Steps flow: starter -> 3 options (ignore / good / start) -> answer -> 3 options (compliance / competitive / time) -> answer -> directional
- CTA response about strategy sessions
- CTAs: "Book a strategy session" (mailto), "Discuss internally first" (mailto)
- Closing: "I look forward to continuing this conversation."

#### 2. New History Entry Type for Path Closing

Add a new `HistoryEntry` type:
```text
| { type: "closing"; message: string }
```

This renders Ferry's closing message followed by only a "Back to homepage" link. No more options after this.

#### 3. Page Logic Changes (`src/pages/Conversation.tsx`)

**Greeting**: Change to "I like curious people. What would you like to know?"

**Remove**: The centered "The conversation continues" header text.

**CTA buttons**: Change from `action: "contact"` dispatching events to actual `<a>` tags with real `href` URLs. All CTAs are now links (external URLs or mailto). Remove the `MessageCircle` icon import.

**Path closing behavior**: When a CTA button is clicked, add a handler that:
1. Records the click as a visitor bubble
2. Shows typing indicator
3. Adds the branch's closing message as a Ferry bubble
4. Shows only "Back to homepage" below it
5. No more options appear. Path is closed.

**Track interaction count**: Instead of the current phase-based system (phase 1/2/directional), use a simple interaction counter per branch. After 5 interactions, show directional options. After CTA selection + closing message, path ends.

**Remove topic switching acceleration logic** since the brief doesn't mention it. Each path follows the same 7-step max regardless.

**Remove "topicPicker" entry type** since paths close after CTA. The "Ask something else" / "Explore another topic" directional option can show remaining starters inline.

#### 4. Files Changed

| File | Change |
|---|---|
| `src/data/conversationPaths.ts` | Full rewrite: new content, natural tone, real URLs, closing messages, restructured steps |
| `src/pages/Conversation.tsx` | Rewrite: new greeting, path closing logic, real link CTAs, interaction counter, remove topic picker/restart |

#### 5. Content Tone Rules Applied Throughout

- No `\n` dramatic line breaks within answers. Each answer is a natural paragraph of 3-5 sentences.
- No em dashes anywhere.
- No vague abstract phrasing like "That's where Brand Humanizing begins" replaced with concrete explanations.
- Sentences read like normal chat messages.

