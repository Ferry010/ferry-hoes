import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import bookCover from "@/assets/brand-humanizing-book.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionLabel from "@/components/SectionLabel";

const BookSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const revealRef = useScrollReveal();

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    const { error } = await supabase.from("email_subscribers" as any).insert({
      email: email.trim(),
      source: "english_waitlist",
    } as any);
    if (error && !error.message.includes("duplicate")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="book" className="py-20 md:py-28 bg-background overflow-hidden relative">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div ref={revealRef} className="scroll-reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Book cover */}
            <div className="relative flex justify-center lg:justify-end order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-foreground/20 rounded-lg blur-2xl translate-x-4 translate-y-4" />
                <img 
                  src={bookCover} 
                  alt="Brand Humanizing - The superpower that makes your brand more human and your business grow faster" 
                  className="relative z-10 w-full max-w-sm rounded-lg shadow-soft-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <SectionLabel text="The Book" />
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 font-bold">
                <span className="text-foreground">Brand</span><br />
                <span className="text-accent">Humanizing</span>
                <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                The superpower that makes your brand more human and your business grow faster.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Featuring case studies from a.s.r., Ben & Jerry's, Dove, Octopus Energy, Patagonia and other 
                organisations showing how to use technology to become more human, not less.
              </p>
              
              <p className="text-sm text-muted-foreground mb-8">
                Co-authored with Jonathan Flores
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg"
                  className="rounded-full px-8 bg-accent hover:bg-accent/90"
                  asChild
                >
                  <a href="https://brandhumanizingboek.nl" target="_blank" rel="noopener noreferrer">
                    Get the book
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* English edition waitlist */}
              <div className="bg-background/60 backdrop-blur rounded-2xl p-6 border border-border">
                <p className="text-sm text-foreground font-semibold mb-1">
                  Currently available in Dutch only.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Get notified when the English edition launches.
                </p>
                {status === "success" ? (
                  <p className="inline-flex items-center gap-2 text-sm text-primary font-medium animate-fade-in">
                    <CheckCircle className="h-4 w-4" />
                    You're on the list!
                  </p>
                ) : (
                  <form onSubmit={handleWaitlist} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="max-w-xs text-sm"
                    />
                    <Button type="submit" size="sm" disabled={status === "loading"}>
                      {status === "loading" ? "..." : "Join the waitlist"}
                    </Button>
                  </form>
                )}
                {status === "error" && (
                  <p className="text-xs text-destructive mt-2">Something went wrong. Please try again.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
