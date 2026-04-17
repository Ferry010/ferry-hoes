interface PeriodProps {
  className?: string;
}

/**
 * The Ferry signature period: an orange full stop that closes every H1/H2.
 * Renders as inline text (a real ".") so it remains crawlable and readable.
 */
export const Period = ({ className = "" }: PeriodProps) => (
  <span aria-hidden="true" className={`text-primary ${className}`}>
    .
  </span>
);

interface EyebrowProps {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
}

/**
 * Editorial eyebrow label: solid orange dot + uppercase tracked label.
 * Use above every H1/H2 across the site.
 */
export const Eyebrow = ({ children, center = false, light = false, className = "" }: EyebrowProps) => (
  <div
    className={`flex items-center gap-2.5 mb-5 ${center ? "justify-center" : ""} ${className}`}
  >
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
    <span
      className={`text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.14em] ${
        light ? "text-primary" : "text-primary"
      }`}
    >
      {children}
    </span>
  </div>
);

/**
 * Legacy default export — kept for backward compatibility.
 * Prefer <Period /> for closing headlines and <Eyebrow> for section labels.
 */
interface HeadingDotProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const HeadingDot = ({ size = "md", className = "" }: HeadingDotProps) => {
  const sizeClass =
    size === "sm" ? "w-1.5 h-1.5" : size === "lg" ? "w-3 h-3" : "w-2 h-2";
  return (
    <span
      className={`inline-block ${sizeClass} bg-primary rounded-full ml-1.5 mb-1 align-baseline ${className}`}
      aria-hidden="true"
    />
  );
};

export default HeadingDot;
