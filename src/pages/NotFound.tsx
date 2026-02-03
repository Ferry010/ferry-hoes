import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Coffee } from "lucide-react";

const notFoundMessages = [
  "Oops, I must have moved that page while reorganizing.",
  "This page is on a coffee break. Permanently.",
  "I probably deleted this during a late-night cleaning spree.",
  "This page went the same way as my New Year's resolutions.",
];

const NotFound = () => {
  const location = useLocation();
  const randomMessage = notFoundMessages[Math.floor(Math.random() * notFoundMessages.length)];

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        {/* Fun visual */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full mb-4">
            <span className="text-5xl">🤔</span>
          </div>
        </div>

        {/* Main content */}
        <h1 className="font-display text-6xl md:text-7xl font-bold text-foreground mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-2 font-handwriting">
          {randomMessage}
        </p>
        <p className="text-sm text-muted-foreground/70 mb-8">
          The page you're looking for doesn't exist (anymore).
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="rounded-full px-6">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <Button 
            variant="outline" 
            className="rounded-full px-6"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back
          </Button>
        </div>

        {/* Cheeky footer */}
        <p className="mt-12 text-xs text-muted-foreground/50 flex items-center justify-center gap-1">
          <Coffee className="h-3 w-3" />
          While you're here, maybe grab a coffee?
        </p>
      </div>
    </div>
  );
};

export default NotFound;
