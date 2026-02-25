import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/blog/SEOHead";
import TypingIndicator from "@/components/conversation/TypingIndicator";
import { conversationNodes, type ConversationOption } from "@/data/conversationPaths";

/* ── Types ── */
type HistoryEntry =
  | { type: "ferry"; text: string }
  | { type: "visitor"; text: string }
  | { type: "options"; options: ConversationOption[] };

/* ── Linkify helper ── */
const linkify = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const parts = text.split(urlRegex);

  return parts.map((part, i) => {
    if (part.match(/^https?:\/\//)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-primary transition-colors break-all"
        >
          {part}
        </a>
      );
    }
    if (part.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      return (
        <a
          key={i}
          href={`mailto:${part}`}
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

/* ── Sub-components ── */
const FerryBubble = ({ text }: { text: string }) => (
  <div className="flex justify-start animate-fade-in">
    <div className="max-w-[85%] space-y-1">
      <span className="text-[11px] text-muted-foreground font-medium ml-1">
        Ferry
      </span>
      <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-secondary text-foreground text-sm md:text-base leading-relaxed">
        {linkify(text)}
      </div>
    </div>
  </div>
);

const VisitorBubble = ({ text }: { text: string }) => (
  <div className="flex justify-end animate-fade-in">
    <div className="max-w-[80%] rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 backdrop-blur-md text-primary-foreground text-sm md:text-base font-medium">
      {text}
    </div>
  </div>
);

const OptionButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="max-w-[80%] text-left rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/20 border border-primary/30 text-foreground text-sm md:text-base font-medium hover:bg-primary/30 hover:border-primary/50 transition-all duration-200 cursor-pointer"
  >
    {label}
  </button>
);

/* ── Page ── */
const Conversation = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [interactionStarted, setInteractionStarted] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    setTimeout(
      () => endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }),
      100
    );
  }, []);

  useEffect(scrollToBottom, [history, showTyping, scrollToBottom]);

  const addWithTyping = useCallback(
    (entries: HistoryEntry[]) => {
      setShowTyping(true);
      scrollToBottom();

      let delay = 600 + Math.random() * 400;

      entries.forEach((entry, idx) => {
        setTimeout(() => {
          setHistory((prev) => [...prev, entry]);
          scrollToBottom();

          const isLast = idx === entries.length - 1;
          const nextIsFerry = !isLast && entries[idx + 1].type === "ferry";

          if (nextIsFerry) {
            setShowTyping(true);
          } else if (isLast) {
            setShowTyping(false);
          } else {
            setShowTyping(false);
          }
        }, delay);

        delay += entry.type === "ferry" ? 600 + Math.random() * 400 : 100;
      });
    },
    [scrollToBottom]
  );

  /* ── Handle option click ── */
  const handleSelect = useCallback(
    (label: string, nodeKey: string) => {
      setInteractionStarted(true);

      // Remove current options, add visitor bubble
      setHistory((prev) => [
        ...prev.filter((e) => e.type !== "options"),
        { type: "visitor", text: label },
      ]);

      const node = conversationNodes[nodeKey];
      if (!node) return;

      const responses = Array.isArray(node.response) ? node.response : [node.response];
      const entries: HistoryEntry[] = responses.map((text) => ({
        type: "ferry" as const,
        text,
      }));

      if (node.options) {
        entries.push({ type: "options", options: node.options });
      }

      addWithTyping(entries);
    },
    [addWithTyping]
  );

  const rootNode = conversationNodes.root;

  const renderEntry = (entry: HistoryEntry, i: number) => {
    switch (entry.type) {
      case "ferry":
        return <FerryBubble key={i} text={entry.text} />;
      case "visitor":
        return <VisitorBubble key={i} text={entry.text} />;
      case "options":
        return (
          <div key={i} className="flex flex-col items-end gap-2 animate-fade-in">
            {entry.options.map((opt) => (
              <OptionButton
                key={opt.nodeKey}
                label={opt.label}
                onClick={() => handleSelect(opt.label, opt.nodeKey)}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEOHead
        title="Continue the conversation"
        description="A deeper look at Ferry Hoes, Brand Humanizing, and what makes brands feel human."
      />
      <meta name="robots" content="noindex, nofollow" />

      <main className="min-h-screen bg-background">
        <div className="fixed top-6 right-6 z-30">
          <button
            onClick={() => navigate("/")}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to homepage
          </button>
        </div>

        <div className="max-w-xl mx-auto px-6 pt-24 pb-16 space-y-5">
          <FerryBubble text={rootNode.response as string} />

          {!interactionStarted && rootNode.options && (
            <div className="flex flex-col items-end gap-2 animate-fade-in">
              {rootNode.options.map((opt) => (
                <OptionButton
                  key={opt.nodeKey}
                  label={opt.label}
                  onClick={() => handleSelect(opt.label, opt.nodeKey)}
                />
              ))}
            </div>
          )}

          {history.map(renderEntry)}

          {showTyping && <TypingIndicator />}

          <div ref={endRef} />
        </div>
      </main>
    </>
  );
};

export default Conversation;
