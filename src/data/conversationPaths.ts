/* ── Types ── */

export interface ConversationOption {
  label: string;
  nodeKey: string;
}

export interface ConversationNode {
  response: string | string[];
  options?: ConversationOption[];
  ctaButton?: { label: string; href: string };
}

/* ── Node Map ── */

export const conversationNodes: Record<string, ConversationNode> = {

  // ─── PATH 1: STORY ───

  story: {
    response: "I've been fascinated by technology since I was a kid. Built my first website when I was ten. I loved how the internet connected people. At some point I started noticing something else though. The more we optimized everything, the more human nuance disappeared.",
    options: [
      { label: "What do you mean by that?", nodeKey: "story_meaning" },
      { label: "How did that turn into what you do now?", nodeKey: "story_to_work" },
      { label: "Were you always a speaker?", nodeKey: "story_always_speaker" },
    ],
  },

  story_meaning: {
    response: "I saw companies getting faster and more efficient. But I also saw employees feeling less ownership and customers feeling less understood. That tension stuck with me.",
    options: [
      { label: "Is that where Brand Humanizing came from?", nodeKey: "brand_humanizing" },
      { label: "So what do you do with that insight?", nodeKey: "work" },
      { label: "Tell me more about you personally.", nodeKey: "story_personal" },
    ],
  },

  story_to_work: {
    response: "It pushed me to think differently about how organizations design work. Technology should strengthen human judgment, not quietly replace it. That idea slowly became the foundation of my work.",
    options: [
      { label: "Tell me about your work then.", nodeKey: "work" },
      { label: "What is Brand Humanizing exactly?", nodeKey: "brand_humanizing" },
      { label: "And now you speak about this?", nodeKey: "keynote" },
    ],
  },

  story_always_speaker: {
    response: "Not at all. I started building things. Websites, products, strategies. Speaking came later when I realized I had more to say about the why than the how. Now it's a big part of what I do.",
    options: [
      { label: "What does a keynote look like?", nodeKey: "keynote" },
      { label: "Tell me about your work.", nodeKey: "work" },
      { label: "What is Brand Humanizing?", nodeKey: "brand_humanizing" },
    ],
  },

  story_personal: {
    response: "I'm someone who builds things. Websites, ideas, companies. The thread through all of it is curiosity about what technology does to how people connect. That hasn't changed since I was ten.",
    options: [
      { label: "Tell me about your work.", nodeKey: "work" },
      { label: "What is Brand Humanizing?", nodeKey: "brand_humanizing" },
    ],
  },

  // ─── PATH 2: WORK ───

  work: {
    response: [
      "I speak about how organizations combine technology and human judgment without losing what makes them distinctive. Most companies focus on tools. I focus on the design choices behind those tools.",
      "It's less about AI hype and more about responsibility. Who decides what gets automated? Where should humans stay central? That's where strategy becomes interesting.",
    ],
    options: [
      { label: "What is Brand Humanizing?", nodeKey: "brand_humanizing" },
      { label: "Why does this matter now?", nodeKey: "work_why_now" },
      { label: "How did you get into this topic?", nodeKey: "work_origin" },
    ],
  },

  work_why_now: {
    response: "Because the tools are moving faster than most organizations can think. AI is already reshaping workflows. But few teams have had an honest conversation about what should stay human. That gap is growing.",
    options: [
      { label: "What is Brand Humanizing?", nodeKey: "brand_humanizing" },
      { label: "What does a keynote look like?", nodeKey: "keynote" },
      { label: "Tell me more about your journey.", nodeKey: "story" },
    ],
  },

  work_origin: {
    response: "I grew up on the internet. Over time I moved into growth and optimization. At some point I started noticing that the more we optimized, the more human nuance disappeared. That tension became my work.",
    options: [
      { label: "What is Brand Humanizing?", nodeKey: "brand_humanizing" },
      { label: "What does a keynote look like?", nodeKey: "keynote" },
      { label: "Tell me more about you personally.", nodeKey: "story_personal" },
    ],
  },

  // ─── BRAND HUMANIZING (SHARED) ───

  brand_humanizing: {
    response: "It's my way of describing a simple tension. Technology makes us faster. It doesn't automatically make us better. Organizations need to consciously design for the human side.",
    options: [
      { label: "Can you give an example?", nodeKey: "bh_example" },
      { label: "Does this work in large organizations?", nodeKey: "bh_large_orgs" },
      { label: "So what happens when you speak about this?", nodeKey: "keynote" },
    ],
  },

  bh_example: {
    response: "Two companies use the same AI tools. One automates for efficiency only. The other uses AI to support employees so they make better decisions. Both save time. Only one builds long-term loyalty.",
    options: [
      { label: "Sounds like something for our event.", nodeKey: "keynote_event" },
      { label: "Tell me more about you personally.", nodeKey: "story_personal" },
    ],
  },

  bh_large_orgs: {
    response: "Especially there. Large organizations have more layers, more automation, more distance between decisions and people. That's exactly where this conversation matters most.",
    options: [
      { label: "What does a keynote look like?", nodeKey: "keynote" },
      { label: "Do you work with teams?", nodeKey: "smaller_teams" },
      { label: "Can you give an example?", nodeKey: "bh_example" },
    ],
  },

  // ─── KEYNOTE / SESSION BRANCH ───

  keynote: {
    response: "It usually starts personal. Then we zoom out into the bigger shifts. And I always bring it back to practical reflection. People should walk out thinking differently about how they design work.",
    options: [
      { label: "Sounds like something for our event.", nodeKey: "keynote_event" },
      { label: "Do you also work with smaller teams?", nodeKey: "smaller_teams" },
      { label: "Tell me more about you personally.", nodeKey: "story_personal" },
    ],
  },

  // ─── CTA: KEYNOTE EVENT (2-step) ───

  keynote_event: {
    response: [
      "That's great to hear.",
      "Let me connect you to my speaking agent. They handle scheduling and availability.",
    ],
    ctaButton: {
      label: "Get in touch with my agent",
      href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
    },
    options: [
      { label: "Ask something else", nodeKey: "ask_something_else" },
    ],
  },

  // ─── CTA: TEAM SESSION (2-step) ───

  smaller_teams: {
    response: "Yes. Smaller sessions are often more interactive. We look at real situations and think through how technology influences daily decisions.",
    options: [
      { label: "That could work for our team.", nodeKey: "team_intent" },
      { label: "Tell me more about your approach.", nodeKey: "brand_humanizing" },
    ],
  },

  team_intent: {
    response: [
      "Love to hear that.",
      "Send me a message and we'll figure out what works.",
    ],
    ctaButton: {
      label: "Send me an email",
      href: "mailto:ferry@brandhumanizing.com",
    },
    options: [
      { label: "Ask something else", nodeKey: "ask_something_else" },
    ],
  },

  // ─── CONTINUATION ───

  ask_something_else: {
    response: "Sure. What would you like to know?",
    options: [
      { label: "Tell me about your work.", nodeKey: "work" },
      { label: "What is Brand Humanizing?", nodeKey: "brand_humanizing" },
      { label: "Tell me more about your journey.", nodeKey: "story" },
    ],
  },
};
