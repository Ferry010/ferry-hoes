import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const topics = [
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

/**
 * On Stage — speaker section with three talk-topic cards.
 */
const SpeakerSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={revealRef} className="scroll-reveal max-w-3xl mb-14 md:mb-16">
          <Eyebrow>On Stage</Eyebrow>

          <h2
            className="font-display font-bold text-foreground leading-[1.02]"
            style={{ fontSize: "clamp(36px, 5.4vw, 80px)" }}
          >
            Want this in your{" "}
            <span className="text-primary">room</span>
            <Period />
          </h2>

          <p className="mt-7 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
            I give around 40 keynotes a year to boards, leadership teams, and
            everyone trying to figure out what "human" means in a tech-heavy
            world. My agent handles bookings.
          </p>
        </div>

        {/* Topic cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-7 mb-14">
          {topics.map((t) => (
            <article
              key={t.title}
              className="group bg-background-alt border border-border rounded-2xl p-7 md:p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
            >
              <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-primary">
                • Talk topic
              </span>
              <h3 className="mt-4 font-display text-2xl md:text-[26px] font-bold text-foreground leading-tight">
                {t.title}
              </h3>
              <p className="mt-3 text-foreground/75 leading-relaxed">
                {t.summary}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4">
          <PillButton
            href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Book Ferry
          </PillButton>
          <PillButton to="/on-stage" variant="ghost">
            See talks &amp; reel
          </PillButton>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
