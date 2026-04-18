import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { personSchema, breadcrumbSchema } from "@/components/StructuredData";
import { Eyebrow, Period } from "@/components/HeadingDot";
import Polaroid from "@/components/Polaroid";
import PillButton from "@/components/PillButton";

import ferryBrandHumanizing from "@/assets/ferry-brand-humanizing.jpg";
import ferrySpeakingAudience from "@/assets/ferry-speaking-audience.jpg";
import ferryBookstore from "@/assets/ferry-bookstore.jpg";
import ferryPresenting from "@/assets/ferry-presenting.jpg";
import ferryBts from "@/assets/ferry-bts.jpg";

const MILESTONES = [
  { year: "1987", text: "Born in Delft, the Netherlands" },
  { year: "1997", text: "Built my first website at age 10" },
  { year: "2002", text: "Made it to the final 16 of the Junior Eurovision auditions" },
  { year: "2009", text: "Started my career in IT sales" },
  { year: "2016", text: "Quit corporate life to become a full-time entrepreneur and business owner" },
  { year: "2017", text: "Coined Brand Humanizing" },
  { year: "2019", text: "Founded the Brand Humanizing Institute" },
  { year: "2021", text: "Joined Speakers Academy as my agent" },
  { year: "2022", text: "Won the prestigious Dutch Government's AI Hackathon" },
  { year: "2025", text: "Over 40 stages annually, becoming one of the most booked speakers in the country" },
  { year: "2025", text: "Published the Brand Humanizing book" },
];

const MyStory = () => {
  return (
    <>
      <SEOHead
        title="My Story | Ferry Hoes"
        description="The story behind Brand Humanizing: how Ferry Hoes built a body of work around the idea that technology should make organisations more human, not less."
        canonicalUrl="/my-story"
      />
      <StructuredData
        data={[
          personSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://ferryhoes.com" },
            { name: "My Story", url: "https://ferryhoes.com/my-story" },
          ]),
        ]}
      />

      <SiteHeader />

      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="pt-36 md:pt-44 pb-16 md:pb-24">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <Eyebrow>My Story</Eyebrow>
                <h1
                  className="font-display font-bold text-foreground leading-[1.02]"
                  style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
                >
                  I help brands become more{" "}
                  <span className="text-primary">human</span>
                  <Period />
                </h1>
                <p className="mt-8 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
                  International speaker, published author, and entrepreneur on a
                  mission to bring out super-human potential with the help of
                  technology. This is the long version.
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm">
                  <Polaroid
                    src={ferryBrandHumanizing}
                    alt="Ferry Hoes with Brand Humanizing banner"
                    caption="Where it all started."
                    rotate={-2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The early years */}
        <section className="py-16 md:py-20 bg-background-alt border-y border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow>The early years</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.05] mb-8"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                A talkative kid from <span className="text-primary">Delft</span>
                <Period />
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-[1.6]">
                <p>
                  I was born in 1987 in Delft, the Netherlands, into a home with
                  a hardworking father and a stay-at-home mom. There was always
                  someone around, always conversation in the house, always
                  movement and energy.
                </p>
                <p>
                  I was a cheerful kid who started talking early. My grandmother
                  used to laugh and say, <em>"He started talking once… and never stopped."</em>{" "}
                  That line would follow me for the rest of my life.
                </p>
                <p>
                  At home, I was curious, talkative, and creative, but at school
                  I was a different kid. Introverted, a little insecure, and
                  mostly average. The place where I felt most at ease was behind
                  a computer screen. At ten years old, I built my first website,
                  entirely about music.
                </p>
              </div>

              <blockquote className="mt-12 border-l-2 border-primary pl-6">
                <p className="font-handwritten text-3xl md:text-4xl text-ink-navy leading-tight">
                  "He started talking once… and never stopped."
                </p>
                <cite className="block mt-3 text-sm text-muted-foreground not-italic">
                  Ferry's grandmother
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Discovering the stage */}
        <section className="py-16 md:py-20">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 lg:order-1 order-2">
                <Eyebrow>Discovering the stage</Eyebrow>
                <h2
                  className="font-display font-bold text-foreground leading-[1.05] mb-8"
                  style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
                >
                  Music, microphones, and the first taste of an{" "}
                  <span className="text-primary">audience</span>
                  <Period />
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-[1.6]">
                  <p>
                    High school was where something fundamental changed. I
                    didn't just discover music, I discovered <em>making</em> music.
                    I started writing lyrics, recording them over beats, and
                    teaching myself how to mix and master tracks.
                  </p>
                  <p>
                    What started as a hobby quickly grew more serious. I joined
                    a group of semi-known artists, performed in small venues,
                    entered competitions, and even made it to the final sixteen
                    of the Junior Eurovision auditions in Amsterdam. One of my
                    demos was played on national radio.
                  </p>
                  <p>
                    At the time, I thought I was just chasing music, but in
                    reality I was building something much more valuable: stage
                    presence, confidence, and the ability to hold an audience's
                    attention.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 order-1 flex justify-center">
                <div className="w-full max-w-sm">
                  <Polaroid
                    src={ferryPresenting}
                    alt="Ferry Hoes presenting"
                    caption="Mid-keynote, somewhere in 2025."
                    rotate={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* From tech sales to big ideas */}
        <section className="py-16 md:py-20 bg-background-alt border-y border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow>From tech sales to big ideas</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.05] mb-8"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Quitting the corporate <span className="text-primary">lane</span>
                <Period />
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-[1.6]">
                <p>
                  After studying development, and realising I didn't enjoy it,
                  a teacher pulled me aside: <em>"You should probably do something
                  in marketing. Something where you can talk."</em> It sounded like
                  casual advice, but in hindsight it was a golden insight.
                </p>
                <p>
                  I switched to marketing, where I discovered my strengths.
                  After graduating, I chose work over more studies and started
                  as an account manager in IT sales. During the day, I sold
                  technology. At night, I invested in myself, studying Business
                  English at Cambridge, exploring social psychology, and
                  specialising in change management and innovation.
                </p>
                <p>
                  By 2016, corporate life felt restrictive and creatively
                  suffocating. I quit my job and started my own business as a
                  growth hacker, with no backup plan and no safety net. Just a
                  belief that I would figure it out along the way.
                </p>
              </div>

              <blockquote className="mt-12 border-l-2 border-primary pl-6">
                <p className="font-handwritten text-3xl md:text-4xl text-ink-navy leading-tight">
                  "If every company followed that path, the future would be
                  filled with identical organisations delivering the same
                  soulless experiences."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* The birth of Brand Humanizing */}
        <section className="py-16 md:py-20">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm">
                  <Polaroid
                    src={ferryBookstore}
                    alt="Ferry Hoes in a bookstore"
                    caption="The book, finally on a shelf."
                    rotate={-2.5}
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <Eyebrow>The birth of Brand Humanizing</Eyebrow>
                <h2
                  className="font-display font-bold text-foreground leading-[1.05] mb-8"
                  style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
                >
                  A lunch with Jonathan that changed{" "}
                  <span className="text-primary">everything</span>
                  <Period />
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-[1.6]">
                  <p>
                    In 2017, I was having lunch with my best friend Jonathan. We
                    were both working as growth hackers, and during that
                    conversation something clicked. We realised that much of
                    what we were doing felt off. Endless experiments on
                    consumers, all for marginal revenue gains. Technology being
                    used to manipulate instead of empower.
                  </p>
                  <p>
                    That day, we coined the term <strong>Brand Humanizing</strong>.
                    We spent a full year researching the concept while I
                    freelanced to pay the bills. It was the perfect intersection
                    of everything that fascinated me: technology, psychology,
                    innovation, and human behaviour.
                  </p>
                  <p>
                    There was just one problem. I had zero experience with a
                    business audience. Public speaking was never part of the
                    plan. Still, I realised this idea would never spread if I
                    kept it to myself. So I reached out to a college and offered
                    to share my story with a small group of students. To my
                    surprise, it worked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where I am now */}
        <section className="py-16 md:py-20 bg-background-alt border-y border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow>Where I am now</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.05] mb-8"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Forty stages a year, and one big{" "}
                <span className="text-primary">mission</span>
                <Period />
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-[1.6]">
                <p>
                  One day, someone found me on LinkedIn and asked me to speak at
                  a small corporate event. The talk went well, and I used that
                  momentum to apply to a speakers agency. From there things
                  moved quickly. Speaking across the country, then
                  internationally, working with major organisations from
                  fast-growing companies to global corporates.
                </p>
                <p>
                  Looking back, it all connects. The talkative kid at home. The
                  introverted student at school. The teenager writing lyrics.
                  The marketer fascinated by human behaviour. Every phase was
                  preparing me for the same thing: standing on a stage and
                  helping organisations find a better balance between people and
                  technology.
                </p>
                <p>
                  My life goal is to build Brand Humanizing into a global
                  movement that reshapes how work is designed and how technology
                  is used. And to use that success to one day buy UD Las Palmas
                  and bring the club to its first-ever European glory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-28">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mx-auto">
              <Eyebrow>Timeline</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.05] mb-12"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Key <span className="text-primary">milestones</span>
                <Period />
              </h2>

              <ol className="relative border-l-2 border-border space-y-8 pl-8">
                {MILESTONES.map((m, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background" />
                    <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                      {m.year}
                    </div>
                    <p className="mt-1 text-base md:text-lg text-foreground/80 leading-relaxed">
                      {m.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-background-alt border-t border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <h2
                className="font-display font-bold text-foreground leading-[1.05]"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Want to work <span className="text-primary">together</span>
                <Period />
              </h2>
              <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
                What I love most is helping people and technology work together
                in a way that actually makes work and life more human.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
                <PillButton to="/book" variant="primary">
                  Book Ferry
                </PillButton>
                <PillButton to="/the-idea" variant="ghost">
                  Read the idea
                </PillButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MyStory;
