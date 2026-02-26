import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Mail, MailOpen, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  created_at: string;
};

const AdminMessages = () => {
  const queryClient = useQueryClient();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data: messages, isLoading } = useQuery({
    queryKey: ["admin-messages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as ContactMessage[];
    },
  });

  const toggleRead = useMutation({
    mutationFn: async ({ id, read }: { id: string; read: boolean }) => {
      const { error } = await supabase
        .from("contact_messages")
        .update({ read })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-messages"] }),
  });

  const deleteMessage = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("contact_messages")
        .delete()
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-messages"] });
      toast({ title: "Message deleted" });
    },
  });

  const handleDelete = (id: string) => {
    if (!confirm("Delete this message?")) return;
    deleteMessage.mutate(id);
  };

  const handleToggle = (msg: ContactMessage) => {
    setExpandedId(expandedId === msg.id ? null : msg.id);
    if (!msg.read) {
      toggleRead.mutate({ id: msg.id, read: true });
    }
  };

  const unreadCount = messages?.filter((m) => !m.read).length ?? 0;

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Messages</h1>
        <p className="text-muted-foreground">
          {unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? "s" : ""}` : "All caught up"}
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card rounded-lg p-6 animate-pulse border border-border">
              <div className="h-5 bg-muted rounded w-1/3 mb-3" />
              <div className="h-4 bg-muted rounded w-1/4" />
            </div>
          ))}
        </div>
      ) : messages && messages.length > 0 ? (
        <div className="space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "bg-card rounded-lg border transition-colors",
                msg.read ? "border-border" : "border-primary/30 bg-primary/[0.02]"
              )}
            >
              <button
                onClick={() => handleToggle(msg)}
                className="w-full p-5 text-left flex items-start gap-4"
              >
                <div className="mt-0.5">
                  {msg.read ? (
                    <MailOpen className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Mail className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={cn("font-semibold truncate", !msg.read && "text-foreground")}>
                      {msg.name}
                    </span>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {formatDate(msg.created_at)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{msg.email}</p>
                  {expandedId !== msg.id && (
                    <p className="text-sm text-muted-foreground mt-1 truncate">{msg.message}</p>
                  )}
                </div>
                {expandedId === msg.id ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                )}
              </button>

              {expandedId === msg.id && (
                <div className="px-5 pb-5 pl-14">
                  {/* Extra fields */}
                  {((msg as any).organization || (msg as any).inquiry_type || (msg as any).timeline) && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(msg as any).inquiry_type && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {(msg as any).inquiry_type}
                        </span>
                      )}
                      {(msg as any).organization && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          {(msg as any).organization}
                        </span>
                      )}
                      {(msg as any).timeline && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          {(msg as any).timeline}
                        </span>
                      )}
                    </div>
                  )}
                  {(msg as any).inquiry_other && (
                    <p className="text-xs text-muted-foreground mb-2 italic">Other: {(msg as any).inquiry_other}</p>
                  )}
                  <p className="text-sm text-foreground whitespace-pre-wrap mb-4">{msg.message}</p>
                  <div className="flex items-center gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={`mailto:${msg.email}?subject=Re: Your message&body=Hi ${msg.name},%0A%0A`}>
                        Reply via email
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => toggleRead.mutate({ id: msg.id, read: !msg.read })}
                      className="text-muted-foreground"
                    >
                      Mark as {msg.read ? "unread" : "read"}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(msg.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card rounded-lg border border-border">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground mb-2">No messages yet</h2>
          <p className="text-muted-foreground">Messages from your contact form will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
