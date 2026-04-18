/**
 * Plain-text trust line — replaces logo wall on homepage.
 * Reads as grown-up. Single muted sentence, no graphics.
 */
const TrustLine = () => (
  <section
    aria-label="Organisations Ferry has worked with"
    className="bg-background border-t border-border/60"
  >
    <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14 py-8 md:py-10">
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">
        Trusted by teams at Vodafone, GSK, Toshiba, Atos, ASR, Chubb, and the
        Dutch Ministry of Finance.
      </p>
    </div>
  </section>
);

export default TrustLine;
