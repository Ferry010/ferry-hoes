import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { SPEAKERS_ACADEMY_URL } from "@/config/site";

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
        className={`fixed top-0 left-0 right-0 z-[900] bg-background/90 backdrop-blur-md transition-all duration-200 ${
          scrolled ? "border-b border-border" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 h-16 md:h-[72px] flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-[18px] tracking-[-0.01em] text-foreground hover:text-accent transition-colors"
            style={{ fontWeight: 500 }}
            aria-label="Ferry Hoes — Home"
          >
            FERRY HOES.
          </Link>

          {!isMobile && (
            <nav className="flex items-center gap-7 lg:gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.route}
                  to={item.route}
                  className={`text-[14px] tracking-tight link-draw transition-colors ${
                    isActive(item.route)
                      ? "text-accent"
                      : "text-foreground/80 hover:text-terracotta"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={SPEAKERS_ACADEMY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-[12px] uppercase tracking-[0.14em] font-medium border border-foreground hover:bg-accent hover:border-accent transition-colors"
              >
                Book Ferry →
              </a>
            </nav>
          )}

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
                className="font-display text-3xl text-foreground py-4 border-b border-border hover:text-accent transition-colors"
                style={{ fontWeight: 500 }}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={SPEAKERS_ACADEMY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-8 w-full text-center px-6 py-4 bg-foreground text-background text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-accent transition-colors"
            >
              Book Ferry →
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
