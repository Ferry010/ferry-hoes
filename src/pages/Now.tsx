import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import SEOHead from "@/components/blog/SEOHead";
import TypingIndicator from "@/components/conversation/TypingIndicator";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";

/* ── types ── */
type HistoryEntry =
  | { type: "ferry"; text: string }
  | { type: "visitor"; text: string }
  | { type: "options"; options: OptionDef[] }
  | { type: "cta-button"; label: string; href: string };

interface OptionDef {
  label: string;
  key: string;
}

interface NowData {
  next_gig: string | null;
  working_on: string | null;
  currently_reading: string | null;
  latest_podcast_guest: string | null;
  thinking_about: string | null;
  last_updated: string | null;
}

/* ── helpers ── */
const getTypingDuration = (text: string) => {
  const base = 700;
  const perChar = 35;
  const jitter = Math.random() * 300 - 150;
  return Math.min(base + text.length * perChar + jitter, 1800);
};

const SPEAKERS_ACADEMY_URL =
  "https://www.speakersacademy.com/en/speaker/ferry-hoes/?form=request-quote";

const OPENER_BUBBLES = [
  "Hey. Glad you found this page.",
  "Most people don't.",
  "This is where I share what's actually going on. Right now.",
  "What do you want to know?",
];

const ROOT_OPTIONS: OptionDef[] = [
  { label: "Where are you speaking next?", key: "next_gig" },
  { label: "What are you working on?", key: "working_on" },
  { label: "What are you reading?", key: "currently_reading" },
];

const FOLLOWUP_OPTIONS: OptionDef[] = [
  { label: "What are you thinking about lately?", key: "thinking_about" },
  { label: "Who was your last podcast guest?", key: "latest_podcast_guest" },
  { label: "Can I book you to speak?", key: "cta_book" },
];

const FIELD_MAP: Record<string, keyof NowData> = {
  next_gig: "next_gig",
  working_on: "working_on",
  currently_reading: "currently_reading",
  thinking_about: "thinking_about",
  latest_podcast_guest: "latest_podcast_guest",
};

/* ── sub-components ── */
const FerryBubble = ({ text }: { text: string }) => (
  <div className="flex justify-start animate-fade-in">
    <div className="max-w-[85%] space-y-1">
      <span className="text-[11px] text-muted-foreground font-medium ml-1">Ferry</span>
      <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-secondary text-foreground text-sm md:text-base leading-relaxed">
        <p className="whitespace-pre-line">{text}</p>
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
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="max-w-[80%] text-left rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/20 border border-primary/30 text-foreground text-sm md:text-base font-medium hover:bg-primary/30 hover:border-primary/50 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {label}
  </button>
);

const CtaBalloon = ({ label, href }: { label: string; href: string }) => (
  <div className="flex justify-start">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-2xl rounded-bl-md px-5 py-3 bg-primary text-primary-foreground font-medium text-[15px] hover:opacity-90 transition-opacity"
    >
      {label}
    </a>
  </div>
);

/* ── main component ── */
const Now = () => {
  const navigate = useNavigate();
  const [nowData, setNowData] = useState<NowData | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [typing, setTyping] = useState(false);
  const [openerDone, setOpenerDone] = useState(false);
  const [askedKeys, setAskedKeys] = useState<Set<string>>(new Set());
  const [opacity, setOpacity] = useState(1);
  const [exiting, setExiting] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 80);
  }, []);

  /* fetch data */
  useEffect(() => {
    supabase
      .from("now_page")
      .select("next_gig, working_on, currently_reading, latest_podcast_guest, thinking_about, last_updated")
      .maybeSingle()
      .then(({ data }) => {
        if (data) setNowData(data as NowData);
      });
  }, []);

  /* opener sequence */
  useEffect(() => {
    if (openerDone) return;
    let cancelled = false;
    const run = async () => {
      for (const bubble of OPENER_BUBBLES) {
        if (cancelled) return;
        setTyping(true);
        scrollToBottom();
        await new Promise((r) => setTimeout(r, getTypingDuration(bubble)));
        if (cancelled) return;
        setTyping(false);
        setHistory((h) => [...h, { type: "ferry", text: bubble }]);
        scrollToBottom();
        await new Promise((r) => setTimeout(r, 300));
      }
      if (!cancelled) {
        setHistory((h) => [...h, { type: "options", options: ROOT_OPTIONS }]);
        scrollToBottom();
        setOpenerDone(true);
      }
    };
    run();
    return () => { cancelled = true; };
  }, [openerDone, scrollToBottom]);

  /* add entries with typing */
  const addWithTyping = useCallback(
    async (entries: HistoryEntry[]) => {
      for (const entry of entries) {
        if (entry.type === "ferry") {
          setTyping(true);
          scrollToBottom();
          await new Promise((r) => setTimeout(r, getTypingDuration(entry.text)));
          setTyping(false);
          setHistory((h) => [...h, entry]);
          scrollToBottom();
          await new Promise((r) => setTimeout(r, 300));
        } else {
          setHistory((h) => [...h, entry]);
          scrollToBottom();
        }
      }
    },
    [scrollToBottom]
  );

  /* handle option select */
  const handleSelect = useCallback(
    async (option: OptionDef) => {
      if (typing || exiting) return;

      // Add visitor bubble
      setHistory((h) => [...h, { type: "visitor", text: option.label }]);
      scrollToBottom();

      const newAsked = new Set(askedKeys);
      newAsked.add(option.key);
      setAskedKeys(newAsked);

      await new Promise((r) => setTimeout(r, 400));

      if (option.key === "cta_book") {
        await addWithTyping([
          { type: "ferry", text: "I'd love that." },
          { type: "ferry", text: "My agent at Speakers Academy handles all bookings. They'll sort you out." },
          { type: "cta-button", label: "Get in touch with my agent", href: SPEAKERS_ACADEMY_URL },
        ]);
        return;
      }

      // Get content from data
      const fieldKey = FIELD_MAP[option.key];
      const content = fieldKey && nowData ? nowData[fieldKey] : null;
      const responseText = content && content.trim()
        ? content
        : "I haven't updated that one yet. Ask me something else.";

      // Build follow-up options (exclude already asked)
      const allFollowups = [...ROOT_OPTIONS, ...FOLLOWUP_OPTIONS];
      const remaining = allFollowups.filter((o) => !newAsked.has(o.key));

      const entries: HistoryEntry[] = [{ type: "ferry", text: responseText }];
      if (remaining.length > 0) {
        entries.push({ type: "options", options: remaining });
      }

      await addWithTyping(entries);
    },
    [typing, exiting, askedKeys, nowData, addWithTyping, scrollToBottom]
  );

  /* exit */
  const handleExit = useCallback(async () => {
    if (exiting) return;
    setExiting(true);
    await addWithTyping([
      { type: "ferry", text: "Fair enough." },
    ]);
    await new Promise((r) => setTimeout(r, 1200));
    await addWithTyping([
      { type: "ferry", text: "Thanks for the chat." },
    ]);
    await new Promise((r) => setTimeout(r, 1500));
    setOpacity(0);
    await new Promise((r) => setTimeout(r, 300));
    navigate("/");
  }, [exiting, addWithTyping, navigate]);

  /* render entry */
  const renderEntry = (entry: HistoryEntry, i: number) => {
    switch (entry.type) {
      case "ferry":
        return <FerryBubble key={i} text={entry.text} />;
      case "visitor":
        return <VisitorBubble key={i} text={entry.text} />;
      case "options":
        return (
          <div key={i} className="flex flex-col gap-2 pl-1">
            {entry.options.map((o) => (
              <OptionButton key={o.key} label={o.label} onClick={() => handleSelect(o)} />
            ))}
          </div>
        );
      case "cta-button":
        return <CtaBalloon key={i} label={entry.label} href={entry.href} />;
      default:
        return null;
    }
  };

  return (
    <>
      <SEOHead
        title="Now — Ferry Hoes"
        description="What Ferry Hoes is up to right now — speaking, projects, reading, and creative work."
        canonicalUrl="/now"
      />
      <div
        className="min-h-screen bg-background flex flex-col transition-opacity duration-300"
        style={{ opacity }}
      >
        {/* back link */}
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={handleExit}
            className="text-sm font-medium text-primary hover:underline"
          >
            Back to homepage
          </button>
        </div>

        {/* chat area */}
        <div className="flex-1 flex flex-col justify-end px-4 sm:px-6 pb-6 pt-16 max-w-xl mx-auto w-full">
          <div className="space-y-4">
            {history.map(renderEntry)}
            {typing && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* last updated */}
        {nowData?.last_updated && (
          <div className="text-center pb-6">
            <p className="text-xs text-muted-foreground">
              Last updated {format(parseISO(nowData.last_updated), "MMMM d, yyyy")}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Now;
