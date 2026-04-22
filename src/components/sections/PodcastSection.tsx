import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const ApplePodcastsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.025 2.371.075.074.15.15.221.228a.693.693 0 01-.07.975.687.687 0 01-.987-.043 7.152 7.152 0 00-.205-.212 7.019 7.019 0 00-4.984-2.015 7.019 7.019 0 00-4.983 2.015 7.018 7.018 0 00-.206.212.687.687 0 01-.986.043.693.693 0 01-.07-.975c.07-.078.145-.154.22-.228a8.387 8.387 0 016.025-2.371zm.006 2.795a5.297 5.297 0 013.757 1.547 5.297 5.297 0 011.547 3.757 5.297 5.297 0 01-1.547 3.757 5.297 5.297 0 01-3.757 1.547 5.297 5.297 0 01-3.757-1.547 5.297 5.297 0 01-1.547-3.757 5.297 5.297 0 011.547-3.757 5.297 5.297 0 013.757-1.547zm0 1.37a3.924 3.924 0 00-2.784 1.146 3.924 3.924 0 00-1.146 2.784 3.924 3.924 0 001.146 2.784 3.924 3.924 0 002.784 1.146 3.924 3.924 0 002.784-1.146 3.924 3.924 0 001.146-2.784 3.924 3.924 0 00-1.146-2.784 3.924 3.924 0 00-2.784-1.146z"/>
  </svg>
);

const featuredEpisodes = [
  {
    title: "Not a Diversity Checkbox: The Real Work of Inclusive Leadership",
    guest: "Simone Moissidis",
    duration: "65 min",
    spotifyUrl:
      "https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/Not-a-Diversity-Checkbox-The-Real-Work-of-Inclusive-Leadership-with-Simone-Moissidis-e34fcs3",
  },
  {
    title: "The Power of Talking to People You Disagree With",
    guest: "Ruben Treurniet",
    duration: "73 min",
    spotifyUrl:
      "https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/The-Power-of-Talking-to-People-You-Disagree-With-with-Ruben-Treurniet-e30mai6",
  },
  {
    title: "From Local to Global: The New Era of Talent Acquisition",
    guest: "Marco Boomsma",
    duration: "71 min",
    spotifyUrl:
      "https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/From-Local-to-Global-The-New-Era-of-Talent-Acquisition-with-Marco-Boomsma-from-Bullhorn-e2lthrj",
  },
];

const SPOTIFY_SHOW_URL = "https://open.spotify.com/show/6eGkXe767cYZ5Rw627Xpgu";
const APPLE_PODCASTS_URL =
  "https://podcasts.apple.com/nl/podcast/the-human-era-podcast/id1598552331";

const PodcastSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={revealRef} className="scroll-reveal max-w-3xl mb-14 md:mb-16">
          <Eyebrow>The Human Era Podcast</Eyebrow>

          <h2
            className="font-display font-bold text-foreground leading-[1.02]"
            style={{ fontSize: "clamp(36px, 5.4vw, 80px)" }}
          >
            Long conversations, no{" "}
            <span className="text-primary">soundbites</span>
            <Period />
          </h2>

          <p className="mt-7 text-lg md:text-xl text-foreground/80 leading-[1.55]">
            I host The Human Era Podcast. Guests include CEOs, professors,
            artists, and entrepreneurs asking good questions about the balance
            between efficiency and meaning.
          </p>
        </div>

        {/* Episode cards */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full mb-12">
          <CarouselContent className="-ml-6 py-4">
            {featuredEpisodes.map((episode) => (
              <CarouselItem
                key={episode.title}
                className="pl-6 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <article className="group relative h-full bg-ink-navy text-background rounded-2xl p-7 md:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-semibold text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Episode
                    </span>
                    <span className="text-xs text-background/60">
                      {episode.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-[22px] font-bold text-background mb-3 leading-tight flex-1">
                    {episode.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-6">
                    with {episode.guest}
                  </p>
                  <a
                    href={episode.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 self-start bg-[#1DB954] text-white font-semibold text-sm rounded-full px-5 py-2.5 hover:brightness-110 transition-all"
                  >
                    <SpotifyIcon className="h-4 w-4" />
                    Play on Spotify
                  </a>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
          <CarouselDots className="mt-8" />
        </Carousel>

        <div className="flex flex-wrap gap-3 md:gap-4">
          <PillButton
            href={SPOTIFY_SHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            arrow={false}
          >
            <SpotifyIcon className="h-4 w-4" />
            Listen on Spotify
          </PillButton>
          <PillButton to="/podcast" variant="ghost">
            All episodes
          </PillButton>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
