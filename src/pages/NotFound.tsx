import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/sections/Footer";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Lost in thought. (404) | Ferry Hoes</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Head back to ferryhoes.com to explore the idea, the book, and the podcast."
        />
      </Helmet>

      <main className="bg-background min-h-screen">
        <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14 pt-32 md:pt-40 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: editorial copy */}
            <div className="lg:col-span-8">
              <Eyebrow>404, Lost in thought</Eyebrow>
              <h1
                className="font-display font-bold text-foreground leading-[1.02]"
                style={{ fontSize: "clamp(44px, 8vw, 112px)" }}
              >
                You took a <span className="text-primary">wrong turn</span>.
                <br />
                That's allowed
                <Period />
              </h1>

              <div className="mt-8 max-w-xl space-y-5 text-lg md:text-xl text-foreground/80 leading-[1.6]">
                <p>
                  The page at{" "}
                  <code className="px-2 py-0.5 rounded bg-background-alt text-foreground/80 text-base">
                    {location.pathname}
                  </code>{" "}
                  doesn't exist, or it did once and I tidied up. Either way,
                  you're here now. Let's make it count.
                </p>
                <p className="font-handwritten text-2xl md:text-3xl text-ink-navy not-italic leading-snug">
                  P.S. getting lost is underrated.
                </p>
              </div>

              {/* Where to next */}
              <div className="mt-12 grid sm:grid-cols-3 gap-3 max-w-2xl">
                <Link
                  to="/the-idea"
                  className="group p-5 rounded-xl bg-background-alt border border-border hover:border-primary/40 transition-colors"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-primary mb-2">
                    • Read
                  </p>
                  <p className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    The Idea
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">
                    Ten years in the making.
                  </p>
                </Link>
                <Link
                  to="/podcast"
                  className="group p-5 rounded-xl bg-background-alt border border-border hover:border-primary/40 transition-colors"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-primary mb-2">
                    • Listen
                  </p>
                  <p className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    Podcast
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">
                    Long talks, no soundbites.
                  </p>
                </Link>
                <Link
                  to="/the-book"
                  className="group p-5 rounded-xl bg-background-alt border border-border hover:border-primary/40 transition-colors"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-primary mb-2">
                    • Write back
                  </p>
                  <p className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    The Book
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">
                    Or just say hi.
                  </p>
                </Link>
              </div>

              <div className="mt-10">
                <PillButton to="/" variant="primary">
                  Take me home
                </PillButton>
              </div>
            </div>

            {/* Right: playful sign */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div
                className="relative bg-background-alt border border-border rounded-3xl p-8 md:p-10 max-w-xs"
                style={{ transform: "rotate(-2deg)" }}
              >
                <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary mb-3">
                  • Roadside sign
                </p>
                <p
                  className="font-display font-bold text-foreground leading-[1.1]"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
                >
                  You are
                  <br />
                  <span className="text-primary">here</span>
                  <Period />
                </p>
                <p className="font-handwritten text-2xl text-ink-navy mt-4 leading-tight">
                  ...wherever "here" turned out to be.
                </p>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-foreground/50">Map scale</span>
                  <span className="text-xs font-mono text-foreground/50">
                    1 : ∞
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Easter egg */}
          <p className="mt-20 text-center text-xs font-mono text-foreground/40 select-all">
            Error code: ¯\_(ツ)_/¯
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
