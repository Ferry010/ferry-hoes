import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { Eyebrow } from "@/components/HeadingDot";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/** The Letter — newsletter section on the homepage. */
const CommunitySection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const ref = useScrollReveal();

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
    <section id="the-letter" className="bg-background-alt py-24 md:py-32 border-y border-border">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="scroll-reveal max-w-3xl">
          <Eyebrow>The Letter</Eyebrow>
          <h2
            className="font-display headline-muted text-balance"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500 }}
          >
            A short letter. Once a <strong>month.</strong>
          </h2>
          <p className="mt-6 text-[18px] text-foreground/80 leading-[1.65]">
            No fluff. Unsubscribe in one click.
          </p>

          <div className="mt-9 max-w-lg">
            {status === "success" ? (
              <p className="inline-flex items-center gap-2 text-base text-accent font-medium">
                <CheckCircle className="h-5 w-5" />
                Got it. Ferry will write to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base bg-background border-foreground/30 rounded-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-5 h-12 bg-foreground text-background text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-accent transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "..." : "Join the letter →"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
