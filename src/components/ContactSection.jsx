import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "designbykarthik@gmail.com", href: "mailto:designbykarthik@gmail.com" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Andhra Pradesh, India", href: "#" },
    { icon: <Phone className="w-5 h-5" />, label: "Name", value: "Karthik Anand Raju Beera", href: "#" },
  ];

  return (
    <section id="contact" className="relative noise-bg" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase block text-center"
        >
          Get In Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold text-gradient-subtle text-center mt-3 mb-6"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-muted-foreground text-center max-w-lg mx-auto mb-16 font-body"
        >
          Have a project in mind? Let's create something extraordinary together.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-8 text-center hover-lift group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {item.icon}
              </div>
              <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">{item.label}</p>
              <p className="text-foreground font-body text-sm font-medium">{item.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="mailto:designbykarthik@gmail.com"
            className="inline-flex px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg tracking-wide hover:opacity-90 transition-all glow-primary"
          >
            Say Hello 👋
          </a>
        </motion.div>
      </div>

      <div className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © 2026 <span className="text-gradient">designbyKarthik</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Dribbble"].map((social) => (
              <a key={social} href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors font-body">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
