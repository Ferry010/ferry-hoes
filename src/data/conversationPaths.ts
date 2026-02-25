/* ── Types ── */

export interface CTA {
  label: string;
  href: string;
}

export interface ConversationOption {
  label: string;
  nodeKey: string;
}

export interface ConversationNode {
  response: string;
  options?: ConversationOption[];
  ctaIntro?: string;
  ctas?: CTA[];
  continuationOptions?: ConversationOption[];
}

/* ── Node Map ── */

export const conversationNodes: Record<string, ConversationNode> = {
  root: {
    response: "Before I start talking about myself, can I ask you something?",
    options: [
      { label: "I'm organizing something", nodeKey: "organizing" },
      { label: "I'm just exploring", nodeKey: "exploring" },
    ],
  },

  organizing: {
    response: "Nice. What kind of setting are we talking about?",
    options: [
      { label: "Large event or conference", nodeKey: "event" },
      { label: "Internal team session", nodeKey: "team" },
      { label: "Podcast or panel", nodeKey: "podcast" },
    ],
  },

  event: {
    response:
      "Great. In that setting I usually speak about how organizations can use technology without losing their human edge. It is strategic, practical and energetic. People leave looking differently at how they design work.",
    options: [
      { label: "Inspiration", nodeKey: "event_inspiration" },
      { label: "Practical direction", nodeKey: "event_practical" },
      { label: "Strategic clarity", nodeKey: "event_strategic" },
    ],
  },

  event_inspiration: {
    response:
      "I focus on showing how fast technology is changing expectations, and why human judgment becomes more valuable, not less. It wakes people up without overwhelming them.",
    ctaIntro: "If this sounds like it could fit your audience, we can explore next steps.",
    ctas: [
      { label: "Check availability for your event", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
      { label: "Discuss your event directly with Ferry", href: "mailto:ferry@brandhumanizing.com" },
    ],
    continuationOptions: [
      { label: "Tell me more about your keynote style", nodeKey: "keynote_style" },
      { label: "What makes you different from other speakers?", nodeKey: "speaker_diff" },
      { label: "Switch topic", nodeKey: "switch_from_a" },
    ],
  },

  event_practical: {
    response: "I translate the bigger ideas into clear decisions leaders can take immediately. Where to use AI. Where not to. And why.",
    ctaIntro: "If this sounds like it could fit your audience, we can explore next steps.",
    ctas: [
      { label: "Check availability for your event", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
      { label: "Discuss your event directly with Ferry", href: "mailto:ferry@brandhumanizing.com" },
    ],
    continuationOptions: [
      { label: "Tell me more about your keynote style", nodeKey: "keynote_style" },
      { label: "What makes you different from other speakers?", nodeKey: "speaker_diff" },
      { label: "Switch topic", nodeKey: "switch_from_a" },
    ],
  },

  event_strategic: {
    response: "I help leadership teams rethink how technology shapes positioning. Not just efficiency, but differentiation.",
    ctaIntro: "If this sounds like it could fit your audience, we can explore next steps.",
    ctas: [
      { label: "Check availability for your event", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
      { label: "Discuss your event directly with Ferry", href: "mailto:ferry@brandhumanizing.com" },
    ],
    continuationOptions: [
      { label: "Tell me more about your keynote style", nodeKey: "keynote_style" },
      { label: "What makes you different from other speakers?", nodeKey: "speaker_diff" },
      { label: "Switch topic", nodeKey: "switch_from_a" },
    ],
  },

  keynote_style: {
    response: "I keep it sharp and visual. No slides full of text. I use real examples, sometimes live demos, and I adapt to the energy in the room. The goal is always that people leave with something they can act on.",
  },

  speaker_diff: {
    response: "Most speakers in this space talk about tools or trends. I talk about what happens to people and organizations when those tools become normal. That shift in perspective is what audiences remember.",
  },

  team: {
    response: "Perfect. Team sessions are more interactive. We look at how technology affects daily decisions, culture and collaboration. It becomes practical very quickly.",
    options: [
      { label: "Leadership team", nodeKey: "team_leadership" },
      { label: "Innovation or digital team", nodeKey: "team_innovation" },
      { label: "Mixed departments", nodeKey: "team_mixed" },
    ],
  },

  team_leadership: {
    response: "With leadership teams I focus on governance and strategic choices. How do you introduce AI without weakening judgment or accountability? That conversation usually opens up fast.",
    ctaIntro: "If you think this could strengthen your team, let's explore it.",
    ctas: [
      { label: "Discuss a team session", href: "mailto:ferry@brandhumanizing.com" },
      { label: "Check speaking availability", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
    ],
    continuationOptions: [
      { label: "Tell me more about your keynote style", nodeKey: "keynote_style" },
      { label: "What makes you different from other speakers?", nodeKey: "speaker_diff" },
      { label: "Switch topic", nodeKey: "switch_from_a" },
    ],
  },

  team_innovation: {
    response: "Innovation teams often already use AI but lack a shared framework for when to automate and when to protect human input. That is where the session gets interesting.",
    ctaIntro: "If you think this could strengthen your team, let's explore it.",
    ctas: [
      { label: "Discuss a team session", href: "mailto:ferry@brandhumanizing.com" },
      { label: "Check speaking availability", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
    ],
    continuationOptions: [
      { label: "Tell me more about your keynote style", nodeKey: "keynote_style" },
      { label: "What makes you different from other speakers?", nodeKey: "speaker_diff" },
      { label: "Switch topic", nodeKey: "switch_from_a" },
    ],
  },

  team_mixed: {
    response: "Mixed groups are great because the conversation crosses silos. People from operations, marketing and tech start seeing the same challenge from different angles. That alignment is often the biggest takeaway.",
    ctaIntro: "If you think this could strengthen your team, let's explore it.",
    ctas: [
      { label: "Discuss a team session", href: "mailto:ferry@brandhumanizing.com" },
      { label: "Check speaking availability", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
    ],
    continuationOptions: [
      { label: "Tell me more about your keynote style", nodeKey: "keynote_style" },
      { label: "What makes you different from other speakers?", nodeKey: "speaker_diff" },
      { label: "Switch topic", nodeKey: "switch_from_a" },
    ],
  },

  podcast: {
    response: "Nice. I enjoy conversations more than monologues anyway. Especially when we go beyond tools and talk about design choices.",
    options: [
      { label: "AI and leadership", nodeKey: "podcast_ai" },
      { label: "Human judgment in a digital world", nodeKey: "podcast_judgment" },
      { label: "Personal journey", nodeKey: "podcast_journey" },
    ],
  },

  podcast_ai: {
    response: "AI and leadership is where I spend most of my time. The interesting question is not whether leaders should use AI, but how they set the rules for everyone else.",
    ctaIntro: "If you think I'm a fit, feel free to reach out.",
    ctas: [
      { label: "Invite Ferry to your podcast", href: "mailto:ferry@brandhumanizing.com" },
      { label: "Discover the book", href: "https://brandhumanizingbook.nl" },
    ],
    continuationOptions: [
      { label: "What do you actually speak about?", nodeKey: "event" },
      { label: "Tell me your story", nodeKey: "story_from_podcast" },
    ],
  },

  podcast_judgment: {
    response: "This is the core of my work. Technology makes us faster but it does not automatically make us better. The gap between speed and judgment is where most organizations struggle.",
    ctaIntro: "If you think I'm a fit, feel free to reach out.",
    ctas: [
      { label: "Invite Ferry to your podcast", href: "mailto:ferry@brandhumanizing.com" },
      { label: "Discover the book", href: "https://brandhumanizingbook.nl" },
    ],
    continuationOptions: [
      { label: "What do you actually speak about?", nodeKey: "event" },
      { label: "Tell me your story", nodeKey: "story_from_podcast" },
    ],
  },

  podcast_journey: {
    response: "I built my first website at ten and have been obsessed with the internet ever since. The journey from building things online to speaking about how technology shapes organizations happened naturally over time.",
    ctaIntro: "If you think I'm a fit, feel free to reach out.",
    ctas: [
      { label: "Invite Ferry to your podcast", href: "mailto:ferry@brandhumanizing.com" },
      { label: "Discover the book", href: "https://brandhumanizingbook.nl" },
    ],
    continuationOptions: [
      { label: "What do you actually speak about?", nodeKey: "event" },
      { label: "Tell me your story", nodeKey: "story_from_podcast" },
    ],
  },

  story_from_podcast: {
    response: "I started in growth and optimization. We improved performance metrics constantly but I noticed that the more we optimized for efficiency, the more human nuance disappeared. That tension became my work.",
  },

  switch_from_a: {
    response: "Of course. What are you curious about?",
    options: [
      { label: "I'm just exploring", nodeKey: "exploring" },
    ],
  },

  exploring: {
    response: "Love that. What made you click?",
    options: [
      { label: "AI is everywhere and I'm trying to make sense of it", nodeKey: "ai_everywhere" },
      { label: "I saw your name somewhere", nodeKey: "saw_name" },
      { label: "I'm curious about how humans and tech work together", nodeKey: "humans_tech" },
    ],
  },

  ai_everywhere: {
    response: "Fair. AI is everywhere right now. What interests me is not the tools themselves, but what happens to people when those tools become normal.",
    options: [
      { label: "As a leader", nodeKey: "ai_leader" },
      { label: "Personally curious", nodeKey: "ai_curious" },
    ],
  },

  ai_leader: {
    response: "Then it becomes a design question. How do you introduce technology without weakening judgment or culture?",
    ctaIntro: "If you ever want to explore this live, I speak at events and within teams about exactly this tension.",
    ctas: [
      { label: "See speaking options", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
      { label: "Discover the book", href: "https://brandhumanizingbook.nl" },
    ],
    continuationOptions: [
      { label: "What do you actually speak about?", nodeKey: "event" },
      { label: "Tell me your story", nodeKey: "story_from_exploring" },
    ],
  },

  ai_curious: {
    response: "Then it becomes simpler. How do you use technology without letting it replace what makes you valuable?",
    ctaIntro: "If you ever want to explore this live, I speak at events and within teams about exactly this tension.",
    ctas: [
      { label: "See speaking options", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
      { label: "Discover the book", href: "https://brandhumanizingbook.nl" },
    ],
    continuationOptions: [
      { label: "What do you actually speak about?", nodeKey: "event" },
      { label: "Tell me your story", nodeKey: "story_from_exploring" },
    ],
  },

  saw_name: {
    response: "Good sign. Hopefully in a positive context.",
    options: [
      { label: "At an event", nodeKey: "saw_event" },
      { label: "Online", nodeKey: "saw_online" },
      { label: "Through someone", nodeKey: "saw_someone" },
    ],
  },

  saw_event: {
    response: "Nice. Events are where this work comes alive. I focus on helping organizations rethink how they combine technology and human value.",
    ctaIntro: "If you want to explore what that could look like for your event, here are some options.",
    ctas: [
      { label: "Check availability", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
      { label: "Reach out directly", href: "mailto:ferry@brandhumanizing.com" },
      { label: "Discover the book", href: "https://brandhumanizingbook.nl" },
    ],
  },

  saw_online: {
    response: "The internet is where I started. I focus on helping organizations rethink how they combine technology and human value. Most of my thinking ends up online eventually.",
    ctaIntro: "If something resonated, feel free to explore further.",
    ctas: [
      { label: "Check availability", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
      { label: "Reach out directly", href: "mailto:ferry@brandhumanizing.com" },
      { label: "Discover the book", href: "https://brandhumanizingbook.nl" },
    ],
  },

  saw_someone: {
    response: "Word of mouth is the best filter. I focus on helping organizations rethink how they combine technology and human value.",
    ctaIntro: "If you want to continue the conversation, here are some ways.",
    ctas: [
      { label: "Check availability", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
      { label: "Reach out directly", href: "mailto:ferry@brandhumanizing.com" },
      { label: "Discover the book", href: "https://brandhumanizingbook.nl" },
    ],
  },

  humans_tech: {
    response: "That tension is my work. Technology makes us faster. It does not automatically make us better. That depends on design choices.",
    options: [
      { label: "Business", nodeKey: "ht_business" },
      { label: "Cultural", nodeKey: "ht_cultural" },
    ],
  },

  ht_business: {
    response: "From a business perspective, the question is how you position technology inside strategy. Not as a cost saver but as something that strengthens what makes you different.",
    ctaIntro: "If this is relevant for your organization, I would enjoy exploring it further.",
    ctas: [
      { label: "See speaking options", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
      { label: "Discover the book", href: "https://brandhumanizingbook.nl" },
    ],
  },

  ht_cultural: {
    response: "Culturally, the risk is that we optimize so much for efficiency that we lose the space for creativity, disagreement and judgment. Those are the things that make organizations interesting.",
    ctaIntro: "If this resonates, I talk about this at events and in teams.",
    ctas: [
      { label: "See speaking options", href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" },
      { label: "Discover the book", href: "https://brandhumanizingbook.nl" },
    ],
  },

  story_from_exploring: {
    response: "I built my first website at ten and have been obsessed with the internet ever since. I moved into growth and optimization but started noticing that the more we optimized, the more human nuance disappeared. That tension became my work.",
  },
};
