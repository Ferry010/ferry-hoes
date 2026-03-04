import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    const { error } = await supabase.from("email_subscribers" as any).insert({
      email: email.trim(),
      source: "newsletter",
    } as any);
    if (error && !error.message.includes("duplicate")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
            <Mail className="h-4 w-4" />
            Newsletter
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Stay in the loop
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed">
            Insights on technology, humanity, and Brand Humanizing — straight to your inbox. No noise.
          </p>

          {status === "success" ? (
            <div className="inline-flex items-center gap-2 text-lg font-medium animate-fade-in">
              <CheckCircle className="h-5 w-5" />
              You're in! Talk soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-white/30"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md px-6 shrink-0"
              >
                {status === "loading" ? "..." : "Subscribe"}
              </Button>
            </form>
          )}
          {status === "error" && (
            <p className="text-sm text-primary-foreground/60 mt-3">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
