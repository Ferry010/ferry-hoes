import { useState } from "react";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import bookCover from "@/assets/brand-humanizing-book.jpg";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BookSection = () => {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const revealRef = useScrollReveal();

  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (website) return; // bot
    const normalized = email.trim().toLowerCase();
    if (!normalized) return;
    setStatus("loading");

    const { error } = await supabase.from("email_subscribers" as any).insert({
      email: normalized,
      source: "english_waitlist",
    } as any);

    const isDuplicate = error?.message?.includes("duplicate");
    if (error && !isDuplicate) {
      setStatus("error");
      return;
    }

    // Fire-and-forget Slack notification (don't block success)
    if (!isDuplicate) {
      try {
        const { count } = await supabase
          .from("email_subscribers" as any)
          .select("*", { count: "exact", head: true })
          .eq("source", "english_waitlist");
        supabase.functions
          .invoke("notify-waitlist", {
            body: { email: normalized, total: count ?? undefined },
          })
          .catch((err) => console.error("notify-waitlist failed", err));
      } catch (err) {
        console.error("notify-waitlist dispatch failed", err);
      }
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <section
      id="the-book"
      className="bg-background-alt py-20 md:py-28 border-y border-border/60"
    >
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div
          ref={revealRef}
          className="scroll-reveal grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Book cover */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-foreground/10 rounded-lg blur-2xl translate-x-3 translate-y-4" />
              <img
                src={bookCover}
                alt="Brand Humanizing, the book by Ferry Hoes and Jonathan Flores"
                loading="lazy"
                className="relative z-10 w-full max-w-xs rounded-md shadow-soft-xl"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <Eyebrow>The Book</Eyebrow>

            <h2
              className="font-display font-bold text-foreground leading-[1.02]"
              style={{ fontSize: "clamp(36px, 5.4vw, 80px)" }}
            >
              The full argument, on{" "}
              <span className="whitespace-nowrap"><span className="text-primary">paper</span><Period />
              <span className="text-primary">?</span></span>
            </h2>

            <p className="mt-7 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-xl">
              Brand Humanizing, co-written with my best friend Jonathan Flores.
              Ten years of thinking, a framework, and case studies from the
              organisations actually getting it right. Available in Dutch now.
              English edition on the way.
            </p>

            <p className="mt-3 text-sm text-muted-foreground">
              Featuring case studies from a.s.r., Ben &amp; Jerry's, Dove,
              Octopus Energy, Patagonia and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              <PillButton to="/the-book" variant="primary">
                See the book
              </PillButton>
              <PillButton onClick={scrollToWaitlist} variant="ghost">
                English waitlist
              </PillButton>
            </div>

            {/* English waitlist */}
            <div id="waitlist" className="mt-10 max-w-md scroll-mt-24">
              <p className="text-sm font-semibold text-foreground mb-1">
                Currently available in Dutch only.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Get notified when the English edition launches.
              </p>
              {status === "success" ? (
                <p className="inline-flex items-center gap-2 text-sm text-primary font-medium animate-fade-in">
                  <CheckCircle className="h-4 w-4" />
                  Got it. You'll hear from Ferry first.
                </p>
              ) : (
                <form onSubmit={handleWaitlist} className="flex gap-2">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={255}
                    className="text-sm"
                  />
                  <PillButton type="submit" variant="primary" arrow={false}>
                    {status === "loading" ? "..." : "Join the waitlist"}
                  </PillButton>
                </form>
              )}
              {status === "error" && (
                <p className="text-xs text-destructive mt-2">
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
