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
import PrintMediaPortfolio from "@/components/PrintMediaPortfolio";
import ExperiencePresence from "@/components/ExperiencePresence";
import Footer from "@/components/footer";
const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <BrandingSection />
      <SocialMediaSection />
       <UIUXSection />
       <PrintMediaPortfolio />
       <ExperiencePresence />
       <Footer />

      <a
        href="https://wa.me/919381726944?text=Hi%20Karthik%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you.%20Can%20we%20discuss%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-[60] block transition-transform hover:scale-105"
      >
        <img
          src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1776947529/whatsapp_ezry29.png"
          alt="WhatsApp"
          className="h-14 w-14 rounded-full shadow-xl"
        />
      </a>
    </div>
  );
};

export default Index;
