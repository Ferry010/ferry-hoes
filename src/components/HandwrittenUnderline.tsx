import { cn } from "@/lib/utils";

interface HandwrittenUnderlineProps {
  children: React.ReactNode;
  className?: string;
  color?: "accent" | "primary";
}

const HandwrittenUnderline = ({ 
  children, 
  className,
  color = "accent" 
}: HandwrittenUnderlineProps) => {
  const colorClass = color === "accent" ? "stroke-accent" : "stroke-primary";
  
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <svg
        className={cn("absolute -bottom-2 left-0 w-full h-3", colorClass)}
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8 C 20 4, 40 10, 60 6 S 85 8, 98 5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        />
      </svg>
    </span>
  );
};

export default HandwrittenUnderline;
