

# Replace "Send a Message" with "Ask Ferry" AI Q&A

Replace the current purposeless message bubble (which just logs to console) with a live, AI-powered "Ask Ferry" conversational experience. Visitors type a question, and Ferry's AI persona responds based on his areas of expertise -- brand humanizing, technology, humanity, and speaking.

## What Gets Removed
- `src/components/QuickMessage.tsx` -- no longer needed
- The `FloatingChatBubble` component gets fully rewritten to house the new chat UI

## What Gets Built

### 1. Backend function: `ask-ferry`
A new edge function that calls Lovable AI with a system prompt embodying Ferry's voice and expertise areas. Uses streaming for a responsive, token-by-token typing feel.

**System prompt will cover:**
- Ferry's persona (thinker, speaker, brand humanizer, tech-meets-humanity)
- Concise, warm, conversational tone
- Nudges toward Ferry's content (book, podcast, speaking) where relevant
- Keeps answers short and human (not walls of text)

### 2. Rewrite `FloatingChatBubble.tsx` into `AskFerryBubble.tsx`
The floating bubble stays in the same position but opens a compact chat panel instead of a one-way message form:

- **Bubble**: Same bottom-right position, but with a Sparkles/MessageCircle icon and subtle pulse
- **Panel**: Slides up with a chat interface containing:
  - A short header: "Ask Ferry" with a subline like "AI-powered, always available"
  - A scrollable message area showing the conversation (user messages right-aligned, Ferry's responses left-aligned with markdown rendering)
  - An input bar at the bottom with a send button
  - Streaming responses render token-by-token
  - Conversation resets when the panel closes (no persistence needed)
- **Starter prompts**: 3 clickable suggestion chips when the chat is empty (e.g. "What is brand humanizing?", "Tell me about your book", "How do you see AI's future?")

### 3. Update `Index.tsx`
- Replace `FloatingChatBubble` import with `AskFerryBubble`

### 4. Update all `openMessagePanel` references
Components that currently trigger the old message bubble (Footer, PodcastSection, Hero, BookSection, ContentGrid, MiniAbout, About page) will be updated to trigger the new "Ask Ferry" panel instead. The aria-label changes from "Open message panel" to "Open Ask Ferry", and all references update accordingly.

### 5. Install `react-markdown`
Needed to render AI responses with proper formatting (bold, lists, links).

## Technical Details

### Edge function (`supabase/functions/ask-ferry/index.ts`)
- Accepts `{ messages: Array<{role, content}> }` 
- Prepends a system prompt with Ferry's persona
- Streams response from Lovable AI gateway (`google/gemini-3-flash-preview`)
- Returns SSE stream to the client
- Handles 429/402 errors gracefully

### Frontend streaming
- Uses `fetch` with streaming body reader (same proven SSE pattern from the Lovable AI docs)
- Token-by-token rendering into the last assistant message
- Loading state with animated dots while waiting for first token

### Chat UI structure
```text
+---------------------------+
| Ask Ferry            [X]  |
| AI-powered, always on     |
+---------------------------+
|                           |
| [suggestion chips]        |
|                           |
|        [user message] --> |
| <-- [ferry response]     |
|                           |
+---------------------------+
| [Type your question...] > |
+---------------------------+
```

### Files changed
- **New**: `supabase/functions/ask-ferry/index.ts` -- edge function
- **New**: `src/components/AskFerryBubble.tsx` -- replaces FloatingChatBubble
- **New**: `src/components/AskFerryChat.tsx` -- chat panel UI + streaming logic
- **Delete**: `src/components/QuickMessage.tsx` -- no longer used
- **Delete**: `src/components/FloatingChatBubble.tsx` -- replaced
- **Edit**: `src/pages/Index.tsx` -- swap import
- **Edit**: `src/components/sections/Footer.tsx` -- update aria-label selector
- **Edit**: `src/components/sections/PodcastSection.tsx` -- update aria-label selector
- **Edit**: `src/components/sections/Hero.tsx` -- update aria-label selector
- **Edit**: `src/components/sections/BookSection.tsx` -- update aria-label selector
- **Edit**: `src/components/sections/ContentGrid.tsx` -- update aria-label selector
- **Edit**: `src/components/sections/MiniAbout.tsx` -- update aria-label selector
- **Edit**: `src/pages/About.tsx` -- update aria-label selector
- **Install**: `react-markdown`

