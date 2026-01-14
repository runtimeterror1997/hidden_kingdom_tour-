import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen">
      <div className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Link href="/tours" className="inline-flex items-center text-white/60 hover:text-white mb-2 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> All Categories
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">{categoryFilter} Tours</h1>
          <p className="max-w-xl mx-auto text-white/80">
            Explore our handpicked {categoryFilter.toLowerCase()} itineraries.
          </p>
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
