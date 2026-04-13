import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import stagePhoto from "@/assets/ferry-speaking.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionLabel from "@/components/SectionLabel";

const SpeakerSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Two-column grid */}
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        {/* Left: Photo */}
        <div className="relative min-h-[400px] md:min-h-[80vh] order-last md:order-first">
          <img 
            src={stagePhoto}
            alt="Ferry Hoes presenting on stage"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div ref={revealRef} className="scroll-reveal flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-0 relative z-10">
          <SectionLabel text="On Stage" />

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
            Keynotes that{" "}
            <span className="text-accent">inspire action</span>
            <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-12">
            From AI and the future of work to human-centered design and brand transformation. 
            Talks that challenge assumptions, spark conversations, and leave audiences with actionable insights.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                Speaker enquiries
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Micro-engagement */}
          <Link
            to="/speaking"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group w-fit"
          >
            <span className="underline underline-offset-4">More about Ferry as speaker</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
