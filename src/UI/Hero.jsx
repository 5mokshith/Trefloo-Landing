import { useState, useRef } from "react";
import HeroBg from "../assets/hero.webm";
import Heading from "../components/Heading";
import Tagline from "../components/Tagline";
import { Button } from "../components/Button";
import { motion } from "framer-motion";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const gridRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = gridRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left - 164;
    const y = e.clientY - bounds.top;
    setMousePos({ x, y });
  };

  const images = [
    {
      url: "https://images.unsplash.com/photo-1723900517234-e2aa38e7361c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A serene village landscape in Telangana",
    },
    {
      url: "https://images.unsplash.com/photo-1586847206971-964c9376bc03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJ1cmFsJTIwYXJlYXN8ZW58MHx8MHx8fDA%3D",
      description: "Traditional homes nestled in lush greenery",
    },
    {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      description: "Locals celebrating a vibrant rural festival",
    },
    {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      description: "Sunrise over tranquil farmlands",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen relative overlay-visible">
        {/* 🎥 Background Video - only for screens above 1024px */}
        <motion.video
          autoPlay
          loop
          muted
          className="hidden xl:block absolute inset-0 w-full h-full object-cove z-0 scale-170 pt-2 mt-65"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <source src={HeroBg} type="video/webm" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Mobile & Tablet Hero Content (below 1024px) */}
        <div className="flex flex-col items-center justify-center min-h-screen xl:hidden px-4 py-0 text-center relative">
          {/* Decorative glowing gradient background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] max-w-xl blur-2xl rounded-full bg-gradient-to-tr from-[#be3144]/60 via-amber-400/30 to-blue-500/20 opacity-70 animate-pulse" />
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[60vw] h-[30vw] max-w-lg blur-2xl rounded-full bg-gradient-to-br from-blue-500/30 via-[#be3144]/40 to-amber-400/20 opacity-60 animate-pulse" />
            {/* Extra glow for mobile */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vw] max-w-2xl blur-[100px] rounded-full bg-gradient-to-br from-amber-400/30 via-blue-500/20 to-[#be3144]/20 opacity-60 animate-pulse" />
          </div>
          <div className="relative z-10 w-full flex flex-col items-center">
            <Heading label="Beyond Destinations: Experience India" />
            <Tagline
              label="Explore Cultures. Connect Locally. Travel Authentically. Effortless journeys. Rich cultures. Designed by AI, brought to life by locals."
              className="text-amber-50 text-lg my-2 drop-shadow-[0_2px_16px_rgba(190,49,68,0.25)]"
            />
            <Tagline
              label="Personalized journeys powered by AI, guided by locals."
              className="text-blue-100 text-base mb-4 drop-shadow-[0_2px_12px_rgba(59,130,246,0.18)]"
            />
            <div className="flex justify-center my-8 w-full">
              <div
                className="w-2/5 h-1 rounded-full bg-[#be3144] transition-all duration-300 shadow-[0_0_24px_8px_rgba(190,49,68,0.18)]"
              ></div>
            </div>
            <Button label="Join the Waitlist Now" className="shadow-lg shadow-[#be3144]/30 hover:shadow-[#be3144]/60 transition" />
          </div>
        </div>

        {/* 📝 Heading + Tagline + Button for desktop (above 1024px) */}
        <motion.div
          className="hidden xl:block absolute z-20 top-1/7 left-1/12 p-2 w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-150px", amount: 0.6 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-150px", amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Heading label="Beyond Destinations: Experience India" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-150px", amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Tagline
              label="Explore Cultures. Connect Locally. Travel Authentically. Effortless journeys. Rich cultures. Designed by AI, brought to life by locals."
              className="text-amber-50 text-xl m-2"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-150px", amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Tagline
              label="Personalized journeys powered by AI, guided by locals."
              className="text-gray-500 text-xl m-2 mb-10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-150px", amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <Button label="Join the Waitlist Now" />
          </motion.div>
        </motion.div>

        {/* 🖼️ Grid with Torchlight Effect - only for screens above 1024px */}
        <motion.div
          className="hidden xl:grid absolute z-20 grid-cols-2 grid-rows-2 gap-x-3 gap-y-58 pl-42 pr-35 xl:top-[55%] xl:left-[10%] w-[80%] max-h-[50vh] -ml-26 mt-62"
          ref={gridRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px", amount: 0.05 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Torchlight overlay */}
          <div
            className="absolute top-0 left-41 w-[56rem] h-[44rem] pointer-events-none z-20 rounded-xl"
            style={{
              backgroundImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.65) 100%)`,
            }}
          ></div>
          {/* Rendering hero images */}
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="w-full aspect-[4/3] max-w-105 group overflow-hidden rounded-lg shadow-lg relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5 + index * 0.1,
              }}
            >
              <img
                src={img.url}
                alt="Rural India"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Text on Hover */}
              <div className="absolute p-2 inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="flex-col text-center gap-20">
                  <Tagline label={img.description}></Tagline>
                  <Button label="Explore more"></Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
