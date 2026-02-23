export interface Exchange {
  visitor: string;
  ferry: string;
}

export interface ConversationPath {
  label: string;
  exchanges: Exchange[];
}

export const conversationPaths: Record<string, ConversationPath> = {
  brand: {
    label: "Brand Humanizing — what is that?",
    exchanges: [
      {
        visitor: "So what is Brand Humanizing exactly?",
        ferry:
          "It's a strategic approach to making brands feel genuinely human. Not a rebrand, not a tone-of-voice exercise — it's about embedding empathy, personality, and real connection into every single touchpoint. The result? People trust you, buy from you, and actually want to stick around.",
      },
      {
        visitor: "How is that different from just... good marketing?",
        ferry:
          "Good marketing can still feel hollow. You can have a brilliant campaign that wins awards but doesn't make anyone feel anything real. Brand Humanizing goes deeper — it's not about what you say, it's about how you consistently show up. It's the difference between performing authenticity and actually being authentic.",
      },
      {
        visitor: "Where do I start if I want to humanize my brand?",
        ferry:
          "Honestly? Start by listening. Talk to your customers like humans, not data points. Then grab a copy of the book — it's packed with frameworks and real examples to get you moving. No fluff, just practical steps you can apply tomorrow.",
      },
    ],
  },
  speaking: {
    label: "I have an event and want to figure out if you'd be a good fit",
    exchanges: [
      {
        visitor: "What kind of events do you speak at?",
        ferry:
          "Everything from intimate leadership offsites with 30 people to main-stage keynotes at 2,000+ person conferences. Corporate events, industry summits, creative festivals — if there's a stage and an audience that wants to think differently, I'm in.",
      },
      {
        visitor: "What topics do you cover?",
        ferry:
          "My core topics are AI & People, the Future of Work, Digital Transformation, and Leadership. But here's the thing — I don't do cookie-cutter talks. Every keynote gets tailored to your audience, your industry, and what will actually move the needle for your people.",
      },
      {
        visitor: "What makes your talks different?",
        ferry:
          "I don't lecture. My favourite moment is when someone in the audience pushes back and we get a real conversation going. That's where the magic happens. I bring energy, honesty, and the occasional uncomfortable truth — and people tend to remember that long after the event.",
      },
      {
        visitor: "Can I book you?",
        ferry: "Absolutely. Drop me a message right here 👇",
      },
    ],
  },
  about: {
    label: "I want to learn more about who Ferry is",
    exchanges: [
      {
        visitor: "How did you get into all this?",
        ferry:
          "I spent years in marketing and brand strategy, watching companies pour budgets into campaigns that felt hollow. I kept asking: why don't brands just... act like people? That question became a framework, the framework became a book, and the book became a movement.",
      },
      {
        visitor: "What drives you?",
        ferry:
          "The belief that business doesn't have to feel soulless. Every brand is made of people, built for people — so why do most of them communicate like robots? I want to change that. One brand, one keynote, one conversation at a time.",
      },
      {
        visitor: "How do you see AI changing things?",
        ferry:
          "AI makes it easier than ever to produce content — and harder than ever to stand out. The brands that win won't be the ones using AI the fastest; they'll be the ones that stay the most human while everyone else automates their personality away.",
      },
    ],
  },
};
