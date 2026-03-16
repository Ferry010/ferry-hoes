import { Button } from "@/components/ui/button";
import { ArrowRight, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const PostCTA = () => {
  return (
    <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-accent/20">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
          <Mic className="w-8 h-8 text-accent" />
        </div>
      </div>

      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
        Want to bring these ideas to your organisation?
      </h3>

      <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto text-center">
        Ferry speaks about AI, Brand Humanizing, and the future of work at conferences and corporate events worldwide. Book him for your next event.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 group"
        >
          <Link to="/contact" state={{ from: "speaking" }}>
            Book Ferry for your event
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          <Link to="/speaking">
            View keynote topics
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PostCTA;
