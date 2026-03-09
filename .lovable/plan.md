

## Fix Client Logo Hover Glitch

**Problem**: Two issues cause the glitch:
1. `hover:[animation-play-state:paused]` on the marquee container — hovering anywhere pauses the animation abruptly, causing a visual jump
2. `transition-all` on logo images transitions layout-related properties (size, position) which causes jittery rendering during hover

**Fix in `src/components/sections/ClientLogos.tsx`**:
- Remove `hover:[animation-play-state:paused]` from the marquee container — continuous scroll feels smoother and more professional
- Replace `transition-all` with `transition-opacity` on logo images so only opacity animates on hover (no layout recalculations)
- Add `hover:opacity-80` to each logo for a subtle hover feedback without affecting grayscale or triggering layout shifts

