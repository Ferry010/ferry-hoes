import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, User, BookOpen, Heart, MessageCircle, Cpu, Users, Sparkles } from "lucide-react";
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
  { year: "2016", title: "Went all in", description: "Quit my corporate job to start as freelance Growth Hacker with zero backup plan." },
  { year: "2018", title: "Brand Humanizing was born", description: "Published the first \"Brand Humanizing\" article with Jonathan Flores." },
  { year: "2019", title: "From article to institute", description: "Co-founded the Brand Humanizing Institute after a year of research." },
  { year: "2020", title: "AI Hackathon win", description: "Won a prestigious Government-hosted AI Hackathon based on Brand Humanizing principles." },
  { year: "2020", title: "First professional keynote", description: "Got contracted by Speakers Academy and delivered my first professional keynote." },
  { year: "2025", title: "The book drops", description: "Published our first book: \"Brand Humanizing\" — now available at all major retailers." },
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
                Speaker, author, entrepreneur — but mostly just someone who believes 
                technology should make us more human, not less.
              </p>
            </div>
          </div>
        </header>

        <main>
          {/* 2. The Story — split layout */}
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
                  <span className="text-primary">From entrepreneur</span> to thought leader
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    For over two decades, I've been building at the intersection of technology 
                    and human experience. I started as a digital entrepreneur, fascinated by 
                    how technology could transform the way people connect, create, and communicate.
                  </p>
                  <p>
                    Along the way, I noticed something troubling: the more advanced our tools became, 
                    the more disconnected we seemed to get. Brands lost their personality. Organizations 
                    forgot about their people. Technology became the goal rather than the means.
                  </p>
                  <p>
                    That realization became my mission. Through my book <em>Brand Humanizing</em>, 
                    my keynotes, and my podcast, I help organizations rediscover what makes them 
                    authentically human — and use technology to amplify it, not replace it.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* 3. What I Believe — values grid */}
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

          {/* 4. Career Timeline */}
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
                        key={item.year}
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

          {/* 5. Off-Stage / Personal */}
          <article className="min-h-screen bg-background/95 backdrop-blur-sm relative">
            <div className="grid md:grid-cols-2 min-h-screen">
              {/* Left: Text */}
              <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8 w-fit">
                  <Heart className="h-4 w-4" />
                  Off Stage
                </span>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
                  Beyond the{" "}
                  <span className="text-accent">spotlight</span>
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    When I'm not on stage or behind a keyboard, I'm usually making music. 
                    I've been producing tracks and experimenting with sound for as long as 
                    I can remember — it's my creative reset button.
                  </p>
                  <p>
                    I'm endlessly curious about AI — not just as a tool, but as a creative 
                    collaborator. I spend weekends tinkering with new models, building prototypes, 
                    and imagining what's next.
                  </p>
                  <p>
                    And then there's coffee. Good coffee, long conversations, and the kind of 
                    questions that don't have easy answers. That's where the best ideas live.
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

          {/* 6. Final CTA */}
          <section className="py-24 md:py-32 bg-foreground text-background">
            <div className="container px-6 md:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Want to{" "}
                  <span className="text-brand-gold">work together?</span>
                </h2>
                <p className="text-xl text-white/70 mb-12 leading-relaxed">
                  Whether it's a keynote, a collaboration, or just a good conversation —
                  I'd love to hear from you.
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
