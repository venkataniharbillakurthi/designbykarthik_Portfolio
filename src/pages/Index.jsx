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
import { MessageCircle } from "lucide-react";
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
        href="https://wa.me/919381726944?text=Hello%20Karthik"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle size={20} />
       
      </a>
    </div>
  );
};

export default Index;
