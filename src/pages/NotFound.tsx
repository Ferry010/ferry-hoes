import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import { Eyebrow } from "@/components/HeadingDot";
import ActionButton from "@/components/Button";

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
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <SiteHeader />

      <main className="bg-background min-h-screen">
        <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14 pt-36 md:pt-44 pb-24 md:pb-32">
          <div className="max-w-3xl">
            <Eyebrow>404</Eyebrow>
            <h1
              className="font-display headline-muted text-balance"
              style={{ fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 500, lineHeight: 1.04 }}
            >
              This page is <strong>missing.</strong>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-xl">
              The path{" "}
              <code className="px-2 py-0.5 bg-background-alt text-foreground/80 text-base">
                {location.pathname}
              </code>{" "}
              doesn't exist. Try one of these instead.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-xl">
              {[
                { to: "/the-idea", label: "The Idea", eyebrow: "Read" },
                { to: "/podcast", label: "Podcast", eyebrow: "Listen" },
                { to: "/the-book", label: "The Book", eyebrow: "Read" },
              ].map((c) => (
                <Link key={c.to} to={c.to} className="group p-5 border border-border hover:border-foreground transition-colors">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-terracotta font-medium mb-2">
                    • {c.eyebrow}
                  </p>
                  <p className="font-display text-lg text-foreground group-hover:text-accent transition-colors" style={{ fontWeight: 500 }}>
                    {c.label}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <ActionButton to="/" variant="primary">Back home</ActionButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
