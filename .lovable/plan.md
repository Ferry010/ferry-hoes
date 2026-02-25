

## Highlight Key Phrase + White Text

### Change

**File: `src/pages/Speaking.tsx`** (lines 97-99)

Update the subtitle paragraph:
- Change `text-white/70` to `text-white` for full readability
- Wrap "stories, insights, and practical ideas" in a `<span>` with a textmarker-style highlight using the accent/coral color as background

**Before:**
```
<p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
  No death-by-PowerPoint. Just stories, insights, and practical ideas 
  that spark real conversations and drive meaningful change.
</p>
```

**After:**
```
<p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl mx-auto mb-12">
  No death-by-PowerPoint. Just{" "}
  <span className="bg-accent/30 px-1 py-0.5 rounded">stories, insights, and practical ideas</span>
  {" "}that spark real conversations and drive meaningful change.
</p>
```

The highlight uses `bg-accent/30` (semi-transparent coral) to create a textmarker/highlighter effect that fits the brand palette without overpowering the text.

