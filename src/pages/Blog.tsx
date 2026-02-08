import { Link } from "react-router-dom";
import { ArrowLeft, Pen } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import BlogCard from "@/components/blog/BlogCard";
import SEOHead from "@/components/blog/SEOHead";

const Blog = () => {
  const { data: posts, isLoading } = useBlogPosts();

  return (
    <>
<SEOHead
        title="Blog | Ferry Hoes"
        description="Essays, insights, and perspectives on technology, humanity, and everything in between."
        ogType="website"
        canonicalUrl="/blog"
      />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border">
          <div className="container px-6 md:px-8 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>

              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                <Pen className="w-4 h-4" />
                The Blog
              </span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Ideas worth <span className="text-accent">sharing</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Essays, insights, and perspectives on technology, humanity, and
                everything in between.
              </p>
            </div>
          </div>
        </header>

        {/* Posts grid */}
        <section className="container px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-card rounded-2xl overflow-hidden animate-pulse"
                  >
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Pen className="w-10 h-10 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  No posts yet
                </h2>
                <p className="text-muted-foreground">
                  Check back soon for new content!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
