import { useState } from "react";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import bookCover from "@/assets/brand-humanizing-book.jpg";

const CASES = ["a.s.r.", "Ben & Jerry's", "Dove", "Octopus Energy", "Patagonia"];

const TheBook = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    const { error } = await supabase.from("email_subscribers" as any).insert({
      email: email.trim(),
      source: "english_waitlist",
    } as any);
    if (error && !error.message.includes("duplicate")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <>
      <SEOHead
        title="The Book: Brand Humanizing | Ferry Hoes"
        description="Brand Humanizing, the book by Ferry Hoes and Jonathan Flores. Available in Dutch. English edition launching soon."
        canonicalUrl="/the-book"
      />

      <main className="bg-background">
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <Eyebrow>The Book</Eyebrow>
                <h1
                  className="font-display font-bold text-foreground leading-[0.98]"
                  style={{
                    fontSize: "clamp(38px, 6.4vw, 96px)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  The full argument, on{" "}
                  <span className="text-primary">paper</span>
                  <Period />
                </h1>
                <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl leading-[1.55]">
                  Brand Humanizing, co-written with my best friend Jonathan
                  Flores. Ten years of thinking, a framework, and case studies
                  from the organisations actually getting it right.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
                  <PillButton
                    href="https://brandhumanizingboek.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                  >
                    Get the Dutch edition
                  </PillButton>
                  <PillButton to="#waitlist" variant="ghost">
                    English waitlist
                  </PillButton>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-foreground/10 rounded-lg blur-2xl translate-x-3 translate-y-4" />
                  <img
                    src={bookCover}
                    alt="Brand Humanizing, the book by Ferry Hoes and Jonathan Flores"
                    className="relative z-10 w-full max-w-xs rounded-md shadow-soft-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pull-out body */}
        <section className="py-20 md:py-28 border-t border-border/60">
          <div className="container max-w-[1100px] px-6 md:px-10 lg:px-14">
            <Eyebrow>Why this book</Eyebrow>
            <h2
              className="font-display font-bold text-foreground leading-[1.02] max-w-4xl"
              style={{ fontSize: "clamp(36px, 5.4vw, 80px)", letterSpacing: "-0.02em" }}
            >
              A strategy for the{" "}
              <span className="text-primary">digital age</span>
              <Period />
            </h2>
            <div className="mt-10 max-w-2xl space-y-6 text-lg text-foreground/85 leading-[1.7]">
              <p>
                Most organisations treat technology as a way to do more of the
                same, faster. The brands that win don't compete on output. They
                compete on character.
              </p>
              <p>
                Brand Humanizing is a framework for using AI to free up time for
                the things only humans can do. The book lays out the argument,
                the method, and the proof.
              </p>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-20 md:py-24 bg-background-alt border-y border-border/60">
          <div className="container max-w-[1100px] px-6 md:px-10 lg:px-14">
            <Eyebrow>Case studies inside</Eyebrow>
            <h2
              className="mt-2 font-display font-bold text-foreground leading-[1.02] max-w-3xl"
              style={{ fontSize: "clamp(32px, 4.6vw, 64px)", letterSpacing: "-0.02em" }}
            >
              Brands actually getting it{" "}
              <span className="text-primary">right</span>
              <Period />
            </h2>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 max-w-3xl">
              {CASES.map((c) => (
                <span
                  key={c}
                  className="font-display font-bold text-2xl md:text-3xl text-foreground/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* English waitlist */}
        <section
          id="waitlist"
          className="py-24 md:py-32 scroll-mt-24"
        >
          <div className="container max-w-[1100px] px-6 md:px-10 lg:px-14">
            <Eyebrow>English Edition</Eyebrow>
            <h2
              className="font-display font-bold text-foreground leading-[1.02] max-w-3xl"
              style={{ fontSize: "clamp(32px, 4.6vw, 64px)", letterSpacing: "-0.02em" }}
            >
              Be the first to read it in{" "}
              <span className="text-primary">English</span>
              <Period />
            </h2>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl leading-[1.55]">
              Currently available in Dutch only. Drop your email to hear when
              the English edition launches.
            </p>

            <div className="mt-8 max-w-md">
              {status === "success" ? (
                <p className="inline-flex items-center gap-2 text-base text-primary font-medium animate-fade-in">
                  <CheckCircle className="h-5 w-5" />
                  Got it. You'll hear from Ferry first.
                </p>
              ) : (
                <form onSubmit={handleWaitlist} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-sm"
                  />
                  <PillButton type="submit" variant="primary" arrow={false}>
                    {status === "loading" ? "..." : "Join waitlist"}
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
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TheBook;
