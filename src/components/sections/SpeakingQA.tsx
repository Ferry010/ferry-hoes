import { useState } from "react";

const qAndA = [
  {
    question: "What do you say about AI and people?",
    answer: "I talk about how to leverage AI and emerging tech while keeping humans at the center. No doom-and-gloom — just practical ways to make technology work for people, not against them.",
  },
  {
    question: "What about the future of work?",
    answer: "I help leaders navigate the changing landscape of work, culture, and what it means to lead a team when everything keeps shifting. Spoiler: it starts with people, not tools.",
  },
  {
    question: "Can you talk about digital transformation?",
    answer: "Absolutely. But I skip the buzzwords. I focus on what actually works — the mindset shifts, the human side of change, and how to make transformation stick.",
  },
  {
    question: "What about leadership in the AI age?",
    answer: "This is where it gets interesting. AI is reshaping everything, and leaders need a new playbook. I talk about authentic leadership when the rules are being rewritten in real time.",
  },
];

const SpeakingQA = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm mb-2 block">Topics</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Ferry speaks about
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Click a question to hear it from Ferry himself.
            </p>
          </div>

          {/* Questions — right-aligned visitor bubbles */}
          <div className="flex flex-col gap-3 mb-8">
            {qAndA.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`self-end max-w-[85%] md:max-w-[70%] text-left px-5 py-3 rounded-2xl rounded-br-sm text-sm md:text-base font-medium transition-all duration-200 ${
                  activeIndex === i
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-primary/80 text-primary-foreground/90 hover:bg-primary/90 hover:shadow-soft"
                }`}
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Ferry's answer — left-aligned reply bubble */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-xs font-medium text-muted-foreground ml-2">Ferry</span>
            <div
              key={activeIndex}
              className="bg-background/90 backdrop-blur-md border border-border/50 rounded-2xl rounded-bl-sm px-6 py-5 max-w-[90%] md:max-w-[80%] shadow-soft animate-fade-in"
            >
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                {qAndA[activeIndex].answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingQA;
