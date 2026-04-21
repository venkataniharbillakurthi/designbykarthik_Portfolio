import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECT", href: "#branding" },
  { label: "SERVICES", href: "#social-media" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize to prevent layout glitches
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync active tab with currently visible section
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const match = navItems.find((item) => item.href === `#${visible.target.id}`);
        if (match) setActiveTab(match.label);
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-15% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="relative z-50 flex justify-center items-center h-20 md:h-24 px-6 md:px-10 ">
      <div className="w-full max-w-7xl flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img 
            src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774430925/Star_1_ymmnal.png" 
            alt="star" 
            className="w-5 h-5 md:w-6 md:h-6"
          />
          <span className="text-white text-xl md:text-2xl tracking-tight font-Bricolage Grotesque - SemiBold">
            karthik.
          </span>
        </div>

        {/* Desktop Pill Navigation */}
        <div className="hidden md:flex items-center bg-white rounded-full p-1 relative">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveTab(item.label)}
              className={`relative px-6 py-2 text-[10px] font-bold tracking-widest transition-colors duration-300 z-10 font-Bricolage Grotesque - SemiBold ${
                activeTab === item.label ? "text-black" : "text-black"
              }`}
            >
              {activeTab === item.label && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#A1FF00] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Section: Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/919381726944?text=Hello%20Karthik"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-6 md:px-8 py-2 md:py-3 rounded-full bg-white text-black text-[11px] md:text-xs font-bold hover:bg-gray-200 transition-colors uppercase font-Bricolage Grotesque - SemiBold"
          >
            Say Hello
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
          >
            <motion.span 
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block" 
            />
            <motion.span 
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block" 
            />
            <motion.span 
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block" 
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 right-0 bg-black border-t border-white/10 px-6 py-8 md:hidden flex flex-col gap-6 items-center overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.label);
                  setMobileOpen(false);
                }}
                className={`text-sm font-bold tracking-[0.2em] font-Bricolage Grotesque - SemiBold ${
                  activeTab === item.label ? "text-white underline underline-offset-8" : "text-gray-400"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/919381726944?text=Hello%20Karthik"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-4 rounded-full bg-white text-black font-bold text-sm uppercase font-Bricolage Grotesque - SemiBold"
            >
              Say Hello
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;