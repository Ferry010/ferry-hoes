import { Button } from "@/components/ui/button";
import { ArrowRight, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const SpeakerSection = () => {
  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Open message panel"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-8">
            <Mic className="h-4 w-4" />
            On Stage
          </span>

          {/* Title */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8">
            Keynotes that{" "}
            <span className="text-brand-gold">inspire action</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
            From AI and the future of work to human-centered design and brand transformation. 
            Talks that challenge assumptions, spark conversations, and leave audiences with actionable insights.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
      </div>
    </section>
  );
};

export default SpeakerSection;
