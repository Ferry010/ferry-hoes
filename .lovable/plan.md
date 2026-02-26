

## Plan: Fix blog image upload hanging issue

### Root cause analysis
The `handleDrop` callback uses `useCallback` with an empty dependency array `[]`, which creates a stale closure over `uploadFile`. When `uploadFile` is called from the stale closure, state updates (like `setIsUploading(false)` in `finally`) may not work correctly, causing the spinner to hang indefinitely.

Additionally, the file input `onChange` handler (`handleChange`) is not wrapped in `useCallback` but calls the same `uploadFile` — both paths may be affected if the component re-renders.

### Fix in `src/components/admin/ImageUpload.tsx`

1. **Wrap `uploadFile` in `useCallback`** with `[onChange]` as dependency
2. **Update `handleDrop` dependency array** to include `uploadFile` so it always calls the current version
3. **Add a timeout safeguard** — if the upload takes longer than 30 seconds, reset `isUploading` and show an error toast, preventing the spinner from hanging forever
4. **Add more specific error logging** to surface the actual Supabase error message in the toast description (e.g. "row-level security policy violation") so the real issue is visible to the admin

