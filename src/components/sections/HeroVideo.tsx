import { ChevronDown } from "lucide-react";

const HeroVideo = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* YouTube video background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/foEehJ_pwck?autoplay=1&mute=1&loop=1&playlist=foEehJ_pwck&controls=0&showinfo=0&start=0&end=15&modestbranding=1&rel=0&playsinline=1"
          allow="autoplay; encrypted-media"
          style={{ 
            width: '177.78vh',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '56.25vw',
          }}
          title="Hero background video"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Animated name with alternating effects */}
      <div className="container relative z-10 px-6 md:px-8">
        <h1 className="font-display text-center tracking-tighter">
          <span className="sr-only">Ferry Hoes</span>
          <span aria-hidden="true" className="flex flex-col items-center gap-2 md:gap-4">
            {/* FERRY - with staggered fade up */}
            <span className="flex">
              {"Ferry".split("").map((letter, i) => (
                <span
                  key={`ferry-${i}`}
                  className="inline-block text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-brand-gold animate-fade-up opacity-0 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    animationFillMode: "forwards"
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
            
            {/* HOES - with different timing and subtle glow effect */}
            <span className="flex">
              {"Hoes".split("").map((letter, i) => (
                <span
                  key={`hoes-${i}`}
                  className="inline-block text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-background/90 animate-fade-up opacity-0 drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  style={{ 
                    animationDelay: `${0.5 + i * 0.1}s`,
                    animationFillMode: "forwards"
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </span>
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2 text-background/60">
          <span className="text-sm font-medium tracking-wide uppercase">Scroll</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>

    </section>
  );
};

export default HeroVideo;
