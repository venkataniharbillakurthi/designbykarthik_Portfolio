import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UIUXSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 'left',
      url: "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775046747/Rectangle_26_wlo9av.png",
      className: "absolute left-0 top-1/2 -translate-y-1/2 w-[38%] z-10",
      initial: { opacity: 0, x: -80, scale: 0.9 },
    },
    {
      id: 'right',
      url: "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775046747/Rectangle_27_ywnlts.png",
      className: "absolute right-0 top-1/2 -translate-y-1/2 w-[38%] z-10",
      initial: { opacity: 0, x: 80, scale: 0.9 },
    },
    {
      id: 'middle',
      url: "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775046748/Rectangle_25_szms8t.png",
      className: "relative mx-auto w-[48%] z-30", // Reduced width slightly to prevent vertical stretch
      initial: { opacity: 0, y: 50, scale: 0.9 },
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Title Header */}
        <h1 className="font-bold text-black tracking-tighter mb-10 md:mb-16" style={{ fontSize: 'clamp(40px, 8vw, 110px)' }}>
          UI/UX DESIGN
        </h1>

        {/* Overlapping Images Container - Fixed min-height to prevent text overlap */}
        <div className="relative flex items-center justify-center mb-16 md:mb-24 min-h-[300px] sm:min-h-[450px] md:min-h-[600px] lg:min-h-[700px]">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={project.initial}
              whileInView={{ opacity: 1, x: 0, y: 0,  }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`${project.className} cursor-pointer`}
              onClick={() => setSelectedImage(project.url)}
            >
              <motion.div 
                whileHover={{ y: -10, }}
                className="transition-all duration-300"
              >
                <img 
                  src={project.url} 
                  alt="UI/UX Layout" 
                  className={`w-full h-auto  ${project.id !== 'middle' ? 'opacity-80' : 'opacity-100'}`} 
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text & Navigation Icon */}
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <p className="text-gray-800 text-base md:text-xl font-medium max-w-3xl leading-relaxed px-4">
            Designing intuitive, user-focused interfaces that deliver seamless digital experiences.
          </p>
          
          <div className="flex justify-center items-center">
            <img 
              src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431617/Button_18_1_w7jewn.png" 
              alt="Next" 
              className="w-14 h-14 md:w-20 md:h-20 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>

        {/* Bottom Timeline Dotted Line */}
        <div className="mt-12 md:mt-20 relative flex items-center justify-center">
          <div className="w-full border-b border-dotted border-black/40 relative py-2">
            <div className="absolute left-[32%] top-full -translate-y-1/2 w-2.5 h-2.5 bg-black rounded-full" />
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