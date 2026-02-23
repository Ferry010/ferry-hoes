import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import SEOHead from "@/components/blog/SEOHead";
import AskFerryBubble from "@/components/AskFerryBubble";
import TypingIndicator from "@/components/conversation/TypingIndicator";
import { conversationPaths, type CTA } from "@/data/conversationPaths";

/* ── Types ── */
type HistoryEntry =
  | { type: "ferry"; text: string }
  | { type: "visitor"; text: string }
  | { type: "options"; options: { label: string; handler: string }[] }
  | { type: "ctas"; branchKey: string }
  | { type: "topicPicker" };

/* ── Small sub-components ── */
const FerryBubble = ({ text }: { text: string }) => (
  <div className="flex justify-start animate-fade-in">
    <div className="max-w-[85%] space-y-1">
      <span className="text-[11px] text-muted-foreground font-medium ml-1">
        Ferry
      </span>
      <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-secondary text-foreground text-sm md:text-base whitespace-pre-line leading-relaxed">
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

const CTAButton = ({ cta, onContact }: { cta: CTA; onContact: () => void }) => {
  if (cta.action === "contact") {
    return (
      <button
        onClick={onContact}
        className="flex items-center gap-2 rounded-xl px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        <MessageCircle className="h-4 w-4" />
        {cta.label}
      </button>
    );
  }
  return (
    <a
      href={cta.href || "#"}
      className="flex items-center gap-2 rounded-xl px-4 py-2.5 border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
    >
      {cta.label}
    </a>
  );
};

/* ── Page ── */
const Conversation = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [phase, setPhase] = useState<Record<string, number>>({});
  const [usedBranches, setUsedBranches] = useState<string[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [interactionStarted, setInteractionStarted] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }), 100);
  }, []);

  useEffect(scrollToBottom, [history, showTyping, scrollToBottom]);

  const openContact = () => window.dispatchEvent(new CustomEvent("open-contact"));

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

  /* ── Handlers ── */

  const handleSelectBranch = (key: string) => {
    setInteractionStarted(true);
    const branch = conversationPaths[key];
    setUsedBranches((prev) => [...prev, key]);
    setPhase((prev) => ({ ...prev, [key]: 1 }));

    setHistory((prev) => [...prev, { type: "visitor", text: branch.label }]);

    const phase1Options = branch.phase1.map((f) => ({
      label: f.question,
      handler: `phase1:${key}:${f.question}`,
    }));

    addWithTyping([
      { type: "ferry", text: branch.response },
      { type: "options", options: phase1Options },
    ]);
  };

  const handlePhase1 = (branchKey: string, question: string) => {
    const branch = conversationPaths[branchKey];
    const followUp = branch.phase1.find((f) => f.question === question);
    if (!followUp) return;

    // Determine if this is an accelerated branch (user already explored another topic)
    const isAccelerated = usedBranches.length > 1;

    setPhase((prev) => ({ ...prev, [branchKey]: 2 }));

    // Remove old options from history
    setHistory((prev) => prev.filter((e) => e.type !== "options"));
    setHistory((prev) => [...prev, { type: "visitor", text: question }]);

    if (isAccelerated) {
      // Accelerated: after phase1 answer, go straight to directional
      const directional = branch.directional;
      addWithTyping([
        { type: "ferry", text: followUp.answer },
        {
          type: "options",
          options: [
            { label: directional.deeperLabel, handler: `deeper:${branchKey}` },
            { label: directional.ctaLabel, handler: `cta:${branchKey}` },
            { label: directional.switchLabel, handler: "switch" },
          ],
        },
      ]);
    } else {
      const phase2Options = branch.phase2.map((f) => ({
        label: f.question,
        handler: `phase2:${branchKey}:${f.question}`,
      }));

      addWithTyping([
        { type: "ferry", text: followUp.answer },
        { type: "options", options: phase2Options },
      ]);
    }
  };

  const handlePhase2 = (branchKey: string, question: string) => {
    const branch = conversationPaths[branchKey];
    const followUp = branch.phase2.find((f) => f.question === question);
    if (!followUp) return;

    setPhase((prev) => ({ ...prev, [branchKey]: 3 }));

    setHistory((prev) => prev.filter((e) => e.type !== "options"));
    setHistory((prev) => [...prev, { type: "visitor", text: question }]);

    const directional = branch.directional;
    addWithTyping([
      { type: "ferry", text: followUp.answer },
      {
        type: "options",
        options: [
          { label: directional.deeperLabel, handler: `deeper:${branchKey}` },
          { label: directional.ctaLabel, handler: `cta:${branchKey}` },
          { label: directional.switchLabel, handler: "switch" },
        ],
      },
    ]);
  };

  const handleDeeper = (branchKey: string) => {
    const branch = conversationPaths[branchKey];
    setHistory((prev) => prev.filter((e) => e.type !== "options"));
    setHistory((prev) => [...prev, { type: "visitor", text: branch.directional.deeperLabel }]);

    addWithTyping([
      { type: "ferry", text: branch.directional.deeperResponse },
      { type: "ctas", branchKey },
    ]);
  };

  const handleCTA = (branchKey: string) => {
    const branch = conversationPaths[branchKey];
    setHistory((prev) => prev.filter((e) => e.type !== "options"));
    setHistory((prev) => [...prev, { type: "visitor", text: branch.directional.ctaLabel }]);

    addWithTyping([
      { type: "ferry", text: branch.directional.ctaResponse },
      { type: "ctas", branchKey },
    ]);
  };

  const handleSwitch = () => {
    setHistory((prev) => prev.filter((e) => e.type !== "options"));

    const remaining = Object.entries(conversationPaths).filter(
      ([key]) => !usedBranches.includes(key)
    );

    if (remaining.length > 0) {
      setHistory((prev) => [
        ...prev,
        { type: "visitor", text: "I'd like to ask something else" },
      ]);
      addWithTyping([
        { type: "ferry", text: "Of course. What are you curious about?" },
        { type: "topicPicker" },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "visitor", text: "I'd like to ask something else" },
      ]);
      addWithTyping([
        {
          type: "ferry",
          text: "We've covered a lot of ground.\nIf something resonated, let's take it further.",
        },
        {
          type: "options",
          options: Object.entries(conversationPaths).map(([key, branch]) => ({
            label: branch.directional.ctaLabel,
            handler: `cta:${key}`,
          })),
        },
      ]);
    }
  };

  const handleOptionClick = (handler: string) => {
    if (handler.startsWith("phase1:")) {
      const [, branchKey, ...rest] = handler.split(":");
      handlePhase1(branchKey, rest.join(":"));
    } else if (handler.startsWith("phase2:")) {
      const [, branchKey, ...rest] = handler.split(":");
      handlePhase2(branchKey, rest.join(":"));
    } else if (handler.startsWith("deeper:")) {
      handleDeeper(handler.split(":")[1]);
    } else if (handler.startsWith("cta:")) {
      handleCTA(handler.split(":")[1]);
    } else if (handler === "switch") {
      handleSwitch();
    } else if (handler.startsWith("branch:")) {
      handleSelectBranch(handler.split(":")[1]);
    }
  };

  /* ── Remaining branches for topic picker ── */
  const remainingBranches = Object.entries(conversationPaths).filter(
    ([key]) => !usedBranches.includes(key)
  );

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
                key={opt.handler}
                label={opt.label}
                onClick={() => handleOptionClick(opt.handler)}
              />
            ))}
          </div>
        );

      case "ctas": {
        const branch = conversationPaths[entry.branchKey];
        return (
          <div key={i} className="flex flex-col gap-3 animate-fade-in">
            <div className="flex flex-wrap gap-2 justify-start">
              {branch.directional.ctas.map((cta) => (
                <CTAButton key={cta.label} cta={cta} onContact={openContact} />
              ))}
            </div>
            <button
              onClick={() => navigate("/")}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors self-start"
            >
              Back to homepage
            </button>
          </div>
        );
      }

      case "topicPicker":
        return (
          <div key={i} className="flex flex-col items-end gap-2 animate-fade-in">
            {remainingBranches.map(([key, branch]) => (
              <OptionButton
                key={key}
                label={branch.label}
                onClick={() => {
                  // Remove topicPicker from history before selecting
                  setHistory((prev) => prev.filter((e) => e.type !== "topicPicker"));
                  handleSelectBranch(key);
                }}
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
        {/* Back to homepage — subtle top-right */}
        <div className="fixed top-6 right-6 z-30">
          <button
            onClick={() => navigate("/")}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to homepage
          </button>
        </div>

        {/* Chat thread */}
        <div className="max-w-xl mx-auto px-6 pt-24 pb-16 space-y-5">
          {/* Intro */}
          <div className="flex justify-center">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              The conversation continues
            </span>
          </div>

          {/* Ferry greeting */}
          <FerryBubble text="I love your curiosity." />

          {/* Initial branch options — disappear once one is picked */}
          {!interactionStarted && (
            <div className="flex flex-col items-end gap-2 animate-fade-in">
              {Object.entries(conversationPaths).map(([key, branch]) => (
                <OptionButton
                  key={key}
                  label={branch.label}
                  onClick={() => handleSelectBranch(key)}
                />
              ))}
            </div>
          )}

          {/* Conversation history */}
          {history.map(renderEntry)}

          {/* Typing indicator */}
          {showTyping && <TypingIndicator />}

          <div ref={endRef} />
        </div>
      </main>

      <AskFerryBubble />
    </>
  );
};

export default Conversation;
