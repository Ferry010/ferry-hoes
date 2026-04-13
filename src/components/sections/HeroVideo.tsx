import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroVideo = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8 text-foreground">
            Everyone can copy your technology.{" "}
            <span className="text-accent">No one can copy your people.</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            International keynote speaker, published author, and entrepreneur helping organisations stay powerfully human in a world full of AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 group"
            >
              <a
                href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a keynote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all"
            >
              <Link to="/speaking">
                See topics
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
