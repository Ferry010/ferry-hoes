import ChatBubble from "./ChatBubble";
import { conversationPaths } from "@/data/conversationPaths";

interface PathOptionsProps {
  exploredPaths: string[];
  onSelect: (pathKey: string) => void;
  prompt?: string;
}

const PathOptions = ({ exploredPaths, onSelect, prompt }: PathOptionsProps) => {
  const remaining = Object.entries(conversationPaths).filter(
    ([key]) => !exploredPaths.includes(key)
  );

  if (remaining.length === 0) return null;

  return (
    <div className="space-y-3">
      {prompt && (
        <ChatBubble className="flex justify-start">
          <div className="max-w-[85%] space-y-1">
            <span className="text-[11px] text-muted-foreground font-medium ml-1">
              Ferry
            </span>
            <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-secondary text-foreground text-sm md:text-base">
              {prompt}
            </div>
          </div>
        </ChatBubble>
      )}

      <ChatBubble className="flex flex-col items-end gap-2">
        {remaining.map(([key, path]) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className="max-w-[80%] text-left rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/20 border border-primary/30 text-foreground text-sm md:text-base font-medium hover:bg-primary/30 hover:border-primary/50 transition-all duration-200 cursor-pointer"
          >
            {path.label}
          </button>
        ))}
      </ChatBubble>
    </div>
  );
};

export default PathOptions;
