import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import { format, parseISO } from "date-fns";
import { Loader2 } from "lucide-react";

interface NowData {
  last_updated: string | null;
  on_stage: string | null;
  working_on: string | null;
  reading_thinking: string | null;
  in_the_studio: string | null;
}

const sections = [
  { key: "on_stage" as const, label: "On stage" },
  { key: "working_on" as const, label: "Working on" },
  { key: "reading_thinking" as const, label: "Reading & thinking about" },
  { key: "in_the_studio" as const, label: "In the studio" },
];

const Now = () => {
  const [data, setData] = useState<NowData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("now_page")
      .select("*")
      .maybeSingle()
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SEOHead
        title="Now — Ferry Hoes"
        description="What Ferry Hoes is up to right now — speaking, projects, reading, and creative work."
        canonicalUrl="/now"
      />
      <SiteHeader />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container px-6 md:px-8 max-w-2xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">Now</h1>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : !data ? (
            <p className="text-muted-foreground">Nothing here yet — check back soon.</p>
          ) : (
            <>
              {data.last_updated && (
                <p className="text-muted-foreground text-sm mb-12">
                  Last updated {format(parseISO(data.last_updated), "MMMM d, yyyy")}
                </p>
              )}

              <div className="space-y-12">
                {sections.map(({ key, label }) => {
                  const content = data[key];
                  if (!content) return null;
                  return (
                    <section key={key}>
                      <h2 className="font-display text-xl font-semibold text-foreground mb-3">{label}</h2>
                      <div className="text-foreground/80 leading-relaxed whitespace-pre-line">{content}</div>
                    </section>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Now;
