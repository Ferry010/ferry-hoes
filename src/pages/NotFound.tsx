import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
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
        <title>This page is missing. | Ferry Hoes</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Head back to ferryhoes.com to explore the idea, the book, the podcast, and more."
        />
      </Helmet>

      <SiteHeader />

      <main className="bg-background min-h-screen">
        <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14 pt-36 md:pt-44 pb-24 md:pb-32">
          <div className="max-w-3xl">
            <Eyebrow>404</Eyebrow>
            <h1
              className="font-display font-bold text-foreground leading-[1.02]"
              style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
            >
              This page is <span className="text-primary">missing</span>
              <Period />
            </h1>

            <p className="mt-8 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-xl">
              The path{" "}
              <code className="px-2 py-0.5 rounded bg-background-alt text-foreground/80 text-base">
                {location.pathname}
              </code>{" "}
              doesn't exist. Try one of these instead.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-xl">
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
              </Link>
              <Link
                to="/book"
                className="group p-5 rounded-xl bg-background-alt border border-border hover:border-primary/40 transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-primary mb-2">
                  • Talk
                </p>
                <p className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Book Ferry
                </p>
              </Link>
            </div>

            <div className="mt-10">
              <PillButton to="/" variant="primary">
                Back home
              </PillButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
