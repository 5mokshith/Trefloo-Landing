import Tagline from "../components/Tagline";
import { FileCode, Braces, Database, FileJson, GitGraph, SquareCode, Computer, Cpu, Blocks, Hexagon } from "lucide-react";
import { useState } from "react";

const skillsData = [
  { title: "HTML", icon: FileCode },
  { title: "CSS", icon: Braces },
  { title: "JavaScript", icon: FileJson },
  { title: "React", icon: Blocks },
  { title: "Node.js", icon: Hexagon },
  { title: "Supabase", icon: Database },
  { title: "Git", icon: GitGraph },
  { title: "Python", icon: SquareCode },
  { title: "Linux", icon: Computer },
  { title: "Machine Learning", icon: Cpu }
];

function SkillsCard() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="absolute top-130 right-50 w-3/5 min-h-screen flex flex-col justify-center items-center  py-16">
      <div className="container mx-auto px-6 z-10">
        <div className="mb-16 text-center">
          <Tagline label="My Skills" className="text-2xl text-amber-50 w-ful text-left absolute"/>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center justify-center p-6 opacity-100 bg-gray-900 rounded-lg border border-gray-700/50 transform  transition-all duration-300 cursor-pointer relative
                before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-lg before:transition-opacity before:duration-300 before:bg-[linear-gradient(to_right,_#288ff0,_rgb(222,105,40))]
                before:blur-sm before:-z-10 before:opacity-0 hover:before:opacity-100
                after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-lg after:transition-opacity after:duration-300 after:bg-[linear-gradient(to_right,_#288ff0,_rgb(222,105,40))]
                after:blur-sm after:-z-10 after:opacity-0 hover:after:opacity-100
              `}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="mb-4 p-4 rounded-full bg-gray-950/80">
                <skill.icon
                  size={28}
                  color="white"
                  className={hoveredSkill === index ? "animate-bounce" : ""}
                />
              </div>
              <h3 className="text-white text-lg font-medium">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsCard;