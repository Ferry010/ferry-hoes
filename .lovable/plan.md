


## Conversation Page: Complete Rework as Speaker-Focused Networking Chat

This is a fundamental redesign. The current 3-topic linear model becomes a 2-path branching tree ("organizing something" vs "just exploring") with sub-branches, persistent CTAs, and continued conversation after CTAs appear. The entire content and flow changes.

### What Changes and Why

#### Current vs New

The current structure has 3 parallel topic branches that each follow a linear path ending in a closing message. The new structure has:
- A **2-option opener** ("I'm organizing something" / "I'm just exploring")
- **Path A** splits into 3 sub-paths (event, team session, podcast), each with its own follow-ups
- **Path B** splits into 3 sub-paths (AI curiosity, saw name, humans+tech), each with follow-ups
- **Persistent CTAs** that stay visible at the bottom once introduced (never disappear)
- **Conversation continues** after CTAs appear (additional options below CTAs)
- **No path closing** behavior. CTAs remain. Links open normally without terminating the chat.

#### 1. New Data Model (`src/data/conversationPaths.ts`)

The flat `Branch` with `steps[][]` and `directional` is replaced by a tree structure:

```text
ConversationNode {
  response: string                    // Ferry's message
  options?: Option[]                  // clickable choices (disappear on pick)
  ctaIntro?: string                   // Ferry message before showing CTAs
  ctas?: CTA[]                        // persistent CTA buttons
  continuationOptions?: Option[]      // options shown AFTER/BELOW the CTA
}

Option {
  label: string
  nodeKey: string                     // points to next ConversationNode
}

CTA {
  label: string
  href: string
}
```

This is a keyed map of nodes. Each user choice resolves to a node key, which renders Ferry's response + the next set of options. When a node has `ctas`, they are added to a persistent CTA bar. The tree covers all content from the brief.

**Full node map (abbreviated structure, exact content from brief):**

- `root`: "Before I start talking about myself, can I ask you something?" -> 2 options
- `organizing`: "Nice. What kind of setting?" -> 3 options (event/team/podcast)
- `exploring`: "Love that. What made you click?" -> 3 options

**Path A sub-trees:**
- `event` -> "Great. In that setting I usually speak about..." -> asks "What matters most?" -> 3 options (inspiration/practical/strategic) -> each gives response -> CTA intro + persistent CTAs + continuation options
- `team` -> "Perfect. Team sessions are more interactive..." -> asks "What kind of team?" -> 3 options -> response -> CTA + continuation
- `podcast` -> "Nice. I enjoy conversations more than monologues..." -> asks "What angle?" -> 3 options -> response -> CTA + continuation

**Path B sub-trees:**
- `ai_everywhere` -> response -> "leader or curious?" -> 2 options -> response -> light CTA + continuation
- `saw_name` -> response -> "event, online, or through someone?" -> 3 options -> response -> CTA
- `humans_tech` -> response -> "business or cultural?" -> 2 options -> response -> CTA

All content is the exact copy from the brief, written in natural short sentences with no em dashes.

#### 2. Page Logic (`src/pages/Conversation.tsx`)

**New state model:**
- `history: HistoryEntry[]` - the chat thread (ferry bubbles, visitor bubbles, option sets)
- `persistentCtas: CTA[]` - accumulated CTAs that stay visible at the bottom
- `showTyping: boolean`
- `interactionStarted: boolean`

**New history entry types:**
```text
| { type: "ferry"; text: string }
| { type: "visitor"; text: string }
| { type: "options"; options: { label: string; nodeKey: string }[] }
```

Removed types: `ctas`, `closing`, `topicPicker` (no longer needed).

**CTA behavior change (critical):**
- CTAs are NOT part of the history. They render in a **fixed/sticky bar at the bottom** of the chat.
- Once CTAs are introduced (from a node with `ctas`), they are added to `persistentCtas` state and stay visible permanently.
- Clicking a CTA opens the link normally (no preventDefault, no path closing). The link opens in a new tab or triggers mailto. The CTA buttons remain.
- Conversation options can still appear above the CTA bar.

**Flow engine:**
1. Render opening Ferry bubble
2. Show 2 initial options
3. On click: remove options, add visitor bubble, show typing, resolve node key, render Ferry response + next options
4. When a node includes `ctaIntro` + `ctas`: show Ferry's CTA intro message, add CTAs to persistent bar, show continuation options if present
5. No closing. No path termination. User can keep clicking continuation options or use CTAs.

**Layout change:**
- Chat area needs bottom padding to account for persistent CTA bar
- CTA bar is fixed to bottom of viewport, styled subtly (border-top, background blur)
- "Back to homepage" stays as subtle top-right text link

#### 3. Files Changed

| File | Change |
|---|---|
| `src/data/conversationPaths.ts` | Full rewrite: tree of conversation nodes with all new content |
| `src/pages/Conversation.tsx` | Full rewrite: tree traversal engine, persistent CTA bar, no closing behavior |

#### 4. Content Summary (all from brief)

**Opening:** "Before I start talking about myself, can I ask you something?"

**Path A (Organizing):**
- Event -> audience focus (inspiration/practical/strategic) -> persistent CTA (availability + discuss)
- Team -> team type (leadership/innovation/mixed) -> persistent CTA (discuss + availability)
- Podcast -> angle (AI+leadership/human judgment/personal journey) -> persistent CTA (invite + book)

**Path B (Exploring):**
- AI everywhere -> leader or curious -> persistent CTA (speaking options + book)
- Saw name -> event/online/someone -> persistent CTA (availability + reach out + book)
- Humans+tech -> business or cultural -> persistent CTA (speaking options + book)

**All CTAs use real links:**
- `https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966`
- `mailto:ferry@brandhumanizing.com`
- `https://brandhumanizingbook.nl`

#### 5. Persistent CTA Bar Design

A fixed bottom bar that appears once CTAs are introduced:
- Semi-transparent background with backdrop blur
- Horizontal layout of CTA buttons (wrapping on mobile)
- Subtle top border
- Does not obscure chat content (chat area gets extra bottom padding)
- Links open normally (new tab for URLs, default for mailto)
- Never disappears once shown
