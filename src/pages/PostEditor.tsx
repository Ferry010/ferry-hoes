import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CATEGORY_PRESETS = ["General", "AI", "Speaking", "Brand", "Leadership", "Personal"];
import {
  useAdminPost,
  useCreatePost,
  useUpdatePost,
  generateSlug,
} from "@/hooks/useAdminPosts";
import ImageUpload from "@/components/admin/ImageUpload";
import RichTextEditor from "@/components/admin/RichTextEditor";
import SEOFields from "@/components/admin/SEOFields";
import FocusKeyphrasePanel from "@/components/admin/FocusKeyphrasePanel";
import BlogJsonImport, { type BlogJsonImportData } from "@/components/admin/BlogJsonImport";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Send, Plus, Trash2 } from "lucide-react";
import { autoExcerpt, smartTruncate, stripHtml } from "@/lib/seoSuggest";

interface SourceRow {
  title: string;
  url: string;
}

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
  const [heroImageUrl, setHeroImageUrl] = useState<string | undefined>();
  const [category, setCategory] = useState<string>("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");
  const [seoFocusKeyphrase, setSeoFocusKeyphrase] = useState("");
  const [seoOgImageUrl, setSeoOgImageUrl] = useState<string | undefined>();
  const [sources, setSources] = useState<SourceRow[]>([]);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [scheduledAt, setScheduledAt] = useState<string>(""); // datetime-local string

  // Load existing post data
  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setSlug(existingPost.slug);
      setContent(existingPost.content || "");
      setExcerpt(existingPost.excerpt || "");
      setHeaderImageUrl(existingPost.header_image_url || undefined);
      setHeroImageUrl((existingPost as any).hero_image_url || undefined);
      setCategory((existingPost as any).category || "");
      setSeoTitle(existingPost.seo_title || "");
      setSeoDescription(existingPost.seo_description || "");
      setSeoKeywords(existingPost.seo_keywords?.join(", ") || "");
      setSeoFocusKeyphrase((existingPost as any).seo_focus_keyphrase || "");
      setSeoOgImageUrl(existingPost.seo_og_image_url || undefined);
      const raw = (existingPost as any).sources;
      setSources(Array.isArray(raw) ? (raw as SourceRow[]) : []);
      const sched = (existingPost as any).scheduled_at;
      if (sched) {
        // Convert ISO -> local datetime-local format (YYYY-MM-DDTHH:mm)
        const d = new Date(sched);
        const pad = (n: number) => String(n).padStart(2, "0");
        setScheduledAt(
          `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
        );
      } else {
        setScheduledAt("");
      }
      setSlugManuallyEdited(true);
    }
  }, [existingPost]);

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManuallyEdited && title) {
      setSlug(generateSlug(title));
    }
  }, [title, slugManuallyEdited]);

  // Auto-generate excerpt from content (only when both empty so we don't override the user)
  useEffect(() => {
    if (!excerpt && content) {
      const guess = autoExcerpt(content, 160);
      if (guess) setExcerpt(guess);
    }
  }, [content, excerpt]);

  const handleSlugChange = (value: string) => {
    setSlug(generateSlug(value));
    setSlugManuallyEdited(true);
  };

  const applyJsonImport = (data: BlogJsonImportData) => {
    if (typeof data.title === "string") setTitle(data.title);
    if (typeof data.slug === "string" && data.slug.trim()) {
      setSlug(generateSlug(data.slug));
      setSlugManuallyEdited(true);
    }
    if (typeof data.content === "string") setContent(data.content);
    if (typeof data.excerpt === "string") setExcerpt(data.excerpt);
    if (typeof data.header_image_url === "string")
      setHeaderImageUrl(data.header_image_url || undefined);
    if (typeof data.hero_image_url === "string")
      setHeroImageUrl(data.hero_image_url || undefined);
    if (typeof data.category === "string") setCategory(data.category);
    if (typeof data.seo_title === "string") setSeoTitle(data.seo_title);
    if (typeof data.seo_description === "string")
      setSeoDescription(data.seo_description);
    if (typeof data.seo_focus_keyphrase === "string")
      setSeoFocusKeyphrase(data.seo_focus_keyphrase);
    if (data.seo_keywords !== undefined) {
      if (Array.isArray(data.seo_keywords)) {
        setSeoKeywords(data.seo_keywords.filter(Boolean).join(", "));
      } else if (typeof data.seo_keywords === "string") {
        setSeoKeywords(data.seo_keywords);
      }
    }
    if (typeof data.seo_og_image_url === "string")
      setSeoOgImageUrl(data.seo_og_image_url || undefined);
    if (data.sources !== undefined) {
      if (Array.isArray(data.sources)) {
        setSources(
          data.sources
            .filter((s) => s && (s.title || s.url))
            .map((s) => ({ title: s.title || "", url: s.url || "" }))
        );
      } else if (typeof data.sources === "object" && data.sources !== null) {
        setSources(
          Object.entries(data.sources).map(([title, url]) => ({
            title,
            url: String(url),
          }))
        );
      }
    }
  };

  const savePost = async (mode: "draft" | "publish" | "schedule") => {
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

    // Smart SEO fallbacks at save time
    const finalSeoTitle = seoTitle.trim() || smartTruncate(title.trim(), 60);
    const finalSeoDescription =
      seoDescription.trim() ||
      excerpt.trim() ||
      autoExcerpt(content, 160) ||
      undefined;
    const finalOgImage = seoOgImageUrl || headerImageUrl;

    const postData = {
      title: title.trim(),
      slug: slug.trim(),
      content: content.trim() || undefined,
      excerpt: excerpt.trim() || undefined,
      header_image_url: headerImageUrl,
      hero_image_url: heroImageUrl,
      category: category.trim() || undefined,
      seo_title: finalSeoTitle,
      seo_description: finalSeoDescription,
      seo_keywords: seoKeywords
        ? seoKeywords.split(",").map((k) => k.trim()).filter(Boolean)
        : undefined,
      seo_focus_keyphrase: seoFocusKeyphrase.trim() || undefined,
      seo_og_image_url: finalOgImage,
      sources: sources.filter((s) => s.title.trim() || s.url.trim()),
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
          <BlogJsonImport onImport={applyJsonImport} />
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

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category" className="text-base font-medium">
            Category
          </Label>
          <Select
            value={CATEGORY_PRESETS.includes(category) ? category : (category ? "__other__" : "")}
            onValueChange={(v) => {
              if (v === "__other__") {
                // keep current custom value or clear so user can type
                if (CATEGORY_PRESETS.includes(category)) setCategory("");
              } else {
                setCategory(v);
              }
            }}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORY_PRESETS.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
              <SelectItem value="__other__">Other…</SelectItem>
            </SelectContent>
          </Select>
          {!CATEGORY_PRESETS.includes(category) && (
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Custom category (e.g. Culture)"
            />
          )}
          <p className="text-xs text-muted-foreground">
            Shown as an eyebrow above the post title (e.g. "AI · 4 min read"). Optional.
          </p>
        </div>

        {/* Preview & social image */}
        <div className="space-y-2">
          <Label className="text-base font-medium">Preview &amp; social image</Label>
          <ImageUpload value={headerImageUrl} onChange={setHeaderImageUrl} />
          <p className="text-xs text-muted-foreground">
            Used in blog overviews and when shared on LinkedIn/X. Text on the image is fine here.
          </p>
        </div>

        {/* Hero image */}
        <div className="space-y-2">
          <Label className="text-base font-medium">Hero image (clean, no text)</Label>
          <ImageUpload value={heroImageUrl} onChange={setHeroImageUrl} />
          <p className="text-xs text-muted-foreground">
            Sits behind the H1 on the post page. Keep it text-free; an overlay is applied for legibility. Falls back to the preview image if empty.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <Label htmlFor="content" className="text-base font-medium">
            Content
          </Label>
          <RichTextEditor value={content} onChange={setContent} />
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

        {/* Sources */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-medium">Sources</Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={() => setSources([...sources, { title: "", url: "" }])}
            >
              <Plus className="w-3.5 h-3.5" /> Add source
            </Button>
          </div>
          {sources.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Optional. Listed at the bottom of the post.
            </p>
          ) : (
            <div className="space-y-2">
              {sources.map((source, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <Input
                    placeholder="Title (e.g. Harvard Business Review)"
                    value={source.title}
                    onChange={(e) => {
                      const next = [...sources];
                      next[i] = { ...next[i], title: e.target.value };
                      setSources(next);
                    }}
                    className="flex-1"
                  />
                  <Input
                    placeholder="https://…"
                    value={source.url}
                    onChange={(e) => {
                      const next = [...sources];
                      next[i] = { ...next[i], url: e.target.value };
                      setSources(next);
                    }}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="shrink-0 text-muted-foreground hover:text-destructive"
                    onClick={() => setSources(sources.filter((_, j) => j !== i))}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Focus Keyphrase + Yoast-style checks */}
        <FocusKeyphrasePanel
          keyphrase={seoFocusKeyphrase}
          onKeyphraseChange={setSeoFocusKeyphrase}
          title={seoTitle || title}
          slug={slug}
          metaDescription={seoDescription || excerpt}
          contentHtml={content}
          hasImage={!!headerImageUrl}
          currentKeywords={seoKeywords
            .split(",")
            .map((k) => k.trim())
            .filter(Boolean)}
          onAddKeyword={(k) => {
            const list = seoKeywords
              .split(",")
              .map((x) => x.trim())
              .filter(Boolean);
            if (!list.some((x) => x.toLowerCase() === k.toLowerCase())) {
              setSeoKeywords([...list, k].join(", "));
            }
          }}
        />

        {/* SEO Fields */}
        <SEOFields
          postTitle={title}
          postExcerpt={excerpt}
          postContent={content}
          headerImageUrl={headerImageUrl}
          seoTitle={seoTitle}
          seoDescription={seoDescription}
          seoKeywords={seoKeywords}
          seoOgImageUrl={seoOgImageUrl}
          slug={slug}
          onSeoTitleChange={setSeoTitle}
          onSeoDescriptionChange={setSeoDescription}
          onSeoKeywordsChange={setSeoKeywords}
          onSeoOgImageChange={setSeoOgImageUrl}
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
