import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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

interface Episode {
  title: string;
  link: string;
  duration: string;
  pubDate: string;
}

const SPOTIFY_SHOW_URL = "https://open.spotify.com/show/6eGkXe767cYZ5Rw627Xpgu";
const APPLE_PODCASTS_URL = "https://podcasts.apple.com/nl/podcast/the-human-era-podcast/id1598552331";
const RSS_URL = "https://anchor.fm/s/757f60b4/podcast/rss";

const parseDuration = (raw: string): string => {
  // Could be "HH:MM:SS" or seconds
  if (raw.includes(":")) {
    const parts = raw.split(":");
    if (parts.length === 3) {
      const h = parseInt(parts[0]);
      const m = parseInt(parts[1]);
      return h > 0 ? `${h}h ${m}m` : `${m} min`;
    }
    return raw;
  }
  const secs = parseInt(raw);
  if (isNaN(secs)) return raw;
  const mins = Math.round(secs / 60);
  return mins >= 60 ? `${Math.floor(mins / 60)}h ${mins % 60}m` : `${mins} min`;
};

const PodcastSection = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [coverUrl, setCoverUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const res = await fetch(RSS_URL);
        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");

        // Get cover art
        const channelImage = xml.querySelector("channel > image > url")?.textContent
          || xml.querySelector("channel > *|image")?.getAttribute("href")
          || "";
        setCoverUrl(channelImage);

        const items = xml.querySelectorAll("item");
        const parsed: Episode[] = [];
        for (let i = 0; i < Math.min(items.length, 5); i++) {
          const item = items[i];
          const title = item.querySelector("title")?.textContent || "Untitled";
          const link = item.querySelector("link")?.textContent || SPOTIFY_SHOW_URL;
          const durationEl = item.getElementsByTagNameNS("http://www.itunes.com/dtds/podcast-1.0.dtd", "duration")[0];
          const duration = durationEl?.textContent || "";
          const pubDate = item.querySelector("pubDate")?.textContent || "";
          parsed.push({ title, link, duration: parseDuration(duration), pubDate });
        }
        setEpisodes(parsed);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRSS();
  }, []);

  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Send a message"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-card/95 backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Two-column grid */}
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left: Cover art + branding */}
        <div className="relative min-h-[400px] md:min-h-screen flex flex-col items-center justify-center px-8 py-16 bg-gradient-to-br from-background to-primary/5">
          {/* Cover art */}
          {coverUrl ? (
            <img
              src={coverUrl}
              alt="The Human Era Podcast cover art"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-lg object-cover mb-8"
            />
          ) : (
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-muted/30 flex items-center justify-center mb-8">
              <Headphones className="h-20 w-20 text-muted-foreground/40" />
            </div>
          )}

          {/* Platform buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full px-6 bg-[#1DB954] hover:bg-[#1DB954]/90"
              asChild
            >
              <a href={SPOTIFY_SHOW_URL} target="_blank" rel="noopener noreferrer">
                <SpotifyIcon className="mr-2 h-5 w-5" />
                Spotify
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 border-[#9933FF] text-[#9933FF] hover:bg-[#9933FF]/10"
              asChild
            >
              <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
                <ApplePodcastsIcon className="mr-2 h-5 w-5" />
                Apple Podcasts
              </a>
            </Button>
          </div>
        </div>

        {/* Right: Content + episode list */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-0 relative z-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 w-fit">
            <Headphones className="h-4 w-4" />
            The Podcast
          </span>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-foreground">
            Conversations that{" "}
            <span className="text-primary">matter</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
            Deep dives with founders, artists, scientists, and anyone doing interesting work
            at the intersection of humans and technology. No scripts. No soundbites. Just real talk.
          </p>

          {/* Episode list */}
          <div className="space-y-3 mb-10">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-background/60">
                  <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/4" />
                  </div>
                </div>
              ))
            ) : error ? (
              <p className="text-muted-foreground">
                Couldn't load episodes — listen on{" "}
                <a href={SPOTIFY_SHOW_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Spotify
                </a>{" "}instead.
              </p>
            ) : (
              episodes.map((ep) => (
                <a
                  key={ep.title}
                  href={ep.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-background/60 border-l-2 border-[#1DB954]/30 hover:border-[#1DB954] hover:shadow-soft transition-all duration-200 hover:-translate-y-0.5"
                >
                  <SpotifyIcon className="h-5 w-5 text-[#1DB954]/60 group-hover:text-[#1DB954] flex-shrink-0 mt-0.5 transition-colors" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm md:text-base">
                      {ep.title}
                    </h3>
                    {ep.duration && (
                      <span className="text-xs text-muted-foreground mt-1 block">{ep.duration}</span>
                    )}
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </a>
              ))
            )}
          </div>

          {/* Micro-engagement */}
          <button
            onClick={openMessagePanel}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium transition-colors group w-fit"
          >
            <span className="underline underline-offset-4">Got a topic suggestion?</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
