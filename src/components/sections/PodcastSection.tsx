import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import { ArrowRight, Headphones } from "lucide-react";
import { BoldWaveDivider } from "@/components/ui/section-divider";

// Spotify icon component
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

// Apple Podcasts icon component
const ApplePodcastsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.025 2.371.075.074.15.15.221.228a.693.693 0 01-.07.975.687.687 0 01-.987-.043 7.152 7.152 0 00-.205-.212 7.019 7.019 0 00-4.984-2.015 7.019 7.019 0 00-4.983 2.015 7.018 7.018 0 00-.206.212.687.687 0 01-.986.043.693.693 0 01-.07-.975c.07-.078.145-.154.22-.228a8.387 8.387 0 016.025-2.371zm.006 2.795a5.297 5.297 0 013.757 1.547 5.297 5.297 0 011.547 3.757 5.297 5.297 0 01-1.547 3.757 5.297 5.297 0 01-3.757 1.547 5.297 5.297 0 01-3.757-1.547 5.297 5.297 0 01-1.547-3.757 5.297 5.297 0 011.547-3.757 5.297 5.297 0 013.757-1.547zm0 1.37a3.924 3.924 0 00-2.784 1.146 3.924 3.924 0 00-1.146 2.784 3.924 3.924 0 001.146 2.784 3.924 3.924 0 002.784 1.146 3.924 3.924 0 002.784-1.146 3.924 3.924 0 001.146-2.784 3.924 3.924 0 00-1.146-2.784 3.924 3.924 0 00-2.784-1.146zm0 2.058a1.691 1.691 0 011.691 1.691 1.691 1.691 0 01-1.691 1.691 1.691 1.691 0 01-1.691-1.691 1.691 1.691 0 011.691-1.691zm0 4.775c.659 0 1.304.218 1.828.618.183.14.22.402.08.585a.416.416 0 01-.585.08 2.17 2.17 0 00-1.323-.453 2.17 2.17 0 00-1.323.453.416.416 0 01-.585-.08.416.416 0 01.08-.585 3.01 3.01 0 011.828-.618zm-.007 1.555c.396 0 .737.285.737.737v4.542c0 .398-.282.737-.737.737-.396 0-.737-.282-.737-.737v-4.542c0-.396.285-.737.737-.737z"/>
  </svg>
);

const featuredEpisodes = [
  {
    title: "Not a Diversity Checkbox: The Real Work of Inclusive Leadership",
    guest: "Simone Moissidis",
    duration: "65 min",
    spotifyUrl: "https://open.spotify.com/episode/e34fcs3",
  },
  {
    title: "The Power of Talking to People You Disagree With",
    guest: "Ruben Treurniet",
    duration: "73 min",
    spotifyUrl: "https://open.spotify.com/episode/e30mai6",
  },
  {
    title: "From Local to Global: The New Era of Talent Acquisition",
    guest: "Marco Boomsma",
    duration: "71 min",
    spotifyUrl: "https://open.spotify.com/episode/e2lthrj",
  },
];

const SPOTIFY_SHOW_URL = "https://open.spotify.com/show/6eGkXe767cYZ5Rw627Xpgu";
const APPLE_PODCASTS_URL = "https://podcasts.apple.com/nl/podcast/the-human-era-podcast/id1598552331";

const PodcastSection = () => {
  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Open message panel"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <section className="py-24 md:py-32 bg-card/95 backdrop-blur-sm overflow-hidden relative">
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

          {/* Episode cards carousel with Spotify embeds */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mb-12"
          >
            <CarouselContent className="-ml-4">
              {featuredEpisodes.map((episode) => (
                <CarouselItem
                  key={episode.title} 
                  className="pl-4 basis-full md:basis-1/2"
                >
                  <article 
                    className="group bg-background rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-transparent hover:border-primary/20 h-full"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-sm font-medium text-primary">
                        Episode
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {episode.duration}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      {episode.title}
                    </h3>
                    
                    <p className="text-base text-muted-foreground mb-6">
                      with {episode.guest}
                    </p>
                    
                    <a 
                      href={episode.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#1DB954] font-medium hover:underline transition-colors"
                    >
                      <SpotifyIcon className="h-5 w-5" />
                      Listen on Spotify
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
            <CarouselDots className="mt-8" />
          </Carousel>

          {/* Platform CTAs */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-[#1DB954] hover:bg-[#1DB954]/90"
                asChild
              >
                <a href={SPOTIFY_SHOW_URL} target="_blank" rel="noopener noreferrer">
                  <SpotifyIcon className="mr-2 h-5 w-5" />
                  Listen on Spotify
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full px-8 border-[#9933FF] text-[#9933FF] hover:bg-[#9933FF]/10"
                asChild
              >
                <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
                  <ApplePodcastsIcon className="mr-2 h-5 w-5" />
                  Listen on Apple
                </a>
              </Button>
            </div>
            
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

      {/* Bold wave transition to Community section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <BoldWaveDivider className="h-16 md:h-24 text-primary" />
      </div>
    </section>
  );
};

export default PodcastSection;
