import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X } from "lucide-react";

type ConversationNode = {
  ferryMessage: string;
  options?: { label: string; nextNode: string }[];
  isFinal?: boolean;
  isGate?: boolean;
};

const conversationTree: Record<string, ConversationNode> = {
  gate: {
    ferryMessage: "Nice. What would you like to do?",
    isGate: true,
    options: [
      { label: "I'll look around myself", nextNode: "__close__" },
      { label: "Let's talk", nextNode: "start" },
    ],
  },
  start: {
    ferryMessage: "Glad you're staying. What are you curious about?",
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
      { label: "How does it work in practice?", nextNode: "bhPractice" },
    ],
  },
  bhOrigin: {
    ferryMessage:
      "Years of watching brands hide behind tech instead of using it to connect. I figured someone had to flip the script.",
    options: [
      { label: "That resonates. Let's talk.", nextNode: "final" },
      { label: "Tell me about the book", nextNode: "book" },
      { label: "How does it work in practice?", nextNode: "bhPractice" },
    ],
  },
  bhReadMore: {
    ferryMessage:
      "The book is the best place to start — it lays out the whole philosophy with real examples. Or just shoot me a message and I'll point you in the right direction.",
    options: [
      { label: "Where can I get it?", nextNode: "bookWhere" },
      { label: "Tell me more about you", nextNode: "speaking" },
      { label: "Let's chat", nextNode: "final" },
    ],
  },
  bhPractice: {
    ferryMessage:
      "It starts with listening — really listening — to your audience. Then you use tech to amplify empathy, not replace it. Every touchpoint becomes a chance to be genuinely human.",
    options: [
      { label: "I want to bring this to my team", nextNode: "final" },
      { label: "Tell me about the book", nextNode: "book" },
      { label: "Can you speak about this?", nextNode: "speaking" },
    ],
  },
  speaking: {
    ferryMessage:
      "Absolutely. I speak at conferences and corporate events worldwide about Brand Humanizing, technology, and human connection.",
    options: [
      { label: "What topics do you cover?", nextNode: "speakingTopics" },
      { label: "Where have you spoken?", nextNode: "speakingVenues" },
      { label: "Let's talk", nextNode: "final" },
    ],
  },
  speakingTopics: {
    ferryMessage:
      "Everything from the future of human-brand relationships to how AI can actually bring people closer. I tailor every talk to the audience.",
    options: [
      { label: "I'd love to book you", nextNode: "final" },
      { label: "Tell me about the book", nextNode: "book" },
      { label: "What is Brand Humanizing?", nextNode: "brandHumanizing" },
    ],
  },
  speakingVenues: {
    ferryMessage:
      "From intimate boardrooms to stages with thousands. TNW, SXSW, corporate summits — wherever the conversation matters.",
    options: [
      { label: "Let's set something up", nextNode: "final" },
      { label: "What topics do you cover?", nextNode: "speakingTopics" },
      { label: "Tell me about your book", nextNode: "book" },
    ],
  },
  book: {
    ferryMessage:
      "Brand Humanizing is available now. It's the playbook for making your brand feel more human in a tech-driven world.",
    options: [
      { label: "Where can I get it?", nextNode: "bookWhere" },
      { label: "What's it about?", nextNode: "bookAbout" },
      { label: "Who is it for?", nextNode: "bookAudience" },
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
    options: [
      { label: "I need this for my team", nextNode: "final" },
      { label: "Where can I get it?", nextNode: "bookWhere" },
      { label: "Can you speak about this?", nextNode: "speaking" },
    ],
  },
  bookAudience: {
    ferryMessage:
      "Marketers, founders, anyone building a brand in the digital age who refuses to sacrifice humanity for efficiency.",
    options: [
      { label: "That's me. Let's talk.", nextNode: "final" },
      { label: "Where can I get it?", nextNode: "bookWhere" },
      { label: "What topics do you speak on?", nextNode: "speakingTopics" },
    ],
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

interface ConversationSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConversationSection = ({ isOpen, onClose }: ConversationSectionProps) => {
  const [history, setHistory] = useState<HistoryEntry[]>([{ nodeId: "gate" }]);
  const endRef = useRef<HTMLDivElement>(null);

  const currentNodeId = history[history.length - 1].nodeId;
  const currentNode = conversationTree[currentNodeId];
  const isFinished = currentNode?.isFinal;

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setHistory([{ nodeId: "gate" }]);
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Auto-scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [history]);

  const handleChoice = useCallback(
    (option: { label: string; nextNode: string }) => {
      if (option.nextNode === "__close__") {
        onClose();
        return;
      }
      setHistory((prev) => [
        ...prev.map((entry, i) =>
          i === prev.length - 1 ? { ...entry, visitorChoice: option.label } : entry
        ),
        { nodeId: option.nextNode },
      ]);
    },
    [onClose]
  );

  const handleReset = () => {
    setHistory([{ nodeId: "gate" }]);
  };

  const handleContact = () => {
    window.dispatchEvent(new Event("open-contact"));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-foreground text-background flex flex-col animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2 text-background/50 hover:text-background transition-colors"
        aria-label="Close conversation"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Chat content anchored to bottom */}
      <div className="flex-1 flex flex-col justify-end overflow-y-auto">
        <div className="container px-6 md:px-8 max-w-xl md:max-w-2xl py-16 md:py-24">
          <div className="flex flex-col gap-4">
            {history.map((entry, i) => {
              const node = conversationTree[entry.nodeId];
              if (!node) return null;
              const isLatest = i === history.length - 1;

              return (
                <div key={i} className="flex flex-col gap-3 animate-fade-in">
                  {/* Ferry message */}
                  <div className="self-start max-w-[85%]">
                    <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background/90 text-foreground text-sm md:text-base backdrop-blur-sm">
                      {node.ferryMessage}
                    </div>
                  </div>

                  {/* Visitor's chosen reply */}
                  {entry.visitorChoice && (
                    <div className="self-end max-w-[85%]">
                      <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 text-primary-foreground text-sm md:text-base backdrop-blur-sm">
                        {entry.visitorChoice}
                      </div>
                    </div>
                  )}

                  {/* Active options */}
                  {isLatest && !isFinished && node.options && (
                    <div className="flex flex-wrap justify-end gap-2 mt-1 animate-fade-in">
                      {node.options.map((option) => (
                        <button
                          key={option.nextNode}
                          onClick={() => handleChoice(option)}
                          className="transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                        >
                          <div className="rounded-full px-4 py-2 bg-primary/60 text-primary-foreground text-sm backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary/80 whitespace-nowrap">
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
                <div className="flex gap-4">
                  <button
                    onClick={handleReset}
                    className="text-xs text-background/50 hover:text-background/80 transition-colors"
                  >
                    Start over
                  </button>
                  <button
                    onClick={onClose}
                    className="text-xs text-background/50 hover:text-background/80 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationSection;
