import {
  MapPin,
  Sparkles,
  MountainSnow,
} from 'lucide-react';
import Heading from '../components/Heading';
import Tagline from '../components/Tagline';

const HowItWorks = () => {
  return (
    <section className="relative py-20 px-6 sm:px-12 bg-gradient-to-br from-black via-zinc-900 to-amber-950/30 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-zinc-900/80 to-amber-900/20 opacity-90" />
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-purple-400/20" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full h-px bg-purple-400/20" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 group">
        <Tagline label="How it works"></Tagline>
        <Heading label="How Trefloo connects you to real India"></Heading>
           <div className="flex justify-center my-10">
            <div
              className="w-2/5 h-1 rounded-full bg-[#b7bcc4] transition-all duration-300 shadow-none group-hover:shadow-[0_0_20px_6px_#b7bcc4] group-hover:w-[60%]"
            ></div>
          </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {/* Card 1: Connect Locally */}
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 via-black/80 to-amber-900/10 p-8 shadow-xl shadow-black/40 hover:shadow-amber-900/20 transition group backdrop-blur-md">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-700/60 via-purple-400/30 to-amber-400/10 shadow-lg border border-purple-700/30">
                <MapPin className="w-8 h-8 text-purple-300 drop-shadow" />
              </span>
            </div>
            <h3 className="text-lg font-bold text-amber-100 mb-2 tracking-tight">
              Connect Locally
            </h3>
            <p className="text-zinc-300">
              We match you with trusted local hosts who offer insights, heritage, and hospitality you won’t find in any guidebook.
            </p>
            <a href="#features" className="text-purple-400 hover:underline mt-4 inline-block font-medium">
              Learn more →
            </a>
          </div>

          {/* Card 2: AI-Powered Itineraries */}
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 via-black/80 to-amber-900/10 p-8 shadow-xl shadow-black/40 hover:shadow-amber-900/20 transition group backdrop-blur-md">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-700/60 via-purple-400/30 to-amber-400/10 shadow-lg border border-purple-700/30">
                <Sparkles className="w-8 h-8 text-purple-300 drop-shadow" />
              </span>
            </div>
            <h3 className="text-lg font-bold text-amber-100 mb-2 tracking-tight">
              AI-Powered Itineraries
            </h3>
            <p className="text-zinc-300">
              Our AI curates your travel based on festivals, local events, and preferences — ensuring each trip is one-of-a-kind.
            </p>
            <a href="#features" className="text-purple-400 hover:underline mt-4 inline-block font-medium">
              Learn more →
            </a>
          </div>

          {/* Card 3: Rural Experiences */}
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 via-black/80 to-amber-900/10 p-8 shadow-xl shadow-black/40 hover:shadow-amber-900/20 transition group backdrop-blur-md">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-700/60 via-purple-400/30 to-amber-400/10 shadow-lg border border-purple-700/30">
                <MountainSnow className="w-8 h-8 text-purple-300 drop-shadow" />
              </span>
            </div>
            <h3 className="text-lg font-bold text-amber-100 mb-2 tracking-tight">
              Live Rural Experiences
            </h3>
            <p className="text-zinc-300">
              Experience traditions, arts, cuisine, and homestays deeply rooted in rural life, all curated for authenticity and impact.
            </p>
            <a href="#features" className="text-purple-400 hover:underline mt-4 inline-block font-medium">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
