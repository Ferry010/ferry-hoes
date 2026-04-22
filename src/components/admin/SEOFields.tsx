import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Search,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ChevronDown,
  Plus,
  X,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  titleStatus,
  descriptionStatus,
  suggestKeywords,
  smartTruncate,
  autoExcerpt,
  wordCount,
  readingMinutes,
  stripHtml,
  type SeoStatus,
} from "@/lib/seoSuggest";

interface SEOFieldsProps {
  // Source values for fallbacks/suggestions
  postTitle: string;
  postExcerpt: string;
  postContent: string;
  headerImageUrl?: string;

  // Editable SEO fields
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  seoOgImageUrl?: string;
  slug: string;

  onSeoTitleChange: (value: string) => void;
  onSeoDescriptionChange: (value: string) => void;
  onSeoKeywordsChange: (value: string) => void;
  onSeoOgImageChange: (value: string | undefined) => void;
}

const STATUS_COLOR: Record<SeoStatus, string> = {
  empty: "text-muted-foreground",
  short: "text-amber-600",
  good: "text-green-600",
  long: "text-destructive",
};

const SEOFields = ({
  postTitle,
  postExcerpt,
  postContent,
  headerImageUrl,
  seoTitle,
  seoDescription,
  seoKeywords,
  seoOgImageUrl,
  slug,
  onSeoTitleChange,
  onSeoDescriptionChange,
  onSeoKeywordsChange,
  onSeoOgImageChange,
}: SEOFieldsProps) => {
  const [open, setOpen] = useState(true);

  const titleLen = seoTitle.length;
  const descLen = seoDescription.length;
  const tStatus = titleStatus(titleLen);
  const dStatus = descriptionStatus(descLen);

  const suggested = useMemo(
    () => suggestKeywords(postTitle, postContent, 10),
    [postTitle, postContent]
  );

  const currentKeywords = seoKeywords
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  const addKeyword = (k: string) => {
    if (currentKeywords.includes(k)) return;
    onSeoKeywordsChange([...currentKeywords, k].join(", "));
  };

  const removeKeyword = (k: string) => {
    onSeoKeywordsChange(currentKeywords.filter((x) => x !== k).join(", "));
  };

  const previewTitle = seoTitle || postTitle || "Your page title";
  const previewDescription =
    seoDescription ||
    postExcerpt ||
    autoExcerpt(postContent, 160) ||
    "Your meta description will appear here.";
  const previewImage = seoOgImageUrl || headerImageUrl;

  const words = wordCount(stripHtml(postContent));
  const minutes = readingMinutes(stripHtml(postContent));

  return (
    <div className="border border-border rounded-lg bg-card">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="flex items-center gap-3 w-full px-6 py-4 text-left">
          <Search className="w-5 h-5 text-accent" />
          <h3 className="flex-1 font-display font-semibold text-lg text-foreground">
            SEO &amp; Sharing
          </h3>
          <span className="text-xs text-muted-foreground font-mono">
            {words} words · {minutes} min read
          </span>
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="px-6 pb-6 space-y-6">
          {/* Google preview */}
          <div className="rounded-lg border border-border bg-background p-4 space-y-1">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-2">
              Google Search Preview
            </p>
            <p className="text-[#1a0dab] text-lg leading-snug font-medium truncate">
              {previewTitle}
            </p>
            <p className="text-[#006621] text-sm">
              ferryhoes.com/blog/{slug || "your-slug"}
            </p>
            <p className="text-sm text-[#545454] line-clamp-2">
              {previewDescription}
            </p>
          </div>

          {/* Social card preview */}
          {previewImage && (
            <div className="rounded-lg overflow-hidden border border-border bg-background">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium px-4 pt-3">
                Social card preview
              </p>
              <div className="p-4">
                <div className="rounded-md overflow-hidden border border-border">
                  <img
                    src={previewImage}
                    alt=""
                    className="w-full aspect-[1200/630] object-cover bg-muted"
                  />
                  <div className="p-3 bg-muted/30">
                    <p className="text-xs text-muted-foreground uppercase">
                      ferryhoes.com
                    </p>
                    <p className="text-sm font-semibold text-foreground line-clamp-1">
                      {previewTitle}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                      {previewDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEO Title */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="seo-title">SEO Title</Label>
              <div className="flex items-center gap-2">
                {!seoTitle && postTitle && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs"
                    onClick={() => onSeoTitleChange(smartTruncate(postTitle, 60))}
                  >
                    <Sparkles className="w-3 h-3 mr-1" /> Use post title
                  </Button>
                )}
                <span className={`flex items-center gap-1 text-xs font-mono ${STATUS_COLOR[tStatus]}`}>
                  {tStatus === "good" ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : tStatus === "long" ? (
                    <AlertCircle className="w-3 h-3" />
                  ) : null}
                  {titleLen}/60
                </span>
              </div>
            </div>
            <Input
              id="seo-title"
              value={seoTitle}
              onChange={(e) => onSeoTitleChange(e.target.value)}
              placeholder={postTitle || "Page title for search results"}
              maxLength={70}
            />
          </div>

          {/* Meta Description */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="seo-description">Meta Description</Label>
              <div className="flex items-center gap-2">
                {!seoDescription && (postExcerpt || postContent) && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs"
                    onClick={() =>
                      onSeoDescriptionChange(
                        postExcerpt || autoExcerpt(postContent, 160)
                      )
                    }
                  >
                    <Sparkles className="w-3 h-3 mr-1" /> Auto-fill
                  </Button>
                )}
                <span className={`flex items-center gap-1 text-xs font-mono ${STATUS_COLOR[dStatus]}`}>
                  {dStatus === "good" ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : dStatus === "long" ? (
                    <AlertCircle className="w-3 h-3" />
                  ) : null}
                  {descLen}/160
                </span>
              </div>
            </div>
            <Textarea
              id="seo-description"
              value={seoDescription}
              onChange={(e) => onSeoDescriptionChange(e.target.value)}
              placeholder={
                postExcerpt ||
                autoExcerpt(postContent, 160) ||
                "Brief description for search results"
              }
              rows={3}
              maxLength={170}
            />
          </div>

          {/* Keywords with suggestions */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="seo-keywords">Keywords</Label>
              <span className="text-xs text-muted-foreground">
                {currentKeywords.length} added
              </span>
            </div>
            <Input
              id="seo-keywords"
              value={seoKeywords}
              onChange={(e) => onSeoKeywordsChange(e.target.value)}
              placeholder="brand humanizing, AI, leadership"
            />

            {currentKeywords.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentKeywords.map((k) => (
                  <Badge key={k} variant="secondary" className="text-xs gap-1 pr-1">
                    {k}
                    <button
                      type="button"
                      onClick={() => removeKeyword(k)}
                      className="hover:text-destructive"
                      aria-label={`Remove ${k}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}

            {suggested.length > 0 && (
              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Suggestions from your post —
                  click to add
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {suggested
                    .filter((s) => !currentKeywords.includes(s))
                    .slice(0, 8)
                    .map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => addKeyword(s)}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-border text-xs text-foreground hover:bg-accent/10 hover:border-accent/40 transition-colors"
                      >
                        <Plus className="w-3 h-3" /> {s}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* OG Image */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Social share image (1200×630)</Label>
              {!seoOgImageUrl && headerImageUrl && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs"
                  onClick={() => onSeoOgImageChange(headerImageUrl)}
                >
                  <Sparkles className="w-3 h-3 mr-1" /> Use header image
                </Button>
              )}
            </div>
            <ImageUpload value={seoOgImageUrl} onChange={onSeoOgImageChange} />
            <p className="text-xs text-muted-foreground">
              Shown when someone shares this post on LinkedIn, X, or in
              Slack/iMessage. Falls back to the header image if empty.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default SEOFields;
