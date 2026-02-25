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
import { ArrowRight, Mic, Quote, ChevronDown } from "lucide-react";
import Footer from "@/components/sections/Footer";
import AskFerryBubble from "@/components/AskFerryBubble";
import SEOHead from "@/components/blog/SEOHead";
import stagePhoto from "@/assets/ferry-filming.jpg";
import speakingBlue from "@/assets/ferry-speaking-2.jpg";
import speakingAestate from "@/assets/ferry-speaking-aestate.jpg";
import ferryPortrait from "@/assets/ferry-portrait.jpg";

import SpeakingQA from "@/components/sections/SpeakingQA";
import ClientLogos from "@/components/sections/ClientLogos";


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
        <header className="min-h-[80vh] relative overflow-hidden flex items-center">
          {/* Video background */}
          <video
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src="/videos/Ferry_Hero_vid_2026.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          {/* Abstract frosted overlay */}
          <div className="absolute inset-0 backdrop-blur-[6px]" />
          {/* Teal-tinted dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-primary/70" />
          {/* Subtle dot pattern */}
          <div 
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          <div className="container px-6 md:px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white backdrop-blur-sm rounded-full text-sm font-medium mb-8">
                <Mic className="h-4 w-4" />
                Keynote Speaker
              </span>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                Keynotes that{" "}
                <span className="text-accent">inspire action</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl mx-auto mb-12">
                No death-by-PowerPoint. Just{" "}
                <span className="bg-accent/95 px-1 py-0.5 rounded">stories, insights, and practical ideas</span>
                {" "}that spark real conversations and drive meaningful change.
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
          {/* Client Logos */}
          <ClientLogos />

          {/* About as Speaker */}
          <article className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-6 md:px-8">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4]">
                  {/* Back — workshop shot */}
                  <img
                    src={speakingAestate}
                    alt="Ferry Hoes in a workshop setting"
                    className="absolute top-4 -left-4 w-[65%] h-[60%] object-cover rounded-xl shadow-lg rotate-[-6deg] z-10 hover:rotate-[-3deg] hover:scale-105 transition-all duration-300"
                  />
                  {/* Middle — blue stage */}
                  <img
                    src={speakingBlue}
                    alt="Ferry Hoes on stage with blue background"
                    className="absolute top-2 -right-2 w-[60%] h-[55%] object-cover rounded-xl shadow-lg rotate-[4deg] z-20 hover:rotate-[1deg] hover:scale-105 transition-all duration-300"
                  />
                  {/* Front — portrait */}
                  <img
                    src={ferryPortrait}
                    alt="Ferry Hoes professional portrait"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[65%] object-cover rounded-xl shadow-2xl z-30 hover:scale-105 transition-all duration-300"
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


          {/* Speaking Topics - Interactive Q&A */}
          <SpeakingQA />

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
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/foEehJ_pwck?start=2&controls=0&rel=0&modestbranding=1"
                    title="Ferry Hoes – Speaker Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
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
                      <CarouselItem key={i} className="pl-6 basis-full md:basis-1/2">
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
