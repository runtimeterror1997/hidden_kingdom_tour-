import Image from "next/image";

const HotelHero = () => {
  return (
    <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-zinc-900 pt-20">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/hotels/hero.png" 
          alt="Premium Hotels in Bhutan" 
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
          Stunning Stays in <span className="text-primary">Bhutan</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-white/80">
          From hilltop palaces to riverside retreats, experience the legendary Bhutanese hospitality in our selected premium partners.
        </p>
      </div>
    </section>
  );
};

export default HotelHero;
