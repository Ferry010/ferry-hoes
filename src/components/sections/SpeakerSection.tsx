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
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background - white to teal to white */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            180deg,
            hsl(var(--background)) 0%,
            hsl(var(--background)) 5%,
            hsl(var(--primary) / 0.2) 25%,
            hsl(var(--primary)) 45%,
            hsl(var(--primary)) 55%,
            hsl(var(--primary) / 0.2) 75%,
            hsl(var(--background)) 95%,
            hsl(var(--background)) 100%
          )`
        }}
      />

      <div className="container relative z-10 px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-medium mb-8 text-primary-foreground">
              <Mic className="h-4 w-4" />
              On Stage
            </span>

            {/* Title */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-primary-foreground">
              Keynotes that{" "}
              <span className="text-brand-gold">inspire action</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl mb-12">
              From AI and the future of work to human-centered design and brand transformation. 
              Talks that challenge assumptions, spark conversations, and leave audiences with actionable insights.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
              <Button 
                asChild
                size="lg"
                className="rounded-full px-8 bg-brand-gold text-foreground hover:bg-brand-gold/90 group"
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
              className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold/80 font-medium transition-colors group"
            >
              <span className="underline underline-offset-4">Want to discuss an event?</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Circular image composition */}
          <div className="relative flex justify-center order-1 md:order-2">
            {/* Decorative circles */}
            <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-brand-gold/40" />
            <div className="absolute top-1/4 -right-4 w-16 h-16 rounded-full bg-primary-foreground/20" />
            <div className="absolute -bottom-4 left-4 w-12 h-12 rounded-full bg-accent/30" />
            <div className="absolute bottom-1/3 -right-8 w-16 h-16 rounded-full bg-brand-gold/25" />
            <div className="absolute top-2/3 -left-6 w-10 h-10 rounded-full bg-primary-foreground/15" />
            
            {/* Main circular image */}
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-primary-foreground/20">
              <img 
                src={stagePhoto}
                alt="Ferry Hoes presenting on stage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
