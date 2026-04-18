import { Eyebrow } from "@/components/HeadingDot";
import ActionButton from "@/components/Button";
import HandwrittenCaption from "@/components/HandwrittenCaption";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BrandHumanizingSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="scroll-reveal grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <Eyebrow>The Idea</Eyebrow>
            <h2
              className="font-display headline-muted text-balance"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500 }}
            >
              Everyone can copy your technology. No one can copy your <strong>people.</strong>
            </h2>
            <p className="mt-7 text-[18px] md:text-[19px] text-foreground/80 leading-[1.7] max-w-[640px]">
              Brand Humanizing is a strategy for the digital age. It says the point of technology
              isn't to replace what makes us human. It's to amplify it. The brands that get this
              right become more distinctive, more trusted, and more useful. The ones that don't
              become noise.
            </p>
            <div className="mt-9">
              <ActionButton to="/the-idea" variant="ghost">
                Read the full idea
              </ActionButton>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-end justify-end">
            <HandwrittenCaption className="-rotate-3 text-terracotta max-w-[260px] text-right" size="lg">
              Sounds obvious. Turns out it isn't.
            </HandwrittenCaption>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHumanizingSection;
