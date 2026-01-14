"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "./SectionWrapper";
import { destinations } from "@/data/destinations";

export function Destinations() {
  const homeDestinations = destinations.slice(0, 5);

  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-[0.1em] text-[#2d3663] ">
            Destinations
          </h2>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
            Endowed with a rich living culture and pristine natural environment, Bhutan continues to gain momentum as a high-end destination.
          </p>
        </div>
        <Link 
          href="/destinations" 
          className="group flex items-center gap-2 text-primary font-bold tracking-widest text-sm hover:gap-3 transition-all"
        >
          View All Destinations
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
        {homeDestinations.map((dest, idx) => (
          <div
            key={dest.id}
            className={cn(
              "group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl",
              idx === 0 && "lg:col-span-2 lg:row-span-2", // Paro - Feature
              idx === 4 && "lg:col-span-2 lg:row-span-1", // Bumthang - Wide
              idx === 1 && "lg:col-span-1 lg:row-span-1", // Thimphu
              idx === 2 && "lg:col-span-1 lg:row-span-1", // Punakha
              idx === 3 && "lg:col-span-1 lg:row-span-1"  // Phobjikha
            )}
          >
            {/* Background Image */}
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Bottom Overlay - Darker on larger cards */}
            <div className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent",
              idx === 0 ? "from-black/70" : "from-black/80"
            )} />
            
            {/* Content Labels */}
            <div className={cn(
              "absolute bottom-8 left-8 text-white space-y-2 transform transition-all duration-500 group-hover:-translate-y-2",
              idx === 0 ? "lg:bottom-12 lg:left-12" : "bottom-6 left-6"
            )}>
              <h3 className={cn(
                "font-serif font-bold tracking-wide",
                idx === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
              )}>
                {dest.name}
              </h3>
              <p className={cn(
                "font-medium text-white/80 tracking-widest uppercase",
                idx === 0 ? "text-sm md:text-base" : "text-xs md:text-sm"
              )}>
                {dest.altitude}
              </p>
            </div>
            
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
