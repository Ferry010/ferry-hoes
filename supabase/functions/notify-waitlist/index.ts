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
    const body = await req.json();
    const email: string = (body.email ?? "").toString().trim().toLowerCase();
    const total: number | undefined =
      typeof body.total === "number" ? body.total : undefined;

    // Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      return new Response(
        JSON.stringify({ success: false, error: "invalid_email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const results: Record<string, string> = {};

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SLACK_API_KEY = Deno.env.get("SLACK_API_KEY");

    if (LOVABLE_API_KEY && SLACK_API_KEY) {
      try {
        const listRes = await fetch(
          `${SLACK_GATEWAY_URL}/conversations.list?types=public_channel&limit=200`,
          {
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": SLACK_API_KEY,
            },
          }
        );
        const listData = await listRes.json();
        const channel = listData.channels?.find((c: any) => c.name === "ferryhoes");

        if (!channel) {
          console.error("Slack channel #ferryhoes not found");
          results.slack = "channel_not_found";
        } else {
          await fetch(`${SLACK_GATEWAY_URL}/conversations.join`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": SLACK_API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ channel: channel.id }),
          }).then((r) => r.json());

          const totalLine = total ? `\nTotal signups: *${total}*` : "";
          const slackRes = await fetch(`${SLACK_GATEWAY_URL}/chat.postMessage`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": SLACK_API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              channel: channel.id,
              text: `📚 New English book waitlist signup: ${email}`,
              blocks: [
                {
                  type: "section",
                  text: {
                    type: "mrkdwn",
                    text: `📚 *New English book waitlist signup*\n\`${email}\`${totalLine}`,
                  },
                },
              ],
              username: "Ferry Hoes Website",
              icon_emoji: ":books:",
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
      results.slack = "not_configured";
    }

    return new Response(JSON.stringify({ success: true, results }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("notify-waitlist error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
