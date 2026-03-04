import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  label: string;
  route: string;
  copy: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "MY STORY",
    route: "/about",
    copy: "The journey from building websites at ten to speaking internationally.",
  },
  {
    label: "THE IDEA",
    route: "/#brand-humanizing",
    copy: "Brand Humanizing and essays exploring how organizations stay distinctive.",
  },
  {
    label: "ON STAGE",
    route: "/speaking",
    copy: "Keynotes, workshops and live conversations about technology and human judgment.",
  },
  {
    label: "PODCAST",
    route: "/podcast",
    copy: "Podcast episodes and writing where thinking happens in public.",
  },
  {
    label: "BLOG",
    route: "/blog",
    copy: "Essays, ideas, and experiments worth reading.",
  },
  {
    label: "THE BOOK",
    route: "/#book",
    copy: "Brand Humanizing, the book on staying distinctive in a world of sameness.",
  },
  {
    label: "GET IN TOUCH",
    route: "/contact",
    copy: "For events, collaborations or conversations.",
  },
];

interface IndexOverlayProps {
  open: boolean;
  onClose: () => void;
}

const IndexOverlay = ({ open, onClose }: IndexOverlayProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const [idleLine1, setIdleLine1] = useState(false);
  const [idleLine2, setIdleLine2] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const idleTimer1 = useRef<ReturnType<typeof setTimeout>>();
  const idleTimer2 = useRef<ReturnType<typeof setTimeout>>();

  // Mount/unmount with animation
  useEffect(() => {
    if (open) {
      setMounted(true);
      // Force reflow before setting visible
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      document.body.style.overflow = "hidden";
    } else {
      setVisible(false);
      const timer = setTimeout(() => {
        setMounted(false);
        setHoveredIndex(null);
        setTappedIndex(null);
        setIdleLine1(false);
        setIdleLine2(false);
      }, 200);
      document.body.style.overflow = "";
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Idle timers
  useEffect(() => {
    if (open) {
      idleTimer1.current = setTimeout(() => setIdleLine1(true), 12000);
      idleTimer2.current = setTimeout(() => setIdleLine2(true), 25000);
    }
    return () => {
      clearTimeout(idleTimer1.current);
      clearTimeout(idleTimer2.current);
    };
  }, [open]);

  const resetIdleTimers = useCallback(() => {
    setIdleLine1(false);
    setIdleLine2(false);
    clearTimeout(idleTimer1.current);
    clearTimeout(idleTimer2.current);
    idleTimer1.current = setTimeout(() => setIdleLine1(true), 12000);
    idleTimer2.current = setTimeout(() => setIdleLine2(true), 25000);
  }, []);

  const handleNavigate = (route: string) => {
    if (location.pathname === route) {
      onClose();
      return;
    }
    onClose();
    setTimeout(() => navigate(route), 200);
  };

  const handleItemInteraction = (index: number) => {
    resetIdleTimers();
    if (isMobile) {
      if (tappedIndex === index) {
        handleNavigate(NAV_ITEMS[index].route);
      } else {
        setTappedIndex(index);
      }
    } else {
      handleNavigate(NAV_ITEMS[index].route);
    }
  };

  if (!mounted) return null;

  const activeCopy = isMobile
    ? tappedIndex !== null
      ? NAV_ITEMS[tappedIndex].copy
      : null
    : hoveredIndex !== null
      ? NAV_ITEMS[hoveredIndex].copy
      : null;

  return (
    <>
      {/* Backdrop blur layer */}
      <div
        className="fixed inset-0 z-[998] transition-all duration-200"
        style={{
          backdropFilter: visible ? "blur(4px)" : "blur(0px)",
          WebkitBackdropFilter: visible ? "blur(4px)" : "blur(0px)",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Overlay */}
      <div
        className="fixed inset-0 z-[999] flex flex-col"
        style={{
          backgroundColor: "#ffffff",
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateY(0px) scale(1)"
            : "translateY(15px) scale(1.02)",
          transition: visible
            ? "opacity 200ms ease-out, transform 200ms ease-out"
            : "opacity 180ms ease-in, transform 180ms ease-in",
        }}
      >
        {/* Close button */}
        <div className="flex justify-end px-8 pt-8 md:px-12 md:pt-10">
          <button
            onClick={onClose}
            className="font-display text-lg md:text-xl font-medium tracking-wide text-foreground hover:brightness-[1.03] transition-none cursor-pointer"
          >
            Close
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center px-8 md:px-12 lg:px-20">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 md:gap-12">
            {/* Left: Nav items */}
            <nav className="flex flex-col gap-6 md:gap-8">
              {NAV_ITEMS.map((item, i) => (
                <div key={item.route}>
                  <button
                    onClick={() => handleItemInteraction(i)}
                    onMouseEnter={() => {
                      if (!isMobile) {
                        setHoveredIndex(i);
                        resetIdleTimers();
                      }
                    }}
                    onMouseLeave={() => {
                      if (!isMobile) setHoveredIndex(null);
                    }}
                    className="font-display text-2xl md:text-4xl lg:text-5xl font-medium uppercase tracking-wide text-foreground hover:brightness-[1.03] transition-none cursor-pointer text-left leading-tight"
                  >
                    {item.label}
                  </button>

                  {/* Mobile micro-copy inline */}
                  {isMobile && (
                    <div
                      className="overflow-hidden transition-all duration-150 ease-out"
                      style={{
                        maxHeight: tappedIndex === i ? "80px" : "0px",
                        opacity: tappedIndex === i ? 1 : 0,
                      }}
                    >
                      <p className="text-muted-foreground text-sm font-sans mt-2 max-w-xs leading-relaxed">
                        {item.copy}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right: Micro-copy (desktop only) */}
            {!isMobile && (
              <div className="hidden md:flex items-center">
                <p
                  className="text-muted-foreground text-base font-sans max-w-xs leading-relaxed transition-opacity duration-150 ease-out"
                  style={{ opacity: activeCopy ? 1 : 0 }}
                >
                  {activeCopy || "\u00A0"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Idle messages */}
        <div className="px-8 pb-8 md:px-12 md:pb-10">
          <p
            className="text-muted-foreground/60 text-xs font-sans italic transition-opacity duration-500 ease-out"
            style={{ opacity: idleLine1 ? 1 : 0 }}
          >
            Architecture matters.
          </p>
          <p
            className="text-muted-foreground/40 text-xs font-sans italic mt-1 transition-opacity duration-500 ease-out"
            style={{ opacity: idleLine2 ? 1 : 0 }}
          >
            So does curiosity.
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexOverlay;
