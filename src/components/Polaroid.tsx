import { ReactNode } from "react";

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: ReactNode;
  /** Rotation in degrees, -3 to +3 recommended */
  rotate?: number;
  className?: string;
  aspect?: "square" | "portrait" | "landscape";
  /** CSS object-position for the photo, e.g. "70% 30%" */
  objectPosition?: string;
  loading?: "eager" | "lazy";
}

/**
 * Polaroid card: white-bordered photo, slight tilt, hover-straightens.
 * Optional handwritten caption in navy ink (Caveat).
 */
const Polaroid = ({
  src,
  alt,
  caption,
  rotate = -1.5,
  className = "",
  aspect = "landscape",
  objectPosition,
  loading = "lazy",
}: PolaroidProps) => {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "portrait"
      ? "aspect-[4/5]"
      : "aspect-[4/3]";

  return (
    <div
      className={`relative bg-white p-2.5 pb-8 shadow-polaroid transition-transform duration-300 ease-out hover:!rotate-0 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className={`${aspectClass} overflow-hidden bg-muted`}>
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={`w-full h-full object-cover ${objectPosition ? "" : "object-top"}`}
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
      {caption && (
        <p className="text-center mt-3 font-handwritten text-xl md:text-2xl text-ink-navy leading-tight">
          {caption}
        </p>
      )}
    </div>
  );
};

export default Polaroid;
