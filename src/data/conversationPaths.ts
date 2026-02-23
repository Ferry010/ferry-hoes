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
  followUps: FollowUp[];
  ctas: CTA[];
}

export const conversationPaths: Record<string, Branch> = {
  speaking: {
    label: "What do you actually speak about?",
    response:
      "I speak about what happens when technology becomes available to everyone.\nWhen AI is no longer the advantage.\nWhen speed is normal.\nAnd differentiation disappears.\n\nThat's where Brand Humanizing begins.",
    followUps: [
      {
        question: "What problem do you solve?",
        answer:
          "Most organizations don't struggle with technology.\nThey struggle with where to put it.\nAI ends up driving processes instead of supporting people.\nThat's when sameness starts.",
      },
      {
        question: "What makes you different from other AI speakers?",
        answer:
          "I don't teach tools.\nI teach positioning.\nTechnology is accessible to everyone.\nHuman advantage is not.",
      },
      {
        question: "Can you give an example?",
        answer:
          "Two companies use the same AI tools.\nOne automates for efficiency.\nThe other designs around human judgment.\nOnly one builds long-term loyalty.",
      },
    ],
    ctas: [
      { label: "Check availability", action: "contact" },
      { label: "Download keynote overview", action: "link", href: "#" },
    ],
  },
  story: {
    label: "What's your story?",
    response:
      "I grew up building websites at ten years old.\nI loved technology before it was cool.\nBut I also saw how easily it can replace meaning.\n\nThat tension shaped everything.",
    followUps: [
      {
        question: "When did this perspective change?",
        answer:
          "During my work in growth and optimization.\nWe optimized metrics.\nBut something human got lost.\nThat bothered me more than the numbers excited me.",
      },
      {
        question: "Why Brand Humanizing?",
        answer:
          "Because technology without humanity creates sameness.\nAnd sameness kills strategy.\nBrand Humanizing is about designing systems where people stay central.",
      },
      {
        question: "Why does this matter now?",
        answer:
          "Because AI has leveled the playing field.\nThe difference is no longer access.\nIt's choices.",
      },
    ],
    ctas: [
      { label: "Invite Ferry to your podcast", action: "contact" },
      { label: "Discover the book", action: "link", href: "/#book" },
    ],
  },
  relevance: {
    label: "Why does this matter for us?",
    response:
      "There are two risks right now.\nAI chaos.\nOr strategic stagnation.\n\nBoth are dangerous.",
    followUps: [
      {
        question: "What happens if we ignore this?",
        answer:
          "Competitors redesign around human + AI synergy.\nYou optimize old systems.\nAnd slowly become irrelevant.",
      },
      {
        question: "What does good look like?",
        answer:
          "Clear governance.\nIntentional AI integration.\nHuman judgment protected and amplified.",
      },
      {
        question: "Where should we start?",
        answer:
          "Audit where AI is driving decisions.\nIdentify where human value is irreplaceable.\nDesign from there.",
      },
    ],
    ctas: [
      { label: "Book a strategy session", action: "contact" },
      { label: "Bring this to your team", action: "contact" },
    ],
  },
};
