
CREATE TABLE public.now_page (
  id integer PRIMARY KEY DEFAULT 1,
  last_updated date DEFAULT CURRENT_DATE,
  on_stage text DEFAULT '',
  working_on text DEFAULT '',
  reading_thinking text DEFAULT '',
  in_the_studio text DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

-- Use a trigger for single-row validation instead of CHECK constraint
CREATE OR REPLACE FUNCTION public.now_page_single_row()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  IF (SELECT count(*) FROM public.now_page WHERE id != NEW.id) >= 1 THEN
    RAISE EXCEPTION 'now_page table can only contain one row';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER enforce_single_row
  BEFORE INSERT ON public.now_page
  FOR EACH ROW EXECUTE FUNCTION public.now_page_single_row();

ALTER TABLE public.now_page ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read now page" ON public.now_page FOR SELECT TO public USING (true);
CREATE POLICY "Admins can update now page" ON public.now_page FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin')) WITH CHECK (has_role(auth.uid(), 'admin'));

INSERT INTO public.now_page (id) VALUES (1);
