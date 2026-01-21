import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Flag, Heart, Mountain, Music, Users, GraduationCap, Flower2 } from "lucide-react";

export default function KnowBhutanPage() {
  return (
    <div className="min-h-screen pt-0 pb-14 bg-zinc-50 dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[550px]">
        <div className="absolute inset-0 bg-[url('/assets/home/dzong.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center pt-32">
          <div className="text-center text-white space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Know Bhutan</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-light text-zinc-100">
              Discover the Land of the Thunder Dragon, where happiness is the ultimate wealth.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="space-y-24">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div className="w-16 h-1 bg-primary rounded-full" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 dark:text-white">
                    A Kingdom Like No Other
                </h2>
                <div className="space-y-4 text-justify text-muted-foreground leading-relaxed">
                    <p>
                        Bhutan, often revered as the glorious "Last Shangri-La", represents the last surviving Mahayana Buddhist Kingdom in the Himalayas. Hidden away in the folds of the mighty eastern Himalayas, it is a country where ancient traditions and a unique philosophy of life thrive in the modern world.
                    </p>
                    <p>
                        Known to the locals as <strong>Druk Yul</strong> (Land of the Thunder Dragon), Bhutan is a place where the environment is fiercely protected, culture is preserved, and Gross National Happiness is more important than Gross National Domestic Product.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-[400px]">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
                    <Image src="/assets/home/tigernest.png" alt="Tiger's Nest" fill className="object-cover" />
                </div>
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl mt-8">
                    <Image src="/assets/home/punakhaa.png" alt="Bhutan Landscape" fill className="object-cover" />
                </div>
            </div>
        </div>

        {/* Quick Facts */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-lg border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-2xl font-serif font-bold mb-8 text-center">Quick Facts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                    <Flag className="w-8 h-8 text-primary mx-auto" />
                    <p className="font-bold text-zinc-800 dark:text-zinc-100">Capital</p>
                    <p className="text-sm text-muted-foreground">Thimphu</p>
                </div>
                <div className="text-center space-y-2">
                    <Users className="w-8 h-8 text-primary mx-auto" />
                    <p className="font-bold text-zinc-800 dark:text-zinc-100">Population</p>
                    <p className="text-sm text-muted-foreground">~780,000</p>
                </div>
                <div className="text-center space-y-2">
                    <BookOpen className="w-8 h-8 text-primary mx-auto" />
                    <p className="font-bold text-zinc-800 dark:text-zinc-100">Language</p>
                    <p className="text-sm text-muted-foreground">Dzongkha</p>
                </div>
                 <div className="text-center space-y-2">
                    <Flower2 className="w-8 h-8 text-primary mx-auto" />
                    <p className="font-bold text-zinc-800 dark:text-zinc-100">National Flower</p>
                    <p className="text-sm text-muted-foreground">Blue Poppy</p>
                </div>
            </div>
        </div>

        {/* GNH Section */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
             <div className="md:col-span-5 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                 <Image src="/assets/home/yulay.png" alt="Monks of Bhutan" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                 <div className="absolute bottom-8 left-8 text-white">
                     <p className="font-serif text-2xl font-bold">"Happiness is a Place"</p>
                 </div>
             </div>
             <div className="md:col-span-7 space-y-8">
                 <div className="space-y-4">
                     <h2 className="text-3xl md:text-4xl font-serif font-bold flex items-center gap-3">
                         <Heart className="w-8 h-8 text-red-500 fill-current" />
                         Gross National Happiness
                     </h2>
                     <p className="text-lg text-muted-foreground italic">
                         "Gross National Happiness is more important than Gross National Product."
                     </p>
                     <p className="text-sm text-primary font-bold tracking-wide uppercase">
                         — His Majesty the Fourth King of Bhutan
                     </p>
                 </div>
                 <div className="text-muted-foreground space-y-4 leading-relaxed text-justify">
                     <p>
                        Bhutan's development philosophy is guided by the principle of Gross National Happiness (GNH). 
                        It emphasizes that sustainable development should take a holistic approach towards notions of progress and give equal importance to non-economic aspects of wellbeing.
                     </p>
                     <div className="grid sm:grid-cols-2 gap-4 pt-4">
                         <Card className="bg-zinc-50 dark:bg-zinc-800 border-none">
                             <CardContent className="p-6">
                                 <h4 className="font-bold mb-2">1. Sustainable Development</h4>
                                 <p className="text-xs text-muted-foreground">Equitable socio-economic development.</p>
                             </CardContent>
                         </Card>
                         <Card className="bg-zinc-50 dark:bg-zinc-800 border-none">
                             <CardContent className="p-6">
                                 <h4 className="font-bold mb-2">2. Cultural Preservation</h4>
                                 <p className="text-xs text-muted-foreground">Promotion of cultural values.</p>
                             </CardContent>
                         </Card>
                         <Card className="bg-zinc-50 dark:bg-zinc-800 border-none">
                             <CardContent className="p-6">
                                 <h4 className="font-bold mb-2">3. Environmental Conservation</h4>
                                 <p className="text-xs text-muted-foreground">Preservation of natural environment.</p>
                             </CardContent>
                         </Card>
                         <Card className="bg-zinc-50 dark:bg-zinc-800 border-none">
                             <CardContent className="p-6">
                                 <h4 className="font-bold mb-2">4. Good Governance</h4>
                                 <p className="text-xs text-muted-foreground">Establishment of good governance.</p>
                             </CardContent>
                         </Card>
                     </div>
                 </div>
             </div>
        </div>

        <Separator />

        {/* Culture & Geography Grid */}
        <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Music className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-serif font-bold">Culture & Festivals</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    Bhutanese culture is deeply rooted in Vajrayana Buddhism. This shapes every aspect of life, from the architecture of our Dzongs (fortresses) to the colors of our national dress. 
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    The highlight of the Bhutanese calendar are the <strong>Tshechus</strong> (festivals), where mask dances invoke deities and bless the onlookers. It is a riot of color, music, and spiritual energy.
                </p>
            </div>
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Mountain className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-serif font-bold">Geography & Nature</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    Bhutan is a biodiversity hotspot. With 72% forest coverage, it is the world's first carbon-negative country. From the subtropical jungles of the south to the snow-capped peaks of the north (some over 7,000m and unclimbed), the landscape is dramatic and pristine.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    It is home to rare species like the Bengal Tiger, Snow Leopard, Black-Necked Crane, and the Takin (our national animal).
                </p>
            </div>
        </div>

      </SectionWrapper>
    </div>
  );
}
