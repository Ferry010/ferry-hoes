import { Link } from "react-router-dom";

/**
 * Credentials strip — magazine byline row directly below the hero.
 * Four identity links separated by pipes, framed by hairline rules.
 */
const CredentialsStrip = () => {
  const items = [
    {
      label: (
        <>International Keynote Speaker</>
      ),
      to: "/on-stage",
      external: false,
    },
    {
      label: (
        <>Author of <em className="not-italic md:italic">Brand Humanizing</em></>
      ),
      to: "/the-book",
      external: false,
    },
    {
      label: (
        <>Host of <em className="not-italic md:italic">The Human Era Podcast</em></>
      ),
      to: "/podcast",
      external: false,
    },
    {
      label: <>Co-founder of Brand Humanizing Institute</>,
      to: "https://brandhumanizing.com",
      external: true,
    },
  ];

  const linkClasses =
    "text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground/70 hover:text-primary transition-colors";

  return (
    <section
      aria-label="Credentials"
      className="bg-background border-y border-border/60 py-4 md:py-5"
    >
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:gap-x-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-x-3 md:gap-x-5">
              {item.external ? (
                <a
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  {item.label}
                </a>
              ) : (
                <Link to={item.to} className={linkClasses}>
                  {item.label}
                </Link>
              )}
              {i < items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-foreground/30 text-xs select-none"
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsStrip;
