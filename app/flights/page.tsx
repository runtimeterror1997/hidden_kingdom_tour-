import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Plane, MapPin, Calendar, Clock, Info, CheckCircle2 } from "lucide-react";

export default function FlightsPage() {
  return (
    <div className="min-h-screen pt-0 pb-14 bg-zinc-50 dark:bg-black">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[550px]">
        <div className="absolute inset-0 bg-[url('/assets/home/footer.png')] bg-cover bg-center">
             <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Flights to Bhutan</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-200">
              Your journey to the clouds begins with a spectacular flight into the Himalayas.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="space-y-20">
        
        {/* Intro to Airlines */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white">Review Your Options</h2>
            <p className="text-muted-foreground leading-relaxed">
                Flights to Bhutan are operated by two carriers: <strong>Drukair</strong> (Royal Bhutan Airlines) and <strong>Bhutan Airlines</strong> (Tashi Air). 
                The descent into Paro International Airport is widely considered one of the most breathtaking commercial flights in the world, offering views of Mt. Everest, Kanchenjunga, and other Himalayan giants.
            </p>
            <div className="flex justify-center gap-8 pt-4">
                 {/* Placeholders for logos if available, otherwise text */}
                 <div className="flex flex-col items-center gap-2">
                     <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center p-3">
                        <Plane className="w-8 h-8 text-primary" />
                     </div>
                     <span className="font-bold text-sm">Drukair</span>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                     <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center p-3">
                        <Plane className="w-8 h-8 text-orange-500" />
                     </div>
                     <span className="font-bold text-sm">Bhutan Airlines</span>
                 </div>
            </div>
        </div>

        {/* Route Map Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-zinc-100">
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Connecting Cities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { city: "Bangkok (BKK)", country: "Thailand", freq: "Daily flights" },
                        { city: "Delhi (DEL)", country: "India", freq: "Daily flights" },
                        { city: "Kathmandu (KTM)", country: "Nepal", freq: "Regular flights" },
                        { city: "Kolkata (CCU)", country: "India", freq: "Regular flights" },
                        { city: "Singapore (SIN)", country: "Singapore", freq: "Weekly flights" },
                        { city: "Dhaka (DAC)", country: "Bangladesh", freq: "Regular flights" },
                        { city: "Bagdogra (IXB)", country: "India", freq: "Seasonal" },
                        { city: "Guwahati (GAU)", country: "India", freq: "Seasonal" },
                    ].map((route) => (
                        <div key={route.city} className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <div>
                                <p className="font-bold text-sm text-zinc-800 dark:text-zinc-200">{route.city}</p>
                                <p className="text-xs text-muted-foreground">{route.country}</p>
                                <p className="text-[10px] text-primary font-medium mt-1 uppercase tracking-wide">{route.freq}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-6">
                <div className="relative h-[250px] md:h-[350px] w-full bg-zinc-100 rounded-3xl overflow-hidden shadow-inner border border-zinc-200 flex items-center justify-center">
                    <p className="text-zinc-400 font-medium italic">Route Map Visualization</p>
                    {/* Ideally an image of the route map would go here */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center" />
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        Flight Tip
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                        For the best views of the Himalayas:
                        <br />• <strong>Flying IN:</strong> Request a seat on the LEFT side.
                        <br />• <strong>Flying OUT:</strong> Request a seat on the RIGHT side.
                    </p>
                </div>
            </div>
        </div>

        <Separator />

        {/* Booking Info */}
        <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-center">Important Flight Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                             <CheckCircle2 className="w-5 h-5 text-green-500" />
                             Baggage Allowance
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                        <p><strong>Economy:</strong> 30kg (checked) + 7kg (cabin)</p>
                        <p><strong>Business:</strong> 40kg (checked) + 7kg (cabin)</p>
                        <p className="text-xs italic pt-2">Excess baggage fees apply and can be high.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                         <CardTitle className="text-lg flex items-center gap-2">
                             <Clock className="w-5 h-5 text-orange-500" />
                             Check-In
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                        <p>Counters open 3 hours before departure.</p>
                        <p>Web check-in is available 24 hours prior for Drukair.</p>
                        <p>We recommend arriving early due to strict security protocols.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                         <CardTitle className="text-lg flex items-center gap-2">
                             <Calendar className="w-5 h-5 text-blue-500" />
                             Schedules
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                        <p>Flight schedules change seasonally (Winter/Summer).</p>
                        <p>Weather in Paro can cause delays, especially in Monsoon.</p>
                        <p>We always advise keeping a buffer day in your itinerary.</p>
                    </CardContent>
                </Card>
            </div>
        </div>

        {/* CTA */}
        <div className="bg-zinc-900 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative z-10 space-y-6">
                <h2 className="text-3xl font-serif font-bold">Let Us Handle Your Tickets</h2>
                <p className="max-w-2xl mx-auto text-zinc-300">
                    Booking flights to Paro can be tricky during peak season. As a registered tour operator, we can reserve and issue flight tickets for you at standard rates, ensuring your travel dates align perfectly with your tour.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 rounded-full">
                        <Link href="/contact">Enquire Flights</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-zinc-700 text-black hover:bg-zinc-800 hover:text-white font-bold px-8 h-12 rounded-full bg-transparent">
                        <a href="https://www.drukair.com.bt" target="_blank" rel="noopener noreferrer">Visit Drukair</a>
                    </Button>
                </div>
            </div>
        </div>

      </SectionWrapper>
    </div>
  );
}
