import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative noise-bg" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative glass rounded-2xl p-2 hover-lift">
              <img
                src="https://designbykarthik.github.io/Portfolio/profile_img.jpg"
                alt="Karthik Beera - UI/UX Designer"
                className="w-full aspect-square object-cover rounded-xl"
              />
            </div>
          </div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-primary font-body text-sm tracking-[0.3em] uppercase"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-3xl md:text-5xl font-bold text-gradient-subtle mt-3 mb-6"
            >
              Crafting Digital Experiences
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground font-body leading-relaxed text-base md:text-lg"
            >
              I am a passionate and creative graphic designer with a keen eye for detail and a strong foundation in visual communication. Specializing in brand identity, digital design, and illustration, I craft compelling visual solutions that effectively communicate messages and engage audiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-muted-foreground font-body leading-relaxed text-base md:text-lg mt-4"
            >
              My expertise includes Adobe Creative Suite — particularly Photoshop, Illustrator, and InDesign — and I continuously explore new trends to push creative boundaries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-8 mt-8"
            >
              {[
                { num: "50+", label: "Projects" },
                { num: "30+", label: "Happy Clients" },
                { num: "3+", label: "Years Exp." },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-2xl md:text-3xl font-bold text-gradient">{stat.num}</span>
                  <p className="text-muted-foreground text-xs mt-1 tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
