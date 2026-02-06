import { Link } from "react-router-dom";
import { formatPostDate, getReadTime } from "@/hooks/useBlogPosts";
import type { BlogPost } from "@/hooks/useBlogPosts";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-accent/20">
        {/* Header Image */}
        {post.header_image_url ? (
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={post.header_image_url}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="aspect-[16/10] bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
            <span className="text-4xl">✏️</span>
          </div>
        )}

        <div className="p-6 md:p-8">
          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors leading-tight font-semibold line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
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
