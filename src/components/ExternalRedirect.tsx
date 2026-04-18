import { useEffect } from "react";

interface Props {
  to: string;
}

/**
 * Client-side redirect to an external URL.
 * Used to route /book and /contact to Ferry's booking agent.
 */
const ExternalRedirect = ({ to }: Props) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">
        Redirecting to{" "}
        <a href={to} className="text-accent underline">
          Ferry's booking page
        </a>
        …
      </p>
    </main>
  );
};

export default ExternalRedirect;
