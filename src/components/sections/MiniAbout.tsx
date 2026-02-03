import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const MiniAbout = () => {
  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Open message panel"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Photo placeholder */}
            <div className="md:col-span-1">
              <div className="aspect-square max-w-xs mx-auto md:mx-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl overflow-hidden relative group">
                {/* Placeholder for photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">👋</div>
                    <p className="text-sm text-muted-foreground">Ferry Hoes</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bio */}
            <div className="md:col-span-2">
              <span className="text-primary font-medium text-sm mb-2 block">
                The person behind all this
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 font-bold">
                Hi, I'm <span className="text-accent font-handwriting">Ferry.</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  For 15 years, I've been helping organizations navigate the intersection 
                  of technology and humanity—as a speaker, author, and advisor.
                </p>
                <p>
                  My work focuses on how we can build systems, cultures, and technologies 
                  that amplify what makes us human rather than diminish it.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="rounded-full px-6 group border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  The full story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  onClick={openMessagePanel}
                  className="rounded-full px-6 group bg-primary hover:bg-primary/90"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Say hello
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniAbout;
