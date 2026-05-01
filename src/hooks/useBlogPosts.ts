import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PostSource {
  title: string;
  url: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  header_image_url: string | null;
  hero_image_url: string | null;
  category: string | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string[] | null;
  seo_focus_keyphrase: string | null;
  seo_og_image_url: string | null;
  sources: PostSource[] | null;
  published: boolean;
  published_at: string | null;
  scheduled_at: string | null;
  author_id: string | null;
  created_at: string;
  updated_at: string;
  sort_order: number;
}

export function useBlogPosts(limit?: number) {
  return useQuery({
    queryKey: ["blog-posts", "published", limit],
    queryFn: async () => {
      let query = supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as unknown as BlogPost[];
    },
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (error) throw error;
      return data as unknown as BlogPost;
    },
    enabled: !!slug,
  });
}

// Calculate estimated read time (avg 200 words per minute)
export function getReadTime(content: string | null): string {
  if (!content) return "1 min read";
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

// Format date for display
export function formatPostDate(dateString: string | null): string {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
