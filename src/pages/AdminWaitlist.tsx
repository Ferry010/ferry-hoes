import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

type Subscriber = {
  id: string;
  email: string;
  source: string;
  created_at: string;
};

const AdminWaitlist = () => {
  const { data: subscribers, isLoading } = useQuery({
    queryKey: ["admin-waitlist"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("email_subscribers" as any)
        .select("*")
        .eq("source", "english_waitlist")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as unknown as Subscriber[];
    },
  });

  const total = subscribers?.length ?? 0;

  const csv = useMemo(() => {
    if (!subscribers?.length) return "";
    const rows = [
      ["email", "signed_up_at", "source"],
      ...subscribers.map((s) => [s.email, s.created_at, s.source]),
    ];
    return rows
      .map((r) =>
        r
          .map((v) => `"${String(v).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");
  }, [subscribers]);

  const downloadCsv = () => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `english-waitlist-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            English book waitlist
          </h1>
          <p className="text-muted-foreground">
            {isLoading
              ? "Loading…"
              : total === 0
                ? "No signups yet"
                : `${total} signup${total === 1 ? "" : "s"} for the English edition`}
          </p>
        </div>
        {total > 0 && (
          <Button variant="outline" size="sm" onClick={downloadCsv}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-4 animate-pulse border border-border h-14"
            />
          ))}
        </div>
      ) : total > 0 ? (
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Signed up</th>
              </tr>
            </thead>
            <tbody>
              {subscribers!.map((s) => (
                <tr
                  key={s.id}
                  className="border-t border-border hover:bg-muted/20 transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-foreground">
                    <a
                      href={`mailto:${s.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {s.email}
                    </a>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">
                    {formatDate(s.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 bg-card rounded-lg border border-border">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground mb-2">
            No signups yet
          </h2>
          <p className="text-muted-foreground">
            English-edition waitlist signups will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminWaitlist;
