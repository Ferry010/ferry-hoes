

# Conversational Message Widget

Adding multiple low-friction ways for visitors to message you directly, designed to feel like starting a conversation rather than filling out a form.

---

## Concept: "Drop a thought"

Instead of a traditional contact form, we'll create a conversational message experience:

1. **Floating chat bubble** - Always accessible, bottom-right corner
2. **Inline conversation starters** - Embedded in key sections throughout the page
3. **Quick message input** - Single field with placeholder prompts like "What's on your mind?"

---

## Components to Create

### 1. QuickMessage Component
A reusable component with:
- Single textarea input (no name/email required for now)
- Rotating placeholder prompts: "Ask me anything...", "Share a thought...", "Got a question?"
- Send button with subtle animation
- Success state: "Message sent to Ferry's Slack!"

### 2. FloatingChatBubble Component
- Fixed position bottom-right
- Teal bubble with message icon
- Click opens a slide-up panel with QuickMessage
- Subtle pulse animation to draw attention
- Dismissable/minimizable

---

## Placement Strategy

Multiple touchpoints without being overwhelming:

| Location | Type | Context |
|----------|------|---------|
| **Floating bubble** | Persistent | Always available |
| **Hero section** | Subtle link | "Have a question? Just ask" below CTAs |
| **After ContentGrid** | Inline card | "Something on your mind about this?" |
| **MiniAbout section** | Prominent | Next to bio - "Want to chat?" |
| **Footer** | Simple link | Quick access to message |

---

## User Experience Flow

```text
User clicks bubble/link
       ↓
Panel slides up with friendly prompt
       ↓
User types message (no friction)
       ↓
Click "Send" → Toast confirmation
       ↓
Message stored (Slack placeholder for now)
```

---

## Slack Integration (Placeholder)

For now, messages will be stored locally and logged to console. When you're ready to connect Slack:
- Messages will be sent to a designated Slack channel
- Each message includes timestamp and page context
- No user account required - truly frictionless

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/QuickMessage.tsx` | Reusable message input component |
| `src/components/FloatingChatBubble.tsx` | Floating bubble + slide-up panel |

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Add FloatingChatBubble |
| `src/components/sections/Hero.tsx` | Add "Have a question?" link |
| `src/components/sections/ContentGrid.tsx` | Add inline conversation prompt after grid |
| `src/components/sections/MiniAbout.tsx` | Add "Want to chat?" button |
| `src/components/sections/Footer.tsx` | Add quick message link |

---

## Design Details

### QuickMessage Styling
- Rounded card with subtle shadow
- Teal accent border on focus
- Placeholder text rotates through prompts
- Send button uses primary (teal) color
- Character limit indicator (optional)

### FloatingChatBubble Styling
- Teal background with white message icon
- Rounded full circle, subtle shadow
- Slide-up panel with white background
- Close button (X) in top corner
- Smooth animation (300ms ease)

### Copy/Microcopy
- "Drop a thought" - main CTA text
- "What's on your mind?" - placeholder
- "No formalities needed" - subtext
- "Sent! I'll get back to you." - success

---

## Technical Implementation

### State Management
- Local state for message text and panel open/close
- Toast notifications via sonner for success/error
- Console log for placeholder Slack integration

### Placeholder Data Storage
```typescript
// For now, log to console
console.log("Message to Slack:", {
  message: text,
  timestamp: new Date().toISOString(),
  page: window.location.pathname
});
```

### Future Slack Ready
The component will be structured so adding real Slack integration later is straightforward - just replace the console.log with an edge function call.

