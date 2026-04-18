import { ReactNode } from "react";

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: ReactNode;
  /** Rotation in degrees, -2 to +2 recommended */
  rotate?: number;
  className?: string;
  aspect?: "square" | "portrait" | "landscape";
  loading?: "eager" | "lazy";
}

/**
 * Editorial photo card. Soft white border, slight tilt, hover-straightens.
 * Caption renders in Caveat (handwritten) below the image.
 */
const Polaroid = ({
  src,
  alt,
  caption,
  rotate = -1,
  className = "",
  aspect = "landscape",
  loading = "lazy",
}: PolaroidProps) => {
  const clamped = Math.max(-2, Math.min(2, rotate));
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "portrait"
      ? "aspect-[4/5]"
      : "aspect-[4/3]";

  return (
    <figure
      className={`relative bg-card p-2 pb-2 shadow-polaroid transition-transform duration-500 ease-out hover:!rotate-0 ${className}`}
      style={{ transform: `rotate(${clamped}deg)` }}
    >
      <div className={`${aspectClass} overflow-hidden bg-muted relative group`}>
        <img
          src={src}
          alt={alt}
          loading={loading}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/[0.04] transition-colors duration-500" />
      </div>
      {caption && (
        <figcaption className="text-center mt-3 mb-1 font-handwritten text-2xl md:text-3xl text-foreground leading-tight">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Polaroid;
