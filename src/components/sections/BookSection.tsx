import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import bookCover from "@/assets/brand-humanizing-book.jpg";

const BookSection = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-gold-light overflow-hidden">
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
                  alt="Brand Humanizing - De superpower waarmee je merk menselijker wordt en je bedrijf sneller groeit" 
                  className="relative z-10 w-full max-w-sm rounded-lg shadow-soft-xl hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating pixels decoration */}
                <div className="absolute -right-8 top-1/4 w-4 h-4 bg-primary rounded-sm animate-float" />
                <div className="absolute -right-4 top-1/2 w-3 h-3 bg-primary/70 rounded-sm animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute -right-6 top-2/3 w-2 h-2 bg-primary/50 rounded-sm animate-float" style={{ animationDelay: "2s" }} />
              </div>
            </div>
            
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                <BookOpen className="h-4 w-4" />
                The Book
              </span>
              
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
                <span className="text-primary">BRAND</span><br />
                <span className="text-accent">HUMANIZING</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                De superpower waarmee je merk menselijker wordt en je bedrijf sneller groeit.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Met praktijkcases van a.s.r., Ben & Jerry's, Dove, Octopus Energy, Patagonia en andere 
                organisaties die laten zien hoe je technologie inzet om menselijker te worden, niet minder.
              </p>
              
              <p className="text-sm text-muted-foreground mb-8">
                Co-authored with Jonathan Flores
              </p>
              
              <div className="flex flex-wrap gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;