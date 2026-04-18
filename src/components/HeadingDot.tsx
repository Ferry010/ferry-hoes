interface EyebrowProps {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
  as?: "div" | "p" | "span";
}

/**
 * Editorial eyebrow: terracotta bullet + uppercase tracked label.
 * Use above every H1/H2 across the site.
 */
export const Eyebrow = ({
  children,
  center = false,
  className = "",
  as = "p",
}: EyebrowProps) => {
  const Tag = as as any;
  return (
    <Tag
      className={`text-[12px] font-medium uppercase tracking-[0.15em] text-terracotta mb-5 ${
        center ? "text-center" : ""
      } ${className}`}
    >
      <span aria-hidden="true">•</span>{" "}
      <span>{children}</span>
    </Tag>
  );
};

/**
 * Legacy <Period /> kept as a no-op so older imports do not break the build.
 * The new headline formula uses bold words inside the headline, not orange dots.
 */
export const Period = () => null;

interface HeadingDotProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/** Legacy default — renders nothing. The new headline formula uses bold words, not orange dots. */
const HeadingDot = (_: HeadingDotProps = {}) => null;
export default HeadingDot;
