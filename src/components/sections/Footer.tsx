import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * Editorial footer.
 * Left: bio + newsletter promise. Middle: site links. Right: "Also by Ferry".
 */
const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 border-t border-border/20">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div className="grid md:grid-cols-12 gap-12 md:gap-10">
          {/* Bio */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              Ferry Hoes<span className="text-primary">.</span>
            </p>
            <p className="mt-4 text-base text-background/70 leading-relaxed max-w-sm">
              Keynote speaker, author of Brand Humanizing, host of The Human
              Era Podcast.
            </p>
            <p className="mt-6 text-sm text-background/60 max-w-sm">
              A short letter, once a month. No fluff.
            </p>
            <Link
              to="/#the-letter"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Join the letter →
            </Link>
          </div>

          {/* Site links */}
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-background/50 mb-5">
              Site
            </p>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/the-idea", label: "The Idea" },
                { to: "/my-story", label: "My Story" },
                { to: "/on-stage", label: "On Stage" },
                { to: "/podcast", label: "Podcast" },
                { to: "/writing", label: "Writing" },
                { to: "/the-book", label: "The Book" },
                { to: "/book", label: "Book Ferry" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Also by Ferry */}
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-background/50 mb-5">
              Also by Ferry
            </p>
            <div className="space-y-3">
              <a
                href="https://brandhumanizing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-3 p-4 rounded-xl bg-background/[0.04] hover:bg-background/[0.08] transition-colors"
              >
                <div>
                  <p className="font-semibold text-background">
                    Brand Humanizing Institute
                  </p>
                  <p className="text-xs text-background/60 mt-1">
                    Advisory · Method · Research
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-background/60 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
              </a>
              <a
                href="https://aigeletterdheid.academy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-3 p-4 rounded-xl bg-background/[0.04] hover:bg-background/[0.08] transition-colors"
              >
                <div>
                  <p className="font-semibold text-background">AIGA Academy</p>
                  <p className="text-xs text-background/60 mt-1">
                    AI literacy training (NL)
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-background/60 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-background/50">
            <p>© {new Date().getFullYear()} Ferry Hoes.</p>
            <span aria-hidden="true">·</span>
            <Link
              to="/no-cookies"
              className="hover:text-primary transition-colors"
            >
              The No-Cookies Cookie Policy
            </Link>
          </div>
          <div className="flex gap-5 text-xs">
            <a
              href="https://www.linkedin.com/in/ferryhoes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://open.spotify.com/show/6eGkXe767cYZ5Rw627Xpgu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-primary transition-colors"
            >
              Spotify
            </a>
            <a
              href="https://podcasts.apple.com/nl/podcast/the-human-era-podcast/id1598552331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-primary transition-colors"
            >
              Apple Podcasts
            </a>
            <a
              href="https://www.youtube.com/@ferry-hoes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-primary transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
