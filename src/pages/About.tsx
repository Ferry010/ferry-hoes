import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { personSchema, breadcrumbSchema } from "@/components/StructuredData";

import ferryBrandHumanizing from "@/assets/ferry-brand-humanizing.jpg";
import ferrySpeakingAudience from "@/assets/ferry-speaking-audience.jpg";
import ferryBookstore from "@/assets/ferry-bookstore.jpg";
import ferryPresenting from "@/assets/ferry-presenting.jpg";
import ferryBts from "@/assets/ferry-bts.jpg";

const About = () => {
  return (
    <>
      <SEOHead
        title="About Ferry Hoes | Speaker, Author & Brand Humanizing Pioneer"
        description="The story of Ferry Hoes, from building websites at age 10 to becoming one of the Netherlands' most booked keynote speakers. Discover the journey behind Brand Humanizing."
        ogType="website"
        canonicalUrl="/about"
      />
      <StructuredData
        data={[
          personSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://ferryhoes.com" },
            { name: "About", url: "https://ferryhoes.com/about" },
          ]),
        ]}
      />

      <div className="overflow-x-hidden relative">
        {/* Hero with Image Collage */}
        <header className="bg-background pt-24 pb-16">
          <div className="container px-6 md:px-8">
            <div className="flex flex-col items-center">
              {/* Image Collage */}
              <div className="w-full max-w-6xl relative mb-12">
                {/* Desktop: single row */}
                <div className="hidden md:flex gap-4">
                  {[
                    { src: ferryBrandHumanizing, alt: "Ferry Hoes with Brand Humanizing banner", rotate: "-1.5deg" },
                    { src: ferrySpeakingAudience, alt: "Ferry Hoes speaking to audience", rotate: "1deg" },
                    { src: ferryPresenting, alt: "Ferry Hoes presenting", rotate: "-0.5deg" },
                    { src: ferryBookstore, alt: "Ferry Hoes in a bookstore", rotate: "1.5deg" },
                    { src: ferryBts, alt: "Ferry Hoes behind the scenes", rotate: "-1deg" },
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="flex-1 h-[280px] lg:h-[320px] rounded-2xl overflow-hidden shadow-lg relative animate-fade-in"
                      style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both", transform: `rotate(${img.rotate})` }}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-center" />
                      <div className="brand-hero-overlay" />
                    </div>
                  ))}
                </div>

                {/* Mobile: horizontal scroll */}
                <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-2 px-2">
                  {[
                    { src: ferryBrandHumanizing, alt: "Ferry with Brand Humanizing banner" },
                    { src: ferrySpeakingAudience, alt: "Ferry speaking to audience" },
                    { src: ferryPresenting, alt: "Ferry presenting" },
                    { src: ferryBookstore, alt: "Ferry in bookstore" },
                    { src: ferryBts, alt: "Ferry behind the scenes" },
                  ].map((img, i) => (
                    <div key={i} className="w-[60vw] h-64 flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-lg relative animate-fade-in" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}>
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-center" />
                      <div className="brand-hero-overlay" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Headline + Subtitle */}
              <div className="max-w-3xl text-center">
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                  My <span className="text-accent">story</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.45s", animationFillMode: "both" }}>
                  International speaker, published author, and entrepreneur on a mission to unleash super-human potential with the help of technology.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Biography, structured with subheadings */}
        <main className="pb-24 bg-background">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto">

              {/* The early years */}
              <section className="mb-16">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">The early years</h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I was born in 1987 in Delft, the Netherlands, into a home with a hardworking father and a stay-at-home mom. There was always someone around, always conversation in the house, always movement and energy.
                  </p>
                  <p>
                    I was a cheerful kid who started talking early. My grandmother used to laugh and say, <em>"He started talking once… and never stopped."</em> That line would follow me for the rest of my life.
                  </p>
                  <p>
                    At home, I was curious, talkative, and creative, but at school I was a different kid. Introverted, a little insecure, and mostly average. The place where I felt most at ease was behind a computer screen. At ten years old, I built my first website, entirely about music.
                  </p>
                </div>
              </section>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-accent pl-6 py-2 my-12">
                <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed">
                  "He started talking once… and never stopped."
                </p>
                <cite className="text-sm text-muted-foreground mt-2 block not-italic">Ferry's grandmother</cite>
              </blockquote>

              {/* Discovering the stage */}
              <section className="mb-16">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Discovering the stage</h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    High school was where something fundamental changed. I didn't just discover music, I discovered <em>making</em> music. I started writing lyrics, recording them over beats, and teaching myself how to mix and master tracks.
                  </p>
                  <p>
                    What started as a hobby quickly grew more serious. I joined a group of semi-known artists, performed in small venues, entered competitions, and even made it to the final sixteen of the Junior Eurovision auditions in Amsterdam. One of my demos was played on national radio.
                  </p>
                  <p>
                    At the time, I thought I was just chasing music, but in reality I was building something much more valuable: stage presence, confidence, and the ability to hold an audience's attention.
                  </p>
                </div>
              </section>

              {/* From tech sales to big ideas */}
              <section className="mb-16">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">From tech sales to big ideas</h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    After studying development, and realising I didn't enjoy it, a teacher pulled me aside: <em>"You should probably do something in marketing. Something where you can talk."</em> It sounded like casual advice, but in hindsight it was a golden insight.
                  </p>
                  <p>
                    I switched to marketing, where I discovered my strengths. After graduating, I chose work over more studies and started as an account manager in IT sales. During the day, I sold technology. At night, I invested in myself, studying Business English at Cambridge, exploring social psychology, and specialising in change management and innovation.
                  </p>
                  <p>
                    By 2016, corporate life felt restrictive and creatively suffocating. I quit my job and started my own business as a growth hacker, with no backup plan and no safety net. Just a belief that I would figure it out along the way.
                  </p>
                </div>
              </section>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-12">
                <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed">
                  "If every company followed that path, the future would be filled with identical organisations delivering the same soulless experiences."
                </p>
              </blockquote>

              {/* The birth of Brand Humanizing */}
              <section className="mb-16">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">The birth of Brand Humanizing</h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    In 2017, I was having lunch with my best friend Jonathan. We were both working as growth hackers, and during that conversation something clicked. We realised that much of what we were doing felt off. Endless experiments on consumers, all for marginal revenue gains. Technology being used to manipulate instead of empower.
                  </p>
                  <p>
                    That day, we coined the term <strong>Brand Humanizing</strong>. We spent a full year researching the concept while I freelanced to pay the bills. It was the perfect intersection of everything that fascinated me: technology, psychology, innovation, and human behaviour.
                  </p>
                  <p>
                    There was just one problem. I had zero experience with a business audience. Public speaking was never part of the plan. Still, I realised this idea would never spread if I kept it to myself. So I reached out to a college and offered to share my story with a small group of students. To my surprise, it worked.
                  </p>
                </div>
              </section>

              {/* Where I am now */}
              <section className="mb-16">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Where I am now</h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    One day, someone found me on LinkedIn and asked me to speak at a small corporate event. The talk went well, and I used that momentum to apply to a speakers agency. From there things moved quickly. Speaking across the country, then internationally, working with major organisations from fast-growing companies to global corporates.
                  </p>
                  <p>
                    Looking back, it all connects. The talkative kid at home. The introverted student at school. The teenager writing lyrics. The marketer fascinated by human behaviour. Every phase was preparing me for the same thing: standing on a stage and helping organisations find a better balance between people and technology.
                  </p>
                  <p>
                    My life goal is to build Brand Humanizing into a global movement that reshapes how work is designed and how technology is used, and to use that success to one day buy UD Las Palmas and bring the club to its first-ever European glory.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </main>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 md:text-center">
                Key <span className="text-accent">milestones</span>
              </h2>
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
                <div className="space-y-8 md:space-y-12">
                  {[
                    { key: "1987", year: "1987", text: "Born in Delft, the Netherlands" },
                    { key: "1997", year: "1997", text: "Built my first website at age 10" },
                    { key: "2002", year: "2002", text: "Made it to the final 16 of the Junior Eurovision auditions" },
                    { key: "2009", year: "2009", text: "Started my career in IT sales" },
                    { key: "2016", year: "2016", text: "Quit corporate life to become a full-time entrepreneur and business owner" },
                    { key: "2017", year: "2017", text: "Coined Brand Humanizing" },
                    { key: "2019", year: "2019", text: "Founded the Brand Humanizing Institute" },
                    { key: "2021", year: "2021", text: "Joined Speakers Academy as my agent" },
                    { key: "2022", year: "2022", text: "Won the prestigious Dutch Government's AI Hackathon" },
                    { key: "2025a", year: "2025", text: "Over 40 stages annually, making it to the top most booked speakers in the country" },
                    { key: "2025b", year: "2025", text: "Published the Brand Humanizing book" },
                  ].map((item, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                      <div key={item.key} className="relative flex items-start md:items-center">
                        <span className="absolute left-4 md:left-1/2 top-5 md:top-1/2 h-3 w-3 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-accent z-10" />
                        <div className="ml-10 md:hidden">
                          <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
                            <span className="font-display font-bold text-accent text-lg">{item.year}</span>
                            <p className="text-muted-foreground mt-1 text-sm">{item.text}</p>
                          </div>
                        </div>
                        <div className="hidden md:grid md:grid-cols-2 md:gap-8 w-full">
                          {isLeft ? (
                            <>
                              <div className="flex justify-end">
                                <div className="bg-card border border-border rounded-xl p-4 shadow-sm max-w-xs text-right">
                                  <span className="font-display font-bold text-accent text-lg">{item.year}</span>
                                  <p className="text-muted-foreground mt-1 text-sm">{item.text}</p>
                                </div>
                              </div>
                              <div />
                            </>
                          ) : (
                            <>
                              <div />
                              <div className="flex justify-start">
                                <div className="bg-card border border-border rounded-xl p-4 shadow-sm max-w-xs">
                                  <span className="font-display font-bold text-accent text-lg">{item.year}</span>
                                  <p className="text-muted-foreground mt-1 text-sm">{item.text}</p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Want to{" "}
                <span className="text-brand-gold">work together?</span>
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Because what I love most is helping people and technology work together
                in a way that actually makes work and life more human.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 group"
              >
                <a
                  href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book as speaker
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
