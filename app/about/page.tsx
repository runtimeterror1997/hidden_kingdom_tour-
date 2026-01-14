import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Header */}
      <div className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">About Hidden Kingdom</h1>
          <p className="max-w-xl mx-auto text-white/80">
            We are passionate storytellers, guides, and hosts, eager to share the magic of Bhutan with the world.
          </p>
        </div>
      </div>

      <SectionWrapper className="space-y-24">
         {/* Story Section */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                 <div className="w-20 h-1 bg-primary rounded-full" />
                 <h2 className="text-4xl font-serif font-bold text-zinc-900 dark:text-white leading-tight">Our <span className="text-primary">Journey</span> Since 2010</h2>
                 <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                   <p>
                       Founded in 2010, <span className="text-zinc-900 dark:text-white font-medium">Hidden Kingdom Tour</span> began with a simple mission: to show travelers the authentic Bhutan. Beyond the famous Dzongs and festivals, we wanted to share the warm hospitality of our people, the silence of our forests, and the wisdom of our traditions.
                   </p>
                   <p>
                       Today, we are proud to be one of Bhutan's leading boutique travel agencies, specializing in customized cultural, trekking, and luxury tours. Our team of experienced guides and drivers ensure that every journey is safe, comfortable, and unforgettable.
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

         {/* Values Section */}
         <div className="text-center space-y-12">
             <h2 className="text-3xl font-serif font-bold">What We Stand For</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl space-y-4">
                     <h3 className="text-xl font-bold text-primary">Authenticity</h3>
                     <p className="text-muted-foreground">We believe in real connections. Visits to local farmhouses, interaction with monks, and participation in village life.</p>
                 </div>
                 <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl space-y-4">
                     <h3 className="text-xl font-bold text-primary">Sustainability</h3>
                     <p className="text-muted-foreground">We are committed to low-impact tourism. We support local communities and minimize our environmental footprint.</p>
                 </div>
                 <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl space-y-4">
                     <h3 className="text-xl font-bold text-primary">Excellence</h3>
                     <p className="text-muted-foreground">From luxury vehicles to verified 3-star and 5-star hotels, we never compromise on quality and comfort.</p>
                 </div>
             </div>
         </div>

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
                       src="/assets/home/imersion.png" 
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
