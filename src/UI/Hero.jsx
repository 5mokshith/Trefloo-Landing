import HeroBg from "../assets/hero.webm";
import Heading from "../components/Heading";
import Tagline from "../components/Tagline";
import { Button, NavButton } from "../components/Button";
import SkillsCard from "./SkillsCard";
function Hero() {

    const heroData = {
        heading: "Hi, I'm Mokshith",
        tagline: "Passionate Computer Science Engineer | Web Developer | ML Explorer",
        description:
            "I build responsive, scalable, and intelligent web applications that combine design and logic. Always exploring the latest in tech to solve real-world problems.",
    };

  return (
    <>
    <div className="hero-background absolute w-full h-screen">
        <div className="relative w-full h-screen">
          <video
            src={HeroBg}
            autoPlay
            loop
            muted
            playsInline
            className="absolute -right-50 scale-125 -bottom-120"
          ></video>
        </div>
    </div>
      <div className="hero-content absolute mt-45 p-2 text-white w-1/2 ml-28 z-10">
          <Heading label={heroData.heading} className="mx-auto"></Heading>
          <Tagline label={heroData.tagline} className="mx-auto my-2 font-light text-gray-300"></Tagline>
          <Tagline label={heroData.description} className="mx-auto my-5 text-xl leading-8"></Tagline>
          <div className="relative inline-block">
            <Button label="Download Resume"></Button>
          <NavButton label="Lets Talk"></NavButton>
          </div>
      </div>
      <div className="relative">
        <SkillsCard></SkillsCard>
      </div>
    </>
  );
}

export default Hero;