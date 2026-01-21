"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Hotels from "@/components/Hotels";

interface LocationHotelDetailProps {
  location: string;
  title: string;
  description: string;
  heroImage: string;
}

export default function LocationHotelDetail({
  location,
  title,
  description,
  heroImage,
}: LocationHotelDetailProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-zinc-900 pt-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImage} 
            alt={title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-xs font-semibold tracking-widest uppercase">
            Curated Accommodations
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
             Best Hotels in <span className="text-primary">{location}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            {description}
          </p>
        </div>
      </section>

      <div className="py-12">
        <Hotels location={location} />
      </div>
    </div>
  );
}
