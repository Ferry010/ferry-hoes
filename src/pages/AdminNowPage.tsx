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

const FIELDS = [
  { id: "next_gig", label: "Next gig", placeholder: "Speaking at a leadership summit in Amsterdam next week..." },
  { id: "working_on", label: "Working on", placeholder: "Finalising the AI literacy training with Speakers Academy..." },
  { id: "currently_reading", label: "Currently reading", placeholder: "The Anxious Generation by Jonathan Haidt..." },
  { id: "latest_podcast_guest", label: "Latest podcast guest", placeholder: "Just recorded with Simone Moissidis on inclusive leadership..." },
  { id: "thinking_about", label: "Thinking about", placeholder: "Why most AI strategies skip the human design phase entirely..." },
] as const;

type FieldId = typeof FIELDS[number]["id"];

const AdminNowPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [values, setValues] = useState<Record<FieldId, string>>({
    next_gig: "",
    working_on: "",
    currently_reading: "",
    latest_podcast_guest: "",
    thinking_about: "",
  });

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
      setValues({
        next_gig: (data as any).next_gig || "",
        working_on: data.working_on || "",
        currently_reading: (data as any).currently_reading || "",
        latest_podcast_guest: (data as any).latest_podcast_guest || "",
        thinking_about: (data as any).thinking_about || "",
      });
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("now_page")
      .update({
        last_updated: format(lastUpdated, "yyyy-MM-dd"),
        working_on: values.working_on,
        ...({ next_gig: values.next_gig, currently_reading: values.currently_reading, latest_podcast_guest: values.latest_podcast_guest, thinking_about: values.thinking_about } as any),
      })
      .eq("id", 1);

    if (error) {
      toast({ title: "Error saving", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Now page updated" });
    }
    setSaving(false);
  };

  const updateField = (id: FieldId, value: string) => {
    setValues((v) => ({ ...v, [id]: value }));
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
        {FIELDS.map(({ id, label, placeholder }) => (
          <div key={id} className="space-y-2">
            <Label htmlFor={id}>{label}</Label>
            <Textarea
              id={id}
              value={values[id]}
              onChange={(e) => updateField(id, e.target.value)}
              rows={3}
              placeholder={placeholder}
            />
          </div>
        ))}

        <Button onClick={handleSave} disabled={saving} className="w-full sm:w-auto">
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save changes
        </Button>
      </div>
    </div>
  );
};

export default AdminNowPage;
