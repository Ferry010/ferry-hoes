import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { personSchema, bookSchema, websiteSchema } from "@/components/StructuredData";
import HeroVideo from "@/components/sections/HeroVideo";
import AboutBlock from "@/components/sections/AboutBlock";
import BrandHumanizingSection from "@/components/sections/BrandHumanizingSection";
import SpeakerSection from "@/components/sections/SpeakerSection";
import BookSection from "@/components/sections/BookSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import PodcastSection from "@/components/sections/PodcastSection";
import BlogSection from "@/components/sections/BlogSection";
import CommunitySection from "@/components/sections/CommunitySection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Ferry Hoes | Keynote Speaker on AI, Technology & Brand Humanizing"
        description="Ferry Hoes is an international keynote speaker, author of Brand Humanizing, and host of The Human Era Podcast. Helping brands become more human through technology."
        ogType="website"
        canonicalUrl="/"
      />
      <StructuredData data={[personSchema, bookSchema]} />

      <div className="overflow-x-hidden relative">
        <header>
          <HeroVideo />
        </header>

        <main>
          <article>
            <AboutBlock />
          </article>
          <article>
            <BrandHumanizingSection />
          </article>
          <article>
            <SpeakerSection />
          </article>
          <article>
            <BookSection />
          </article>
          <NewsletterSection />
          <article>
            <PodcastSection />
          </article>
          <article>
            <BlogSection />
          </article>
          <article>
            <CommunitySection />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
