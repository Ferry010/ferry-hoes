import { Eyebrow } from "./HeadingDot";

interface SectionLabelProps {
  text: string;
  light?: boolean;
  center?: boolean;
}

/**
 * Backward-compatible wrapper around <Eyebrow />.
 * New code should use <Eyebrow> directly.
 */
const SectionLabel = ({ text, light = false, center = false }: SectionLabelProps) => (
  <Eyebrow center={center} light={light}>
    {text}
  </Eyebrow>
);

export default SectionLabel;
