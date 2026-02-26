

## Podcast Page Updates

### 1. Fix Apple Podcasts button readability
- **Hero CTA** (line 126-136): Change from outline white to solid purple `bg-[#9933FF] hover:bg-[#9933FF]/90 text-white`
- **Bottom CTA** (line 268-278): Already uses purple border/text but on dark bg it's hard to read. Change to solid `bg-[#9933FF] hover:bg-[#9933FF]/90 text-white`

### 2. Remove em dashes from copy
- Line 158: Change `"honest, unscripted conversation — no pre-written questions, no rehearsed answers."` to `"honest, unscripted conversation. No pre-written questions, no rehearsed answers."`

### 3. Redesign episodes layout: featured + stacked
Add a 4th episode to the data array (need one more to fill the layout).

Replace the 3-column grid with a 2-column layout:
- **Left half**: Large featured card for the most recent episode (`allEpisodes[0]`), full height, bigger text, more padding
- **Right half**: 3 smaller cards stacked vertically (`allEpisodes[1-3]`), each a compact row-style card

On mobile: stack all 4 cards vertically, featured card still visually larger.

