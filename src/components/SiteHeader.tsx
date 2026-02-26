import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "On Stage", route: "/speaking" },
  { label: "The Idea", route: "/#brand-humanizing" },
  { label: "The Book", route: "/#book" },
  { label: "Ideas", route: "/podcast" },
  { label: "Blog", route: "/blog" },
  { label: "The Story", route: "/about" },
];

const SiteHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = useCallback((e: React.MouseEvent, route: string) => {
    if (route.startsWith("/#")) {
      e.preventDefault();
      const hash = route.slice(1);
      if (location.pathname === "/") {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setMobileOpen(false);
    }
  }, [location.pathname, navigate]);

  const isActive = (route: string) => {
    if (route.startsWith("/#")) return false;
    return location.pathname === route;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Hide on admin routes
  if (location.pathname.startsWith("/admin")) return null;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[900] bg-white/95 backdrop-blur-sm transition-all duration-200"
        style={{
          paddingTop: scrolled ? "0.625rem" : "1rem",
          paddingBottom: scrolled ? "0.625rem" : "1rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-lg md:text-xl font-bold tracking-widest uppercase text-foreground hover:brightness-[1.03] transition-none"
          >
            Ferry Hoes
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <nav className="flex items-center gap-8 lg:gap-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.route}
                  to={item.route}
                  onClick={(e) => handleNavClick(e, item.route)}
                  className="group relative font-sans text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-150"
                >
                  {item.label}
                  <span
                    className="absolute left-0 -bottom-0.5 h-px bg-foreground origin-left transition-transform duration-200 ease-out"
                    style={{
                      transform: isActive(item.route) ? "scaleX(1)" : "scaleX(0)",
                      width: "100%",
                    }}
                  />
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
                </Link>
              ))}

              {/* CTA */}
              <Link
                to="/conversation"
                className="ml-2 px-5 py-2 bg-primary text-primary-foreground font-sans text-sm font-medium rounded-md hover:brightness-[1.05] active:scale-[0.97] transition-all duration-120"
              >
                Start the conversation
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
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile slide-down menu */}
      {isMobile && (
        <div
          className="fixed inset-0 z-[899] bg-white flex flex-col transition-all duration-200 ease-out"
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
                onClick={(e) => { handleNavClick(e, item.route); setMobileOpen(false); }}
                className="font-sans text-xl font-medium text-foreground py-4 border-b border-border/40 hover:text-primary transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/conversation"
              onClick={() => setMobileOpen(false)}
              className="mt-8 w-full text-center px-6 py-3.5 bg-primary text-primary-foreground font-sans text-base font-medium rounded-md hover:brightness-[1.05] active:scale-[0.97] transition-all duration-120"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
