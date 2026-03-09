

## Notify You on New Contact Messages (Email + Slack)

Two notification channels triggered whenever someone submits the contact form.

### 1. Slack — Connect the Slack connector

First we need to set up a Slack connection so the app can post to a channel of your choice.

- Use the Lovable Slack connector to link your workspace
- Pick (or create) a channel for notifications (e.g. `#website-messages`)
- The bot token becomes available as `SLACK_API_KEY`

### 2. Edge Function: `notify-contact`

A single backend function that sends both notifications. Called from the frontend right after a successful contact form insert.

**Slack**: POST to `chat.postMessage` via the connector gateway with a formatted message (name, email, inquiry type, message preview).

**Email**: Use the Lovable transactional email system (`scaffold_transactional_email`) to send a "New contact message" email to your address with the submission details.

A secret `NOTIFICATION_EMAIL` stores your email address.

### 3. Frontend Trigger

In `AskFerryBubble.tsx` and `Contact.tsx`, after the successful Supabase insert, fire-and-forget call `supabase.functions.invoke('notify-contact', { body: { name, email, message, ... } })`. No need to await or block the user — notifications are best-effort.

### 4. What You'll Get

**Slack message** (in your chosen channel):
```
📩 New message from Jane Doe (jane@example.com)
"I'd love to book Ferry for our leadership summit..."
```

**Email** (to your inbox): Same info, nicely formatted, with a "Reply" link.

### Steps (in order)
1. Connect Slack connector + pick channel
2. Store your notification email as a secret
3. Scaffold transactional email template
4. Create `notify-contact` edge function
5. Wire up the frontend calls in both contact form components

