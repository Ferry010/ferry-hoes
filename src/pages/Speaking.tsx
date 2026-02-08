import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mic, Users, Lightbulb, TrendingUp, Brain } from "lucide-react";
import Footer from "@/components/sections/Footer";
import FloatingChatBubble from "@/components/FloatingChatBubble";
import SEOHead from "@/components/blog/SEOHead";
import stagePhoto from "@/assets/ferry-on-stage.jpg";

const topics = [
  {
    icon: Brain,
    title: "Human-Centered Technology",
    description: "How to leverage AI and emerging tech while keeping humans at the center of innovation.",
  },
  {
    icon: TrendingUp,
    title: "Future of Work",
    description: "Navigating the changing landscape of work, leadership, and organizational culture.",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description: "Moving beyond buzzwords to create meaningful, lasting change in organizations.",
  },
  {
    icon: Users,
    title: "Leadership in the AI Age",
    description: "What it means to lead authentically when technology is reshaping everything.",
  },
];

const Speaking = () => {
  return (
    <>
      <SEOHead
        title="Speaking | Ferry Hoes"
        description="Keynotes that inspire action. No death-by-PowerPoint. Just stories, insights, and practical ideas that spark real conversations and drive meaningful change."
        ogType="website"
        canonicalUrl="/speaking"
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

        {/* Hero Section */}
        <header className="min-h-[80vh] relative overflow-hidden bg-background">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container px-6 md:px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8">
                <Mic className="h-4 w-4" />
                Keynote Speaker
              </span>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Keynotes that{" "}
                <span className="text-accent">inspire action</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                No death-by-PowerPoint. Just stories, insights, and practical ideas 
                that spark real conversations and drive meaningful change.
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
                  Book Ferry for your event
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </header>

        <main>
          {/* About as Speaker */}
          <article className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-6 md:px-8">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                <div className="relative">
                  <img 
                    src={stagePhoto}
                    alt="Ferry Hoes presenting on stage"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                </div>
                
                <div>
                  <span className="text-accent font-medium text-sm mb-2 block">About</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Meet Ferry
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Ferry Hoes is a thought leader at the intersection of technology, 
                      humanity, and brand strategy. With over two decades of experience 
                      in digital transformation, he brings a unique perspective that 
                      challenges conventional thinking.
                    </p>
                    <p>
                      His talks blend storytelling with actionable insights, leaving 
                      audiences not just inspired but equipped with concrete ideas 
                      to take back to their teams and organizations.
                    </p>
                    <p>
                      Ferry has spoken at conferences, corporate events, and leadership 
                      summits worldwide, always with the same goal: to spark conversations 
                      that lead to meaningful change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Speaking Topics */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <span className="text-accent font-medium text-sm mb-2 block">Topics</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    What Ferry speaks about
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Each talk is tailored to your audience, but these themes form 
                    the foundation of Ferry's speaking repertoire.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {topics.map((topic) => (
                    <Card key={topic.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                            <topic.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                              {topic.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {topic.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Video Reel Placeholder */}
          <section className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-6 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-accent font-medium text-sm mb-2 block">Watch</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  See Ferry in action
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Get a taste of what Ferry brings to the stage.
                </p>
                
                {/* Video placeholder */}
                <div className="aspect-video bg-foreground/5 rounded-2xl flex items-center justify-center border border-border/50">
                  <div className="text-center p-8">
                    <Mic className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">Speaker reel coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Placeholder */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container px-6 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-accent font-medium text-sm mb-2 block">Testimonials</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  What organizers say
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Feedback from event organizers who have worked with Ferry.
                </p>
                
                {/* Testimonials placeholder */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2].map((i) => (
                    <Card key={i} className="border-border/50 bg-card/50">
                      <CardContent className="p-8">
                        <div className="h-32 flex items-center justify-center">
                          <p className="text-muted-foreground italic">Testimonial coming soon</p>
                        </div>
                      </CardContent>
                    </Card>
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
                  Ready to inspire your audience?
                </h2>
                <p className="text-xl text-white/70 mb-12">
                  Let's discuss how Ferry can bring energy and insight to your next event.
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
                    Get in touch via Speakers Academy
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingChatBubble />
      </div>
    </>
  );
};

export default Speaking;
