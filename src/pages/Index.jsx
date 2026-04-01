import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/UIUXSection";
import ProjectsSection from "@/components/SocialMediaSection";
import ContactSection from "@/components/ContactSection";
import CategoriesSection from "@/components/CategoriesSection";
import BrandingSection from "@/components/BrandingSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import UIUXSection from "@/components/UIUXSection";
const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <BrandingSection />
      <SocialMediaSection />
      {/* <UIUXSection /> */}
    </div>
  );
};

export default Index;
