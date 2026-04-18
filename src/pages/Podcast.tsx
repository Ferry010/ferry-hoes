import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { podcastSchema, breadcrumbSchema } from "@/components/StructuredData";
import { Eyebrow } from "@/components/HeadingDot";
import RuleLine from "@/components/RuleLine";
import { EXTERNAL_LINKS } from "@/config/site";

const EPISODES = [
  { n: "01", title: "Not a Diversity Checkbox: The Real Work of Inclusive Leadership", guest: "Simone Moissidis", role: "Inclusion strategist", duration: "65 min", date: "2025" },
  { n: "02", title: "The Power of Talking to People You Disagree With", guest: "Ruben Treurniet", role: "Founder, The Common Ground", duration: "73 min", date: "2025" },
  { n: "03", title: "From Local to Global: The New Era of Talent Acquisition", guest: "Marco Boomsma", role: "Talent leader", duration: "71 min", date: "2025" },
];

const SUBSCRIBE = [
  { label: "Spotify", href: EXTERNAL_LINKS.spotify },
  { label: "Apple Podcasts", href: EXTERNAL_LINKS.applePodcasts },
  { label: "YouTube", href: EXTERNAL_LINKS.youtube },
  { label: "RSS", href: "https://anchor.fm/s/6e1bb318/podcast/rss" },
];

const Podcast = () => {
  return (
    <>
      <SEOHead
        title="The Human Era Podcast | Ferry Hoes"
        description="Deep dives with founders, artists, scientists, and anyone doing interesting work at the intersection of humans and technology."
        canonicalUrl="/podcast"
      />
      <StructuredData
        data={[
          podcastSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://ferryhoes.com" },
            { name: "Podcast", url: "https://ferryhoes.com/podcast" },
          ]),
        ]}
      />

      <SiteHeader />

      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="pt-36 md:pt-44 pb-12">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-[720px]">
              <Eyebrow>The Human Era Podcast</Eyebrow>
              <h1
                className="font-display headline-muted text-balance"
                style={{ fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 500, lineHeight: 1.04 }}
              >
                Conversations worth your <strong>commute.</strong>
              </h1>
              <p className="mt-8 text-[19px] md:text-[21px] text-foreground/80 leading-[1.6]">
                Deep dives with founders, artists, scientists, and anyone doing interesting work at
                the intersection of humans and technology. No scripts. No soundbites. Hosted by
                Ferry Hoes.
              </p>
            </div>
          </div>
        </section>

        {/* Subscribe strip */}
        <section className="py-8">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <RuleLine />
            <div className="flex flex-wrap gap-x-8 gap-y-3 my-6 justify-center md:justify-start">
              <p className="text-[12px] uppercase tracking-[0.15em] text-terracotta font-medium self-center">
                • Subscribe
              </p>
              {SUBSCRIBE.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-foreground/80 hover:text-accent link-draw"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
            <RuleLine />
          </div>
        </section>

        {/* Episode list */}
        <section className="py-20 md:py-24">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="mb-10">
              <Eyebrow>Episodes</Eyebrow>
              <h2 className="font-display text-[28px] md:text-[36px] text-foreground" style={{ fontWeight: 500 }}>
                All episodes.
              </h2>
            </div>

            <div className="max-w-5xl">
              <RuleLine />
              {EPISODES.map((ep) => (
                <div key={ep.n}>
                  <a
                    href={EXTERNAL_LINKS.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-7 md:py-8 grid md:grid-cols-12 gap-4 md:gap-6 hover:bg-background-alt/60 transition-colors -mx-4 px-4 group"
                  >
                    <p className="md:col-span-1 font-display italic text-terracotta text-base" style={{ fontWeight: 500 }}>{ep.n}</p>
                    <h3 className="md:col-span-6 font-display text-[20px] md:text-[24px] text-foreground leading-[1.2] group-hover:text-accent transition-colors" style={{ fontWeight: 500 }}>
                      {ep.title}
                    </h3>
                    <p className="md:col-span-3 text-[14px] text-foreground/75 self-center">
                      {ep.guest}
                      <br />
                      <span className="text-foreground/55">{ep.role}</span>
                    </p>
                    <p className="md:col-span-2 text-[13px] text-foreground/55 self-center">
                      {ep.duration} · {ep.date}
                    </p>
                  </a>
                  <RuleLine />
                </div>
              ))}
              <p className="mt-10 text-[16px] text-foreground/60 italic font-display">
                More episodes loading soon.
              </p>
            </div>
          </div>
        </section>

        {/* About the show */}
        <section className="py-20 md:py-24 bg-background-alt border-y border-border">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-[720px]">
              <Eyebrow>About the Show</Eyebrow>
              <h2 className="font-display headline-muted text-balance mb-8" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 500 }}>
                Why the show <strong>exists.</strong>
              </h2>
              <p className="text-[18px] md:text-[19px] text-foreground/85 leading-[1.7]">
                The Human Era Podcast is Ferry's conversation with the people shaping how humans
                and technology work together. Guests include CEOs, professors, artists, and
                entrepreneurs — anyone asking good questions about the balance between efficiency
                and meaning. Episodes run long on purpose. The best ideas don't fit in clips.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-[720px]">
              <h2 className="font-display headline-muted text-balance" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500 }}>
                Know someone who should be on the show.
              </h2>
              <a
                href="mailto:ferry@brandhumanizing.com?subject=Pitch%20a%20guest%20for%20The%20Human%20Era%20Podcast"
                className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-accent transition-colors"
              >
                Pitch a guest →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Podcast;
