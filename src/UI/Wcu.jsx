import React from "react";
import { Skeleton } from "../components/ui/skeleton";

function Wcu() {
  return (
    <div className="container  py-20 ">

      
      <h2 className="text-3xl font-bold text-center mb-8 mt-12   bg-clip-text bg-gradient-to-r text-white  capitalize p-1">
        Why Choose Trefloo
      </h2>
      
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

        <div className="space-y-6 p-4 text-white">
          <h3 className="text-2xl font-bold">Administrative Summary</h3>

          <div className="space-y-4 text-white">
            <div>
              <h4 className="text-lg font-medium mb-2">Our Reach</h4>
              <p className="text-white">
                Trefloo has expanded to over 250 villages across rural India,
                partnering with more than 1,200 local hosts and guides. We
                currently offer 480+ authentic cultural experiences, serving
                15,000+ travelers annually.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Impact Metrics</h4>
              <p className="text-white">
                In the past 12 months, we've seen a 12.5% increase in monthly
                bookings and an 8.3% growth in revenue. Our active listings have
                grown by 22.1%, creating substantial economic opportunities for
                rural communities.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Community Benefits</h4>
              <p className="text-white">
                Our platform has helped increase the average household income by
                ₹25,000 annually for participating families. Additionally, 60%
                of our hosts are women entrepreneurs, and 45% of earnings are
                reinvested into local infrastructure and education.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Future Goals</h4>
              <p className="text-white">
                We aim to expand to 500+ villages by the end of 2024, focusing
                on underrepresented regions in Northeast India and tribal areas.
                Our sustainable tourism initiatives will focus on water
                conservation and renewable energy implementation across all
                partner communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wcu;
