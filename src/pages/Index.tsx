import Hero from "@/components/sections/Hero";
import IntroBlock from "@/components/sections/IntroBlock";
import NowSection from "@/components/sections/NowSection";
import BookSection from "@/components/sections/BookSection";
import ContentGrid from "@/components/sections/ContentGrid";
import PodcastSection from "@/components/sections/PodcastSection";
import VideoSection from "@/components/sections/VideoSection";
import ToolkitSection from "@/components/sections/ToolkitSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import CommunitySection from "@/components/sections/CommunitySection";
import MiniAbout from "@/components/sections/MiniAbout";
import PersonalFooter from "@/components/sections/PersonalFooter";
import FloatingChatBubble from "@/components/FloatingChatBubble";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <IntroBlock />
      <NowSection />
      <BookSection />
      <ContentGrid />
      <PodcastSection />
      <VideoSection />
      <ToolkitSection />
      <SpeakingSection />
      <CommunitySection />
      <MiniAbout />
      <PersonalFooter />
      <FloatingChatBubble />
    </main>
  );
};

export default Index;
