import { ArrowRight } from "lucide-react";

const BrandHumanizingSection = () => {
  return (
    <section id="brand-humanizing" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-secondary/90 backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-8 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Brand Humanizing is my idea. I co-created it, I wrote a book about it, and I've spent the last ten years putting it on stages across the world.
          </p>

          {/* Pull quote – handwritten margin note */}
          <p
            className="inline-block text-2xl md:text-3xl text-primary my-8 rotate-[-2deg]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Sounds obvious. Turns out it isn't.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Technology should make organisations more human, not less. It's not a framework I borrowed. It's something I built from scratch.
          </p>

          {/* Micro-engagement */}
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
    </section>
  );
};

export default BrandHumanizingSection;
