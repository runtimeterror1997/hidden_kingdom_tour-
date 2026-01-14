"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone, 
  ChevronUp,
  MessageCircle,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChatBot } from "./ChatBot";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#fdfdfc] text-[#4a4a4a] pt-1 pb-8 border-t border-zinc-100">
      {/* Brand Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-yellow-500 to-primary/80 mb-16" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand identity */}
          <div className="lg:col-span-3 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="text-[22px] font-serif font-bold tracking-tight text-[#2d3663]">
                Hidden Kingdom <span className="text-primary italic">Tour</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Explore the untouched beauty of the Land of the Thunder Dragon. Specializing in high-end, personalized journeys.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all">
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Our Tour Packages */}
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <h3 className="text-lg font-serif font-bold text-zinc-800 relative inline-block">
              Tour Packages
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm text-zinc-500 font-medium">
              <li><Link href="/tours/cultural" className="hover:text-primary transition-colors">Cultural Tours</Link></li>
              <li><Link href="/tours/festival" className="hover:text-primary transition-colors">Festival Tours</Link></li>
              <li><Link href="/tours/trekking" className="hover:text-primary transition-colors">Himalayan Trekking</Link></li>
              <li><Link href="/tours/adventure" className="hover:text-primary transition-colors">Adventure & Biking</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <h3 className="text-lg font-serif font-bold text-zinc-800 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm text-zinc-500 font-medium">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/hotels" className="hover:text-primary transition-colors">Hotels</Link></li>
              <li><Link href="/travel" className="hover:text-primary transition-colors">Travel Info</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: External Links */}
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <h3 className="text-lg font-serif font-bold text-zinc-800 relative inline-block">
              External Links
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm text-zinc-500 font-medium">
              <li><a href="https://www.mfa.gov.bt/tourism/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Department of Tourism</a></li>
              <li><a href="https://www.drukair.com.bt/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Drukair</a></li>
              <li><a href="https://www.bhutanairlines.bt/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Bhutan Airlines</a></li>
              <li><a href="https://www.doi.gov.bt/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Immigration</a></li>
              <li><a href="https://www.abto.org.bt/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ABTO</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="lg:col-span-3 space-y-6 text-center md:text-left">
            <h3 className="text-lg font-serif font-bold text-zinc-800 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4 text-sm text-zinc-500 flex flex-col items-center md:items-start">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Ugyen Building, Babesa, Thimphu</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+975-1755-6636</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@hiddenkingdomtour.com" className="hover:text-primary transition-colors">info@hiddenkingdomtour.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-100 flex justify-center items-center w-full">
          <div className="text-xs text-zinc-400 text-center tracking-widest font-medium uppercase">
            © {new Date().getFullYear()} Hidden Kingdom Tour ◉ All Rights Reserved
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {isChatOpen && (
          <div className="absolute bottom-20 right-0 sm:right-4">
             <ChatBot onClose={() => setIsChatOpen(false)} />
          </div>
        )}
        <WhatsAppButton />
        
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-md border border-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden lg:block">
            <p className="text-sm font-bold text-primary">Chat with AI Guide</p>
            <div className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b border-l border-zinc-100 rotate-45" />
          </div>

          <Button 
            size="icon" 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={cn(
              "h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-xl transition-all duration-300 hover:scale-110 relative",
              !isChatOpen && "after:absolute after:inset-0 after:rounded-full after:bg-primary/40 after:animate-ping after:scale-110 after:-z-10"
            )}
          >
            {isChatOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <MessageCircle className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
      </div>
    </footer>
  );
}
