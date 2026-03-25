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
      className="bg-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Background Border Image */}
        <div className="relative flex justify-center items-center mb-32">
          <img 
            src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774430925/Group_43_lggt9w.png" 
            alt="border"
            className="absolute w-full max-w-[900px] h-auto object-contain"
          />
          <h2 
            className="relative z-10 text-[#A3FF00] uppercase"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 58px)",
              lineHeight: "100px",
              textAlign: "center",
            }}
          >
            Work Across Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-32">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex items-start gap-8"
            >
              {/* Big Number */}
              <span 
                className="text-white select-none"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(120px, 15vw, 230px)",
                  lineHeight: "0.8",
                }}
              >
                {cat.num}
              </span>

              {/* Content Block */}
              <div className="pt-4">
                <h3 
                  className="text-[#A3FF00] uppercase mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(30px, 4vw, 50px)",
                    lineHeight: "1",
                    textAlign: "left",
                  }}
                >
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li 
                      key={i}
                      className="text-white uppercase flex items-center gap-2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 400,
                        fontSize: "26px",
                        lineHeight: "35px",
                        fontVariant: "small-caps",
                      }}
                    >
                      <span className="text-[#A3FF00] text-xl">•</span>
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