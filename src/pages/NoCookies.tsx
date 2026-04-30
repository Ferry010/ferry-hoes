import { Helmet } from "react-helmet-async";
import Footer from "@/components/sections/Footer";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";

const NoCookies = () => {
  return (
    <>
      <Helmet>
        <title>The No-Cookies Cookie Policy | Ferry Hoes</title>
        <meta
          name="description"
          content="I don't use tracking cookies. Here's why I treat visitors like humans, not datapoints."
        />
        <link rel="canonical" href="https://ferryhoes.com/no-cookies" />
      </Helmet>

      <main className="bg-background min-h-screen">
        <div className="container max-w-3xl px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
          {/* Hero */}
          <section className="text-center mb-16 md:mb-20">
            <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
              <span className="text-7xl" role="img" aria-label="cookie">
                🍪
              </span>
              <svg
                className="absolute inset-0 w-24 h-24"
                viewBox="0 0 96 96"
                fill="none"
                aria-hidden="true"
              >
                <line
                  x1="16"
                  y1="16"
                  x2="80"
                  y2="80"
                  stroke="hsl(var(--primary))"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <Eyebrow center>Policy</Eyebrow>
            <h1
              className="font-display font-bold text-foreground leading-[1.05]"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              The no-cookies cookie <span className="text-primary">policy</span>
              <Period />
            </h1>
            <p className="font-handwritten text-2xl md:text-3xl text-ink-navy mt-6">
              Yes, this is a real policy. No, there are no cookies.
            </p>
          </section>

          {/* The declaration */}
          <section className="border-l-4 border-primary pl-6 md:pl-8 py-2 mb-16 md:mb-20">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              I don't use tracking cookies. I have no idea what you're doing on
              this website, because I can't follow you around. This is a
              conscious decision — if I invited you to my office, I wouldn't
              tail your every move either.
            </p>
          </section>

          {/* Visitor counter joke */}
          <section className="flex justify-center mb-16 md:mb-20">
            <div className="bg-background-alt border border-border rounded-2xl px-8 py-6 text-center">
              <p className="text-foreground/40 text-xs uppercase tracking-[0.18em] font-semibold mb-2">
                Visitor count
              </p>
              <p className="text-5xl md:text-6xl font-display font-bold text-primary">
                ?
              </p>
              <p className="text-foreground/50 text-sm mt-2 max-w-xs">
                You could be my 10,000th visitor and I wouldn't have a clue.
              </p>
            </div>
          </section>

          {/* Where this comes from */}
          <section className="mb-16 md:mb-20 space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Where this comes from{" "}
              <span className="text-primary" role="img" aria-label="cookie">
                🍪
              </span>
            </h2>
            <p className="text-foreground/75 leading-relaxed text-lg">
              It started back when Jonathan and I were Growth Hackers. Our
              daily job was to optimise websites, forms and shops — using tools
              like Google Analytics and Hotjar to measure every move anyone
              made. We were{" "}
              <span className="text-primary font-semibold">
                "optimising datapoints"
              </span>
              .
            </p>
            <p className="text-foreground/75 leading-relaxed text-lg">
              But while we were coining "Brand Humanizing", we realised that
              "datapoint" actually meant <em>people</em>. Humans. Not entities
              to be optimised, but human beings who took time out of their day
              to visit our website, store, or product.
            </p>
          </section>

          {/* Big realization callout */}
          <section className="mb-16 md:mb-20 bg-primary/10 rounded-3xl p-8 md:p-12 text-center">
            <p className="font-display text-2xl md:text-3xl font-bold leading-snug text-foreground">
              We were optimising datapoints.
              <br />
              <span className="text-primary">But datapoints were people.</span>
            </p>
          </section>

          {/* The decision */}
          <section className="mb-16 md:mb-20 space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              The decision
            </h2>
            <p className="text-foreground/75 leading-relaxed text-lg">
              When I built this site, I asked myself: what would knowing all
              that data actually bring me? Sure, I could optimise for more
              clicks, watch heatmaps of you scrolling, A/B-test myself into
              oblivion. But would it bring us closer? No. It would just make
              the relationship more transactional.
            </p>
            <p className="text-foreground/75 leading-relaxed text-lg">
              And that's just not who I am.
            </p>
          </section>

          {/* The policy */}
          <section className="mb-16 md:mb-20">
            <div className="border-l-4 border-primary pl-6 md:pl-8 py-2 mb-6">
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
                And thus: no cookies.{" "}
                <span role="img" aria-label="no cookie">
                  🚫🍪
                </span>
              </p>
            </div>
            <p className="text-foreground/75 leading-relaxed text-lg">
              Out here, you're completely anonymous. I won't even know you
              were here until you decide to reach out. Don't get me wrong — I
              love data and tech as much as the next person. But all in good
              use, and with a purpose. Following people around online and
              treating them as datapoints just isn't mine.
            </p>
          </section>

          {/* Sign-off */}
          <section className="text-center pt-4 pb-8">
            <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              So see you around
              <Period />
            </p>
            <p className="text-foreground/50 text-lg mb-10">
              Or not, who knows!{" "}
              <span role="img" aria-label="shrug">
                🤷
              </span>
            </p>
            <PillButton to="/" variant="primary">
              Back home
            </PillButton>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NoCookies;
