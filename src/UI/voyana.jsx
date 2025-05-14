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
      boxShadow: "0 0 0 0 rgba(251,191,36,0)",
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
          boxShadow: "0 0 35px 15px rgba(251,191,36,0.9)",
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
      boxShadow: "0 0 70px 35px rgba(251,191,36,0.6)",
      filter: "blur(100px) brightness(1.5)",
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });

    // Sticky video scroll effect
    let ctx;
    if (window.innerWidth >= 1024) {
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: ".voyana-sticky-video",
          pinSpacing: false,
          scrub: false,
        });
      }, section);
    }

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-0 px-0 overflow-visible bg-black min-h-screen"
      id="voyana"
    >
      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-gradient-to-b from-amber-400/10 to-transparent" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full h-px bg-gradient-to-r from-amber-400/10 to-transparent" />
          ))}
        </div>
      </div>

      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-stretch min-h-screen relative z-10">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center py-20 px-6 sm:px-12 lg:w-1/2">
          <Tagline label="AI at your service" className="text-indigo-300 font-semibold tracking-wide" />
          <h1 className="text-4xl sm:text-3xl md:text-2xl lg:text-5xl text-transparent bg-gradient-to-b from-purple-200 via-white to-indigo-300 bg-clip-text font-semibold leading-snug mb-6">
            Let Voyana Plan. You Just Pack
          </h1>
          <div className="mb-8 text-lg text-indigo-100/90 max-w-xl">
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">What is Voyana AI?</h2>
            <p>
              Voyana AI is your personal travel intelligence—designed to understand your interests, budget, and travel style. 
              Whether you dream of a peaceful village retreat, crave a deep dive into local culture, or want to chase spontaneous festivals, 
              Voyana crafts journeys that feel made just for you. Let the AI handle the details, so you can focus on the adventure.
            </p>
          </div>
          <div className="relative w-full flex flex-col items-center justify-center overflow-visible my-10">
            {/* Main spotlight effect - enhanced glow */}
            <div
              ref={lightSourceRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] h-[350px] 
                bg-gradient-radial from-purple-500/60 via-indigo-500/40 to-transparent 
                blur-[120px] rounded-full transition-all shadow-[0_0_80px_40px_rgba(139,92,246,0.25)]"
            ></div>
            {/* Secondary ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[200px] bg-purple-500/20 blur-[120px] rounded-full"></div>
            {/* Top light strip */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 sm:w-2/5 h-1 rounded-full bg-blue-500 shadow-[0_0_32px_8px_rgba(59,130,246,0.7),0_0_64px_16px_rgba(139,92,246,0.3)]" />
            {/* Cards section - inside the light effect container */}
            <div
              ref={cardsRef}
              className="mt-14 grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full z-10"
            >
              <Card
                icon={<WandSparkles className="w-8 h-8 text-purple-300 drop-shadow" />}
                title="Smart Planning"
                description="Voyana curates each itinerary based on your pace, preferences, and hidden local gems."
                color="purple"
              />
              <Card
                icon={<RefreshCcw className="w-8 h-8 text-indigo-300 drop-shadow" />}
                title="Real-Time Replanning"
                description="Change in weather or plans? Voyana adapts and reroutes in real-time—effortlessly."
                color="indigo"
              />
              <Card
                icon={<BrainCog className="w-8 h-8 text-purple-300 drop-shadow" />}
                title="Cultural Intelligence"
                description="Understands traditions, festivals, and local customs to elevate your experience."
                color="purple"
              />
              <Card
                icon={<Languages className="w-8 h-8 text-indigo-300 drop-shadow" />}
                title="Multilingual Assistant"
                description="Talk to Voyana in your language — it listens, responds, and guides you smoothly."
                color="indigo"
              />
            </div>
          </div>
        </div>
        
        {/* Right: Interactive Display - UPDATED WITH MOBILE SUPPORT */}
        <div className="voyana-sticky-video hidden lg:block w-1/2 h-screen sticky top-[100px] right-0 z-20 flex items-center justify-center">
          <div className="relative w-[95%] h-[85%] rounded-2xl overflow-hidden group">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
            
            {/* Main content container */}
            <div className="relative h-full w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-8 flex flex-col">
              {/* Right Section Content */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-indigo-200 mb-2">Experience Voyana in Action</h2>
                <p className="text-indigo-100/90 text-base">
                  See how Voyana AI brings your travel dreams to life. Interact with the features below to discover how your journeys become smarter, smoother, and more personal—powered by real-time intelligence and cultural insight.
                </p>
              </div>
              {/* Static Card (no flip) */}
              <div className="relative flex-1 w-full rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black/90 p-8 border border-purple-500/20 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/60 to-indigo-200/30 flex items-center justify-center mb-6">
                    <WandSparkles className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-100 mb-4">Smart AI Assistant</h3>
                  <p className="text-zinc-300 mb-4">
                    Experience the future of travel planning with Voyana's intelligent AI system. Here's what it can do for you:
                  </p>
                  <ul className="list-disc list-inside text-indigo-200/90 text-base space-y-1 pl-2">
                    <li>Understands your unique travel style and preferences</li>
                    <li>Curates personalized itineraries in seconds</li>
                    <li>Adapts plans in real-time to weather and events</li>
                    <li>Recommends hidden gems and local experiences</li>
                    <li>Communicates in your language</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-purple-300/60 mt-6">
                  <span>Powered by Voyana AI</span>
                  <RefreshCcw className="w-4 h-4 animate-spin-slow" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
              
              {/* Animated dots */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-indigo-500/50 animate-pulse delay-150"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile version of the right section - only visible on smaller screens */}
        <div className="lg:hidden w-full py-12 px-6 bg-black z-10">
          <div className="relative w-full rounded-2xl overflow-hidden">
            {/* Background effects for mobile */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
            
            {/* Content container for mobile */}
            <div className="relative w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 flex flex-col">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-indigo-200 mb-2">Experience Voyana in Action</h2>
                <p className="text-indigo-100/90 text-sm">
                  See how Voyana AI brings your travel dreams to life with real-time intelligence and cultural insight.
                </p>
              </div>
              
              {/* Card for mobile */}
              <div className="relative w-full rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black/90 p-6 border border-purple-500/20 flex flex-col">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400/60 to-indigo-200/30 flex items-center justify-center mb-4">
                    <WandSparkles className="w-5 h-5 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-100 mb-3">Smart AI Assistant</h3>
                  <p className="text-zinc-300 mb-3 text-sm">
                    Experience the future of travel planning with Voyana's intelligent AI system:
                  </p>
                  <ul className="list-disc list-inside text-indigo-200/90 text-sm space-y-1 pl-1">
                    <li>Understands your unique travel style</li>
                    <li>Curates personalized itineraries</li>
                    <li>Adapts plans in real-time</li>
                    <li>Recommends hidden gems</li>
                    <li>Communicates in your language</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-purple-300/60 mt-4 text-sm">
                  <span>Powered by Voyana AI</span>
                  <RefreshCcw className="w-3 h-3 animate-spin-slow" />
                </div>
              </div>

              {/* Decorative elements for mobile */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
              
              {/* Animated dots for mobile */}
              <div className="absolute top-3 right-3 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 animate-pulse delay-150"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title, description, color }) => (
  <div className={
    `rounded-2xl border border-zinc-800 
    ${color === "indigo"
      ? "bg-gradient-to-br from-indigo-900/80 via-black/80 to-purple-900/10"
      : "bg-gradient-to-br from-purple-900/80 via-black/80 to-indigo-900/10"}
    p-8 shadow-xl shadow-black/40 hover:shadow-indigo-700/30 transition group backdrop-blur-md hover:scale-[1.03] duration-300`
  }>
    <div className="flex justify-center mb-4">
      <span className={
        `inline-flex items-center justify-center w-14 h-14 rounded-xl 
        ${color === "indigo"
          ? "bg-gradient-to-br from-indigo-400/60 via-indigo-200/30 to-indigo-100/10 border border-indigo-400/30"
          : "bg-gradient-to-br from-purple-400/60 via-purple-200/30 to-purple-100/10 border border-purple-400/30"}
        shadow-lg`
      }>
        {icon}
      </span>
    </div>
    <h3 className={`text-lg font-bold ${color === "indigo" ? "text-indigo-100" : "text-purple-100"} mb-2 tracking-tight`}>
      {title}
    </h3>
    <p className="text-zinc-300">{description}</p>
  </div>
);

export default Voyana;