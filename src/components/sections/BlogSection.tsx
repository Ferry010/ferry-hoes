import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/HeadingDot";
import ActionButton from "@/components/Button";
import { useBlogPosts, getReadTime, formatPostDate } from "@/hooks/useBlogPosts";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BlogSection = () => {
  const ref = useScrollReveal();
  const { data: posts, isLoading } = useBlogPosts(3);

  return (
    <section className="bg-background-alt py-24 md:py-32 border-y border-border">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="scroll-reveal max-w-3xl mb-12 md:mb-16">
          <Eyebrow>Writing</Eyebrow>
          <h2
            className="font-display headline-muted text-balance"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500 }}
          >
            Short essays on humans, technology, and the work in <strong>between.</strong>
          </h2>
        </div>

        {isLoading ? null : posts && posts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <p className="text-[11px] uppercase tracking-[0.15em] text-terracotta font-medium mb-3">
                  • Essay
                </p>
                <h3
                  className="font-display text-[24px] md:text-[26px] text-foreground leading-[1.2] group-hover:text-accent transition-colors"
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

        <div className="mt-14">
          <ActionButton to="/writing" variant="ghost">
            All writing
          </ActionButton>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
