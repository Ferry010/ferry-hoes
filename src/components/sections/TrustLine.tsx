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
    className="bg-ink-navy border-y border-border/60 overflow-hidden"
  >
    <div className="container max-w-[1280px] px-5 md:px-10 lg:px-14 py-8 md:py-14">
      <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary">
        • Teams I've worked with
      </span>
      <div
        className="mt-4 flex flex-wrap items-baseline gap-y-2 font-display font-semibold text-background leading-[1.15] max-w-full"
        style={{ fontSize: "clamp(18px, 4.6vw, 40px)" }}
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
      <p className="mt-6">
        <a
          href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-background/70 hover:text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
        >
          Want to join this list?
        </a>
      </p>
    </div>
  </section>
);

export default TrustLine;
