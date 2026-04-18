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
        title="Ferry Hoes, Keynote Speaker, Author of Brand Humanizing"
        description="Ferry Hoes writes, speaks, and podcasts about one idea: technology should make us more human, not less. Essays, the book Brand Humanizing, The Human Era Podcast, and keynotes."
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
          <article><BlogSection /></article>
          <article><BookSection /></article>
          <article><SpeakerSection /></article>
          <article><PodcastSection /></article>
          <article><BrandHumanizingSection /></article>
          <article><AboutBlock /></article>
          <AlsoByFerry />
          <CommunitySection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
