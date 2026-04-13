import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroVideo = () => {
  const navigate = useNavigate();
  const handleCTA = () => {
    navigate("/conversation");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
      <div className="container relative z-10 px-6 md:px-8 pt-16 md:pt-0">
        <div className="max-w-lg">
          <div className="flex flex-col gap-3">
            {/* Visitor bubble - left aligned */}
            <div
              className="self-start opacity-0 animate-fade-up max-w-[80%]"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-white/20 backdrop-blur-sm text-white text-sm md:text-base font-medium">
                So Ferry, what do you actually do?
              </div>
            </div>

            {/* Ferry bubble 1 - right aligned */}
            <div
              className="self-end opacity-0 animate-fade-up max-w-[80%]"
              style={{ animationDelay: "1.8s" }}
            >
              <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-white/30 backdrop-blur-sm text-white text-sm md:text-base">
                I help brands become more human.
              </div>
            </div>

            {/* Ferry bubble 2 - right aligned */}
            <div
              className="self-end opacity-0 animate-fade-up max-w-[85%]"
              style={{ animationDelay: "2.8s" }}
            >
              <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-white/30 backdrop-blur-sm text-white text-sm md:text-base">
                Through keynotes, a book, and one big idea: Brand Humanizing.
              </div>
            </div>

            {/* CTA - right aligned */}
            <button
              onClick={handleCTA}
              className="self-end mt-2 opacity-0 animate-fade-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors shadow-soft"
              style={{ animationDelay: "3.8s" }}
            >
              <MessageCircle className="h-4 w-4" />
              Continue the conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
