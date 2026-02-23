import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, RotateCcw, MessageCircle } from "lucide-react";
import SEOHead from "@/components/blog/SEOHead";
import Footer from "@/components/sections/Footer";
import AskFerryBubble from "@/components/AskFerryBubble";
import TypingIndicator from "@/components/conversation/TypingIndicator";
import { conversationPaths, type CTA } from "@/data/conversationPaths";

/* ── Types ── */
type HistoryEntry =
  | { type: "ferry"; text: string }
  | { type: "visitor"; text: string }
  | { type: "followUpOptions"; branchKey: string }
  | { type: "ctas"; branchKey: string }
  | { type: "branchOptions" };

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
  const [answeredFollowUps, setAnsweredFollowUps] = useState<Record<string, string[]>>({});
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

  const handleSelectBranch = (key: string) => {
    setInteractionStarted(true);
    const branch = conversationPaths[key];
    setUsedBranches((prev) => [...prev, key]);

    // Visitor "sends" the branch label, then Ferry responds
    setHistory((prev) => [...prev, { type: "visitor", text: branch.label }]);
    addWithTyping(
      [
        { type: "ferry", text: branch.response },
        { type: "followUpOptions", branchKey: key },
      ]
    );
  };

  const handleSelectFollowUp = (branchKey: string, question: string) => {
    const branch = conversationPaths[branchKey];
    const followUp = branch.followUps.find((f) => f.question === question);
    if (!followUp) return;

    const newAnswered = [...(answeredFollowUps[branchKey] || []), question];
    setAnsweredFollowUps((prev) => ({ ...prev, [branchKey]: newAnswered }));

    // Remove the old followUpOptions from history, add the Q, then typing -> A + new options
    setHistory((prev) => prev.filter((e) => !(e.type === "followUpOptions" && e.branchKey === branchKey)));
    setHistory((prev) => [...prev, { type: "visitor", text: question }]);

    const remaining = branch.followUps.filter((f) => !newAnswered.includes(f.question));
    const newEntries: HistoryEntry[] = [{ type: "ferry", text: followUp.answer }];

    if (remaining.length > 0) {
      newEntries.push({ type: "followUpOptions", branchKey });
    }
    // Always show CTAs after first follow-up answer
    newEntries.push({ type: "ctas", branchKey });
    newEntries.push({ type: "branchOptions" });

    addWithTyping(newEntries);
  };

  const handleRestart = () => {
    setHistory([]);
    setAnsweredFollowUps({});
    setUsedBranches([]);
    setShowTyping(false);
    setInteractionStarted(false);
  };

  const remainingBranches = Object.entries(conversationPaths).filter(
    ([key]) => !usedBranches.includes(key)
  );

  /* ── Render helpers ── */
  const renderEntry = (entry: HistoryEntry, i: number) => {
    switch (entry.type) {
      case "ferry":
        return <FerryBubble key={i} text={entry.text} />;
      case "visitor":
        return <VisitorBubble key={i} text={entry.text} />;

      case "followUpOptions": {
        const branch = conversationPaths[entry.branchKey];
        const answered = answeredFollowUps[entry.branchKey] || [];
        const remaining = branch.followUps.filter((f) => !answered.includes(f.question));
        if (remaining.length === 0) return null;
        return (
          <div key={i} className="flex flex-col items-end gap-2 animate-fade-in">
            {remaining.map((f) => (
              <OptionButton
                key={f.question}
                label={f.question}
                onClick={() => handleSelectFollowUp(entry.branchKey, f.question)}
              />
            ))}
          </div>
        );
      }

      case "ctas": {
        const branch = conversationPaths[entry.branchKey];
        return (
          <div key={i} className="flex flex-wrap gap-2 justify-start animate-fade-in">
            {branch.ctas.map((cta) => (
              <CTAButton key={cta.label} cta={cta} onContact={openContact} />
            ))}
          </div>
        );
      }

      case "branchOptions":
        return (
          <div key={i} className="flex flex-col gap-2 animate-fade-in pt-2">
            {remainingBranches.length > 0 && (
              <div className="flex flex-col items-end gap-2">
                <span className="text-xs text-muted-foreground mr-1">Another question?</span>
                {remainingBranches.map(([key, branch]) => (
                  <OptionButton key={key} label={branch.label} onClick={() => handleSelectBranch(key)} />
                ))}
              </div>
            )}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Home className="h-4 w-4" />
                Back to homepage
              </button>
              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Restart conversation
              </button>
            </div>
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
        {/* Back button */}
        <div className="fixed top-6 left-6 z-30">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
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

          {/* Initial branch options */}
          {!interactionStarted && (
            <div className="flex flex-col items-end gap-2 animate-fade-in">
              {Object.entries(conversationPaths).map(([key, branch]) => (
                <OptionButton key={key} label={branch.label} onClick={() => handleSelectBranch(key)} />
              ))}
            </div>
          )}

          {/* Conversation history */}
          {history.map(renderEntry)}

          {/* Typing indicator */}
          {showTyping && <TypingIndicator />}

          <div ref={endRef} />
        </div>

        <Footer />
      </main>

      <AskFerryBubble />
    </>
  );
};

export default Conversation;
