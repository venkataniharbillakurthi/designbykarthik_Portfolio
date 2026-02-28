import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const highlights = [
  { img: "https://designbykarthik.github.io/Portfolio/HIGHLIGHTS/img1.jpg", title: "Drone Workshop in RGUKT IIIT Srikakulam", link: "https://github.com/designbykarthik/Banners/blob/main/Drone%20Workshop.jpg" },
  { img: "https://designbykarthik.github.io/Portfolio/HIGHLIGHTS/img14.jpg", title: "Photoshop Online Classes Promotion", link: "https://raw.githubusercontent.com/designbykarthik/Poster/refs/heads/main/Photoshop%20Class.jpg" },
  { img: "https://designbykarthik.github.io/Portfolio/HIGHLIGHTS/img2.jpg", title: "Farewell Countdown Poster", link: "https://github.com/designbykarthik/Poster/blob/main/Farewell%20Poster_3.jpg?raw=true" },
  { img: "https://designbykarthik.github.io/Portfolio/HIGHLIGHTS/img3.jpg", title: "Diwali Festive Poster for RSM Infra", link: "https://media.githubusercontent.com/media/designbykarthik/Social-Media/main/Diwali%202.jpg" },
  { img: "https://designbykarthik.github.io/Portfolio/HIGHLIGHTS/img4.jpg", title: "Volleyball Tournament Poster", link: "https://raw.githubusercontent.com/designbykarthik/Invitations/refs/heads/main/Volleyball%20Tournament.jpg" },
  { img: "https://designbykarthik.github.io/Portfolio/HIGHLIGHTS/img5.jpg", title: "Farewell Invitation Design", link: "https://raw.githubusercontent.com/designbykarthik/Invitations/refs/heads/main/Farewell%20Invitation.jpg" },
];

const projects = [
  { name: "Posters", link: "https://github.com/designbykarthik/Poster" },
  { name: "Invitations", link: "https://github.com/designbykarthik/Invitations" },
  { name: "Banners", link: "https://github.com/designbykarthik/Bible-Verse" },
  { name: "Social Media", link: "https://github.com/designbykarthik/Social-Media" },
  { name: "Brochures", link: "https://github.com/designbykarthik/Brochures" },
  { name: "Certificates", link: "https://github.com/designbykarthik/CERTIFICATE" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="projects" className="relative noise-bg" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase block text-center"
        >
          Portfolio
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold text-gradient-subtle text-center mt-3 mb-16"
        >
          Creative Highlights
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {highlights.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative rounded-xl overflow-hidden glass hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent transition-opacity duration-300 ${hoveredIdx === i ? "opacity-100" : "opacity-0"}`} />
              <div className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-300 ${hoveredIdx === i ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                <p className="font-display text-sm font-semibold text-foreground">{item.title}</p>
                <span className="text-primary text-xs font-body mt-1 inline-block">View More →</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-display text-2xl md:text-3xl font-bold text-gradient-subtle text-center mb-10"
        >
          Project Categories
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.name}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
              className="glass rounded-xl p-6 text-center hover-lift group"
            >
              <span className="font-display text-base font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                {proj.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
