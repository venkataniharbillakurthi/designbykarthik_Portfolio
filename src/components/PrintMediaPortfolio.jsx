import React from 'react';
import { motion } from 'framer-motion';

const PrintMediaPortfolio = () => {
  const images = {
    leftImageUrl: "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1776334816/IMG_4198.JPG_1_zibgg1.png",
    centerBottomImageUrl: "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1776334816/IMG_4198.JPG_2_wyuqol.png",
    rightTopImageUrl: "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1776334816/Firefly_Clean_and_enhance_this_building_banner_photograph_while_strictly_preserving_the_origi_415749_1_dm2wm6.png",
    rightBottomImageUrl: "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1776334816/Firefly_Gemini_Flash_Create_a_realistic_restaurant_menu_mockup_using_the_provided_design_as-is_without_al_315008_1_tqev3s.png",
  };

  return (
    <section className="overflow-hidden bg-white px-4  md:px-12 ">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Header */}
        <div className=" text-right md:text-right lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2 font-bold leading-none tracking-tighter text-black"
            style={{ fontSize: "clamp(40px, 8vw, 80px)" }}
          >
            PRINT MEDIA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="ml-auto mr-0 max-w-3xl text-sm font-medium leading-relaxed text-black/70 md:text-[18px] lg:mx-0"
          >
            Designing high-impact print materials that communicate clearly and stand out in real spaces.
          </motion.p>
        </div>

        {/* Portfolio Container: Kept as flex-row even on mobile */}
        <div className="relative mx-auto flex flex-row items-end justify-center gap-1 md:gap-2">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-[34%] z-30 mb-6 md:mb-24 mr-[-6%] md:mr-[-10%]" 
          >
            <div className="overflow-hidden rounded-[12px] md:rounded-[24px] shadow-2xl">
              <img
                src={images.leftImageUrl}
                alt="Left Project"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-[34%] z-20" 
          >
            <div className="overflow-hidden ">
              <img
                src={images.centerBottomImageUrl}
                alt="Center Project"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE STACK */}
          <div className="w-[48%] flex flex-col gap-1 md:gap-2 z-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[8px] md:rounded-[15px] "
            >
              <img
                src={images.rightTopImageUrl}
                alt="Right Top"
                className="w-full h-auto aspect-[16/9] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="overflow-hidden rounded-[8px] md:rounded-[15px] "
            >
              <img
                src={images.rightBottomImageUrl}
                alt="Right Bottom"
                className="w-full h-auto aspect-[16/9] object-cover"
              />
            </motion.div>
          </div>

        </div>

        {/* Timeline Footer */}
        <div className="mt-8 md:mt-10 relative h-10 w-full overflow-hidden">
          <div className="absolute left-0 w-[95%] md:w-[85%] flex items-center">
            <img 
              src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431617/Line_299_wbbpgf.png" 
              alt="Timeline" 
              className="w-full h-auto opacity-80 scale-x-[-1]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrintMediaPortfolio;