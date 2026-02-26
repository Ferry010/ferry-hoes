import { Link } from "react-router-dom";
import logoWhite from "@/assets/ferry-hoes-logo-white.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            {/* Logo/Name */}
            <div>
              <img src={logoWhite} alt="Ferry Hoes" className="h-8 md:h-10 w-auto" />
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-wrap gap-6 md:gap-8">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/speaking" className="text-white/70 hover:text-white transition-colors">
                Speaking
              </Link>
              <Link to="/podcast" className="text-white/70 hover:text-white transition-colors">
                Podcast
              </Link>
              <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Social links placeholder */}
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/ferryhoes/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">
                  LinkedIn
                </a>
                <a href="https://www.youtube.com/@ferry-hoes" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">
                  YouTube
                </a>
                <a href="https://discord.gg/BfZrw5wJ" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">
                  Discord
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
