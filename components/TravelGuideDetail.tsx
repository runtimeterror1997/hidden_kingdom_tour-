"use client";

import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface TravelGuideDetailProps {
  title: string;
  subtitle: string;
  heroImage: string;
  children: React.ReactNode;
}

export function TravelGuideDetail({
  title,
  subtitle,
  heroImage,
  children,
}: TravelGuideDetailProps) {
  return (
    <div className="min-h-screen pt-0 pb-14 bg-zinc-50 dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center pt-32 justify-center text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white">
              {title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-light text-zinc-100">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="relative -mt-20 z-10">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100 dark:border-zinc-800">
            <div className="mb-8">
                <Button variant="ghost" asChild className="pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground hover:text-primary">
                    <Link href="/">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
            
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                {children}
            </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
