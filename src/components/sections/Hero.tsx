import { Button } from "@/components/ui/button";
import { ArrowDown, Users } from "lucide-react";
import CurrentlyStatus from "@/components/CurrentlyStatus";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal-light rounded-full blur-3xl opacity-70 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-coral-light rounded-full blur-3xl opacity-50" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-secondary rounded-full blur-2xl opacity-60" />
      </div>

      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Personal greeting */}
          <div 
            className="mb-8 animate-fade-up"
          >
            <span className="inline-flex items-center gap-3 text-lg md:text-xl text-muted-foreground">
              <span className="text-3xl">👋</span>
              <span>Hey, I'm <span className="text-foreground font-medium">Ferry</span></span>
            </span>
          </div>

          {/* Main headline - personal voice */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6 animate-fade-up font-bold" style={{ animationDelay: "0.1s" }}>
            I help teams stay{" "}
            <span className="text-accent font-handwriting">human</span><br />
            while the world goes{" "}
            <span className="text-primary">digital</span>
          </h1>

          {/* Subtext */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed font-light animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Through speaking, writing, and conversations—I explore how humans 
            and technology can actually work better together.
          </p>

          {/* Currently status */}
          <div 
            className="flex justify-center mb-10 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <CurrentlyStatus />
          </div>

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
              See what I'm thinking about
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="mr-2 h-5 w-5" />
              Join the community
              <span className="ml-2 text-xs opacity-70">(coming soon)</span>
            </Button>
          </div>

          {/* Quick question link */}
          <p 
            className="text-sm text-muted-foreground mt-8 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Got a question?{" "}
            <button 
              onClick={() => {
                const bubble = document.querySelector('[aria-label="Open message panel"]') as HTMLButtonElement;
                bubble?.click();
              }}
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors font-handwriting text-base"
            >
              Just ask me
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
