import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { personSchema, bookSchema, websiteSchema } from "@/components/StructuredData";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/sections/Hero";
import TrustLine from "@/components/sections/TrustLine";
import BrandHumanizingSection from "@/components/sections/BrandHumanizingSection";
import AboutBlock from "@/components/sections/AboutBlock";
import SpeakerSection from "@/components/sections/SpeakerSection";
import BookSection from "@/components/sections/BookSection";
import PodcastSection from "@/components/sections/PodcastSection";
import BlogSection from "@/components/sections/BlogSection";
import AlsoByFerry from "@/components/sections/AlsoByFerry";
import CommunitySection from "@/components/sections/CommunitySection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Ferry Hoes — Keynote Speaker, Author of Brand Humanizing"
        description="Most people make AI complicated. Ferry Hoes makes it human. International keynote speaker, author of Brand Humanizing, host of The Human Era Podcast."
        ogType="website"
        canonicalUrl="/"
      />
      <StructuredData data={[personSchema, bookSchema, websiteSchema]} />

      <SiteHeader />

      <div className="overflow-x-hidden relative">
        <header>
          <Hero />
        </header>

        <TrustLine />

        <main>
          <article><BrandHumanizingSection /></article>
          <article><AboutBlock /></article>
          <article><SpeakerSection /></article>
          <article><BookSection /></article>
          <article><PodcastSection /></article>
          <article><BlogSection /></article>
          <AlsoByFerry />
          <CommunitySection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
