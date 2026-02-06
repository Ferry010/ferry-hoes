import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Search, CheckCircle, AlertCircle } from "lucide-react";

interface SEOFieldsProps {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  slug: string;
  onSeoTitleChange: (value: string) => void;
  onSeoDescriptionChange: (value: string) => void;
  onSeoKeywordsChange: (value: string) => void;
}

const SEOFields = ({
  seoTitle,
  seoDescription,
  seoKeywords,
  slug,
  onSeoTitleChange,
  onSeoDescriptionChange,
  onSeoKeywordsChange,
}: SEOFieldsProps) => {
  const titleLength = seoTitle.length;
  const descriptionLength = seoDescription.length;
  const isTitleOk = titleLength > 0 && titleLength <= 60;
  const isDescriptionOk = descriptionLength > 0 && descriptionLength <= 160;

  return (
    <div className="space-y-6 border border-border rounded-lg p-6 bg-card">
      <div className="flex items-center gap-2 mb-4">
        <Search className="w-5 h-5 text-accent" />
        <h3 className="font-display font-semibold text-lg text-foreground">
          SEO Settings
        </h3>
      </div>

      {/* SEO Title */}
      <div className="space-y-2">
        <Label htmlFor="seo-title">SEO Title</Label>
        <Input
          id="seo-title"
          value={seoTitle}
          onChange={(e) => onSeoTitleChange(e.target.value)}
          placeholder="Page title for search results"
          maxLength={70}
        />
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            Appears in search engine results
          </span>
          <span
            className={`flex items-center gap-1 ${
              isTitleOk ? "text-green-600" : titleLength > 60 ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            {isTitleOk ? (
              <CheckCircle className="w-3 h-3" />
            ) : titleLength > 60 ? (
              <AlertCircle className="w-3 h-3" />
            ) : null}
            {titleLength}/60
          </span>
        </div>
      </div>

      {/* Meta Description */}
      <div className="space-y-2">
        <Label htmlFor="seo-description">Meta Description</Label>
        <Textarea
          id="seo-description"
          value={seoDescription}
          onChange={(e) => onSeoDescriptionChange(e.target.value)}
          placeholder="Brief description for search results"
          rows={3}
          maxLength={170}
        />
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            Shown under title in search results
          </span>
          <span
            className={`flex items-center gap-1 ${
              isDescriptionOk ? "text-green-600" : descriptionLength > 160 ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            {isDescriptionOk ? (
              <CheckCircle className="w-3 h-3" />
            ) : descriptionLength > 160 ? (
              <AlertCircle className="w-3 h-3" />
            ) : null}
            {descriptionLength}/160
          </span>
        </div>
      </div>

      {/* Keywords */}
      <div className="space-y-2">
        <Label htmlFor="seo-keywords">Keywords</Label>
        <Input
          id="seo-keywords"
          value={seoKeywords}
          onChange={(e) => onSeoKeywordsChange(e.target.value)}
          placeholder="keyword1, keyword2, keyword3"
        />
        <p className="text-xs text-muted-foreground">
          Comma-separated list of relevant keywords
        </p>
      </div>

      {/* Preview */}
      <div className="mt-6 p-4 bg-background rounded-lg border border-border">
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide font-medium">
          Search Preview
        </p>
        <div className="space-y-1">
          <p className="text-primary text-lg font-medium truncate">
            {seoTitle || "Your page title"}
          </p>
          <p className="text-accent text-sm truncate">
            yoursite.com/blog/{slug || "your-post-slug"}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {seoDescription || "Your meta description will appear here..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SEOFields;
