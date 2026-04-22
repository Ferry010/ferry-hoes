/**
 * Trust line — prominent editorial statement on homepage.
 * Big, confident, framed. Not a footer footnote.
 */
const TEAMS = [
  "Vodafone",
  "GSK",
  "Toshiba",
  "Atos",
  "ASR",
  "Chubb",
  "Dutch Ministry of Finance",
];

const TrustLine = () => (
  <section
    aria-label="Organisations Ferry has worked with"
    className="bg-ink-navy border-y border-border/60"
  >
    <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14 py-16 md:py-24">
      <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary">
        • Teams I've worked with
      </span>
      <h2
        className="mt-5 font-display font-bold text-background leading-[1.05]"
        style={{ fontSize: "clamp(28px, 4.2vw, 56px)" }}
      >
        {TEAMS.map((name, i) => (
          <span key={name}>
            <span className="hover:text-primary transition-colors">{name}</span>
            {i < TEAMS.length - 1 && (
              <span className="text-primary mx-3 md:mx-4">/</span>
            )}
          </span>
        ))}
        <span className="text-primary">.</span>
      </h2>
    </div>
  </section>
);

export default TrustLine;
