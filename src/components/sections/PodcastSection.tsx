import { Eyebrow } from "@/components/HeadingDot";
import ActionButton from "@/components/Button";
import RuleLine from "@/components/RuleLine";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EXTERNAL_LINKS } from "@/config/site";

const FEATURED = [
  {
    n: "01",
    title: "Not a Diversity Checkbox: The Real Work of Inclusive Leadership",
    guest: "Simone Moissidis",
    duration: "65 min",
  },
  {
    n: "02",
    title: "The Power of Talking to People You Disagree With",
    guest: "Ruben Treurniet",
    duration: "73 min",
  },
  {
    n: "03",
    title: "From Local to Global: The New Era of Talent Acquisition",
    guest: "Marco Boomsma",
    duration: "71 min",
  },
];

const PodcastSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="scroll-reveal max-w-3xl mb-12 md:mb-16">
          <Eyebrow>The Human Era Podcast</Eyebrow>
          <h2
            className="font-display headline-muted text-balance"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500 }}
          >
            Conversations worth your <strong>commute.</strong>
          </h2>
          <p className="mt-6 text-[18px] text-foreground/80 leading-[1.65] max-w-[620px]">
            Deep dives with founders, artists, scientists, and anyone doing interesting work at
            the intersection of humans and technology. No scripts. No soundbites.
          </p>
        </div>

        <div className="max-w-4xl">
          <RuleLine />
          {FEATURED.map((ep) => (
            <div key={ep.n}>
              <article className="py-7 md:py-9 grid md:grid-cols-12 gap-4 md:gap-8 hover:bg-background/60 transition-colors -mx-4 px-4">
                <p className="md:col-span-1 font-display italic text-terracotta text-base" style={{ fontWeight: 500 }}>
                  {ep.n}
                </p>
                <h3 className="md:col-span-7 font-display text-[20px] md:text-[24px] text-foreground leading-[1.2]" style={{ fontWeight: 500 }}>
                  {ep.title}
                </h3>
                <p className="md:col-span-3 text-[14px] text-foreground/70 self-center">
                  {ep.guest}
                </p>
                <p className="md:col-span-1 text-[13px] text-foreground/55 self-center">
                  {ep.duration}
                </p>
              </article>
              <RuleLine />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-6 items-center">
          <ActionButton href={EXTERNAL_LINKS.spotify} external variant="primary">
            Listen on Spotify
          </ActionButton>
          <ActionButton to="/podcast" variant="ghost">
            All episodes
          </ActionButton>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
