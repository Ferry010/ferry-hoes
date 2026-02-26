import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Footer from "@/components/sections/Footer";
import AskFerryBubble from "@/components/AskFerryBubble";
import SEOHead from "@/components/blog/SEOHead";
import ferryBrandHumanizing from "@/assets/ferry-brand-humanizing.jpg";
import ferrySpeakingAudience from "@/assets/ferry-speaking-audience.jpg";
import ferryBookstore from "@/assets/ferry-bookstore.jpg";
import ferryPresenting from "@/assets/ferry-presenting.jpg";
import ferryBts from "@/assets/ferry-bts.jpg";

const About = () => {
  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Send a message"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <>
      <SEOHead
        title="About Ferry | Ferry Hoes"
        description="International speaker, published author, and entrepreneur on a mission to unleash super-human potential with the help of technology."
        ogType="website"
        canonicalUrl="/about"
      />

      <div className="overflow-x-hidden relative">
        {/* Hero with Image Collage */}
        <header className="bg-background pt-24 pb-16">
          <div className="container px-6 md:px-8">
            <div className="flex flex-col items-center">
              {/* Image Collage */}
              <div className="w-full max-w-4xl relative mb-12">
                {/* Desktop collage */}
                <div className="hidden md:block relative h-[440px] lg:h-[480px]">
                  <div className="absolute top-0 left-[5%] w-[38%] h-[55%] rounded-2xl overflow-hidden shadow-lg rotate-[-2deg] animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                    <img src={ferryBrandHumanizing} alt="Ferry Hoes with Brand Humanizing banner" className="w-full h-full object-cover object-center" />
                    <div className="brand-hero-overlay" />
                  </div>
                  <div className="absolute top-0 right-[22%] w-[28%] h-[48%] rounded-2xl overflow-hidden shadow-lg rotate-[1.5deg] animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                    <img src={ferrySpeakingAudience} alt="Ferry Hoes speaking to audience" className="w-full h-full object-cover object-top" />
                    <div className="brand-hero-overlay" />
                  </div>
                  <div className="absolute top-[10%] right-[2%] w-[22%] h-[40%] rounded-2xl overflow-hidden shadow-lg rotate-[-1deg] animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                    <img src={ferryPresenting} alt="Ferry Hoes presenting" className="w-full h-full object-cover object-top" />
                    <div className="brand-hero-overlay" />
                  </div>
                  <div className="absolute bottom-[5%] left-[15%] w-[30%] h-[48%] rounded-2xl overflow-hidden shadow-lg rotate-[2deg] animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                    <img src={ferryBookstore} alt="Ferry Hoes in a bookstore" className="w-full h-full object-cover object-center" />
                    <div className="brand-hero-overlay" />
                  </div>
                  <div className="absolute bottom-[0%] right-[15%] w-[28%] h-[42%] rounded-2xl overflow-hidden shadow-lg rotate-[1deg] animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                    <img src={ferryBts} alt="Ferry Hoes behind the scenes" className="w-full h-full object-cover object-center" />
                    <div className="brand-hero-overlay" />
                  </div>
                </div>

                {/* Mobile compact grid */}
                <div className="md:hidden grid grid-cols-2 gap-3">
                  {[
                    { src: ferryBrandHumanizing, alt: "Ferry with Brand Humanizing banner", span: "col-span-2 h-48" },
                    { src: ferrySpeakingAudience, alt: "Ferry speaking to audience", span: "h-36" },
                    { src: ferryBookstore, alt: "Ferry in bookstore", span: "h-36" },
                  ].map((img, i) => (
                    <div key={i} className={`${img.span} rounded-2xl overflow-hidden shadow-lg relative animate-fade-in`} style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}>
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

        {/* Biography */}
        <main className="pb-24 bg-background">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I was born in 1987 in Delft, the Netherlands, into a home with a hardworking
                father and a stay-at-home mom. There was always someone around, always
                conversation in the house, always movement and energy. I was a cheerful kid
                who started talking early, the kind of child who would strike up conversations
                with anyone within earshot. My grandmother used to laugh and say,{" "}
                <em>"He started talking once… and never stopped,"</em> and that line would
                follow me for the rest of my life.
              </p>
              <p>
                At home, I was curious, talkative, and creative, but at school I was a
                different kid. I was introverted, a little insecure, and mostly average.
                Nothing about me suggested a future on stages or in front of large audiences.
                The place where I felt most at ease wasn't the classroom or the playground,
                but behind a computer screen. We had a computer at home, and I got hooked on
                the internet almost instantly. At ten years old, I built my first website, and
                it was entirely about music. In the background, a Ja Rule track was playing,
                and visitors could email me directly to talk about hip-hop. No one ever did,
                but it didn't matter. It felt like building a tiny corner of the future.
              </p>
              <p>
                High school was where something fundamental changed. I didn't just discover
                music, I discovered making music. I started writing lyrics, recording them
                over beats, and teaching myself how to mix and master tracks. What started as
                a hobby quickly grew more serious. I joined a group of semi-known artists,
                performed in small venues, entered competitions, and even made it to the final
                sixteen of the Junior Eurovision auditions in Amsterdam. One of my demos was
                played on national radio. At the time, I thought I was just chasing music, but
                in reality I was building something much more valuable: stage presence,
                confidence, and the ability to hold an audience's attention.
              </p>
              <p>
                After high school, I enrolled in a program to become a developer. Two years
                in, I realized something important. I understood the logic, but I didn't enjoy
                the work. One of my teachers pulled me aside and said,{" "}
                <em>"You should probably do something in marketing. Something where you can
                talk. Because that's what you do all day."</em> It sounded like casual advice,
                but in hindsight it was a golden insight.
              </p>
              <p>
                I switched to a marketing program, where I quickly discovered my strengths. I
                had the best grades in English, business studies, and social sciences, and my
                classmates noticed something about me: I wasn't afraid of presentations. In
                fact, I enjoyed them. Looking back, that was another quiet cornerstone of my
                future career.
              </p>
              <p>
                After graduating, I chose work over more studies and started as an account
                manager in IT sales. During the day, I sold technology. At night, I invested
                in myself, studying Business English at Cambridge, exploring social psychology,
                and later specializing in change management and innovation management. I was
                slowly building a unique mix of technology, human behavior, and organizational
                thinking, even though I didn't yet know where it would lead.
              </p>
              <p>
                By 2016, I had reached a breaking point. Corporate life felt restrictive and
                creatively suffocating. So I made a radical decision: I quit my job and started
                my own business as a growth hacker, with no backup plan and no safety net. Just
                a belief that I would figure it out along the way.
              </p>
              <p>
                And somehow, it worked.
              </p>
              <p>
                In 2017, I was having lunch with my best friend Jonathan. We were both working
                as growth hackers, and during that conversation something clicked. We realized
                that much of what we were doing felt off. Endless experiments on consumers, all
                for marginal revenue gains. Technology being used to manipulate instead of
                empower. If every company followed that path, the future would be filled with
                identical organizations delivering the same soulless experiences.
              </p>
              <p>
                That day, we coined the term <strong>Brand Humanizing</strong>. We spent a
                full year researching the concept while I freelanced to pay the bills. The
                research worked, but more importantly, I fell in love with the idea. It was the
                perfect intersection of everything that fascinated me: technology, psychology,
                innovation, and human behavior. I knew we had to share it with the world.
              </p>
              <p>
                There was just one problem. I knew how to handle a stage musically, but I had
                zero experience with a business audience. Public speaking was never part of the
                plan. Still, I realized this idea would never spread if I kept it to myself. So
                I reached out to a college and offered to share my story with a small group of
                students. Just a handful of people in a classroom, simply to try out the story.
                To my surprise, it worked. Then I did it again, and again, slowly gaining
                confidence and refining the message.
              </p>
              <p>
                One day, someone found me on LinkedIn and asked me to speak at a small corporate
                event. The talk went well, and I used that momentum to apply to a speakers
                agency. They welcomed me with open arms, and from there things moved quickly. I
                began speaking across the country, then internationally, working with major
                organizations from fast-growing companies to global corporates. I launched a
                podcast, published content, and one opportunity led to the next. Before I knew
                it, I had become one of the most booked speakers in the Netherlands.
              </p>
              <p>
                Looking back, it all connects. The talkative kid at home. The introverted
                student at school. The teenager writing lyrics and performing on small stages.
                The marketer fascinated by human behavior. The growth hacker who started
                questioning the ethics of technology. Every phase was preparing me for the same
                thing: standing on a stage and helping organizations find a better balance
                between people and technology.
              </p>
              <p>
                Because what I love most is helping people and technology work together in a
                way that makes organizations stronger and life more human. My life goal is to
                build Brand Humanizing into a global movement that reshapes how work is designed
                and how technology is used, and to use that success to one day buy UD Las Palmas
                and bring the club to its first-ever European glory.
              </p>
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
                {/* Center line */}
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
                        {/* Dot */}
                        <span className="absolute left-4 md:left-1/2 top-5 md:top-1/2 h-3 w-3 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-accent z-10" />

                        {/* Mobile: always right of line */}
                        <div className="ml-10 md:hidden">
                          <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
                            <span className="font-display font-bold text-accent text-lg">{item.year}</span>
                            <p className="text-muted-foreground mt-1 text-sm">{item.text}</p>
                          </div>
                        </div>

                        {/* Desktop: alternating */}
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openMessagePanel}
                  className="rounded-full px-8 border-white/20 text-white hover:bg-white/10 hover:text-white group"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send a message
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <AskFerryBubble />
      </div>
    </>
  );
};

export default About;
