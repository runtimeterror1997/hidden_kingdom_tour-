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
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-zinc-900">
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
                {/* <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-bold tracking-widest uppercase">Destination</span>
                </div> */}
                
                <h3 className="text-2xl font-serif font-bold text-zinc-900 group-hover:text-primary transition-colors">
                  {dest.name}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                  {dest.description}
                </p>
                
                <div className="pt-4 border-t border-zinc-50 flex items-center justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="inline-flex items-center gap-2 text-zinc-900 font-bold text-xs tracking-widest hover:text-primary transition-colors group/btn">
                        VIEW DETAILS <Info className="h-3 w-3 transition-transform group-hover/btn:scale-110" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0 rounded-3xl border-none shadow-2xl">
                      <div className="relative h-[250px] w-full shrink-0">
                        <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                          <DialogTitle className="text-4xl font-serif font-bold mb-1">{dest.name}</DialogTitle>
                          <div className="flex items-center gap-2 opacity-80 font-medium tracking-wide">
                            <MapPin className="h-4 w-4" />
                            <span>{dest.altitude}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
                        <div className="prose prose-zinc max-w-none">
                          {dest.fullDescription.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="text-zinc-600 leading-relaxed mb-6 text-lg last:mb-0">
                              {paragraph}
                            </p>
                          ))}

                          <div className="mt-10 pt-10 border-t border-zinc-100">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-zinc-900">Must-Visit Places</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {dest.mustVisit.map((place, i) => (
                                <li key={i} className="flex items-start gap-3 group/item">
                                  <div className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0 transition-transform group-hover/item:scale-125" />
                                  <span className="text-zinc-700 font-medium tracking-tight leading-snug">{place}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* <div className="mt-10 pt-8 border-t border-zinc-100 flex justify-end">
                           <Button asChild className="rounded-full px-8 h-12 font-bold tracking-widest">
                             <Link href={`/tours?destination=${dest.id}`}>EXPLORE TOURS IN {dest.name.toUpperCase()} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                           </Button>
                        </div> */}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
