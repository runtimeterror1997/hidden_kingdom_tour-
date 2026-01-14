import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HotelHero from "@/components/HotelHero";
import Hotels from "@/components/Hotels";

export default function HotelsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <HotelHero />
      <Hotels />
      
    </main>
  );
}
