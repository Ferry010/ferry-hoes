import { useEffect, useRef, useState } from "react";

interface ConversationBridgeProps {
  question: string;
  id?: string;
}

const ConversationBridge = ({ question, id }: ConversationBridgeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className="container px-6 md:px-8 max-w-xl md:max-w-2xl py-10 md:py-14"
    >
      <div
        className={`flex justify-end transition-all duration-700 ease-out ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="rounded-2xl rounded-br-md px-4 py-2.5 bg-primary/80 backdrop-blur-md text-primary-foreground text-sm md:text-base font-medium max-w-[80%]">
          {question}
        </div>
      </div>
    </div>
  );
};

export default ConversationBridge;
