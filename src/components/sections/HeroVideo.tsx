import { ChevronDown } from "lucide-react";

const HeroVideo = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video background */}
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

      {/* DM-style chat conversation */}
      <div className="container relative z-10 px-6 md:px-8 max-w-xl md:max-w-2xl">
        <div className="flex flex-col gap-3">
          {/* You bubble — right-aligned */}
          <div
            className="self-end opacity-0 animate-fade-up max-w-[80%]"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-foreground/60 backdrop-blur-md text-background/90 text-sm md:text-base">
              So what do you actually talk about on stage?
            </div>
          </div>

          {/* Ferry label */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "1.1s" }}
          >
            <span className="text-xs font-medium text-background/50 tracking-wide uppercase ml-1">
              Ferry
            </span>
          </div>

          {/* Ferry bubble 1 */}
          <div
            className="self-start opacity-0 animate-fade-up max-w-[80%] -mt-1"
            style={{ animationDelay: "1.1s" }}
          >
            <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background/15 backdrop-blur-md text-background text-sm md:text-base">
              Mostly one thing.
            </div>
          </div>

          {/* Ferry bubble 2 */}
          <div
            className="self-start opacity-0 animate-fade-up max-w-[85%]"
            style={{ animationDelay: "1.9s" }}
          >
            <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background/15 backdrop-blur-md text-background text-sm md:text-base">
              How to make work more human in a world full of AI.
            </div>
          </div>

          {/* Ferry bubble 3 */}
          <div
            className="self-start opacity-0 animate-fade-up max-w-[80%]"
            style={{ animationDelay: "2.7s" }}
          >
            <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background/15 backdrop-blur-md text-background text-sm md:text-base">
              More than 40 keynotes a year on that.
            </div>
          </div>
        </div>

        {/* Name + subtitle reveal */}
        <div className="mt-10 md:mt-14">
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-background tracking-tight opacity-0 animate-fade-up drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
            style={{ animationDelay: "3.8s" }}
          >
            Ferry Hoes
          </h1>
          <p
            className="mt-3 text-sm md:text-base tracking-[0.25em] uppercase text-background/50 font-medium opacity-0 animate-fade-up"
            style={{ animationDelay: "4.3s" }}
          >
            Speaker &bull; Author &bull; Podcast host
          </p>
        </div>
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
