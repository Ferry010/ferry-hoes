import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import QuickMessage from "./QuickMessage";

const conversationStarters = [
  "What's on your mind?",
  "Ask me anything",
  "Share a thought",
  "Let's chat",
];

const FloatingChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [starterIndex] = useState(() => Math.floor(Math.random() * conversationStarters.length));

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-up Panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm",
          "transition-all duration-300 ease-out",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="bg-card rounded-2xl shadow-soft-lg border border-border overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/50">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full flex items-center justify-center text-lg">
                👋
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">
                  {conversationStarters[starterIndex]}
                </h3>
                <p className="text-xs text-muted-foreground font-handwriting">
                  I usually reply within a few hours
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-muted transition-colors"
              aria-label="Close message panel"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Message Input */}
          <div className="p-4">
            <QuickMessage
              variant="compact"
              onSuccess={() => {
                setTimeout(() => setIsOpen(false), 2000);
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "h-14 w-14 rounded-full",
          "bg-primary text-primary-foreground",
          "shadow-soft-lg hover:shadow-soft-lg",
          "transition-all duration-300 ease-out",
          "hover:scale-105 active:scale-95",
          "flex items-center justify-center",
          "group",
          // Subtle pulse animation when closed
          !isOpen && "animate-pulse-subtle"
        )}
        aria-label={isOpen ? "Close message panel" : "Open message panel"}
      >
        <MessageCircle
          className={cn(
            "h-6 w-6 transition-all duration-300",
            isOpen ? "rotate-12 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          )}
        />
        <X
          className={cn(
            "h-6 w-6 absolute transition-all duration-300",
            isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-12 scale-0 opacity-0"
          )}
        />
      </button>

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% {
            box-shadow: 0 0 0 0 hsl(var(--primary) / 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px hsl(var(--primary) / 0);
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingChatBubble;
