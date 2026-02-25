/* ── Types ── */

export interface ConversationOption {
  label: string;
  nodeKey: string;
}

export interface ConversationNode {
  response: string | string[];
  options?: ConversationOption[];
}

/* ── Node Map ── */

export const conversationNodes: Record<string, ConversationNode> = {
  root: {
    response: "Hey. Before I start explaining what I do, I'm curious. What made you click?",
    options: [
      { label: "I'm organizing something", nodeKey: "organizing" },
      { label: "I'm just exploring", nodeKey: "exploring" },
    ],
  },

  // ─── PATH A: ORGANIZING ───

  organizing: {
    response: "Nice. What kind of setting are we talking about?",
    options: [
      { label: "Large event or conference", nodeKey: "event" },
      { label: "Internal team session", nodeKey: "team" },
      { label: "Podcast or panel", nodeKey: "podcast" },
    ],
  },

  event: {
    response: "Great. In that setting I usually speak about how organizations combine technology and human judgment without losing what makes them distinctive. It's strategic, but accessible. I try to leave people thinking differently about how they design work.",
    options: [
      { label: "Leadership", nodeKey: "event_leadership" },
      { label: "Mixed professionals", nodeKey: "event_mixed" },
      { label: "Tech focused", nodeKey: "event_tech" },
    ],
  },

  event_leadership: {
    response: "With leadership teams it often becomes a conversation about responsibility. Not just what technology can do, but what it should influence.",
    options: [
      { label: "What does a keynote usually look like?", nodeKey: "event_keynote" },
      { label: "How did you get into this topic?", nodeKey: "event_howinto" },
      { label: "Something else", nodeKey: "event_other" },
    ],
  },

  event_mixed: {
    response: "Mixed groups are interesting because people from different backgrounds start seeing the same challenge from new angles. That shift usually sticks.",
    options: [
      { label: "What does a keynote usually look like?", nodeKey: "event_keynote" },
      { label: "How did you get into this topic?", nodeKey: "event_howinto" },
      { label: "Something else", nodeKey: "event_other" },
    ],
  },

  event_tech: {
    response: "With tech audiences I skip the basics. We go straight into what happens when you build systems that replace judgment instead of supporting it.",
    options: [
      { label: "What does a keynote usually look like?", nodeKey: "event_keynote" },
      { label: "How did you get into this topic?", nodeKey: "event_howinto" },
      { label: "Something else", nodeKey: "event_other" },
    ],
  },

  event_keynote: {
    response: [
      "It usually starts personal. Then we zoom out into the bigger shifts. And I always try to end practical. People should walk out with something to reflect on, not just inspiration.",
      "If at some point you'd like to check availability or talk through your event, that usually goes through Speakers Academy or directly via email. No pressure.",
      "Check availability here: https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
      "Or just email me: ferry@brandhumanizing.com",
    ],
    options: [
      { label: "How did you get into this topic?", nodeKey: "event_howinto" },
      { label: "Tell me about the book", nodeKey: "book" },
    ],
  },

  event_howinto: {
    response: [
      "I grew up fascinated by the internet. Built my first website at ten. Over time I moved into growth and optimization. At some point I started noticing that the more we optimized, the more human nuance disappeared. That tension became my work.",
      "If you'd like to explore whether this fits your event, just reach out.",
      "Availability: https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
      "Or email me directly: ferry@brandhumanizing.com",
    ],
    options: [
      { label: "What does a keynote usually look like?", nodeKey: "event_keynote" },
      { label: "Tell me about the book", nodeKey: "book" },
    ],
  },

  event_other: {
    response: "Sure. What would you like to know?",
    options: [
      { label: "What does a keynote usually look like?", nodeKey: "event_keynote" },
      { label: "How did you get into this topic?", nodeKey: "event_howinto" },
      { label: "Tell me about the book", nodeKey: "book" },
    ],
  },

  // ─── TEAM ───

  team: {
    response: "Those are my favorite actually. Smaller groups allow more interaction. It becomes less about speaking and more about thinking together.",
    options: [
      { label: "AI integration", nodeKey: "team_ai" },
      { label: "Culture and change", nodeKey: "team_culture" },
      { label: "Positioning and differentiation", nodeKey: "team_positioning" },
    ],
  },

  team_ai: {
    response: [
      "Most teams already use AI in some form. The question is whether they have a shared understanding of where automation helps and where it weakens judgment. That's usually where it gets interesting.",
      "If you ever want to explore this live with the team, just reach out. I'm happy to think along.",
      "Email works best: ferry@brandhumanizing.com",
    ],
    options: [
      { label: "What does a session look like?", nodeKey: "team_session" },
      { label: "Tell me about the book", nodeKey: "book" },
    ],
  },

  team_culture: {
    response: [
      "Culture shifts are hard to talk about in abstract. In a session we make it concrete. What decisions are changing? Where is friction increasing? That usually opens up the real conversation.",
      "If you ever want to explore this live with the team, just reach out. I'm happy to think along.",
      "Email works best: ferry@brandhumanizing.com",
    ],
    options: [
      { label: "What does a session look like?", nodeKey: "team_session" },
      { label: "Tell me about the book", nodeKey: "book" },
    ],
  },

  team_positioning: {
    response: [
      "Positioning is where technology becomes strategic. Not just how you use it, but how it shapes what makes you different. That's a conversation most teams haven't had yet.",
      "If you ever want to explore this live with the team, just reach out. I'm happy to think along.",
      "Email works best: ferry@brandhumanizing.com",
    ],
    options: [
      { label: "What does a session look like?", nodeKey: "team_session" },
      { label: "Tell me about the book", nodeKey: "book" },
    ],
  },

  team_session: {
    response: "It depends on the group. Sometimes it's a half day. Sometimes ninety minutes. I always start with a short provocation and then we work through real questions together. No slides full of frameworks.",
  },

  // ─── PODCAST ───

  podcast: {
    response: "I enjoy conversations more than monologues anyway. Especially when we go beyond tools and talk about design choices.",
    options: [
      { label: "AI and leadership", nodeKey: "podcast_ai" },
      { label: "Human judgment", nodeKey: "podcast_judgment" },
      { label: "Personal journey", nodeKey: "podcast_journey" },
    ],
  },

  podcast_ai: {
    response: [
      "AI and leadership is where I spend most of my time. The interesting question is not whether leaders should use AI, but how they set the rules for everyone else.",
      "If you think I'm a fit for your format, feel free to email me.",
      "ferry@brandhumanizing.com",
      "And if you want context beforehand, the book is here: https://brandhumanizingbook.nl",
    ],
  },

  podcast_judgment: {
    response: [
      "This is the core of my work. Technology makes us faster but it does not automatically make us better. The gap between speed and judgment is where most organizations struggle.",
      "If you think I'm a fit for your format, feel free to email me.",
      "ferry@brandhumanizing.com",
      "And if you want context beforehand, the book is here: https://brandhumanizingbook.nl",
    ],
  },

  podcast_journey: {
    response: [
      "I built my first website at ten and have been obsessed with the internet ever since. The journey from building things online to speaking about how technology shapes organizations happened naturally over time.",
      "If you think I'm a fit for your format, feel free to email me.",
      "ferry@brandhumanizing.com",
      "And if you want context beforehand, the book is here: https://brandhumanizingbook.nl",
    ],
  },

  // ─── PATH B: EXPLORING ───

  exploring: {
    response: "Love that. What are you most curious about?",
    options: [
      { label: "AI and the future of work", nodeKey: "exploring_ai" },
      { label: "Your story", nodeKey: "exploring_story" },
      { label: "What is Brand Humanizing?", nodeKey: "exploring_bh" },
    ],
  },

  exploring_ai: {
    response: "I think the biggest shift is not technical. It's behavioral. The tools are powerful. The real question is how they influence judgment, creativity and responsibility.",
    options: [
      { label: "Opportunity", nodeKey: "ai_opportunity" },
      { label: "Risk", nodeKey: "ai_risk" },
      { label: "Both", nodeKey: "ai_both" },
    ],
  },

  ai_opportunity: {
    response: [
      "If you see it as opportunity, the follow-up question is: opportunity for what? Speed, reach, creativity? Each one changes how you design around it.",
      "If this topic ever feels relevant for your organization or event, that's usually where I come in.",
      "Availability goes through Speakers Academy: https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
      "Or you can just email me directly: ferry@brandhumanizing.com",
    ],
  },

  ai_risk: {
    response: [
      "If you see it as risk, you're probably paying attention. The risk is not in the tools. It's in what happens when people stop questioning the output.",
      "If this topic ever feels relevant for your organization or event, that's usually where I come in.",
      "Availability goes through Speakers Academy: https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
      "Or you can just email me directly: ferry@brandhumanizing.com",
    ],
  },

  ai_both: {
    response: [
      "That's the honest answer. It's both. And the organizations that acknowledge that tend to make better choices about where to automate and where to protect human input.",
      "If this topic ever feels relevant for your organization or event, that's usually where I come in.",
      "Availability goes through Speakers Academy: https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
      "Or you can just email me directly: ferry@brandhumanizing.com",
    ],
  },

  exploring_story: {
    response: "I grew up fascinated by the internet. Built my first website at ten. I've always been drawn to technology. At some point I started questioning how it changes people, not just processes.",
    options: [
      { label: "Personal", nodeKey: "story_personal" },
      { label: "Professional", nodeKey: "story_professional" },
    ],
  },

  story_personal: {
    response: [
      "On the personal side, I've always been someone who builds things. Websites, ideas, companies. The thread through all of it is curiosity about what technology does to how people connect.",
      "If you're ever organizing something around these themes, I speak about it regularly.",
      "Availability: https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
    ],
  },

  story_professional: {
    response: [
      "Professionally, I went from building and optimizing digital products to speaking and writing about the human side of technology. The shift happened when I realized optimization without intention makes things worse, not better.",
      "If you're ever organizing something around these themes, I speak about it regularly.",
      "Availability: https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
    ],
  },

  exploring_bh: {
    response: "It's my way of describing a simple tension. Technology makes us faster. It doesn't automatically make us better. Organizations have to consciously design for the human side.",
    options: [
      { label: "Yes", nodeKey: "bh_yes" },
      { label: "Not sure", nodeKey: "bh_notsure" },
      { label: "Depends", nodeKey: "bh_depends" },
    ],
  },

  bh_yes: {
    response: [
      "Good. Then you've probably seen it happen. The challenge is turning that awareness into actual design choices inside an organization.",
      "If you ever want to explore this live with a group, that's usually what I do on stage or in teams.",
      "Availability: https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
      "Or just email me: ferry@brandhumanizing.com",
    ],
  },

  bh_notsure: {
    response: [
      "That's fair. It's easier to see in hindsight. When a company automates something and loses the thing that made people trust them. That's usually the moment it clicks.",
      "If you ever want to explore this live with a group, that's usually what I do on stage or in teams.",
      "Availability: https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
      "Or just email me: ferry@brandhumanizing.com",
    ],
  },

  bh_depends: {
    response: [
      "It does depend. On the industry, the culture, the leadership. But the question itself is always relevant. Are you designing technology around people, or the other way around?",
      "If you ever want to explore this live with a group, that's usually what I do on stage or in teams.",
      "Availability: https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
      "Or just email me: ferry@brandhumanizing.com",
    ],
  },

  // ─── SHARED ───

  book: {
    response: [
      "The book is called Brand Humanizing. It's about the tension between technology and human value inside organizations. It's not a manual. It's more of a perspective shift.",
      "You can find it here: https://brandhumanizingbook.nl",
    ],
  },
};
