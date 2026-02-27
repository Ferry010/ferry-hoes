import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle } from "lucide-react";

const Hero = () => {
  const openMessagePanel = () => {
    window.dispatchEvent(new Event("open-contact"));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal-light rounded-full blur-3xl opacity-70 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-coral-light rounded-full blur-3xl opacity-50" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-secondary rounded-full blur-2xl opacity-60" />
      </div>

      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* H1 - Who you are */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 animate-fade-up font-bold">
            <span className="text-primary">Public speaker</span>, <span className="text-accent">published author</span><br className="hidden sm:block" />
            <span className="text-foreground">&amp; entrepreneur</span>
          </h1>

          {/* H2 - What you do */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Unleashing human potential with technology
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5 bg-primary hover:bg-brand-teal-dark"
              onClick={() => document.getElementById('writing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="mr-2 h-5 w-5" />
              Explore my work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-0.5"
              onClick={openMessagePanel}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get in touch
            </Button>
          </div>

          {/* Quick question link */}
          <p 
            className="text-sm text-muted-foreground mt-8 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Have a question?{" "}
            <button 
              onClick={openMessagePanel}
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            >
              Just ask
            </button>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
