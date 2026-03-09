import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  useAdminPost,
  useCreatePost,
  useUpdatePost,
  generateSlug,
} from "@/hooks/useAdminPosts";
import ImageUpload from "@/components/admin/ImageUpload";
import SEOFields from "@/components/admin/SEOFields";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Send } from "lucide-react";

const PostEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = id && id !== "new";
  const navigate = useNavigate();

  const { data: existingPost, isLoading: isLoadingPost } = useAdminPost(
    isEditing ? id : ""
  );
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [headerImageUrl, setHeaderImageUrl] = useState<string | undefined>();
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  // Load existing post data
  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setSlug(existingPost.slug);
      setContent(existingPost.content || "");
      setExcerpt(existingPost.excerpt || "");
      setHeaderImageUrl(existingPost.header_image_url || undefined);
      setSeoTitle(existingPost.seo_title || "");
      setSeoDescription(existingPost.seo_description || "");
      setSeoKeywords(existingPost.seo_keywords?.join(", ") || "");
      setSlugManuallyEdited(true);
    }
  }, [existingPost]);

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManuallyEdited && title) {
      setSlug(generateSlug(title));
    }
  }, [title, slugManuallyEdited]);

  // Auto-generate excerpt from content
  useEffect(() => {
    if (!excerpt && content) {
      const firstParagraph = content.split("\n\n")[0];
      if (firstParagraph && firstParagraph.length > 10) {
        setExcerpt(firstParagraph.slice(0, 160));
      }
    }
  }, [content, excerpt]);

  const handleSlugChange = (value: string) => {
    setSlug(generateSlug(value));
    setSlugManuallyEdited(true);
  };

  const savePost = async (publish: boolean) => {
    if (!title.trim()) {
      toast({
        title: "Title required",
        description: "Please enter a title for your post.",
        variant: "destructive",
      });
      return;
    }

    if (!slug.trim()) {
      toast({
        title: "Slug required",
        description: "Please enter a URL slug for your post.",
        variant: "destructive",
      });
      return;
    }

    const postData = {
      title: title.trim(),
      slug: slug.trim(),
      content: content.trim() || undefined,
      excerpt: excerpt.trim() || undefined,
      header_image_url: headerImageUrl,
      seo_title: seoTitle.trim() || title.trim(),
      seo_description: seoDescription.trim() || excerpt.trim() || undefined,
      seo_keywords: seoKeywords
        ? seoKeywords.split(",").map((k) => k.trim()).filter(Boolean)
        : undefined,
      published: publish,
    };

    try {
      if (isEditing) {
        await updatePost.mutateAsync({ id, ...postData });
        toast({
          title: publish ? "Post published!" : "Post saved",
          description: publish
            ? "Your post is now live."
            : "Your changes have been saved.",
        });
      } else {
        const newPost = await createPost.mutateAsync(postData);
        toast({
          title: publish ? "Post published!" : "Draft saved",
          description: publish
            ? "Your post is now live."
            : "Your draft has been saved.",
        });
        navigate(`/admin/posts/${newPost.id}`, { replace: true });
      }
    } catch (error: any) {
      toast({
        title: "Error saving post",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isEditing && isLoadingPost) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-1/4" />
          <div className="h-12 bg-muted rounded" />
          <div className="h-64 bg-muted rounded" />
        </div>
      </div>
    );
  }

  const isSaving = createPost.isPending || updatePost.isPending;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/dashboard"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-display text-2xl font-bold text-foreground">
            {isEditing ? "Edit Post" : "New Post"}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => savePost(false)}
            disabled={isSaving}
          >
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button
            onClick={() => savePost(true)}
            disabled={isSaving}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Send className="w-4 h-4 mr-2" />
            Publish
          </Button>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-8">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-base font-medium">
            Title
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your amazing post title"
            className="text-lg"
          />
        </div>

        {/* Slug */}
        <div className="space-y-2">
          <Label htmlFor="slug" className="text-base font-medium">
            URL Slug
          </Label>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">/blog/</span>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => handleSlugChange(e.target.value)}
              placeholder="your-post-slug"
            />
          </div>
        </div>

        {/* Header Image */}
        <div className="space-y-2">
          <Label className="text-base font-medium">Header Image</Label>
          <ImageUpload value={headerImageUrl} onChange={setHeaderImageUrl} />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <Label htmlFor="content" className="text-base font-medium">
            Content
          </Label>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground bg-muted/50 rounded-md px-3 py-2 border border-border">
            <span className="font-mono">## Heading</span>
            <span>·</span>
            <span className="font-mono">**bold**</span>
            <span>·</span>
            <span className="font-mono">*italic*</span>
            <span>·</span>
            <span className="font-mono">- list item</span>
            <span>·</span>
            <span className="font-mono">[link](url)</span>
          </div>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post content in Markdown..."
            rows={16}
            className="font-mono text-sm"
          />
        </div>

        {/* Excerpt */}
        <div className="space-y-2">
          <Label htmlFor="excerpt" className="text-base font-medium">
            Excerpt
          </Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="A brief summary that appears in post previews..."
            rows={3}
          />
          <p className="text-xs text-muted-foreground">
            Shown in blog cards and search results. Auto-generated from content if left empty.
          </p>
        </div>

        {/* SEO Fields */}
        <SEOFields
          seoTitle={seoTitle || title}
          seoDescription={seoDescription || excerpt}
          seoKeywords={seoKeywords}
          slug={slug}
          onSeoTitleChange={setSeoTitle}
          onSeoDescriptionChange={setSeoDescription}
          onSeoKeywordsChange={setSeoKeywords}
        />

        {/* Bottom actions */}
        <div className="flex items-center justify-end gap-3 pt-8 border-t border-border">
          <Button
            variant="outline"
            onClick={() => savePost(false)}
            disabled={isSaving}
          >
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button
            onClick={() => savePost(true)}
            disabled={isSaving}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Send className="w-4 h-4 mr-2" />
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
