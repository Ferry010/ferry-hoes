import { MessageCircle } from "lucide-react";

const HeroVideo = () => {
  const handleCTA = () => {
    window.dispatchEvent(new Event("open-contact"));
  };

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
        <div className="absolute inset-0 bg-foreground/55" />
      </div>

      {/* DM-style chat conversation */}
      <div className="container relative z-10 px-6 md:px-8 max-w-xl md:max-w-2xl">
        <div className="flex flex-col gap-3">
          {/* Visitor bubble 1 */}
          <div
            className="self-end opacity-0 animate-fade-up max-w-[80%]"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 backdrop-blur-md text-primary-foreground text-sm md:text-base font-medium">
              So what do you actually do?
            </div>
          </div>

          {/* Ferry label */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "1.1s" }}
          >
            <span className="text-xs font-semibold text-brand-gold tracking-wide uppercase ml-1">
              Ferry
            </span>
          </div>

          {/* Ferry bubble 1 */}
          <div
            className="self-start opacity-0 animate-fade-up max-w-[80%] -mt-1"
            style={{ animationDelay: "1.1s" }}
          >
            <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background/90 backdrop-blur-md text-foreground text-sm md:text-base">
              I spend most of my year on stages.
            </div>
          </div>

          {/* Ferry bubble 2 */}
          <div
            className="self-start opacity-0 animate-fade-up max-w-[80%]"
            style={{ animationDelay: "1.9s" }}
          >
            <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background/90 backdrop-blur-md text-foreground text-sm md:text-base">
              Last year that was 40+ keynotes.
            </div>
          </div>

          {/* Visitor bubble 2 */}
          <div
            className="self-end opacity-0 animate-fade-up max-w-[80%]"
            style={{ animationDelay: "2.7s" }}
          >
            <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 backdrop-blur-md text-primary-foreground text-sm md:text-base font-medium">
              About what?
            </div>
          </div>

          {/* Ferry label 2 */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "3.5s" }}
          >
            <span className="text-xs font-semibold text-brand-gold tracking-wide uppercase ml-1">
              Ferry
            </span>
          </div>

          {/* Ferry bubble 3 */}
          <div
            className="self-start opacity-0 animate-fade-up max-w-[80%] -mt-1"
            style={{ animationDelay: "3.5s" }}
          >
            <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background/90 backdrop-blur-md text-foreground text-sm md:text-base">
              One idea, really.
            </div>
          </div>

          {/* Ferry bubble 4 */}
          <div
            className="self-start opacity-0 animate-fade-up max-w-[85%]"
            style={{ animationDelay: "4.3s" }}
          >
            <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background/90 backdrop-blur-md text-foreground text-sm md:text-base">
              How humans and technology should actually work together.
            </div>
          </div>

          {/* Ferry bubble 5 */}
          <div
            className="self-start opacity-0 animate-fade-up max-w-[80%]"
            style={{ animationDelay: "5.1s" }}
          >
            <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-background/90 backdrop-blur-md text-foreground text-sm md:text-base">
            I call it Brand Humanizing.
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleCTA}
            className="self-start mt-2 opacity-0 animate-fade-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors shadow-soft"
            style={{ animationDelay: "5.9s" }}
          >
            <MessageCircle className="h-4 w-4" />
            Continue the conversation
          </button>
        </div>

        {/* Name + subtitle */}
        <div className="mt-8 md:mt-10">
          <h1
            className="font-display text-2xl sm:text-3xl md:text-4xl text-background tracking-tight opacity-0 animate-fade-up drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
            style={{ animationDelay: "6.5s" }}
          >
            Ferry Hoes
          </h1>
          <p
            className="mt-2 text-xs md:text-sm tracking-[0.25em] uppercase text-background/50 font-medium opacity-0 animate-fade-up"
            style={{ animationDelay: "7.0s" }}
          >
            Speaker &bull; Author &bull; Brand Humanizing
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
