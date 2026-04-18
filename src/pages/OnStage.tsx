import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { personSchema, breadcrumbSchema } from "@/components/StructuredData";
import { Eyebrow } from "@/components/HeadingDot";
import ActionButton from "@/components/Button";
import Polaroid from "@/components/Polaroid";
import RuleLine from "@/components/RuleLine";
import { SPEAKERS_ACADEMY_URL } from "@/config/site";
import keynote from "@/assets/ferry-on-stage.jpg";

const TOPICS = [
  {
    n: "01",
    title: "Brand Humanizing: become irreplaceable in a world of AI",
    body: "AI can copy your content, your processes, even your customer service. What it cannot replicate is the distinctly human qualities that make people trust, follow, and buy from you. Ferry unpacks the Brand Humanizing framework and shows how organisations can turn their human edge into an unassailable competitive advantage.",
    suited: "Leadership teams, marketing directors, and brand strategists navigating AI adoption.",
    takeaways: [
      "What separates brands that win in the AI era from those that disappear into the noise",
      "A framework for identifying and amplifying your organisation's irreplaceable human qualities",
      "Practical steps to put Brand Humanizing to work on Monday morning",
    ],
  },
  {
    n: "02",
    title: "The Human Era of Work",
    body: "The AI hype has settled. The real question now is how to lead organisations where humans and machines work side by side without losing what makes work meaningful. Ferry explores the skills, culture, and leadership choices that separate thriving organisations from ones that merely survive the transition.",
    suited: "HR directors, L&D leads, and C-suite leaders shaping the next era of work.",
    takeaways: [
      "The human skills that will define value creation in the next decade",
      "How to design roles and teams that use AI without hollowing out culture",
      "Why the 'now what' moment after AI is a leadership problem, not a tech problem",
    ],
  },
  {
    n: "03",
    title: "Leading when AI has a say",
    body: "When algorithms recommend who to hire, what to prioritise, and how to allocate resources, the leader's role fundamentally changes. This talk explores what human-centred leadership looks like when machines have a seat at the table, and why the best leaders will be those who know when not to listen to the data.",
    suited: "C-suite leaders, HR directors, and anyone managing teams in an AI-augmented environment.",
    takeaways: [
      "The new leadership skill: knowing when to override the algorithm",
      "How to keep human judgement at the centre of AI-augmented decisions",
      "Practical guardrails for protecting culture and trust as AI scales",
    ],
  },
  {
    n: "04",
    title: "The biggest AI mistake organisations are making right now",
    body: "Organisations are racing to adopt AI without first asking the most important question: what problem are we actually solving? Ferry shares real-world examples of costly missteps and offers a practical framework for making sure your AI investments solve the right problems in the right order.",
    suited: "Strategy teams, digital transformation leads, and boards overseeing AI investments.",
    takeaways: [
      "Why most AI projects fail before they even begin",
      "A framework for prioritising AI investments by strategic value, not novelty",
      "How to spot vendor hype and make grounded technology decisions",
    ],
  },
  {
    n: "05",
    title: "From AI law to AI advantage: literacy as a strategic foundation",
    body: "The EU AI Act is not just a compliance exercise. It is an opportunity to build organisational AI literacy from the ground up. Ferry explains what the regulation requires in plain language and shows how the smartest organisations are using it as a catalyst for strategic advantage rather than a bureaucratic burden.",
    suited: "Compliance officers, legal teams, and leadership responsible for AI governance.",
    takeaways: [
      "What the EU AI Act actually requires, in plain language",
      "How to turn compliance work into organisation-wide AI literacy",
      "Why early movers will have a structural advantage over those who wait",
    ],
  },
];

const EXPECT = [
  { label: "Pre-event alignment call", body: "Ferry schedules a call with your team to understand the audience, objectives, and context." },
  { label: "Fully customised content", body: "No copy-paste keynotes. Every talk is tailored with industry-specific examples and relevant case studies." },
  { label: "Professional delivery", body: "Engaging, energetic, and visual. Slides that support the story, not replace it." },
  { label: "Post-event follow-up", body: "Ferry is available for a brief debrief and happy to share key resources with your team." },
];

const TESTIMONIALS = [
  { quote: "Ferry brings energy, clarity, and substance. Our students were genuinely inspired and walked out talking about it for days.", attr: "Avans Hogeschool" },
  { quote: "A keynote that landed exactly where it needed to. Sharp, generous, and grounded in real work.", attr: "Abel — Aestate" },
  { quote: "Ferry has the rare ability to make a complex topic feel like a conversation. Our leadership team is still referencing his frameworks months later.", attr: "Almer — ASR" },
  { quote: "Engaging from the first minute. He understood our audience and adapted in real time. We will book him again.", attr: "CPM Nederland" },
  { quote: "One of the most impactful sessions our team has had. He made AI feel like an opportunity, not a threat.", attr: "ACES Direct" },
  { quote: "Ferry doesn't just speak. He shifts how you think about your own work. That's a different category of speaker.", attr: "Laurens — Atos" },
];

const OnStage = () => {
  return (
    <>
      <SEOHead
        title="On Stage — Keynote Speaker | Ferry Hoes"
        description="Keynote topics, speaker reel, sample audiences, and testimonials. Ferry Hoes is exclusively represented by Speakers Academy."
        canonicalUrl="/on-stage"
      />
      <StructuredData
        data={[
          personSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://ferryhoes.com" },
            { name: "On Stage", url: "https://ferryhoes.com/on-stage" },
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
                <Eyebrow>On Stage</Eyebrow>
                <h1
                  className="font-display headline-muted text-balance"
                  style={{ fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 500, lineHeight: 1.04 }}
                >
                  On stages where it <strong>matters.</strong>
                </h1>
                <p className="mt-8 text-[19px] md:text-[21px] text-foreground/80 leading-[1.6]">
                  Talks on Brand Humanizing, the future of work, and AI leadership. No
                  death-by-PowerPoint. Just stories, insights, and practical ideas that spark real
                  conversations and drive meaningful change.
                </p>
                <div className="mt-10 flex flex-wrap gap-6 items-center">
                  <ActionButton href={SPEAKERS_ACADEMY_URL} external variant="primary">Book Ferry</ActionButton>
                  <ActionButton href="#reel" variant="ghost">Watch the reel</ActionButton>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="max-w-sm mx-auto lg:ml-auto">
                  <Polaroid
                    src={keynote}
                    alt="Ferry Hoes mid-keynote"
                    caption="Mid-keynote, somewhere in 2025."
                    rotate={-2}
                    aspect="portrait"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Availability strip */}
        <section className="py-8">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <RuleLine />
            <p className="text-center text-[14px] text-foreground/65 my-6">
              Based in the Netherlands. Available across Europe, the US, and worldwide. Speaking in
              English and Dutch.
            </p>
            <RuleLine />
          </div>
        </section>

        {/* Keynote topics */}
        <section className="py-20 md:py-28">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mb-14">
              <Eyebrow>Keynote Topics</Eyebrow>
              <h2 className="font-display headline-muted text-balance" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 500 }}>
                Five talks. One big <strong>idea.</strong>
              </h2>
              <p className="mt-6 text-[18px] text-foreground/80 leading-[1.65]">
                Each talk is tailored to your audience, industry, and event goals. No copy-paste
                keynotes.
              </p>
            </div>

            <div className="max-w-4xl">
              <RuleLine />
              {TOPICS.map((t) => (
                <div key={t.n}>
                  <article className="py-10 md:py-12">
                    <div className="grid md:grid-cols-12 gap-4 md:gap-8 mb-6">
                      <p className="md:col-span-1 font-display italic text-terracotta text-lg" style={{ fontWeight: 500 }}>{t.n}</p>
                      <h3 className="md:col-span-11 font-display text-[24px] md:text-[32px] text-foreground leading-[1.15]" style={{ fontWeight: 500 }}>
                        {t.title}
                      </h3>
                    </div>
                    <div className="md:pl-[8.33%] space-y-5">
                      <p className="text-[17px] text-foreground/80 leading-[1.65]">{t.body}</p>
                      <p className="text-[14px] text-foreground/70">
                        <span className="text-terracotta uppercase tracking-[0.14em] text-[11px] font-medium">Best suited for</span>
                        <br />
                        {t.suited}
                      </p>
                      <div>
                        <p className="text-terracotta uppercase tracking-[0.14em] text-[11px] font-medium mb-2">Key takeaways</p>
                        <ul className="space-y-1.5 text-[15px] text-foreground/80">
                          {t.takeaways.map((k, i) => (
                            <li key={i} className="flex gap-2"><span className="text-terracotta">·</span><span>{k}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                  <RuleLine />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="py-20 md:py-24 bg-background-alt border-y border-border">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mb-12">
              <Eyebrow>For Event Organisers</Eyebrow>
              <h2 className="font-display headline-muted text-balance" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 500 }}>
                What to expect when booking <strong>Ferry.</strong>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl">
              {EXPECT.map((e) => (
                <div key={e.label} className="border-t border-foreground pt-5">
                  <h3 className="font-display text-[20px] text-foreground mb-2" style={{ fontWeight: 500 }}>{e.label}</h3>
                  <p className="text-[16px] text-foreground/75 leading-[1.6]">{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reel */}
        <section id="reel" className="py-20 md:py-28">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mb-10">
              <Eyebrow>Watch</Eyebrow>
              <h2 className="font-display headline-muted text-balance" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 500 }}>
                See Ferry in <strong>action.</strong>
              </h2>
              <p className="mt-5 text-[17px] text-foreground/75">A taste of what Ferry brings to the stage.</p>
            </div>
            <div className="max-w-5xl mx-auto border border-foreground">
              <div className="aspect-video bg-foreground/5">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Ferry Hoes speaker reel"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-background-alt border-y border-border">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mb-12">
              <Eyebrow>Testimonials</Eyebrow>
              <h2 className="font-display headline-muted text-balance" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 500 }}>
                What organisers <strong>say.</strong>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl">
              {TESTIMONIALS.map((t, i) => (
                <figure key={i}>
                  <span className="font-display italic text-terracotta text-5xl leading-none block mb-2" aria-hidden="true">"</span>
                  <blockquote className="font-display italic text-[20px] text-foreground leading-[1.4]" style={{ fontWeight: 500 }}>
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-4 text-[14px] text-foreground/65">— {t.attr}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-[720px]">
              <h2 className="font-display headline-muted text-balance" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 500 }}>
                Ready to inspire your <strong>audience.</strong>
              </h2>
              <p className="mt-7 text-[18px] text-foreground/80 leading-[1.7]">
                Ferry replies personally within two working days. For formal bookings he is
                exclusively represented by Speakers Academy.
              </p>
              <div className="mt-10 flex flex-wrap gap-6 items-center">
                <ActionButton href={SPEAKERS_ACADEMY_URL} external variant="primary">Book Ferry</ActionButton>
                <ActionButton href={SPEAKERS_ACADEMY_URL} external variant="ghost">See the full agent page</ActionButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OnStage;
