import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import { ArrowRight, Mic, Users, Lightbulb, TrendingUp, Brain, Quote, ChevronDown } from "lucide-react";
import Footer from "@/components/sections/Footer";
import AskFerryBubble from "@/components/AskFerryBubble";
import SEOHead from "@/components/blog/SEOHead";
import stagePhoto from "@/assets/ferry-speaking.jpg";

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

const TestimonialCard = ({ quote, name, company }: { quote: string; name: string; company: string }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="group relative overflow-hidden bg-gradient-to-br from-background to-accent/[0.03] rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 border-l-2 border-accent/30 hover:border-accent border-t border-r border-b border-t-transparent border-r-transparent border-b-transparent hover:border-t-accent/20 hover:border-r-accent/20 hover:border-b-accent/20 h-full flex flex-col">
      <Quote className="h-5 w-5 text-accent/30 mb-3 shrink-0" />
      <p className={`text-muted-foreground italic leading-relaxed text-sm transition-all duration-300 ${expanded ? "" : "line-clamp-2"}`}>
        "{quote}"
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-accent text-xs font-medium mt-2 hover:underline inline-flex items-center gap-1 self-start"
      >
        {expanded ? "Show less" : "Read full review"}
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>
      <p className="font-semibold text-foreground text-sm mt-auto pt-4">
        {name ? `${name}, ` : ""}{company}
      </p>
    </article>
  );
};

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

          {/* Testimonials */}
          <section className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <span className="text-accent font-medium text-sm mb-2 block">Testimonials</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    What organizers say
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Feedback from event organizers who have worked with Ferry.
                  </p>
                </div>

                <Carousel
                  opts={{ align: "start", loop: true }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-6 py-4">
                    {[
                      { quote: "Ferry took us on an inspiring journey, with the topic perfectly tailored to our audience. He engaged participants effectively and left more than enough room for questions.", name: "", company: "Avans Hogeschool" },
                      { quote: "From our very first meeting with Ferry, the collaboration was wonderful. He's incredibly enthusiastic, flexible, and loves thinking along about both content and practical matters. The day itself was a great experience too! Participants of the keynote and the in-depth workshop said they felt inspired and gained new insights about ChatGPT and AI. In short: we're enthusiastic about Ferry!", name: "Abel", company: "Aestate" },
                      { quote: "Ferry is a fantastic speaker. He adapts perfectly to the audience and showed during the workshops that he's highly flexible and alert to reactions from the room. We're very happy with the collaboration and he gave our clients plenty of inspiration they can put into practice.", name: "Almer", company: "ASR" },
                      { quote: "We booked a speaker through Speakers Academy for our event, and the experience was very positive. Communication was smooth, and they actively helped find a speaker who matched our needs. The speaker made a strong contribution to the success of our event and engaged the audience brilliantly. We're very satisfied with the collaboration.", name: "Rianne", company: "Shared" },
                      { quote: "Energetic, positive, funny. It was a wonderful session and we received a lot of positive feedback about Ferry's talk. Communication was pleasant, and in the absence of the regular contact person it was seamlessly picked up by a colleague. The aftercare was neatly arranged too. We're happy!", name: "", company: "CPM Nederland" },
                      { quote: "Ferry is a knowledgeable and approachable speaker. You could tell at our event from the extensive Q&A, where many questions came from the audience about developments in AI. With his expertise on the synergy between humans and technology, Ferry was a strong keynote opening for our event.", name: "", company: "ACES Direct" },
                      { quote: "Ferry was well prepared and it was great having him as our moderator. He thought along and took action where needed. The reactions from the audience were positive.", name: "Els", company: "Triade Vitree" },
                      { quote: "I recently organized a workshop where Ferry Hoes and the Brand Humanizing Institute delivered a lecture on the Ethics of AI. No 'Death by PowerPoint,' but a smooth and captivating story that got us as an IT organization thinking. Ferry is second to none at keeping his audience engaged. I received a lot of positive feedback about his contribution to our workshop and wholeheartedly recommend him.", name: "Laurens", company: "Atos" },
                      { quote: "Ferry has the gift of explaining complex theory in an accessible way. The AI experience among participants varied widely — from no experience at all to employees who already use it daily. Even those without any experience came out of the workshop surprised and very enthusiastic.", name: "Maud", company: "Chubb Fire & Security" },
                    ].map((testimonial, i) => (
                      <CarouselItem key={i} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                        <TestimonialCard quote={testimonial.quote} name={testimonial.name} company={testimonial.company} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 md:-left-12" />
                  <CarouselNext className="right-0 md:-right-12" />
                  <CarouselDots className="mt-8" />
                </Carousel>
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
        <AskFerryBubble />
      </div>
    </>
  );
};

export default Speaking;
