/**
 * Lightweight, deterministic SEO helpers.
 * No external API — runs locally as the user types.
 */

const STOPWORDS = new Set([
  "the","a","an","and","or","but","if","then","of","at","by","for","with","about","against",
  "between","into","through","during","before","after","above","below","to","from","up","down",
  "in","out","on","off","over","under","again","further","is","are","was","were","be","been",
  "being","have","has","had","do","does","did","will","would","could","should","can","may",
  "might","must","shall","this","that","these","those","i","you","he","she","it","we","they",
  "what","which","who","whom","my","your","his","her","its","our","their","as","because",
  "while","than","so","not","no","yes","also","just","very","really","more","most","some",
  "any","all","each","every","other","another","such","only","own","same","too","one","two",
  "three","new","old","get","got","let","like","make","made","much","many","few","still",
  "thing","things","way","ways","time","times","into","onto","upon","there","here","when",
  "where","how","why","whose"
]);

export const stripHtml = (html: string): string =>
  (html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export const wordCount = (text: string): number => {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
};

export const readingMinutes = (text: string): number =>
  Math.max(1, Math.ceil(wordCount(text) / 200));

/** Pull top-N keyword candidates from title + content. */
export function suggestKeywords(
  title: string,
  htmlContent: string,
  limit = 8
): string[] {
  const source = `${title} ${title} ${stripHtml(htmlContent)}`.toLowerCase();
  const tokens = source.match(/[a-zà-ÿ0-9][a-zà-ÿ0-9'\-]{2,}/gi) || [];
  const counts = new Map<string, number>();
  for (const raw of tokens) {
    const t = raw.toLowerCase();
    if (STOPWORDS.has(t)) continue;
    if (/^\d+$/.test(t)) continue;
    counts.set(t, (counts.get(t) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([w]) => w);
}

/** First N chars of plain content, ending on a word boundary. */
export function autoExcerpt(htmlContent: string, max = 160): string {
  const text = stripHtml(htmlContent);
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

/** Smart truncate for SEO title — never break a word, keep <= max. */
export function smartTruncate(text: string, max: number): string {
  if (!text || text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim();
}

export type SeoStatus = "empty" | "short" | "good" | "long";

export function titleStatus(len: number): SeoStatus {
  if (len === 0) return "empty";
  if (len < 30) return "short";
  if (len <= 60) return "good";
  return "long";
}

export function descriptionStatus(len: number): SeoStatus {
  if (len === 0) return "empty";
  if (len < 70) return "short";
  if (len <= 160) return "good";
  return "long";
}
