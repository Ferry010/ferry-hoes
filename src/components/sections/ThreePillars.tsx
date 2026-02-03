import { Button } from "@/components/ui/button";
import { Mic, Rocket, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Mic,
    title: "Ferry the Speaker",
    description: "Keynotes and talks that inspire action and challenge conventional thinking.",
    link: "/speaking",
  },
  {
    icon: Rocket,
    title: "Ferry the Entrepreneur",
    description: "Building products and humanizing brands in a digital-first world.",
    link: "/entrepreneur",
  },
  {
    icon: Heart,
    title: "Ferry the Human",
    description: "Thoughts, passions, and perspectives beyond the professional.",
    link: "/about",
  },
];

const ThreePillars = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.title}
                  to={pillar.link}
                  className="group bg-background rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-accent/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-accent transition-colors font-semibold">
                    {pillar.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  
                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-accent transition-colors">
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
