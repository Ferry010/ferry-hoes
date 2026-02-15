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
                I was born in 1987 in Delft, the Netherlands, in a home with a hardworking
                father and a stay-at-home mom. There was always someone around. My grandmother
                used to say, <em>"He started talking once… and never stopped."</em>
              </p>
              <p>
                At school, I wasn't the confident kid. I was introverted, a little insecure,
                and mostly average. But at home, we had a computer, and that changed everything.
                I fell in love with the internet almost instantly. At ten years old, I built my
                first website. It was all about me. In the background, a Ja Rule track was playing,
                and visitors could email me directly. No one ever did. But it was my first creation
                on the web, and it felt like magic.
              </p>
              <p>
                High school was fine. My first real job was in a greenhouse, picking dead leaves
                off plants on a conveyor belt. Repetitive work. But even then, I couldn't help
                myself. I was always looking for ways to do it faster, smarter, more efficiently.
              </p>
              <p>
                After graduation, I studied to become a developer. Two years in, I realized
                something important. I understood the logic, but I didn't enjoy the work. One
                of my teachers pulled me aside and said, <em>"You should probably do something
                in marketing. Something where you can talk. Because that's what you do all day."</em>{" "}
                At the time, it sounded like casual advice. In hindsight, it was a golden insight.
              </p>
              <p>
                After four years studying marketing, I faced a choice: keep studying or start
                working. I chose work. I believed real-world experience would teach me more,
                and I could always study the subjects that truly interested me later.
              </p>
              <p>
                I started as an account manager in IT sales. At night, I invested in myself.
                I dove deeper into marketing, studied Business English at Cambridge, explored
                social psychology, and later specialized in change management and innovation
                management.
              </p>
              <p>
                By 2016, I was done with corporate life. The lack of freedom and creativity
                pushed me to make a radical decision. I quit and started my own business as
                a growth hacker, with no backup plan. Somehow, it worked.
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
                We spent a full year researching the concept, while I kept freelancing to pay
                the bills. The research worked. But more importantly, I fell in love with the
                idea. It was the perfect intersection of everything that fascinated me:
                technology, psychology, and innovation.
              </p>
              <p>
                I knew we had to share this with the world.
              </p>
              <p>
                There was just one catch. I used to be deeply introverted. Public speaking was
                not on my life plan. But I realized something: this idea wouldn't spread if I
                kept it to myself. So I reached out to a college and offered to share my story
                with a small group of students. Then I did it again. And again.
              </p>
              <p>
                One day, someone found me on LinkedIn and asked me to speak at a small corporate
                event. I used that momentum to apply to a speakers agency. They welcomed me
                with open arms. From there, things moved fast.
              </p>
              <p>
                I started speaking across the country, then internationally. I worked with major
                organizations, from fast-growing companies to global corporates. I launched a
                podcast. One opportunity led to the next. Before I knew it, I had become one
                of the most booked speakers in the Netherlands.
              </p>
              <p>
                So that shy, introverted kid grew into someone who now spends most of his time
                on stages around the world. And it still feels a little surreal.
              </p>
              <p>
                But in the end, it makes perfect sense. Because what I love most is helping
                people and technology work together in a way that actually makes work and life
                more human.
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
