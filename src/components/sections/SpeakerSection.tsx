import { Eyebrow } from "@/components/HeadingDot";
import ActionButton from "@/components/Button";
import RuleLine from "@/components/RuleLine";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SPEAKERS_ACADEMY_URL } from "@/config/site";

const TOPICS = [
  {
    title: "Brand Humanizing",
    summary:
      "Using technology to make your brand more distinctive, more trusted, and more useful.",
  },
  {
    title: "The Human Era of Work",
    summary:
      "Why the most valuable skills in the next decade are the ones machines can't fake.",
  },
  {
    title: "AI, without the noise",
    summary:
      "What AI actually changes for organisations, what it doesn't, and how to tell the difference.",
  },
];

const SpeakerSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="scroll-reveal max-w-3xl mb-12 md:mb-16">
          <Eyebrow>On Stage</Eyebrow>
          <h2
            className="font-display headline-muted text-balance"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500 }}
          >
            On stages where it <strong>matters.</strong>
          </h2>
          <p className="mt-6 text-[18px] text-foreground/80 leading-[1.65] max-w-[620px]">
            From Brand Humanizing and the future of work to AI leadership. Talks that challenge
            assumptions, spark conversations, and leave audiences with something they'll actually
            use on Monday.
          </p>
        </div>

        <div className="max-w-4xl">
          <RuleLine />
          {TOPICS.map((topic, i) => (
            <div key={topic.title}>
              <article className="py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-8">
                <p className="md:col-span-1 font-display italic text-terracotta text-lg" style={{ fontWeight: 500 }}>
                  0{i + 1}
                </p>
                <h3 className="md:col-span-4 font-display text-[24px] md:text-[28px] text-foreground leading-[1.15]" style={{ fontWeight: 500 }}>
                  {topic.title}
                </h3>
                <p className="md:col-span-7 text-[17px] text-foreground/75 leading-[1.6]">
                  {topic.summary}
                </p>
              </article>
              <RuleLine />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-6 items-center">
          <ActionButton href={SPEAKERS_ACADEMY_URL} external variant="primary">
            Book Ferry
          </ActionButton>
          <ActionButton to="/on-stage" variant="ghost">
            See talks &amp; reel
          </ActionButton>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
