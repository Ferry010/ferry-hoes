import { ArrowRight, Heart } from "lucide-react";

const BrandHumanizingSection = () => {
  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Open message panel"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8">
            <Heart className="h-4 w-4" />
            Life's Work
          </span>

          {/* Title */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8">
            <span className="text-primary">Brand</span>{" "}
            <span className="text-accent">Humanizing</span>
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-light mb-8 max-w-3xl mx-auto">
            The superpower that makes your brand more human and your business grow faster.
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            In a world obsessed with automation and efficiency, the brands that win are the ones that stay human. 
            Brand Humanizing is the practice of using technology to become more human, not less. 
            It's my life's mission to help organizations embrace this philosophy.
          </p>

          {/* Micro-engagement */}
          <button
            onClick={openMessagePanel}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            <span className="underline underline-offset-4">Have a question about this?</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandHumanizingSection;
