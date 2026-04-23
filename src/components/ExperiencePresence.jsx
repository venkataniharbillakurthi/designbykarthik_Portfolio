import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const THANK_YOU_IMG =
  "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1776657525/Thank_You_wehfos.png";

const accent = "#A6FF00";

const ExperiencePresence = () => {
  const socialCards = [
    {
      platform: "Instagram",
      image:
        "https://res.cloudinary.com/dn9lv7p7d/image/upload/v1776410013/Group_66_smgsfx.png",
      link: "https://www.instagram.com/designbykarthik.xyz/",
      
    },
    {
      platform: "LinkedIn",
      image:
        "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1776410013/Group_69_g59twb.png",
      link: "https://www.linkedin.com/in/karthik-anand-raju-b-5a5088212?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      
    },
    {
      platform: "Behance",
      image:
        "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1776410013/Group_67_nal533.png",
      link: "https://www.behance.net/designbykarthik1",
      
    },
  ];

  const [instagramCard, linkedInCard, behanceCard] = socialCards;

  const cardShell = (card) => (
    <motion.a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group relative block"
    >
      {/* ICON */}
      

      {/* CARD */}
      <div
        className="relative  
       "
      >
        <img
          src={card.image}
          alt={card.platform}
          className="h-full w-full object-cover opacity-95 group-hover:opacity-100 transition"
        />

        
      </div>
    </motion.a>
  );

  return (
    <section className="overflow-hidden bg-black  px-3 py-12 text-white sm:px-4 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1400px]">

        {/* GRID */}
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-4 md:gap-x-6 md:gap-y-6">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-start-1 row-start-1 row-span-3 max-w-[600px] md:row-span-1"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <h2
              className="font-semibold uppercase tracking-tight leading-none"
              style={{
                color: accent,
                fontSize: "clamp(16px, 2.8vw, 40px)",
                letterSpacing: "-0.02em",
              }}
            >
              EXPERIENCE & PRESENCE
            </h2>

            <div className="mt-4 space-y-6">
              <p className="text-[11px] sm:text-[12px] md:text-[24px] text-white/60">
                <span className="text-white font-semibold"> 3+ years of hands-on experience</span>  across freelance and agency
                projects, delivering branding, marketing, and digital design
                solutions.
              </p>

              <ul className="space-y-2 text-[10px] sm:text-[11px] md:text-[18px] text-white/60">
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full"
                    style={{ backgroundColor: "white" }}
                  />
                  Worked across branding, social media, print & UI/UX
                </li>

                <li className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full"
                    style={{ backgroundColor: "white" }}
                  />
                  Contributed to real client projects through agency work
                </li>

                <li className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full"
                    style={{ backgroundColor: "white" }}
                  />
                  Focused on clarity, usability, and impactful design
                </li>
              </ul>
            </div>
          </motion.div>

          {/* INSTAGRAM */}
          <div className="col-start-2 row-start-1 -translate-y-0 md:translate-x-8 md:-translate-y-6">
            {cardShell(instagramCard)}
          </div>

          {/* LINKEDIN */}
          <div className="col-start-2 row-start-2 -translate-y-1 sm:-translate-y-2 md:col-start-1 md:-translate-y-6">
            {cardShell(linkedInCard)}
          </div>

          {/* BEHANCE */}
          <div className="col-start-2 row-start-3 -translate-y-2 sm:-translate-y-4 md:row-start-2 md:translate-x-10 md:-translate-y-10">
            {cardShell(behanceCard)}
          </div>

        </div>

        {/* THANK YOU */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex justify-center"
        >
          <img
            src={THANK_YOU_IMG}
            alt="Thank You"
            className="max-w-[850px] w-full "
          />
        </motion.div>

        

      </div>
    </section>
  );
};

export default ExperiencePresence;