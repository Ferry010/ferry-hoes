import { ChevronDown } from "lucide-react";

const HeroVideo = () => {
  const name = "FERRY HOES";
  const letters = name.split("");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video background placeholder - dark gradient with subtle animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20" />
        {/* Animated grain overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Subtle moving gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
      </div>

      {/* Animated name */}
      <div className="container relative z-10 px-6 md:px-8">
        <h1 className="font-display text-center tracking-tighter">
          <span className="sr-only">Ferry Hoes</span>
          <span aria-hidden="true" className="flex flex-wrap justify-center">
            {letters.map((letter, i) => (
              <span
                key={i}
                className="inline-block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold text-background animate-fade-up opacity-0"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-background/60">
          <span className="text-sm font-medium tracking-wide uppercase">Scroll</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
