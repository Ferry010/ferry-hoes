interface HeadingDotProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * The Ferry signature: a small coral dot that closes every h1/h2.
 * Mirrors the brand mark used across brandhumanizing.com and aigeletterdheid.academy.
 */
const HeadingDot = ({ size = "md", className = "" }: HeadingDotProps) => {
  const sizeClass =
    size === "sm" ? "w-1.5 h-1.5" : size === "lg" ? "w-3 h-3" : "w-2 h-2";
  return (
    <span
      className={`inline-block ${sizeClass} bg-accent rounded-full ml-1.5 mb-1 align-baseline ${className}`}
    />
  );
};

export default HeadingDot;
