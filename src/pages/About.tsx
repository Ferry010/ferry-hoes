import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Footer from "@/components/sections/Footer";
import AskFerryBubble from "@/components/AskFerryBubble";
import SEOHead from "@/components/blog/SEOHead";

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
        {/* Title */}
        <header className="pt-32 pb-16 bg-background">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                About <span className="text-accent">Ferry</span>
              </h1>
            </div>
          </div>
        </header>

        {/* Biography */}
        <main className="pb-24 bg-background">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I was born in 1987 in Delft, the Netherlands, into a home with a hardworking
                father and a stay-at-home mom. There was always someone around. I was a happy,
                cheerful kid, and I started talking early. My grandmother used to say,{" "}
                <em>"He started talking once… and never stopped."</em>
              </p>
              <p>
                At home, I was that talkative, curious kid. At school, I wasn't nearly as
                confident. I was introverted, a little insecure, and mostly average. But at
                home, we had a computer, and that changed everything. I got hooked on the
                internet almost instantly. At ten years old, I built my first website, and it
                was all about music. In the background, a Ja Rule track was playing, and
                visitors could email me directly to talk about hip-hop. No one ever did. But
                it was my first creation on the web, and to me it felt like building a tiny
                corner of the future.
              </p>
              <p>
                High school was fine, but that's where something important happened. I didn't
                just discover music, I discovered making music. I started writing lyrics, then
                recording them over beats. Before long, I was learning how to mix, master, and
                produce tracks myself. I spent hours behind a microphone and even more hours
                behind a screen, shaping sound.
              </p>
              <p>
                Over time, I found my way into a large group of semi-known artists. I performed
                regularly in small venues, entered contests, and even made it to the final
                sixteen of the Junior Eurovision auditions in Amsterdam. One of my demos was
                played on national radio as part of a competition. At the time, I just thought
                I was chasing music. I had no idea I was actually building stage presence,
                confidence, and a voice that would later carry me onto very different stages.
              </p>
              <p>
                After high school, I enrolled in a program to become a developer. Two years in,
                I realized something important. I understood the logic, but I didn't enjoy the
                work. One of my teachers pulled me aside and said,{" "}
                <em>"You should probably do something in marketing. Something where you can
                talk. Because that's what you do all day."</em>
              </p>
              <p>
                It sounded like casual advice. In hindsight, it was a golden insight. I packed
                my bags and enrolled in a marketing program. I enjoyed the classes and quickly
                noticed where my strengths were. I had the best grades in English, business
                studies, and social sciences.
              </p>
              <p>
                My classmates also discovered something about me: I wasn't afraid of
                presentations. In fact, I loved them. Looking back, that was another quiet
                cornerstone of my future career, even if I didn't realize it at the time.
              </p>
              <p>
                After four years studying marketing, I faced a choice: keep studying or start
                working. I chose work. I believed real-world experience would teach me more,
                and I could always study the subjects that truly interested me later.
              </p>
              <p>
                I started as an account manager in IT sales. During the day, I sold technology.
                At night, I invested in myself. I went deeper into marketing, studied Business
                English at Cambridge, explored social psychology, and later specialized in
                change management and innovation management.
              </p>
              <p>
                By 2016, I was done with corporate life. The lack of freedom and creativity
                pushed me to make a radical decision. I quit and started my own business as
                a growth hacker, with no backup plan. No safety net. Just a belief that I
                would figure it out along the way.
              </p>
              <p>
                And somehow, it worked.
              </p>
              <p>
                In 2017, I was having lunch with my best friend Jonathan. We were both working
                as growth hackers, and during that conversation something clicked. We realized
                that much of what we were doing felt off. Endless experiments on consumers,
                all for marginal revenue gains. Technology being used to manipulate rather than
                empower. If every company kept going down that path, the future would be full
                of identical organizations, running the same tech, delivering the same soulless
                experiences.
              </p>
              <p>
                That day, we coined the term <strong>Brand Humanizing</strong>.
              </p>
              <p>
                We spent a full year researching the concept while I kept freelancing to pay
                the bills. The research worked. But more importantly, I fell in love with the
                idea. It was the perfect intersection of everything that fascinated me:
                technology, psychology, and innovation.
              </p>
              <p>
                I knew we had to share it with the world.
              </p>
              <p>
                There was just one problem. I knew how to handle a stage musically, but I had
                zero experience with a business audience. Public speaking was never part of the
                plan. But I realized something: this idea wouldn't spread if I kept it to
                myself.
              </p>
              <p>
                So I reached out to a college and offered to share my story with a small group
                of students. Just a handful of people in a classroom, simply to try out the
                story. And to my surprise, it worked.
              </p>
              <p>
                Then I did it again.
              </p>
              <p>
                And again.
              </p>
              <p>
                One day, someone found me on LinkedIn and asked me to speak at a small corporate
                event. The talk went well, and I used that momentum to apply to a speakers
                agency. They welcomed me with open arms. From there, things moved fast.
              </p>
              <p>
                I started speaking across the country, then internationally. I worked with major
                organizations, from fast-growing companies to global corporates. I launched a
                podcast. One opportunity led to the next. Before I knew it, I had become one
                of the most booked speakers in the Netherlands.
              </p>
              <p>
                So the shy, introverted kid who once built a website no one visited grew into
                someone who now spends most of his time on stages around the world.
              </p>
              <p>
                And in a strange way, it all connects.
              </p>
              <p>
                The kid who loved computers.<br />
                The teenager who performed on small stages.<br />
                The marketer fascinated by human behavior.<br />
                The growth hacker who questioned the ethics of technology.
              </p>
              <p>
                It all led here.
              </p>
              <p>
                Because what I love most is helping people and technology work together in a
                way that actually makes work, organizations, and everyday life more human.
              </p>
              <p>
                Put me on a stage, hand me a microphone, and let me tell that story, and I'm
                exactly where I'm supposed to be.
              </p>
            </div>
          </div>
        </main>

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
