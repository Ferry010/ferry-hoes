import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "The Idea", route: "/the-idea" },
  { label: "My Story", route: "/my-story" },
  { label: "On Stage", route: "/on-stage" },
  { label: "Podcast", route: "/podcast" },
  { label: "Writing", route: "/writing" },
  { label: "The Book", route: "/the-book" },
];

const SiteHeader = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = useCallback(
    (route: string) => location.pathname === route,
    [location.pathname]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (location.pathname.startsWith("/admin")) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[900] bg-background/95 backdrop-blur-sm transition-all duration-200 ${
          scrolled ? "border-b border-border" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 h-16 md:h-[72px] flex items-center justify-between">
          {/* Wordmark */}
          <Link
            to="/"
            className="font-display font-bold text-base md:text-[17px] tracking-tight text-foreground hover:opacity-80 transition-opacity"
            aria-label="Ferry Hoes — Home"
          >
            FERRY HOES<span className="text-primary">.</span>
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <nav className="flex items-center gap-7 lg:gap-9">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.route}
                  to={item.route}
                  className={`text-sm font-medium tracking-tight transition-colors duration-150 ${
                    isActive(item.route)
                      ? "text-primary"
                      : "text-foreground/75 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/book"
                className="ml-2 inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:brightness-95 active:scale-[0.97] transition-all duration-150 group"
              >
                Book Ferry
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </nav>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-1"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile menu */}
      {isMobile && (
        <div
          className="fixed inset-0 z-[899] bg-background flex flex-col transition-all duration-200 ease-out"
          style={{
            opacity: mobileOpen ? 1 : 0,
            pointerEvents: mobileOpen ? "auto" : "none",
            transform: mobileOpen ? "translateY(0)" : "translateY(-12px)",
          }}
        >
          <div className="pt-20 px-8 flex-1 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl font-bold text-foreground py-4 border-b border-border/50 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/book"
              onClick={() => setMobileOpen(false)}
              className="mt-8 w-full text-center px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:brightness-95 transition-all"
            >
              Book Ferry →
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
