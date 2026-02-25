

## Replace Video Placeholder with YouTube Embed

Replace the "Speaker reel coming soon" placeholder (lines 235-241) with an embedded YouTube video. The video ID is `foEehJ_pwck` with a start time of 2 seconds.

### Approach

Use a YouTube embed iframe with parameters to create a clean, cinematic presentation:
- `controls=0` hides the player controls for a clean look
- `rel=0` prevents showing unrelated videos at the end
- `start=2` starts at the 2-second mark as specified in the URL
- `modestbranding=1` minimizes YouTube branding

The iframe sits inside the existing `aspect-video rounded-2xl` container with `overflow-hidden` so the rounded corners clip the video properly.

### File Changed

| File | Change |
|---|---|
| `src/pages/Speaking.tsx` | Replace the placeholder div (lines 235-241) with a YouTube iframe embed |

The embed URL will be: `https://www.youtube.com/embed/foEehJ_pwck?start=2&controls=0&rel=0&modestbranding=1`

