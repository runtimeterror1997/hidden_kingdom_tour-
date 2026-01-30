import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Palmtree, Mountain, Users, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { TourCard } from "@/components/TourCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Destinations } from "@/components/Destinations";
import { tours } from "@/data/tours";
import { getTestimonials } from "@/lib/contentful";

export const revalidate = 60; // Revalidate every 60 seconds


export default async function Home() {
  const featuredTours = tours.filter(t => t.featured).slice(0, 3);
  const testimonials = await getTestimonials();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[800px] flex items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
           <video 
             autoPlay 
             loop 
             muted 
             playsInline
             className="w-full h-full object-cover"
           >
             <source src="/assets/home.mp4" type="video/mp4" />
           </video>
           {/* Overlay Gradient */}
           <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-8 md:pt-16 text-center space-y-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-100/60 animate-in slide-in-from-bottom-4 duration-700 fade-in">
            Welcome to the Land of the Thunder Dragon
          </span>
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight leading-[1.1] text-zinc-100/95 animate-in slide-in-from-bottom-8 duration-1000 fade-in delay-100">
            Discover the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400/80 to-orange-500/80">Hidden Kingdom</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-zinc-100/70 font-medium leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 fade-in delay-200">
            Embark on a spiritual journey through the pristine valleys and majestic Himalayas of Bhutan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-in slide-in-from-bottom-8 duration-1000 fade-in delay-300">
            <Button asChild variant={'outline'} className="bg-white/5 hover:bg-white/10 hover:text-primary border-primary/20 text-primary backdrop-blur-sm rounded-full px-4 h-10 text-sm font-bold tracking-wide transition-all duration-300">
              <Link href="/tours">
                EXPLORE PACKAGES
              </Link>
            </Button>
            <Button asChild variant={'outline'} className="bg-white/5 hover:bg-white/10 hover:text-white border-white/20 text-white backdrop-blur-sm rounded-full px-4 h-10 text-sm font-bold tracking-wide transition-all duration-300">
              <Link href="/contact">
                CUSTOMIZE TRIP
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section - Why Bhutan */}
      <SectionWrapper className="text-center space-y-12">
        <div className="space-y-4 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Happiness is a Place</h2>
           <p className="text-muted-foreground text-lg leading-relaxed">
             Bhutan is no ordinary place. It is the last great Himalayan kingdom, shrouded in mystery and magic, where a traditional Buddhist culture carefully embraces global developments.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            {[
                { icon: Mountain, title: "Pristine Nature", desc: "72% forest coverage and carbon negative." },
                { icon: Gem, title: "Rich Culture", desc: "Deeply rooted traditions and colorful festivals." },
                { icon: Users, title: "Warm Hospitality", desc: "Treating guests like family is our way of life." },
                { icon: Palmtree, title: "Wellness & Peace", desc: "A sanctuary for the soul and mind." } // Palmtree might not fit Himalayas, used generic wellness.
            ].map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-border transition-all duration-300 shadow-sm hover:shadow-md">
                    <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
            ))}
        </div>
      </SectionWrapper>

      {/* Destinations Section */}
      <Destinations />

      {/* Featured Tours */}
      <section className="bg-zinc-50 dark:bg-black/20">
        <SectionWrapper>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div className="space-y-2">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">Best Selling</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Featured Journeys</h2>
                </div>
                <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80" asChild>
                    <Link href="/tours">View All Tours <ArrowRight className="w-4 h-4" /></Link>
                </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </SectionWrapper>
      </section>

      {/* Testimonials */}
      {testimonials?.length > 0 && (
      <SectionWrapper>
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Traveler Stories</h2>
            <p className="text-muted-foreground">Hear from our guests who have experienced the magic.</p>
          </div>
        <TestimonialCarousel testimonials={testimonials} />
        </SectionWrapper>
        )}

      {/* CTA / Newsletter */}
      <section className="bg-primary text-white py-24 relative overflow-hidden bg-[url('/assets/home/airport.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Ready to Start Your Journey?</h2>
              <p className="max-w-xl mx-auto text-white/90 text-lg">
                  Let us help you design the perfect itinerary for your Bhutanese adventure.
              </p>
              <div className="flex justify-center gap-4">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-zinc-100 rounded-full h-14 px-8 font-semibold">
                      <Link href="/contact">Inquire Now</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
