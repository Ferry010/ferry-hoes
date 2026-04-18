import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { breadcrumbSchema } from "@/components/StructuredData";
import { Eyebrow } from "@/components/HeadingDot";
import { useBlogPosts, getReadTime, formatPostDate } from "@/hooks/useBlogPosts";

const CATEGORIES = ["All", "Brand Humanizing", "AI", "Leadership", "Future of Work"] as const;

const Writing = () => {
  const { data: posts, isLoading } = useBlogPosts();
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (!posts) return [];
    if (active === "All") return posts;
    return posts.filter(
      (p) =>
        p.seo_keywords?.some((k) => k.toLowerCase() === active.toLowerCase()) ?? false
    );
  }, [posts, active]);

  return (
    <>
      <SEOHead
        title="Writing — Essays | Ferry Hoes"
        description="Short essays on humans, technology, and the work in between. Essays on Brand Humanizing, AI, leadership, and the future of work."
        canonicalUrl="/writing"
      />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "https://ferryhoes.com" },
          { name: "Writing", url: "https://ferryhoes.com/writing" },
        ])}
      />

      <SiteHeader />

      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="pt-36 md:pt-44 pb-12">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-[720px]">
              <Eyebrow>Writing</Eyebrow>
              <h1
                className="font-display headline-muted text-balance"
                style={{ fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 500, lineHeight: 1.04 }}
              >
                Short essays on humans, technology, and the work in <strong>between.</strong>
              </h1>
              <p className="mt-8 text-[19px] md:text-[21px] text-foreground/80 leading-[1.6]">
                A small library, not a content firehose. Quality over volume. Updated when there's
                something worth saying.
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="pb-10 border-b border-border">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`text-[13px] uppercase tracking-[0.12em] px-4 py-2 border transition-colors ${
                    active === c
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-foreground/70 hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 md:py-20">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            {isLoading ? null : filtered.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
                {filtered.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-terracotta font-medium mb-3">
                      • {post.seo_keywords?.[0] ?? "Essay"}
                    </p>
                    <h3
                      className="font-display text-[24px] md:text-[28px] text-foreground leading-[1.2] group-hover:text-accent transition-colors line-clamp-2"
                      style={{ fontWeight: 500 }}
                    >
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-3 text-[15px] text-foreground/70 leading-[1.6] line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <p className="mt-5 text-[13px] text-foreground/55">
                      {formatPostDate(post.published_at)} · {getReadTime(post.content)} ·{" "}
                      <span className="link-draw text-foreground/80">Read essay →</span>
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-[18px] text-foreground/60 italic font-display">
                The first essays are being written. Check back soon.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Writing;
