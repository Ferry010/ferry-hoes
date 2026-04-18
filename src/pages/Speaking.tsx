import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Quote, Play, MessageSquarePlus, Globe, CheckCircle2, Users, Lightbulb } from "lucide-react";
import Footer from "@/components/sections/Footer";

import SEOHead from "@/components/blog/SEOHead";
import StructuredData, {
  speakingServiceSchema,
  faqPageSchema,
  reviewSchemas,
  videoObjectSchema,
  breadcrumbSchema,
} from "@/components/StructuredData";
import stagePhoto from "@/assets/ferry-filming.jpg";
import ferryBts from "@/assets/ferry-bts.jpg";
import ferryPresenting from "@/assets/ferry-presenting.jpg";

import SpeakingQA from "@/components/sections/SpeakingQA";
import ClientLogos from "@/components/sections/ClientLogos";
import SectionLabel from "@/components/SectionLabel";

const HeadingDot = () => (
  <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
);

const BOOKING_URL = "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966";

/* ── Keynote topics with expanded content ── */
const KEYNOTE_TOPICS = [
  {
    title: "Brand Humanizing: become irreplaceable in a world of AI",
    description:
      "AI can copy your content, your processes, even your customer service. What it cannot replicate is the distinctly human qualities that make people trust, follow, and buy from you. In this keynote Ferry unpacks the Brand Humanizing framework and shows how organisations can turn their human edge into an unassailable competitive advantage.",
    audience: "Leadership teams, marketing directors, and brand strategists navigating AI adoption.",
    takeaways: [
      "A practical framework for identifying what makes your brand irreplaceably human",
      "How to use AI to amplify (not replace) your distinctive qualities",
      "Real-world examples of organisations that turned their human edge into growth",
    ],
  },
  {
    title: "The Human Era of Work",
    description:
      "The AI hype has settled. The real question now is how to lead organisations where humans and machines work side by side without losing what makes work meaningful. Ferry explores the skills, culture, and leadership choices that separate thriving organisations from ones that merely survive the transition.",
    audience: "HR directors, L&D leads, and C-suite leaders shaping the next era of work.",
    takeaways: [
      "The human skills that will define value creation in the next decade",
      "How to design roles and teams that use AI without hollowing out culture",
      "Why the 'now what' moment after AI is a leadership problem, not a tech problem",
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

/* ── Testimonials (all 9, static) ── */
const TESTIMONIALS = [
  { quote: "Ferry took us on an inspiring journey, with the topic perfectly tailored to our audience. He engaged participants effectively and left more than enough room for questions.", name: "", company: "Avans Hogeschool" },
  { quote: "From our very first meeting with Ferry, the collaboration was wonderful. He's incredibly enthusiastic, flexible, and loves thinking along about both content and practical matters. The day itself was a great experience too! Participants of the keynote and the in-depth workshop said they felt inspired and gained new insights about ChatGPT and AI. In short: we're enthusiastic about Ferry!", name: "Abel", company: "Aestate" },
  { quote: "Ferry is a fantastic speaker. He adapts perfectly to the audience and showed during the workshops that he's highly flexible and alert to reactions from the room. We're very happy with the collaboration and he gave our clients plenty of inspiration they can put into practice.", name: "Almer", company: "ASR" },
  { quote: "We booked a speaker through Speakers Academy for our event, and the experience was very positive. Communication was smooth, and they actively helped find a speaker who matched our needs. The speaker made a strong contribution to the success of our event and engaged the audience brilliantly. We're very satisfied with the collaboration.", name: "Rianne", company: "Shared" },
  { quote: "Energetic, positive, funny. It was a wonderful session and we received a lot of positive feedback about Ferry's talk. Communication was pleasant, and in the absence of the regular contact person it was seamlessly picked up by a colleague. The aftercare was neatly arranged too. We're happy!", name: "", company: "CPM Nederland" },
  { quote: "Ferry is a knowledgeable and approachable speaker. You could tell at our event from the extensive Q&A, where many questions came from the audience about developments in AI. With his expertise on the synergy between humans and technology, Ferry was a strong keynote opening for our event.", name: "", company: "ACES Direct" },
  { quote: "Ferry was well prepared and it was great having him as our moderator. He thought along and took action where needed. The reactions from the audience were positive.", name: "Els", company: "Triade Vitree" },
  { quote: "I recently organized a workshop where Ferry Hoes and the Brand Humanizing Institute delivered a lecture on the Ethics of AI. No 'Death by PowerPoint,' but a smooth and captivating story that got us as an IT organization thinking. Ferry is second to none at keeping his audience engaged. I received a lot of positive feedback about his contribution to our workshop and wholeheartedly recommend him.", name: "Laurens", company: "Atos" },
  { quote: "Ferry has the gift of explaining complex theory in an accessible way. The AI experience among participants varied widely, from no experience at all to employees who already use it daily. Even those without any experience came out of the workshop surprised and very enthusiastic.", name: "Maud", company: "Chubb Fire & Security" },
];

const Speaking = () => {
  return (
    <>
      <SEOHead
        title="AI Keynote Speaker for Conferences & Corporate Events | Ferry Hoes"
        description="Book Ferry Hoes for your next event. Keynote talks on AI, the future of work, human-centred leadership, and Brand Humanizing. Trusted by global organisations. Available internationally."
        ogType="website"
        canonicalUrl="/speaking"
      />
      <StructuredData
        data={[
          speakingServiceSchema,
          faqPageSchema,
          ...reviewSchemas,
          videoObjectSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://ferryhoes.com" },
            { name: "Speaking", url: "https://ferryhoes.com/speaking" },
          ]),
        ]}
      />

      <div className="overflow-x-hidden relative">
        {/* Continuous visual thread */}
        <div
          className="fixed left-0 top-0 w-1 h-full z-50 pointer-events-none"
          style={{
            background: `linear-gradient(180deg, hsl(var(--brand-gold)) 0%, hsl(var(--accent)) 25%, hsl(var(--primary)) 50%, hsl(var(--accent)) 75%, hsl(var(--brand-gold)) 100%)`,
          }}
        />

        {/* Hero Section */}
        <header className="min-h-[80vh] relative overflow-hidden flex items-center">
          <video
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src="/videos/Ferry_Hero_vid_2026.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 backdrop-blur-[6px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-primary/70" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`, backgroundSize: "20px 20px" }}
          />
          <div className="container px-6 md:px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <SectionLabel text="Keynote Speaker" center />
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white">
                AI Keynote Speaker for{" "}
                <span className="text-accent">Conferences &amp; Corporate Events</span>
                <HeadingDot />
              </h1>
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl mx-auto mb-12">
                Talks on{" "}
                <span className="bg-accent/95 px-1 py-0.5 rounded">Brand Humanizing, the future of work, and AI leadership</span>
                . No death-by-PowerPoint. Just stories, insights, and practical
                ideas that spark real conversations and drive meaningful change.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 group">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book Ferry
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-white/40 text-white hover:bg-white hover:text-foreground"
                >
                  <a href="#speaker-reel">
                    <Play className="mr-2 h-4 w-4" />
                    Watch the reel
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main>
          <ClientLogos />

          {/* Geography / Availability Statement */}
          <section className="py-8 bg-secondary/30">
            <div className="container px-6 md:px-8">
              <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto flex items-center justify-center gap-2 flex-wrap">
                <Globe className="h-5 w-5 text-accent shrink-0" />
                Based in the Netherlands. Speaking at conferences and corporate events across Europe, the US, and worldwide. Available in English and Dutch.
              </p>
              <Link to="/press" className="text-accent hover:underline text-sm font-medium inline-flex items-center gap-1 mt-2">
                View Press Kit <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="py-16 bg-background">
            <div className="container px-6 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <SectionLabel text="Calendar" center />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Upcoming Events<HeadingDot /></h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Dates are announced regularly. Follow Ferry on LinkedIn for the latest schedule and event announcements.
                </p>
                <Button asChild variant="outline" className="rounded-full px-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground group">
                  <a href="https://www.linkedin.com/in/ferryhoes/" target="_blank" rel="noopener noreferrer">
                    Follow on LinkedIn
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* About as Speaker */}
          <article className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-6 md:px-8">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] group" style={{ perspective: "1000px" }}>
                  <div className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: "preserve-3d" }}>
                    <img src={ferryBts} alt="Ferry Hoes behind the scenes" loading="lazy" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl" style={{ backfaceVisibility: "hidden" }} />
                    <img src={ferryPresenting} alt="Ferry Hoes presenting on stage" loading="lazy" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl [transform:rotateY(180deg)]" style={{ backfaceVisibility: "hidden" }} />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                </div>

                <div>
                   <SectionLabel text="About" />
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">Meet Ferry<HeadingDot /></h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Ferry spent over a decade at the intersection of technology, marketing, and human behaviour before stepping onto stages worldwide. He built the concept of Brand Humanizing from scratch. Not borrowed, not adapted. He has spent years stress-testing it with global organisations.
                    </p>
                    <p>
                      His talks are built around one provocation: technology should make you more human, not less. Audiences leave with a clear idea of what to do on Monday morning.
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-full px-6 mt-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground group"
                      onClick={() => document.getElementById("speaker-reel")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Watch the reel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Keynote Topics — Static Cards */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <SectionLabel text="What I talk about" center />
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">Keynote topics<HeadingDot /></h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Each talk is tailored to your audience, industry, and event goals.
                  </p>
                </div>

                <div className="space-y-8">
                  {KEYNOTE_TOPICS.map((topic, i) => (
                    <article
                      key={topic.title}
                      className="rounded-2xl border border-border bg-gradient-to-br from-background to-accent/[0.03] p-8 md:p-10 shadow-soft"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-accent/40 font-mono text-sm font-medium pt-1 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{topic.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">{topic.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Users className="h-4 w-4 text-accent" /> Best suited for
                          </p>
                          <p className="text-sm text-muted-foreground">{topic.audience}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-accent" /> Key takeaways
                          </p>
                          <ul className="space-y-1.5">
                            {topic.takeaways.map((t) => (
                              <li key={t} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button asChild variant="outline" size="sm" className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                            Enquire about this talk
                            <ArrowRight className="ml-2 h-3.5 w-3.5" />
                          </a>
                        </Button>
                      </div>
                    </article>
                  ))}

                  {/* Custom topic card */}
                  <article className="rounded-2xl border border-dashed border-accent/50 bg-accent/[0.04] p-8 md:p-10 shadow-soft">
                    <div className="flex items-start gap-4 mb-4">
                      <MessageSquarePlus className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">Your topic, our expertise</h3>
                        <p className="text-muted-foreground text-sm mt-1">Don't see what you're looking for?</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
                      Ferry regularly develops custom keynotes tailored to specific industries, themes, or internal challenges. Whether it is a board retreat, a leadership offsite, Ferry regularly develops custom keynotes tailored to specific industries, themes, or internal challenges. Whether it is a board retreat, a leadership offsite, or a large-scale conference, let's explore how we can create something that fits your event perfectly. how we can create something that fits your event perfectly.
                    </p>
                    <Button asChild variant="outline" size="sm" className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                        Discuss a custom keynote
                        <ArrowRight className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </article>
                </div>

                <div className="text-center mt-12">
                  <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 group">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      Book Ferry
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <SpeakingQA />

          {/* Video Reel */}
          <section id="speaker-reel" className="py-24 md:py-32 bg-secondary/30 scroll-mt-16">
            <div className="container px-6 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <SectionLabel text="Watch" center />
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">See Ferry in action<HeadingDot /></h2>
                <p className="text-xl text-muted-foreground mb-12">Get a taste of what Ferry brings to the stage.</p>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
            </div>
          </section>

          {/* What to Expect */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container px-6 md:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <SectionLabel text="For event organisers" center />
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">What to expect when booking Ferry<HeadingDot /></h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Pre-event alignment call", desc: "Ferry schedules a call with your team to understand the audience, objectives, and context so the talk hits the right notes." },
                    { title: "Fully customised content", desc: "No copy-paste keynotes. Every talk is tailored with industry-specific examples, relevant case studies, and audience-appropriate depth." },
                    { title: "Professional delivery", desc: "Engaging, energetic, and visual. Ferry uses slides that support the story, not replace it, and keeps audiences engaged throughout." },
                    { title: "Post-event follow-up", desc: "After the event, Ferry is available for a brief debrief and happy to share key resources or frameworks with your team." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border p-6 bg-gradient-to-br from-background to-accent/[0.03]">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials — Static Grid */}
          <section className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <SectionLabel text="Testimonials" center />
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">What organisers say<HeadingDot /></h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Feedback from event organisers who have worked with Ferry.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((testimonial, i) => (
                    <article
                      key={i}
                      className="bg-gradient-to-br from-background to-accent/[0.03] rounded-2xl p-6 md:p-8 shadow-soft border-l-2 border-accent/30 flex flex-col"
                    >
                      <Quote className="h-5 w-5 text-accent/30 mb-3 shrink-0" />
                      <p className="text-muted-foreground italic leading-relaxed text-sm flex-1">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-semibold text-foreground text-sm mt-4 pt-4 border-t border-border/30">
                        {testimonial.name ? `${testimonial.name}, ` : ""}{testimonial.company}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-24 md:py-32 bg-foreground text-background">
            <div className="container px-6 md:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Ready to inspire your <span className="text-accent">audience</span><HeadingDot />
                </h2>
                <p className="text-xl text-white/70 mb-12">
                  Ferry replies personally within two working days. For formal
                  bookings he is exclusively represented by Speakers Academy.
                </p>
                <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 group">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book Ferry
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Speaking;
