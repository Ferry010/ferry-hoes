import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ferryPhoto from "@/assets/ferry-bookstore.jpg";

const AboutBlock = () => {
  return (
    <section className="min-h-screen bg-background/95 backdrop-blur-sm relative">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ferry Hoes
          </p>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-10 text-foreground">
            International speaker, published author and entrepreneur. My mission is to unleash super-human potential with the help of technology.
          </h2>
          
          <Link 
            to="/about"
            className="group inline-flex items-center text-sm tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors"
          >
            About Ferry
            <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Right: Photo */}
        <div className="relative min-h-[400px] md:min-h-screen order-first md:order-last">
          <img 
            src={ferryPhoto}
            alt="Ferry Hoes holding Brand Humanizing book in a bookstore"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
