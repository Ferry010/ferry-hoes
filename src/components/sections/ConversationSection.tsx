import { useState, useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";

type ConversationNode = {
  ferryMessage: string;
  options?: { label: string; nextNode: string }[];
  isFinal?: boolean;
};

const conversationTree: Record<string, ConversationNode> = {
  start: {
    ferryMessage: "Glad you scrolled down. What are you curious about?",
    options: [
      { label: "What is Brand Humanizing?", nextNode: "brandHumanizing" },
      { label: "I want to book you as a speaker", nextNode: "speaking" },
      { label: "Tell me about your book", nextNode: "book" },
    ],
  },
  brandHumanizing: {
    ferryMessage:
      "It's the practice of using technology to make brands more human, not less. Think of it as the antidote to soulless automation.",
    options: [
      { label: "How did you come up with it?", nextNode: "bhOrigin" },
      { label: "Can I read more?", nextNode: "bhReadMore" },
    ],
  },
  bhOrigin: {
    ferryMessage:
      "Years of watching brands hide behind tech instead of using it to connect. I figured someone had to flip the script.",
    options: [
      { label: "That resonates. Let's talk.", nextNode: "final" },
      { label: "Tell me about the book", nextNode: "book" },
    ],
  },
  bhReadMore: {
    ferryMessage:
      "The book is the best place to start — it lays out the whole philosophy with real examples. Or just shoot me a message and I'll point you in the right direction.",
    isFinal: true,
  },
  speaking: {
    ferryMessage:
      "Absolutely. I speak at conferences and corporate events worldwide about Brand Humanizing, technology, and human connection.",
    options: [
      { label: "What topics do you cover?", nextNode: "speakingTopics" },
      { label: "Let's talk", nextNode: "final" },
    ],
  },
  speakingTopics: {
    ferryMessage:
      "Everything from the future of human-brand relationships to how AI can actually bring people closer. I tailor every talk to the audience.",
    isFinal: true,
  },
  book: {
    ferryMessage:
      "Brand Humanizing is available now. It's the playbook for making your brand feel more human in a tech-driven world.",
    options: [
      { label: "Where can I get it?", nextNode: "bookWhere" },
      { label: "What's it about?", nextNode: "bookAbout" },
    ],
  },
  bookWhere: {
    ferryMessage:
      "It's available online and at select bookstores. Shoot me a message and I'll send you the link directly.",
    isFinal: true,
  },
  bookAbout: {
    ferryMessage:
      "It's about using technology to create genuine human connections with your audience — not replacing them. Real stories, real frameworks, no fluff.",
    isFinal: true,
  },
  final: {
    ferryMessage:
      "I could keep going, but it's better in person. Shoot me a message.",
    isFinal: true,
  },
};

type HistoryEntry = {
  nodeId: string;
  visitorChoice?: string;
};

const ConversationSection = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([{ nodeId: "start" }]);
  const endRef = useRef<HTMLDivElement>(null);

  const currentNodeId = history[history.length - 1].nodeId;
  const currentNode = conversationTree[currentNodeId];
  const isFinished = currentNode.isFinal;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [history]);

  const handleChoice = (option: { label: string; nextNode: string }) => {
    setHistory((prev) => [
      ...prev.map((entry, i) =>
        i === prev.length - 1 ? { ...entry, visitorChoice: option.label } : entry
      ),
      { nodeId: option.nextNode },
    ]);
  };

  const handleReset = () => {
    setHistory([{ nodeId: "start" }]);
  };

  const handleContact = () => {
    window.dispatchEvent(new Event("open-contact"));
  };

  return (
    <section
      id="conversation"
      className="py-20 md:py-28 bg-foreground text-background"
    >
      <div className="container px-6 md:px-8 max-w-xl md:max-w-2xl">
        <div className="flex flex-col gap-4">
          {history.map((entry, i) => {
            const node = conversationTree[entry.nodeId];
            const isLatest = i === history.length - 1;

            return (
              <div key={i} className="flex flex-col gap-3 animate-fade-in">
                {/* Ferry message */}
                <div className="self-start max-w-[85%]">
                  <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background/90 text-foreground text-sm md:text-base backdrop-blur-sm">
                    {node.ferryMessage}
                  </div>
                </div>

                {/* Visitor's chosen reply (if already picked) */}
                {entry.visitorChoice && (
                  <div className="self-end max-w-[85%]">
                    <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 text-primary-foreground text-sm md:text-base backdrop-blur-sm">
                      {entry.visitorChoice}
                    </div>
                  </div>
                )}

                {/* Active options (only on latest node, if not finished) */}
                {isLatest && !isFinished && node.options && (
                  <div className="flex flex-col items-end gap-2 mt-1 animate-fade-in">
                    {node.options.map((option) => (
                      <button
                        key={option.nextNode}
                        onClick={() => handleChoice(option)}
                        className="max-w-[85%] text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                      >
                        <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/60 text-primary-foreground text-sm md:text-base backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary/80">
                          {option.label}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Final CTA */}
          {isFinished && (
            <div className="flex flex-col items-start gap-3 mt-4 animate-fade-in">
              <button
                onClick={handleContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Shoot me a message
              </button>
              <button
                onClick={handleReset}
                className="text-xs text-background/50 hover:text-background/80 transition-colors"
              >
                Start over
              </button>
            </div>
          )}

          <div ref={endRef} />
        </div>
      </div>
    </section>
  );
};

export default ConversationSection;
