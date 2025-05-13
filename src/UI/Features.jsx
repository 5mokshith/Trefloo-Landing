import React from "react";
import {
  RocketIcon,
  HomeIcon,
  PersonIcon,
  BackpackIcon,
  CalendarIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";
import { Skeleton } from "../components/ui/skeleton";
import { Calendar } from "../components/ui/calendar";
import { ScrollArea } from "../components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import Tagline from "../components/Tagline";
import Heading from "../components/Heading";

const features = [
  {
    Icon: RocketIcon,
    name: "AI Itinerary Planner",
    description:
      "Get personalized travel plans based on your interests, budget, and time.",
    href: "/",
    cta: "Explore",
    background: (
      <div className="absolute inset-4 z-0 transition-transform duration-500 group-hover:scale-95">
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-950/60 via-black/70 to-amber-900/20 pointer-events-none z-10" />
        <Card className="w-full bg-black/80 border-none shadow-xl shadow-amber-900/30 backdrop-blur-md relative z-0">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-amber-100 tracking-wide">
              Travel Itinerary
            </CardTitle>
            <CardDescription className="text-amber-300">
              3-Day Trip to Kerala
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-amber-200">
                  Day 1: Kochi
                </h4>
                <p className="text-xs text-zinc-300">
                  Morning: Fort Kochi walk
                </p>
                <p className="text-xs text-zinc-300">
                  Afternoon: Kathakali show
                </p>
                <p className="text-xs text-zinc-300">Evening: Seafood dinner</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-amber-200">
                  Day 2: Munnar
                </h4>
                <p className="text-xs text-zinc-300">
                  Morning: Tea plantation tour
                </p>
                <p className="text-xs text-zinc-300">
                  Afternoon: Spice garden visit
                </p>
                <p className="text-xs text-zinc-300">
                  Evening: Homestay dinner
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-amber-200">
                  Day 3: Alleppey
                </h4>
                <p className="text-xs text-zinc-300">
                  Full day: Houseboat experience
                </p>
                <p className="text-xs text-zinc-300">
                  Evening: Village cooking class
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    className:
      "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bg-black text-white shadow-inner shadow-amber-600 p-2",
  },
  {
    Icon: HomeIcon,
    name: "Local Experiences",
    description: "Book immersive homestays, workshops, and temple tours.",
    href: "/",
    cta: "Discover",
    background: (
      <div className="absolute inset-4 z-0 transition-transform duration-500 group-hover:scale-95">
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-amber-700/30 via-black/60 to-amber-400/10 pointer-events-none z-10" />
        <ScrollArea className="w-full h-full rounded-lg bg-zinc-800 p-2 opacity-20 ml-22 shadow-inner shadow-amber-600 relative z-0">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none text-white">
              Local Experiences
            </h4>
            <div className="flex flex-col space-y-3">
              <div className="bg-zinc-800 p-2 rounded-md">
                <h5 className="text-xs font-medium text-white">
                  Pottery Workshop
                </h5>
                <p className="text-xs text-zinc-400">
                  Learn from master artisans in Kumhaargram
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-yellow-500">★★★★★</span>
                  <span className="text-xs text-zinc-400 ml-2">
                    ₹1,200/person
                  </span>
                </div>
              </div>
              <div className="bg-zinc-800 p-2 rounded-md">
                <h5 className="text-xs font-medium text-white">
                  Madhubani Painting
                </h5>
                <p className="text-xs text-zinc-400">
                  Traditional art class in Mithila village
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-yellow-500">★★★★☆</span>
                  <span className="text-xs text-zinc-400 ml-2">
                    ₹900/person
                  </span>
                </div>
              </div>
              <div className="bg-zinc-800 p-2 rounded-md">
                <h5 className="text-xs font-medium text-white">
                  Spice Farm Tour
                </h5>
                <p className="text-xs text-zinc-400">
                  Explore cardamom hills with local farmers
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-yellow-500">★★★★★</span>
                  <span className="text-xs text-zinc-400 ml-2">
                    ₹750/person
                  </span>
                </div>
              </div>
              <div className="bg-zinc-800 p-2 rounded-md">
                <h5 className="text-xs font-medium text-white">
                  Temple Architecture Walk
                </h5>
                <p className="text-xs text-zinc-400">
                  Guided tour through ancient temples
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-yellow-500">★★★★☆</span>
                  <span className="text-xs text-zinc-400 ml-2">
                    ₹600/person
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    ),
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-black text-white shadow-inner shadow-amber-600",
  },
  {
    Icon: PersonIcon,
    name: "Village Guides & Hosts",
    description:
      "Connect with trusted locals—guides, cooks, and artists with ratings and profiles.",
    href: "/",
    cta: "Meet locals",
    background: (
      <div className="absolute inset-4 z-0 transition-transform duration-500 group-hover:scale-95 opacity-20">
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-tl from-amber-700/30 via-black/60 to-amber-400/10 pointer-events-none z-10" />
        <ScrollArea className="w-full h-full rounded-lg bg-zinc-900 p-2 shadow-inner shadow-amber-600 relative z-0">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none text-white">
              Local Guides
            </h4>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3 bg-zinc-800 p-2 rounded-md">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-medium">
                  RK
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-white">Rahul Kumar</p>
                  <p className="text-xs text-zinc-400">
                    Spice tour guide • Munnar
                  </p>
                  <div className="flex">
                    <span className="text-xs text-yellow-500">★★★★★</span>
                    <span className="text-xs text-zinc-400 ml-2">
                      156 trips
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-zinc-800 p-2 rounded-md">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-medium">
                  AP
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-white">Amrita Patel</p>
                  <p className="text-xs text-zinc-400">
                    Textile artist • Kutch
                  </p>
                  <div className="flex">
                    <span className="text-xs text-yellow-500">★★★★☆</span>
                    <span className="text-xs text-zinc-400 ml-2">
                      98 workshops
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-zinc-800 p-2 rounded-md">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-medium">
                  VT
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-white">Vijay Thakur</p>
                  <p className="text-xs text-zinc-400">
                    Homestay host • Himachal
                  </p>
                  <div className="flex">
                    <span className="text-xs text-yellow-500">★★★★★</span>
                    <span className="text-xs text-zinc-400 ml-2">
                      204 guests
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    ),
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 bg-black text-white p-2 shadow-inner shadow-amber-600",
  },
  {
    Icon: BackpackIcon,
    name: "Travel & Payments",
    description:
      "Book rides, stays, and pay with UPI, BNPL, or microloans in one place.",
    href: "/",
    cta: "Get started",
    background: (
      <div className="absolute inset-4 z-0 transition-transform duration-500 group-hover:scale-95 opacity-20">
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-700/30 via-black/60 to-amber-400/10 pointer-events-none z-10" />
        <ScrollArea className="w-full h-full rounded-lg bg-zinc-900 p-2 shadow-inner shadow-amber-600 relative z-0">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none text-white">
              Booking Summary
            </h4>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between items-center bg-zinc-800 p-2 rounded-md">
                <div>
                  <p className="text-xs font-medium text-white">
                    Homestay in Coorg
                  </p>
                  <p className="text-xs text-zinc-400">2 nights • 2 adults</p>
                </div>
                <span className="text-xs text-white">₹6,800</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-800 p-2 rounded-md">
                <div>
                  <p className="text-xs font-medium text-white">Jeep Safari</p>
                  <p className="text-xs text-zinc-400">Half day • 2 people</p>
                </div>
                <span className="text-xs text-white">₹2,500</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-800 p-2 rounded-md">
                <div>
                  <p className="text-xs font-medium text-white">
                    Cab: Coorg to Mysore
                  </p>
                  <p className="text-xs text-zinc-400">145 km • SUV</p>
                </div>
                <span className="text-xs text-white">₹3,200</span>
              </div>
              <div className="h-px w-full my-2 bg-zinc-700" />
              <div className="flex justify-between font-medium bg-zinc-800 p-2 rounded-md">
                <p className="text-xs font-medium text-white">Total Amount</p>
                <div>
                  <p className="text-xs text-white">₹12,500</p>
                  <p className="text-[10px] text-emerald-500">
                    Pay in 3 EMIs @ ₹4,167
                  </p>
                </div>
              </div>
              <div className="flex gap-1 my-2">
                <div className="h-6 w-8 bg-zinc-800 rounded flex items-center justify-center text-[10px] text-white">
                  UPI
                </div>
                <div className="h-6 w-8 bg-zinc-800 rounded flex items-center justify-center text-[10px] text-white">
                  Card
                </div>
                <div className="h-6 w-12 bg-zinc-800 rounded flex items-center justify-center text-[10px] text-white">
                  BNPL
                </div>
                <div className="h-6 w-16 bg-zinc-800 rounded flex items-center justify-center text-[10px] text-white">
                  EMI
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    ),
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 bg-black text-white p-2 shadow-inner shadow-amber-600",
  },
  {
    Icon: CalendarIcon,
    name: "Smart Calendar & Reminders",
    description:
      "Track bookings, events, and trip alerts — all in one integrated timeline.",
    href: "/",
    cta: "Stay on track",
    background: (
      <div className="absolute inset-4 z-0 bg-black rounded-lg transition-transform duration-500 group-hover:scale-95 opacity-20">
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-amber-700/30 via-black/60 to-amber-400/10 pointer-events-none z-10" />
        <Calendar
          mode="single"
          selected={new Date()}
          className="rounded-md shadow-inner shadow-amber-600 relative z-0"
        />
      </div>
    ),
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 bg-black text-white shadow-inner shadow-amber-600",
  },
];

export function BentoDemo() {
  return (
    <>
      <div className="flex justify-center items-center rounded-4xl p-10 flex-col group mt-166">
        <div className="w-full flex-col gap-2 justify-center items-center text-center">
          <Heading label="What Makes Us Unique"></Heading>
          <Tagline label="Discover the magic behind every journey."></Tagline>

          <div className="flex justify-center my-10">
            <div className="w-2/5 h-1 rounded-full bg-amber-500 transition-all duration-300 shadow-none group-hover:shadow-[0_0_20px_6px_rgba(245,158,11,0.7)] group-hover:w-[60%]"></div>
          </div>
        </div>
        <BentoGrid className="lg:grid-rows-3 shadow-inner shadow-amber-600">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </>
  );
}

export default BentoDemo;
