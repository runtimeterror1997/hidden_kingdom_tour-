import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tour } from "@/data/tours";

// Assuming Badge is not installed yet, I will simulate it. 
// Or I should install it? "npx shadcn@latest add badge".
// I'll use a styled div for now to avoid blocking.

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="overflow-hidden group flex flex-col h-full border-border hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        {/* Placeholder for Image if not available */}
        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-muted-foreground">
             <Image src={tour.image} alt={tour.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="absolute top-4 left-4">
             <Badge variant="secondary" className="bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-sm hover:bg-primary">
                {tour.category}
             </Badge>
        </div>
      </div>
      
      <CardHeader className="p-5 pb-2">
        <h3 className="text-xl font-serif font-bold line-clamp-2 md:line-clamp-1 group-hover:text-primary transition-colors">
            <Link href={`/tours/${tour.category.toLowerCase()}/${tour.id}`}>
                {tour.title}
            </Link>
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
            <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{tour.duration}</span>
            </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-5 pt-2 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {tour.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex items-center justify-end border-t bg-muted/20 mt-auto py-4">
        <Button asChild size="sm" className="gap-2">
            <Link href={`/tours/${tour.category.toLowerCase()}/${tour.id}`}>
                View Details <ArrowRight className="w-4 h-4" />
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
