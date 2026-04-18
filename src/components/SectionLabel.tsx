import { Eyebrow } from "./HeadingDot";

interface SectionLabelProps {
  text: string;
  /** Deprecated — kept for back-compat. */
  light?: boolean;
  center?: boolean;
}

/**
 * Backward-compatible wrapper around <Eyebrow />.
 * New code should use <Eyebrow> directly.
 */
const SectionLabel = ({ text, center = false }: SectionLabelProps) => (
  <Eyebrow center={center}>{text}</Eyebrow>
);

export default SectionLabel;
