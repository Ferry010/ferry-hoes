import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "fh-privacy-dismissed";

/**
 * Ferry Hoes "no-cookies" banner.
 * Slides in from the bottom-right after a short delay.
 * Dismiss state is stored in localStorage under fh-privacy-dismissed.
 */
const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setExiting(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50 transition-all duration-300 ease-out ${
        exiting ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="bg-foreground text-background rounded-3xl p-6 md:p-7 shadow-2xl border border-background/10">
        <div className="flex items-start gap-4">
          {/* Crossed-out cookie */}
          <div className="shrink-0 relative w-12 h-12 flex items-center justify-center">
            <span className="text-3xl" role="img" aria-label="cookie">
              🍪
            </span>
            <svg
              className="absolute inset-0 w-12 h-12"
              viewBox="0 0 48 48"
              fill="none"
              aria-hidden="true"
            >
              <line
                x1="8"
                y1="8"
                x2="40"
                y2="40"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-background/90 text-sm leading-relaxed">
              I don't use tracking cookies. I have no idea what you're doing
              on this site, because I can't follow you around. If I invited
              you to my office, I wouldn't tail your every move either.
            </p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
          <Link
            to="/no-cookies"
            onClick={dismiss}
            className="text-primary hover:text-primary/80 text-sm font-semibold underline underline-offset-2 transition-colors"
          >
            Read the no-cookie policy
          </Link>
          <button
            onClick={dismiss}
            className="rounded-full bg-primary text-primary-foreground hover:brightness-95 active:scale-[0.98] font-semibold text-sm px-5 h-10 transition-all whitespace-nowrap"
          >
            Fair enough
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
