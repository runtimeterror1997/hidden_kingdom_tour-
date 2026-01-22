"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  ChevronDown,
  Mountain,
  Music,
  Crown,
  MapPin,
  Clock,
  Calendar as CalendarIcon
} from "lucide-react";
// Tawk.to replaces the custom ChatBot
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { tours } from "@/data/tours";
import { Badge } from "@/components/ui/badge";

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
      { name: "ADVENTURE", href: "/tours/adventure", icon: Mountain },
      { name: "LUXURY", href: "/tours/luxury", icon: Crown },
    ],
    popularCultural: [
      { name: "Bhutan Express Tour", href: "/tours/cultural/bhutan-express", duration: "4 DAYS JOURNEY", featured: true },
      { name: "Spiritual Immersion", href: "/tours/cultural/spiritual-immersion", duration: "6 DAYS JOURNEY" },
      { name: "Glimpse of Bhutan", href: "/tours/cultural/glimpse-of-bhutan", duration: "5 DAYS JOURNEY" },
      { name: "Central Bhutan Explorer", href: "/tours/cultural/central-bhutan-explorer", duration: "10 DAYS JOURNEY" },
    ],
    popularTrekking: [
      { name: "Jomolhari Trek", href: "/tours/trekking/jomolhari-trek", duration: "10 DAYS TREK", difficulty: "MEDIUM" },
      { name: "Druk Path Trek", href: "/tours/trekking/druk-path-trek", duration: "9 DAYS TREK" },
      { name: "Dagala Thousand Lakes", href: "/tours/trekking/dagala-thousand-lakes", duration: "6 DAYS TREK" },
      { name: "Snowman Trek", href: "/tours/trekking/snowman-trek", duration: "25 DAYS TREK", difficulty: "HARD" },
    ],
    upcomingFestivals: [
      { name: "Paro Tshechu", href: "/tours/festival/paro-tshechu-festival", date: "April 2026", location: "PARO" },
      { name: "Thimphu Tsechu", href: "/tours/festival/thimphu-tsechu", date: "September 2026", location: "THIMPHU" },
      { name: "Punakha Tsechu", href: "/tours/festival/punakha-tsechu", date: "February 2026", location: "PUNAKHA" },
      { name: "Royal Highland", href: "/tours/festival/royal-highland-festival", date: "October 2026", location: "GASA" },
    ]
  },
  { 
    name: "Know Bhutan", 
    href: "/know-bhutan", 
    type: "dropdown",
    items: [
      { name: "Destination Bhutan", href: "/know-bhutan/destination" },
      { name: "History of Bhutan", href: "/know-bhutan/history" },
      { name: "Geography of Bhutan", href: "/know-bhutan/geography" },
      { name: "The Government in Bhutan", href: "/know-bhutan/government" },
      { name: "Bhutan's Cultural Heritage", href: "/know-bhutan/culture" },
      { name: "Bhutan's Natural Heritage", href: "/know-bhutan/nature" },
      { name: "National Symbols of Bhutan", href: "/know-bhutan/symbols" },
      { name: "Buddhism in Bhutan", href: "/know-bhutan/buddhism" },
      { name: "Population of Bhutan", href: "/know-bhutan/population" },
      { name: "Economy of Bhutan", href: "/know-bhutan/economy" },
      { name: "Health and Education in Bhutan", href: "/know-bhutan/health-education" },
      { name: "Cuisine of Bhutan", href: "/know-bhutan/cuisine" },
      { name: "Sports in Bhutan", href: "/know-bhutan/sports" },
      { name: "Arts and Crafts in Bhutan", href: "/know-bhutan/arts-crafts" },
    ]
  },
  {
    name: "Travel Guide",
    href: "/travel",
    type: "dropdown",
    items: [
      { name: "How to Reach Bhutan", href: "/travel-guide/how-to-reach" },
      { name: "Immigration in Bhutan", href: "/travel-guide/immigration" },
      { name: "Bhutan Visa Requirements", href: "/travel-guide/visa-requirements" },
      { name: "Permit for Indian Travellers", href: "/travel-guide/indian-tourist-permit" },
      { name: "Weather in Bhutan", href: "/travel-guide/weather" },
      { name: "Sustainable Development Fee", href: "/travel-guide/sdf" },
      { name: "Health Precautions", href: "/travel-guide/health-precautions" },
      { name: "Communication", href: "/travel-guide/communication" },
      { name: "Tourist Guides in Bhutan", href: "/travel-guide/tourist-guides" },
      { name: "Transportation in Bhutan", href: "/travel-guide/transportation" },
      { name: "Bhutan Distance Chart", href: "/travel-guide/distance-chart" },
      { name: "Photography in Bhutan", href: "/travel-guide/photography" },
    ]
  },
  { 
    name: "Flights", 
    href: "/flights", 
    type: "dropdown",
    items: [
      { name: "Bhutan Airlines – Tashi Air", href: "/flights/bhutan-airlines" },
      { name: "Druk Air – Royal Bhutan Airlines", href: "/flights/druk-air" },
      { name: "Royal Bhutan Helicopter Services", href: "/flights/helicopter-services" },
      { name: "Heli Bhutan", href: "/flights/heli-bhutan" },
    ]
  },
  {
    name: "Destinations",
    href: "/destinations",
    type: "dropdown",
    items: [
      { name: "Paro", href: "/destinations/paro" },
      { name: "Thimphu", href: "/destinations/thimphu" },
      { name: "Punakha", href: "/destinations/punakha" },
      { name: "Phobjikha", href: "/destinations/phobjikha" },
      { name: "Bumthang", href: "/destinations/bumthang" },
      { name: "Haa", href: "/destinations/haa" },
      { name: "Trongsa", href: "/destinations/trongsa" },
      { name: "Mongar", href: "/destinations/mongar" },
      { name: "Trashigang", href: "/destinations/trashigang" },
      { name: "Gasa", href: "/destinations/gasa" },
      { name: "Trashiyangtse", href: "/destinations/trashiyangtse" },
      { name: "Merak & Sakteng", href: "/destinations/merak-sakteng" },
    ]
  },
  { name: "Hotels", href: "/hotels", type: "link" },
  { name: "About Us", href: "/about", type: "link" },
  { name: "Contact", href: "/contact", type: "link" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = React.useState<string | null>(null);

  React.useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-20 transition-all duration-700 font-sans",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-200/50 shadow-sm py-1" 
          : "bg-transparent py-2"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Desktop Layout: Header Section */}
        <div className="hidden lg:flex flex-col gap-4 relative">
          
          {/* Top Row: Info Bar & Logo */}
          <div className={cn(
            "flex items-center justify-between border-b transition-all duration-500",
            isScrolled ? "pb-2 border-zinc-200/50" : "pb-4 border-white/10"
          )}>
             {/* Left: Contact Info */}
             <div className={cn(
               "flex-1 flex items-center gap-6 text-[10px] font-bold tracking-widest uppercase transition-colors duration-500",
               isScrolled ? "text-zinc-500" : "text-zinc-100/60"
             )}>
                <a href="tel:+97517257452" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-3 w-3 text-primary" />
                  <span>+975-17257452</span>
                </a>
                <a href="mailto:oasistours.info@gmail.com" className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-3 w-3 text-primary" />
                  <span className="lowercase" >oasistours.info@gmail.com</span>
                </a>
             </div>

             {/* Center: Logo */}
             <div className="flex-none px-8">
                <Link href="/" className="flex items-center group transition-all duration-700 hover:scale-105 shrink-0">
                  <div className={cn(
                    "relative transition-all duration-700",
                    isScrolled ? "w-50 h-18" : "w-52 h-20"
                  )}>
                    <Image 
                      src={isScrolled ? "/assets/blackf_logo.png" : "/assets/whitef_logo.png"} 
                      alt="OASIS Tours and Treks" 
                      fill 
                      className="object-contain transition-all duration-700" 
                      priority 
                    />
                  </div>
                </Link>
             </div>

             {/* Right: Socials */}
             <div className="flex-1 flex items-center justify-end gap-3 uppercase transition-all duration-500">
                {/* Facebook */}
                <a 
                  target="_blank" 
                  href="https://www.facebook.com/people/Oasis-tour-and-trek/61586763656788/" 
                  className={cn(
                    "p-1.5 rounded-full border border-[#1877F2] flex items-center justify-center text-[#1877F2] bg-transparent transition-all hover:scale-110"
                  )}
                  title="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  target="_blank" 
                  href="https://www.instagram.com/oasistoursandtreks_?igsh=MXJtM2ttajRxOGF3Nw==" 
                  className={cn(
                    "p-1.5 rounded-full flex items-center justify-center bg-transparent transition-all group/social hover:scale-110"
                  )}
                  title="Instagram"
                >
                   <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="instagram-gradient-navbar" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#405DE6" offset="0%" />
                        <stop stopColor="#5851DB" offset="10%" />
                        <stop stopColor="#833AB4" offset="20%" />
                        <stop stopColor="#C13584" offset="30%" />
                        <stop stopColor="#E1306C" offset="40%" />
                        <stop stopColor="#FD1D1D" offset="50%" />
                        <stop stopColor="#F56040" offset="60%" />
                        <stop stopColor="#F77737" offset="70%" />
                        <stop stopColor="#FCAF45" offset="80%" />
                        <stop stopColor="#FFDC80" offset="100%" />
                      </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="19" stroke="url(#instagram-gradient-navbar)" strokeWidth="2" />
                    <g transform="translate(10, 10) scale(0.83)">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#instagram-gradient-navbar)" strokeWidth="2.5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#instagram-gradient-navbar)" strokeWidth="2.5" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#instagram-gradient-navbar)" strokeWidth="2.5" strokeLinecap="round" />
                    </g>
                  </svg>
                </a>

                {/* TikTok */}
                <a 
                  target="_blank" 
                  href="https://www.tiktok.com/@touragent2?_r=1&_t=ZS-93G2CHp1uTQ" 
                  className={cn(
                    "p-1.5 rounded-full flex items-center justify-center bg-transparent transition-all group/social hover:scale-110"
                  )}
                  title="TikTok"
                >
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="tiktok-gradient-navbar" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="black" />
                        <stop offset="100%" stopColor="#FE2C55" />
                      </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="19" stroke="url(#tiktok-gradient-navbar)" strokeWidth="2" />
                    <g transform="translate(10, 10) scale(0.83)">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="black" />
                      <path d="M19.59 7.19a4.83 4.83 0 0 1-3.77-4.25V2.5h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.9a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.6a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#FE2C55" style={{ mixBlendMode: 'multiply' }} opacity="0.8" />
                    </g>
                  </svg>
                </a>
             </div>

          </div>

          {/* Bottom Row: Navigation Links */}
          <nav className="flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className={cn("py-1 group/nav", item.type === "dropdown" && "relative")}
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-1 text-[14px] font-semibold transition-all duration-300 rounded-lg",
                    isScrolled 
                      ? "text-zinc-800 hover:text-primary hover:bg-zinc-50" 
                      : "text-zinc-100 hover:text-white hover:bg-white/10"
                  )}
                >
                  <span>{item.name}</span>
                  {(item.type === "mega-menu" || item.type === "dropdown") && (
                    <ChevronDown className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      isScrolled ? "text-zinc-400" : "text-zinc-400/70",
                      activeMenu === item.name ? "rotate-180" : ""
                    )} />
                  )}
                </Link>

                {/* Mega Menu Content */}
                {item.type === "mega-menu" && activeMenu === item.name && (
                  <div className="absolute top-full left-0 right-0 pt-4 z-50">
                    <div className="bg-white rounded-3xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.15)] border border-zinc-100 overflow-hidden flex min-h-[450px]">
                      {/* Left Sidebar */}
                      <div className="w-52 bg-zinc-50/30 p-8 border-r border-zinc-100 flex flex-col justify-between shrink-0">
                        <div>
                          <p className="text-[10px] font-black text-zinc-300 tracking-[0.2em] uppercase mb-3">Discover by Category</p>
                          <div className="space-y-1">
                            {item.categories?.map((cat) => (
                              <Link 
                                key={cat.name} 
                                href={cat.href} 
                                className="group/cat flex items-center gap-4 py-1.5 px-3 rounded-xl hover:bg-zinc-50 transition-all duration-300"
                              >
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 group-hover/cat:bg-white group-hover/cat:shadow-sm border border-transparent group-hover/cat:border-zinc-100 flex items-center justify-center transition-all">
                                  <cat.icon className="w-4 h-4 text-zinc-400 group-hover/cat:text-primary transition-colors" />
                                </div>
                                <span className="text-xs font-black text-zinc-500 group-hover/cat:text-zinc-900 tracking-widest uppercase transition-colors">{cat.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-8 p-6 rounded-2xl bg-orange-50/50 border border-orange-100/50 text-left">
                           <h5 className="text-[10px] font-black text-orange-500 tracking-widest uppercase mb-2">Expert Advice</h5>
                           <p className="text-[11px] leading-relaxed text-zinc-500 font-medium italic">
                             Not sure which package fits your style? Call us for a 1-on-1 consultation.
                           </p>
                        </div>
                      </div>

                      {/* Main Content Areas */}
                      <div className="flex-1 flex overflow-hidden">
                        {/* Column 1: Popular Cultural */}
                        <div className="flex-1 p-8 pt-10 border-r border-zinc-50">
                           <div className="flex items-center gap-3 mb-8">
                             <h3 className="text-[11px] font-black text-orange-400 tracking-[0.2em] uppercase">Popular Cultural</h3>
                             <Crown className="w-3 h-3 text-orange-300" />
                           </div>
                           <div className="space-y-7">
                              {item.popularCultural?.map(t => (
                                <Link key={t.name} href={t.href} className="group/item block relative">
                                   <div className="flex flex-col gap-1 text-left">
                                      <h4 className="text-[13px] font-bold text-zinc-800 group-hover/item:text-primary transition-colors pr-6 leading-snug">{t.name}</h4>
                                      <div className="flex items-center gap-2 text-zinc-400">
                                         <Clock className="w-2.5 h-2.5" />
                                         <span className="text-[9px] font-black tracking-widest uppercase">{t.duration}</span>
                                      </div>
                                      {t.featured && (
                                        <div className="absolute top-0 right-0 px-1.5 py-0.5 rounded bg-orange-50 text-orange-400 text-[8px] font-black tracking-widest uppercase border border-orange-100/50">TOP</div>
                                      )}
                                   </div>
                                </Link>
                              ))}
                           </div>
                        </div>

                        {/* Column 2: Popular Trekking */}
                        <div className="flex-1 p-8 pt-10 border-r border-zinc-50">
                           <div className="flex items-center gap-3 mb-8">
                             <h3 className="text-[11px] font-black text-orange-400 tracking-[0.2em] uppercase">Popular Trekking</h3>
                             <Mountain className="w-3 h-3 text-orange-300" />
                           </div>
                           <div className="space-y-7">
                              {item.popularTrekking?.map(t => (
                                <Link key={t.name} href={t.href} className="group/item block relative">
                                   <div className="flex flex-col gap-1 text-left">
                                      <div className="flex items-start justify-between gap-4">
                                         <h4 className="text-[13px] font-bold text-zinc-800 group-hover/item:text-primary transition-colors pr-6 leading-snug">{t.name}</h4>
                                         {t.difficulty && (
                                           <div className={cn(
                                             "mt-1 px-1.5 py-0.5 rounded text-[8px] font-black tracking-widest uppercase border whitespace-nowrap",
                                             t.difficulty === 'HARD' ? "bg-red-50 text-red-400 border-red-100/50" : "bg-emerald-50 text-emerald-400 border-emerald-100/50"
                                           )}>
                                             {t.difficulty}
                                           </div>
                                         )}
                                      </div>
                                      <div className="flex items-center gap-2 text-zinc-400">
                                         <Clock className="w-2.5 h-2.5" />
                                         <span className="text-[9px] font-black tracking-widest uppercase">{t.duration}</span>
                                      </div>
                                   </div>
                                </Link>
                              ))}
                           </div>
                        </div>

                        {/* Column 3: Upcoming Festivals */}
                        <div className="flex-1 p-8 pt-10 bg-zinc-50/30">
                           <div className="flex items-center gap-3 mb-8">
                             <h3 className="text-[11px] font-black text-orange-400 tracking-[0.2em] uppercase">Upcoming Festivals</h3>
                             <Music className="w-3 h-3 text-orange-300" />
                           </div>
                           <div className="flex flex-col gap-3">
                              {item.upcomingFestivals?.map(f => (
                                <Link key={f.name} href={f.href} className="group/fest bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300">
                                   <div className="flex flex-col gap-2 text-left">
                                      <div className="flex items-center justify-between gap-4">
                                         <h4 className="text-[13px] font-bold text-zinc-900 group-hover/fest:text-primary transition-colors leading-snug">{f.name}</h4>
                                         <div className="px-1.5 py-0.5 rounded bg-orange-50 text-orange-400 text-[7px] font-black tracking-widest  border border-orange-100/50 shrink-0">
                                           {f.location}
                                         </div>
                                      </div>
                                      <div className="flex items-center gap-2 text-zinc-400">
                                         <CalendarIcon className="w-2.5 h-2.5" />
                                         <span className="text-[9px] font-bold">{f.date}</span>
                                      </div>
                                   </div>
                                </Link>
                              ))}
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown Content */}
                {item.type === "dropdown" && activeMenu === item.name && (
                  <div className="absolute top-full left-0 min-w-[240px] pt-4 z-50">
                    <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-zinc-100 py-3">
                      {item.items?.map((sub) => (
                        <Link key={sub.name} href={sub.href} className="block px-6 py-2.5 text-sm font-medium text-zinc-600 hover:text-primary hover:bg-zinc-50 transition-colors">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="ml-6">
               <Button asChild className={cn(
                 "font-bold tracking-wider rounded-full transition-all duration-300 shadow-lg",
                 isScrolled 
                   ? "bg-primary hover:bg-primary/90 text-white h-9 px-6 text-[11px] shadow-primary/10" 
                   : "bg-white hover:bg-white/90 text-zinc-900 h-10 px-8 text-[12px] shadow-black/20"
               )}>
                 <Link href="/book-now">Plan Trip</Link>
               </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Navbar */}
        <div className="xl:hidden flex items-center justify-between">
          <Link href="/" className="flex items-center group shrink-0">
             <div className={cn(
                "relative transition-all duration-500",
                isScrolled ? "w-28 h-8" : "w-32 h-10"
              )}>
                <Image 
                  src={isScrolled ? "/assets/blackf_logo.png" : "/assets/whitef_logo.png"} 
                  alt="OASIS Tours and Treks" 
                  fill 
                  className="object-contain transition-all duration-500" 
                  priority 
                />
              </div>
          </Link>

          <div className="flex items-center gap-3">
             <a href="tel:+97517257452" className={cn(
               "h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm",
               isScrolled ? "bg-zinc-100 text-primary" : "bg-white/10 text-white backdrop-blur-md"
             )}>
                <Phone className="h-4 w-4" />
             </a>
             <Button 
               variant="ghost" 
               size="icon" 
               className={cn(
                 "rounded-full h-10 w-10 transition-colors",
                 isScrolled ? "text-zinc-800" : "text-white"
               )}
               onClick={() => setIsOpen(true)}
             >
               <Menu className="h-6 w-6" />
             </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-white border-l-0">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
               <Image src="/assets/blackf_logo.png" alt="OASIS" width={120} height={40} className="object-contain" />
               <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
                 <Menu className="h-6 w-6 rotate-90" />
               </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <div className="flex flex-col gap-8">
                {navItems.map((item) => (
                  <div key={item.name} className="flex flex-col gap-4">
                    {item.type === "dropdown" || item.type === "mega-menu" ? (
                      <div className="flex flex-col">
                        <button 
                          onClick={() => setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)}
                          className="flex items-center justify-between py-2 text-xl font-black text-zinc-900 tracking-tight text-left"
                        >
                          {item.name}
                          <ChevronDown className={cn(
                            "w-6 h-6 transition-transform duration-300",
                            expandedMobileItem === item.name ? "rotate-180" : ""
                          )} />
                        </button>
                        
                        <div className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedMobileItem === item.name ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
                        )}>
                          <div className="flex flex-col gap-2 pl-4 border-l-2 border-primary/20">
                            {item.type === "dropdown" ? (
                              item.items?.map(sub => (
                                <Link key={sub.name} href={sub.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-zinc-600 py-1 hover:text-primary transition-colors">{sub.name}</Link>
                              ))
                            ) : (
                              item.categories?.map(cat => (
                                <Link key={cat.name} href={cat.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-zinc-600 py-1 hover:text-primary transition-colors">{cat.name}</Link>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link href={item.href} onClick={() => setIsOpen(false)} className="text-xl font-black text-zinc-900 tracking-tight py-2">{item.name}</Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-zinc-900">
               <Button asChild className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black tracking-widest">
                  <Link href="/book-now" onClick={() => setIsOpen(false)}>TAKE THE LEAP</Link>
               </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
