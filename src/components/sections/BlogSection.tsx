import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BlogSection = () => {
  const { data: posts, isLoading } = useBlogPosts(6);
  const revealRef = useScrollReveal();

  return (
    <section className="bg-background-alt py-20 md:py-28 border-y border-border/60">
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

        {/* Editorial grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4 animate-pulse">
                <div className="h-3 bg-muted rounded w-20" />
                <div className="h-7 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : posts && posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
            {posts.slice(0, 6).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-primary">
                  • Thought
                </span>
                <h3 className="mt-3 font-display text-xl md:text-2xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="mt-3 text-foreground/75 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  Read thought
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
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
