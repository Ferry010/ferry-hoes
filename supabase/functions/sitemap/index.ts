import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/xml; charset=utf-8",
};

const STATIC_PAGES = [
  { loc: "https://ferryhoes.com/", changefreq: "weekly", priority: "1.0" },
  { loc: "https://ferryhoes.com/about", changefreq: "monthly", priority: "0.8" },
  { loc: "https://ferryhoes.com/speaking", changefreq: "monthly", priority: "0.8" },
  { loc: "https://ferryhoes.com/blog", changefreq: "weekly", priority: "0.8" },
  { loc: "https://ferryhoes.com/podcast", changefreq: "monthly", priority: "0.7" },
  { loc: "https://ferryhoes.com/contact", changefreq: "monthly", priority: "0.6" },
  { loc: "https://ferryhoes.com/press", changefreq: "monthly", priority: "0.6" },
  { loc: "https://ferryhoes.com/now", changefreq: "weekly", priority: "0.3" },
  { loc: "https://ferryhoes.com/ai-geletterdheid", changefreq: "monthly", priority: "0.9" },
];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: posts } = await supabase
      .from("blog_posts")
      .select("slug, published_at, updated_at")
      .eq("published", true)
      .order("published_at", { ascending: false });

    const today = new Date().toISOString().split("T")[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    for (const page of STATIC_PAGES) {
      xml += `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    }

    if (posts) {
      for (const post of posts) {
        const lastmod = post.updated_at
          ? post.updated_at.split("T")[0]
          : post.published_at
          ? post.published_at.split("T")[0]
          : today;
        xml += `
  <url>
    <loc>https://ferryhoes.com/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
      }
    }

    xml += `
</urlset>`;

    return new Response(xml, { headers: corsHeaders });
  } catch (error) {
    return new Response("Error generating sitemap", { status: 500, headers: corsHeaders });
  }
});
