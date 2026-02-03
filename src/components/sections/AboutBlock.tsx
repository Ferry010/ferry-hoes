import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutBlock = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Photo background placeholder */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-primary via-brand-teal-dark to-foreground" />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-2xl">
          {/* Glassmorphism card */}
          <div className="bg-background/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-soft-xl">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ferry Hoes
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Public speaker, published author & entrepreneur with a mission to unleash human potential with the help of technology.
            </p>
            
            <Button 
              asChild
              size="lg"
              className="rounded-full px-8 bg-primary hover:bg-primary/90 group"
            >
              <Link to="/about">
                More about me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
