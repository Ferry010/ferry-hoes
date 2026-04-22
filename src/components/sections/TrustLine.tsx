/**
 * Trust line — prominent editorial statement on homepage.
 * Big, confident, framed. Not a footer footnote.
 */
const TEAMS = [
  "Vodafone",
  "GSK",
  "Toshiba",
  "Atos",
  "Unilever",
  "ASR",
  "Chubb",
  "Dutch Ministry of Finance",
];

const TrustLine = () => (
  <section
    aria-label="Organisations Ferry has worked with"
    className="bg-ink-navy border-y border-border/60"
  >
    <div className="container max-w-[1280px] px-5 md:px-10 lg:px-14 py-8 md:py-14">
      <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary">
        • Teams I've worked with
      </span>
      <div
        className="mt-4 flex flex-wrap items-baseline gap-y-2 font-display font-semibold text-background leading-[1.2]"
        style={{ fontSize: "clamp(15px, 4.5vw, 30px)" }}
      >
        {TEAMS.map((name, i) => (
          <span key={name} className="inline-flex items-baseline">
            <span className="hover:text-primary transition-colors">{name}</span>
            {i < TEAMS.length - 1 && (
              <span className="text-primary/70 px-2 md:px-3" aria-hidden="true">
                /
              </span>
            )}
          </span>
        ))}
        <span className="text-primary" aria-hidden="true">
          .
        </span>
      </div>
    </div>
  </section>
);

export default TrustLine;
