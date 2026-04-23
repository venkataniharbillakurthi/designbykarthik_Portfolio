import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#categories" },
  { label: "PROJECT", href: "#branding" },
  
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (item, closeMobile = false) => (event) => {
    setActiveTab(item.label);
    if (closeMobile) setMobileOpen(false);

    if (!item.href.startsWith("#")) return;

    const targetSection = document.querySelector(item.href);
    if (!targetSection) return;

    event.preventDefault();
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", item.href);
  };

  // Close mobile menu on resize to prevent layout glitches
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock page scroll while fullscreen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
              onClick={handleNavClick(item)}
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

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(161,255,0,0.14),transparent_55%)] pointer-events-none" />
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-full pt-28 pb-10 px-8 flex flex-col items-center justify-center gap-8"
            >
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774430925/Star_1_ymmnal.png"
                  alt="star"
                  className="w-5 h-5"
                />
                <span className="text-white text-xl tracking-tight font-Bricolage Grotesque - SemiBold">
                  karthik.
                </span>
              </div>

              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.25 }}
                  onClick={handleNavClick(item, true)}
                  className={`w-full max-w-xs text-center px-6 py-3 rounded-full border text-sm tracking-[0.2em] font-bold uppercase transition-colors duration-300 font-Bricolage Grotesque - SemiBold ${
                    activeTab === item.label
                      ? "bg-[#A1FF00] border-[#A1FF00] text-black"
                      : "bg-white/5 border-white/20 text-white"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="https://wa.me/919381726944?text=Hello%20Karthik"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                onClick={() => setMobileOpen(false)}
                className="mt-2 w-full max-w-xs text-center py-4 rounded-full bg-white text-black font-bold text-sm uppercase hover:bg-[#A1FF00] transition-colors font-Bricolage Grotesque - SemiBold"
              >
                Say Hello
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;