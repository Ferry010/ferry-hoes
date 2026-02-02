import Hero from "@/components/sections/Hero";
import IntroBlock from "@/components/sections/IntroBlock";
import BookSection from "@/components/sections/BookSection";
import ContentGrid from "@/components/sections/ContentGrid";
import PodcastSection from "@/components/sections/PodcastSection";
import VideoSection from "@/components/sections/VideoSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import CommunitySection from "@/components/sections/CommunitySection";
import MiniAbout from "@/components/sections/MiniAbout";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <IntroBlock />
      <BookSection />
      <ContentGrid />
      <PodcastSection />
      <VideoSection />
      <SpeakingSection />
      <CommunitySection />
      <MiniAbout />
      <Footer />
    </main>
  );
};

export default Index;