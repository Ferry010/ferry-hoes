import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones, Play } from "lucide-react";

const featuredEpisodes = [
  {
    number: 127,
    title: "The Future of Human Work",
    guest: "Sarah Chen",
    duration: "58 min",
  },
  {
    number: 126,
    title: "Building Brands That Last",
    guest: "Marcus Williams",
    duration: "45 min",
  },
  {
    number: 125,
    title: "AI and Empathy",
    guest: "Dr. Elena Rodriguez",
    duration: "62 min",
  },
];

const PodcastSection = () => {
  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Open message panel"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <section className="py-24 md:py-32 bg-card overflow-hidden">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Headphones className="h-4 w-4" />
              The Podcast
            </span>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Conversations that <span className="text-accent">matter</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep dives with founders, artists, scientists, and anyone doing interesting work 
              at the intersection of humans and technology. No scripts. No soundbites. Just real talk.
            </p>
          </div>

          {/* Episode cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredEpisodes.map((episode) => (
              <article 
                key={episode.number}
                className="group bg-background rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-primary/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-medium text-primary">
                    Episode {episode.number}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {episode.duration}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {episode.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  with {episode.guest}
                </p>
                
                <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors group/btn">
                  <Play className="h-4 w-4" />
                  <span>Listen now</span>
                  <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 mb-12 py-8 border-y border-border">
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-primary">127</div>
              <div className="text-sm text-muted-foreground">Episodes</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-primary hover:bg-primary/90 mb-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Listen to all episodes
            </Button>
            
            {/* Micro-engagement */}
            <div>
              <button
                onClick={openMessagePanel}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium transition-colors group"
              >
                <span className="underline underline-offset-4">Got a topic suggestion?</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
