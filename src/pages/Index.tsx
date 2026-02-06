import HeroVideo from "@/components/sections/HeroVideo";
import AboutBlock from "@/components/sections/AboutBlock";
import BrandHumanizingSection from "@/components/sections/BrandHumanizingSection";
import SpeakerSection from "@/components/sections/SpeakerSection";
import BookSection from "@/components/sections/BookSection";
import PodcastSection from "@/components/sections/PodcastSection";
import BlogSection from "@/components/sections/BlogSection";
import CommunitySection from "@/components/sections/CommunitySection";
import Footer from "@/components/sections/Footer";
import FloatingChatBubble from "@/components/FloatingChatBubble";

const Index = () => {
  return (
    <main className="overflow-x-hidden relative">
      {/* Continuous visual thread - vertical gradient stripe */}
      <div 
        className="fixed left-0 top-0 w-1 h-full z-50 pointer-events-none"
        style={{
          background: `linear-gradient(
            180deg,
            hsl(var(--brand-gold)) 0%,
            hsl(var(--accent)) 25%,
            hsl(var(--primary)) 50%,
            hsl(var(--accent)) 75%,
            hsl(var(--brand-gold)) 100%
          )`
        }}
      />
      
      {/* Floating decorative orbs that span sections */}
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-2/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0" />
      
      <HeroVideo />
      <AboutBlock />
      <BrandHumanizingSection />
      <SpeakerSection />
      <BookSection />
      <PodcastSection />
      <BlogSection />
      <CommunitySection />
      <Footer />
      <FloatingChatBubble />
    </main>
  );
};

export default Index;
