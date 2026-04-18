import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import { Input } from "@/components/ui/input";
import { CheckCircle, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import bookCover from "@/assets/brand-humanizing-book.jpg";

const CASE_STUDIES = [
  "a.s.r.",
  "Ben & Jerry's",
  "Dove",
  "Octopus Energy",
  "Patagonia",
];

const TheBook = () => {
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
    <>
      <SEOHead
        title="The Book — Brand Humanizing | Ferry Hoes"
        description="Brand Humanizing — the book by Ferry Hoes and Jonathan Flores. Available in Dutch. English edition launching soon."
        canonicalUrl="/the-book"
      />

      <SiteHeader />

      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="pt-36 md:pt-44 pb-16 md:pb-24">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <Eyebrow>The Book</Eyebrow>
                <h1
                  className="font-display font-bold text-foreground leading-[1.02]"
                  style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
                >
                  We wrote the book on it.{" "}
                  <span className="text-primary">Literally</span>
                  <Period />
                </h1>
                <p className="mt-8 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
                  Brand Humanizing — the superpower that makes your brand more
                  human and your business grow faster. Co-authored with
                  Jonathan Flores.
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
                  <PillButton href="#waitlist" variant="ghost">
                    English waitlist
                  </PillButton>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-foreground/10 rounded-lg blur-2xl translate-x-3 translate-y-4" />
                  <img
                    src={bookCover}
                    alt="Brand Humanizing — the book by Ferry Hoes and Jonathan Flores"
                    loading="eager"
                    className="relative z-10 w-full max-w-xs rounded-md shadow-soft-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's inside */}
        <section className="py-20 md:py-28 bg-background-alt border-y border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Eyebrow>What's inside</Eyebrow>
                <h2
                  className="font-display font-bold text-foreground leading-[1.05]"
                  style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
                >
                  The argument, the method, the{" "}
                  <span className="text-primary">proof</span>
                  <Period />
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-lg md:text-xl text-foreground/80 leading-[1.6]">
                <p>
                  Brand Humanizing is built around one provocation: technology
                  should make your brand more human, not less. The book lays
                  out the framework, the research behind it, and the practical
                  steps to put it to work.
                </p>
                <p>
                  Featuring case studies from organisations that got it right
                  — and a few cautionary tales from those who didn't.
                </p>
                <div className="pt-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary mb-3">
                    Case studies include
                  </p>
                  <p className="text-base text-foreground/75">
                    {CASE_STUDIES.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="py-20 md:py-28">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Quote className="h-8 w-8 text-primary/50 mb-6" />
              <blockquote
                className="font-display font-bold text-foreground leading-[1.1]"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                "Most organisations are using AI to become more efficient. The
                interesting ones are using AI to become more{" "}
                <span className="text-primary">human</span>
                <Period />"
              </blockquote>
              <cite className="block mt-6 text-base text-muted-foreground not-italic">
                — From the introduction
              </cite>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section
          id="waitlist"
          className="py-20 md:py-28 bg-background-alt border-y border-border/60 scroll-mt-24"
        >
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-2xl">
              <Eyebrow>English edition</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.05]"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Currently available in <span className="text-primary">Dutch</span>
                <Period />
              </h2>
              <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-[1.55]">
                The English edition is on its way. Drop your email to be the
                first to know when it lands.
              </p>

              <div className="mt-10 max-w-md">
                {status === "success" ? (
                  <p className="inline-flex items-center gap-2 text-base text-primary font-medium animate-fade-in">
                    <CheckCircle className="h-5 w-5" />
                    Got it. You'll hear from Ferry first.
                  </p>
                ) : (
                  <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-base h-12"
                    />
                    <PillButton type="submit" variant="primary" arrow={false}>
                      {status === "loading" ? "..." : "Join the waitlist"}
                    </PillButton>
                  </form>
                )}
                {status === "error" && (
                  <p className="text-sm text-destructive mt-3">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TheBook;
