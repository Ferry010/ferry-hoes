import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import logoWhite from "@/assets/ferry-hoes-logo-white.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    await supabase.from("email_subscribers" as any).insert({
      email: email.trim(),
      source: "newsletter",
    } as any);
    setStatus("success");
    setEmail("");
  };

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <img src={logoWhite} alt="Ferry Hoes" className="h-8 md:h-10 w-auto" />
            </div>
            <nav className="flex flex-wrap gap-6 md:gap-8">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
              <Link to="/speaking" className="text-white/70 hover:text-white transition-colors">Speaking</Link>
              <Link to="/podcast" className="text-white/70 hover:text-white transition-colors">Podcast</Link>
              <Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link>
              <a href="/#book" className="text-white/70 hover:text-white transition-colors">The Book</a>
              <Link to="/now" className="text-white/70 hover:text-white transition-colors">Now</Link>
              <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
              <Link to="/press" className="text-white/70 hover:text-white transition-colors">Press</Link>
            </nav>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Social links */}
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/ferryhoes/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">LinkedIn</a>
                <a href="https://www.youtube.com/@ferry-hoes" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">YouTube</a>
                <a href="https://discord.gg/BfZrw5wJ" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">Discord</a>
              </div>

              {/* Inline newsletter */}
              {status === "success" ? (
                <span className="inline-flex items-center gap-1.5 text-white/50 text-sm">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Subscribed
                </span>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-8 w-48 text-xs bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/20"
                  />
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    size="sm"
                    className="h-8 px-3 text-xs bg-white/10 hover:bg-white/20 text-white"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
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
