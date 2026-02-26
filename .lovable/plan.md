

## Fix: Mobile hero images on About page

### Change in `src/pages/About.tsx` (line 63)

Make mobile images narrower and taller to reduce awkward cropping:

- Change `w-[70vw] h-48` to `w-[60vw] h-64` on the mobile image containers

This makes each card narrower (less wide crop) and taller (more of the subject visible), reducing the awkward cropping effect.

