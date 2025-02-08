import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import maneeley from "@/app/assets/maneeley-logo.svg";
import heenakapadia from "@/app/assets/heenakapadia.svg";

const sitesArr = [
  {
    name: "Maneeleys",
    url: "https://maneeleys.com",
    img: maneeley,
  },
  {
    name: "Heena Kapadia",
    url: "https://www.heenakapadialaw.com/",
    img: heenakapadia,
  },
];

const marqueeVariants = {
  animate: {
    x: [0, -501],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 8,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  const routeTo = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full">
      <div className="relative w-screen max-w-full h-[206px] overflow-x-hidden">
        <motion.div
          className="absolute whitespace-nowrap flex gap-10 lg:hidden"
          variants={marqueeVariants}
          animate="animate">
          {sitesArr.concat(sitesArr).map((site, index) => (
            <Image
              key={index}
              src={site.img}
              alt={site.name}
              className="h-16 w-auto transition-all duration-300 opacity-50 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal cursor-pointer"
              onClick={() => routeTo(site.url)}
            />
          ))}
        </motion.div>
        <div className="hidden gap-10 justify-center w-full lg:flex">
          {sitesArr.map((site, index) => (
            <Image
              key={index}
              src={site.img}
              alt={site.name}
              className="h-20 w-auto transition-all duration-300 opacity-50 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal cursor-pointer"
              onClick={() => routeTo(site.url)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
