import { useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle, XCircle, Target, Plus } from "lucide-react";
import { analyzeFocusKeyphrase, readabilityScore, type CheckStatus } from "@/lib/seoAnalysis";
import { stripHtml } from "@/lib/seoSuggest";

interface Props {
  keyphrase: string;
  onKeyphraseChange: (value: string) => void;
  title: string;
  slug: string;
  metaDescription: string;
  contentHtml: string;
  hasImage: boolean;
  currentKeywords: string[];
  onAddKeyword: (k: string) => void;
}

const STATUS_ICON: Record<CheckStatus, JSX.Element> = {
  good: <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />,
  warn: <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />,
  bad: <XCircle className="w-4 h-4 text-destructive shrink-0" />,
  neutral: <Target className="w-4 h-4 text-muted-foreground shrink-0" />,
};

const FocusKeyphrasePanel = ({
  keyphrase,
  onKeyphraseChange,
  title,
  slug,
  metaDescription,
  contentHtml,
  hasImage,
  currentKeywords,
  onAddKeyword,
}: Props) => {
  const analysis = useMemo(
    () =>
      analyzeFocusKeyphrase({
        keyphrase,
        title,
        slug,
        metaDescription,
        contentHtml,
        hasImage,
      }),
    [keyphrase, title, slug, metaDescription, contentHtml, hasImage]
  );

  const readability = useMemo(
    () => readabilityScore(stripHtml(contentHtml)),
    [contentHtml]
  );

  const scoreColor =
    analysis.score >= 75
      ? "text-green-600 bg-green-50 border-green-200"
      : analysis.score >= 50
      ? "text-amber-700 bg-amber-50 border-amber-200"
      : "text-destructive bg-destructive/5 border-destructive/20";

  const readColor =
    readability.label === "easy"
      ? "text-green-600 bg-green-50 border-green-200"
      : readability.label === "ok"
      ? "text-amber-700 bg-amber-50 border-amber-200"
      : "text-destructive bg-destructive/5 border-destructive/20";

  const kpInKeywords =
    keyphrase.trim() &&
    currentKeywords.some(
      (k) => k.toLowerCase() === keyphrase.trim().toLowerCase()
    );

  return (
    <div className="space-y-4 p-5 rounded-lg border border-accent/30 bg-accent/[0.04]">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-accent" />
          <h4 className="font-display font-semibold text-foreground">
            Focus Keyphrase
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-mono font-medium ${scoreColor}`}
            title="SEO score"
          >
            SEO {analysis.score}
          </span>
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-mono font-medium ${readColor}`}
            title="Readability"
          >
            Reads {readability.label}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="focus-keyphrase" className="text-sm">
          The single phrase you want this post to rank for
        </Label>
        <Input
          id="focus-keyphrase"
          value={keyphrase}
          onChange={(e) => onKeyphraseChange(e.target.value)}
          placeholder="e.g. brand humanizing"
        />
        {keyphrase.trim() && !kpInKeywords && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={() => onAddKeyword(keyphrase.trim())}
          >
            <Plus className="w-3 h-3 mr-1" /> Add to keywords
          </Button>
        )}
      </div>

      <ul className="space-y-1.5">
        {analysis.checks.map((c) => (
          <li
            key={c.id}
            className="flex items-start gap-2 text-sm leading-snug"
          >
            {STATUS_ICON[c.status]}
            <div className="min-w-0">
              <span className="text-foreground">{c.label}</span>
              {c.status !== "good" && c.hint && (
                <span className="block text-xs text-muted-foreground">
                  {c.hint}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {readability.hints.length > 0 && readability.label !== "easy" && (
        <div className="pt-2 border-t border-border/60">
          <p className="text-xs font-medium text-muted-foreground mb-1">
            Readability tips
          </p>
          <ul className="space-y-1">
            {readability.hints.map((h, i) => (
              <li key={i} className="text-xs text-muted-foreground">
                • {h}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FocusKeyphrasePanel;
