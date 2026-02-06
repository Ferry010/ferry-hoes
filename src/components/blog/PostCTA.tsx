import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const PostCTA = () => {
  return (
    <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center border border-accent/20">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
          <MessageCircle className="w-8 h-8 text-accent" />
        </div>
      </div>

      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
        Want to continue this conversation?
      </h3>

      <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
        Join the community on Discord and let's discuss ideas that matter.
      </p>

      <Button
        asChild
        size="lg"
        className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 group"
      >
        <a
          href="https://discord.gg/your-invite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Discord Community
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </div>
  );
};

export default PostCTA;
