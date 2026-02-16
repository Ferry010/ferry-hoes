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
        <h1 className="font-display text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background/90 tracking-tight leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
          The shy kid who ended up on stage.
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
