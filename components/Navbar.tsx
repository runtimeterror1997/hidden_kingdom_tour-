"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  Phone, 
  MessageCircle, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Search, 
  ChevronDown,
  Mountain,
  Palmtree,
  Tent,
  Music,
  Crown,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  Info,
  Calendar as CalendarIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { tours } from "@/data/tours";
import { Badge } from "@/components/ui/badge";

// Helper to get tours by category
const getToursByCategory = (category: string) => {
  return tours.filter(t => t.category === category || (category === "Optional" && (t.category === "Luxury" || t.category === "Adventure")));
};

const navItems = [
  { name: "Home", href: "/", type: "link" },
  { 
    name: "Packages", 
    href: "/tours", 
    type: "mega-menu",
    categories: [
      { name: "CULTURAL", href: "/tours/cultural", icon: Crown },
      { name: "FESTIVAL", href: "/tours/festival", icon: Music },
      { name: "TREKKING", href: "/tours/trekking", icon: Mountain },
      { name: "ADVENTURE", href: "/tours/adventure", icon: Tent },
      { name: "LUXURY", href: "/tours/luxury", icon: Sparkles },
    ],
    popularCultural: [
      { name: "Bhutan Express Tour", href: "/tours/cultural/bhutan-express", duration: "4 Days", featured: true },
      { name: "Spiritual Immersion", href: "/tours/cultural/spiritual-immersion", duration: "6 Days" },
      { name: "Glimpse of Bhutan", href: "/tours/cultural/glimpse-of-bhutan", duration: "5 Days" },
      { name: "Central Bhutan Explorer", href: "/tours/cultural/central-bhutan-explorer", duration: "10 Days" },
    ],
    popularTrekking: [
      { name: "Jomolhari Trek", href: "/tours/trekking/jomolhari-trek", duration: "10 Days", difficulty: "Medium" },
      { name: "Druk Path Trek", href: "/tours/trekking/druk-path-trek", duration: "9 Days" },
      { name: "Dagala Thousand Lakes", href: "/tours/trekking/dagala-thousand-lakes", duration: "6 Days" },
      { name: "Snowman Trek", href: "/tours/trekking/snowman-trek", duration: "25 Days", difficulty: "Hard" },
    ],
    upcomingFestivals: [
      { name: "Paro Tshechu", href: "/tours/festival/paro-tshechu-festival", date: "April 2026", location: "Paro" },
      { name: "Thimphu Tsechu", href: "/tours/festival/thimphu-tsechu", date: "September 2026", location: "Thimphu" },
      { name: "Punakha Tsechu", href: "/tours/festival/punakha-tsechu", date: "February 2026", location: "Punakha" },
      { name: "Royal Highland", href: "/tours/festival/royal-highland-festival", date: "October 2026", location: "Gasa" },
    ]
  },
  { name: "Travel Info", href: "/travel", type: "link" },
  { name: "Destinations", href: "/destinations", type: "link" },
  { name: "Hotels", href: "/hotels", type: "link" },
  { name: "About Us", href: "/about", type: "link" },
  { name: "Contact", href: "/contact", type: "link" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans",
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-zinc-200/50 py-1 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)]" 
          : "bg-white py-2"
      )}
    >
      {/* Top Bar - Minimal & Clean */}
      <div className={cn(
        "bg-zinc-50/80 border-b border-zinc-100/50 transition-all duration-500 overflow-hidden",
        isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
      )}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-10 text-[11px] font-medium tracking-tight">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-6 text-zinc-500">
              <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group">
                <Phone className="h-3.5 w-3.5 text-primary group-hover:rotate-12 transition-transform" />
                <span>+975-1755-6636</span>
              </span>
              <span className="hidden sm:flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group">
                <Mail className="h-3.5 w-3.5 text-primary group-hover:-translate-y-0.5 transition-transform" />
                <span>info@hiddenkingdomtour.com</span>
              </span>
            </div>
            {/* Right: Socials & Tagline */}
            <div className="flex items-center gap-4">
              <span className="text-zinc-400 hidden lg:inline mr-2 tracking-widest uppercase text-[9px] font-bold opacity-80">
                Official BHUTAN Travel Specialist
              </span>
              <div className="flex gap-4">
                <Facebook className="h-3.5 w-3.5 text-zinc-400 hover:text-primary cursor-pointer transition-all hover:scale-110" />
                <Instagram className="h-3.5 w-3.5 text-zinc-400 hover:text-primary cursor-pointer transition-all hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <div className={cn(
              "relative transition-all duration-500",
              isScrolled ? "w-36 h-10" : "w-44 h-14"
            )}>
              <Image 
                src="/assets/logo.png" 
                alt="Hidden Kingdom Tour" 
                fill 
                className="object-contain object-left group-hover:brightness-110 transition-all duration-500" 
                priority 
              />
            </div>
          </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative group/nav py-2">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex items-center gap-1.5 px-4 py-2 text-[15px] font-bold tracking-tight transition-all duration-300 whitespace-nowrap overflow-hidden group/link",
                      "text-zinc-800 hover:text-primary"
                    )}
                  >
                    <span>{item.name}</span>
                    {item.type === "mega-menu" && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover/nav:rotate-180 text-zinc-400 group-hover/nav:text-primary" />
                    )}
                    {/* Animated Underline */}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.type === "mega-menu" && (
                    <>
                      <div className="absolute top-full left-0 w-full h-4" />
                      
                      <div className="absolute top-[calc(100%+0.5rem)] -left-[300px] min-w-[1050px] bg-white text-zinc-900 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-500 z-[100] translate-y-4 group-hover/nav:translate-y-0 border border-zinc-100 backdrop-blur-3xl lg:flex items-stretch">
                        
                        {/* Categories List (Sidebar) */}
                        <div className="w-[240px] bg-zinc-50/50 p-6 space-y-1 border-r border-zinc-100">
                          <p className="text-[10px] font-black text-zinc-400 tracking-widest uppercase mb-4 px-3">Discover By Category</p>
                          {item.categories?.map((cat) => {
                            const Icon = cat.icon;
                            return (
                              <Link
                                key={cat.name}
                                href={cat.href}
                                className="group/cat flex items-center gap-3 px-4 py-3 text-[13px] font-bold text-zinc-600 hover:text-primary hover:bg-white transition-all rounded-xl relative border border-transparent hover:border-zinc-200 hover:shadow-sm"
                              >
                                <div className="w-8 h-8 rounded-lg bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover/cat:text-primary group-hover/cat:border-primary/20 transition-colors">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <span className="relative z-10">{cat.name}</span>
                              </Link>
                            );
                          })}
                          <div className="mt-8 pt-6 border-t border-zinc-200/60 p-3">
                            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                              <p className="text-[11px] font-bold text-primary mb-1">Expert Advice</p>
                              <p className="text-[10px] text-zinc-500 leading-relaxed italic">Not sure which package fits your style? Call us for a 1-on-1 consultation.</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 grid grid-cols-3">
                          {/* Popular Cultural */}
                          <div className="py-10 px-10 border-r border-zinc-100">
                            <h3 className="text-[10px] font-black text-primary tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
                              POPULAR CULTURAL
                              <Crown className="w-3 h-3 opacity-50" />
                            </h3>
                            <div className="flex flex-col gap-6">
                              {item.popularCultural?.map((tour) => (
                                <Link key={tour.name} href={tour.href} className="group/item flex flex-col gap-1 transition-all">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[15px] font-bold text-zinc-800 group-hover/item:text-primary transition-colors leading-tight">{tour.name}</span>
                                    {tour.featured && <Badge variant="secondary" className="bg-primary/10 text-primary text-[9px] h-4 px-1 px-1.5 border-none">TOP</Badge>}
                                  </div>
                                  <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                                    <Clock className="w-3 h-3" />
                                    <span>{tour.duration} JOURNEY</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Popular Trekking */}
                          <div className="py-10 px-10 border-r border-zinc-100">
                            <h3 className="text-[10px] font-black text-primary tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
                              POPULAR TREKKING
                              <Mountain className="w-3 h-3 opacity-50" />
                            </h3>
                            <div className="flex flex-col gap-6">
                              {item.popularTrekking?.map((tour) => (
                                <Link key={tour.name} href={tour.href} className="group/item flex flex-col gap-1 transition-all">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[15px] font-bold text-zinc-800 group-hover/item:text-primary transition-colors leading-tight">{tour.name}</span>
                                    {tour.difficulty && <span className={cn("text-[9px] px-1.5 py-0.5 rounded font-black uppercase text-white", tour.difficulty === 'Hard' ? 'bg-orange-500' : 'bg-emerald-500')}>{tour.difficulty}</span>}
                                  </div>
                                  <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                                    <Clock className="w-3 h-3" />
                                    <span>{tour.duration} TREK</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Upcoming Festivals */}
                          <div className="py-10 px-10 bg-zinc-50/30">
                            <h3 className="text-[10px] font-black text-primary tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
                              UPCOMING FESTIVALS
                              <Music className="w-3 h-3 opacity-50" />
                            </h3>
                            <div className="flex flex-col gap-6">
                              {item.upcomingFestivals?.map((tour) => (
                                <Link key={tour.name} href={tour.href} className="group/item bg-white p-4 rounded-xl border border-zinc-100 hover:border-primary/20 hover:shadow-md transition-all">
                                  <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                      <span className="text-[14px] font-bold text-zinc-800 group-hover/item:text-primary transition-colors leading-tight">{tour.name}</span>
                                      <span className="text-[9px] font-black text-primary uppercase bg-primary/5 px-2 py-0.5 rounded-full">{tour.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-medium">
                                      <CalendarIcon className="w-3 h-3" />
                                      <span>{tour.date}</span>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side: CTA */}
            <div className="hidden xl:flex items-center gap-4">
              <Button 
                asChild
                className={cn(
                  "bg-primary hover:bg-primary/90 text-white text-[11px] font-black tracking-widest px-8 rounded-full shadow-xl transition-all duration-300 uppercase relative overflow-hidden group/cta",
                  isScrolled ? "h-10" : "h-11 shadow-primary/20 hover:-translate-y-1"
                )}
              >
                <Link href="/book-now">
                  <span className="relative z-10">START PLANNING</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="xl:hidden flex items-center gap-3">
               <Button 
                variant="ghost" 
                size="icon" 
                className="text-zinc-800 hover:bg-zinc-100 transition-colors rounded-full" 
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="right" className="w-full sm:w-[420px] p-0 border-l-0 bg-white/95 backdrop-blur-xl">
                  <SheetTitle className="sr-only">Main Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-white">
                       <Image 
                          src="/assets/logo.png" 
                          alt="Hidden Kingdom Tour" 
                          width={140}
                          height={40}
                          className="object-contain" 
                        />
                       <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setIsOpen(false)} 
                        className="rounded-full bg-zinc-50 hover:bg-zinc-100 transition-all hover:rotate-90"
                       >
                          <Menu className="h-5 w-5 rotate-90" />
                       </Button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-8 py-10 custom-scrollbar">
                      <div className="flex flex-col gap-10">
                        {navItems.map((item) => (
                          <div key={item.name} className="flex flex-col gap-4">
                            {item.type === "mega-menu" ? (
                              <div className="flex flex-col gap-6">
                                <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase opacity-70 mb-2">{item.name}</span>
                                <div className="grid grid-cols-1 gap-y-5">
                                    {item.categories?.map((cat) => {
                                      const Icon = cat.icon;
                                      return (
                                        <Link
                                          key={cat.name}
                                          href={cat.href}
                                          onClick={() => setIsOpen(false)}
                                          className="group flex items-center gap-4 py-2"
                                        >
                                          <div className="h-10 w-10 rounded-xl bg-zinc-50 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all border border-zinc-100">
                                            <Icon className="h-5 w-5" />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="text-base font-bold text-zinc-800 group-hover:text-primary transition-colors tracking-tight">{cat.name}</span>
                                            <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">Explore Packages</span>
                                          </div>
                                          <ChevronDown className="h-4 w-4 -rotate-90 text-zinc-300 ml-auto group-hover:text-primary transition-all" />
                                        </Link>
                                      );
                                    })}
                                </div>
                              </div>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-black text-zinc-900 hover:text-primary transition-all tracking-tighter"
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Footer */}
                    <div className="p-8 bg-zinc-900 text-white rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <p className="text-[10px] font-black text-zinc-400 tracking-[0.2em] uppercase">Connect With Us</p>
                          <a href="tel:+97517556636" className="text-xl font-bold text-white flex items-center gap-4 hover:text-primary transition-colors group">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                              <Phone className="h-5 w-5" />
                            </div>
                            +975-1755-6636
                          </a>
                        </div>
                        <Button 
                          asChild 
                          className="w-full h-14 rounded-2xl text-xs font-black tracking-[0.2em] uppercase bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 group/cta-mob"
                        >
                          <Link href="/book-now" onClick={() => setIsOpen(false)}>
                            Plan Your Journey
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
  );
}
