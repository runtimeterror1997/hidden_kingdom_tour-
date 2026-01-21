import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { tours } from "@/data/tours";
import ItineraryDownloadButton from "@/components/ItineraryDownloadButton";

// In a real app, fetch data based on ID.
// For static export (if needed), generateStaticParams.

interface PageProps {
  params: Promise<{ id: string; category: string }>;
}

export default async function TourDetailsPage({ params }: PageProps) {
  const { id, category } = await params;
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    notFound();
  }

  // Ensure url category matches tour category
  if (tour.category.toLowerCase() !== category.toLowerCase()) {
      // Ideally redirect, but for now notFound is fine or just render
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Detail Header */}
      <div className="relative h-[40vh] min-h-[500px] bg-zinc-900 flex items-end">
         <div className="absolute inset-0">
             <Image 
                src={tour.detailImage || tour.image} 
                alt={tour.title} 
                fill 
                className="object-cover" 
                priority 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
         </div>
         
         <div className="relative z-10 container mx-auto px-4 pb-16 space-y-6">
             <Link href={`/tours/${category}`} className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to {category.charAt(0).toUpperCase() + category.slice(1)} Tours
             </Link>
             <div className="space-y-2">
                 <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wider">
                    {tour.category}
                 </span>
                 <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">{tour.title}</h1>
             </div>
             <div className="flex flex-wrap gap-6 text-white/90">
                 <div className="flex items-center gap-2">
                     <Clock className="w-5 h-5 text-primary" />
                     <span>{tour.duration}</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <MapPin className="w-5 h-5 text-primary" />
                     <span>Paro, Thimphu, Punakha</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <Calendar className="w-5 h-5 text-primary" />
                     <span>Best time: Mar-May, Sep-Nov</span>
                 </div>
             </div>
         </div>
      </div>

      <SectionWrapper className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-bold">Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                      {tour.description}
                      <br /><br />
                      This itinerary is designed to give you a comprehensive experience of Bhutan's unique culture and stunning landscapes.
                  </p>
              </div>

              <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-bold">Highlights</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tour.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>

              {tour.inclusions && tour.inclusions.length > 0 && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-serif font-bold">What's Included</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tour.inclusions.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              )}

              <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-bold">Itinerary</h2>
                  <div className="border-l-2 border-primary/20 space-y-8 pl-8 py-2 relative">
                      {tour.itinerary.map((day) => (
                          <div key={day.day} className="relative">
                              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-black bg-primary box-content ring-1 ring-primary/20"></span>
                              <h3 className="text-xl font-bold mb-2">Day {day.day}: {day.title}</h3>
                              <p className="text-muted-foreground">{day.description}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* Sidebar Booking Card */}
          <div className="relative">
              <div className="sticky top-24 p-6 rounded-2xl border shadow-sm bg-white dark:bg-zinc-900 space-y-6">
                  <div>
                      <h3 className="text-xl font-bold">Ready to Book?</h3>
                      <p className="text-sm text-muted-foreground mt-1">Contact us for a personalized quote.</p>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t">
                      <Button asChild className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                        <Link href={`/book-now?interest=${tour.category.toLowerCase()}&tour=${encodeURIComponent(tour.title)}`}>
                          Book This Tour
                        </Link>
                      </Button>
                      <ItineraryDownloadButton tour={tour} />
                  </div>
                  
                  <div className="text-xs text-muted-foreground text-center pt-4">
                      * Includes visa, accommodation, meals, transport and guide.
                  </div>
              </div>
          </div>
      </SectionWrapper>
    </div>
  );
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    id: tour.id,
    category: tour.category.toLowerCase(),
  }));
}
