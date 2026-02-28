import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Adobe Lightroom", level: 90 },
  { name: "Print Design", level: 95 },
  { name: "Branding & Identity", level: 85 },
  { name: "Illustration & Digital Art", level: 88 },
  { name: "Creative Problem-Solving", level: 94 },
  { name: "UI/UX Design", level: 90 },
  { name: "Communication", level: 90 },
];

const SkillBar = ({ name, level, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="font-body text-sm text-foreground/80 group-hover:text-foreground transition-colors">{name}</span>
        <span className="font-body text-sm text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(348 83% 55%), hsl(270 60% 60%))",
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative noise-bg" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase block text-center"
        >
          Expertise
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold text-gradient-subtle text-center mt-3 mb-16"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
