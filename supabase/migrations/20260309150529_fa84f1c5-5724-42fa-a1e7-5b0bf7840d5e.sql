ALTER TABLE public.now_page
  ADD COLUMN IF NOT EXISTS next_gig text DEFAULT '',
  ADD COLUMN IF NOT EXISTS currently_reading text DEFAULT '',
  ADD COLUMN IF NOT EXISTS latest_podcast_guest text DEFAULT '',
  ADD COLUMN IF NOT EXISTS thinking_about text DEFAULT '';