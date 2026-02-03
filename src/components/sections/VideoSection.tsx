import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "The Human Side of Digital Transformation",
    views: "24K views",
    duration: "18:42",
  },
  {
    id: 2,
    title: "TEDx: Rethinking Our Relationship with AI",
    views: "156K views",
    duration: "14:21",
  },
  {
    id: 3,
    title: "Keynote: Building Tech That Serves Humans",
    views: "12K views",
    duration: "32:15",
  },
  {
    id: 4,
    title: "Workshop: Finding Your Voice in a Noisy World",
    views: "8K views",
    duration: "45:30",
  },
];

const VideoSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm mb-2 block">
              Featured talks
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4 font-bold">
              Watch & <span className="text-accent font-handwriting">learn</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Keynotes, talks, and ideas worth watching.
            </p>
          </div>

          {/* Video grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="group relative bg-foreground/5 rounded-2xl overflow-hidden cursor-pointer hover:shadow-soft-lg transition-all duration-300"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative">
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-soft-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-foreground/80 text-background text-xs font-medium rounded">
                    {video.duration}
                  </div>
                </div>
                
                {/* Video info */}
                <div className="p-5">
                  <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors leading-tight mb-2 font-semibold">
                    {video.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{video.views}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 group"
            >
              Watch more videos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
