import SEOHead from "@/components/blog/SEOHead";
import HeroVideo from "@/components/sections/HeroVideo";
import AboutBlock from "@/components/sections/AboutBlock";
import BrandHumanizingSection from "@/components/sections/BrandHumanizingSection";
import SpeakerSection from "@/components/sections/SpeakerSection";
import BookSection from "@/components/sections/BookSection";
import PodcastSection from "@/components/sections/PodcastSection";
import BlogSection from "@/components/sections/BlogSection";
import CommunitySection from "@/components/sections/CommunitySection";
import Footer from "@/components/sections/Footer";
import ConversationSection from "@/components/sections/ConversationSection";
import AskFerryBubble from "@/components/AskFerryBubble";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Ferry Hoes"
        description="Essays, insights, and perspectives on technology, humanity, and everything in between."
        ogType="website"
        canonicalUrl="/"
      />

      <div className="overflow-x-hidden relative">
        
        <header>
          <HeroVideo />
        </header>

        <main>
          <ConversationSection />
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
        <AskFerryBubble />
      </div>
    </>
  );
};

export default Index;
