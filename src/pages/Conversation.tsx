import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/blog/SEOHead";
import TypingIndicator from "@/components/conversation/TypingIndicator";
import { conversationNodes, type ConversationOption } from "@/data/conversationPaths";

/* ── Types ── */
type HistoryEntry =
  | { type: "ferry"; text: string }
  | { type: "visitor"; text: string }
  | { type: "options"; options: ConversationOption[] }
  | { type: "cta-button"; label: string; href: string };

/* ── Helpers ── */
const getTypingDuration = (text: string) => {
  const base = 700 + text.length * 35;
  const jitter = (Math.random() - 0.5) * 300;
  return Math.min(base + jitter, 1800);
};

/* ── Sub-components ── */
const FerryBubble = ({ text }: { text: string }) => (
  <div className="flex justify-start animate-fade-in">
    <div className="max-w-[85%] space-y-1">
      <span className="text-[11px] text-muted-foreground font-medium ml-1">Ferry</span>
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

const OptionButton = ({ label, onClick, disabled }: { label: string; onClick: () => void; disabled?: boolean }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="max-w-[80%] text-left rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/20 border border-primary/30 text-foreground text-sm md:text-base font-medium hover:bg-primary/30 hover:border-primary/50 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {label}
  </button>
);

const CtaBalloon = ({ label, href }: { label: string; href: string }) => (
  <div className="flex justify-start animate-fade-in">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-2xl rounded-bl-md px-5 py-3 bg-primary text-primary-foreground font-medium text-sm md:text-base hover:brightness-105 transition-all active:scale-[0.98]"
    >
      {label}
    </a>
  </div>
);

/* ── Opening config ── */
const OPENER_BUBBLES = [
  "Hey. I'm glad you clicked.",
  "Most people just scroll.",
  "You didn't.",
  "So now I'm curious. Where should we start?",
];

const OPENER_SCHEDULE = [
  { showTypingAt: 200, showBubbleAt: 1100 },
  { showTypingAt: 1900, showBubbleAt: 3100 },
  { showTypingAt: 4000, showBubbleAt: 5400 },
  { showTypingAt: 6400, showBubbleAt: 7700 },
];
const OPTIONS_APPEAR_AT = 8300;

const ROOT_OPTIONS: ConversationOption[] = [
  { label: "How did you end up here?", nodeKey: "story" },
  { label: "What do you actually do?", nodeKey: "work" },
];

/* ── Page ── */
const Conversation = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [interactionStarted, setInteractionStarted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [pageOpacity, setPageOpacity] = useState(1);
  const [openerBubbles, setOpenerBubbles] = useState<string[]>([]);
  const [showRootOptions, setShowRootOptions] = useState(false);
  const nudgeRef = useRef<{ level1: boolean; level2: boolean }>({ level1: false, level2: false });
  const endRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    setTimeout(
      () => endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }),
      80
    );
  }, []);

  useEffect(scrollToBottom, [history, showTyping, scrollToBottom, openerBubbles, showRootOptions]);

  /* ── Cinematic opener ── */
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    OPENER_SCHEDULE.forEach((sched, i) => {
      timers.push(setTimeout(() => setShowTyping(true), sched.showTypingAt));
      timers.push(setTimeout(() => {
        setShowTyping(false);
        setOpenerBubbles(prev => [...prev, OPENER_BUBBLES[i]]);
      }, sched.showBubbleAt));
    });

    timers.push(setTimeout(() => setShowRootOptions(true), OPTIONS_APPEAR_AT));

    return () => timers.forEach(clearTimeout);
  }, []);

  /* ── Idle nudge system ── */
  useEffect(() => {
    if (!interactionStarted || isExiting) return;

    const lastEntry = history[history.length - 1];
    if (!lastEntry || lastEntry.type !== "options") return;

    // Reset nudge tracking for new decision moment
    nudgeRef.current = { level1: false, level2: false };

    const t1 = setTimeout(() => {
      if (nudgeRef.current.level1) return;
      nudgeRef.current.level1 = true;
      setShowTyping(true);
      setTimeout(() => {
        setShowTyping(false);
        setHistory(prev => {
          const lastIsOptions = prev[prev.length - 1]?.type === "options";
          if (!lastIsOptions) return prev;
          const optionsEntry = prev[prev.length - 1];
          return [...prev.slice(0, -1), { type: "ferry" as const, text: "No rush." }, optionsEntry];
        });
      }, getTypingDuration("No rush."));
    }, 15000);

    const t2 = setTimeout(() => {
      if (nudgeRef.current.level2) return;
      nudgeRef.current.level2 = true;
      setShowTyping(true);
      setTimeout(() => {
        setShowTyping(false);
        setHistory(prev => {
          const lastIsOptions = prev[prev.length - 1]?.type === "options";
          if (!lastIsOptions) return prev;
          const optionsEntry = prev[prev.length - 1];
          return [
            ...prev.slice(0, -1),
            { type: "ferry" as const, text: "Still here?" },
            { type: "ferry" as const, text: "You can head back anytime." },
            optionsEntry,
          ];
        });
      }, getTypingDuration("Still here?"));
    }, 30000);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [history, interactionStarted, isExiting]);

  /* ── Add entries with realistic typing ── */
  const addWithTyping = useCallback(
    (entries: HistoryEntry[]) => {
      setShowTyping(true);
      scrollToBottom();

      let delay = 0;

      entries.forEach((entry, idx) => {
        const typeDur = entry.type === "ferry" ? getTypingDuration(entry.text) : 100;

        // Show typing indicator for ferry bubbles
        if (entry.type === "ferry" && idx > 0) {
          setTimeout(() => setShowTyping(true), delay);
          delay += typeDur;
        } else if (entry.type === "ferry" && idx === 0) {
          delay += typeDur;
        } else {
          // options / cta-button appear quickly
        }

        setTimeout(() => {
          setHistory(prev => [...prev, entry]);
          scrollToBottom();

          const isLast = idx === entries.length - 1;
          const nextIsFerry = !isLast && entries[idx + 1]?.type === "ferry";

          if (!nextIsFerry) {
            setShowTyping(false);
          }
        }, delay);

        if (entry.type !== "ferry") {
          delay += 100;
        }
      });
    },
    [scrollToBottom]
  );

  /* ── Handle option click ── */
  const handleSelect = useCallback(
    (label: string, nodeKey: string) => {
      if (isExiting) return;
      setInteractionStarted(true);

      setHistory(prev => [
        ...prev.filter(e => e.type !== "options"),
        { type: "visitor", text: label },
      ]);

      const node = conversationNodes[nodeKey];
      if (!node) return;

      const responses = Array.isArray(node.response) ? node.response : [node.response];
      const entries: HistoryEntry[] = responses.map(text => ({
        type: "ferry" as const,
        text,
      }));

      if (node.ctaButton) {
        entries.push({ type: "cta-button", label: node.ctaButton.label, href: node.ctaButton.href });
      }

      if (node.options) {
        entries.push({ type: "options", options: node.options });
      }

      addWithTyping(entries);
    },
    [addWithTyping, isExiting]
  );

  /* ── Exit sequence ── */
  const handleExit = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);

    // Remove any current options
    setHistory(prev => prev.filter(e => e.type !== "options"));

    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      setHistory(prev => [...prev, { type: "ferry", text: "Fair enough." }]);

      setTimeout(() => {
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          setHistory(prev => [...prev, { type: "ferry", text: "Thanks for the chat." }]);

          setTimeout(() => {
            setPageOpacity(0);
            setTimeout(() => navigate("/"), 300);
          }, 600);
        }, 900);
      }, 400);
    }, 600);
  }, [isExiting, navigate]);

  /* ── Render ── */
  const renderEntry = (entry: HistoryEntry, i: number) => {
    switch (entry.type) {
      case "ferry":
        return <FerryBubble key={i} text={entry.text} />;
      case "visitor":
        return <VisitorBubble key={i} text={entry.text} />;
      case "cta-button":
        return <CtaBalloon key={i} label={entry.label} href={entry.href} />;
      case "options":
        return (
          <div key={i} className="flex flex-col items-end gap-2 animate-fade-in">
            {entry.options.map(opt => (
              <OptionButton
                key={opt.nodeKey}
                label={opt.label}
                onClick={() => handleSelect(opt.label, opt.nodeKey)}
                disabled={isExiting}
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

      <main
        className="min-h-screen bg-background transition-opacity duration-300"
        style={{ opacity: pageOpacity }}
      >
        <div className="max-w-xl mx-auto px-6 pt-24 pb-28 space-y-5">
          {/* Cinematic opener bubbles */}
          {openerBubbles.map((text, i) => (
            <FerryBubble key={`opener-${i}`} text={text} />
          ))}

          {/* Root options */}
          {showRootOptions && !interactionStarted && (
            <div className="flex flex-col items-end gap-2 animate-fade-in">
              {ROOT_OPTIONS.map(opt => (
                <OptionButton
                  key={opt.nodeKey}
                  label={opt.label}
                  onClick={() => handleSelect(opt.label, opt.nodeKey)}
                  disabled={isExiting}
                />
              ))}
            </div>
          )}

          {history.map(renderEntry)}

          {showTyping && <TypingIndicator />}

          <div ref={endRef} />
        </div>

        {/* Persistent bottom button */}
        <div className="fixed bottom-6 left-0 right-0 flex justify-center z-30 pointer-events-none">
          <button
            onClick={handleExit}
            disabled={isExiting}
            className="pointer-events-auto px-5 py-2.5 rounded-full bg-secondary text-muted-foreground text-sm font-medium hover:brightness-[1.03] active:scale-[0.97] transition-all duration-120 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back to homepage
          </button>
        </div>
      </main>
    </>
  );
};

export default Conversation;
