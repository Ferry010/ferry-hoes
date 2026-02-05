import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, MessageCircle } from "lucide-react";
import bookCover from "@/assets/brand-humanizing-book.jpg";

const BookSection = () => {
  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Open message panel"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <section className="min-h-screen flex items-center py-24 md:py-32 bg-secondary/90 backdrop-blur-sm overflow-hidden relative">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Book cover */}
            <div className="relative flex justify-center lg:justify-end order-1">
              <div className="relative">
                {/* Shadow effect */}
                <div className="absolute inset-0 bg-foreground/20 rounded-lg blur-2xl translate-x-4 translate-y-4" />
                
                {/* Book image */}
                <img 
                  src={bookCover} 
                  alt="Brand Humanizing - The superpower that makes your brand more human and your business grow faster" 
                  className="relative z-10 w-full max-w-sm rounded-lg shadow-soft-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                <BookOpen className="h-4 w-4" />
                The Book
              </span>
              
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 font-bold">
                <span className="text-primary">Brand</span><br />
                <span className="text-accent">Humanizing</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                The superpower that makes your brand more human and your business grow faster.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Featuring case studies from a.s.r., Ben & Jerry's, Dove, Octopus Energy, Patagonia and other 
                organizations showing how to use technology to become more human, not less.
              </p>
              
              <p className="text-sm text-muted-foreground mb-8">
                Co-authored with Jonathan Flores
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg"
                  className="rounded-full px-8 bg-accent hover:bg-accent/90"
                >
                  Get the book
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Read a preview
                </Button>
              </div>

              {/* Dutch-only note with English request */}
              <div className="bg-background/60 backdrop-blur rounded-2xl p-6 border border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong className="text-foreground">Currently available in Dutch only.</strong>
                  {" "}Want an English edition? Let me know — with enough interest, we'll publish!
                </p>
                <button
                  onClick={openMessagePanel}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors group"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="underline underline-offset-4">Request English edition</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BookSection;
