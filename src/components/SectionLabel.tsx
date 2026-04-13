interface SectionLabelProps {
  text: string;
  light?: boolean;
  center?: boolean;
}

const SectionLabel = ({ text, light = false, center = false }: SectionLabelProps) => (
  <div className={`flex items-center gap-2.5 mb-4 ${center ? "justify-center" : ""}`}>
    <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
    <span className={`text-xs font-medium uppercase tracking-[0.15em] ${light ? "text-accent" : "text-accent"}`}>
      {text}
    </span>
  </div>
);

export default SectionLabel;
