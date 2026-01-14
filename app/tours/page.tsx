import Link from "next/link";
import Image from "next/image";
import { Mountain, Palmtree, Tent, Music, Crown } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "cultural",
    title: "Cultural Tours",
    description: "Immerse yourself in the rich traditions, ancient dzongs, and daily life of Bhutan.",
    image: "/assets/home/cultural.png"
  },
  {
    id: "trekking",
    title: "Trekking Adventures",
    description: "Walk the pristine trails of the Himalayas, from short hikes to the legendary Snowman Trek.",
    image: "/assets/home/trek.png"
  },
  {
    id: "festival",
    title: "Festival Tours",
    description: "Witness the vibrant colors and spiritual energy of Tshechus across the kingdom.",
    image: "/assets/home/festival.png"
  },
  {
    id: "luxury",
    title: "Luxury Holidays",
    description: "Experience Bhutan in style with 5-star accommodations and helicopter transfers.",
    image: "/assets/luxury/luxury.png"
  },
    {
    id: "adventure",
    title: "Adventure Tours",
    description: "Rafting, mountain biking, and archery for the thrill-seekers.",
    image: "/assets/home/drugyel.png"
  }
];

export default function ToursIndexPage() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen">
      <div className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Discover Bhutan</h1>
          <p className="max-w-xl mx-auto text-white/80">
            Choose your travel style and explore the Land of the Thunder Dragon.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/tours/${cat.id}`} className="group">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
                <div className="relative h-48 bg-muted">
                    {/* Image Placeholder */}
                    <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800">
                        <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <CardContent className="p-6 text-center">
                    <div className="flex justify-center">
                         {cat.id === 'cultural' && <Crown className="w-8 h-8 text-primary mb-4" />}
                         {cat.id === 'trekking' && <Mountain className="w-8 h-8 text-primary mb-4" />}
                         {cat.id === 'festival' && <Music className="w-8 h-8 text-primary mb-4" />}
                         {cat.id === 'luxury' && <Crown className="w-8 h-8 text-primary mb-4" />}
                         {cat.id === 'adventure' && <Tent className="w-8 h-8 text-primary mb-4" />}
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm">
                        {cat.description}
                    </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
