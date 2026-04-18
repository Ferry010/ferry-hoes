import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { breadcrumbSchema } from "@/components/StructuredData";
import { Eyebrow, Period } from "@/components/HeadingDot";
import { useBlogPosts, getReadTime, formatPostDate } from "@/hooks/useBlogPosts";
import { ArrowRight } from "lucide-react";

const Writing = () => {
  const { data: posts, isLoading } = useBlogPosts();

  return (
    <>
      <SEOHead
        title="Writing — Essays | Ferry Hoes"
        description="Short essays on humans, technology, and the work in between. Essays on AI, Brand Humanizing, leadership, and the future of work."
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
        <section className="pt-36 md:pt-44 pb-16 md:pb-20">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-4xl">
              <Eyebrow>Writing</Eyebrow>
              <h1
                className="font-display font-bold text-foreground leading-[1.02]"
                style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
              >
                Short essays on humans, technology, and the work in{" "}
                <span className="text-primary">between</span>
                <Period />
              </h1>
              <p className="mt-8 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
                A small library, not a content firehose. Quality over volume.
                Updated when there's something worth saying.
              </p>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="pb-24 md:pb-32 border-t border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14 pt-16 md:pt-20">
            {isLoading ? (
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="animate-pulse space-y-4">
                    <div className="aspect-[16/10] bg-background-alt rounded-xl" />
                    <div className="h-6 bg-background-alt rounded w-3/4" />
                    <div className="h-4 bg-background-alt rounded w-full" />
                  </div>
                ))}
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                {posts.map((post) => (
                  <article key={post.id} className="group">
                    <Link to={`/blog/${post.slug}`} className="block">
                      {post.header_image_url && (
                        <div className="aspect-[16/10] overflow-hidden rounded-xl bg-background-alt mb-5">
                          <img
                            src={post.header_image_url}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                      )}
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3">
                        <span>{formatPostDate(post.published_at)}</span>
                        <span>·</span>
                        <span>{getReadTime(post.content)}</span>
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="mt-3 text-base md:text-lg text-foreground/75 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary">
                        Read essay
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-lg text-foreground/70">
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
