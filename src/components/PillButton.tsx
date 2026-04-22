import { forwardRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}

interface AsLinkProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
}

interface AsAnchorProps extends BaseProps {
  href: string;
  to?: never;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
}

interface AsButtonProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
  to?: never;
  href?: never;
  disabled?: boolean;
}

type PillButtonProps = AsLinkProps | AsAnchorProps | AsButtonProps;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[15px] tracking-tight px-5 sm:px-6 py-3 whitespace-nowrap transition-all duration-200 ease-out group focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-95 active:scale-[0.98]",
  ghost:
    "border border-foreground/80 text-foreground hover:bg-foreground hover:text-background active:scale-[0.98]",
};

const Inner = ({ children, arrow }: { children: ReactNode; arrow: boolean }) => (
  <>
    <span>{children}</span>
    {arrow && (
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    )}
  </>
);

const PillButton = forwardRef<HTMLElement, PillButtonProps>((props, ref) => {
  const { children, variant = "primary", arrow = true, className = "" } = props;
  const cls = `${baseStyles} ${variants[variant]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} to={props.to} className={cls}>
        <Inner arrow={arrow}>{children}</Inner>
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={props.href}
        target={(props as AsAnchorProps).target}
        rel={(props as AsAnchorProps).rel}
        className={cls}
      >
        <Inner arrow={arrow}>{children}</Inner>
      </a>
    );
  }

  const btn = props as AsButtonProps;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={btn.type ?? "button"}
      onClick={btn.onClick}
      disabled={btn.disabled}
      className={`${cls} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
});

PillButton.displayName = "PillButton";

export default PillButton;
