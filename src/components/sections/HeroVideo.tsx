import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import stagePhoto from "@/assets/ferry-speaking.jpg";

const HeroVideo = () => {
  const handleExplore = () => {
    document.querySelector("#brand-humanizing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-16 md:py-20">
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
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Visually hidden H1 for SEO */}
            <h1 className="sr-only">AI &amp; Technology Keynote Speaker</h1>

            <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-[1.15] tracking-tight">
              Technology is getting more powerful. Brands need to become more human.
            </p>

            <p className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
              That's Brand Humanizing.
            </p>

            <p className="text-base md:text-lg text-background/80 leading-relaxed max-w-xl">
              From AI and the future of work to human-centered design and brand transformation.
              Talks that challenge assumptions, spark conversations, and leave audiences with actionable insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                size="lg"
                onClick={handleExplore}
                className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 group"
              >
                Explore Brand Humanizing
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-8 border-background/30 text-background hover:bg-background/10 hover:text-background"
              >
                <a
                  href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Ferry to speak
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Name line */}
            <p
              className="text-xs md:text-sm tracking-[0.25em] uppercase text-background/50 font-medium mt-4"
            >
              Ferry Hoes
            </p>
          </div>

          {/* Right: Polaroid photo */}
          <div className="flex justify-center md:justify-end">
            <div
              className="bg-white p-2 pb-7 shadow-[4px_8px_28px_rgba(0,0,0,0.13)] max-w-[280px] md:max-w-[320px]"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <img
                src={stagePhoto}
                alt="Ferry Hoes presenting on stage"
                className="w-full aspect-[4/5] object-cover"
              />
              <p className="font-caveat text-base text-foreground/70 mt-2 text-center italic">
                Ferry — keynote speaker, Brand Humanizing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
