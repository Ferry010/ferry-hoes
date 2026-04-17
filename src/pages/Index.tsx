import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { personSchema, bookSchema, websiteSchema } from "@/components/StructuredData";
import HeroVideo from "@/components/sections/HeroVideo";
import QuickFacts from "@/components/sections/QuickFacts";
import ClientLogos from "@/components/sections/ClientLogos";
import AboutBlock from "@/components/sections/AboutBlock";
import BrandHumanizingSection from "@/components/sections/BrandHumanizingSection";
import SpeakerSection from "@/components/sections/SpeakerSection";
import BookSection from "@/components/sections/BookSection";
import PodcastSection from "@/components/sections/PodcastSection";
import BlogSection from "@/components/sections/BlogSection";
import AboutFerryLLM from "@/components/sections/AboutFerryLLM";
import CommunitySection from "@/components/sections/CommunitySection";
import Footer from "@/components/sections/Footer";

const SectionDivider = () => (
  <div className="max-w-xs mx-auto border-t border-border" />
);

const Index = () => {
  return (
    <>
      <SEOHead
        title="Keynote Speaker on AI & Brand Humanizing | Ferry Hoes"
        description="Ferry Hoes is an international keynote speaker on AI, technology, and Brand Humanizing. Trusted by Vodafone, GlaxoSmithKline, and Toshiba. Book for your next conference or corporate event."
        ogType="website"
        canonicalUrl="/"
      />
      <StructuredData data={[personSchema, bookSchema, websiteSchema]} />

      <div className="overflow-x-hidden relative">
        <header>
          <HeroVideo />
        </header>

        <QuickFacts />
        <ClientLogos />

        <main>
          <article>
            <AboutBlock />
          </article>
          <SectionDivider />
          <article>
            <BrandHumanizingSection />
          </article>
          <article>
            <SpeakerSection />
          </article>
          <SectionDivider />
          <article>
            <BookSection />
          </article>
          <SectionDivider />
          <article>
            <PodcastSection />
          </article>
          <SectionDivider />
          <article>
            <BlogSection />
          </article>
          <AboutFerryLLM />
          <CommunitySection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
