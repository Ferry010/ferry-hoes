import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { BlogPost } from "./useBlogPosts";

export interface CreatePostData {
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  header_image_url?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string[];
  seo_og_image_url?: string;
  sources?: { title: string; url: string }[];
  published?: boolean;
}

export interface UpdatePostData extends Partial<CreatePostData> {
  id: string;
}

// Admin: Get all posts (including drafts)
export function useAdminPosts() {
  return useQuery({
    queryKey: ["admin-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("updated_at", { ascending: false });

      if (error) throw error;
      return data as BlogPost[];
    },
  });
}

// Admin: Get single post by ID
export function useAdminPost(id: string) {
  return useQuery({
    queryKey: ["admin-post", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data as BlogPost;
    },
    enabled: !!id,
  });
}

// Create new post
export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postData: CreatePostData) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { data, error } = await supabase
        .from("blog_posts")
        .insert({
          ...postData,
          author_id: user?.id,
          published_at: postData.published ? new Date().toISOString() : null,
        })
        .select()
        .single();

      if (error) throw error;
      return data as BlogPost;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    },
  });
}

// Update existing post
export function useUpdatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...postData }: UpdatePostData) => {
      // If publishing for the first time, set published_at
      let updateData: Partial<BlogPost> = { ...postData };
      if (postData.published) {
        const { data: existingPost } = await supabase
          .from("blog_posts")
          .select("published_at")
          .eq("id", id)
          .single();

        if (!existingPost?.published_at) {
          updateData.published_at = new Date().toISOString();
        }
      }

      const { data, error } = await supabase
        .from("blog_posts")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data as BlogPost;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      queryClient.invalidateQueries({ queryKey: ["admin-post", data.id] });
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      queryClient.invalidateQueries({ queryKey: ["blog-post", data.slug] });
    },
  });
}

// Delete post
export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    },
  });
}

// Swap sort_order between two posts
export function useUpdatePostOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (swaps: { id: string; sort_order: number }[]) => {
      for (const swap of swaps) {
        const { error } = await supabase
          .from("blog_posts")
          .update({ sort_order: swap.sort_order })
          .eq("id", swap.id);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    },
  });
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
