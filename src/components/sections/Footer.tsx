import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Eyebrow } from "@/components/HeadingDot";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SPEAKERS_ACADEMY_URL, EXTERNAL_LINKS } from "@/config/site";

const SITE_LINKS = [
  { to: "/the-idea", label: "The Idea" },
  { to: "/my-story", label: "My Story" },
  { to: "/on-stage", label: "On Stage" },
  { to: "/podcast", label: "Podcast" },
  { to: "/writing", label: "Writing" },
  { to: "/the-book", label: "The Book" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    const { error } = await supabase
      .from("email_subscribers" as any)
      .insert({ email: email.trim(), source: "footer" } as any);
    if (error && !error.message.includes("duplicate")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div className="grid md:grid-cols-12 gap-12 md:gap-10">
          {/* Bio */}
          <div className="md:col-span-4">
            <p className="font-display text-3xl tracking-tight text-foreground" style={{ fontWeight: 500 }}>
              Ferry Hoes.
            </p>
            <p className="mt-5 text-base text-foreground/75 leading-relaxed max-w-sm">
              Keynote speaker, author of Brand Humanizing, host of The Human Era Podcast.
            </p>
          </div>

          {/* The Letter */}
          <div className="md:col-span-4">
            <Eyebrow>The Letter</Eyebrow>
            <h3 className="font-display text-[28px] leading-[1.15] text-foreground" style={{ fontWeight: 500 }}>
              A short letter. Once a month.
            </h3>
            <p className="mt-3 text-[15px] text-foreground/70">
              No fluff. Unsubscribe in one click.
            </p>

            <div className="mt-5 max-w-sm">
              {status === "success" ? (
                <p className="inline-flex items-center gap-2 text-sm text-accent font-medium">
                  <CheckCircle className="h-4 w-4" />
                  Got it. Ferry will write to you soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-11 text-base bg-background border-foreground/30 rounded-none"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-4 h-11 bg-foreground text-background text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-accent transition-colors disabled:opacity-50"
                  >
                    {status === "loading" ? "..." : "Join the letter →"}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>

          {/* Also by Ferry */}
          <div className="md:col-span-4">
            <Eyebrow>Also by Ferry</Eyebrow>
            <div className="space-y-4">
              <a
                href={EXTERNAL_LINKS.brandHumanizing}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <p className="font-display text-lg text-foreground group-hover:text-accent transition-colors" style={{ fontWeight: 500 }}>
                  Brand Humanizing Institute →
                </p>
                <p className="text-sm text-foreground/65 mt-1">
                  Advisory, method, and research.
                </p>
              </a>
              <a
                href={EXTERNAL_LINKS.aiga}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <p className="font-display text-lg text-foreground group-hover:text-accent transition-colors" style={{ fontWeight: 500 }}>
                  AIGA Academy →
                </p>
                <p className="text-sm text-foreground/65 mt-1">
                  AI literacy training (Dutch).
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Site links */}
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          {SITE_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/70 hover:text-accent transition-colors link-draw"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SPEAKERS_ACADEMY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors link-draw"
          >
            Book Ferry ↗
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-foreground/55">
            © {new Date().getFullYear()} Ferry Hoes.
          </p>
          <div className="flex gap-5 text-xs">
            <a href={EXTERNAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">LinkedIn</a>
            <a href={EXTERNAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">Spotify</a>
            <a href={EXTERNAL_LINKS.applePodcasts} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">Apple Podcasts</a>
            <a href={EXTERNAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
