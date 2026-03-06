

## Google SEO Optimization

The site already has good foundations (structured data, SEO meta tags, canonical URLs pointing to ferryhoes.com). The main gaps are:

### 1. Fix sitemap.xml (critical)
**File: `public/sitemap.xml`**
- Still uses `https://yourdomain.com` placeholder URLs
- Update all URLs to `https://ferryhoes.com`
- Add missing pages: `/about`, `/podcast`, `/contact`, `/press`
- Add `<lastmod>` dates for better crawl signaling

### 2. Fix robots.txt (critical)
**File: `public/robots.txt`**
- Sitemap reference still points to `https://yourdomain.com/sitemap.xml`
- Update to `https://ferryhoes.com/sitemap.xml`
- Simplify to a single `User-agent: *` block

### 3. Add WebSite schema with SearchAction
**File: `src/components/StructuredData.tsx`**
- Add a `WebSite` schema (helps Google understand site identity and can enable sitelinks in search results)

### 4. Enhance Person schema
**File: `src/components/StructuredData.tsx`**
- Add `image`, `knowsAbout`, and `brand` properties to the existing Person schema for richer knowledge panel data

### 5. Add `<lastmod>` and all routes to sitemap
All public routes added: `/`, `/about`, `/speaking`, `/podcast`, `/blog`, `/contact`, `/press`

### Files changed
- `public/sitemap.xml`
- `public/robots.txt`
- `src/components/StructuredData.tsx`

