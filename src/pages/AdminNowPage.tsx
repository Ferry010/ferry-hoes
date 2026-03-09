import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";

const AdminNowPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [onStage, setOnStage] = useState("");
  const [workingOn, setWorkingOn] = useState("");
  const [readingThinking, setReadingThinking] = useState("");
  const [inTheStudio, setInTheStudio] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("now_page")
      .select("*")
      .maybeSingle();

    if (error) {
      toast({ title: "Error loading data", description: error.message, variant: "destructive" });
    } else if (data) {
      if (data.last_updated) setLastUpdated(parseISO(data.last_updated));
      setOnStage(data.on_stage || "");
      setWorkingOn(data.working_on || "");
      setReadingThinking(data.reading_thinking || "");
      setInTheStudio(data.in_the_studio || "");
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("now_page")
      .update({
        last_updated: format(lastUpdated, "yyyy-MM-dd"),
        on_stage: onStage,
        working_on: workingOn,
        reading_thinking: readingThinking,
        in_the_studio: inTheStudio,
      })
      .eq("id", 1);

    if (error) {
      toast({ title: "Error saving", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Now page updated" });
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-display font-bold text-foreground mb-8">Now Page</h1>

      <div className="space-y-6">
        {/* Last updated */}
        <div className="space-y-2">
          <Label>Last updated</Label>
          <div className="flex items-center gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-[200px] justify-start text-left font-normal")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(lastUpdated, "PPP")}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={lastUpdated}
                  onSelect={(d) => d && setLastUpdated(d)}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
            <Button variant="secondary" size="sm" onClick={() => setLastUpdated(new Date())}>
              Set to today
            </Button>
          </div>
        </div>

        {/* Text areas */}
        <div className="space-y-2">
          <Label htmlFor="on_stage">On stage</Label>
          <Textarea id="on_stage" value={onStage} onChange={(e) => setOnStage(e.target.value)} rows={4} placeholder="What speaking engagements are coming up..." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="working_on">Working on</Label>
          <Textarea id="working_on" value={workingOn} onChange={(e) => setWorkingOn(e.target.value)} rows={4} placeholder="Current projects and focus areas..." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="reading_thinking">Reading & thinking about</Label>
          <Textarea id="reading_thinking" value={readingThinking} onChange={(e) => setReadingThinking(e.target.value)} rows={4} placeholder="Books, ideas, themes on your mind..." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="in_the_studio">In the studio</Label>
          <Textarea id="in_the_studio" value={inTheStudio} onChange={(e) => setInTheStudio(e.target.value)} rows={4} placeholder="Creative work, recordings, content in progress..." />
        </div>

        <Button onClick={handleSave} disabled={saving} className="w-full sm:w-auto">
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save changes
        </Button>
      </div>
    </div>
  );
};

export default AdminNowPage;
