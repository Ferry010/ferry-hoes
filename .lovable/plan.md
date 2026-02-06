

# Blog Section with Admin Dashboard

Create a fully-featured blog system with an admin dashboard for creating stunning blog posts with SEO optimization, integrated with Supabase.

---

## Architecture Overview

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Homepage (/):                      Admin (/admin):                          │
│  ┌─────────────────────────┐       ┌─────────────────────────────────────┐   │
│  │  ... other sections ... │       │  Login Page                         │   │
│  │  ┌───────────────────┐  │       │  ┌─────────────────────────────────┐│   │
│  │  │   BlogSection     │  │       │  │  Dashboard                      ││   │
│  │  │  (latest 3 posts) │  │       │  │  - Create/Edit posts            ││   │
│  │  │  [Read more →]    │  │       │  │  - Title, content (rich text)   ││   │
│  │  └───────────────────┘  │       │  │  - SEO meta fields (YOAST-like) ││   │
│  │  ... other sections ... │       │  │  - Header image upload          ││   │
│  └─────────────────────────┘       │  └─────────────────────────────────┘│   │
│                                    └─────────────────────────────────────┘   │
│  Blog List (/blog):                                                          │
│  ┌─────────────────────────┐       Individual Post (/blog/:slug):            │
│  │  All posts grid         │       ┌─────────────────────────────────────┐   │
│  │  with featured hero     │       │  Hero image (full-width)            │   │
│  └─────────────────────────┘       │  Big title                          │   │
│                                    │  Content                             │   │
│                                    │  Discord CTA                         │   │
│                                    └─────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                             SUPABASE                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Tables:                           Storage:                                  │
│  ┌────────────────────────┐       ┌─────────────────────────────────────┐   │
│  │  blog_posts            │       │  blog-images bucket                 │   │
│  │  - id                  │       │  (public, for header images)        │   │
│  │  - title               │       └─────────────────────────────────────┘   │
│  │  - slug                │                                                  │
│  │  - content             │       Auth:                                      │
│  │  - excerpt             │       ┌─────────────────────────────────────┐   │
│  │  - header_image_url    │       │  Admin user(s) via Supabase Auth    │   │
│  │  - seo_title           │       └─────────────────────────────────────┘   │
│  │  - seo_description     │                                                  │
│  │  - seo_keywords        │       Roles:                                     │
│  │  - published           │       ┌─────────────────────────────────────┐   │
│  │  - published_at        │       │  user_roles table                   │   │
│  │  - author_id           │       │  (admin role for post management)   │   │
│  │  - created_at          │       └─────────────────────────────────────┘   │
│  │  - updated_at          │                                                  │
│  └────────────────────────┘                                                  │
│                                                                              │
│  RLS Policies:                                                               │
│  - Public: SELECT published posts only                                       │
│  - Admin: Full CRUD via has_role() security definer function                │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Database Schema

### Tables

**blog_posts** - Main content table:

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| title | text | Post title (required) |
| slug | text | URL-friendly slug (unique) |
| content | text | Full post content (markdown/HTML) |
| excerpt | text | Short preview text |
| header_image_url | text | URL to header image in storage |
| seo_title | text | Custom SEO title (or uses title) |
| seo_description | text | Meta description for search engines |
| seo_keywords | text[] | Array of keywords |
| seo_og_image_url | text | Open Graph image (or uses header) |
| published | boolean | Draft/published status |
| published_at | timestamptz | When post was published |
| author_id | uuid | FK to auth.users |
| created_at | timestamptz | Creation timestamp |
| updated_at | timestamptz | Last update timestamp |

**user_roles** - Role-based access:

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| user_id | uuid | FK to auth.users |
| role | app_role | Enum: admin, moderator, user |

### Storage Bucket

- **blog-images**: Public bucket for header images
- RLS: Anyone can read, only authenticated admins can upload

---

## Page Structure

### New Pages

| Route | Component | Purpose |
|-------|-----------|---------|
| `/blog` | BlogListPage | All published posts |
| `/blog/:slug` | BlogPostPage | Individual post with hero |
| `/admin` | AdminLogin | Admin sign-in |
| `/admin/dashboard` | AdminDashboard | Post management |
| `/admin/posts/new` | PostEditor | Create new post |
| `/admin/posts/:id` | PostEditor | Edit existing post |

### Updated Pages

| Route | Changes |
|-------|---------|
| `/` (Index) | Add BlogSection component after PodcastSection |

---

## Component Details

### 1. BlogSection (Homepage)

Displays latest 3 published posts with matching site design:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ✏️ The Blog                                                                 │
│                                                                              │
│  Ideas worth sharing                                                         │
│                                                                              │
│  Essays, insights, and perspectives on technology, humanity, and everything │
│  in between.                                                                 │
│                                                                              │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐          │
│  │  [Header Image]  │  │  [Header Image]  │  │  [Header Image]  │          │
│  │                  │  │                  │  │                  │          │
│  │  Category        │  │  Category        │  │  Category        │          │
│  │  Post Title      │  │  Post Title      │  │  Post Title      │          │
│  │  Excerpt...      │  │  Excerpt...      │  │  Excerpt...      │          │
│  │                  │  │                  │  │                  │          │
│  │  Jan 28 · 6 min  │  │  Jan 21 · 4 min  │  │  Jan 14 · 5 min  │          │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘          │
│                                                                              │
│                    [ View all articles → ]                                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2. BlogPostPage (Individual Post)

Magazine-style layout matching site aesthetic:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                        │  │
│  │                         HERO IMAGE                                     │  │
│  │                      (full-width, 60vh)                                │  │
│  │                                                                        │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│        Category · Jan 28, 2026 · 6 min read                                  │
│                                                                              │
│        Why We're Building AI Wrong                                           │
│        (And How to Fix It)                                                   │
│        ─────────────────────────────────────                                 │
│                                                                              │
│        Most companies are treating AI as a replacement for                   │
│        humans. Here's why that's the wrong approach entirely...              │
│                                                                              │
│        [Full content with proper typography]                                 │
│                                                                              │
│        ────────────────────────────────────────────────                      │
│                                                                              │
│        ┌────────────────────────────────────────────────┐                    │
│        │  💬 Want to continue this conversation?       │                    │
│        │                                                │                    │
│        │  Join the community on Discord and let's      │                    │
│        │  discuss ideas that matter.                   │                    │
│        │                                                │                    │
│        │         [ Join Discord Community → ]          │                    │
│        └────────────────────────────────────────────────┘                    │
│                                                                              │
│        ← Back to all articles                                                │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3. Admin Dashboard

Clean, functional admin interface:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  Ferry's Blog Admin                                       [Sign Out]        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │                     [ + Create New Post ]                              │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  Posts                                                                       │
│  ─────                                                                       │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  Why We're Building AI Wrong          ● Published    Jan 28   [Edit]  │ │
│  ├────────────────────────────────────────────────────────────────────────┤ │
│  │  The Future of Work Isn't Remote      ○ Draft        Jan 21   [Edit]  │ │
│  ├────────────────────────────────────────────────────────────────────────┤ │
│  │  What Playing Jazz Taught Me          ● Published    Jan 14   [Edit]  │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4. Post Editor (YOAST-like SEO)

Two-panel editor with content and SEO sections:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  ← Back to Dashboard              New Post                    [Save Draft] │
│                                                                [Publish →] │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  CONTENT                                                                     │
│  ───────                                                                     │
│                                                                              │
│  Title                                                                       │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  Why We're Building AI Wrong (And How to Fix It)                       │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  Header Image                                                                │
│  ┌──────────────────────────┐                                               │
│  │  [Drop image or click]   │  ← Drag & drop or click to upload            │
│  │  📷                      │                                               │
│  └──────────────────────────┘                                               │
│                                                                              │
│  Content                                                                     │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  [Rich text editor / Markdown]                                         │ │
│  │                                                                         │ │
│  │  Most companies are treating AI as a replacement for humans...         │ │
│  │                                                                         │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                              │
│  SEO SETTINGS (Like Yoast)                                                   │
│  ─────────────────────────                                                   │
│                                                                              │
│  SEO Title (appears in search results)                                       │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  Why We're Building AI Wrong | Ferry Hoes                              │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│  Character count: 42/60 ✓                                                    │
│                                                                              │
│  Meta Description (search snippet)                                           │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  Most companies are treating AI as a replacement for humans. Here's    │ │
│  │  why that's the wrong approach and how to build AI that empowers...    │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│  Character count: 148/160 ✓                                                  │
│                                                                              │
│  Keywords (comma-separated)                                                  │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  AI, artificial intelligence, human-centered AI, future of work        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  🔍 SEO Preview                                                        │ │
│  │  ─────────────                                                         │ │
│  │  Why We're Building AI Wrong | Ferry Hoes                              │ │
│  │  ferryhoes.com/blog/why-were-building-ai-wrong                         │ │
│  │  Most companies are treating AI as a replacement for humans. Here's    │ │
│  │  why that's the wrong approach and how to build AI that empowers...    │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## File Structure

### New Files

```text
src/
├── integrations/
│   └── supabase/              # Supabase client setup
│       ├── client.ts
│       └── types.ts
├── pages/
│   ├── Blog.tsx               # Blog list page
│   ├── BlogPost.tsx           # Individual post page
│   ├── AdminLogin.tsx         # Admin sign-in
│   ├── AdminDashboard.tsx     # Post management
│   └── PostEditor.tsx         # Create/edit posts
├── components/
│   ├── sections/
│   │   └── BlogSection.tsx    # Homepage blog preview
│   ├── blog/
│   │   ├── BlogCard.tsx       # Post preview card
│   │   ├── BlogHero.tsx       # Post hero image
│   │   ├── BlogContent.tsx    # Rendered post content
│   │   ├── PostCTA.tsx        # Discord CTA component
│   │   └── SEOHead.tsx        # Dynamic meta tags
│   └── admin/
│       ├── AdminLayout.tsx    # Admin wrapper with auth
│       ├── PostList.tsx       # Dashboard post list
│       ├── PostForm.tsx       # Post creation form
│       ├── ImageUpload.tsx    # Header image uploader
│       └── SEOFields.tsx      # YOAST-like SEO inputs
└── hooks/
    ├── useBlogPosts.ts        # Fetch published posts
    ├── useAdminPosts.ts       # Admin CRUD operations
    └── useAuth.ts             # Authentication hook

supabase/
└── migrations/
    ├── 001_create_app_role_enum.sql
    ├── 002_create_user_roles_table.sql
    ├── 003_create_blog_posts_table.sql
    ├── 004_create_blog_images_bucket.sql
    └── 005_create_rls_policies.sql
```

### Modified Files

| File | Changes |
|------|---------|
| `src/App.tsx` | Add routes for /blog, /blog/:slug, /admin/* |
| `src/pages/Index.tsx` | Add BlogSection after PodcastSection |
| `index.html` | Base meta tags for SEO |

---

## Security Model

### RLS Policies

**blog_posts table:**
- `SELECT` (public): `WHERE published = true`
- `SELECT` (admin): `WHERE has_role(auth.uid(), 'admin')`
- `INSERT` (admin): `WITH CHECK (has_role(auth.uid(), 'admin'))`
- `UPDATE` (admin): `USING/WITH CHECK (has_role(auth.uid(), 'admin'))`
- `DELETE` (admin): `USING (has_role(auth.uid(), 'admin'))`

**user_roles table:**
- `SELECT` (self): `WHERE user_id = auth.uid()`
- No public INSERT/UPDATE/DELETE (managed via database directly)

**blog-images bucket:**
- `SELECT` (public): Anyone can view images
- `INSERT` (admin): `has_role(auth.uid(), 'admin')`
- `DELETE` (admin): `has_role(auth.uid(), 'admin')`

### Admin Setup

After connecting Supabase:
1. Create admin user via Supabase Auth dashboard
2. Manually insert role: `INSERT INTO user_roles (user_id, role) VALUES ('user-uuid', 'admin')`

---

## Implementation Order

1. **Connect Supabase** - Set up the connection
2. **Database migrations** - Create tables, enum, RLS policies, storage bucket
3. **Supabase client** - Set up client and types
4. **Authentication** - Login page and auth hook
5. **Admin dashboard** - Post list and management
6. **Post editor** - Create/edit with SEO fields and image upload
7. **Public blog pages** - List and individual post pages
8. **BlogSection** - Homepage component
9. **SEO implementation** - Dynamic meta tags

---

## Technical Notes

- **Rich text**: Start with textarea + markdown rendering (can upgrade to TipTap later)
- **Image upload**: Direct to Supabase Storage, returns public URL
- **SEO meta tags**: Use react-helmet-async for dynamic document head
- **Slug generation**: Auto-generate from title, allow manual override
- **Estimated read time**: Calculate from content word count (~200 words/min)

