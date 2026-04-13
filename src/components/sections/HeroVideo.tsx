import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroVideo = () => {
  const navigate = useNavigate();
  const handleCTA = () => {
    navigate("/conversation");
  };

  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden pb-16 md:pb-20">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/videos/Ferry_Hero_vid_2026.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content overlay */}
      <div className="relative z-10 w-full px-6 md:px-8">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col gap-3">
            {/* Visitor bubble - right aligned, teal */}
            <div
              className="self-end opacity-0 animate-fade-up max-w-[80%]"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-brand-teal text-white text-sm md:text-base font-medium">
                So what do you actually do?
              </div>
            </div>

            {/* Ferry bubble 1 - left aligned, white */}
            <div
              className="self-start opacity-0 animate-fade-up max-w-[80%]"
              style={{ animationDelay: "1.8s" }}
            >
              <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-white text-primary text-sm md:text-base">
                I help brands become more human.
              </div>
            </div>

            {/* Ferry bubble 2 - left aligned, white */}
            <div
              className="self-start opacity-0 animate-fade-up max-w-[85%]"
              style={{ animationDelay: "2.8s" }}
            >
              <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-white text-primary text-sm md:text-base">
                Through keynotes, a book, and one big idea: Brand Humanizing.
              </div>
            </div>

            {/* CTA - left aligned, orange */}
            <button
              onClick={handleCTA}
              className="self-start mt-2 opacity-0 animate-fade-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors shadow-soft"
              style={{ animationDelay: "3.8s" }}
            >
              <MessageCircle className="h-4 w-4" />
              Continue the conversation
            </button>
          </div>

          {/* Name + tagline */}
          <div
            className="mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "4.8s" }}
          >
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white/70">
              Ferry Hoes
            </p>
            <h1 className="mt-1 text-3xl md:text-5xl font-bold text-white">
              AI & Technology Keynote Speaker
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
