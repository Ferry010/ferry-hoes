

## Conversation Page: Full Rebuild as Multi-Level Branching Chat

This is a significant rework of the conversation page. The current version has a flat structure (pick a topic, see all exchanges at once). The new version introduces **two levels of depth** per branch, a **typing indicator**, **contextual CTAs**, and persistent navigation controls -- all with new content.

### What Changes

#### 1. New Data Structure (`src/data/conversationPaths.ts` -- full rewrite)

The current flat `Exchange[]` model doesn't support follow-up question branching or per-branch CTAs. Replace with a two-level tree:

```text
Branch {
  label: string              // clickable starter text
  response: string           // Ferry's initial reply (short, 4-6 lines)
  followUps: FollowUp[]      // 2-3 selectable follow-up questions
  ctas: CTA[]                // buttons shown after a follow-up is answered
}

FollowUp {
  question: string
  answer: string
}

CTA {
  label: string
  action: "contact" | "link"
  href?: string              // for external links
}
```

Three branches with the exact content provided:
- **Branch 1**: "What do you actually speak about?" (speaking + Brand Humanizing angle)
- **Branch 2**: "What's your story?" (personal origin)
- **Branch 3**: "Why does this matter for us?" (strategic urgency)

Each has 3 follow-ups and 2 contextual CTA buttons.

#### 2. Typing Indicator Component (`src/components/conversation/TypingIndicator.tsx` -- new)

A simple animated "..." dots component that shows briefly before Ferry's messages appear. Three bouncing dots inside a Ferry-styled bubble, displayed for ~800ms before the actual message renders. Creates the illusion of Ferry typing a reply.

#### 3. Updated ChatBubble (`src/components/conversation/ChatBubble.tsx` -- minor update)

No structural change, but the delay logic stays the same. The typing indicator will be orchestrated at the parent level.

#### 4. Rebuilt Conversation Page (`src/pages/Conversation.tsx` -- full rewrite)

**State model:**
- `selectedBranch: string | null` -- which top-level branch is active
- `answeredFollowUps: Record<string, string[]>` -- per branch, which follow-ups have been revealed
- `showTyping: boolean` -- controls typing indicator visibility
- `conversationHistory: HistoryEntry[]` -- ordered list of everything that's been "said" (for rendering the full thread)

**Flow:**
1. Ferry bubble: "I love your curiosity."
2. Three starter options appear as clickable visitor-style bubbles
3. User clicks one -- it appears as a "sent" message, typing indicator shows, then Ferry's response unfolds
4. Below the response, 2-3 follow-up question buttons appear
5. Clicking a follow-up: it appears as sent, typing indicator, Ferry answers
6. After any follow-up is answered, show:
   - Remaining follow-ups for that branch (if any)
   - Two contextual CTA buttons (e.g., "Check availability", "Discover the book")
   - Three persistent navigation options: "Another question" (shows remaining top-level branches), "Back to homepage", "Restart conversation"
7. "Restart conversation" clears all state and starts from the greeting

**Persistent controls** (always visible after first interaction):
- "Another question" -- shows remaining unchosen branches
- "Back to homepage" -- navigates to `/`
- "Restart conversation" -- resets state to initial greeting

**No contact form inline** -- the CTAs link to actions (opening the contact bubble via `open-contact` event, or navigating to relevant pages). This keeps the chat experience clean.

#### 5. Components Affected

| File | Change |
|---|---|
| `src/data/conversationPaths.ts` | Full rewrite with new data structure and all 3 branches of content |
| `src/components/conversation/TypingIndicator.tsx` | New -- animated typing dots |
| `src/components/conversation/ChatBubble.tsx` | Keep as-is (already works well) |
| `src/components/conversation/ExchangeThread.tsx` | Remove -- replaced by inline rendering in Conversation.tsx |
| `src/components/conversation/PathOptions.tsx` | Remove -- replaced by new option rendering logic |
| `src/pages/Conversation.tsx` | Full rewrite with branching state machine, typing indicator, contextual CTAs, and navigation controls |

#### 6. Content (exact copy from brief)

**Branch 1: "What do you actually speak about?"**
- Response: "I speak about what happens when technology becomes available to everyone. When AI is no longer the advantage. When speed is normal. And differentiation disappears. That's where Brand Humanizing begins."
- Follow-ups: "What problem do you solve?" / "What makes you different from other AI speakers?" / "Can you give an example?"
- CTAs: "Check availability" (opens contact) / "Download keynote overview" (link)

**Branch 2: "What's your story?"**
- Response: "I grew up building websites at ten years old. I loved technology before it was cool. But I also saw how easily it can replace meaning. That tension shaped everything."
- Follow-ups: "When did this perspective change?" / "Why Brand Humanizing?" / "Why does this matter now?"
- CTAs: "Invite Ferry to your podcast" (opens contact) / "Discover the book" (link to book section)

**Branch 3: "Why does this matter for us?"**
- Response: "There are two risks right now. AI chaos. Or strategic stagnation. Both are dangerous."
- Follow-ups: "What happens if we ignore this?" / "What does good look like?" / "Where should we start?"
- CTAs: "Book a strategy session" (opens contact) / "Bring this to your team" (opens contact)

#### 7. Visual and UX Details

- WhatsApp-style layout (visitor right-aligned, Ferry left-aligned with name label)
- Typing indicator (3 bouncing dots) before each Ferry response
- Smooth scroll-to-bottom after each new message
- Mobile-first responsive (max-w-xl container, generous padding)
- No page reloads -- all state-driven
- Lightweight -- no heavy dependencies, just React state + CSS animations

