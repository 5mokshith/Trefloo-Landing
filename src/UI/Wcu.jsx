import React, { useRef } from "react";
import { Skeleton } from "../components/ui/skeleton";
import Tagline from "../components/Tagline";
import WcuImg from "../assets/Wcu.png";
import Heading from "../components/Heading";
import { motion } from "framer-motion";

function Wcu() {
  // Parallax effect for left image section
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = imgRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(900px) rotateY(${x / 30}deg) rotateX(${
      -y / 30
    }deg) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    const card = imgRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div className="container py-20 group">
      <div className="text-center m-2 mb-5">
        <Heading label="Travel. Reimagined. By Us." />
        <Tagline label="Because you deserve more than just a trip" />
        <div className="flex justify-center my-6 sm:my-8 md:my-10">
          <div className="w-3/5 sm:w-2/5 h-1 rounded-full bg-blue-500 transition-all duration-300 shadow-none group-hover:shadow-[0_0_20px_6px_rgba(59,130,246,0.7)] group-hover:w-[60%]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-black mx-auto max-w-7xl p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl md:rounded-4xl">
        {/* Left: Image section */}
        <motion.div
          ref={imgRef}
          className="relative h-[300px] sm:h-[400px] md:h-[480px] rounded-xl overflow-hidden shadow-xl flex items-end transition-transform duration-500 ease-[cubic-bezier(.23,1.02,.32,1)] hover:shadow-amber-700/40 group p-4"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={WcuImg}
            alt="Founders"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-4 sm:p-6 transition-all duration-500 group-hover:bg-black/40 group-hover:shadow-[0_0_60px_10px_rgba(252,211,77,0.25)]" />
          <div className="relative z-10">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 drop-shadow-lg group-hover:text-yellow-300 transition-colors duration-300">
              Meet the founders
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm group-hover:text-yellow-100 transition-colors duration-300">
              Expanding economic opportunities in rural India through
              sustainable tourism.
            </p>
          </div>
        </motion.div>

        {/* Right: About section */}
        <motion.div
          className="space-y-4 sm:space-y-6 p-4 text-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold tracking-wide text-gradient bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent">
            Who We Are
          </h3>

          <div className="relative bg-zinc-900 bg-opacity-60 backdrop-blur-md border border-zinc-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="flex items-center mb-2 sm:mb-4">
              <span className="text-5xl sm:text-7xl text-yellow-400 font-serif leading-none drop-shadow-lg mr-2 select-none">
                &#8220;
              </span>
            </div>
            <p className="text-base sm:text-lg leading-relaxed italic font-medium text-zinc-200">
              Built by creators passionate about culture, community, and tech,
              our platform reimagines rural travel through immersive experiences
              and AI-powered planning. From empowering village guides and hosts
              to offering AR temple tours and folk art workshops, every feature
              supports sustainable, authentic tourism. Users can explore
              festivals, book spiritual journeys, and enjoy homely food—while
              locals earn through ratings, content, and service. With smart
              tools like AI itinerary planners, BNPL, SOS safety, and offline
              access, we make mindful travel seamless. Together, we're bridging
              heritage with modern convenience—one village, one story at a time.
            </p>
            <div className="flex items-center justify-end mt-2 sm:mt-4">
              <span className="text-5xl sm:text-7xl text-yellow-400 font-serif leading-none drop-shadow-lg ml-2 select-none">
                &#8221;
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Wcu;
