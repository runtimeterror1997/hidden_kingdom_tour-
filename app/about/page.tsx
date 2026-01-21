import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, MapPin, BookOpen, Clock, Leaf, Phone, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[550px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/home/about.png" 
            alt="About OASIS" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">About OASIS</h1>
          <p className="max-w-xl mx-auto text-lg text-white/90">
            We are passionate storytellers, guides, and hosts, eager to share the magic of Bhutan with the world.
          </p>
        </div>
      </section>

      <SectionWrapper className="space-y-24">
         {/* Story Section */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                 <div className="w-20 h-1 bg-primary rounded-full" />
                 <h2 className="text-4xl font-serif font-bold text-zinc-900 dark:text-white leading-tight">Our <span className="text-primary">Journey</span></h2>
                 <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                   <p>
                       <span className="text-zinc-900 dark:text-white font-medium">Oasis Tours and Treks</span> was born from a simple yet profound mission: to unveil the soul of the Hidden Kingdom. We believe that a true journey goes beyond sightseeing—it is about connection. Connection to the warm hospitality of our people, the ancient wisdom of our traditions, and the pristine silence of our forests.
                   </p>
                   <p>
                       As a premier boutique travel agency in Bhutan, we curate experiences that are as unique as our guests. From high-altitude treks to immersive cultural exchanges and luxury retreats, our dedicated team of local experts ensures that your journey through the Land of the Thunder Dragon is seamless, safe, and truly unforgettable.
                   </p>
                 </div>
             </div>
             <div className="grid grid-cols-2 gap-4 h-[500px]">
                 <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl group">
                     <Image 
                       src="/assets/home/drugyal.png" 
                       alt="Bhutanese tradition" 
                       fill 
                       className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                     />
                 </div>
                 <div className="grid grid-rows-2 gap-4 h-full">
                     <div className="relative h-full rounded-3xl overflow-hidden shadow-xl group">
                         <Image 
                           src="/assets/home/tadzong.png" 
                           alt="Bhutan Tour" 
                           fill 
                           className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                         />
                     </div>
                     <div className="relative h-full rounded-3xl overflow-hidden shadow-xl group">
                         <Image 
                           src="/assets/home/airport.png" 
                           alt="Bhutan Scenic" 
                           fill 
                           className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                         />
                     </div>
                 </div>
             </div>
         </div>

         {/* Why Choose Us Section */}
         <div className="space-y-12">
             <div className="text-center space-y-4">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold">Why Choose OASIS</h2>
                 <p className="max-w-2xl mx-auto text-muted-foreground">
                     We don't just show you Bhutan; we help you feel it. Here is what sets us apart.
                 </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                     { 
                         title: "Local Expertise", 
                         desc: "We are 100% Bhutanese-owned and operated. Our team was born and raised here, giving you access to stories and places only locals know.",
                         icon: Users
                     },
                     { 
                         title: "Tailored Journeys", 
                         desc: "No two travelers are alike. We customize every itinerary—whether you want a hardcore trek, a spiritual retreat, or a luxury escape.", 
                         icon: MapPin 
                     },
                     { 
                         title: "Verified Quality", 
                         desc: "We personally inspect every hotel, restaurant, and car. We use only TCB-certified guides and drivers to ensure top-tier safety and comfort.", 
                         icon: BookOpen // Using BookOpen as placeholder for Quality/Check
                     },
                     { 
                        title: "Seamless Logistics", 
                        desc: "From visa processing to flight ticketing and permits, we handle all the bureaucracy so you can focus on the experience.", 
                        icon: Clock 
                    },
                    { 
                        title: "Sustainable Travel", 
                        desc: "We are committed to eco-friendly practices. We support local communities, minimize plastic use, and respect our carbon-negative status.", 
                        icon: Leaf 
                    },
                    { 
                        title: "24/7 Support", 
                        desc: "From the moment you inquire until you fly back home, our team provides round-the-clock support for any need or emergency.", 
                        icon: Phone 
                    }
                 ].map((item, idx) => (
                     <div key={idx} className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 hover:border-primary/20 hover:shadow-lg transition-all group">
                         <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                             <item.icon className="w-6 h-6 text-primary" />
                         </div>
                         <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                         <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                     </div>
                 ))}
             </div>
         </div>

         {/* Philosophy Section */}
         {/* <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
             <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur rounded-full text-primary font-bold text-xs tracking-widest uppercase">
                    <Heart className="w-3 h-3 fill-current" />
                    Our Philosophy
                 </div>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900">
                     Guests as Family
                 </h2>
                 <p className="text-lg text-zinc-700 leading-relaxed font-light">
                     "In Bhutan, a guest is never just a client, but a friend who has traveled far to visit our home. Our philosophy is simple: we welcome you with the same warmth, care, and honesty that we extend to our own family."
                 </p>
                 <div className="pt-4">
                     <p className="font-bold text-zinc-900">Kinga Wangchuk</p>
                     <p className="text-sm text-zinc-500 uppercase tracking-widest">Founder, OASIS Tours and Treks</p>
                 </div>
             </div>
         </div> */}

         {/* Gallery Section */}
         <div className="space-y-12">
             <div className="text-center space-y-4">
                 <h2 className="text-3xl font-serif font-bold">Glimpses of Bhutan</h2>
                 <p className="max-w-xl mx-auto text-muted-foreground">
                     A visual journey through the landscapes, traditions, and spirit of the Thunder Dragon.
                 </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                 {/* Landscape 1 - Large Span */}
                 <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
                     <Image 
                       src="/assets/home/punakhaa.png" 
                       alt="Punakha Dzong" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                         <p className="text-white font-medium text-sm">Punakha Dzong - The Palace of Great Happiness</p>
                     </div>
                 </div>

                 {/* Portrait 1 - Tall Span */}
                 <div className="md:row-span-2 relative group overflow-hidden rounded-2xl">
                     <Image 
                       src="/assets/home/tigernest.png" 
                       alt="Tiger's Nest" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                         <p className="text-white font-medium text-sm">Paro Taktsang</p>
                     </div>
                 </div>

                 {/* Square 1 */}
                 <div className="relative group overflow-hidden rounded-2xl">
                     <Image 
                       src="/assets/home/tachog.png" 
                       alt="Prayer Flags" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                         <p className="text-white font-medium text-sm">Tachog Lhakhang</p>
                     </div>
                 </div>

                 {/* Square 2 */}
                 <div className="relative group overflow-hidden rounded-2xl">
                     <Image 
                       src="/assets/home/dochula.png" 
                       alt="Dochula Pass" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                         <p className="text-white font-medium text-sm">Dochula Pass</p>
                     </div>
                 </div>

                 {/* Landscape 2 - Wide Span */}
                 <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl hover:scale-[1.02] transition-transform duration-500 shadow-xl">
                     <Image 
                       src="/assets/home/lingzhi.png" 
                       alt="Himalayan Vista" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                         <p className="text-white font-medium text-sm">Lingzhi </p>
                     </div>
                 </div>

                 {/* Portrait 2 - Tall Span */}
                 <div className="md:row-span-2 relative group overflow-hidden rounded-2xl">
                     <Image 
                       src="/assets/home/memorial.png" 
                       alt="Spiritual Immersion" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                         <p className="text-white font-medium text-sm">Memorial Chorten</p>
                     </div>
                 </div>

                 {/* Final Grid Item */}
                 <div className="md:col-span-1 relative group overflow-hidden rounded-2xl">
                   <Image 
                       src="/assets/home/about.png" 
                       alt="Memorial Chorten" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                         <p className="text-white font-medium text-sm">Gantey</p>
                     </div>
            </div>
            <div className="md:col-span-1 relative group overflow-hidden rounded-2xl">
                   <Image 
                       src="/assets/home/phob.png" 
                       alt="Memorial Chorten" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                         <p className="text-white font-medium text-sm">Phobikha</p>
                     </div>
            </div>
            {/* Landscape 2 - Wide Span */}
                 <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl hover:scale-[1.02] transition-transform duration-500 shadow-xl">
                     <Image 
                       src="/assets/home/dzong.png" 
                       alt="Himalayan Vista" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
                 <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                         <p className="text-white font-medium text-sm">Tashichoe Dzong</p>
                     </div>
            </div>
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl hover:scale-[1.02] transition-transform duration-500 shadow-xl">
                     <Image 
                       src="/assets/home/bhuddha.png" 
                       alt="Himalayan Vista" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                         <p className="text-white font-medium text-sm">Bhuddha Dordenma</p>
                     </div>
                 </div>
             </div>
         </div>

         {/* CTA */}
         <div className="bg-primary/5 rounded-2xl p-12 text-center space-y-6">
             <h2 className="text-3xl font-serif font-bold">Meet the Team</h2>
             <p className="max-w-2xl mx-auto text-muted-foreground">
                 Our guides are certified by the Tourism Council of Bhutan and are passionate ambassadors of our culture.
             </p>
             <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                 <Link href="/contact">Get in Touch</Link>
             </Button>
         </div>
      </SectionWrapper>
    </div>
  );
}
