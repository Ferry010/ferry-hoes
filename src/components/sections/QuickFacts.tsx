/**
 * Thin proof strip directly under the hero.
 * Gives corporate bookers the essentials in <5 seconds.
 */
const facts = [
  "100+ keynotes",
  "12 countries",
  "EN / NL",
  "Available 2026",
];

const QuickFacts = () => {
  return (
    <section
      aria-label="Quick facts about Ferry Hoes"
      className="bg-primary text-primary-foreground"
    >
      <div className="container px-6 md:px-8 py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10 text-xs md:text-sm font-medium tracking-wide">
          {facts.map((fact, i) => (
            <li key={fact} className="flex items-center gap-6 md:gap-10">
              <span>{fact}</span>
              {i < facts.length - 1 && (
                <span aria-hidden className="hidden md:inline text-primary-foreground/40">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QuickFacts;
