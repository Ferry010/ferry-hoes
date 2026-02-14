import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import AskFerryChat from "./AskFerryChat";

const AskFerryBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Chat Panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm",
          "transition-all duration-300 ease-out",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="bg-card rounded-2xl shadow-soft-lg border border-border overflow-hidden flex flex-col" style={{ height: "min(480px, 70vh)" }}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/50 shrink-0">
            <div>
              <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Ask Ferry
              </h3>
              <p className="text-xs text-muted-foreground">
                AI-powered, always available
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-muted transition-colors"
              aria-label="Close Ask Ferry"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Chat body - only render when open to reset conversation */}
          <div className="flex-1 min-h-0">
            {isOpen && <AskFerryChat />}
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
          !isOpen && "animate-pulse-subtle"
        )}
        aria-label={isOpen ? "Close Ask Ferry" : "Open Ask Ferry"}
      >
        <Sparkles
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

export default AskFerryBubble;
