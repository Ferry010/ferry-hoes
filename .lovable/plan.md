

## Conversation Page: Cinematic Timing, Exit Sequence, Idle Nudges, and CTA Balloons

This is a significant upgrade to the conversation engine. The content tree stays mostly the same (it already matches the brief), but the **timing system**, **opening sequence**, **exit flow**, **idle nudges**, and **CTA rendering** all change substantially.

### What Changes

#### 1. New Opening Sequence (`Conversation.tsx`)

Current: 2-bubble opener ("Hey. I love that you clicked..." then "What would you like to talk about?")

New: 4-bubble cinematic opener with precise timing:

```text
0.2s → typing indicator
1.1s → "Hey. I'm glad you clicked."
pause 0.8s
typing 1.2s → "Most people just scroll."
pause 0.9s
typing 1.4s → "You didn't."
pause 1.0s
typing 1.3s → "So now I'm curious. Where should we start?"
pause 0.6s → options fade in with subtle upward slide
```

This replaces the current `openerPhase` (0/1/2) with a more granular phase system (0 through 4) or a sequential timer chain.

#### 2. New Root Options

Current: "What's your story?" / "Tell me about your work."
New: "How did you end up here?" / "What do you actually do?"

The node keys stay the same (`story` / `work`), just the labels change.

#### 3. Character-Based Typing Duration

Current: Fixed `600 + random * 400` ms per bubble.

New formula: `min(700 + (charCount * 35), 1800)` with ±150ms random jitter.

This applies to all Ferry bubbles during `addWithTyping`. The typing indicator shows for this calculated duration before the bubble appears.

#### 4. "Back to Homepage" as Persistent Bottom Button

Current: Small text link fixed top-right.

New: Persistent bottom button, always visible:
- Soft accent color, rounded
- No pulsing
- Hover: slight brightness increase
- Click: 120ms press animation
- Fixed to bottom center of viewport

#### 5. Exit Micro-Copy Sequence

Current: Clicking "Back to homepage" navigates immediately.

New: Clicking triggers a goodbye sequence:
1. Disable the button (prevent double-click)
2. Show typing indicator (0.6s)
3. Show bubble: "Fair enough."
4. Pause 0.4s, typing 0.9s
5. Show bubble: "Thanks for the chat."
6. 300ms fade-out of the entire page, then navigate to "/"

This requires:
- An `isExiting` state to control the sequence
- A fade-out CSS class on `<main>` during exit
- Preventing further interactions during exit

#### 6. Idle Nudge System

New feature: If the user pauses at a decision moment (options are visible):

- **15 seconds**: Show typing indicator, then bubble: "No rush."
- **30 seconds** (only if 15s nudge already fired): Show typing indicator, then: "Still here?" followed by "You can head back anytime."

Rules:
- Only triggers once per decision moment (reset when user picks an option)
- Never repeats the same nudge
- Nudge bubbles are just regular Ferry bubbles added to history

Implementation: A `useEffect` that watches for `options` being the last entry in history, starts a timer, and fires nudge bubbles. Resets when history changes.

#### 7. CTA as Button-Style Balloons (Not Raw URLs)

Current: Links appear as inline URLs in Ferry bubbles, auto-detected by `linkify`.

New: Intent-driven CTA flow with **button-style balloons**:

**For "Sounds like something for our event"** (`keynote_event`):

Ferry: "That's great to hear."
Ferry: "If you'd like, we can check availability or just talk it through first."
Options: "Check availability" / "Talk it through first"

If "Check availability" → show a styled link balloon: `[ Check availability for your event ]` linking to Speakers Academy
If "Talk it through first" → show a styled link balloon: `[ Email Ferry ]` linking to mailto

These link balloons are a new history entry type: `{ type: "cta-button"; label: string; href: string }` — rendered as a clickable button-style bubble that opens in a new tab. Once shown, they persist in the chat (they're part of history, so they stay).

After CTA buttons, show continuation options: "Ask something else" / "Back to homepage"

**For "That could work for our team"** (from `smaller_teams`):

Ferry: "That's nice to hear."
Options: "Email Ferry" / "Tell me more first"

Similar CTA button balloon behavior.

#### 8. Data Changes (`conversationPaths.ts`)

Minimal content changes needed:

- `keynote_event` node: Change from raw URL responses to a 2-step flow. Split into `keynote_event` (intro + options) → `keynote_event_availability` (CTA button) and `keynote_event_email` (CTA button)
- `smaller_teams` node: Similar split for team intent
- `bh_example` options: Change "Do you only do keynotes?" to "Do you work with teams?" and reduce to 2 options: "Sounds like something for our event." / "Tell me more about you personally."
- Add new nodes for CTA resolution: `keynote_event_availability`, `keynote_event_email`, `team_intent`, `team_intent_email`

New type addition to `ConversationNode`:
```text
ConversationNode {
  response: string | string[]
  options?: ConversationOption[]
  ctaButton?: { label: string; href: string }  // renders as clickable button balloon
}
```

When a node has `ctaButton`, it renders the response bubbles, then a styled link button, then any continuation options.

#### 9. Files Changed

| File | Change |
|---|---|
| `src/data/conversationPaths.ts` | Add `ctaButton` to type, split `keynote_event` and `smaller_teams` into multi-step CTA flows, update `bh_example` options, add new CTA resolution nodes |
| `src/pages/Conversation.tsx` | New 4-bubble cinematic opener, character-based typing duration, persistent bottom "Back to homepage" button with exit sequence, idle nudge system, `cta-button` history entry type with styled rendering, fade-out exit animation |
| `src/components/conversation/TypingIndicator.tsx` | No changes needed |

#### 10. Technical Details

**New state variables in `Conversation.tsx`:**
- `isExiting: boolean` — controls exit sequence
- `pageOpacity: number` — for fade-out (or CSS class toggle)
- `nudgeFired: { level1: boolean; level2: boolean }` — tracks idle nudges per decision moment

**New history entry type:**
```typescript
| { type: "cta-button"; label: string; href: string }
```

Rendered as:
```tsx
<a href={href} target="_blank" className="inline-block rounded-2xl rounded-br-md px-5 py-3 bg-primary text-primary-foreground font-medium hover:brightness-105 transition-all active:scale-[0.98]">
  {label}
</a>
```

**Typing duration function:**
```typescript
const getTypingDuration = (text: string) => {
  const base = 700 + text.length * 35;
  const jitter = (Math.random() - 0.5) * 300; // ±150ms
  return Math.min(base + jitter, 1800);
};
```

**Exit sequence:** Uses a chain of `setTimeout` calls, similar to the opener. After the final bubble, applies `opacity-0 transition-opacity duration-300` to `<main>`, then `navigate("/")` after 300ms.

**Idle nudge:** A `useEffect` with cleanup that starts a 15s timer whenever options are the last history entry. On fire, adds "No rush." bubble. Then starts a 15s timer for level 2 ("Still here?" + "You can head back anytime."). Resets both timers when history changes.

