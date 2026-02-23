import ChatBubble from "./ChatBubble";
import type { Exchange } from "@/data/conversationPaths";

interface ExchangeThreadProps {
  exchanges: Exchange[];
}

const ExchangeThread = ({ exchanges }: ExchangeThreadProps) => (
  <div className="space-y-3">
    {exchanges.map((pair, i) => (
      <div key={i} className="space-y-3">
        {/* Visitor bubble */}
        <ChatBubble className="flex justify-end" delay={i * 400}>
          <div className="max-w-[80%] rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 backdrop-blur-md text-primary-foreground text-sm md:text-base font-medium">
            {pair.visitor}
          </div>
        </ChatBubble>

        {/* Ferry bubble */}
        <ChatBubble className="flex justify-start" delay={i * 400 + 200}>
          <div className="max-w-[85%] space-y-1">
            <span className="text-[11px] text-muted-foreground font-medium ml-1">
              Ferry
            </span>
            <div className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-secondary text-foreground text-sm md:text-base">
              {pair.ferry}
            </div>
          </div>
        </ChatBubble>
      </div>
    ))}
  </div>
);

export default ExchangeThread;
