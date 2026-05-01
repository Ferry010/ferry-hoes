import { useRef, useState } from "react";
import { FileJson, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export interface BlogJsonImportData {
  title?: string;
  slug?: string;
  content?: string;
  excerpt?: string;
  header_image_url?: string;
  seo_title?: string;
  seo_description?: string;
  seo_focus_keyphrase?: string;
  seo_keywords?: string[] | string;
  seo_og_image_url?: string;
  sources?: { title: string; url: string }[] | Record<string, string>;
}

interface BlogJsonImportProps {
  onImport: (data: BlogJsonImportData) => void;
}

export default function BlogJsonImport({ onImport }: BlogJsonImportProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const text = await file.text();
      const json = JSON.parse(text);

      if (!json || typeof json !== "object") {
        throw new Error("JSON must be an object");
      }

      if (!json.title && !json.content) {
        toast({
          title: "Invalid JSON",
          description: "File must include at least a 'title' or 'content' field.",
          variant: "destructive",
        });
        setLoading(false);
        if (inputRef.current) inputRef.current.value = "";
        return;
      }

      onImport(json as BlogJsonImportData);
      toast({
        title: "JSON imported",
        description: "Form fields have been pre-filled. Review and save.",
      });
    } catch (err: any) {
      console.error("JSON parse error:", err);
      toast({
        title: "Invalid JSON file",
        description: err?.message || "Could not parse the selected file.",
        variant: "destructive",
      });
    }
    setLoading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        onClick={() => inputRef.current?.click()}
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <FileJson className="w-4 h-4 mr-2" />
        )}
        {loading ? "Importing…" : "Import JSON"}
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept=".json,application/json"
        onChange={handleFile}
        className="hidden"
        disabled={loading}
      />
    </>
  );
}
