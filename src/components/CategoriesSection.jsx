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
      ref={ref}
      className="bg-black text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Container Adjustment: 
        Added pl-10 (Mobile) and md:px-12 (Desktop) to create the left space.
        max-w-[1200px] ensures it stays centered and tight on desktop.
      */}
      <div className="max-w-[1100px] mx-auto pl-10 pr-6 md:px-12">
        
        {/* Header Section */}
        <div className="relative flex justify-center items-center mb-16 md:mb-28">
          <img 
            src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774430925/Group_43_lggt9w.png" 
            alt="border"
            className="absolute w-[130%] md:w-full max-w-[900px] h-auto object-contain opacity-80 md:opacity-100"
          />
          <h2 
            className="relative z-10 text-[#A3FF00] uppercase tracking-tight"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(20px, 5vw, 44px)",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            Work Across Categories
          </h2>
        </div>

        {/* Categories Grid - Centered via mx-auto on the parent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-24">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-row items-start gap-4 md:gap-8"
            >
              {/* Big Number */}
              <span 
                className="text-white select-none leading-[0.7] md:leading-[0.8]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(70px, 15vw, 150px)",
                }}
              >
                {cat.num}
              </span>

              {/* Content Block */}
              <div className="pt-2 md:pt-4">
                <h3 
                  className="text-[#A3FF00] uppercase mb-3 md:mb-5"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(20px, 4vw, 36px)",
                    lineHeight: "1",
                  }}
                >
                  {cat.title}
                </h3>
                
                <ul className="space-y-1.5 md:space-y-3">
                  {cat.items.map((item, i) => (
                    <li 
                      key={i}
                      className="text-white/90 uppercase flex items-center gap-2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 2vw, 18px)",
                        fontVariant: "small-caps",
                      }}
                    >
                      <span className="text-[#A3FF00] text-lg select-none">•</span>
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