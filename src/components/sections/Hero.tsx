import { Button } from "@/components/ui/button";
import { ArrowDown, Users } from "lucide-react";

// Pixelated heart component inspired by the book cover
const PixelHeart = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
      <div className="relative w-64 h-64">
        {/* Red heart base */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--brand-red))" />
                <stop offset="50%" stopColor="hsl(var(--brand-red))" />
                <stop offset="70%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </linearGradient>
            </defs>
            <path
              d="M50 88.9L43.8 83.1C18.5 60.3 2 45.1 2 26.5C2 11.3 14.3 -1 29.5 -1C38.2 -1 46.5 3.2 50 9.8C53.5 3.2 61.8 -1 70.5 -1C85.7 -1 98 11.3 98 26.5C98 45.1 81.5 60.3 56.2 83.1L50 88.9Z"
              fill="url(#heartGradient)"
            />
          </svg>
        </div>
        {/* Floating pixels */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary rounded-sm animate-float"
            style={{
              width: `${8 + Math.random() * 8}px`,
              height: `${8 + Math.random() * 8}px`,
              right: `${-20 + Math.random() * 60}px`,
              top: `${20 + Math.random() * 60}%`,
              opacity: 0.4 + Math.random() * 0.6,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-gold-light">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red-light rounded-full blur-3xl opacity-40 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue-light rounded-full blur-3xl opacity-40" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-secondary rounded-full blur-2xl opacity-50" />
      </div>

      <PixelHeart />

      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8 animate-fade-up">
            <span className="text-primary">REBUILDING</span> THE WAY<br />
            <span className="text-accent">THE WORLD</span> <span className="text-primary">WORKS</span>
          </h1>

          {/* Subtext */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            I explore how humans and technology actually work better together. 
            Through stories, experiments, talks and conversations.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5 bg-primary hover:bg-brand-blue-dark"
              onClick={() => document.getElementById('writing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="mr-2 h-5 w-5" />
              Start reading
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