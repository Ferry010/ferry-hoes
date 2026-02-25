

## Conversation Page: New Content Tree with Cross-Flow and Natural CTA

The page structure and engine (`Conversation.tsx`) are already correct. The data model (`ConversationNode` with `response: string | string[]` and `options`) is the right shape. The main change is a **full content rewrite** of `conversationPaths.ts` and a small tweak to the opening in `Conversation.tsx` to support a two-bubble opener with a typing pause between them.

### What Changes

#### 1. Opening Change (`Conversation.tsx`)

Current: Shows one root bubble immediately.
New: Shows two Ferry bubbles with a typing pause between them:
1. "Hey. I love that you clicked. Curiosity is a good sign."
2. *(typing indicator)*
3. "What would you like to talk about?"

Then show the two starter options. This requires a small `useEffect` on mount to stagger the opening bubbles before showing options.

#### 2. Full Content Rewrite (`conversationPaths.ts`)

The entire node map is replaced. Key structural differences:

**Opening**: 2 options instead of current structure
- "What's your story?" → `story`
- "Tell me about your work." → `work`

**Cross-flow**: Story and work paths share nodes. Both paths can reach `brand_humanizing`, `keynote`, `smaller_teams`, and `book`. This means nodes are shared, not duplicated.

**New node tree:**

```text
root (handled in component, not in data)

story
├── story_meaning ("What do you mean by that?")
│   ├── bh_origin ("Is that where Brand Humanizing came from?") → brand_humanizing
│   ├── story_insight ("So what do you do with that insight?") → work
│   └── story_personal ("Tell me more about you personally.")
├── story_to_work ("How did that turn into what you do now?")
│   ├── work (cross-flow: "Tell me about your work then.")
│   ├── brand_humanizing ("What is Brand Humanizing exactly?")
│   └── story_speaking ("And now you speak about this?") → keynote path
└── story_always_speaker ("Were you always a speaker?")

work
├── brand_humanizing ("What is Brand Humanizing?")
│   ├── bh_example ("Can you give an example?")
│   │   ├── keynote ("That's interesting. What does a keynote look like?")
│   │   ├── smaller_teams ("Do you only do keynotes?")
│   │   └── story (cross-flow: "Tell me more about your journey.")
│   ├── bh_large_orgs ("Does this work in large organizations?")
│   └── bh_on_stage ("So what happens when you speak about this?") → keynote
├── work_why_now ("Why does that matter now?")
└── work_origin ("How did you get into this topic?") → story cross-flow

keynote
├── keynote_event ("Sounds like something for our event.")
│   → casual availability bubbles + continuation options
├── smaller_teams ("Do you also work with smaller teams?")
│   → casual email bubble + continuation
└── story_personal ("Tell me more about you personally.")
```

**CTA behavior**: Links only appear when user shows intent (clicks "Sounds like something for our event" or "Do you also work with smaller teams?"). They appear as normal Ferry chat bubbles with inline URLs. Conversation continues with "Ask something else" type options after links.

#### 3. Exact Content (from brief)

All node responses use the exact copy provided. No em dashes. Short sentences. Natural tone.

**Links used:**
- `https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966`
- `ferry@brandhumanizing.com`
- `https://brandhumanizingbook.nl`

#### 4. Files Changed

| File | Change |
|---|---|
| `src/data/conversationPaths.ts` | Full rewrite with new cross-flow tree, all new content |
| `src/pages/Conversation.tsx` | Staggered two-bubble opening with typing pause before options appear |

