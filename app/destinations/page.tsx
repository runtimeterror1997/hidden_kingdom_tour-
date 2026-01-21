"use client";

import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { destinations } from "@/data/destinations";
import { cn } from "@/lib/utils";
import { ArrowRight, MapPin, Info } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-0 pb-14 bg-zinc-50/50">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0">
          <Image
            src="/assets/home/dochula.png"
            alt="Bhutan Destinations"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white">
            Discover <span className="text-primary italic">Bhutan</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            From mystical valleys to ancient fortresses, explore the incredible diversity of the Land of the Thunder Dragon.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div 
              key={dest.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-800 shadow-sm">
                    {dest.altitude}
                  </span>
                </div>
              </div>
              
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-zinc-900 group-hover:text-primary transition-colors">
                  {dest.name}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                  {dest.description}
                </p>
                
                <div className="pt-4 border-t border-zinc-50 flex items-center justify-between">
                  <Button asChild variant="ghost" className="pl-0 text-zinc-900 font-bold text-xs tracking-widest hover:text-primary transition-colors group/btn">
                    <Link href={`/destinations/${dest.id}`} className="flex items-center gap-2">
                       LEARN MORE <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
