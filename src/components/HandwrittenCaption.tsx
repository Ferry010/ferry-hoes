import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

/** Caveat handwritten note. Used 1–3× per page max. */
const HandwrittenCaption = ({ children, className = "", size = "md" }: Props) => {
  const sizeCls =
    size === "sm" ? "text-xl" : size === "lg" ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl";
  return (
    <p className={`font-handwritten ${sizeCls} text-foreground leading-tight ${className}`}>
      {children}
    </p>
  );
};

export default HandwrittenCaption;
