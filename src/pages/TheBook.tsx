import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import { Eyebrow } from "@/components/HeadingDot";
import ActionButton from "@/components/Button";
import HandwrittenCaption from "@/components/HandwrittenCaption";
import PullQuote from "@/components/PullQuote";
import RuleLine from "@/components/RuleLine";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { EXTERNAL_LINKS } from "@/config/site";
import bookCover from "@/assets/brand-humanizing-book.jpg";

const CASE_STUDIES = ["a.s.r.", "Ben & Jerry's", "Dove", "Octopus Energy", "Patagonia"];

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
        <section className="pt-36 md:pt-44 pb-16 md:pb-20">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <Eyebrow>The Book</Eyebrow>
                <h1
                  className="font-display headline-muted text-balance"
                  style={{ fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 500, lineHeight: 1.04 }}
                >
                  We wrote the book on it. <strong>Literally.</strong>
                </h1>
                <p className="mt-8 text-[19px] md:text-[21px] text-foreground/80 leading-[1.6] max-w-[560px]">
                  Brand Humanizing — the superpower that makes your brand more human and your
                  business grow faster. Co-authored with Jonathan Flores.
                </p>
                <div className="mt-10 flex flex-wrap gap-6 items-center">
                  <ActionButton href={EXTERNAL_LINKS.bookNL} external variant="primary">
                    Get the Dutch edition
                  </ActionButton>
                  <ActionButton href="#waitlist" variant="ghost">
                    Join the English waitlist
                  </ActionButton>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative max-w-sm mx-auto lg:ml-auto">
                  <img
                    src={bookCover}
                    alt="Brand Humanizing book by Ferry Hoes"
                    className="w-full shadow-soft-lg"
                    loading="eager"
                  />
                  <HandwrittenCaption className="absolute -bottom-4 -left-4 -rotate-6 text-accent" size="lg">
                    The book, finally on a shelf.
                  </HandwrittenCaption>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14"><RuleLine /></div>

        {/* What's inside */}
        <section className="py-20 md:py-28">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-[720px]">
              <Eyebrow>What's Inside</Eyebrow>
              <h2 className="font-display headline-muted text-balance mb-8" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 500 }}>
                The argument, the method, the <strong>proof.</strong>
              </h2>
              <p className="text-[18px] md:text-[19px] text-foreground/85 leading-[1.7]">
                Brand Humanizing is built around one provocation: technology should make your brand
                more human, not less. The book lays out the framework, the research behind it, and
                the practical steps to put it to work. Featuring case studies from organisations
                that got it right — and a few cautionary tales from those who didn't.
              </p>
            </div>

            <div className="mt-14 max-w-4xl">
              <RuleLine />
              <div className="py-8 flex flex-wrap items-center gap-x-10 gap-y-3 justify-center">
                {CASE_STUDIES.map((c) => (
                  <span key={c} className="font-display text-[17px] md:text-[19px] text-foreground/70" style={{ fontWeight: 500 }}>
                    {c}
                  </span>
                ))}
              </div>
              <RuleLine />
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="py-12 md:py-16">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <PullQuote attribution="From the introduction">
              Most organisations are using AI to become more efficient. The interesting ones are using AI to become more human.
            </PullQuote>
          </div>
        </section>

        <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14"><RuleLine /></div>

        {/* Waitlist */}
        <section id="waitlist" className="py-20 md:py-28 bg-background-alt border-y border-border">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-[640px]">
              <Eyebrow>English Edition</Eyebrow>
              <h2 className="font-display headline-muted text-balance mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 500 }}>
                Currently available in <strong>Dutch.</strong>
              </h2>
              <p className="text-[18px] text-foreground/80 leading-[1.65] mb-8">
                The English edition is on its way. Drop your email to be the first to know when it
                lands.
              </p>

              {status === "success" ? (
                <p className="inline-flex items-center gap-2 text-base text-accent font-medium">
                  <CheckCircle className="h-5 w-5" />
                  Got it. You'll hear from Ferry first.
                </p>
              ) : (
                <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-2 max-w-lg">
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
                    {status === "loading" ? "..." : "Join the waitlist"}
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
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TheBook;
