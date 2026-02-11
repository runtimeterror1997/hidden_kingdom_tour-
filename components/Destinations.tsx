"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { destinations } from "@/data/destinations";
import { Button } from "./ui/button";
import { useRef, useState, useEffect } from "react";

export function Destinations() {
  const homeDestinations = destinations.slice(0, 12);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Slightly more than one card width
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Explore Bhutan</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-zinc-900 dark:text-white">
            Discover Destinations
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
            From sacred valleys to mountain fortresses, each destination tells a unique story.
          </p>
        </div>
        <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80" asChild>
          <Link href="/destinations">
            View All Destinations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      {/* Horizontal Scrollable Container */}
      <div className="relative -mx-4 md:mx-0">
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-1 px-4 md:px-0 scrollbar-hide"
        >
          <div className="flex gap-6 min-w-max md:min-w-0">
            {homeDestinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.id}`}
                className="group flex-shrink-0 w-[320px] md:w-[360px] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={90}
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Altitude Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-zinc-900 dark:text-white">{dest.altitude.replace('alt. ', '')}</span>
                    </div>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 leading-relaxed">
                    {dest.description}
                  </p>
                  
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Scroll Indication Gradient (optional visual cue) */}
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none md:hidden" />
      </div>

      {/* Scroll Navigation Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-zinc-800 disabled:hover:border-zinc-200 dark:disabled:hover:border-zinc-700 disabled:hover:text-zinc-700 dark:disabled:hover:text-zinc-300 transition-all shadow-sm hover:shadow"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-zinc-800 disabled:hover:border-zinc-200 dark:disabled:hover:border-zinc-700 disabled:hover:text-zinc-700 dark:disabled:hover:text-zinc-300 transition-all shadow-sm hover:shadow"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Add custom scrollbar hiding CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </SectionWrapper>
  );
}
