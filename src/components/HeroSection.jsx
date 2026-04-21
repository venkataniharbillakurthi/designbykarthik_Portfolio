import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen -mt-20 md:-mt-24 flex flex-col items-center justify-center text-white px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat md:hidden"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1776332292/iPhone_16_17_Pro_-_2_2_alqdfx.png")',
        }}
      />
      <div
        className="absolute inset-0 hidden bg-center bg-cover bg-no-repeat md:block"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1776331946/SECTION_1_dxiha0.png")',
        }}
      />
      <div className="absolute inset-0 bg-black/35" />

      {/* Background Subtle Gradient Blobs (Optional - keep for depth or remove for pure black) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-Bricolage Grotesque - SemiBold"
        >
          Built to <span className="text-[#A1FF00]">stand out</span>. Not to blend in.
        </motion.h1>


        {/* Description Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-[20px] md:text-[28px] text-gray-400 font-light max-w-4xl leading-relaxed font-Bricolage Grotesque - SemiBold"
        >
         Branding, visuals & digital experiences that drive real growth.
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;