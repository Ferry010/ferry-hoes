import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useBlogPost, useBlogPosts, formatPostDate, getReadTime } from "@/hooks/useBlogPosts";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { breadcrumbSchema, blogPostingSchema } from "@/components/StructuredData";
import PostCTA from "@/components/blog/PostCTA";

/** Strip HTML tags and return plain text */
const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || "");
  const { data: allPosts } = useBlogPosts();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
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

  // Auto-generate meta description from content if not manually set
  const autoDescription = post.seo_description
    || post.excerpt
    || (post.content ? stripHtml(post.content).slice(0, 155) : undefined);

  // Related posts: up to 3 other posts
  const relatedPosts = allPosts?.filter((p) => p.slug !== post.slug).slice(0, 3) || [];

  // Prev / next navigation (allPosts is ordered by published_at DESC)
  const currentIdx = allPosts?.findIndex((p) => p.slug === post.slug) ?? -1;
  const newerPost =
    currentIdx > 0 && allPosts ? allPosts[currentIdx - 1] : undefined;
  const olderPost =
    allPosts && currentIdx >= 0 && currentIdx < allPosts.length - 1
      ? allPosts[currentIdx + 1]
      : undefined;

  return (
    <>
      <SEOHead
        title={post.seo_title || post.title}
        description={autoDescription}
        keywords={post.seo_keywords || undefined}
        ogImage={post.seo_og_image_url || post.header_image_url || undefined}
        ogImageAlt={post.title}
        ogType="article"
        canonicalUrl={`/blog/${post.slug}`}
        publishedAt={post.published_at || undefined}
        modifiedAt={post.updated_at}
      />
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", url: "https://ferryhoes.com" },
            { name: "Blog", url: "https://ferryhoes.com/blog" },
            { name: post.title, url: `https://ferryhoes.com/blog/${post.slug}` },
          ]),
          blogPostingSchema(post),
        ]}
      />

      <main className="min-h-screen bg-background">
        {/* Hero Image */}
        {post.header_image_url ? (
          <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
            <img
              src={post.header_image_url}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-foreground/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
                  {post.title}
                  <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
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
                <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
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
            {/* Author byline */}
            <AuthorByline
              date={formatPostDate(post.published_at)}
              readTime={getReadTime(post.content)}
            />

            <div className="w-24 h-1 bg-accent rounded-full mb-12" />
            <div
              className="prose prose-lg max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-display prose-a:text-accent prose-strong:text-foreground prose-blockquote:border-l-accent prose-blockquote:bg-accent/5 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic mb-16"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />

            {/* Sources */}
            {Array.isArray((post as any).sources) && (post as any).sources.length > 0 && (
              <div className="mb-16 pt-8 border-t border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">Sources</h3>
                <ol className="space-y-2 list-decimal list-inside text-sm text-muted-foreground">
                  {((post as any).sources as { title: string; url: string }[]).map((s, i) => (
                    <li key={i}>
                      {s.url ? (
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener nofollow"
                          className="text-accent hover:underline"
                        >
                          {s.title || s.url}
                        </a>
                      ) : (
                        <span>{s.title}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <PostCTA />

            <AuthorBioCard />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-8 border-t border-border">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">You might also like</h3>
                <div className="grid gap-4">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      to={`/blog/${rp.slug}`}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-accent/30 hover:bg-accent/[0.03] transition-colors group"
                    >
                      {rp.header_image_url && (
                        <img src={rp.header_image_url} alt={rp.title} loading="lazy" width={80} height={56} className="w-20 h-14 object-cover rounded-lg shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors line-clamp-1">{rp.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{formatPostDate(rp.published_at)} · {getReadTime(rp.content)}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent shrink-0" />
                    </Link>
                  ))}
                </div>

                <div className="mt-6">
                  <Link to="/speaking" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
                    See Ferry's keynote topics <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}

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
