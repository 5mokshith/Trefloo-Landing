import HeroBg from "../assets/hero.webm";
import Heading from "../components/Heading";
import Tagline from "../components/Tagline";
import { Button, NavButton } from "../components/Button";
function Hero() {

  return (
    <>
    <div className="w-full min-h-screen col-start-3 col-span-8 row-span-2">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full"
      >
        <source src={HeroBg} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
      <div className="absolute z-10 top-1/5 left-1/12 p-2 w-1/2">
      <Heading label="Discover Rural India"></Heading>
      <Tagline label="Explore Cultures. Connect Locally. Travel Authentically Effortless journeys. Rich cultures. Designed by AI, brought to life by locals " className="text-amber-50 text-xl m-2"></Tagline>
      <Tagline label="Personalized journeys powered by AI, guided by locals." className="text-gray-500 text-xl m-2 mb-10"></Tagline>
      <Button label="Join the Waitlist Now"></Button>
      </div>
    </>
  );
}

export default Hero;