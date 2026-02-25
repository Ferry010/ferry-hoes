

## Conversation Page: Natural CTA Flow, Orange Back Button, Longer Exit Delay

Three changes: move the back button to top-right in brand orange, add more time to the exit sequence so people can read the goodbye, and rework CTA nodes to feel like a real human closing a conversation.

### 1. "Back to homepage" moves to top-right in brand Coral

Current: Persistent bottom-center button with `bg-secondary text-muted-foreground`.

New: Fixed top-right text link using brand Coral (#E86A4A / the existing accent color). Small, unobtrusive, always visible. Similar to a "close" affordance.

```
position: fixed top-5 right-6
text style: text-sm font-medium text-[#E86A4A] hover:text-[#E86A4A]/80
no background, no border, just text
```

Changes in `Conversation.tsx` lines 340-349: replace the bottom `<div>` with a top-right fixed text link.

### 2. Exit sequence gets longer pauses

Current timing:
- 600ms typing → "Fair enough." → 400ms pause → 900ms typing → "Thanks for the chat." → 600ms pause → fade

New timing (doubles the reading pauses):
- 600ms typing → "Fair enough." → **1200ms** pause → 900ms typing → "Thanks for the chat." → **1500ms** pause → fade → 300ms navigate

Changes in `Conversation.tsx` lines 259 and 265: increase the two `setTimeout` delays.

### 3. CTA nodes rewritten for natural closing focus

The current CTA flow feels unnatural. When someone says "Sounds like something for our event", Ferry responds with "That's great to hear. If you'd like, we can check availability or just talk it through first." and offers "Check availability" / "Talk it through first". That's still a sales menu.

**New behavior**: When intent is shown, Ferry commits fully to that path. No branching. No "or you could also...". Just like a real conversation where someone says "I'd love to have you speak" and you say "Let me connect you to my agent."

**New CTA nodes:**

`keynote_event` (when user clicks "Sounds like something for our event" or "I'd like this for our event"):
```
response: ["That's great to hear.", "Let me connect you to my speaking agent. They handle scheduling and availability."]
ctaButton: { label: "Get in touch with my agent", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" }
options: [{ label: "Ask something else", nodeKey: "ask_something_else" }]
```

No "or email me" alternative. No branching. Full focus on the CTA. The only escape is "Ask something else" which loops back to conversation.

`team_intent` (when user clicks "That could work for our team"):
```
response: ["Love to hear that.", "Send me a message and we'll figure out what works."]
ctaButton: { label: "Send me an email", href: "mailto:ferry@brandhumanizing.com" }
options: [{ label: "Ask something else", nodeKey: "ask_something_else" }]
```

Again, no branching. Direct. Human.

**Nodes to remove:** `keynote_event_availability`, `keynote_event_email`, `team_intent_email`. These split-step nodes are no longer needed since the CTA is now a single committed response.

**Option labels updated for natural phrasing:**
- "Sounds like something for our event." stays as-is (already good)
- "That could work for our team." stays as-is
- In `bh_example`, keep both options as they are

### Files Changed

| File | Change |
|---|---|
| `src/data/conversationPaths.ts` | Rewrite `keynote_event` and `team_intent` to single-step focused CTAs. Remove `keynote_event_availability`, `keynote_event_email`, `team_intent_email` nodes. |
| `src/pages/Conversation.tsx` | Move back button to top-right with Coral color. Increase exit sequence pauses to 1200ms and 1500ms. |

