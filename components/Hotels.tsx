"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, MapPin, Check, X, Phone, Mail, Globe, Wifi, Flower2, Utensils, Waves } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { hotels, Hotel } from "@/data/hotels";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Hotels = () => {
  const [activeTab, setActiveTab] = useState<"All" | "Luxury" | "Premium" | "Comfort">("All");
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const filteredHotels = activeTab === "All" 
    ? hotels 
    : hotels.filter(h => h.category === activeTab);

  const tabs = ["All", "Luxury", "Premium", "Comfort"];

  const getIconForFeature = (feature: string) => {
    const f = feature.toLowerCase();
    if (f.includes('wifi')) return <Wifi className="w-4 h-4" />;
    if (f.includes('pool') || f.includes('bath')) return <Waves className="w-4 h-4" />;
    if (f.includes('spa') || f.includes('sauna')) return <Flower2 className="w-4 h-4" />;
    if (f.includes('dining') || f.includes('meals') || f.includes('restaurant')) return <Utensils className="w-4 h-4" />;
    return <Check className="w-4 h-4" />;
  };

  return (
    <SectionWrapper id="hotel-list" className="space-y-12 pb-20">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 border-b border-border pb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === tab 
                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" 
                : "bg-zinc-100 dark:bg-zinc-900 text-muted-foreground hover:bg-zinc-200 dark:hover:bg-zinc-800"
            )}
          >
            {tab}
            {tab === "Luxury" && <span className="ml-2 text-[10px] opacity-70">(5★)</span>}
            {tab === "Premium" && <span className="ml-2 text-[10px] opacity-70">(4★)</span>}
            {tab === "Comfort" && <span className="ml-2 text-[10px] opacity-70">(3★)</span>}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHotels.map((hotel) => (
          <div 
            key={hotel.id} 
            className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => setSelectedHotel(hotel)}>
              <Image 
                src={hotel.image} 
                alt={hotel.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary" className="rounded-full bg-white/90 text-zinc-900 font-bold text-xs">
                  VIEW DETAILS
                </Button>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-primary font-bold px-3 py-1">
                  {hotel.category}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-1">
                {[...Array(hotel.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-md" />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary text-xs font-semibold  tracking-wider">
                  <MapPin className="w-3 h-3" />
                  {Array.isArray(hotel.location) ? hotel.location.join(", ") : hotel.location}
                </div>
                <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedHotel(hotel)}>
                  {hotel.name}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm line-clamp-3 italic">
                "{hotel.description}"
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 pt-2">
                {hotel.features.slice(0, 3).map((feature) => (
                  <span key={feature} className="flex items-center gap-1.5 text-[10px] bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1.5 rounded-full border border-zinc-100 dark:border-zinc-700 font-medium">
                    <Check className="w-2.5 h-2.5 text-primary" />
                    {feature}
                  </span>
                ))}
                {hotel.features.length > 3 && (
                  <span className="text-[10px] text-zinc-400 pt-1 font-medium">+{hotel.features.length - 3} more</span>
                )}
              </div>

              {/* <div className="pt-4 mt-auto">
                <Button 
                  onClick={() => setSelectedHotel(hotel)}
                  className="w-full py-6 rounded-xl bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white font-bold text-xs tracking-widest hover:bg-primary transition-all duration-300 uppercase shadow-lg shadow-zinc-200 dark:shadow-none"
                >
                  Select in Package
                </Button>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Hotel Detail Modal */}
      <Dialog open={!!selectedHotel} onOpenChange={(open) => !open && setSelectedHotel(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white border-0 shadow-2xl rounded-3xl">
          {selectedHotel && (
            <div className="grid grid-cols-1 md:grid-cols-2 h-full md:max-h-[85vh] overflow-y-auto custom-scrollbar">
              {/* Image Section */}
              <div className="relative h-[300px] md:h-full min-h-[400px]">
                <Image 
                  src={selectedHotel.image} 
                  alt={selectedHotel.name} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-widest mb-2 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md">
                    <MapPin className="w-3 h-3" />
                    {Array.isArray(selectedHotel.location) ? selectedHotel.location.join(", ") : selectedHotel.location}
                  </div>
                  <DialogTitle className="text-3xl font-serif font-bold leading-tight drop-shadow-lg">{selectedHotel.name}</DialogTitle>
                  <DialogDescription className="sr-only">
                    Details and amenities for {selectedHotel.name} in {Array.isArray(selectedHotel.location) ? selectedHotel.location.join(", ") : selectedHotel.location}.
                  </DialogDescription>
                  <div className="flex gap-1 mt-3">
                    {[...Array(selectedHotel.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-md" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col gap-8 bg-zinc-50/50">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400">About the Hotel</h3>
                  <p className="text-zinc-600 leading-relaxed font-medium italic text-lg">
                    "{selectedHotel.description}"
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400">Key Amenities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedHotel.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 py-3 px-4 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          {getIconForFeature(feature)}
                        </div>
                        <span className="text-sm font-bold text-zinc-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="mt-auto pt-8 border-t border-zinc-100 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-zinc-500 text-xs font-bold px-2">
                    <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> Verified Partner</span>
                    <span className="flex items-center gap-2"><Globe className="w-3 h-3" /> Sustainable Tourism</span>
                  </div>
                  <Button className="w-full py-7 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-sm tracking-widest uppercase shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
                    SELECT THIS HOTEL
                  </Button>
                </div> */}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
};

export default Hotels;
