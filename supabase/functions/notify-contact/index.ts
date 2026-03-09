import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SLACK_GATEWAY_URL = "https://connector-gateway.lovable.dev/slack/api";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, organization, inquiryType, timeline } = await req.json();

    const results: Record<string, string> = {};

    // ---- Slack notification ----
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SLACK_API_KEY = Deno.env.get("SLACK_API_KEY");

    if (LOVABLE_API_KEY && SLACK_API_KEY) {
      try {
        // Find channel by name
        const listRes = await fetch(`${SLACK_GATEWAY_URL}/conversations.list?types=public_channel&limit=200`, {
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": SLACK_API_KEY,
          },
        });
        const listData = await listRes.json();
        const channel = listData.channels?.find((c: any) => c.name === "website-messages");

        if (!channel) {
          console.error("Slack channel #website-messages not found");
          results.slack = "channel_not_found";
        } else {
          // Join channel first (in case bot isn't a member yet)
          await fetch(`${SLACK_GATEWAY_URL}/conversations.join`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": SLACK_API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ channel: channel.id }),
          }).then((r) => r.json());

          const preview = message?.length > 200 ? message.slice(0, 200) + "…" : message;
          const blocks = [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `📩 *New message from ${name}*\n${email}${organization ? ` · ${organization}` : ""}${inquiryType ? `\nType: ${inquiryType}` : ""}${timeline ? ` · Timeline: ${timeline}` : ""}`,
              },
            },
            {
              type: "section",
              text: { type: "mrkdwn", text: `> ${preview}` },
            },
          ];

          const slackRes = await fetch(`${SLACK_GATEWAY_URL}/chat.postMessage`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": SLACK_API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              channel: channel.id,
              text: `📩 New message from ${name} (${email})`,
              blocks,
              username: "Ferry Hoes Website",
              icon_emoji: ":envelope:",
            }),
          });
          const slackData = await slackRes.json();
          if (!slackData.ok) {
            console.error("Slack postMessage failed:", slackData);
            results.slack = "error";
          } else {
            results.slack = "sent";
          }
        }
      } catch (e) {
        console.error("Slack notification error:", e);
        results.slack = "error";
      }
    } else {
      console.warn("Slack credentials not configured, skipping");
      results.slack = "not_configured";
    }

    // ---- Email notification ----
    const NOTIFICATION_EMAIL = Deno.env.get("NOTIFICATION_EMAIL");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");

    if (NOTIFICATION_EMAIL && LOVABLE_API_KEY) {
      try {
        const preview = message?.length > 500 ? message.slice(0, 500) + "…" : message;
        const emailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 0;">
            <h2 style="margin: 0 0 24px; font-size: 20px; color: #111;">New contact message</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr><td style="padding: 8px 0; color: #666; width: 100px;">Name</td><td style="padding: 8px 0; color: #111;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; color: #111;"><a href="mailto:${email}" style="color: #0066cc;">${email}</a></td></tr>
              ${organization ? `<tr><td style="padding: 8px 0; color: #666;">Org</td><td style="padding: 8px 0; color: #111;">${organization}</td></tr>` : ""}
              ${inquiryType ? `<tr><td style="padding: 8px 0; color: #666;">Type</td><td style="padding: 8px 0; color: #111;">${inquiryType}</td></tr>` : ""}
              ${timeline ? `<tr><td style="padding: 8px 0; color: #666;">Timeline</td><td style="padding: 8px 0; color: #111;">${timeline}</td></tr>` : ""}
            </table>
            <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; color: #333; line-height: 1.6; white-space: pre-wrap;">${preview}</div>
            <p style="margin: 24px 0 0; font-size: 13px; color: #999;">Reply directly to <a href="mailto:${email}" style="color: #0066cc;">${email}</a></p>
          </div>
        `;

        const emailRes = await fetch(`${SUPABASE_URL}/functions/v1/send-transactional-email`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: NOTIFICATION_EMAIL,
            subject: `New message from ${name}`,
            html: emailHtml,
          }),
        });

        if (!emailRes.ok) {
          const errText = await emailRes.text();
          console.error("Email send failed:", errText);
          results.email = "error";
        } else {
          await emailRes.text();
          results.email = "sent";
        }
      } catch (e) {
        console.error("Email notification error:", e);
        results.email = "error";
      }
    } else {
      console.warn("Email not configured, skipping");
      results.email = "not_configured";
    }

    return new Response(JSON.stringify({ success: true, results }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("notify-contact error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
