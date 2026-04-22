import { useMemo, useState } from "react";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import { Eyebrow, Period } from "@/components/HeadingDot";
import BlogCard from "@/components/blog/BlogCard";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const CATEGORIES = [
  "All",
  "Brand Humanizing",
  "AI",
  "Leadership",
  "Future of Work",
];

const Writing = () => {
  const { data: posts, isLoading } = useBlogPosts();
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (!posts) return [];
    if (active === "All") return posts;
    const needle = active.toLowerCase();
    return posts.filter((p) => {
      const hay = `${p.title} ${p.excerpt ?? ""} ${(p.seo_keywords ?? []).join(
        " "
      )}`.toLowerCase();
      return hay.includes(needle);
    });
  }, [posts, active]);

  return (
    <>
      <SEOHead
        title="Writing: Thoughts | Ferry Hoes"
        description="Short articles on humans, technology, and the work in between. A small library, not a content firehose. Quality over volume."
        canonicalUrl="/writing"
      />

      <main className="bg-background">
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <Eyebrow>Writing</Eyebrow>
            <h1
              className="font-display font-bold text-foreground leading-[0.98] max-w-5xl"
              style={{
                fontSize: "clamp(48px, 8.5vw, 128px)",
                letterSpacing: "-0.025em",
              }}
            >
              Short articles on humans, technology, and the work in{" "}
              <span className="text-primary">between</span>
              <Period />
            </h1>
            <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl leading-[1.55]">
              A small library, not a content firehose. Quality over volume.
              Updated when there's something worth saying.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="pb-10 md:pb-14">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {CATEGORIES.map((cat) => {
                const isActive = cat === active;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-tight transition-all duration-150 ${
                      isActive
                        ? "bg-foreground text-background"
                        : "border border-foreground/30 text-foreground/80 hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-24 md:pb-32">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-muted/40 rounded-2xl aspect-[4/5] animate-pulse"
                  />
                ))}
              </div>
            ) : filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((post, i) => (
                  <BlogCard key={post.id} post={post} colorIndex={i} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-handwritten text-3xl md:text-4xl text-ink-navy">
                  The first articles are being written. Check back soon.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Writing;
