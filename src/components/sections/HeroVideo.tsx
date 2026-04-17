import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";
import HeadingDot from "@/components/HeadingDot";

const HeroVideo = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/videos/Ferry_Hero_vid_2026.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 w-full px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-2.5 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
            <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-accent">
              International Keynote Speaker
            </span>
          </div>

          {/* The h1 — Ferry signature */}
          <h1
            className="font-display font-bold text-white leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Most people make AI{" "}
            <span className="text-accent">complicated</span>.
            <br />
            I make it <span className="text-accent">human</span>
            <HeadingDot size="lg" />
          </h1>

          {/* Subline */}
          <p
            className="mt-6 md:mt-8 max-w-2xl text-base md:text-xl text-white/80 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Through keynotes, a book, and one big idea ten years in the making:{" "}
            <span className="text-white font-semibold">Brand Humanizing</span>.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm md:text-base font-semibold hover:bg-accent/90 transition-colors shadow-soft group"
            >
              Book Ferry
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/speaking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur text-white text-sm md:text-base font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              <Play className="h-4 w-4" />
              Watch the reel
            </Link>
          </div>

          {/* Demoted chat link — easter egg to /conversation */}
          <div
            className="mt-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <Link
              to="/conversation"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-white">
                Or continue the conversation
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
