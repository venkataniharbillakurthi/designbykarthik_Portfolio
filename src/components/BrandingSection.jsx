import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BrandingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mockups = [
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431618/ipad-pro-mockup_1_2_vo766r.png",
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431618/Screenshot_2025-10-30_131241_1_1_jyohwd.png",
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431618/Mouck_up_1_1_1_ikt5nu.png",
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431618/HUxSWqZm3J6_1_1_zxxxwx.png"
  ];

  return (
    <section id="branding" className="bg-white py-16 px-6 md:px-24 -ml-20" ref={ref}>
      <div className="max-w-[1280px] mx-auto relative">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          
          {/* LEFT: PRIMARY BRANDING MOODBOARD */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <div className="rounded-[24px]  p-4">
              <img 
                src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431619/ViQantAI_Moodboard_1_1_ccwnrf.png" 
                alt="ViQantAI Moodboard" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT: CONTENT & MOCKUPS */}
          <div className="md:col-span-6 flex flex-col h-full justify-between relative ">
            <div>
              {/* Header Text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="mb-10"
              >
                <h1 className="font-bold text-black tracking-tighter leading-none" style={{ fontSize: 'clamp(60px, 10vw, 100px)' }}>
                  BRANDING
                </h1>
                <p className="text-gray-500  md:text-[16px] mt-3 font-medium ">
                  Logos, identity systems, and visual direction for modern brands.
                </p>
              </motion.div>

              {/* Mockup Image Grid */}
              <div className="grid grid-cols-2 gap-6">
                {mockups.map((url, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="rounded-[18px] overflow-hidden aspect-[6/5]"
                  >
                    <img src={url} alt={`Mockup ${i + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* REFINED ARROW BUTTON: Centered and Aligned Right */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 right-0 md:-right-20"
            >
              <div className="relative cursor-pointer hover:scale-110 transition-transform flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431617/Button_18_1_w7jewn.png" 
                  alt="Navigation Arrow" 
                  className="w-32 h-32 md:w-16 md:h-9"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-14 relative h-10 w-screen left-2/2 ">
        <div className="absolute right-0 w-[85%] flex items-center">
          <img 
            src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431617/Line_299_wbbpgf.png" 
            alt="Timeline" 
            className="w-full h-auto opacity-80"
          />
          
          
        </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;