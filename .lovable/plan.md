

## Fix Mismatched Logo Sizes with Per-Logo CSS Tuning

The problem: all logos share the same `max-h-10 max-w-[140px]` constraint, but each logo image has different intrinsic dimensions, whitespace, and visual weight. Logos like AMA (wide text), MinFin (tall crest), GSK (thin wordmark), and VodafoneZiggo (wide) end up looking inconsistent.

The fix: assign a custom `maxHeight` per logo so each one appears visually balanced. No Photoshop or image editing required — pure CSS sizing adjustments.

### Approach

Update the `logos` array in `ClientLogos.tsx` to include a per-logo `className` or inline style override. Logos that appear too small get a larger max-height; logos that appear too large get constrained.

Approximate tuning (will refine visually):

| Logo | Issue | Fix |
|---|---|---|
| Atos | Good | Keep as-is |
| GSK | Thin wordmark, appears small | Increase max-h to 12 |
| Toshiba | Wordmark may appear thin | Increase max-h to 10 (keep) or bump to 11 |
| AMA | Wide with text, may shrink | Increase max-w to 160px |
| VodafoneZiggo | Very wide | Increase max-w to 170px |
| Chubb | Good | Keep as-is |
| a.s.r. | May have padding in image | Increase max-h to 14 |
| UWV | Depends on image | Adjust as needed, likely max-h-12 |
| MinFin | Tall government crest | Increase max-h to 14, reduce max-w |
| Eindhoven | Government logo with crest | Increase max-h to 14 |

### Implementation

Each logo entry gets an optional `className` string. The shared `img` tag merges the base classes with the per-logo override. This keeps the component clean while allowing individual tuning.

### File Changed

| File | Change |
|---|---|
| `src/components/sections/ClientLogos.tsx` | Add per-logo `className` overrides to the logos array and apply them to each `<img>` element |

