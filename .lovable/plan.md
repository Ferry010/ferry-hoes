

# Replace Hero Video with V2

## Overview
Swap the current hero background video file with the new version uploaded by the user.

## Steps

1. Copy `user-uploads://Ferry_Hero_vid_2026_V2.webm` to `public/videos/Ferry_Hero_vid_2026.webm`, overwriting the existing file
   - Using the same filename means no code changes are needed in `HeroVideo.tsx`
   - The `public` folder is correct for large media files

That's it -- single file copy, no code changes required.

