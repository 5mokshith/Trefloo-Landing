import { BrainCog, Languages, WandSparkles, RefreshCcw } from "lucide-react";
import Heading from "../components/Heading";
import Tagline from "../components/Tagline";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Voyana = () => {
  const sectionRef = useRef(null);
  const lightSourceRef = useRef(null);
  const lightStripRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const lightSource = lightSourceRef.current;
    const lightStrip = lightStripRef.current;
    const cards = cardsRef.current;

    if (!section || !lightSource || !lightStrip || !cards) return;

    gsap.set(lightSource, {
      opacity: 0,
      scale: 0.3,
      filter: "blur(80px) brightness(0.6)",
    });

    gsap.set(lightStrip, {
      width: "0%",
      opacity: 0,
      boxShadow: "0 0 0 0 rgba(168,85,247,0)",
    });

    gsap.set(cards.children, {
      y: 30,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "top 20%",
        scrub: 0.8,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(lightSource, {
      opacity: 0.8,
      scale: 1.1,
      filter: "blur(100px) brightness(1.2)",
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        lightStrip,
        {
          width: "50%",
          opacity: 1,
          boxShadow: "0 0 35px 15px rgba(168,85,247,0.9)",
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.4"
      )
      .to(
        cards.children,
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      );

    gsap.to(lightSource, {
      boxShadow: "0 0 70px 35px rgba(168,85,247,0.6)",
      filter: "blur(100px) brightness(1.5)",
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 sm:px-12 overflow-hidden group bg-black"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-transparent" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full h-px bg-transparent" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 bg-transparent">
        <Tagline label="AI at your service" />
        <Heading label="Voyana AI – The Brain Behind Your Journey" />

        {/* Light effect container with cards inside */}
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden my-10">
          {/* Main spotlight effect - enhanced glow */}
          <div
            ref={lightSourceRef}
            className="absolute top-0 w-[75%] h-[350px] bg-gradient-radial from-purple-500/60 via-purple-600/40 to-transparent blur-[100px] rounded-full transition-all"
          ></div>

          {/* Secondary ambient glow */}
          <div className="absolute top-0 w-[90%] h-[200px] bg-purple-600/20 blur-[120px] rounded-full"></div>

          {/* Top light strip */}
          <div
            ref={lightStripRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[3px] bg-purple-400 shadow-[0_0_35px_15px_rgba(168,85,247,0.9)] z-10 transition-all"
          ></div>

          {/* Cards section - inside the light effect container */}
          <div
            ref={cardsRef}
            className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full z-10"
          >
            <Card
              icon={<WandSparkles className="w-8 h-8 text-purple-300 drop-shadow" />}
              title="Smart Planning"
              description="Voyana curates each itinerary based on your pace, preferences, and hidden local gems."
            />
            <Card
              icon={<RefreshCcw className="w-8 h-8 text-purple-300 drop-shadow" />}
              title="Real-Time Replanning"
              description="Change in weather or plans? Voyana adapts and reroutes in real-time—effortlessly."
            />
            <Card
              icon={<BrainCog className="w-8 h-8 text-purple-300 drop-shadow" />}
              title="Cultural Intelligence"
              description="Understands traditions, festivals, and local customs to elevate your experience."
            />
            <Card
              icon={<Languages className="w-8 h-8 text-purple-300 drop-shadow" />}
              title="Multilingual Assistant"
              description="Talk to Voyana in your language — it listens, responds, and guides you smoothly."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title, description }) => (
  <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 via-black/80 to-amber-900/10 p-8 shadow-xl shadow-black/40 hover:shadow-amber-900/20 transition group backdrop-blur-md">
    <div className="flex justify-center mb-4">
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-700/60 via-purple-400/30 to-amber-400/10 shadow-lg border border-purple-700/30">
        {icon}
      </span>
    </div>
    <h3 className="text-lg font-bold text-amber-100 mb-2 tracking-tight">
      {title}
    </h3>
    <p className="text-zinc-300">{description}</p>
  </div>
);

export default Voyana;
