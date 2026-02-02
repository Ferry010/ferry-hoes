import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Big emotional headline */}
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
            DON'T FOLLOW.<br />
            <span className="text-primary">BUILD WITH ME.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm creating a community of builders, thinkers, and doers who want to 
            shape the future of work and technology. Not as followers, but as collaborators.
          </p>
          
          {/* Coming soon notice */}
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 rounded-2xl mb-8">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-white/90">
              Slack community launching soon
            </span>
          </div>
          
          {/* Waitlist placeholder */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
                disabled
              />
              <Button 
                size="lg"
                className="rounded-full px-8 whitespace-nowrap"
                disabled
              >
                Join waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-white/40 mt-3">
              Coming soon. Be the first to know when we launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;