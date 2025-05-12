import React from "react";
import { Skeleton } from "../components/ui/skeleton";
import Tagline from "../components/Tagline";
import WcuImg from "../assets/Wcu.png"; // <-- Import the image
import Heading from "../components/Heading";

function Wcu() {
  return (
    <div className="container py-20">
      <div className="text-center m-2 mb-5 group"> 
        <Heading
          label="Travel. Reimagined. By Us."
        ></Heading>
        <Tagline label="Because you deserve more than just a trip"></Tagline>
      <div className="flex justify-center my-10">
        <div
          className="w-2/5 h-1 rounded-full bg-blue-500 transition-shadow duration-300 shadow-none group-hover:shadow-[0_0_20px_6px_rgba(59,130,246,0.7)]"
        ></div>
      </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-black mx-22 p-10 rounded-4xl">
        <div className="relative h-[480px] rounded-xl overflow-hidden shadow-xl flex items-end">
          <img
            src={WcuImg}
            alt="Founders"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Meet the founderss
              </h3>
              <p className="text-zinc-300 text-sm">
                Expanding economic opportunities in rural India through
                sustainable tourism.
              </p>
            </div>
          </div>
        </div>
        {/* right side  section */}
        <div className="space-y-6 p-4 text-white">
          <h3 className="text-3xl font-bold tracking-wide text-gradient bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent">
            Who We Are
          </h3>

          <div className="relative bg-zinc-900 bg-opacity-60 backdrop-blur-md border border-zinc-700 rounded-2xl p-6 shadow-lg">
            <div className="text-7xl text-yellow-400 font-serif mb-4 leading-none">“</div>
            <p className="text-lg leading-relaxed italic font-medium text-zinc-200">
              Built by creators passionate about culture, community, and tech, our
              platform reimagines rural travel through immersive experiences and
              AI-powered planning. From empowering village guides and hosts to offering
              AR temple tours and folk art workshops, every feature supports sustainable,
              authentic tourism. Users can explore festivals, book spiritual journeys,
              and enjoy homely food—while locals earn through ratings, content, and
              service. With smart tools like AI itinerary planners, BNPL, SOS safety, and
              offline access, we make mindful travel seamless. Together, we're bridging
              heritage with modern convenience—one village, one story at a time.
            </p>
            <div className="text-7xl text-yellow-400 font-serif text-right mt-4 leading-none">”</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wcu;
