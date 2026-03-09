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

      <main className="min-h-screen bg-background">
      {/* Hero Image */}
        {post.header_image_url ? (
          <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
            <img
              src={post.header_image_url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            {/* Dark scrim for text readability */}
            <div className="absolute inset-0 bg-foreground/50" />
            {/* Title over hero */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-3 text-sm text-white/70">
                  <span>{formatPostDate(post.published_at)}</span>
                  <span className="text-white/40">|</span>
                  <span>{getReadTime(post.content)}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container px-6 md:px-8 pt-10 md:pt-14">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight uppercase">
                {post.title}
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mt-4">
                <span>{formatPostDate(post.published_at)}</span>
                <span>·</span>
                <span>{getReadTime(post.content)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <article className="container px-6 md:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Divider */}
            <div className="w-24 h-1 bg-accent rounded-full mb-12" />

            {/* Content */}
            <div className="prose prose-lg max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-display prose-a:text-accent prose-strong:text-foreground mb-16">
              <ReactMarkdown>{post.content || ""}</ReactMarkdown>
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
