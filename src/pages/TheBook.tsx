import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";

const TheBook = () => (
  <>
    <SEOHead
      title="The Book — Brand Humanizing | Ferry Hoes"
      description="Brand Humanizing — the book by Ferry Hoes and Jonathan Flores. Available in Dutch. English edition launching soon."
      canonicalUrl="/the-book"
    />
    <SiteHeader />
    <main className="bg-background min-h-screen">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14 pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="max-w-3xl">
          <Eyebrow>The Book</Eyebrow>
          <h1
            className="font-display font-bold text-foreground leading-[1.02]"
            style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
          >
            We wrote the book on it. <span className="text-primary">Literally</span>
            <Period />
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
            Buy the Dutch edition, join the English waitlist, or download the press kit.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
            <PillButton
              href="https://brandhumanizingboek.nl"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Get the Dutch edition
            </PillButton>
            <PillButton to="/" variant="ghost" arrow={false}>
              ← Back home
            </PillButton>
          </div>
          <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background-alt border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Full page is being written. Check back soon.
            </span>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TheBook;
