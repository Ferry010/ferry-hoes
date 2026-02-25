export interface FollowUp {
  question: string;
  answer: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Branch {
  label: string;
  response: string;
  steps: FollowUp[][];
  directional: {
    deeperLabel: string;
    deeperResponse: string;
    ctaLabel: string;
    ctaResponse: string;
    switchLabel: string;
    ctas: CTA[];
    closingMessage: string;
  };
}

export const conversationPaths: Record<string, Branch> = {
  speaking: {
    label: "What do you actually speak about?",
    response:
      "I speak about the relationship between people and technology. Most organizations focus on tools. I focus on how those tools change behavior, decision-making and positioning. My work is about designing systems where technology strengthens human value instead of replacing it.",
    steps: [
      [
        {
          question: "What is Brand Humanizing?",
          answer:
            "Brand Humanizing is a strategic approach to organizing work around human strengths. Technology should increase speed and scale, but humans should stay responsible for judgment, creativity and trust. When companies reverse that order, they become efficient but forgettable.",
        },
        {
          question: "Is this mainly about AI?",
          answer:
            "AI is the catalyst, but the topic is broader. It is about what happens when powerful tools become available to everyone and efficiency alone stops being a differentiator. The real question is how organizations keep their human edge when technology levels the playing field.",
        },
        {
          question: "What problem do you solve for companies?",
          answer:
            "Most companies adopt technology without asking what it replaces. That leads to faster processes but weaker positioning. I help organizations identify where human value matters most and design their systems to protect it.",
        },
      ],
      [
        {
          question: "Can you give a concrete example?",
          answer:
            "Two companies implement the same AI system in customer service. One automates as much as possible to reduce cost. The other uses AI to assist employees so conversations improve. Both save time, but only one increases loyalty and brand value.",
        },
        {
          question: "How is this different from digital transformation?",
          answer:
            "Digital transformation focuses on adoption. Brand Humanizing focuses on intention. It is not about whether you use technology, but about how you design its role relative to the people in your organization.",
        },
        {
          question: "Why is this relevant now?",
          answer:
            "Because AI has made advanced technology accessible to everyone. When your competitors have the same tools, the difference is no longer capability. It is how thoughtfully you integrate those tools with human strengths.",
        },
      ],
      [
        {
          question: "Where do companies usually go wrong?",
          answer:
            "They let technology lead strategy instead of support it. They optimize for speed without protecting what makes them different. The result is a more efficient company that looks and feels like every other company.",
        },
        {
          question: "What results can this create?",
          answer:
            "When technology supports people instead of replacing them, employees make better decisions and customers feel the difference. That translates into stronger positioning, higher retention and long-term differentiation.",
        },
        {
          question: "What would this look like in our organization?",
          answer:
            "That depends on where AI is currently influencing decisions and where human judgment is being quietly replaced. A good starting point is mapping those touchpoints and designing intentionally from there.",
        },
      ],
    ],
    directional: {
      deeperLabel: "Go deeper into Brand Humanizing",
      deeperResponse:
        "Brand Humanizing is a framework for designing organizations where technology amplifies human strengths. It starts with governance, continues with culture and ends with competitive advantage that cannot be copied. The organizations that get this right do not just perform better. They become harder to replace.",
      ctaLabel: "See how this applies to your event or organization",
      ctaResponse:
        "If you are organizing an event, this topic works well for leadership teams, innovation departments and organizations navigating AI integration. The keynote challenges how technology is positioned inside strategy and gives practical direction.",
      switchLabel: "Ask something else",
      ctas: [
        {
          label: "Check availability for your event",
          href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
        },
        {
          label: "Discuss keynote content directly",
          href: "mailto:ferry@brandhumanizing.com",
        },
      ],
      closingMessage: "Sounds good. I look forward to hearing from you.",
    },
  },
  story: {
    label: "What is your story?",
    response:
      "I built my first website when I was ten. I was fascinated by the internet long before it became mainstream. Technology always felt natural to me, but I also noticed how easily it could remove the human layer from work and communication.",
    steps: [
      [
        {
          question: "When did your thinking change?",
          answer:
            "During my time working in growth and optimization. We improved performance metrics constantly. But I started noticing that the more we optimized for efficiency, the more human nuance disappeared. That tension stayed with me.",
        },
        {
          question: "How did you move into speaking?",
          answer:
            "It happened gradually. I started writing about the tension between technology and human value. People responded to it. Eventually I was invited to share those ideas on stage and it became clear this was a conversation many organizations needed to have.",
        },
        {
          question: "Why focus on this topic long term?",
          answer:
            "Because the tension between technology and humanity is only growing. AI will keep accelerating. The question of where to protect human value will become more urgent every year. This is not a trend topic. It is a structural shift.",
        },
      ],
      [
        {
          question: "Was there a defining moment?",
          answer:
            "Yes. A project where the data said one thing and every person in the room felt another. We followed the data. We were wrong. That experience taught me that human judgment is not a soft skill. It is a strategic asset.",
        },
        {
          question: "How does that influence your talks today?",
          answer:
            "It means I do not speak about hype or tools. I speak about responsibility. About how leaders design systems and what those systems reward. That is where culture and strategy meet technology.",
        },
        {
          question: "Why does this matter now?",
          answer:
            "Because AI has leveled the playing field. The difference between organizations is no longer access to technology. It is the choices they make about how to use it. Most organizations are not making those choices intentionally.",
        },
      ],
    ],
    directional: {
      deeperLabel: "Go deeper into Ferry's philosophy",
      deeperResponse:
        "My philosophy is straightforward. Technology should make humans more human, not less. Every talk, every framework and every conversation I have starts from that belief. The organizations that understand this do not just adopt technology better. They build something worth choosing.",
      ctaLabel: "Invite Ferry to speak or join a podcast",
      ctaResponse:
        "If you are hosting an event or podcast, I enjoy conversations that challenge how organizations think about AI, leadership and differentiation. The best discussions happen when we go beyond tools and talk about design choices.",
      switchLabel: "Explore a different topic",
      ctas: [
        {
          label: "Invite Ferry to speak",
          href: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
        },
        {
          label: "Invite Ferry to your podcast or discuss collaboration",
          href: "mailto:ferry@brandhumanizing.com",
        },
        {
          label: "Discover the book",
          href: "https://brandhumanizingbook.nl",
        },
      ],
      closingMessage: "Thank you. I will personally respond.",
    },
  },
  relevance: {
    label: "Why does this matter for our organization?",
    response:
      "Right now organizations face two risks. They either adopt AI without structure, or they avoid it and fall behind. Both create long-term problems. The real issue is not whether you use AI, but how you position it inside your strategy.",
    steps: [
      [
        {
          question: "What happens if we ignore this?",
          answer:
            "Competitors will redesign around human and AI synergy while you optimize old systems. The risk is not falling behind on technology. It is becoming invisible because your positioning no longer stands out.",
        },
        {
          question: "What does good implementation look like?",
          answer:
            "Good implementation means clear governance, defined responsibilities and conscious protection of human judgment. Technology should support decisions, not quietly replace them without oversight.",
        },
        {
          question: "Where should we start?",
          answer:
            "Start by auditing where AI is currently driving decisions in your organization. Identify where human value is irreplaceable. Design from there. Start small but think strategically.",
        },
      ],
      [
        {
          question: "Is this about compliance?",
          answer:
            "Compliance is the floor, not the ceiling. Brand Humanizing goes beyond regulation. It is about building systems that are worth trusting, not just legally required to exist.",
        },
        {
          question: "Is this about competitive advantage?",
          answer:
            "When AI becomes accessible to everyone, efficiency alone stops being a differentiator. Competitive advantage shifts toward how intentionally you combine automation with human expertise.",
        },
        {
          question: "How long does transformation take?",
          answer:
            "The shift in thinking can happen in one conversation. The shift in systems depends on commitment. Most organizations can start seeing results within 90 days if they begin with clear priorities.",
        },
      ],
    ],
    directional: {
      deeperLabel: "Go deeper into strategic application",
      deeperResponse:
        "Strategy in the age of AI is not about more tools. It is about clearer choices. Who decides, what gets automated and what stays human. That is where sustainable advantage lives. The organizations that design this intentionally outperform those that simply adopt.",
      ctaLabel: "Book a strategy session",
      ctaResponse:
        "A strategy session helps clarify where AI is currently influencing decisions and where human value should be strengthened. It is practical and tailored to your organization.",
      switchLabel: "Explore another topic",
      ctas: [
        {
          label: "Book a strategy session",
          href: "mailto:ferry@brandhumanizing.com",
        },
        {
          label: "Discuss internally first",
          href: "mailto:ferry@brandhumanizing.com",
        },
      ],
      closingMessage: "I look forward to continuing this conversation.",
    },
  },
};
