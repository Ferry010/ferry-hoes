import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BrandHumanizingSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="brand-humanizing" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-secondary/90 backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/6 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-8 pb-16">
        <div ref={revealRef} className="scroll-reveal max-w-3xl mx-auto">
          {/* Badge */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Life's Work
            </span>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10">
              <span className="text-foreground">Brand</span>{" "}
              <span className="text-accent">Humanizing</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            Brand Humanizing is my idea. I co-created it, I wrote a book about it, and I've spent the last ten years putting it on stages across the world.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mt-6">
            Technology should make organisations more human, not less.
          </p>

          {/* Pull quote */}
          <p
            className="text-2xl md:text-3xl text-primary py-10 pl-4 md:pl-8 rotate-[-2deg] max-w-md"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Sounds obvious. Turns out it isn't.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 text-center">
            It's not a framework I borrowed. It's something I built from scratch.
          </p>

          {/* Micro-engagement */}
          <div className="text-center">
            <a
              href="https://brandhumanizing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
            >
              <span className="underline underline-offset-4">Want to learn more about this?</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHumanizingSection;
