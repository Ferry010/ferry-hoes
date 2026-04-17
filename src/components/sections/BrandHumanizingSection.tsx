import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionLabel from "@/components/SectionLabel";

const BrandHumanizingSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="brand-humanizing" className="py-20 md:py-28 flex items-center justify-center relative overflow-hidden bg-background">
      {/* Content */}
      <div className="container relative z-10 px-6 md:px-8">
        <div ref={revealRef} className="scroll-reveal max-w-3xl mx-auto">
          <div className="text-center">
            <SectionLabel text="Life's Work" center />
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-center leading-[1.05]">
            A strategy for the <span className="text-accent">digital age</span>
            <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            Brand Humanizing is my idea. I co-created it, I wrote a book about it, and I've spent the last ten years putting it on stages across the world.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mt-6">
            Technology should make organisations more human, not less.
          </p>

          {/* Pull quote */}
          <p
            className="text-2xl md:text-3xl text-primary py-10 pl-4 md:pl-8 rotate-[-2deg] max-w-md whitespace-nowrap"
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
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group"
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
