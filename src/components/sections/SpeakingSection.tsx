import { Button } from "@/components/ui/button";
import { Mic, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  "Human-Centered Technology",
  "Future of Work",
  "Digital Transformation",
  "Leadership in the AI Age",
];

const SpeakingSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Icon/Visual */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                  <Mic className="h-20 w-20 text-primary" strokeWidth={1.5} />
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
                <div className="absolute -inset-4 border border-primary/10 rounded-full" />
              </div>
            </div>
            
            {/* Content */}
            <div className="md:col-span-3">
              <span className="text-primary font-medium text-sm mb-2 block">
                Hire me to speak
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 font-bold">
                Let's <span className="text-accent font-handwriting">inspire</span><br />your audience
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I speak at conferences, corporate events, and leadership summits worldwide. 
                Engaging stories, actionable insights, and ideas that spark real conversations.
              </p>
              
              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-8">
                {topics.map((topic) => (
                  <span 
                    key={topic}
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              
              <Button 
                asChild
                size="lg" 
                className="rounded-full px-8 group"
              >
                <Link to="/speaking">
                  See my speaking page
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
