import { useState, useRef } from "react";
import HeroBg from "../assets/hero.webm";
import Heading from "../components/Heading";
import Tagline from "../components/Tagline";
import { Button, NavButton } from "../components/Button";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const gridRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = gridRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
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
      <div className="w-full min-h-screen relative overflow-hidden">
        {/* 🎥 Background Video */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-full scale-130 translate-y-38 object-cover"
        >
          <source src={HeroBg} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* 📝 Heading + Tagline + Button */}
        <div className="absolute z-10 top-1/5 left-1/12 p-2 w-1/2">
          <Heading label="Discover Rural India" />
          <Tagline
            label="Explore Cultures. Connect Locally. Travel Authentically. Effortless journeys. Rich cultures. Designed by AI, brought to life by locals."
            className="text-amber-50 text-xl m-2"
          />
          <Tagline
            label="Personalized journeys powered by AI, guided by locals."
            className="text-gray-500 text-xl m-2 mb-10"
          />
          <Button label="Join the Waitlist Now" />
        </div>

        {/* 🖼️ Grid with Torchlight Effect */}
        <div
          className="absolute z-10 grid grid-cols-2 grid-rows-2 gap-6 p-2 lg:top-[65%] lg:left-[10%] w-[68%] "
          ref={gridRef}
          onMouseMove={handleMouseMove}
        >
          {/* Bro this is overlay */}
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
            style={{
              background: `ellipse 180px 100px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.65) 100%)`,
              backgroundImage: `radial-gradient(ellipse 180px 100px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.65) 100%)`,
            }}
          ></div>
          {/* Rendering hero avi.....! */}
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full aspect-[4/3] group overflow-hidden rounded-lg shadow-lg relative z-10"
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
