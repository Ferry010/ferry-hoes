import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroVideo = () => {
  const navigate = useNavigate();
  const handleCTA = () => {
    navigate("/conversation");
  };

  return (
    <section className="min-h-[90vh] flex items-center bg-background relative overflow-hidden">
      <div className="container px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Chat bubbles */}
          <div className="flex flex-col justify-center order-last md:order-first py-12 md:py-0">
            <div className="flex flex-col gap-3 max-w-md">
              {/* Visitor bubble - left aligned */}
              <div
                className="self-start opacity-0 animate-fade-up max-w-[80%]"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-secondary text-foreground text-sm md:text-base font-medium">
                  So Ferry, what do you actually do?
                </div>
              </div>

              {/* Ferry bubble 1 - right aligned */}
              <div
                className="self-end opacity-0 animate-fade-up max-w-[80%]"
                style={{ animationDelay: "1.8s" }}
              >
                <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 text-primary-foreground text-sm md:text-base">
                  I help brands become more human.
                </div>
              </div>

              {/* Ferry bubble 2 - right aligned */}
              <div
                className="self-end opacity-0 animate-fade-up max-w-[85%]"
                style={{ animationDelay: "2.8s" }}
              >
                <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 text-primary-foreground text-sm md:text-base">
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

          {/* Right: Polaroid with video */}
          <div className="flex items-center justify-center order-first md:order-last">
            <div
              className="bg-white p-3 pb-20 rounded-sm shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 max-w-md w-full opacity-0 animate-fade-up relative"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <video
                  className="w-full h-full object-cover pointer-events-none"
                  src="/videos/Ferry_Hero_vid_2026.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
              {/* Caption on the paper area */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="font-display text-sm font-bold tracking-wide text-foreground/80 uppercase">
                  Ferry Hoes
                </p>
                <p className="font-caveat text-base text-muted-foreground leading-snug mt-1">
                  International keynote speaker. Author. Entrepreneur. Helping organizations stay powerfully human in a world full of AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
