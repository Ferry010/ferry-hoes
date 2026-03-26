import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import BlogCard from "@/components/blog/BlogCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BlogSection = () => {
  const { data: posts, isLoading } = useBlogPosts(2);
  const revealRef = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div ref={revealRef} className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Writing
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                Ideas worth <span className="text-primary">sharing</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg mt-4 md:mt-0 max-w-md">
              Essays, insights, and perspectives on technology, humanity, and
              everything in between.
            </p>
          </div>

          {/* Blog grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              {[1, 2].map((i) => (
                <div key={i} className="bg-card rounded-2xl overflow-hidden animate-pulse">
                  <div className="aspect-[16/10] bg-muted" />
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} colorIndex={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 mb-12">
              <p className="text-muted-foreground text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}

          {/* CTA */}
          {posts && posts.length > 0 && (
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/blog">
                  View all articles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
