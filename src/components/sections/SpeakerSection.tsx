import { Button } from "@/components/ui/button";
import { ArrowRight, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import stagePhoto from "@/assets/ferry-on-stage.jpg";

const SpeakerSection = () => {
  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Open message panel"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background/95 backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Two-column grid */}
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left: Photo */}
        <div className="relative min-h-[400px] md:min-h-screen order-last md:order-first">
          <img 
            src={stagePhoto}
            alt="Ferry Hoes presenting on stage"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-0 relative z-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8 w-fit">
            <Mic className="h-4 w-4" />
            On Stage
          </span>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-foreground">
            Keynotes that{" "}
            <span className="text-accent">inspire action</span>
          </h2>

          {/* Description */}
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
              <Link to="/speaking">
                Speaker enquiries
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Micro-engagement */}
          <button
            onClick={openMessagePanel}
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group w-fit"
          >
            <span className="underline underline-offset-4">Want to discuss an event?</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default SpeakerSection;
