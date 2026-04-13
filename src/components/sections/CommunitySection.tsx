import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionLabel from "@/components/SectionLabel";

const DISCORD_URL = "https://discord.gg/BfZrw5wJ";

const CommunitySection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const revealRef = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    const { error } = await supabase.from("email_subscribers" as any).insert({
      email: email.trim(),
      source: "newsletter",
    } as any);
    if (error && !error.message.includes("duplicate")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="community" className="py-24 md:py-32 bg-[hsl(25,15%,13%)] text-white">
      <div className="container px-6 md:px-8">
        <div ref={revealRef} className="scroll-reveal max-w-4xl mx-auto">
          <div className="flex justify-center">
            <SectionLabel text="Stay Connected" center />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Stay connected
            <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
          </h2>
          <p className="text-lg text-[hsl(38,30%,82%)] text-center mb-14 max-w-xl mx-auto">
            Get insights on technology, humanity, and Brand Humanizing. Or join the conversation directly.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Email signup */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-[hsl(38,30%,88%)]">Newsletter</span>
              </div>
              <p className="text-[hsl(38,30%,82%)] text-sm mb-4">
                No noise. Just the ideas that matter, straight to your inbox.
              </p>
              {status === "success" ? (
                <div className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <CheckCircle className="h-4 w-4" />
                  You're in. Talk soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    size="sm"
                    className="shrink-0 px-5"
                  >
                    {status === "loading" ? "..." : "Subscribe"}
                  </Button>
                </form>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 mt-2">Something went wrong. Try again.</p>
              )}
            </div>

            {/* Discord */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span className="text-sm font-medium text-[hsl(38,30%,88%)]">Community</span>
              </div>
              <p className="text-[hsl(38,30%,82%)] text-sm mb-4">
                Join a growing group of builders, thinkers, and doers shaping the future of work.
              </p>
              <Button asChild variant="outline" size="sm" className="w-fit group border-white/20 text-white hover:bg-white/10">
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                  Join the Discord
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
