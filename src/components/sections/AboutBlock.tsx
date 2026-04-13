import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ferryPhoto from "@/assets/ferry-speaking-audience.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionLabel from "@/components/SectionLabel";

const AboutBlock = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="bg-background relative">
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        {/* Left: Text content */}
        <div ref={revealRef} className="scroll-reveal flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
          <SectionLabel text="My Story" />
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-6">
            Ferry Hoes
            <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
          </p>
          
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-[1.2] mb-10 text-foreground">
            Most people make technology complicated. I make it <span className="text-accent">human</span>. Through <span className="text-primary">keynotes</span>, a <span className="text-primary">book</span>, and one big idea that's been ten years in the making. That's it. That's the job.
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
        <div className="relative min-h-[400px] md:min-h-[80vh] order-first md:order-last flex items-center justify-center p-8 md:p-12">
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
              Often times listening is more important than talking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
