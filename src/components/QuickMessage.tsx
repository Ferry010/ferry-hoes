import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Check } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const placeholders = [
  "What's on your mind?",
  "Ask me anything...",
  "Share a thought...",
  "Got a question?",
  "Drop a message...",
];

interface QuickMessageProps {
  variant?: "default" | "compact" | "inline";
  onSuccess?: () => void;
  className?: string;
}

const QuickMessage = ({ variant = "default", onSuccess, className }: QuickMessageProps) => {
  const [message, setMessage] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Rotate placeholders
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = async () => {
    if (!message.trim()) return;

    setIsSending(true);

    // Placeholder: Log to console (will be replaced with Slack integration)
    console.log("Message to Slack:", {
      message: message.trim(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    });

    // Simulate sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSending(false);
    setIsSent(true);
    setMessage("");

    toast.success("Sent! I'll get back to you.", {
      description: "Thanks for reaching out.",
    });

    onSuccess?.();

    // Reset sent state after a moment
    setTimeout(() => setIsSent(false), 3000);
  };

  const isCompact = variant === "compact";
  const isInline = variant === "inline";

  return (
    <div
      className={cn(
        "relative",
        isInline ? "w-full" : "w-full max-w-md",
        className
      )}
    >
      <div
        className={cn(
          "relative rounded-2xl bg-background border border-border shadow-soft transition-all duration-300",
          "focus-within:border-primary focus-within:shadow-soft-lg",
          isCompact ? "p-3" : "p-4"
        )}
      >
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholders[placeholderIndex]}
          className={cn(
            "resize-none border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0",
            "placeholder:text-muted-foreground/60 placeholder:transition-opacity",
            isCompact ? "min-h-[60px] text-sm" : "min-h-[80px]"
          )}
          disabled={isSending}
        />

        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">
            No formalities needed
          </span>

          <Button
            onClick={handleSend}
            disabled={!message.trim() || isSending}
            size={isCompact ? "sm" : "default"}
            className="rounded-full transition-all duration-300 bg-primary hover:bg-primary/90"
          >
            {isSending ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Sending
              </span>
            ) : isSent ? (
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                Sent!
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Send
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickMessage;
