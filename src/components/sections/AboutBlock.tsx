import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ferryPhoto from "@/assets/ferry-bookstore.jpg";

const AboutBlock = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/90 backdrop-blur-sm overflow-hidden relative">
      <div className="container px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Circular image composition */}
          <div className="relative flex justify-center">
            {/* Decorative smaller circles */}
            <div className="absolute -top-10 -left-6 w-20 h-20 rounded-full bg-accent/30" />
            <div className="absolute -top-6 right-10 w-16 h-16 rounded-full bg-brand-gold/40" />
            <div className="absolute bottom-16 -left-10 w-24 h-24 rounded-full bg-primary/20" />
            <div className="absolute -bottom-8 right-6 w-18 h-18 rounded-full bg-accent/25" />
            <div className="absolute top-1/3 -right-8 w-14 h-14 rounded-full bg-brand-gold/30" />
            
            {/* Main circular image */}
            <div className="w-80 h-80 md:w-[26rem] md:h-[26rem] lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden shadow-2xl border-4 border-background/50">
              <img
                src={ferryPhoto}
                alt="Ferry Hoes holding Brand Humanizing book in a bookstore"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Ferry Hoes
            </p>
            
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] mb-10 text-foreground">
              International speaker, published author and entrepreneur. My mission is to unleash super-human potential with the help of technology.
            </h2>
            
            <Link 
              to="/about"
              className="group inline-flex items-center text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              About Ferry
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
