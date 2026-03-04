import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, MessageSquare, Network } from "lucide-react";

const DISCORD_URL = "https://discord.gg/BfZrw5wJ";

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 md:py-32 bg-secondary/90 backdrop-blur-sm overflow-hidden relative">
      <div className="container px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Community
          </span>

          {/* Headline */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-8 font-bold">
            <span className="text-foreground">Don't follow.</span><br />
            <span className="text-primary">Build with me.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            I'm creating a community of builders, thinkers, and doers who want to 
            shape the future of work and technology. Not as followers, but as collaborators.
          </p>

          {/* Social proof */}
          <p className="text-sm font-medium text-primary mb-8">
            Join 400+ builders, thinkers, and doers already in the community.
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 text-left max-w-xl mx-auto">
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm">Early access to ideas, frameworks, and content before anyone else</span>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm">Live Q&As and direct conversations with Ferry</span>
            </div>
            <div className="flex items-start gap-3">
              <Network className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm">A network of like-minded professionals across industries</span>
            </div>
          </div>
          
          {/* Discord CTA */}
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-6 text-lg group"
          >
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join the Discord
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
