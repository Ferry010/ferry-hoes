import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { personSchema, bookSchema, websiteSchema } from "@/components/StructuredData";
import Hero from "@/components/sections/Hero";
import CredentialsStrip from "@/components/sections/CredentialsStrip";
import TrustLine from "@/components/sections/TrustLine";
import ThreeRoads from "@/components/sections/ThreeRoads";
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
        description="Ferry Hoes writes, speaks, and podcasts about one idea: technology should make us more human, not less. Articles, the book Brand Humanizing, The Human Era Podcast, and keynotes."
        ogType="website"
        canonicalUrl="/"
      />
      <StructuredData data={[personSchema, bookSchema, websiteSchema]} />


      <div className="overflow-x-hidden relative">
        <header>
          <Hero />
        </header>

        <CredentialsStrip />
        <TrustLine />

        <main>
          <article><ThreeRoads /></article>
          <article><BlogSection /></article>
          <article><PodcastSection /></article>
          <AlsoByFerry />
          <CommunitySection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
