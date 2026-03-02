import { Link } from "react-router-dom";
import { formatPostDate, getReadTime } from "@/hooks/useBlogPosts";
import type { BlogPost } from "@/hooks/useBlogPosts";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "homepage";
  colorIndex?: number;
}

const CARD_COLORS = [
  "bg-[#5aa6b2]",
  "bg-[#E86A4A]",
];

const BlogCard = ({ post, variant = "default", colorIndex = 0 }: BlogCardProps) => {
  if (variant === "homepage") {
    return (
      <Link to={`/blog/${post.slug}`}>
        <article className={`group ${CARD_COLORS[colorIndex % CARD_COLORS.length]} rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer p-6 md:p-8 h-full flex flex-col`}>
          <span className="inline-block self-start px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium mb-4">
            Blog
          </span>
          <h3 className="font-display text-xl md:text-2xl text-white font-bold mb-3 leading-tight">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-white/70 text-sm md:text-base mb-auto leading-relaxed line-clamp-1">
              {post.excerpt}
            </p>
          )}
          <div className="flex items-center gap-3 text-xs text-white/60 mt-6 pt-4 border-t border-white/20">
            <span>{formatPostDate(post.published_at)}</span>
            <span>·</span>
            <span>{getReadTime(post.content)}</span>
          </div>
        </article>
      </Link>
    );
  }

  // Default variant (used on /blog page)
  return (
    <Link to={`/blog/${post.slug}`}>
      <article className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-accent/20">
        {post.header_image_url ? (
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={post.header_image_url}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none" />
          </div>
        ) : (
          <div className="aspect-[16/10] bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
            <span className="text-4xl">✏️</span>
          </div>
        )}

        <div className="p-6 md:p-8">
          <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors leading-tight font-semibold line-clamp-2">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          )}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{formatPostDate(post.published_at)}</span>
            <span>{getReadTime(post.content)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
