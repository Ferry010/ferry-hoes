import { useState } from "react";

const qAndA: { question: string; answer: string[] }[] = [
  {
    question: "What topics do you speak about?",
    answer: [
      "I speak about the human side of technology. Most often that means AI, the future of work, leadership, and how organizations design systems where technology strengthens human judgment instead of replacing it.",
      "My core theme is Brand Humanizing. It's about staying distinctive and human in a world where tools become available to everyone.",
    ],
  },
  {
    question: "Is your keynote inspirational or practical?",
    answer: [
      "Both. But if I had to choose, practical wins.",
      "I challenge assumptions, but I always bring it back to decisions leaders and teams can make immediately. Audiences should leave with clarity, not just motivation.",
      "If people feel inspired but don't rethink anything the next day, the talk wasn't strong enough.",
    ],
  },
  {
    question: "Who are your talks best suited for?",
    answer: [
      "Leadership teams, innovation teams, transformation programs and conferences that deal with change, AI, strategy or the future of work.",
      "That said, the theme translates well across industries because the tension between technology and human value is universal.",
    ],
  },
  {
    question: "Do you speak in Dutch or English?",
    answer: [
      "Both.",
      "Most of my work is in the Netherlands and delivered in Dutch, but I regularly speak in English as well. International audiences are no problem.",
      "Language should never limit the conversation.",
    ],
  },
  {
    question: "What formats do you offer?",
    answer: [
      "I do keynotes, interactive workshops, leadership sessions, hosting and panel moderation.",
      "I also enjoy podcast conversations, especially when we go beyond tools and talk about design choices and responsibility.",
      "If it involves thinking out loud about humans and technology, I'm in.",
    ],
  },
  {
    question: "How can we book you?",
    answer: [
      "All speaking bookings are handled via Speakers Academy.",
      "You can check availability and submit a request through my profile there. If you prefer to discuss the content first, you can always reach out directly and we'll align before moving forward.",
    ],
  },
  {
    question: "Do you customize your keynote?",
    answer: [
      "Yes.",
      "The core philosophy remains consistent, but I tailor examples, case studies and emphasis based on the audience, industry and context.",
      "No copy-paste talks.",
    ],
  },
  {
    question: "What makes your talks different from other AI speakers?",
    answer: [
      "I don't focus on tools.",
      "Most AI talks explain what technology can do. I focus on what it does to people, decision-making and positioning.",
      "It's less about features and more about choices.",
    ],
  },
  {
    question: "Can you host or moderate events?",
    answer: [
      "Yes.",
      "I enjoy hosting and moderating because it allows me to connect different perspectives in the room. It becomes less about presenting and more about elevating the conversation.",
    ],
  },
  {
    question: "Slightly important question: do you use slides?",
    answer: [
      "Yes. I promise there are slides.",
      "But they support the story. They don't replace it.",
      "And no, I don't read them out loud.",
    ],
  },
];

const SpeakingQA = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm mb-2 block">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Ferry speaks about
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with Ferry.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {qAndA.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <div key={i} className="flex flex-col gap-2">
                  {/* Question — right-aligned visitor bubble */}
                  <button
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    className={`self-end max-w-[85%] md:max-w-[70%] text-left px-5 py-3 rounded-2xl rounded-br-sm text-sm md:text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "bg-primary/80 text-primary-foreground/90 hover:bg-primary/90 hover:shadow-soft"
                    }`}
                  >
                    {item.question}
                  </button>

                  {/* Ferry's answer — left-aligned, shown beneath the question */}
                  {isActive && (
                    <div className="flex flex-col items-start gap-1 mt-1">
                      <span className="text-xs font-medium text-muted-foreground ml-2">Ferry</span>
                      <div className="bg-background/90 backdrop-blur-md border border-border/50 rounded-2xl rounded-bl-sm px-6 py-5 max-w-[90%] md:max-w-[80%] shadow-soft animate-fade-in">
                        {item.answer.map((paragraph, j) => (
                          <p key={j} className="text-foreground leading-relaxed text-sm md:text-base mb-2 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingQA;
