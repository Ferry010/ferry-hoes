

## Align /now with /conversation Visual Style

Two changes to make the /now page match /conversation exactly:

### 1. Options: right-aligned, styled as visitor-side buttons

Change the options rendering (line 263) from left-aligned `flex-col pl-1` to right-aligned `flex flex-col items-end gap-2 animate-fade-in`, and update `OptionButton` styling to match /conversation's version (semi-transparent primary bg, border, rounded with `rounded-br-md`).

### 2. Remove options on pick, re-show remaining after answer

Currently `handleSelect` adds the visitor bubble but doesn't remove the options entry from history. Change it to:
- On select: filter out the `options` entry from history before adding the visitor bubble (same pattern as /conversation line 168: `prev.filter(e => e.type !== "options")`)
- After Ferry's answer: push remaining options back as a new `options` entry (this already happens on line 229)

### Files changed: `src/pages/Now.tsx`

- **OptionButton** (lines 90-103): Update className to match /conversation style (`max-w-[80%] text-left rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/20 border border-primary/30 text-foreground hover:bg-primary/30 hover:border-primary/50 transition-all duration-200 cursor-pointer`)
- **Options render** (line 263): Change to `flex flex-col items-end gap-2 animate-fade-in`
- **handleSelect** (line 198): Change from appending visitor bubble to first filtering out options, then appending visitor bubble: `setHistory((h) => [...h.filter(e => e.type !== "options"), { type: "visitor", text: option.label }])`
- **FerryBubble/VisitorBubble**: Add `animate-fade-in` class to match /conversation

