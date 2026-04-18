import { forwardRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "ghost";
type Size = "default" | "sm";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  external?: boolean;
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

type ActionButtonProps = AsLinkProps | AsAnchorProps | AsButtonProps;

const sizes: Record<Size, string> = {
  default: "px-6 py-3.5 text-[12px]",
  sm: "px-4 py-2.5 text-[11px]",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background border border-foreground hover:bg-accent hover:border-accent",
  ghost:
    "text-foreground border-b border-foreground/40 pb-1 px-0 py-0 hover:border-accent hover:text-accent",
};

const Inner = ({ children, arrow }: { children: ReactNode; arrow: boolean }) => (
  <>
    <span>{children}</span>
    {arrow && (
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    )}
  </>
);

const ActionButton = forwardRef<HTMLElement, ActionButtonProps>((props, ref) => {
  const {
    children,
    variant = "primary",
    size = "default",
    arrow = true,
    className = "",
    external = false,
  } = props;

  const cls =
    variant === "ghost"
      ? `group ${baseStyles} ${variants.ghost} ${className}`
      : `group ${baseStyles} ${sizes[size]} ${variants.primary} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} to={props.to} className={cls}>
        <Inner arrow={arrow}>{children}</Inner>
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const a = props as AsAnchorProps;
    const target = a.target ?? (external ? "_blank" : undefined);
    const rel = a.rel ?? (external ? "noopener noreferrer" : undefined);
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={a.href}
        target={target}
        rel={rel}
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

ActionButton.displayName = "ActionButton";
export default ActionButton;
