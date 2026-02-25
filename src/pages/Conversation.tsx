import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/blog/SEOHead";
import TypingIndicator from "@/components/conversation/TypingIndicator";
import { conversationNodes, type CTA, type ConversationOption } from "@/data/conversationPaths";

/* ── Types ── */
type HistoryEntry =
  | { type: "ferry"; text: string }
  | { type: "visitor"; text: string }
  | { type: "options"; options: ConversationOption[] };

/* ── Sub-components ── */
const FerryBubble = ({ text }: { text: string }) => (
  <div className="flex justify-start animate-fade-in">
    <div className="max-w-[85%] space-y-1">
      <span className="text-[11px] text-muted-foreground font-medium ml-1">
        Ferry
      </span>
      <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-secondary text-foreground text-sm md:text-base leading-relaxed">
        {text}
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

/* ── Persistent CTA Bar ── */
const CTABar = ({ ctas }: { ctas: CTA[] }) => {
  if (ctas.length === 0) return null;

  // Deduplicate by label
  const unique = ctas.filter(
    (cta, i, arr) => arr.findIndex((c) => c.label === cta.label) === i
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-xl mx-auto px-6 py-4 flex flex-wrap gap-2 justify-center">
        {unique.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            target={cta.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="rounded-xl px-4 py-2.5 border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            {cta.label}
          </a>
        ))}
      </div>
    </div>
  );
};

/* ── Page ── */
const Conversation = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [persistentCtas, setPersistentCtas] = useState<CTA[]>([]);
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
    (entries: HistoryEntry[], callback?: () => void) => {
      setShowTyping(true);
      scrollToBottom();
      setTimeout(() => {
        setShowTyping(false);
        setHistory((prev) => [...prev, ...entries]);
        callback?.();
      }, 800);
    },
    [scrollToBottom]
  );

  /* ── Handle option click ── */
  const handleSelect = useCallback(
    (label: string, nodeKey: string) => {
      setInteractionStarted(true);

      // Remove current options from history, add visitor bubble
      setHistory((prev) => [
        ...prev.filter((e) => e.type !== "options"),
        { type: "visitor", text: label },
      ]);

      const node = conversationNodes[nodeKey];
      if (!node) return;

      const entries: HistoryEntry[] = [{ type: "ferry", text: node.response }];

      // If node has ctaIntro, add it
      if (node.ctaIntro) {
        entries.push({ type: "ferry", text: node.ctaIntro });
      }

      // If node has regular options, show them
      if (node.options) {
        entries.push({ type: "options", options: node.options });
      }

      // If node has continuation options (shown after CTA), show those
      if (node.continuationOptions) {
        entries.push({ type: "options", options: node.continuationOptions });
      }

      addWithTyping(entries, () => {
        // Add CTAs to persistent bar after entries render
        if (node.ctas) {
          setPersistentCtas((prev) => [...prev, ...node.ctas!]);
        }
      });
    },
    [addWithTyping]
  );

  /* ── Initial options from root ── */
  const rootNode = conversationNodes.root;

  /* ── Render ── */
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

  const hasCtas = persistentCtas.length > 0;

  return (
    <>
      <SEOHead
        title="Continue the conversation"
        description="A deeper look at Ferry Hoes, Brand Humanizing, and what makes brands feel human."
      />
      <meta name="robots" content="noindex, nofollow" />

      <main className="min-h-screen bg-background">
        {/* Back to homepage */}
        <div className="fixed top-6 right-6 z-30">
          <button
            onClick={() => navigate("/")}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to homepage
          </button>
        </div>

        {/* Chat thread */}
        <div
          className="max-w-xl mx-auto px-6 pt-24 space-y-5"
          style={{ paddingBottom: hasCtas ? "8rem" : "4rem" }}
        >
          {/* Opening bubble */}
          <FerryBubble text={rootNode.response} />

          {/* Initial options */}
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

          {/* History */}
          {history.map(renderEntry)}

          {/* Typing */}
          {showTyping && <TypingIndicator />}

          <div ref={endRef} />
        </div>

        {/* Persistent CTA bar */}
        <CTABar ctas={persistentCtas} />
      </main>
    </>
  );
};

export default Conversation;
