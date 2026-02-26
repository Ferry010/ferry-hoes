ALTER TABLE public.contact_messages
  ADD COLUMN IF NOT EXISTS organization text,
  ADD COLUMN IF NOT EXISTS inquiry_type text,
  ADD COLUMN IF NOT EXISTS inquiry_other text,
  ADD COLUMN IF NOT EXISTS timeline text,
  ADD COLUMN IF NOT EXISTS privacy_accepted boolean NOT NULL DEFAULT false;