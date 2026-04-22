import { stripHtml } from "./seoSuggest";

export type CheckStatus = "good" | "warn" | "bad" | "neutral";

export interface SeoCheck {
  id: string;
  label: string;
  status: CheckStatus;
  hint?: string;
}

export interface SeoAnalysis {
  score: number; // 0-100
  checks: SeoCheck[];
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

const includesPhrase = (haystack: string, phrase: string) =>
  norm(haystack).includes(norm(phrase));

const extractHeadings = (html: string): string[] => {
  if (!html) return [];
  const matches = html.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi) || [];
  return matches.map((m) => stripHtml(m));
};

const firstParagraph = (html: string): string => {
  if (!html) return "";
  const m = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  return m ? stripHtml(m[1]) : stripHtml(html).slice(0, 300);
};

const countOccurrences = (text: string, phrase: string) => {
  const n = norm(text);
  const p = norm(phrase);
  if (!p) return 0;
  let count = 0;
  let i = 0;
  while ((i = n.indexOf(p, i)) !== -1) {
    count++;
    i += p.length;
  }
  return count;
};

interface AnalyzeArgs {
  keyphrase: string;
  title: string;
  slug: string;
  metaDescription: string;
  contentHtml: string;
  hasImage: boolean;
}

export function analyzeFocusKeyphrase({
  keyphrase,
  title,
  slug,
  metaDescription,
  contentHtml,
  hasImage,
}: AnalyzeArgs): SeoAnalysis {
  const checks: SeoCheck[] = [];

  const kp = keyphrase.trim();
  const plain = stripHtml(contentHtml);
  const intro = firstParagraph(contentHtml);
  const headings = extractHeadings(contentHtml);
  const wordCount = plain ? plain.split(/\s+/).filter(Boolean).length : 0;

  if (!kp) {
    return {
      score: 0,
      checks: [
        {
          id: "set-keyphrase",
          label: "Set a focus keyphrase to start the SEO analysis.",
          status: "neutral",
        },
      ],
    };
  }

  // 1. In SEO title
  checks.push({
    id: "in-title",
    label: "Focus keyphrase appears in the SEO title",
    status: includesPhrase(title, kp) ? "good" : "bad",
    hint: "Add the phrase to the SEO title — ideally near the start.",
  });

  // 2. In meta description
  checks.push({
    id: "in-meta",
    label: "Focus keyphrase appears in the meta description",
    status: includesPhrase(metaDescription, kp) ? "good" : "warn",
    hint: "Mention the phrase once in the meta description.",
  });

  // 3. In slug
  checks.push({
    id: "in-slug",
    label: "Focus keyphrase appears in the URL slug",
    status: includesPhrase(slug.replace(/-/g, " "), kp) ? "good" : "warn",
    hint: "Include the phrase (or a close form) in the slug.",
  });

  // 4. In intro
  checks.push({
    id: "in-intro",
    label: "Focus keyphrase appears in the first paragraph",
    status: includesPhrase(intro, kp) ? "good" : "warn",
    hint: "Mention the phrase naturally in the opening paragraph.",
  });

  // 5. In any H2/H3
  const inHeading = headings.some((h) => includesPhrase(h, kp));
  checks.push({
    id: "in-heading",
    label: "Focus keyphrase appears in at least one subheading",
    status: headings.length === 0 ? "warn" : inHeading ? "good" : "warn",
    hint:
      headings.length === 0
        ? "Add H2 or H3 subheadings to structure the post."
        : "Use the phrase in one H2 or H3.",
  });

  // 6. Density
  const occurrences = countOccurrences(plain, kp);
  const phraseWords = kp.split(/\s+/).length;
  const density = wordCount > 0 ? (occurrences * phraseWords * 100) / wordCount : 0;
  let densityStatus: CheckStatus = "neutral";
  let densityHint = "Aim for 0.5%–2.5% density.";
  if (wordCount < 100) {
    densityStatus = "warn";
    densityHint = "Post is short — write more body copy before judging density.";
  } else if (density === 0) {
    densityStatus = "bad";
  } else if (density < 0.5) {
    densityStatus = "warn";
    densityHint = "Density is low — use the phrase a few more times.";
  } else if (density > 2.5) {
    densityStatus = "warn";
    densityHint = "Density is high — risk of keyword stuffing.";
  } else {
    densityStatus = "good";
  }
  checks.push({
    id: "density",
    label: `Keyphrase density: ${density.toFixed(1)}% (${occurrences}×)`,
    status: densityStatus,
    hint: densityHint,
  });

  // 7. Title length
  const tLen = title.length;
  checks.push({
    id: "title-len",
    label: `SEO title length: ${tLen} chars`,
    status: tLen === 0 ? "bad" : tLen < 30 ? "warn" : tLen <= 60 ? "good" : "warn",
    hint: "Aim for 50–60 characters.",
  });

  // 8. Meta description length
  const dLen = metaDescription.length;
  checks.push({
    id: "desc-len",
    label: `Meta description length: ${dLen} chars`,
    status: dLen === 0 ? "bad" : dLen < 120 ? "warn" : dLen <= 160 ? "good" : "warn",
    hint: "Aim for 140–160 characters.",
  });

  // 9. Slug length
  const slugLen = slug.length;
  checks.push({
    id: "slug-len",
    label: `Slug length: ${slugLen} chars`,
    status: slugLen === 0 ? "bad" : slugLen <= 60 ? "good" : "warn",
    hint: "Keep the slug under 60 characters.",
  });

  // 10. Header image
  checks.push({
    id: "image",
    label: "Post has a header image",
    status: hasImage ? "good" : "warn",
    hint: "Add a header image — used for social cards and search visuals.",
  });

  // 11. Content length
  checks.push({
    id: "length",
    label: `Content length: ${wordCount} words`,
    status: wordCount === 0 ? "bad" : wordCount < 300 ? "warn" : "good",
    hint: "Aim for at least 300 words for indexable depth.",
  });

  const goods = checks.filter((c) => c.status === "good").length;
  const warns = checks.filter((c) => c.status === "warn").length;
  const total = checks.length;
  const score = Math.round(((goods + warns * 0.5) / total) * 100);

  return { score, checks };
}

export interface Readability {
  score: number; // 0-100
  label: "easy" | "ok" | "hard";
  hints: string[];
}

export function readabilityScore(plainText: string): Readability {
  const text = plainText.trim();
  if (!text) return { score: 0, label: "ok", hints: ["No content yet."] };

  const sentences = text.split(/[.!?]+\s/).filter((s) => s.trim().length > 0);
  const words = text.split(/\s+/).filter(Boolean);
  const syllables = words.reduce((sum, w) => sum + estimateSyllables(w), 0);

  const avgSentenceLen = words.length / Math.max(1, sentences.length);
  const avgSyllables = syllables / Math.max(1, words.length);

  // Flesch Reading Ease
  const flesch = 206.835 - 1.015 * avgSentenceLen - 84.6 * avgSyllables;
  const score = Math.max(0, Math.min(100, Math.round(flesch)));

  const hints: string[] = [];
  if (avgSentenceLen > 22) hints.push("Sentences are long — break some up.");
  const longSentences = sentences.filter((s) => s.split(/\s+/).length > 25).length;
  if (longSentences > 0) hints.push(`${longSentences} sentence(s) exceed 25 words.`);
  if (avgSyllables > 1.7) hints.push("Word choice is dense — try simpler words.");

  const label: Readability["label"] = score >= 70 ? "easy" : score >= 50 ? "ok" : "hard";
  if (hints.length === 0) hints.push("Reads cleanly.");

  return { score, label, hints };
}

function estimateSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  if (w.length <= 3) return 1;
  const groups = w
    .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "")
    .replace(/^y/, "")
    .match(/[aeiouy]{1,2}/g);
  return groups ? groups.length : 1;
}
