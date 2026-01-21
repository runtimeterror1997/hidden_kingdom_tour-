"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface DestinationDetailProps {
  name: string;
  altitude: string;
  image: string;
  fullDescription: string;
  mustVisit: string[];
}

export default function DestinationDetail({
  name,
  altitude,
  image,
  fullDescription,
  mustVisit,
}: DestinationDetailProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-zinc-900 group">
        <div className="absolute inset-0 z-0">
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-6 pt-32">
          <div className="flex justify-center mb-4">
             <Button variant="ghost" asChild className="text-white hover:text-primary backdrop-blur-md bg-white/10 rounded-full border border-white/20">
                <Link href="/destinations" className="flex items-center gap-2">
                   <ArrowLeft className="w-4 h-4" />
                   Back to Destinations
                </Link>
             </Button>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
             {name}
          </h1>
          <div className="flex items-center justify-center gap-3 text-white/90 font-medium tracking-widest uppercase text-sm animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            <MapPin className="w-4 h-4 text-primary" />
            <span>At altitude: {altitude}</span>
          </div>
        </div>
      </section>

      <SectionWrapper className="relative -mt-20 z-10">
        <div className="bg-white dark:bg-zinc-900 rounded-[3rem] p-8 md:p-16 shadow-2xl border border-zinc-100 dark:border-zinc-800">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-10">
                 <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white mb-8">About {name}</h2>
                    {fullDescription.split('\n\n').map((paragraph, i) => (
                       <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg mb-6 last:mb-0">
                          {paragraph}
                       </p>
                    ))}
                 </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-10">
                 <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-3xl p-8 sticky top-32">
                    <h3 className="text-2xl font-serif font-bold mb-8 text-zinc-900 dark:text-white flex items-center gap-3">
                       Must-Visit Places
                       <Sparkles className="w-5 h-5 text-primary" />
                    </h3>
                    <ul className="space-y-6">
                       {mustVisit.map((place, i) => (
                          <li key={i} className="flex items-start gap-4 group">
                             <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0 transition-transform group-hover:scale-125" />
                             <div>
                                <span className="text-zinc-700 dark:text-zinc-300 font-bold tracking-tight leading-snug block group-hover:text-primary transition-colors cursor-default">{place}</span>
                             </div>
                          </li>
                       ))}
                    </ul>

                    <div className="mt-12 pt-12 border-t border-zinc-200 dark:border-zinc-700">
                        <Button className="w-full h-14 rounded-2xl bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white font-black text-sm tracking-widest uppercase hover:bg-primary transition-all duration-300" asChild>
                           <Link href="/book-now">
                              PLAN A TRIP TO {name.toUpperCase()}
                           </Link>
                        </Button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

import { Sparkles } from "lucide-react";
