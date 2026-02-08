import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  canonicalUrl?: string;
  publishedAt?: string;
  modifiedAt?: string;
}

const SEOHead = ({
  title = siteConfig.name,
  description = siteConfig.description,
  keywords = [],
  ogImage,
  ogImageAlt,
  ogType = "website",
  canonicalUrl,
  publishedAt,
  modifiedAt,
}: SEOHeadProps) => {
  const fullTitle = title.includes("Ferry") ? title : `${title} | ${siteConfig.name}`;
  const fullCanonicalUrl = canonicalUrl 
    ? canonicalUrl.startsWith("http") 
      ? canonicalUrl 
      : `${siteConfig.url}${canonicalUrl}`
    : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta name="author" content={siteConfig.author} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
        </>
      )}
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}

      {/* Article-specific meta (for blog posts) */}
      {ogType === "article" && (
        <>
          <meta property="article:author" content={siteConfig.author} />
          {publishedAt && <meta property="article:published_time" content={publishedAt} />}
          {modifiedAt && <meta property="article:modified_time" content={modifiedAt} />}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {ogImageAlt && <meta name="twitter:image:alt" content={ogImageAlt} />}

      {/* Canonical */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
    </Helmet>
  );
};

export default SEOHead;
