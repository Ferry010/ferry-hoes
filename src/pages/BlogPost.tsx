import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useBlogPost, formatPostDate, getReadTime } from "@/hooks/useBlogPosts";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { breadcrumbSchema } from "@/components/StructuredData";
import PostCTA from "@/components/blog/PostCTA";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || "");

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        {/* Loading skeleton */}
        <div className="aspect-[21/9] bg-muted animate-pulse" />
        <div className="container px-6 md:px-8 py-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="h-4 bg-muted rounded w-1/4 animate-pulse" />
            <div className="h-12 bg-muted rounded w-3/4 animate-pulse" />
            <div className="space-y-4 pt-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-muted rounded w-full animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
<SEOHead
        title={post.seo_title || post.title}
        description={post.seo_description || post.excerpt || undefined}
        keywords={post.seo_keywords || undefined}
        ogImage={post.seo_og_image_url || post.header_image_url || undefined}
        ogImageAlt={post.title}
        ogType="article"
        canonicalUrl={`/blog/${post.slug}`}
        publishedAt={post.published_at || undefined}
        modifiedAt={post.updated_at}
      />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "https://ferryhoes.com" },
          { name: "Blog", url: "https://ferryhoes.com/blog" },
          { name: post.title, url: `https://ferryhoes.com/blog/${post.slug}` },
        ])}
      />

        {/* Hero Image */}
        {post.header_image_url ? (
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src={post.header_image_url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            {/* Brand overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 pointer-events-none" />
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            {/* Title over hero */}
            <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-8 pb-12">
              <div className="container max-w-3xl mx-auto">
                <div className="flex items-center gap-3 text-sm text-white/80 mb-4 drop-shadow-md">
                  <span>{formatPostDate(post.published_at)}</span>
                  <span>·</span>
                  <span>{getReadTime(post.content)}</span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-0 leading-tight drop-shadow-lg">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative h-32 md:h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-end px-6 md:px-8 pb-8">
            <div className="container max-w-3xl mx-auto">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        )}

        {/* Content */}
        <article className="container px-6 md:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Divider */}
            <div className="w-24 h-1 bg-accent rounded-full mb-12" />

            {/* Content */}
            <div className="prose prose-lg max-w-none text-foreground/90 mb-16">
              {/* Simple markdown-like rendering */}
              {post.content?.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <PostCTA />

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to all articles
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPost;
