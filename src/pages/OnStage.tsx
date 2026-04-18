import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, {
  speakingServiceSchema,
  faqPageSchema,
  reviewSchemas,
  videoObjectSchema,
  breadcrumbSchema,
} from "@/components/StructuredData";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import Polaroid from "@/components/Polaroid";
import { CheckCircle2, Users, Lightbulb, Quote, Globe } from "lucide-react";
import ferryPresenting from "@/assets/ferry-presenting.jpg";
import ferryBts from "@/assets/ferry-bts.jpg";

const KEYNOTE_TOPICS = [
  {
    title: "Brand Humanizing: become irreplaceable in a world of AI",
    description:
      "AI can copy your content, your processes, even your customer service. What it cannot replicate is the distinctly human qualities that make people trust, follow, and buy from you. Ferry unpacks the Brand Humanizing framework and shows how organisations can turn their human edge into an unassailable competitive advantage.",
    audience: "Leadership teams, marketing directors, and brand strategists navigating AI adoption.",
    takeaways: [
      "A practical framework for identifying what makes your brand irreplaceably human",
      "How to use AI to amplify (not replace) your distinctive qualities",
      "Real-world examples of organisations that turned their human edge into growth",
    ],
  },
  {
    title: "The AI conversation most organisations skip",
    description:
      "Most AI conversations start with tools and end with confusion. Ferry flips the script: he demystifies the technology, cuts through vendor hype, and helps your audience build a shared vocabulary so they can make smarter decisions about where AI fits, and where it does not.",
    audience: "Executive teams, innovation leads, and organisations early in their AI journey.",
    takeaways: [
      "A clear, jargon-free understanding of what AI can and cannot do today",
      "A framework for evaluating AI opportunities without falling for hype",
      "Shared language and vocabulary your team can use to make better AI decisions",
    ],
  },
  {
    title: "Leading when AI has a say",
    description:
      "When algorithms recommend who to hire, what to prioritise, and how to allocate resources, the leader's role fundamentally changes. This talk explores what human-centred leadership looks like when machines have a seat at the table, and why the best leaders will be those who know when not to listen to the data.",
    audience: "C-suite leaders, HR directors, and anyone managing teams in an AI-augmented environment.",
    takeaways: [
      "Why algorithmic recommendations require a new kind of leadership judgment",
      "How to maintain trust and accountability when decisions are data-assisted",
      "Practical guidelines for knowing when to override the algorithm",
    ],
  },
  {
    title: "The biggest AI mistake organisations are making right now",
    description:
      "Organisations are racing to adopt AI without first asking the most important question: what problem are we actually solving? Ferry shares real-world examples of costly missteps and offers a practical framework for making sure your AI investments solve the right problems in the right order.",
    audience: "Strategy teams, digital transformation leads, and boards overseeing AI investments.",
    takeaways: [
      "The most common and costly AI adoption mistakes, and how to avoid them",
      "A step-by-step framework for prioritising AI use cases by real impact",
      "How to prevent solution-first thinking from derailing your AI strategy",
    ],
  },
  {
    title: "From AI law to AI advantage: literacy as a strategic foundation",
    description:
      "The EU AI Act is not just a compliance exercise. It is an opportunity to build organisational AI literacy from the ground up. Ferry explains what the regulation requires in plain language and shows how the smartest organisations are using it as a catalyst for strategic advantage rather than a bureaucratic burden.",
    audience: "Compliance officers, legal teams, and leadership responsible for AI governance.",
    takeaways: [
      "A plain-language overview of what the EU AI Act requires from your organisation",
      "How to turn compliance into a competitive advantage through AI literacy",
      "Concrete steps to build an AI-literate organisation before the deadlines hit",
    ],
  },
];

const TESTIMONIALS = [
  { quote: "Ferry took us on an inspiring journey, with the topic perfectly tailored to our audience. He engaged participants effectively and left more than enough room for questions.", name: "", company: "Avans Hogeschool" },
  { quote: "From our very first meeting with Ferry, the collaboration was wonderful. He's incredibly enthusiastic, flexible, and loves thinking along about both content and practical matters. Participants of the keynote and the in-depth workshop said they felt inspired and gained new insights about ChatGPT and AI. In short: we're enthusiastic about Ferry.", name: "Abel", company: "Aestate" },
  { quote: "Ferry is a fantastic speaker. He adapts perfectly to the audience and showed during the workshops that he's highly flexible and alert to reactions from the room. We're very happy with the collaboration and he gave our clients plenty of inspiration they can put into practice.", name: "Almer", company: "ASR" },
  { quote: "Energetic, positive, funny. It was a wonderful session and we received a lot of positive feedback about Ferry's talk. Communication was pleasant and the aftercare was neatly arranged too. We're happy.", name: "", company: "CPM Nederland" },
  { quote: "Ferry is a knowledgeable and approachable speaker. With his expertise on the synergy between humans and technology, Ferry was a strong keynote opening for our event.", name: "", company: "ACES Direct" },
  { quote: "I recently organised a workshop where Ferry Hoes and the Brand Humanizing Institute delivered a lecture on the Ethics of AI. No 'Death by PowerPoint,' but a smooth and captivating story that got us as an IT organisation thinking. Ferry is second to none at keeping his audience engaged.", name: "Laurens", company: "Atos" },
];

const WHAT_TO_EXPECT = [
  { title: "Pre-event alignment call", desc: "Ferry schedules a call with your team to understand the audience, objectives, and context so the talk hits the right notes." },
  { title: "Fully customised content", desc: "No copy-paste keynotes. Every talk is tailored with industry-specific examples, relevant case studies, and audience-appropriate depth." },
  { title: "Professional delivery", desc: "Engaging, energetic, and visual. Slides that support the story, not replace it. Audiences stay engaged throughout." },
  { title: "Post-event follow-up", desc: "After the event, Ferry is available for a brief debrief and happy to share key resources or frameworks with your team." },
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
          speakingServiceSchema,
          faqPageSchema,
          ...reviewSchemas,
          videoObjectSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://ferryhoes.com" },
            { name: "On Stage", url: "https://ferryhoes.com/on-stage" },
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
                <Eyebrow>On Stage</Eyebrow>
                <h1
                  className="font-display font-bold text-foreground leading-[1.02]"
                  style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
                >
                  On stages where it{" "}
                  <span className="text-primary">matters</span>
                  <Period />
                </h1>
                <p className="mt-8 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
                  Talks on AI, Brand Humanizing, and the future of work. No
                  death-by-PowerPoint. Just stories, insights, and practical
                  ideas that spark real conversations and drive meaningful
                  change.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
                  <PillButton to="/book" variant="primary">
                    Speaker enquiries
                  </PillButton>
                  <PillButton href="#reel" variant="ghost">
                    Watch the reel
                  </PillButton>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm">
                  <Polaroid
                    src={ferryPresenting}
                    alt="Ferry Hoes presenting on stage"
                    caption="Mid-keynote, somewhere in 2025."
                    rotate={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-10 bg-background-alt border-y border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <p className="flex items-center gap-3 text-base md:text-lg text-foreground/75">
              <Globe className="h-5 w-5 text-primary shrink-0" />
              Based in the Netherlands. Available across Europe, the US, and
              worldwide. Speaking in English and Dutch.
            </p>
          </div>
        </section>

        {/* Keynote topics */}
        <section className="py-20 md:py-28">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mb-14 md:mb-16">
              <Eyebrow>Keynote topics</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.05]"
                style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
              >
                Five talks. One big{" "}
                <span className="text-primary">idea</span>
                <Period />
              </h2>
              <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-[1.55]">
                Each talk is tailored to your audience, industry, and event
                goals. No copy-paste keynotes.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {KEYNOTE_TOPICS.map((t, i) => (
                <article
                  key={t.title}
                  className="bg-background-alt border border-border rounded-2xl p-7 md:p-10 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-display font-bold text-primary/50 text-lg shrink-0 pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl md:text-[28px] font-bold text-foreground leading-tight">
                      {t.title}
                    </h3>
                  </div>
                  <p className="text-foreground/75 leading-relaxed mb-7 max-w-4xl">
                    {t.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                        <Users className="h-4 w-4 text-primary" />
                        Best suited for
                      </p>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {t.audience}
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                        <Lightbulb className="h-4 w-4 text-primary" />
                        Key takeaways
                      </p>
                      <ul className="space-y-1.5">
                        {t.takeaways.map((tk) => (
                          <li
                            key={tk}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            {tk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="py-20 md:py-28 bg-background-alt border-y border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mb-12">
              <Eyebrow>For event organisers</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.05]"
                style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
              >
                What to expect when booking{" "}
                <span className="text-primary">Ferry</span>
                <Period />
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
              {WHAT_TO_EXPECT.map((item) => (
                <div
                  key={item.title}
                  className="bg-background border border-border rounded-2xl p-7 md:p-8"
                >
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reel */}
        <section id="reel" className="py-20 md:py-28 scroll-mt-24">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mb-12">
              <Eyebrow>Watch</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.05]"
                style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
              >
                See Ferry in <span className="text-primary">action</span>
                <Period />
              </h2>
              <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-[1.55]">
                A taste of what Ferry brings to the stage.
              </p>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-soft-xl border border-border">
              <iframe
                src="https://www.youtube.com/embed/foEehJ_pwck?start=2&controls=0&rel=0&modestbranding=1"
                title="Ferry Hoes – Speaker Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-background-alt border-y border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mb-12">
              <Eyebrow>Testimonials</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.05]"
                style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
              >
                What organisers <span className="text-primary">say</span>
                <Period />
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {TESTIMONIALS.map((t, i) => (
                <article
                  key={i}
                  className="bg-background border border-border rounded-2xl p-7 md:p-8 flex flex-col"
                >
                  <Quote className="h-5 w-5 text-primary/40 mb-4 shrink-0" />
                  <p className="text-foreground/80 italic leading-relaxed text-base flex-1">
                    "{t.quote}"
                  </p>
                  <p className="font-semibold text-foreground text-sm mt-5 pt-5 border-t border-border">
                    {t.name ? `${t.name}, ` : ""}
                    {t.company}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <h2
                className="font-display font-bold text-foreground leading-[1.05]"
                style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
              >
                Ready to inspire your{" "}
                <span className="text-primary">audience</span>
                <Period />
              </h2>
              <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
                Ferry replies personally within two working days. For formal
                bookings he is exclusively represented by Speakers Academy.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
                <PillButton to="/book" variant="primary">
                  Book Ferry
                </PillButton>
                <PillButton
                  href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                >
                  Speakers Academy
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

export default OnStage;
