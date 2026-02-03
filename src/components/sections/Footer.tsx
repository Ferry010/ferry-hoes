import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            {/* Logo/Name */}
            <div>
              <span className="font-display text-3xl md:text-4xl font-bold">Ferry Hoes</span>
            </div>
            
            {/* Navigation */}
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
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
          
          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Tagline */}
              <p className="text-white/50 text-sm md:text-base">
                Humans first. Technology second. Always.
              </p>
              
              {/* Social links placeholder */}
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
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center mt-8">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Ferry Hoes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
