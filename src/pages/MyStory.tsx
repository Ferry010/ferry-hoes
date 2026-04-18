import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { personSchema, breadcrumbSchema } from "@/components/StructuredData";
import { Eyebrow } from "@/components/HeadingDot";
import ActionButton from "@/components/Button";
import Polaroid from "@/components/Polaroid";
import PullQuote from "@/components/PullQuote";
import RuleLine from "@/components/RuleLine";
import { SPEAKERS_ACADEMY_URL } from "@/config/site";
import portrait from "@/assets/ferry-portrait.jpg";
import keynote from "@/assets/ferry-on-stage.jpg";
import bookstore from "@/assets/ferry-bookstore.jpg";

const MILESTONES = [
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

const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="py-16 md:py-20">
    <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
      <div className="max-w-[720px]">{children}</div>
    </div>
  </section>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-6 text-[18px] md:text-[19px] text-foreground/85 leading-[1.7]">
    {children}
  </div>
);

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
        <section className="pt-36 md:pt-44 pb-16">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7 max-w-[640px]">
                <Eyebrow>My Story</Eyebrow>
                <h1
                  className="font-display headline-muted text-balance"
                  style={{ fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 500, lineHeight: 1.04 }}
                >
                  I help brands become more <strong>human.</strong>
                </h1>
                <p className="mt-8 text-[19px] md:text-[21px] text-foreground/80 leading-[1.6]">
                  International speaker, published author, and entrepreneur on a mission to bring
                  out super-human potential with the help of technology. This is the long version.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                  <Polaroid
                    src={portrait}
                    alt="Ferry Hoes portrait"
                    caption="Where it all started."
                    rotate={2}
                    aspect="portrait"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14"><RuleLine /></div>

        <Section>
          <Eyebrow>The Early Years</Eyebrow>
          <h2 className="font-display headline-muted text-balance mb-8" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 500 }}>
            A talkative kid from <strong>Delft.</strong>
          </h2>
          <Body>
            <p>I was born in 1987 in Delft, the Netherlands, into a home with a hardworking father and a stay-at-home mom. There was always someone around, always conversation in the house, always movement and energy.</p>
            <p>I was a cheerful kid who started talking early. My grandmother used to laugh and say, "He started talking once… and never stopped." That line would follow me for the rest of my life.</p>
            <p>At home, I was curious, talkative, and creative, but at school I was a different kid. Introverted, a little insecure, and mostly average. The place where I felt most at ease was behind a computer screen. At ten years old, I built my first website, entirely about music.</p>
          </Body>
        </Section>

        <PullQuote attribution="Ferry's grandmother">
          He started talking once… and never stopped.
        </PullQuote>

        <Section>
          <Eyebrow>Discovering the Stage</Eyebrow>
          <h2 className="font-display headline-muted text-balance mb-8" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 500 }}>
            Music, microphones, and the first taste of an <strong>audience.</strong>
          </h2>
          <Body>
            <p>High school was where something fundamental changed. I didn't just discover music, I discovered making music. I started writing lyrics, recording them over beats, and teaching myself how to mix and master tracks.</p>
            <p>What started as a hobby quickly grew more serious. I joined a group of semi-known artists, performed in small venues, entered competitions, and even made it to the final sixteen of the Junior Eurovision auditions in Amsterdam. One of my demos was played on national radio.</p>
            <p>At the time, I thought I was just chasing music, but in reality I was building something much more valuable: stage presence, confidence, and the ability to hold an audience's attention.</p>
          </Body>
        </Section>

        <section className="py-12">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-2xl mx-auto">
              <Polaroid
                src={keynote}
                alt="Ferry on stage mid-keynote"
                caption="Mid-keynote, somewhere in 2025."
                rotate={-1.5}
                aspect="landscape"
              />
            </div>
          </div>
        </section>

        <Section>
          <Eyebrow>From Tech Sales to Big Ideas</Eyebrow>
          <h2 className="font-display headline-muted text-balance mb-8" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 500 }}>
            Quitting the corporate <strong>lane.</strong>
          </h2>
          <Body>
            <p>After studying development, and realising I didn't enjoy it, a teacher pulled me aside: "You should probably do something in marketing. Something where you can talk." It sounded like casual advice, but in hindsight it was a golden insight.</p>
            <p>I switched to marketing, where I discovered my strengths. After graduating, I chose work over more studies and started as an account manager in IT sales. During the day, I sold technology. At night, I invested in myself, studying Business English at Cambridge, exploring social psychology, and specialising in change management and innovation.</p>
            <p>By 2016, corporate life felt restrictive and creatively suffocating. I quit my job and started my own business as a growth hacker, with no backup plan and no safety net. Just a belief that I would figure it out along the way.</p>
          </Body>
        </Section>

        <PullQuote>
          If every company followed that path, the future would be filled with identical organisations delivering the same soulless experiences.
        </PullQuote>

        <Section>
          <Eyebrow>The Birth of Brand Humanizing</Eyebrow>
          <h2 className="font-display headline-muted text-balance mb-8" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 500 }}>
            A lunch with Jonathan that changed <strong>everything.</strong>
          </h2>
          <Body>
            <p>In 2017, I was having lunch with my best friend Jonathan. We were both working as growth hackers, and during that conversation something clicked. We realised that much of what we were doing felt off. Endless experiments on consumers, all for marginal revenue gains. Technology being used to manipulate instead of empower.</p>
            <p>That day, we coined the term Brand Humanizing. We spent a full year researching the concept while I freelanced to pay the bills. It was the perfect intersection of everything that fascinated me: technology, psychology, innovation, and human behaviour.</p>
            <p>There was just one problem. I had zero experience with a business audience. Public speaking was never part of the plan. Still, I realised this idea would never spread if I kept it to myself. So I reached out to a college and offered to share my story with a small group of students. To my surprise, it worked.</p>
          </Body>
        </Section>

        <section className="py-12">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-2xl mx-auto">
              <Polaroid
                src={bookstore}
                alt="The Brand Humanizing book on a shelf"
                caption="The book, finally on a shelf."
                rotate={1.5}
                aspect="landscape"
              />
            </div>
          </div>
        </section>

        <Section>
          <Eyebrow>Where I Am Now</Eyebrow>
          <h2 className="font-display headline-muted text-balance mb-8" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 500 }}>
            Forty stages a year, and one big <strong>mission.</strong>
          </h2>
          <Body>
            <p>One day, someone found me on LinkedIn and asked me to speak at a small corporate event. The talk went well, and I used that momentum to apply to a speakers agency. From there things moved quickly. Speaking across the country, then internationally, working with major organisations from fast-growing companies to global corporates.</p>
            <p>Looking back, it all connects. The talkative kid at home. The introverted student at school. The teenager writing lyrics. The marketer fascinated by human behaviour. Every phase was preparing me for the same thing: standing on a stage and helping organisations find a better balance between people and technology.</p>
            <p>My life goal is to build Brand Humanizing into a global movement that reshapes how work is designed and how technology is used. And to use that success to one day buy UD Las Palmas and bring the club to its first-ever European glory.</p>
          </Body>
        </Section>

        <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14"><RuleLine /></div>

        {/* Timeline */}
        <section className="py-20 md:py-24">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-[720px]">
              <Eyebrow>Timeline</Eyebrow>
              <h2 className="font-display headline-muted text-balance mb-10" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 500 }}>
                Key <strong>milestones.</strong>
              </h2>
              <div className="border-t border-border">
                {MILESTONES.map((m, i) => (
                  <div key={i} className="grid grid-cols-12 gap-4 py-4 border-b border-border">
                    <p className="col-span-3 md:col-span-2 font-display italic text-terracotta text-lg" style={{ fontWeight: 500 }}>
                      {m.year}
                    </p>
                    <p className="col-span-9 md:col-span-10 text-[17px] text-foreground/85 leading-[1.5]">
                      {m.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14"><RuleLine /></div>

        {/* CTA */}
        <Section>
          <h2 className="font-display headline-muted text-balance" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 500 }}>
            Want to work <strong>together.</strong>
          </h2>
          <p className="mt-7 text-[18px] text-foreground/80 leading-[1.7]">
            What I love most is helping people and technology work together in a way that actually
            makes work and life more human.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 items-center">
            <ActionButton href={SPEAKERS_ACADEMY_URL} external variant="primary">Book Ferry</ActionButton>
            <ActionButton to="/the-idea" variant="ghost">Read the idea</ActionButton>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default MyStory;
