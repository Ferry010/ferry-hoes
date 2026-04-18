interface RuleLineProps {
  className?: string;
}

/** Magazine-style 1px divider in --border. */
const RuleLine = ({ className = "" }: RuleLineProps) => (
  <hr className={`border-0 border-t border-border ${className}`} />
);

export default RuleLine;
