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
import AskFerryBubble from "@/components/AskFerryBubble";
import ConversationBridge from "@/components/ConversationBridge";

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
          <ConversationBridge question="Wait, who are you?" id="conversation-continue" />
          <article>
            <AboutBlock />
          </article>
          <ConversationBridge question="So what exactly is Brand Humanizing?" />
          <article>
            <BrandHumanizingSection />
          </article>
          <ConversationBridge question="Can I see you in action?" />
          <article>
            <SpeakerSection />
          </article>
          <ConversationBridge question="Is there a book?" />
          <article>
            <BookSection />
          </article>
          <ConversationBridge question="Got a podcast too?" />
          <article>
            <PodcastSection />
          </article>
          <ConversationBridge question="What else are you thinking about?" />
          <article>
            <BlogSection />
          </article>
          <ConversationBridge question="How do I stay in the loop?" />
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
