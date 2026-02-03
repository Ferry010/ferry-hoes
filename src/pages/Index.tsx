import HeroVideo from "@/components/sections/HeroVideo";
import AboutBlock from "@/components/sections/AboutBlock";
import BrandHumanizingSection from "@/components/sections/BrandHumanizingSection";
import SpeakerSection from "@/components/sections/SpeakerSection";
import BookSection from "@/components/sections/BookSection";
import PodcastSection from "@/components/sections/PodcastSection";
import CommunitySection from "@/components/sections/CommunitySection";
import Footer from "@/components/sections/Footer";
import FloatingChatBubble from "@/components/FloatingChatBubble";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroVideo />
      <AboutBlock />
      <BrandHumanizingSection />
      <SpeakerSection />
      <BookSection />
      <PodcastSection />
      <CommunitySection />
      <Footer />
      <FloatingChatBubble />
    </main>
  );
};

export default Index;
