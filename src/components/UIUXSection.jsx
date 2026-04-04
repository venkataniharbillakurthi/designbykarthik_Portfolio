import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const UIUXSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 'left',
      url: "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775286703/Rectangle_26_b2ewpz.png",
      className: "absolute left-0 bottom-0 w-[38%] z-10",
      initial: { opacity: 0, x: -80 },
    },
    {
      id: 'right',
      url: "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775286703/Rectangle_28_g40ujs.png",
      className: "absolute right-0 bottom-0 w-[38%] z-10",
      initial: { opacity: 0, x: 80 },
    },
    {
      id: 'middle',
      url: "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775286703/Rectangle_25_arwn1e.png",
      className: "relative mx-auto w-[48%] z-30", 
      initial: { opacity: 0, y: 50 },
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-12 md:py-10 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        
        {/* Title Header - Reduced margin bottom from mb-20 to mb-8 */}
        <div className="text-center mb-6 md:mb-12">
          <h1 className="font-bold text-black tracking-tighter"  style={{ fontSize: 'clamp(50px, 10vw, 100px)'}}>
            UI/UX DESIGN
          </h1>
          <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
              Designing intuitive, user-focused interfaces that deliver seamless digital experiences.
            </p>
        </div>

        {/* Overlapping Images Container - Reduced min-height values to pull images up */}
        <div className="relative flex items-end justify-center mb-12 md:mb-6 min-h-[250px] sm:min-h-[350px] md:min-h-[500px] lg:min-h-[550px]">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={project.initial}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`${project.className} cursor-pointer`}
              onClick={() => setSelectedImage(project.url)}
            >
              <motion.div 
               
                className="transition-all duration-300"
              >
                <img 
                  src={project.url} 
                  alt="UI/UX Layout" 
                  className={`w-full h-auto  `} 
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

          

        {/* UPDATED FULL-WIDTH TIMELINE LINE */}
        <div className="mt-16 md:mt-14 relative h-10 w-screen right-1/2 translate-x-1/2 overflow-hidden">
          <div className="absolute right-0 w-[90%] md:w-[85%] flex items-center">
            <img 
              src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431617/Line_299_wbbpgf.png" 
              alt="Timeline" 
              className="w-full h-auto opacity-80 scale-x-[1]"
            />
          </div>
        </div>
      </div>

      {/* FULL IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              alt="Full Layout View"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default UIUXSection;