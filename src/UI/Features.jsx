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

const features = [
  {
    Icon: RocketIcon,
    name: "AI Itinerary Planner",
    description:
      "Get personalized travel plans based on your interests, budget, and time.",
    href: "/",
    cta: "Explore",
    background: (
      <div className="absolute inset-4 z-0">
        <Skeleton className="w-full h-full rounded-lg bg-zinc-900" />
      </div>
    ),
    className:
      "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bg-black text-white shadow-inner p-2",
  },
  {
    Icon: HomeIcon,
    name: "Local Experiences",
    description:
      "Book immersive homestays, workshops, and temple tours in rural communities.",
    href: "/",
    cta: "Discover",
    background: (
      <div className="absolute inset-4 z-0">
        <Skeleton className="w-full h-full rounded-lg bg-zinc-900" />
      </div>
    ),
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-black text-white shadow-inner",
  },
  {
    Icon: PersonIcon,
    name: "Village Guides & Hosts",
    description:
      "Connect with trusted locals—guides, cooks, and artists with ratings and profiles.",
    href: "/",
    cta: "Meet locals",
    background: (
      <div className="absolute inset-4 z-0">
        <Skeleton className="w-73 h-59 mt-40 rounded-lg bg-zinc-900" />
      </div>
    ),
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 bg-black text-white p-2 shadow-inner",
  },
  {
    Icon: BackpackIcon,
    name: "Travel & Payments",
    description:
      "Book rides, stays, and pay with UPI, BNPL, or microloans in one place.",
    href: "/",
    cta: "Get started",
    background: (
      <div className="absolute inset-4 z-0">
        <Skeleton className="w-73 h-59 mt-40 rounded-lg bg-zinc-900" />
      </div>
    ),
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 bg-black text-white p-2 shadow-inner p-2",
  },
  {
    Icon: CalendarIcon,
    name: "Smart Calendar & Reminders",
    description:
      "Track bookings, events, and trip alerts — all in one integrated timeline.",
    href: "/",
    cta: "Stay on track",
    background: (
      <div className="absolute inset-4 z-0 bg-zinc-900 rounded-lg opacity-20">
        <Calendar mode="single" selected={new Date()} className="rounded-md" />
      </div>
    ),
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 bg-black text-white shadow-inner",
  },
];

export function BentoDemo() {
  return (
    <div className="flex justify-center items-center mx-64 my-64">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default BentoDemo;
