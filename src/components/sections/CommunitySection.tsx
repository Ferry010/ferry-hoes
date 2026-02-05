import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
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
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 font-bold">
            Don't follow.<br />
            <span className="text-brand-gold">Build with me.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm creating a community of builders, thinkers, and doers who want to 
            shape the future of work and technology. Not as followers, but as collaborators.
          </p>
          
          {/* Coming soon notice */}
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-brand-gold/20 rounded-2xl mb-8">
            {/* Discord icon */}
            <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span className="text-white/90">
              Discord community launching soon
            </span>
          </div>
          
          {/* Waitlist placeholder */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-gold transition-colors"
                disabled
              />
              <Button 
                size="lg"
                className="rounded-full px-8 whitespace-nowrap bg-brand-gold text-foreground hover:bg-brand-gold/90"
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
