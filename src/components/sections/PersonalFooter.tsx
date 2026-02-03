import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Clock, Heart } from "lucide-react";

const PersonalFooter = () => {
  const openMessagePanel = () => {
    const bubble = document.querySelector('[aria-label="Open message panel"]') as HTMLButtonElement;
    bubble?.click();
  };

  return (
    <footer className="py-16 md:py-24 bg-foreground text-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Personal sign-off */}
          <div className="mb-16 text-center md:text-left">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full flex items-center justify-center text-3xl">
                👋
              </div>
              <div>
                <p className="font-display text-2xl font-bold">Thanks for scrolling this far.</p>
                <p className="text-white/60 font-handwriting">That means something.</p>
              </div>
            </div>
            
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-6">
              If you made it here, we probably think about similar things. 
              Don't be a stranger—drop a thought, ask a question, or just say hi.
            </p>
            
            <button
              onClick={openMessagePanel}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Send me a message
            </button>
          </div>

          {/* Info row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/10 mb-8">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Amsterdam, NL</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="h-4 w-4" />
                <span className="text-sm">CET (UTC+1)</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <span className="font-display text-3xl font-bold">Ferry Hoes</span>
              <p className="text-white/50 text-sm mt-1">Humans first. Technology second. Always.</p>
            </div>
            
            <nav className="flex flex-wrap gap-6 md:gap-8">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/speaking" className="text-white/70 hover:text-white transition-colors">
                Speaking
              </Link>
              <a href="#writing" className="text-white/70 hover:text-white transition-colors">
                Writing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Podcast
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Videos
              </a>
            </nav>
          </div>

          {/* Social + Credits */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                YouTube
              </a>
            </div>
            
            <p className="text-white/30 text-xs flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-accent" /> in Amsterdam
              <span className="mx-2">·</span>
              © {new Date().getFullYear()} Ferry Hoes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PersonalFooter;
