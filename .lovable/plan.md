

## Remove Sales Feel: Links as Chat Bubbles, No CTA Bar, New Content

The core problem is the persistent CTA bar at the bottom and the explicit "If this sounds like it could fit your audience, we can explore next steps" language. The fix: remove the CTA bar entirely, make all links appear as normal Ferry chat bubbles, rewrite all content to match the new brief exactly.

### What Changes

#### 1. Data Model (`src/data/conversationPaths.ts`)

Remove `ctaIntro`, `ctas`, and `continuationOptions` fields from `ConversationNode`. Replace with a simpler model where links are just additional response strings in the node:

```text
ConversationNode {
  response: string | string[]        // one or multiple Ferry bubbles
  options?: ConversationOption[]      // clickable choices
}
```

When `response` is an array, each string renders as a separate Ferry bubble. Links appear naturally as text inside these bubbles (e.g. "Check availability here: https://..."). No special CTA rendering.

**New opening:** "Hey. Before I start explaining what I do, I'm curious. What made you click?"

**Full new tree (exact content from brief):**

**Path A: Organizing**
- `organizing` -> 3 options (event/team/podcast)
- `event` -> response about speaking + asks "What kind of audience?" -> 3 options (leadership/mixed/tech)
- `event_leadership` -> response -> 3 options (keynote look/how got into topic/something else)
- `event_keynote` -> response about keynote style -> casual mention of availability as plain text bubbles -> continuation options
- `event_howinto` -> response -> similar casual link mention
- `team` -> "Those are my favorite actually..." -> asks about challenge -> 3 options (AI integration/culture/positioning)
- Each team response ends with casual "just reach out" bubble with email
- `podcast` -> response -> asks angle -> 3 options -> casual email mention

**Path B: Exploring**
- `exploring` -> "Love that. What are you most curious about?" -> 3 options (AI future/your story/brand humanizing)
- `exploring_ai` -> response -> asks opportunity/risk/both -> response -> casual link mention
- `exploring_story` -> response -> personal/professional -> response -> casual mention
- `exploring_bh` -> response -> yes/not sure/depends -> response -> casual mention

All link mentions are just Ferry bubbles with the URL inline. No buttons. No bar.

#### 2. Page Logic (`src/pages/Conversation.tsx`)

**Remove entirely:**
- `CTABar` component
- `persistentCtas` state
- All CTA-related logic

**Change `FerryBubble`:** Support rendering URLs as clickable links within the text. Detect URLs and `mailto:` patterns and render them as `<a>` tags.

**Change `response` handling:** When a node's response is an array of strings, render each as a separate Ferry bubble (with a slight stagger).

**Keep:** Back to homepage link, typing indicator, option disappearing behavior, scroll-to-bottom.

#### 3. Files Changed

| File | Change |
|---|---|
| `src/data/conversationPaths.ts` | Full rewrite: new content, no CTA fields, responses as string arrays for multi-bubble nodes |
| `src/pages/Conversation.tsx` | Remove CTABar + persistentCtas, add URL detection in FerryBubble, support array responses |

#### 4. Tone Shift Summary

Current salesy patterns removed:
- "If this sounds like it could fit your audience, we can explore next steps" -> gone
- "If you think this could strengthen your team, let's explore it" -> gone
- Persistent bottom CTA bar with styled buttons -> gone
- "Check availability for your event" as a button -> becomes casual chat text

New casual patterns:
- "If at some point you'd like to check availability or talk through your event, that usually goes through Speakers Academy or directly via email. No pressure."
- Links appear as plain Ferry bubbles: "Check availability here: [url]"
- "Email works best: ferry@brandhumanizing.com"

