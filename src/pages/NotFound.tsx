import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const lostMessages = [
  "You've wandered into uncharted territory.",
  "This page got lost somewhere between human and machine.",
  "Even AI can't find what you're looking for here.",
  "Looks like this page hasn't been humanized yet.",
  "404: Page not found. But you? Still very much found.",
];

const NotFound = () => {
  const location = useLocation();
  const [message] = useState(
    () => lostMessages[Math.floor(Math.random() * lostMessages.length)]
  );

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Ferry Hoes</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Head back to ferryhoes.com to explore keynotes, the book, the podcast, and more."
        />
      </Helmet>

      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
        {/* Big 404 */}
        <h1
          className="font-heading select-none text-[10rem] font-black leading-none tracking-tighter text-primary/10 sm:text-[14rem]"
          aria-hidden="true"
        >
          404
        </h1>

        {/* Copy */}
        <div className="-mt-10 max-w-md space-y-4 sm:-mt-14">
          <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            {message}
          </p>
          <p className="text-muted-foreground">
            The page{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground/70">
              {location.pathname}
            </code>{" "}
            doesn't exist. Let's get you back on track.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">
              <Search className="mr-2 h-4 w-4" />
              Browse Articles
            </Link>
          </Button>
        </div>

        {/* Quick links */}
        <nav className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {[
            { to: "/speaking", label: "Speaking" },
            { to: "/about", label: "About" },
            { to: "/podcast", label: "Podcast" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="underline-offset-4 hover:text-foreground hover:underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-16 text-xs text-muted-foreground/60">
          <ArrowLeft className="mr-1 inline h-3 w-3" />
          Or hit the back button. That works too.
        </p>
      </div>
    </>
  );
};

export default NotFound;
