CREATE POLICY "Admins can view subscribers"
  ON public.email_subscribers
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));