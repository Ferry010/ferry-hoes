import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const currentlyItems = [
  { emoji: "📖", text: "Reading 'Four Thousand Weeks'" },
  { emoji: "✍️", text: "Writing about the future of work" },
  { emoji: "🎤", text: "Preparing for a keynote in Berlin" },
  { emoji: "🔬", text: "Researching human-AI collaboration" },
  { emoji: "💭", text: "Thinking about attention in the digital age" },
];

const CurrentlyStatus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % currentlyItems.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = currentlyItems[currentIndex];

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full border border-border">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        Currently
      </span>
      <div className="w-px h-4 bg-border" />
      <div
        className={cn(
          "flex items-center gap-2 transition-all duration-300",
          isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        )}
      >
        <span className="text-lg">{current.emoji}</span>
        <span className="text-sm text-foreground font-medium font-handwriting">
          {current.text}
        </span>
      </div>
    </div>
  );
};

export default CurrentlyStatus;
