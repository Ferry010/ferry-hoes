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
            One idea, ten years in the{" "}
            <span className="text-primary">making</span>
            <Period />
          </h2>

          <div className="mt-10 space-y-6 text-lg md:text-xl text-foreground/80 leading-[1.6] max-w-2xl">
            <p>
              Technology should amplify what's human, not replace it. It sounds
              obvious. It isn't.
            </p>
            <p>
              Most organisations are still racing in the wrong direction,
              using tech to do more of the same, faster. The brands that win in
              the long run do the opposite.
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
