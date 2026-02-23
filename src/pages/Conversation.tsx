import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Send, CheckCircle, ArrowLeft, Home } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import SEOHead from "@/components/blog/SEOHead";
import Footer from "@/components/sections/Footer";
import AskFerryBubble from "@/components/AskFerryBubble";
import ChatBubble from "@/components/conversation/ChatBubble";
import ExchangeThread from "@/components/conversation/ExchangeThread";
import PathOptions from "@/components/conversation/PathOptions";
import { conversationPaths } from "@/data/conversationPaths";

/* ── Contact form schema ── */
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

/* ── Page ── */
const Conversation = () => {
  const navigate = useNavigate();
  const [exploredPaths, setExploredPaths] = useState<string[]>([]);
  const [activePath, setActivePath] = useState<string | null>(null);
  const [completedPaths, setCompletedPaths] = useState<string[]>([]);
  const threadEndRef = useRef<HTMLDivElement>(null);

  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSelectPath = (key: string) => {
    setActivePath(key);
    setExploredPaths((prev) => [...prev, key]);
  };

  // Mark active path as completed after it renders
  useEffect(() => {
    if (activePath && !completedPaths.includes(activePath)) {
      const exchanges = conversationPaths[activePath]?.exchanges || [];
      const totalDelay = exchanges.length * 400 + 600;
      const timer = setTimeout(() => {
        setCompletedPaths((prev) => [...prev, activePath]);
        setActivePath(null);
      }, totalDelay);
      return () => clearTimeout(timer);
    }
  }, [activePath, completedPaths]);

  // Scroll to latest content
  useEffect(() => {
    if (threadEndRef.current) {
      setTimeout(() => {
        threadEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 300);
    }
  }, [activePath, completedPaths]);

  const allExplored = exploredPaths.length === Object.keys(conversationPaths).length;
  const showMoreOptions = !activePath && completedPaths.length > 0 && !allExplored;
  const showContactForm = !activePath && completedPaths.length > 0;

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

          {/* Ferry greeting */}
          <ChatBubble className="flex justify-start" delay={300}>
            <div className="max-w-[85%] space-y-1">
              <span className="text-[11px] text-muted-foreground font-medium ml-1">
                Ferry
              </span>
              <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-secondary text-foreground text-sm md:text-base">
                How cool that you're curious and pressed to continue. What do you want to talk about?
              </div>
            </div>
          </ChatBubble>

          {/* Initial path options (only if no path chosen yet) */}
          {exploredPaths.length === 0 && (
            <PathOptions
              exploredPaths={exploredPaths}
              onSelect={handleSelectPath}
            />
          )}

          {/* Completed path threads */}
          {completedPaths.map((key) => (
            <div key={key} className="space-y-3">
              {/* Show the chosen option as a "sent" message */}
              <ChatBubble className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 backdrop-blur-md text-primary-foreground text-sm md:text-base font-medium">
                  {conversationPaths[key].label}
                </div>
              </ChatBubble>
              <ExchangeThread exchanges={conversationPaths[key].exchanges} />
            </div>
          ))}

          {/* Currently active path (animating in) */}
          {activePath && (
            <div className="space-y-3">
              <ChatBubble className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 backdrop-blur-md text-primary-foreground text-sm md:text-base font-medium">
                  {conversationPaths[activePath].label}
                </div>
              </ChatBubble>
              <ExchangeThread exchanges={conversationPaths[activePath].exchanges} />
            </div>
          )}

          {/* More options after a path completes */}
          {showMoreOptions && (
            <PathOptions
              exploredPaths={exploredPaths}
              onSelect={handleSelectPath}
              prompt="What else do you want to know?"
            />
          )}

          {/* All explored — closing the loop */}
          {allExplored && !activePath && (
            <ChatBubble className="flex justify-start">
              <div className="max-w-[85%] space-y-1">
                <span className="text-[11px] text-muted-foreground font-medium ml-1">
                  Ferry
                </span>
                <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-secondary text-foreground text-sm md:text-base">
                  That's the full tour! Want to head back and explore the site, or drop me a message below?
                </div>
              </div>
            </ChatBubble>
          )}

          {/* Back to homepage CTA */}
          {showContactForm && (
            <ChatBubble>
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mx-auto"
              >
                <Home className="h-4 w-4" />
                Back to the homepage
              </button>
            </ChatBubble>
          )}

          {/* Inline contact form */}
          {showContactForm && (
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
                    <button
                      onClick={() => navigate("/")}
                      className="mt-2 flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <Home className="h-4 w-4" />
                      Back to the homepage
                    </button>
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
          )}

          <div ref={threadEndRef} />
        </div>

        <Footer />
      </main>

      <AskFerryBubble />
    </>
  );
};

export default Conversation;
