import { Eyebrow } from "@/components/HeadingDot";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EXTERNAL_LINKS } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

const AlsoByFerry = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="scroll-reveal max-w-3xl mb-12 md:mb-16">
          <Eyebrow>Also by Ferry</Eyebrow>
          <h2
            className="font-display headline-muted text-balance"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500 }}
          >
            The work behind the <strong>keynotes.</strong>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          <a
            href={EXTERNAL_LINKS.brandHumanizing}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-7 group block border-t border-foreground pt-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-terracotta font-medium mb-3">
                  • brandhumanizing.com
                </p>
                <h3
                  className="font-display text-[32px] md:text-[44px] text-foreground leading-[1.05] group-hover:text-accent transition-colors max-w-md"
                  style={{ fontWeight: 500 }}
                >
                  Brand Humanizing Institute
                </h3>
                <p className="mt-5 text-[17px] text-foreground/75 leading-[1.6] max-w-md">
                  Advisory, method, and research for organisations that want to use technology to
                  become more human.
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-foreground/60 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-1" />
            </div>
          </a>

          <a
            href={EXTERNAL_LINKS.aiga}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-5 group block border-t border-foreground pt-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-terracotta font-medium mb-3">
                  • aigeletterdheid.academy
                </p>
                <h3
                  className="font-display text-[28px] md:text-[36px] text-foreground leading-[1.05] group-hover:text-accent transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  AIGA — AI Geletterdheid Academy
                </h3>
                <p className="mt-5 text-[17px] text-foreground/75 leading-[1.6]">
                  The #1 AI literacy training for Dutch organisations. AI Act-compliant.
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-foreground/60 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-1" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AlsoByFerry;
