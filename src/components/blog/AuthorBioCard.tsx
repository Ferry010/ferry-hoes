import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ferryPortrait from "@/assets/ferry-portrait.jpg";

const AuthorBioCard = () => {
  return (
    <aside className="mt-16 pt-8 border-t border-border">
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-4">
        About the author
      </p>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border">
        <Link to="/about" className="shrink-0 mx-auto sm:mx-0">
          <img
            src={ferryPortrait}
            alt="Ferry Hoes portrait"
            loading="lazy"
            width={112}
            height={112}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-2 ring-accent/20"
          />
        </Link>
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <h3 className="font-display text-xl font-bold text-foreground">
            Ferry Hoes
            <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full ml-1 mb-1 align-baseline" />
          </h3>
          <p className="text-sm text-accent font-medium mt-0.5">
            Keynote Speaker &amp; Author of Brand Humanizing
          </p>
          <p className="text-muted-foreground text-sm md:text-base mt-3 leading-relaxed">
            Ferry helps leaders and teams put humans first in a world racing to
            automate everything. He speaks at conferences worldwide on AI, the
            future of work, and Brand Humanizing.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 mt-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
            >
              More about Ferry
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              state={{ from: "speaking" }}
              className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
            >
              Book Ferry to speak
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AuthorBioCard;
