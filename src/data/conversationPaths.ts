export interface FollowUp {
  question: string;
  answer: string;
}

export interface CTA {
  label: string;
  action: "contact" | "link";
  href?: string;
}

export interface Branch {
  label: string;
  response: string;
  phase1: FollowUp[];
  phase2: FollowUp[];
  directional: {
    deeperLabel: string;
    deeperResponse: string;
    ctaLabel: string;
    ctaResponse: string;
    switchLabel: string;
    ctas: CTA[];
  };
}

export const conversationPaths: Record<string, Branch> = {
  speaking: {
    label: "What do you actually speak about?",
    response:
      "I speak about what happens when technology becomes available to everyone.\nWhen AI is no longer the advantage.\nWhen speed becomes normal.\nAnd differentiation starts disappearing.\n\nThat's where Brand Humanizing begins.",
    phase1: [
      {
        question: "What is Brand Humanizing?",
        answer:
          "Brand Humanizing is a strategic design choice.\nIt means structuring technology around human strengths.\nNot the other way around.\n\nIt's not anti-tech.\nIt's anti-sameness.",
      },
      {
        question: "What problem does it solve?",
        answer:
          "Most organizations don't struggle with technology.\nThey struggle with where to put it.\nAI ends up driving processes instead of supporting people.\n\nThat's when sameness starts.",
      },
      {
        question: "Is this about AI?",
        answer:
          "AI is the catalyst, not the subject.\nThe real question is what happens to differentiation\nwhen everyone has access to the same tools.\n\nThat's what I address.",
      },
    ],
    phase2: [
      {
        question: "Can you give a practical example?",
        answer:
          "Two companies use identical AI systems.\nOne automates everything possible.\nThe other protects human judgment where it creates value.\n\nOnly one builds long-term trust.",
      },
      {
        question: "Why is this different from digital transformation?",
        answer:
          "Digital transformation focuses on adoption.\nBrand Humanizing focuses on intention.\n\nIt's not about using technology.\nIt's about designing how it serves people.",
      },
      {
        question: "Where do companies get this wrong?",
        answer:
          "They let AI lead strategy instead of support it.\nThey optimize for efficiency without protecting what makes them different.\n\nSpeed without direction is just noise.",
      },
    ],
    directional: {
      deeperLabel: "Go deeper into Brand Humanizing",
      deeperResponse:
        "Brand Humanizing is a framework for designing organizations\nwhere technology amplifies human strengths.\n\nIt starts with governance.\nContinues with culture.\nAnd ends with competitive advantage that can't be copied.",
      ctaLabel: "See how this applies to your organization",
      ctaResponse:
        "Every organization faces the same tension.\nEfficiency versus differentiation.\nAI can optimize both — but only if designed intentionally.",
      switchLabel: "Ask something else",
      ctas: [
        { label: "Check availability", action: "contact" },
        { label: "Download keynote overview", action: "link", href: "#" },
      ],
    },
  },
  story: {
    label: "What's your story?",
    response:
      "I built my first website at ten.\nI loved technology early.\nBut I also saw how easily optimization replaces meaning.\n\nThat tension shaped everything I do now.",
    phase1: [
      {
        question: "When did your perspective shift?",
        answer:
          "During my work in growth and optimization.\nWe improved metrics.\nBut something human disappeared in the process.\n\nThat bothered me more than the numbers impressed me.",
      },
      {
        question: "What made this personal?",
        answer:
          "Watching brilliant teams lose their edge.\nNot because they lacked technology.\nBut because they let it replace their judgment.\n\nThat felt wrong.",
      },
      {
        question: "Why build Brand Humanizing?",
        answer:
          "Because no one was naming the problem.\nEveryone talked about AI adoption.\nNo one talked about what gets lost in the process.\n\nSomeone had to.",
      },
    ],
    phase2: [
      {
        question: "Was there a defining moment?",
        answer:
          "Yes. A project where the data said one thing\nand every human in the room felt another.\nWe followed the data.\n\nWe were wrong.",
      },
      {
        question: "Why does this matter now?",
        answer:
          "Because AI has leveled the playing field.\nThe difference is no longer access.\nIt's choices.\n\nAnd most organizations aren't making them intentionally.",
      },
      {
        question: "How does this influence your talks?",
        answer:
          "I don't talk about tools.\nI talk about choices.\nAbout how organizations design systems.\nAnd who those systems serve.",
      },
    ],
    directional: {
      deeperLabel: "Go deeper into Ferry's philosophy",
      deeperResponse:
        "My philosophy is simple.\nTechnology should make humans more human.\nNot less.\n\nEvery talk, every framework, every conversation\nstarts from that belief.",
      ctaLabel: "Invite Ferry to speak or podcast",
      ctaResponse:
        "I love conversations that challenge assumptions.\nWhether it's a stage, a podcast, or a leadership retreat.\n\nLet's find the right format.",
      switchLabel: "Switch topic",
      ctas: [
        { label: "Invite Ferry to your event", action: "contact" },
        { label: "Invite Ferry to your podcast", action: "contact" },
        { label: "Discover the book", action: "link", href: "/#book" },
      ],
    },
  },
  relevance: {
    label: "Why does this matter for us?",
    response:
      "Right now there are two risks.\nAI chaos.\nOr strategic stagnation.\n\nBoth are dangerous.",
    phase1: [
      {
        question: "What happens if we ignore this?",
        answer:
          "Competitors redesign around human + AI synergy.\nYou optimize old systems.\nAnd slowly become irrelevant.\n\nNot because you're bad. Because you're invisible.",
      },
      {
        question: "What does good look like?",
        answer:
          "Clear governance.\nIntentional AI integration.\nHuman judgment protected where it creates advantage.\n\nThat's the design brief.",
      },
      {
        question: "Where should we begin?",
        answer:
          "Audit where AI is driving decisions.\nIdentify where human value is irreplaceable.\nDesign from there.\n\nStart small. Think big.",
      },
    ],
    phase2: [
      {
        question: "Is this about compliance?",
        answer:
          "Compliance is the floor, not the ceiling.\nBrand Humanizing goes beyond regulation.\n\nIt's about building systems that are worth trusting.\nNot just legally required to be.",
      },
      {
        question: "Is this about competitive edge?",
        answer:
          "When everyone has access to AI,\nthe advantage shifts.\nNot to who uses it —\nbut to who uses it intentionally.",
      },
      {
        question: "How long does transformation take?",
        answer:
          "The shift in thinking? One conversation.\nThe shift in systems? That depends on courage.\n\nMost organizations can start seeing results in 90 days.",
      },
    ],
    directional: {
      deeperLabel: "Go deeper into strategy",
      deeperResponse:
        "Strategy in the age of AI isn't about more tools.\nIt's about clearer choices.\n\nWho decides. What's automated. What stays human.\nThat's where advantage lives.",
      ctaLabel: "Book a strategy session",
      ctaResponse:
        "The best strategies start with the right questions.\nNot the right answers.\n\nLet's explore what this looks like for your organization.",
      switchLabel: "Explore another topic",
      ctas: [
        { label: "Book a strategy session", action: "contact" },
        { label: "Bring this to your team", action: "contact" },
      ],
    },
  },
};
