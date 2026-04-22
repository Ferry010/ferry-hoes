import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useBlogPosts, formatPostDate, getReadTime } from "@/hooks/useBlogPosts";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TONES = [
  { bg: "bg-background", title: "text-foreground", body: "text-foreground/75", meta: "text-muted-foreground", eyebrow: "text-primary" },
  { bg: "bg-[#F9DCD0]", title: "text-foreground", body: "text-foreground/80", meta: "text-foreground/60", eyebrow: "text-primary" },
  { bg: "bg-ink-navy", title: "text-background", body: "text-background/80", meta: "text-background/60", eyebrow: "text-primary" },
  { bg: "bg-[#F4E9DC]", title: "text-foreground", body: "text-foreground/80", meta: "text-foreground/60", eyebrow: "text-primary" },
];

const BlogSection = () => {
  const { data: posts, isLoading } = useBlogPosts(5);
  const revealRef = useScrollReveal();

  const featured = posts?.[0];
  const rest = posts?.slice(1, 5) ?? [];

  return (
    <section className="bg-background-alt py-24 md:py-32 border-y border-border/60">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={revealRef} className="scroll-reveal max-w-3xl mb-14 md:mb-16">
          <Eyebrow>Writing</Eyebrow>
          <h2
            className="font-display font-bold text-foreground leading-[1.02]"
            style={{ fontSize: "clamp(36px, 5.4vw, 80px)" }}
          >
            The latest from my <span className="text-primary">desk</span>
            <Period />
          </h2>
          <p className="mt-7 text-lg md:text-xl text-foreground/80 leading-[1.55]">
            Short thoughts on humans, technology, and the work in between. New
            ones when there's something worth saying.
          </p>
        </div>

        {isLoading ? (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-3xl bg-background aspect-[4/3] animate-pulse shadow-soft" />
            ))}
          </div>
        ) : featured ? (
          <>
            {/* Featured hero card */}
            <Link
              to={`/blog/${featured.slug}`}
              className="group block mb-8 md:mb-10 rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 bg-ink-navy"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-muted">
                  {featured.header_image_url ? (
                    <img
                      src={featured.header_image_url}
                      alt={featured.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                      <span className="text-7xl">✏️</span>
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                  <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-primary">
                    • Featured thought
                  </span>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.05] text-background">
                    {featured.title}
                  </h3>
                  {featured.excerpt && (
                    <p className="mt-5 text-base md:text-lg text-background/80 leading-relaxed line-clamp-3">
                      {featured.excerpt}
                    </p>
                  )}
                  <div className="mt-6 flex items-center gap-3 text-sm text-background/60">
                    <span>{formatPostDate(featured.published_at)}</span>
                    <span>·</span>
                    <span>{getReadTime(featured.content)}</span>
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read this thought
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Secondary cards — 2 per row, larger */}
            {rest.length > 0 && (
              <div className="grid md:grid-cols-2 gap-7 md:gap-9 mb-12">
                {rest.map((post, i) => {
                  const tone = TONES[(i + 1) % TONES.length];
                  return (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className={`group ${tone.bg} rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`}
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        {post.header_image_url ? (
                          <img
                            src={post.header_image_url}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/15 flex items-center justify-center">
                            <span className="text-5xl">✏️</span>
                          </div>
                        )}
                      </div>
                      <div className="p-7 md:p-9 flex flex-col flex-1">
                        <span className={`text-[11px] uppercase tracking-[0.16em] font-semibold ${tone.eyebrow}`}>
                          • Thought
                        </span>
                        <h3 className={`mt-3 font-display text-2xl md:text-[28px] font-bold leading-[1.15] ${tone.title} group-hover:text-primary transition-colors`}>
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className={`mt-3 text-base leading-relaxed line-clamp-2 ${tone.body}`}>
                            {post.excerpt}
                          </p>
                        )}
                        <div className={`mt-6 pt-5 border-t border-current/10 flex items-center gap-2 text-xs ${tone.meta}`}>
                          <span>{formatPostDate(post.published_at)}</span>
                          <span>·</span>
                          <span>{getReadTime(post.content)}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <p className="text-muted-foreground text-lg mb-12">
            The first thoughts are being written. Check back soon.
          </p>
        )}

        {posts && posts.length > 0 && (
          <PillButton to="/writing" variant="ghost">
            All writing
          </PillButton>
        )}
      </div>
    </section>
  );
};

export default BlogSection;

