import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * The Letter — newsletter only. No Discord on the homepage.
 */
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
    <section id="the-letter" className="bg-background py-24 md:py-32">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={revealRef} className="scroll-reveal max-w-3xl">
          <Eyebrow>The Letter</Eyebrow>

          <h2
            className="font-display font-bold text-foreground leading-[1.02]"
            style={{ fontSize: "clamp(36px, 5.4vw, 80px)" }}
          >
            A short letter. Once a <span className="text-primary">month</span>
            <Period />
          </h2>

          <p className="mt-7 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-xl">
            No fluff. Unsubscribe in one click.
          </p>

          <div className="mt-10 max-w-lg">
            {status === "success" ? (
              <p className="inline-flex items-center gap-2 text-base text-primary font-medium">
                <CheckCircle className="h-5 w-5" />
                Got it. Ferry will write to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base bg-background border-foreground/20"
                />
                <PillButton
                  type="submit"
                  disabled={status === "loading"}
                  variant="primary"
                  arrow={false}
                >
                  {status === "loading" ? "..." : "Join the letter"}
                </PillButton>
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
