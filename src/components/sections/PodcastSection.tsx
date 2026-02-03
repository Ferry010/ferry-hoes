import { Button } from "@/components/ui/button";
import { Headphones, Play } from "lucide-react";

const PodcastSection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                <Headphones className="h-4 w-4" />
                Podcast
              </span>
              
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">
                Conversations<br />that <span className="text-accent">matter</span>
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
                Deep dives with founders, artists, scientists, and anyone doing interesting work 
                at the intersection of humans and technology. No scripts. No soundbites. Just real talk.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Listen to the podcast
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 mt-10 pt-8 border-t border-white/20">
                <div>
                  <div className="font-display text-4xl font-bold">127</div>
                  <div className="text-sm text-white/60">Episodes</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold">50K+</div>
                  <div className="text-sm text-white/60">Downloads</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold">4.9</div>
                  <div className="text-sm text-white/60">Rating</div>
                </div>
              </div>
            </div>
            
            {/* Visual */}
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative circles */}
                <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse" />
                <div className="absolute inset-4 bg-accent/10 rounded-full" />
                <div className="absolute inset-8 bg-white/10 rounded-full flex items-center justify-center">
                  {/* Waveform visualization */}
                  <div className="flex items-center gap-1">
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-2 bg-accent rounded-full animate-pulse"
                        style={{ 
                          height: `${20 + Math.random() * 60}px`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: `${0.8 + Math.random() * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
