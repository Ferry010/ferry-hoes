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
        {/* Hero */}
        {(() => {
          const heroSrc = (post as any).hero_image_url || post.header_image_url;
          const eyebrow = [
            (post as any).category,
            getReadTime(post.content),
          ]
            .filter(Boolean)
            .join(" · ");

          if (heroSrc) {
            return (
              <header className="relative h-[60vh] md:h-[75vh] min-h-[420px] overflow-hidden">
                <img
                  src={heroSrc}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Bottom-weighted gradient so the top of the image stays clean */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                <div className="relative h-full container px-6 md:px-8 flex items-end pb-12 md:pb-16">
                  <div className="max-w-3xl mx-auto w-full text-center text-white">
                    {eyebrow && (
                      <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/80 font-medium mb-5">
                        {eyebrow}
                      </p>
                    )}
                    <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-tight">
                      {post.title}
                      <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
                    </h1>
                    <p className="mt-6 text-sm text-white/80">
                      <Link
                        to="/my-story"
                        className="underline-offset-4 hover:underline hover:text-white transition-colors"
                      >
                        By Ferry
                      </Link>
                      <span className="mx-2 text-white/50">·</span>
                      <span>{formatPostDate(post.published_at)}</span>
                    </p>
                  </div>
                </div>
              </header>
            );
          }

          return (
            <header className="container px-6 md:px-8 pt-16 md:pt-24 pb-4">
              <div className="max-w-3xl mx-auto text-center">
                {eyebrow && (
                  <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium mb-5">
                    {eyebrow}
                  </p>
                )}
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight uppercase">
                  {post.title}
                  <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
                </h1>
                <p className="mt-6 text-sm text-muted-foreground">
                  <Link
                    to="/my-story"
                    className="underline-offset-4 hover:underline hover:text-foreground transition-colors"
                  >
                    By Ferry
                  </Link>
                  <span className="mx-2 text-muted-foreground/50">·</span>
                  <span>{formatPostDate(post.published_at)}</span>
                </p>
              </div>
            </header>
          );
        })()}

        {/* Content */}
        <article className="container px-6 md:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Meta line */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
              <span>{formatPostDate(post.published_at)}</span>
              <span className="text-muted-foreground/40">·</span>
              <span>{getReadTime(post.content)}</span>
            </div>

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

            {/* Prev / Next navigation */}
            {(newerPost || olderPost) && (
              <nav
                aria-label="More articles"
                className="mt-16 grid gap-4 md:grid-cols-2"
              >
                {olderPost ? (
                  <Link
                    to={`/blog/${olderPost.slug}`}
                    className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-accent/40 hover:bg-accent/[0.03] transition-colors"
                  >
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Previous article
                    </span>
                    <span className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-colors mt-3 line-clamp-2">
                      {olderPost.title}
                    </span>
                  </Link>
                ) : (
                  <span className="hidden md:block" />
                )}

                {newerPost ? (
                  <Link
                    to={`/blog/${newerPost.slug}`}
                    className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-accent/40 hover:bg-accent/[0.03] transition-colors md:text-right"
                  >
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium md:justify-end">
                      Next article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-colors mt-3 line-clamp-2">
                      {newerPost.title}
                    </span>
                  </Link>
                ) : (
                  <span className="hidden md:block" />
                )}
              </nav>
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
