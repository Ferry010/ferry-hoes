import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import Polaroid from "@/components/Polaroid";
import ferryPortrait from "@/assets/ferry-portrait.jpg";
import ferryOnStage from "@/assets/ferry-on-stage.jpg";
import ferryBookstore from "@/assets/ferry-bookstore.jpg";

const SPEAKERS_ACADEMY_URL =
  "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966";

const TIMELINE: { year: string; text: string }[] = [
  { year: "1987", text: "Born in Delft, the Netherlands" },
  { year: "1997", text: "Built my first website at age 10" },
  { year: "2002", text: "Made it to the final 16 of the Junior Eurovision auditions" },
  { year: "2009", text: "Started my career in IT sales" },
  { year: "2016", text: "Quit corporate life to become a full-time entrepreneur" },
  { year: "2017", text: "Coined Brand Humanizing" },
  { year: "2019", text: "Founded the Brand Humanizing Institute" },
  { year: "2021", text: "Joined Speakers Academy as my agent" },
  { year: "2022", text: "Won the Dutch Government's AI Hackathon" },
  { year: "2025", text: "Over 40 stages annually" },
  { year: "2025", text: "Published the Brand Humanizing book" },
];

const Section = ({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) => (
  <section className="py-20 md:py-28 border-t border-border/60">
    <div className="container max-w-[1100px] px-6 md:px-10 lg:px-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      {children}
    </div>
  </section>
);

const PullQuote = ({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) => (
  <figure className="my-12 md:my-16 max-w-3xl">
    <blockquote
      className="font-display font-bold text-foreground leading-[1.1]"
      style={{ fontSize: "clamp(28px, 4.5vw, 56px)", letterSpacing: "-0.02em" }}
    >
      "{quote}"<Period />
    </blockquote>
    {attribution && (
      <figcaption className="mt-5 text-sm uppercase tracking-[0.14em] text-foreground/60 font-semibold">
        {attribution}
      </figcaption>
    )}
  </figure>
);

const MyStory = () => {
  return (
    <>
      <SiteHeader />
      <SEOHead
        title="My Story | Ferry Hoes"
        description="The long version: how a talkative kid from Delft ended up coining Brand Humanizing, writing a book, and giving forty keynotes a year."
        canonicalUrl="/my-story"
      />

      <main className="bg-background">
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <Eyebrow>My Story</Eyebrow>
                <h1
                  className="font-display font-bold text-foreground leading-[0.98]"
                  style={{
                    fontSize: "clamp(48px, 8.5vw, 128px)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  I help brands become more{" "}
                  <span className="text-primary">human</span>
                  <Period />
                </h1>
                <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl leading-[1.55]">
                  International speaker, published author, and entrepreneur on a
                  mission to bring out super-human potential with the help of
                  technology. This is the long version.
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-md">
                  <Polaroid
                    src={ferryPortrait}
                    alt="Ferry Hoes portrait"
                    aspect="portrait"
                    rotate={2}
                    caption="Me, an actual human being."
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The early years */}
        <Section eyebrow="The early years">
          <h2
            className="font-display font-bold text-foreground leading-[1.02] max-w-4xl"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              letterSpacing: "-0.02em",
            }}
          >
            A talkative kid from <span className="text-primary">Delft</span>
            <Period />
          </h2>
          <div className="mt-10 max-w-2xl space-y-6 text-lg text-foreground/85 leading-[1.7]">
            <p>
              I was born in 1987 in Delft, the Netherlands, into a home with a
              hardworking father and a stay-at-home mom. There was always
              someone around, always conversation in the house, always movement
              and energy.
            </p>
            <p>
              I was a cheerful kid who started talking early. My grandmother
              used to laugh and say, "He started talking once… and never
              stopped." That line would follow me for the rest of my life.
            </p>
            <p>
              At home, I was curious, talkative, and creative, but at school I
              was a different kid. Introverted, a little insecure, and mostly
              average. The place where I felt most at ease was behind a
              computer screen. At ten years old, I built my first website,
              entirely about music.
            </p>
          </div>
          <PullQuote
            quote="He started talking once… and never stopped"
            attribution="Ferry's grandmother"
          />
        </Section>

        {/* Discovering the stage */}
        <Section eyebrow="Discovering the stage">
          <h2
            className="font-display font-bold text-foreground leading-[1.02] max-w-4xl"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              letterSpacing: "-0.02em",
            }}
          >
            Music, microphones, and the first taste of an{" "}
            <span className="text-primary">audience</span>
            <Period />
          </h2>
          <div className="mt-10 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 max-w-2xl space-y-6 text-lg text-foreground/85 leading-[1.7]">
              <p>
                High school was where something fundamental changed. I didn't
                just discover music, I discovered making music. I started
                writing lyrics, recording them over beats, and teaching myself
                how to mix and master tracks.
              </p>
              <p>
                What started as a hobby quickly grew more serious. I joined a
                group of semi-known artists, performed in small venues, entered
                competitions, and even made it to the final sixteen of the
                Junior Eurovision auditions in Amsterdam. One of my demos was
                played on national radio.
              </p>
              <p>
                At the time, I thought I was just chasing music, but in reality
                I was building something much more valuable: stage presence,
                confidence, and the ability to hold an audience's attention.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                <Polaroid
                  src={ferryOnStage}
                  alt="Ferry Hoes mid-keynote"
                  aspect="portrait"
                  rotate={-2}
                  caption="Mid-keynote, somewhere in 2025."
                />
              </div>
            </div>
          </div>
        </Section>

        {/* From tech sales to big ideas */}
        <Section eyebrow="From tech sales to big ideas">
          <h2
            className="font-display font-bold text-foreground leading-[1.02] max-w-4xl"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              letterSpacing: "-0.02em",
            }}
          >
            Quitting the corporate <span className="text-primary">lane</span>
            <Period />
          </h2>
          <div className="mt-10 max-w-2xl space-y-6 text-lg text-foreground/85 leading-[1.7]">
            <p>
              After studying development, and realising I didn't enjoy it, a
              teacher pulled me aside: "You should probably do something in
              marketing. Something where you can talk." It sounded like casual
              advice, but in hindsight it was a golden insight.
            </p>
            <p>
              I switched to marketing, where I discovered my strengths. After
              graduating, I chose work over more studies and started as an
              account manager in IT sales. During the day, I sold technology.
              At night, I invested in myself, studying Business English at
              Cambridge, exploring social psychology, and specialising in
              change management and innovation.
            </p>
            <p>
              By 2016, corporate life felt restrictive and creatively
              suffocating. I quit my job and started my own business as a
              growth hacker, with no backup plan and no safety net. Just a
              belief that I would figure it out along the way.
            </p>
          </div>
          <PullQuote quote="If every company followed that path, the future would be filled with identical organisations delivering the same soulless experiences" />
        </Section>

        {/* Birth of Brand Humanizing */}
        <Section eyebrow="The birth of Brand Humanizing">
          <h2
            className="font-display font-bold text-foreground leading-[1.02] max-w-4xl"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              letterSpacing: "-0.02em",
            }}
          >
            A lunch with Jonathan that changed{" "}
            <span className="text-primary">everything</span>
            <Period />
          </h2>
          <div className="mt-10 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 max-w-2xl space-y-6 text-lg text-foreground/85 leading-[1.7]">
              <p>
                In 2017, I was having lunch with my best friend Jonathan. We
                were both working as growth hackers, and during that
                conversation something clicked. We realised that much of what
                we were doing felt off. Endless experiments on consumers, all
                for marginal revenue gains. Technology being used to manipulate
                instead of empower.
              </p>
              <p>
                That day, we coined the term Brand Humanizing. We spent a full
                year researching the concept while I freelanced to pay the
                bills. It was the perfect intersection of everything that
                fascinated me: technology, psychology, innovation, and human
                behaviour.
              </p>
              <p>
                There was just one problem. I had zero experience with a
                business audience. Public speaking was never part of the plan.
                Still, I realised this idea would never spread if I kept it to
                myself. So I reached out to a college and offered to share my
                story with a small group of students. To my surprise, it
                worked.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                <Polaroid
                  src={ferryBookstore}
                  alt="Ferry Hoes book on a shelf"
                  aspect="portrait"
                  rotate={1.5}
                  caption="The book, finally on a shelf."
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Where I am now */}
        <Section eyebrow="Where I am now">
          <h2
            className="font-display font-bold text-foreground leading-[1.02] max-w-4xl"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              letterSpacing: "-0.02em",
            }}
          >
            Forty stages a year, and one big{" "}
            <span className="text-primary">mission</span>
            <Period />
          </h2>
          <div className="mt-10 max-w-2xl space-y-6 text-lg text-foreground/85 leading-[1.7]">
            <p>
              One day, someone found me on LinkedIn and asked me to speak at a
              small corporate event. The talk went well, and I used that
              momentum to apply to a speakers agency. From there things moved
              quickly. Speaking across the country, then internationally,
              working with major organisations from fast-growing companies to
              global corporates.
            </p>
            <p>
              Looking back, it all connects. The talkative kid at home. The
              introverted student at school. The teenager writing lyrics. The
              marketer fascinated by human behaviour. Every phase was preparing
              me for the same thing: standing on a stage and helping
              organisations find a better balance between people and
              technology.
            </p>
            <p>
              My life goal is to build Brand Humanizing into a global movement
              that reshapes how work is designed and how technology is used.
              And to use that success to one day buy UD Las Palmas and bring
              the club to its first-ever European glory.
            </p>
          </div>
        </Section>

        {/* Timeline */}
        <Section eyebrow="Timeline">
          <h2
            className="font-display font-bold text-foreground leading-[1.02] max-w-4xl"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              letterSpacing: "-0.02em",
            }}
          >
            Key <span className="text-primary">milestones</span>
            <Period />
          </h2>
          <ul className="mt-12 max-w-2xl divide-y divide-border/60">
            {TIMELINE.map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-[88px_1fr] gap-6 py-5 items-baseline"
              >
                <span className="font-display font-bold text-primary text-xl md:text-2xl tracking-tight">
                  {item.year}
                </span>
                <span className="text-base md:text-lg text-foreground/85 leading-[1.55]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 border-t border-border/60">
          <div className="container max-w-[1100px] px-6 md:px-10 lg:px-14">
            <h2
              className="font-display font-bold text-foreground leading-[1.02] max-w-3xl"
              style={{
                fontSize: "clamp(40px, 6vw, 88px)",
                letterSpacing: "-0.02em",
              }}
            >
              Want to work <span className="text-primary">together</span>
              <Period />
            </h2>
            <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl leading-[1.55]">
              What I love most is helping people and technology work together
              in a way that actually makes work and life more human.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
              <PillButton
                href={SPEAKERS_ACADEMY_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Book Ferry
              </PillButton>
              <PillButton to="/the-idea" variant="ghost">
                Read the idea
              </PillButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MyStory;
