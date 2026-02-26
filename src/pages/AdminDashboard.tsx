import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAdminPosts, useDeletePost, useUpdatePostOrder } from "@/hooks/useAdminPosts";
import { formatPostDate } from "@/hooks/useBlogPosts";
import { Plus, Edit, Trash2, Eye, EyeOff, ChevronUp, ChevronDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { data: posts, isLoading } = useAdminPosts();
  const deletePost = useDeletePost();
  const updateOrder = useUpdatePostOrder();

  const handleMove = async (index: number, direction: "up" | "down") => {
    if (!posts) return;
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= posts.length) return;

    const a = posts[index];
    const b = posts[targetIndex];
    await updateOrder.mutateAsync([
      { id: a.id, sort_order: (b as any).sort_order ?? targetIndex },
      { id: b.id, sort_order: (a as any).sort_order ?? index },
    ]);
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      await deletePost.mutateAsync(id);
      toast({
        title: "Post deleted",
        description: "The post has been permanently deleted.",
      });
    } catch (error) {
      toast({
        title: "Error deleting post",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Posts
          </h1>
          <p className="text-muted-foreground">
            Create and manage your blog posts
          </p>
        </div>

        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/admin/posts/new">
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Link>
        </Button>
      </div>

      {/* Posts list */}
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 animate-pulse border border-border"
            >
              <div className="h-6 bg-muted rounded w-1/2 mb-3" />
              <div className="h-4 bg-muted rounded w-1/4" />
            </div>
          ))}
        </div>
      ) : posts && posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              className="bg-card rounded-lg p-6 border border-border hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="font-display text-lg font-semibold text-foreground truncate">
                      {post.title}
                    </h2>
                    {post.published ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                        <Eye className="w-3 h-3" />
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                        <EyeOff className="w-3 h-3" />
                        Draft
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>
                      Updated {formatPostDate(post.updated_at)}
                    </span>
                    {post.published_at && (
                      <>
                        <span>·</span>
                        <span>
                          Published {formatPostDate(post.published_at)}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleMove(idx, "up")}
                    disabled={idx === 0 || updateOrder.isPending}
                    className={idx === 0 ? "invisible" : ""}
                  >
                    <ChevronUp className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleMove(idx, "down")}
                    disabled={idx === posts.length - 1 || updateOrder.isPending}
                    className={idx === posts.length - 1 ? "invisible" : ""}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/admin/posts/${post.id}`}>
                      <Edit className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(post.id, post.title)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    disabled={deletePost.isPending}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card rounded-lg border border-border">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Plus className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground mb-2">
            No posts yet
          </h2>
          <p className="text-muted-foreground mb-6">
            Create your first blog post to get started.
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/admin/posts/new">
              <Plus className="w-4 h-4 mr-2" />
              Create your first post
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
