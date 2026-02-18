import { useState } from "react";
import { MessageCircle } from "lucide-react";

const qaItems = [
  {
    question: "What is Brand Humanizing?",
    answer:
      "It's the practice of using technology to make brands more human, not less. Think of it as the antidote to soulless automation.",
  },
  {
    question: "Can I book you as a speaker?",
    answer:
      "Absolutely. I speak at conferences and corporate events worldwide about Brand Humanizing, technology, and human connection.",
  },
  {
    question: "Tell me about your book",
    answer:
      "Brand Humanizing is available now. It's the playbook for making your brand feel more human in a tech-driven world.",
  },
  {
    question: "How can I work with you?",
    answer:
      "From keynotes to workshops to consulting — let's figure out what fits. Drop me a message and we'll talk.",
  },
];

const ConversationSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleAskSomethingElse = () => {
    window.dispatchEvent(new Event("open-contact"));
  };

  return (
    <section
      id="conversation"
      className="py-20 md:py-28 bg-secondary/50"
    >
      <div className="container px-6 md:px-8 max-w-xl md:max-w-2xl">
        <p className="text-sm text-muted-foreground mb-8 tracking-wide uppercase">
          Pick a question
        </p>

        <div className="flex flex-col gap-4">
          {qaItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              {/* Visitor question bubble */}
              <button
                onClick={() => handleToggle(index)}
                className={`self-end max-w-[85%] text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-soft ${
                  activeIndex === index ? "scale-[1.02]" : ""
                }`}
              >
                <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-primary text-primary-foreground text-sm md:text-base font-medium">
                  {item.question}
                </div>
              </button>

              {/* Ferry answer bubble */}
              <div
                className="self-start max-w-[85%] overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0px",
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background border border-border text-foreground text-sm md:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-10">
          <button
            onClick={handleAskSomethingElse}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors shadow-soft"
          >
            <MessageCircle className="h-4 w-4" />
            Ask me something else
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConversationSection;
