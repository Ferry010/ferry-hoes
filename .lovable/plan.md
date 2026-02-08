
# SEO Enhancement Plan

Comprehensive SEO improvements to prepare the site for a custom domain connection, including canonical tags, semantic HTML, sitemap.xml, and enhanced OpenGraph metadata.

---

## Current State Analysis

| Feature | Status | Notes |
|---------|--------|-------|
| Canonical tags | Partial | SEOHead component supports canonicalUrl but not being passed on most pages |
| Semantic HTML | Partial | BlogPost uses `<article>`, Blog uses `<header>`, but Index/Speaking need improvement |
| Sitemap.xml | Missing | No sitemap exists |
| OpenGraph images | Partial | SEOHead supports og:image but needs og:image:width/height/alt |
| robots.txt | Complete | Already configured |
| index.html meta | Outdated | Still has placeholder Lovable branding |

---

## Implementation Plan

### 1. Create Site Configuration File

Create a central config for the base URL (to be updated when custom domain is connected):

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "Ferry Hoes",
  url: "https://yourdomain.com", // Update when custom domain is connected
  description: "Essays, insights, and perspectives on technology, humanity, and everything in between.",
  author: "Ferry Hoes",
  twitterHandle: "@ferryhoes",
};
```

### 2. Enhance SEOHead Component

Add missing OpenGraph image properties and ensure canonical tags work correctly:

```typescript
// Additional og:image properties
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content={imageAlt} />
<meta property="og:site_name" content="Ferry Hoes" />
<meta property="og:locale" content="en_US" />

// For articles
<meta property="article:author" content="Ferry Hoes" />
<meta property="article:published_time" content={publishedAt} />
```

### 3. Update index.html

Replace Lovable placeholder content with Ferry Hoes branding:

- Title: "Ferry Hoes"
- Description: Site description
- OpenGraph tags with proper branding
- Twitter card meta tags

### 4. Add Semantic HTML to All Pages

**Index.tsx** - Wrap in proper semantic structure:
```tsx
<>
  <SEOHead ... />
  <header>...</header>  {/* For HeroVideo */}
  <main>
    <article>...</article>  {/* For each major section */}
  </main>
  <footer>...</footer>
</>
```

**Speaking.tsx** - Already uses `<main>`, add `<header>` for hero, `<article>` for content sections

**Blog.tsx** - Already uses `<header>` and `<main>`, structure is good

**BlogPost.tsx** - Already uses `<article>`, add `<header>` and `<footer>` elements

### 5. Create Sitemap.xml

Static sitemap listing all known routes:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/speaking</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 6. Update robots.txt

Add sitemap reference:

```text
Sitemap: https://yourdomain.com/sitemap.xml
```

### 7. Add Canonical Tags to All Pages

| Page | Canonical URL |
|------|---------------|
| Index | `https://yourdomain.com/` |
| Blog | `https://yourdomain.com/blog` |
| BlogPost | `https://yourdomain.com/blog/{slug}` |
| Speaking | `https://yourdomain.com/speaking` |

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/config/site.ts` | Create - central site configuration |
| `src/components/blog/SEOHead.tsx` | Modify - enhanced OG properties |
| `index.html` | Modify - update meta tags |
| `src/pages/Index.tsx` | Modify - add SEOHead + semantic HTML |
| `src/pages/Speaking.tsx` | Modify - add SEOHead + canonical |
| `src/pages/Blog.tsx` | Modify - add canonical URL |
| `src/pages/BlogPost.tsx` | Modify - add canonical + semantic HTML |
| `public/sitemap.xml` | Create - static sitemap |
| `public/robots.txt` | Modify - add sitemap reference |

---

## Technical Details

### SEOHead Enhanced Interface

```typescript
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  canonicalUrl?: string;
  publishedAt?: string;  // For articles
  modifiedAt?: string;   // For articles
}
```

### Semantic HTML Structure

Each page will follow this pattern:

```text
<>
  <SEOHead />
  <header> - Site header/hero
  <main> - Primary content
    <article> - Self-contained content units
      <header> - Article header
      <section> - Content sections
      <footer> - Article footer (CTAs, author info)
    </article>
  </main>
  <footer> - Site footer
</>
```

---

## Custom Domain Preparation

Once you connect your custom domain:

1. Update `src/config/site.ts` with your actual domain
2. Update `public/sitemap.xml` with correct URLs
3. Update `public/robots.txt` sitemap reference

The SEO infrastructure will be ready to work immediately with your custom domain.
