import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  attribution?: string;
  className?: string;
}

/** Oversized Fraunces italic pull quote with terracotta opening glyph. */
const PullQuote = ({ children, attribution, className = "" }: Props) => (
  <figure className={`my-12 md:my-16 max-w-[640px] mx-auto text-center ${className}`}>
    <span
      aria-hidden="true"
      className="block font-display italic text-terracotta leading-none"
      style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
    >
      “
    </span>
    <blockquote
      className="font-display italic text-foreground leading-[1.2] -mt-2"
      style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}
    >
      {children}
    </blockquote>
    {attribution && (
      <figcaption className="mt-5 text-sm text-muted-foreground tracking-tight">
        — {attribution}
      </figcaption>
    )}
  </figure>
);

export default PullQuote;
