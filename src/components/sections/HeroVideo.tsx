import { ChevronDown } from "lucide-react";
import { WaveDivider } from "@/components/ui/section-divider";

const HeroVideo = () => {
  const name = "Ferry Hoes";
  const letters = name.split("");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* YouTube video background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/foEehJ_pwck?autoplay=1&mute=1&loop=1&playlist=foEehJ_pwck&controls=0&showinfo=0&start=0&end=15&modestbranding=1&rel=0&playsinline=1"
          allow="autoplay; encrypted-media"
          style={{ 
            width: '177.78vh', // 16:9 aspect ratio
            height: '100vh',
            minWidth: '100vw',
            minHeight: '56.25vw', // 16:9 aspect ratio
          }}
          title="Hero background video"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Animated name */}
      <div className="container relative z-10 px-6 md:px-8">
        <h1 className="font-display text-center tracking-tighter">
          <span className="sr-only">Ferry Hoes</span>
          <span aria-hidden="true" className="flex flex-wrap justify-center">
            {letters.map((letter, i) => (
              <span
                key={i}
                className="inline-block text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold text-brand-gold animate-fade-up opacity-0"
                style={{ 
                  animationDelay: `${i * 0.08}s`,
                  animationFillMode: "forwards"
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
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

      {/* Wave transition to About section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveDivider className="h-16 md:h-24 text-background" />
      </div>
    </section>
  );
};

export default HeroVideo;
