import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import SEOHead from "@/components/blog/SEOHead";
import SectionLabel from "@/components/SectionLabel";
import Footer from "@/components/sections/Footer";
import { format, parseISO } from "date-fns";

interface NowData {
  next_gig: string | null;
  working_on: string | null;
  currently_reading: string | null;
  latest_podcast_guest: string | null;
  thinking_about: string | null;
  last_updated: string | null;
}

const NowItem = ({ label, content }: { label: string; content: string | null }) => {
  if (!content?.trim()) return null;
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
        {label}
        <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full ml-1.5 mb-0.5 align-baseline" />
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  );
};

const Now = () => {
  const [nowData, setNowData] = useState<NowData | null>(null);

  useEffect(() => {
    supabase
      .from("now_page")
      .select("next_gig, working_on, currently_reading, latest_podcast_guest, thinking_about, last_updated")
      .maybeSingle()
      .then(({ data }) => {
        if (data) setNowData(data as NowData);
      });
  }, []);

  return (
    <>
      <SEOHead
        title="What Ferry Is Doing Now | Ferry Hoes"
        description="What Ferry Hoes is up to right now. Speaking, projects, reading, and creative work."
        canonicalUrl="/now"
      />
      <div className="min-h-screen bg-background">
        <div className="pt-32 pb-20 px-6 md:px-8">
          <div className="max-w-2xl mx-auto">
            <SectionLabel text="Now" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
              What I'm doing <span className="text-accent">now</span>
              <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
            </h1>

            {nowData?.last_updated && (
              <p className="text-sm text-muted-foreground mb-12">
                Last updated {format(parseISO(nowData.last_updated), "MMMM d, yyyy")}
              </p>
            )}

            {nowData ? (
              <div>
                <NowItem label="Next gig" content={nowData.next_gig} />
                <NowItem label="Working on" content={nowData.working_on} />
                <NowItem label="Currently reading" content={nowData.currently_reading} />
                <NowItem label="Latest podcast guest" content={nowData.latest_podcast_guest} />
                <NowItem label="Thinking about" content={nowData.thinking_about} />
              </div>
            ) : (
              <p className="text-muted-foreground">Loading...</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Now;
