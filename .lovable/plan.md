

## Conversation Page: Deep Rebuild with Phased Interaction Model

The current implementation shows CTAs too early (after the first follow-up) and uses a flat follow-up structure. This rebuild introduces a **3-phase interaction model** per topic: Exploratory (3 exchanges, no CTA) then Directional (dive deeper / CTA / switch topic), with topic-switching awareness.

### Key Behavioral Changes

1. **Non-selected options disappear** -- when a starter is picked, the other two vanish immediately (clean, focused)
2. **3 exploratory interactions before any CTA** -- each topic has 2 levels of follow-ups (3 questions each), creating depth without pressure
3. **Directional phase after 3 exchanges** -- options shift to: "Go deeper", a relevant CTA, and "Explore another topic"
4. **Topic switching accelerates** -- when switching topics, CTAs appear after only 2 interactions instead of 3
5. **Remove "Restart conversation"** -- gone entirely
6. **"Back to homepage"** moves to a subtle persistent text link top-right (replaces the current back arrow top-left)
7. **No Footer** on this page -- keeps it feeling like a chat app, not a website

### New Data Structure (`src/data/conversationPaths.ts`)

Replace the flat follow-up list with a **two-level tree**:

```text
Branch {
  label: string
  response: string
  phase1: { question, answer }[]     // 3 exploratory follow-ups
  phase2: { question, answer }[]     // 3 deeper follow-ups (shown after phase1 pick)
  directional: {
    deeperLabel: string              // "Go deeper into Brand Humanizing"
    deeperResponse: string           // Ferry's deeper response
    ctaLabel: string                 // "See how this applies to your organization"
    ctaResponse: string              // Ferry's response before showing CTA buttons
    ctas: CTA[]                      // action buttons
  }
}
```

**Full content for all 3 branches** (exact copy from brief):

**Branch 1 -- "What do you actually speak about?"**
- Phase 1 options: "What is Brand Humanizing?" / "What problem does it solve?" / "Is this about AI?"
- Phase 1 answer (Brand Humanizing): "Brand Humanizing is a strategic design choice..."
- Phase 2 options: "Can you give a practical example?" / "Why is this different from digital transformation?" / "Where do companies get this wrong?"
- Phase 2 answer (practical example): "Two companies use identical AI systems..."
- Directional: "Go deeper into Brand Humanizing" / "See how this applies to your organization" / "Ask something else"
- CTA response: "Every organization faces the same tension..."
- CTAs: "Check availability" (contact) / "Download keynote overview" (link)

**Branch 2 -- "What's your story?"**
- Phase 1 options: "When did your perspective shift?" / "What made this personal?" / "Why build Brand Humanizing?"
- Phase 2 options: "Was there a defining moment?" / "Why does this matter now?" / "How does this influence your talks?"
- Phase 2 answer (influence talks): "I don't talk about tools. I talk about choices..."
- Directional: "Go deeper into Ferry's philosophy" / "Invite Ferry to speak or podcast" / "Switch topic"
- CTAs: "Invite Ferry to your event" (contact) / "Invite Ferry to your podcast" (contact) / "Discover the book" (link)

**Branch 3 -- "Why does this matter for us?"**
- Phase 1 options: "What happens if we ignore this?" / "What does good look like?" / "Where should we begin?"
- Phase 2 options: "Is this about compliance?" / "Is this about competitive edge?" / "How long does transformation take?"
- Phase 2 answer (competitive edge): "When everyone has access to AI, the advantage shifts..."
- Directional: "Go deeper into strategy" / "Book a strategy session" / "Explore another topic"
- CTAs: "Book a strategy session" (contact) / "Bring this to your team" (contact)

### Page Logic (`src/pages/Conversation.tsx`)

**State model:**
- `history: HistoryEntry[]` -- the full chat thread (ferry bubbles, visitor bubbles, option sets)
- `currentBranch: string | null` -- active topic key
- `phase: Record<string, number>` -- tracks which phase each branch is in (0=initial, 1=phase1 answered, 2=phase2 answered, 3=directional)
- `usedBranches: string[]` -- which starters have been explored
- `totalInteractions: number` -- global count used to accelerate CTAs on topic switches
- `showTyping: boolean`

**Flow per branch:**
1. User picks starter -- non-selected starters disappear, visitor bubble appears, typing indicator, Ferry responds
2. Show 3 phase-1 follow-up options
3. User picks one -- visitor bubble, typing, Ferry answers, show 3 phase-2 options
4. User picks one -- visitor bubble, typing, Ferry answers
5. Now show 3 directional options: "Go deeper" / CTA option / "Switch topic"
6. "Go deeper" shows Ferry's deeper response + CTA buttons
7. CTA option shows Ferry's CTA response + CTA buttons
8. "Switch topic" shows remaining unchosen starters (and accelerates to CTA after 2 interactions)

**Topic switching logic:**
- When user switches, track that they've already explored one topic
- After 2 interactions in the new topic (instead of 3), move to directional phase

**UI changes:**
- Remove fixed back arrow top-left
- Add subtle "Back to homepage" text link fixed top-right
- Remove "Restart conversation" entirely
- Remove Footer component from this page
- Keep AskFerryBubble floating contact

### Files Changed

| File | Change |
|---|---|
| `src/data/conversationPaths.ts` | Full rewrite -- two-level phase structure with all new content |
| `src/pages/Conversation.tsx` | Full rewrite -- phased interaction engine, new navigation, no footer |
| `src/components/conversation/TypingIndicator.tsx` | Keep as-is |

### Technical Details

- Each phase-1 and phase-2 answer needs its own content stored in the data file (all provided above from the brief)
- The "phase" tracking per branch determines which set of options to show next
- When rendering options, always show exactly 3 choices (the data is structured to always have 3)
- Option buttons disappear on click (replaced by the visitor bubble of the selected option)
- Smooth scroll-to-bottom after each new entry
- All transitions use the existing `animate-fade-in` class
- Typing indicator shows for ~800ms before each Ferry response

