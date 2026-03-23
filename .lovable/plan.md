

# Route form submissions to #ferryhoes Slack channel

## What changes

One file: `supabase/functions/notify-contact/index.ts`

Change the channel name lookup from `"website-messages"` to `"ferryhoes"` (line ~37). Everything else stays the same — the Slack connector is already linked and working.

This will apply to all future form submissions. Existing messages already