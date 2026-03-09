

## Add "Now" Section to Admin Panel + Public /now Page

### 1. Database Migration
Create `now_page` table with a single row:
```sql
CREATE TABLE public.now_page (
  id integer PRIMARY KEY DEFAULT 1,
  last_updated date DEFAULT CURRENT_DATE,
  on_stage text DEFAULT '',
  working_on text DEFAULT '',
  reading_thinking text DEFAULT '',
  in_the_studio text DEFAULT '',
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);

ALTER TABLE public.now_page ENABLE ROW LEVEL SECURITY;

-- Anyone can read
CREATE POLICY "Anyone can read now page" ON public.now_page FOR SELECT TO public USING (true);
-- Only admins can update
CREATE POLICY "Admins can update now page" ON public.now_page FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin')) WITH CHECK (has_role(auth.uid(), 'admin'));

-- Seed the single row
INSERT INTO public.now_page (id) VALUES (1);
```

### 2. Admin Navigation (`src/components/admin/AdminLayout.tsx`)
Add a third nav link "Now Page" with a `Clock` icon pointing to `/admin/now`.

### 3. New Admin Page (`src/pages/AdminNowPage.tsx`)
- Fetches single row from `now_page` via `.maybeSingle()`
- "Last updated" date picker + "Set to today" button
- Four `<Textarea>` fields for the content areas
- "Save changes" button that updates the row
- Uses same styling conventions as AdminMessages/AdminDashboard

### 4. New Public Page (`src/pages/Now.tsx`)
- Fetches `now_page` row, displays in a single-column minimal layout
- Shows "Last updated" date, then each section as a heading + text block
- Personal tone, no cards — matches the site's clean aesthetic
- SEO head with appropriate title/description

### 5. Routing (`src/App.tsx`)
- Add `<Route path="now" element={<AdminNowPage />} />` inside the admin layout
- Add `<Route path="/now" element={<Now />} />` as a public route

### 6. Site Navigation
Add "Now" link to the site header/footer navigation per existing patterns.

