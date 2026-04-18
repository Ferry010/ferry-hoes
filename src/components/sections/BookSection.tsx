import { useState } from "react";
import { Eyebrow } from "@/components/HeadingDot";
import ActionButton from "@/components/Button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import bookCover from "@/assets/brand-humanizing-book.jpg";

const BookSection = () => {
  const ref = useScrollReveal();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    const { error } = await supabase
      .from("email_subscribers" as any)
      .insert({ email: email.trim(), source: "english_waitlist" } as any);
    if (error && !error.message.includes("duplicate")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="the-book" className="bg-background-alt py-24 md:py-32 border-y border-border">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="scroll-reveal grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="max-w-sm mx-auto lg:mx-0">
              <img
                src={bookCover}
                alt="Brand Humanizing book by Ferry Hoes and Jonathan Flores"
                className="w-full shadow-soft-lg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>The Book</Eyebrow>
            <h2
              className="font-display headline-muted text-balance"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500 }}
            >
              We wrote the book on it. <strong>Literally.</strong>
            </h2>
            <p className="mt-7 text-[18px] text-foreground/80 leading-[1.7] max-w-[560px]">
              Brand Humanizing — the superpower that makes your brand more human and your business
              grow faster. Co-authored with Jonathan Flores. Featuring case studies from a.s.r.,
              Ben &amp; Jerry's, Dove, Octopus Energy, Patagonia and more.
            </p>

            <div className="mt-8">
              <ActionButton to="/the-book" variant="primary">
                See the book
              </ActionButton>
            </div>

            <div className="mt-10 pt-8 border-t border-border max-w-md">
              <p className="text-[14px] uppercase tracking-[0.14em] text-terracotta font-medium mb-3">
                English edition launching soon
              </p>
              {status === "success" ? (
                <p className="inline-flex items-center gap-2 text-[15px] text-accent font-medium">
                  <CheckCircle className="h-4 w-4" />
                  Got it. You'll hear from Ferry first.
                </p>
              ) : (
                <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-11 text-base bg-background border-foreground/30 rounded-none"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-4 h-11 bg-foreground text-background text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-accent transition-colors disabled:opacity-50"
                  >
                    {status === "loading" ? "..." : "Join waitlist"}
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
      </div>
    </section>
  );
};

export default BookSection;
