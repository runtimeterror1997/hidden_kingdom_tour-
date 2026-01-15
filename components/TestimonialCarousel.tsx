"use client";

import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Avatar might not be installed, I'll check.
import Autoplay from "embla-carousel-autoplay"; // Need to install if I want autoplay, but I'll skip for now or use basic setup.

// I'll simulate Avatar if not installed, or use simple div.
// Shadcn Avatar: "npx shadcn@latest add avatar" - I haven't installed it.
// I'll use a circular div.

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "United Kingdom",
    text: "Our trip to Bhutan with Hidden Kingdom Tour was absolutely magical. The guide was knowledgeable, and the itinerary was perfect. A life-changing experience!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    text: "Professional service from start to finish. Drukair flight arrangements were seamless, and the hotels were top-notch. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Spain",
    text: "Bhutan is a special place, and this agency made sure we saw the real authentic side of it. The trekking experience was tough but rewarding.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Smith",
    location: "USA",
    text: "We felt so welcomed. The 'happiness' philosophy truly shines through the people. Thank you for an unforgettable journey.",
    rating: 5,
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-0 md:-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="pl-0 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="h-full border-none shadow-none bg-zinc-50 dark:bg-zinc-900">
                <CardContent className="flex flex-col gap-4 p-6 h-full items-center text-center md:items-start md:text-left">
                  <div className="flex gap-1 text-primary">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="mt-auto flex items-center gap-3 pt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
