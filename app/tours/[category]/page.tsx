import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  
  // Case insensitive matching
  const categoryFilter = category.charAt(0).toUpperCase() + category.slice(1);
  const filteredTours = tours.filter(
      (t) => t.category.toLowerCase() === category.toLowerCase()
  );

  const validCategories = ["cultural", "trekking", "festival", "luxury", "adventure"];
  
  if (!validCategories.includes(category.toLowerCase())) {
      notFound();
  }

  const categoryImages: Record<string, string> = {
    cultural: "/assets/home/tigernest.png",
    trekking: "/assets/trekking/trek.png",
    festival: "/assets/festival/highlandfes.png",
    luxury: "/assets/luxury/sixes.png",
    adventure: "/assets/adventure/image.png"
  };

  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen">
      {/* Category Hero */}
      <div className="relative h-[40vh] min-h-[500px] bg-zinc-900 flex items-end">
        <div className="absolute inset-0">
          <Image 
            src={categoryImages[category.toLowerCase()] || "/assets/home/tigernest.png"} 
            alt={categoryFilter} 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-16 space-y-6">
          <Link href="/tours" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> All Categories
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">{categoryFilter} Tours</h1>
            <p className="max-w-2xl text-lg text-white/80">
              Explore our handpicked {categoryFilter.toLowerCase()} itineraries in the Land of the Thunder Dragon.
            </p>
          </div>
        </div>
      </div>

      <SectionWrapper>
        {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        ) : (
            <div className="text-center py-12 text-muted-foreground">
                <p>No tours found in this category yet. Check back soon!</p>
            </div>
        )}
      </SectionWrapper>
    </div>
  );
}

export async function generateStaticParams() {
  return [
      { category: "cultural" },
      { category: "trekking" },
      { category: "festival" },
      { category: "luxury" },
      { category: "adventure" }
  ];
}
