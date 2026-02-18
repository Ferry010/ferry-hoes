

## Turn "What Ferry speaks about" into an Interactive Q&A

Replace the static 2x2 topic cards with a conversational, DM-style Q&A section. Visitors see clickable question bubbles (styled like the hero's visitor bubbles) and when they click one, Ferry's answer appears as a chat-style reply -- matching the conversational brand established in the hero.

### How it works

1. The section header stays ("What Ferry speaks about") with updated subtitle text
2. Below it, 4 clickable question bubbles appear (styled as visitor-side chat bubbles, aligned right)
3. When a visitor clicks a question, Ferry's answer slides in as a left-aligned reply bubble (matching the hero's `bg-background/90 backdrop-blur-md` style)
4. Clicking another question replaces the current answer with the new one (smooth transition)
5. The active question gets a highlighted state so visitors know which topic they're reading about

### Content

| Question (visitor bubble) | Answer (Ferry bubble) |
|---|---|
| "What do you say about AI and people?" | "I talk about how to leverage AI and emerging tech while keeping humans at the center. No doom-and-gloom -- just practical ways to make technology work *for* people, not against them." |
| "What about the future of work?" | "I help leaders navigate the changing landscape of work, culture, and what it means to lead a team when everything keeps shifting. Spoiler: it starts with people, not tools." |
| "Can you talk about digital transformation?" | "Absolutely. But I skip the buzzwords. I focus on what actually works -- the mindset shifts, the human side of change, and how to make transformation stick." |
| "What about leadership in the AI age?" | "This is where it gets interesting. AI is reshaping everything, and leaders need a new playbook. I talk about authentic leadership when the rules are being rewritten in real time." |

### Visual design

- Questions: right-aligned rounded bubbles with `bg-primary/80 text-primary-foreground` (like the hero visitor bubbles), with a hover/click effect
- Answers: left-aligned rounded bubbles with `bg-background/90 backdrop-blur-md` (like Ferry's hero bubbles), animated in with `animate-fade-up`
- A small "Ferry" label or avatar hint before the answer bubble for personality
- The first question is pre-selected so the section isn't empty on load
- Smooth fade transition when switching answers

### Technical details

**File: `src/pages/Speaking.tsx`**

1. Replace the topics grid section (lines 173-211) with the new interactive Q&A component
2. Use `useState` (already imported) to track `activeIndex` (default `0`)
3. Define a `qAndA` array of `{ question, answer }` objects replacing the current `topics` array at the top of the file
4. Remove the `topics` array and the `Card`/`CardContent` imports if no longer used elsewhere (they are still used -- keep them)
5. Remove the topic icon imports (`Brain`, `TrendingUp`, `Lightbulb`, `Users`) that are no longer needed
6. Render:
   - A flex column of clickable question bubbles (right-aligned, `self-end`)
   - Below them, Ferry's answer bubble (left-aligned, `self-start`) with a fade-in transition using a `key` prop on the answer to trigger re-animation
7. Use Tailwind classes matching the hero's chat bubble styling for visual consistency
