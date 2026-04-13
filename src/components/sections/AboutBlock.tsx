import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ferryPhoto from "@/assets/ferry-speaking-audience.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutBlock = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="min-h-screen bg-background/95 backdrop-blur-sm relative">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left: Text content */}
        <div ref={revealRef} className="scroll-reveal flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            My Story
          </span>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-6">
            Ferry Hoes
          </p>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-10 text-foreground">
            Most people make technology complicated. I make it human. Through keynotes, a book, and one big idea that's been ten years in the making. That's it. That's the job.
          </h2>
          
          <Link 
            to="/about"
            className="group inline-flex items-center text-sm tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors"
          >
            About Ferry
            <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Right: Polaroid photo */}
        <div className="relative min-h-[400px] md:min-h-screen order-first md:order-last flex items-center justify-center p-8 md:p-12">
          <div 
            className="relative bg-white p-2 pb-10 shadow-[4px_6px_24px_rgba(0,0,0,0.12)] max-w-lg w-full"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            <img 
              src={ferryPhoto}
              alt="Ferry Hoes speaking on stage in front of an audience"
              className="w-full aspect-[4/3] object-cover"
            />
            <p 
              className="text-center mt-3 text-lg text-foreground/70 italic"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Ferry — actual human
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
