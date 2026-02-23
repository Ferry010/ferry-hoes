import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Send, CheckCircle, ArrowLeft } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import SEOHead from "@/components/blog/SEOHead";
import Footer from "@/components/sections/Footer";
import AskFerryBubble from "@/components/AskFerryBubble";

/* ── Conversation data ── */
const conversation = [
  {
    visitor: "So what do you actually do?",
    ferry:
      "I help brands become more human. Not in a fluffy way — in a strategic, measurable way. I call it Brand Humanizing.",
  },
  {
    visitor: "What does that even mean?",
    ferry:
      "Most brands talk at people. Brand Humanizing flips that — it's about building real connections. It means showing up with empathy, personality, and consistency across every touchpoint. The brands that feel human are the ones people trust, buy from, and stay loyal to.",
  },
  {
    visitor: "How did you get into this?",
    ferry:
      "I spent years in marketing and brand strategy, watching companies pour budgets into campaigns that felt hollow. I kept asking: why don't brands just... act like people? That question became a framework, the framework became a book, and the book became a movement.",
  },
  {
    visitor: "Do you speak at events?",
    ferry:
      "All the time — from intimate leadership offsites to 2,000+ person conferences. My keynotes cover AI & People, the Future of Work, Digital Transformation, and Leadership. But honestly, my favourite part is when the audience pushes back and we get a real conversation going.",
  },
  {
    visitor: "What's the book about?",
    ferry:
      "It's called Brand Humanizing. Think of it as a practical guide for anyone who wants their brand to feel less corporate and more human. It's packed with frameworks, real examples, and the occasional uncomfortable truth about why most branding falls flat.",
  },
  {
    visitor: "How do you see AI changing things?",
    ferry:
      "AI makes it easier than ever to produce content — and harder than ever to stand out. The brands that win won't be the ones using AI the fastest; they'll be the ones that stay the most human while everyone else automates their personality away.",
  },
  {
    visitor: "Can I book you?",
    ferry: "Absolutely. Drop me a message right here 👇",
  },
];

/* ── Contact form schema ── */
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

/* ── Animated bubble wrapper ── */
const ChatBubble = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6",
        className
      )}
    >
      {children}
    </div>
  );
};

/* ── Page ── */
const Conversation = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = contactSchema.safeParse({ name, email, message });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);
    const { error } = await supabase
      .from("contact_messages")
      .insert({ name: result.data.name, email: result.data.email, message: result.data.message });
    setIsSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setIsSent(true);
  };

  return (
    <>
      <SEOHead
        title="Continue the conversation"
        description="A deeper look at Ferry Hoes, Brand Humanizing, and what makes brands feel human."
      />
      {/* noindex */}
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
        <div className="max-w-xl mx-auto px-6 pt-24 pb-16 space-y-6">
          {/* Intro label */}
          <ChatBubble className="flex justify-center">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              The conversation continues
            </span>
          </ChatBubble>

          {conversation.map((pair, i) => (
            <div key={i} className="space-y-3">
              {/* Visitor bubble */}
              <ChatBubble className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 backdrop-blur-md text-primary-foreground text-sm md:text-base font-medium">
                  {pair.visitor}
                </div>
              </ChatBubble>

              {/* Ferry bubble */}
              <ChatBubble className="flex justify-start">
                <div className="max-w-[85%] space-y-1">
                  <span className="text-[11px] text-muted-foreground font-medium ml-1">
                    Ferry
                  </span>
                  <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-secondary text-foreground text-sm md:text-base">
                    {pair.ferry}
                  </div>
                </div>
              </ChatBubble>
            </div>
          ))}

          {/* Inline contact form */}
          <ChatBubble>
            <div className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
              {isSent ? (
                <div className="flex flex-col items-center py-8 gap-3 animate-fade-in">
                  <CheckCircle className="h-10 w-10 text-primary" />
                  <p className="font-display font-semibold text-foreground">
                    Message sent!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-background border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50",
                        errors.name ? "border-destructive" : "border-border"
                      )}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-background border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50",
                        errors.email ? "border-destructive" : "border-border"
                      )}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <textarea
                      placeholder="Your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isSubmitting}
                      rows={4}
                      className={cn(
                        "w-full bg-background border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50 resize-none",
                        errors.message ? "border-destructive" : "border-border"
                      )}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-2.5 text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </form>
              )}
            </div>
          </ChatBubble>
        </div>

        <Footer />
      </main>

      <AskFerryBubble />
    </>
  );
};

export default Conversation;
