import React from "react";
import { Skeleton } from "../components/ui/skeleton";
import Tagline from "../components/Tagline";
function Wcu() {
  return (
    <div className="container  py-20 ">
      {/* <h2 className="text-3xl font-bold text-center mb-8 mt-12   bg-clip-text bg-gradient-to-r text-white  capitalize p-1">
        Why Choose Trefloo
      </h2> */}
      <Tagline
        label="Why Choose Trefloo"
        className="text-white text-3xl font-bold text-center mb-8 mt-12  capitalize p-1"
      ></Tagline>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-black mx-22 p-10 rounded-4xl">
        <div className="relative h-[480px] rounded-xl overflow-hidden shadow-xl">
          <Skeleton className="absolute inset-0 bg-zinc-800 text-white" />
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
        {/* right side  sectionn */}
        <div className="space-y-6 p-4 text-white">
          <h3 className="text-2xl font-bold">Administators Summary.</h3>

          <div className="space-y-4 text-white">
            <h1 className=" italic font-medium ">"Built by creators passionate about culture, community, and tech, our platform reimagines rural travel through immersive experiences and AI-powered planning. From empowering village guides and hosts to offering AR temple tours and folk art workshops, every feature supports sustainable, authentic tourism. Users can explore festivals, book spiritual journeys, and enjoy homely food—while locals earn through ratings, content, and service. With smart tools like AI itinerary planners, BNPL, SOS safety, and offline access, we make mindful travel seamless. Together, we're bridging heritage with modern convenience—one village, one story at a time."</h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Wcu;
