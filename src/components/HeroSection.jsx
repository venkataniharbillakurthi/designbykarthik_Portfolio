import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroScene3D from "./HeroScene3D";

const roles = ["Graphic Designer", "UI/UX Designer", "Brand Strategist", "Visual Storyteller"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      <HeroScene3D />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-sm md:text-base text-muted-foreground tracking-[0.3em] uppercase mb-4"
        >
          Hello, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-gradient-subtle leading-tight mb-4"
        >
          Karthik Beera
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-display text-xl md:text-3xl lg:text-4xl font-medium mb-10"
        >
          <span className="text-muted-foreground">And I am a </span>
          <span className="text-gradient">{displayed}</span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:opacity-90 transition-all glow-primary"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full border border-border text-foreground font-body font-medium tracking-wide hover:border-primary/50 hover:text-primary transition-all"
          >
            View Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
          
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
