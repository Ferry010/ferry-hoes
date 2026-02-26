import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones, Mic2 } from "lucide-react";
import podcastHero from "@/assets/podcast-hero.jpg";
import Footer from "@/components/sections/Footer";
import AskFerryBubble from "@/components/AskFerryBubble";
import SEOHead from "@/components/blog/SEOHead";

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

const SPOTIFY_SHOW_URL = "https://open.spotify.com/show/6eGkXe767cYZ5Rw627Xpgu";
const APPLE_PODCASTS_URL = "https://podcasts.apple.com/nl/podcast/the-human-era-podcast/id1598552331";

const allEpisodes = [
  {
    title: "Not a Diversity Checkbox: The Real Work of Inclusive Leadership",
    guest: "Simone Moissidis",
    duration: "65 min",
    description: "Simone Moissidis shares what inclusive leadership really looks like beyond checkboxes and quotas. We explore how organizations can move from performative diversity to genuine belonging, and why the hardest conversations are often the most important ones.",
    spotifyUrl: "https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/Not-a-Diversity-Checkbox-The-Real-Work-of-Inclusive-Leadership-with-Simone-Moissidis-e34fcs3",
  },
  {
    title: "The Power of Talking to People You Disagree With",
    guest: "Ruben Treurniet",
    duration: "73 min",
    spotifyUrl: "https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/The-Power-of-Talking-to-People-You-Disagree-With-with-Ruben-Treurniet-e30mai6",
  },
  {
    title: "From Local to Global: The New Era of Talent Acquisition",
    guest: "Marco Boomsma",
    duration: "71 min",
    spotifyUrl: "https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/From-Local-to-Global-The-New-Era-of-Talent-Acquisition-with-Marco-Boomsma-from-Bullhorn-e2lthrj",
  },
  {
    title: "How Generational Preferences and Technology Influence Work Culture",
    guest: "Valérie de Haan",
    duration: "62 min",
    spotifyUrl: "https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/How-generational-preferences-and-technology-influence-work-culture-with-Toshibas-Valrie-de-Haan-e2fiqo2",
  },
  {
    title: "Why Football Club Panathinaikos FC Sees a Future in E-sports",
    guest: "Paraskevas Spiliopoulos",
    duration: "67 min",
    spotifyUrl: "https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/Why-football-club-Panathinaikos-FC-sees-a-future-in-E-sports-with-Paraskevas-Spiliopoulos-e1ui1uq",
  },
];

const Podcast = () => {
  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Send a message"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <>
      <SEOHead
        title="The Human Era Podcast | Ferry Hoes"
        description="Deep conversations with founders, artists, scientists, and anyone doing interesting work at the intersection of humans and technology. Hosted by Ferry Hoes."
        ogType="website"
        canonicalUrl="/podcast"
      />

      <div className="overflow-x-hidden relative">
        {/* Continuous visual thread */}
        <div 
          className="fixed left-0 top-0 w-1 h-full z-50 pointer-events-none"
          style={{
            background: `linear-gradient(
              180deg,
              hsl(var(--brand-gold)) 0%,
              hsl(var(--accent)) 25%,
              hsl(var(--primary)) 50%,
              hsl(var(--accent)) 75%,
              hsl(var(--brand-gold)) 100%
            )`
          }}
        />

        {/* Hero Section */}
        <header className="min-h-[80vh] relative overflow-hidden flex items-center">
          <img
            src={podcastHero}
            alt="Ferry Hoes recording The Human Era Podcast"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 backdrop-blur-[6px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-primary/70" />
          <div 
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          <div className="container px-6 md:px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white backdrop-blur-sm rounded-full text-sm font-medium mb-8">
                <Headphones className="h-4 w-4" />
                Podcast
              </span>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                The Human Era{" "}
                <span className="text-accent">Podcast</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl mx-auto mb-12">
                Deep dives with founders, artists, scientists, and anyone doing interesting work at the{" "}
                <span className="bg-accent/95 px-1 py-0.5 rounded">intersection of humans and technology</span>.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="rounded-full px-8 bg-[#1DB954] hover:bg-[#1DB954]/90 text-white group"
                >
                  <a href={SPOTIFY_SHOW_URL} target="_blank" rel="noopener noreferrer">
                    <SpotifyIcon className="mr-2 h-5 w-5" />
                    Listen on Spotify
                  </a>
                </Button>
                
                <Button 
                  asChild
                  size="lg"
                  className="rounded-full px-8 bg-[#9933FF] hover:bg-[#9933FF]/90 text-white border-none group"
                >
                  <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
                    <ApplePodcastsIcon className="mr-2 h-5 w-5" />
                    Apple Podcasts
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* About the Podcast */}
          <section className="py-16 md:py-20 bg-secondary/30">
            <div className="container px-6 md:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-accent font-medium text-sm mb-2 block">About the show</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  No scripts. No soundbites.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Honest, unscripted conversations with fascinating people about technology, leadership, and what it means to be human. No pre-written questions. Just thinking out loud about the things that matter.
                </p>
              </div>
            </div>
          </section>

          {/* Episodes Grid */}
          <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-background">
            <div className="container px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-accent font-medium text-sm mb-2 block">Episodes</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Recent conversations
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Dive into the latest episodes.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Featured latest episode - left side */}
                  <article 
                    className="group relative overflow-hidden bg-gradient-to-br from-background to-[#1DB954]/[0.05] rounded-2xl p-10 shadow-soft hover:shadow-soft-lg transition-all duration-300 border-l-4 border-[#1DB954]/40 hover:border-[#1DB954] flex flex-col justify-between"
                  >
                    <svg
                      aria-hidden="true"
                      className="absolute bottom-6 right-6 w-40 h-24 text-muted-foreground opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500"
                      viewBox="0 0 120 60"
                      fill="currentColor"
                    >
                      <rect x="8" y="20" width="6" height="25" rx="3" />
                      <rect x="22" y="10" width="6" height="40" rx="3" />
                      <rect x="36" y="25" width="6" height="20" rx="3" />
                      <rect x="50" y="5" width="6" height="50" rx="3" />
                      <rect x="64" y="18" width="6" height="30" rx="3" />
                      <rect x="78" y="12" width="6" height="38" rx="3" />
                      <rect x="92" y="22" width="6" height="22" rx="3" />
                      <rect x="106" y="28" width="6" height="15" rx="3" />
                    </svg>

                    <div>
                      <div className="flex items-start justify-between mb-6 relative z-10">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                          <Mic2 className="h-3.5 w-3.5" />
                          Latest Episode
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          {allEpisodes[0].duration}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {allEpisodes[0].title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground mb-4">
                        with {allEpisodes[0].guest}
                      </p>
                      <p className="text-base text-muted-foreground/80 leading-relaxed mb-8">
                        {allEpisodes[0].description}
                      </p>
                    </div>
                    
                    <a 
                      href={allEpisodes[0].spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#1DB954] font-medium text-lg hover:underline transition-colors"
                    >
                      <SpotifyIcon className="h-5 w-5" />
                      Listen on Spotify
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>

                  {/* Right side: stacked cards */}
                  <div className="flex flex-col gap-4">
                    {allEpisodes.slice(1, 5).map((episode) => (
                      <article 
                        key={episode.title}
                        className="group relative overflow-hidden bg-gradient-to-br from-background to-[#1DB954]/[0.03] rounded-2xl p-5 shadow-soft hover:shadow-soft-lg transition-all duration-300 border-l-2 border-[#1DB954]/30 hover:border-[#1DB954] flex flex-col"
                      >
                        <div className="flex items-start justify-between mb-2 relative z-10">
                          <span className="text-xs font-medium text-primary">Episode</span>
                          <span className="text-xs text-muted-foreground">
                            {episode.duration}
                          </span>
                        </div>
                        
                        <h3 className="font-display text-sm font-semibold text-foreground mb-1.5 leading-snug">
                          {episode.title}
                        </h3>
                        
                        <p className="text-xs text-muted-foreground mb-3">
                          with {episode.guest}
                        </p>
                        
                        <a 
                          href={episode.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[#1DB954] font-medium text-xs hover:underline transition-colors mt-auto"
                        >
                          <SpotifyIcon className="h-3.5 w-3.5" />
                          Listen
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform CTAs */}
          <section className="py-24 md:py-32 bg-foreground text-background">
            <div className="container px-6 md:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Subscribe & never miss an episode
                </h2>
                <p className="text-xl text-white/70 mb-12">
                  Available on all major podcast platforms.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
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
                    className="rounded-full px-8 bg-[#9933FF] hover:bg-[#9933FF]/90 text-white border-none"
                    asChild
                  >
                    <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
                      <ApplePodcastsIcon className="mr-2 h-5 w-5" />
                      Listen on Apple
                    </a>
                  </Button>
                </div>
                
                <button
                  onClick={openMessagePanel}
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white font-medium transition-colors group"
                >
                  <span className="underline underline-offset-4">Got a topic suggestion?</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <AskFerryBubble />
      </div>
    </>
  );
};

export default Podcast;
