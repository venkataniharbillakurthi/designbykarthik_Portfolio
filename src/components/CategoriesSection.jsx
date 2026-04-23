import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CategoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      num: "1",
      title: "Branding",
      items: ["Logos", "Brand Identity", "Logo Collections"],
    },
    {
      num: "2",
      title: "Social Media",
      items: ["Ad Creatives", "Instagram Posts", "Festival Creatives"],
    },
    {
      num: "3",
      title: "UI/UX Design",
      items: ["Website Designs", "Landing Pages", "Web Creatives"],
    },
    {
      num: "4",
      title: "Print Media",
      items: ["Restaurant Menus", "Billboards", "Packaging"],
    },
  ];

  return (
    <section
      id="categories"
      ref={ref}
      className="text-white py-12 md:py-24 overflow-hidden bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1776333067/SECTION_3_gvaeli.png")',
      }}
    >
      {/* Container Adjustment: 
        Added pl-10 (Mobile) and md:px-12 (Desktop) to create the left space.
        max-w-[1200px] ensures it stays centered and tight on desktop.
      */}
      <div className="max-w-[980px] mx-auto pl-6   pr-5 md:px-10">
        
        {/* Header Section */}
        <div className="relative flex justify-center items-center mb-12 md:mb-20">
          <img 
            src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774430925/Group_43_lggt9w.png" 
            alt="border"
            className="absolute w-[110%] md:w-full max-w-[760px] h-auto object-contain opacity-80 md:opacity-100"
          />
          <h2 
            className="relative z-10 text-[#A3FF00] uppercase tracking-tight"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(15px, 4vw, 36px)",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            Work Across Categories
          </h2>
        </div>

        {/* Categories Grid - Centered via mx-auto on the parent */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-16">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-row items-start gap-2 md:gap-6"
            >
              {/* Big Number */}
              <span 
                className="text-white select-none leading-[0.75] md:leading-[0.85]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(44px, 10vw, 120px)",
                }}
              >
                {cat.num}
              </span>

              {/* Content Block */}
              <div className="pt-0 md:pt-3">
                <h3 
                  className="text-[#A3FF00] uppercase mb-1 md:mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(14px, 3vw, 30px)",
                    lineHeight: "1",
                  }}
                >
                  {cat.title}
                </h3>
                
                <ul className="space-y-0.5 md:space-y-2">
                  {cat.items.map((item, i) => (
                    <li 
                      key={i}
                      className="text-white/90 uppercase flex items-center gap-1"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(10px, 1.5vw, 16px)",
                        fontVariant: "small-caps",
                      }}
                    >
                      <span className="text-[#A3FF00] text-base select-none">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;