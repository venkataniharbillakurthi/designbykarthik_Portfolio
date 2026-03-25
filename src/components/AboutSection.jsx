import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Strategy First",
      description: "Every design starts with understanding the business, audience, and goal - not just visuals.",
    },
    {
      title: "Built For Impact",
      description: "Designs that capture attention, communicate clearly, and drive action.",
    },
    {
      title: "Growth Focused",
      description: "From branding to digital, everything is crafted to support real business growth.",
    },
  ];

  return (
    <section id="about" className="relative bg-white py-20 overflow-hidden" ref={ref}>
      {/* Full-width container keeps right image untouched and left content responsive */}
      <div className="w-full pl-6 md:pl-10 lg:pl-16">
        
        {/* TOP SECTION: BIG BOLD HEADLINE */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="uppercase mb-10 text-black tracking-normal"
          style={{
            fontFamily: "Impact, sans-serif",
            fontSize: "clamp(40px, 5vw, 50px)",
            lineHeight: "1.1",
          }}
        >
          Design that delivers, not just decorates.
        </motion.h2>

        {/* MAIN CONTENT GRID: Uses flex for precise alignment */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          
          {/* LEFT COLUMN: FEATURES & SKILLS */}
          <div className="w-full md:w-[45%] pr-6 md:pr-0">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  className="border-b-[1.5px] border-black/20 pb-8"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-black text-lg md:text-xl max-w-md leading-snug">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* SOFTWARE ICONS SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-16 flex flex-wrap gap-12"
            >
              <div>
                <h4 className="text-xl font-bold text-black mb-4  tracking-tight">Adobe</h4>
                <div className="flex items-center gap-4">
                  {[
                    "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774249019/Layer_2_1_uxmtqh.png",
                    "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774249018/Illustrator_z95cb5.png",
                    "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774249018/Premiere_Pro_aeyg7u.png",
                    "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774249019/Lightroom_sbeztw.png"
                  ].map((src, i) => (
                    <img key={i} src={src} alt="Adobe tool" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-black mb-4  tracking-tight">Others</h4>
                <div className="flex items-center gap-4">
                  {[
                    "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774249019/Frame_45_uo58gy.png",
                    "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774249019/Frame_45_1_y6i24r.png"
                  ].map((src, i) => (
                    <img key={i} src={src} alt="Design tool" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: IMAGE & BIO (Touches screen edge) */}
          <div className="w-full md:w-[52%] mt-16 md:mt-0 flex flex-col items-start ">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full"
            >
              {/* Profile Image with Rounded Top-Left */}
              <div className="rounded-tl-[150px] md:rounded-tl-[160px] -mt-[100px] md:-mt-16">
                <img
                  src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774001475/IMAGE_jx5mts.png"
                  alt="Karthik Beera"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BIO CONTENT BLOCK */}
              <div className="mt-8 px-4 md:px-0 max-w-[578px]">
                <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-4">
                  <h1 
                    className="text-black uppercase leading-[0.85] tracking-tighter"
                    style={{
                      fontFamily: "Impact, sans-serif",
                      fontSize: "clamp(70px, 9vw, 110px)",
                    }}
                  >
                    HELLO!
                  </h1>
                  <div className="pb-1">
                    <p className="text-2xl md:text-4xl font-black text-black leading-none">I’m Karthik</p>
                    <p className="text-sm md:text-base font-bold text-black/60 uppercase tracking-widest mt-1">
                      Brand & Visual Designer
                    </p>
                  </div>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="text-black text-lg md:text-[24px] leading-relaxed font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Helping businesses build strong brands and high-impact visuals that drive growth.
                </motion.p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;