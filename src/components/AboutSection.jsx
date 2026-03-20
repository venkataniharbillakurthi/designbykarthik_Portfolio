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
      {/* Container: No right padding to allow image to touch the edge */}
      <div className="max-w-[1440px] ml-auto pl-6 md:pl-6">
        
        {/* TOP SECTION: BIG BOLD HEADLINE */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="uppercase mb-12 text-black tracking-normal"
          style={{
            fontFamily: "Impact, sans-serif",
            fontSize: "clamp(40px, 5vw, 50px)",
            lineHeight: "1.2",
          }}
        >
          Design that delivers, not just decorates.
        </motion.h2>

        {/* MAIN CONTENT GRID */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* LEFT COLUMN: FEATURES */}
          <div className="w-full md:w-[45%] space-y-16 ">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="border-b-[1.5px] border-black/20 pb-8"
              >
                <h3 className="text-3xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-black text-xl   max-w-md">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN: TOUCHES RIGHT MARGIN */}
          <div className="w-full md:w-[50%] flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full"
            >
              {/* Profile Image with Signature Crop - Flush to right */}
              <div className="rounded-tl-[120px] md:rounded-tl-[180px] overflow-hidden w-full aspect-[4/3] mt-[-120px]">
                <img
                  src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774001475/IMAGE_jx5mts.png"
                  alt="Karthik Beera"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* HELLO BLOCK - Indented slightly from the image edge for better rhythm */}
              <div className="mt-5 px-4 md:px-0">
                <div className="flex flex-col md:flex-row md:items-end gap-8">
                  <h1 
                    className="text-black uppercase leading-[0.8]"
                    style={{
                      fontFamily: "Impact, sans-serif",
                      fontSize: "clamp(80px, 10vw, 100px)",
                    }}
                  >
                    HELLO!
                  </h1>
                  <div className="">
                    <p className="text-3xl md:text-4xl font-black text-black leading-none pt-">I’m Karthik</p>
                    <p className="text-sm md:text-base font-bold text-black uppercase tracking-widest ">
                      Brand & Visual Designer
                    </p>
                  </div>
                </div>

                {/* BIO DESCRIPTION */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="text-black mt-4 max-w-[578px] text-xl"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    
                    lineHeight: "1.4",
                  }}
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