-- Add scheduled_at column for scheduling future posts
ALTER TABLE public.blog_posts
ADD COLUMN IF NOT EXISTS scheduled_at timestamp with time zone;

-- Update RLS: anyone can view posts that are published AND whose published_at is in the past (or null = immediate)
DROP POLICY IF EXISTS "Anyone can view published posts" ON public.blog_posts;

CREATE POLICY "Anyone can view published posts"
ON public.blog_posts
FOR SELECT
TO public
USING (
  published = true
  AND (published_at IS NULL OR published_at <= now())
);

-- Enable required extensions for cron-based auto-publish
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Function to publish scheduled posts whose time has come
CREATE OR REPLACE FUNCTION public.publish_due_scheduled_posts()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.blog_posts
  SET published = true,
      published_at = scheduled_at,
      scheduled_at = NULL
  WHERE published = false
    AND scheduled_at IS NOT NULL
    AND scheduled_at <= now();
END;
$$;

-- Schedule it every minute
SELECT cron.schedule(
  'publish-due-scheduled-posts',
  '* * * * *',
  $$ SELECT public.publish_due_scheduled_posts(); $$
);