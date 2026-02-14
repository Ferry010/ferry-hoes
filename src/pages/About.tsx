import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, User, BookOpen, Heart, MessageCircle, Cpu, Users, Sparkles, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/sections/Footer";
import AskFerryBubble from "@/components/AskFerryBubble";
import SEOHead from "@/components/blog/SEOHead";
import ferryBookstore from "@/assets/ferry-bookstore.jpg";
import ferryOnStage from "@/assets/ferry-on-stage.jpg";

const values = [
  {
    icon: Cpu,
    title: "Technology should serve people",
    description: "Not the other way around. Every tool, platform, and algorithm should amplify what makes us human — not replace it.",
  },
  {
    icon: Heart,
    title: "Brands must stay human",
    description: "In an age of automation and AI, the brands that win are the ones that feel real. Authenticity isn't a strategy — it's the only strategy.",
  },
  {
    icon: Users,
    title: "Real change starts with conversation",
    description: "Not with a slide deck. The best ideas emerge when people talk honestly about what matters, challenge assumptions, and build together.",
  },
];

const timeline = [
  { year: "1997", title: "Built my first website", description: "At ten years old, I created my first site — complete with a Ja Rule track and an email feature. No one ever wrote. But it felt like magic." },
  { year: "2009", title: "Graduated marketing", description: "After pivoting from development studies, I graduated in marketing — following a teacher's golden advice." },
  { year: "2016", title: "Quit corporate life", description: "Done with the lack of freedom and creativity, I quit and started as a freelance growth hacker with no backup plan." },
  { year: "2017", title: "Coined Brand Humanizing", description: "Over lunch with my best friend Jonathan, we realized something was broken — and gave it a name." },
  { year: "2018", title: "A year of research", description: "Spent a full year researching Brand Humanizing while freelancing to pay the bills. Fell in love with the intersection of tech, psychology, and innovation." },
  { year: "2020", title: "Joined a speakers agency", description: "Applied to a speakers agency, got welcomed with open arms, and started speaking professionally across the country and internationally." },
  { year: "2025", title: "The book drops", description: "Published the Brand Humanizing book — now available at all major retailers." },
];

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
        {/* Continuous visual thread */}
        <div 
          className="fixed left-0 top-0 w-1 h-full z-50 pointer-events-none"
          style={{
            background: `linear-gradient(
              180deg,
              hsl(var(--brand-gold)) 0%,
              hsl(var(--accent)) 25%,
              hsl(var(--primary)) 50%,
              hsl(var(--accent)) 75%,
              hsl(var(--brand-gold)) 100%
            )`
          }}
        />

        {/* Floating decorative orbs */}
        <div className="fixed top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="fixed top-2/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0" />

        {/* 1. Hero Section */}
        <header className="min-h-[80vh] relative overflow-hidden bg-background flex items-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container px-6 md:px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8">
                <User className="h-4 w-4" />
                About
              </span>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                The human behind the{" "}
                <span className="text-accent">brand</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Speaker, author, entrepreneur — but mostly just someone who 
                started talking once and never stopped.
              </p>
            </div>
          </div>
        </header>

        <main>
          {/* 2. The Story — early life */}
          <article className="min-h-screen bg-background/95 backdrop-blur-sm relative">
            <div className="grid md:grid-cols-2 min-h-screen">
              {/* Left: Photo */}
              <div className="relative min-h-[400px] md:min-h-screen">
                <img 
                  src={ferryBookstore}
                  alt="Ferry Hoes in a bookstore holding Brand Humanizing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Right: Bio */}
              <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 w-fit">
                  <BookOpen className="h-4 w-4" />
                  My Story
                </span>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
                  <span className="text-primary">From Delft</span> to the world stage
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I was born in 1987 in Delft, the Netherlands, in a home with a hardworking 
                    father and a stay-at-home mom. There was always someone around. My grandmother 
                    used to say, <em>"He started talking once… and never stopped."</em>
                  </p>
                  <p>
                    At school, I wasn't the confident kid. I was introverted, a little insecure, 
                    and mostly average. But at home, we had a computer — and that changed everything. 
                    I fell in love with the internet almost instantly. At ten years old, I built my 
                    first website. It was all about me. In the background, a Ja Rule track was playing, 
                    and visitors could email me directly. No one ever did. But it was my first creation 
                    on the web, and it felt like magic.
                  </p>
                  <p>
                    High school was fine. My first real job was in a greenhouse, picking dead leaves 
                    off plants on a conveyor belt. Repetitive work. But even then, I couldn't help 
                    myself — I was always looking for ways to do it faster, smarter, more efficiently.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* 3. Professional journey — split layout (text left, photo right) */}
          <article className="min-h-screen bg-background/95 backdrop-blur-sm relative">
            <div className="grid md:grid-cols-2 min-h-screen">
              {/* Left: Text */}
              <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8 w-fit">
                  <Sparkles className="h-4 w-4" />
                  The Pivot
                </span>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
                  From code to{" "}
                  <span className="text-accent">Brand Humanizing</span>
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    After graduation, I studied to become a developer. Two years in, I realized 
                    something important — I understood the logic, but I didn't enjoy the work. One 
                    of my teachers pulled me aside and said, <em>"You should probably do something 
                    in marketing. Something where you can talk. Because that's what you do all day."</em> 
                    In hindsight, it was a golden insight.
                  </p>
                  <p>
                    I started as an account manager in IT sales. At night, I invested in myself — 
                    studying Business English at Cambridge, exploring social psychology, and later 
                    specializing in change management and innovation management.
                  </p>
                  <p>
                    By 2016, I was done with corporate life. I quit and started my own business as 
                    a growth hacker, with no backup plan. Somehow, it worked.
                  </p>
                  <p>
                    In 2017, over lunch with my best friend Jonathan, something clicked. We realized 
                    that much of what we were doing felt off — technology being used to manipulate 
                    rather than empower. That day, we coined the term <strong>Brand Humanizing</strong>. 
                    We spent a full year researching the concept, and I fell in love with the perfect 
                    intersection of technology, psychology, and innovation.
                  </p>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="relative min-h-[400px] md:min-h-screen order-first md:order-last">
                <img 
                  src={ferryOnStage}
                  alt="Ferry Hoes presenting on stage"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </article>

          {/* 4. What I Believe — values grid */}
          <section className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8 mx-auto">
                    <Sparkles className="h-4 w-4" />
                    Core Beliefs
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    What I{" "}
                    <span className="text-accent">believe</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Three principles that guide everything I do — on stage, on the page, and in conversation.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {values.map((value) => (
                    <Card key={value.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-8 text-center">
                        <div className="p-4 bg-accent/10 rounded-xl inline-flex mb-6">
                          <value.icon className="h-7 w-7 text-accent" />
                        </div>
                        <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Career Timeline */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container px-6 md:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <span className="text-primary font-medium text-sm mb-2 block">Journey</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    <span className="text-primary">Career</span> highlights
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Key moments from the journey so far.
                  </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                  <div className="space-y-12">
                    {timeline.map((item, index) => (
                      <div
                        key={`${item.year}-${index}`}
                        className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                      >
                        {/* Content */}
                        <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                          <span className="text-accent font-display text-2xl font-bold">{item.year}</span>
                          <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                        {/* Spacer for the other side */}
                        <div className="hidden md:block flex-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Finding My Voice */}
          <article className="min-h-screen bg-background/95 backdrop-blur-sm relative">
            <div className="grid md:grid-cols-2 min-h-screen">
              {/* Left: Text */}
              <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8 w-fit">
                  <Mic className="h-4 w-4" />
                  Finding My Voice
                </span>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
                  From shy kid to{" "}
                  <span className="text-accent">the stage</span>
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I used to be deeply introverted. Public speaking was not on my life plan. But 
                    I realized something: this idea wouldn't spread if I kept it to myself.
                  </p>
                  <p>
                    So I reached out to a college and offered to share my story with a small group 
                    of students. Then I did it again. And again. One day, someone found me on LinkedIn 
                    and asked me to speak at a small corporate event. I used that momentum to apply 
                    to a speakers agency. They welcomed me with open arms.
                  </p>
                  <p>
                    From there, things moved fast. I started speaking across the country, then 
                    internationally. I worked with major organizations, from fast-growing companies 
                    to global corporates. I launched a podcast. One opportunity led to the next. 
                    Before I knew it, I had become one of the most booked speakers in the Netherlands.
                  </p>
                  <p>
                    That shy, introverted kid grew into someone who now spends most of his time on 
                    stages around the world. And it still feels a little surreal.
                  </p>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="relative min-h-[400px] md:min-h-screen order-first md:order-last">
                <img 
                  src={ferryOnStage}
                  alt="Ferry Hoes on stage speaking to an audience"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </article>

          {/* 7. Final CTA */}
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
        </main>

        <Footer />
        <AskFerryBubble />
      </div>
    </>
  );
};

export default About;
