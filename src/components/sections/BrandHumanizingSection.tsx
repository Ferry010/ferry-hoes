import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * The Idea — hook section. Short, declarative, ends with CTA to /the-idea.
 */
const BrandHumanizingSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section
      id="the-idea"
      className="bg-background-alt py-24 md:py-32 border-y border-border/60"
    >
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={revealRef} className="scroll-reveal max-w-4xl">
          <Eyebrow>The Idea</Eyebrow>

          <h2
            className="font-display font-bold text-foreground leading-[1.02]"
            style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
          >
            Everyone can copy your technology. No one can copy your{" "}
            <span className="text-primary">people</span>
            <Period />
          </h2>

          <div className="mt-10 space-y-6 text-lg md:text-xl text-foreground/80 leading-[1.6] max-w-2xl">
            <p>
              Brand Humanizing is a strategy for the digital age. It says the
              point of technology isn't to replace what makes us human. It's to
              amplify it.
            </p>
            <p>
              The brands that get this right become more distinctive, more
              trusted, and more useful. The ones that don't become noise.
            </p>
            <p className="font-handwritten text-2xl md:text-3xl text-ink-navy not-italic">
              Sounds obvious. Turns out it isn't.
            </p>
          </div>

          <div className="mt-10">
            <PillButton to="/the-idea" variant="primary">
              Read the full idea
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHumanizingSection;
