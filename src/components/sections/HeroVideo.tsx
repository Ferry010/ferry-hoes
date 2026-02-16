import { ChevronDown } from "lucide-react";

const HeroVideo = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* YouTube video background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="/videos/Ferry_Hero_vid_2026.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Animated name with alternating effects */}
      <div className="container relative z-10 px-6 md:px-8">
        <h1 className="font-display text-center tracking-tighter">
          <span className="sr-only">Ferry Hoes</span>
          <div aria-hidden="true" className="relative h-[5rem] sm:h-[8rem] md:h-[12rem] lg:h-[16rem] xl:h-[20rem]">
            {/* FERRY - visible first half of cycle */}
            <span className="absolute inset-0 flex justify-center items-center animate-name-ferry">
              {"Ferry".split("").map((letter, i) => (
                <span
                  key={`ferry-${i}`}
                  className="inline-block text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-brand-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                >
                  {letter}
                </span>
              ))}
            </span>
            
            {/* HOES - visible second half of cycle */}
            <span className="absolute inset-0 flex justify-center items-center animate-name-hoes">
              {"Hoes".split("").map((letter, i) => (
                <span
                  key={`hoes-${i}`}
                  className="inline-block text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-background/90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>
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
