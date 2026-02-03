import Hero from "@/components/sections/Hero";
import ThreePillars from "@/components/sections/ThreePillars";
import ContentGrid from "@/components/sections/ContentGrid";
import PodcastSection from "@/components/sections/PodcastSection";
import CommunitySection from "@/components/sections/CommunitySection";
import Footer from "@/components/sections/Footer";
import FloatingChatBubble from "@/components/FloatingChatBubble";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ThreePillars />
      <PodcastSection />
      <ContentGrid />
      <CommunitySection />
      <Footer />
      <FloatingChatBubble />
    </main>
  );
};

export default Index;
