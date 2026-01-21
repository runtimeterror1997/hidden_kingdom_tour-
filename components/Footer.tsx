"use client";

import Link from "next/link";
import Image from "next/image";
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
import { WhatsAppButton } from "./WhatsAppButton";
import { useState } from "react";

export function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleTawk = () => {
    setIsChatOpen(!isChatOpen);
  };

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
              <span className="text-[18px] font-sans font-black tracking-tighter text-[#2d3663] uppercase">
                OASIS <span className="text-primary italic">Tours & Treks</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Explore the untouched beauty of the Land of the Thunder Dragon. Specializing in high-end, personalized journeys.
            </p>

            <div className="flex gap-3 justify-center ">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/people/Oasis-tour-and-trek/61586763656788/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/oasistoursandtreks_?igsh=MXJtM2ttajRxOGF3Nw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@touragent2?_r=1&_t=ZS-93G2CHp1uTQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="h-4 w-4">
                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              {/* YouTube */}
              
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
              <li><Link href="/know-bhutan" className="hover:text-primary transition-colors">Know Bhutan</Link></li>
              <li><Link href="/flights" className="hover:text-primary transition-colors">Flights</Link></li>
              <li><Link href="/hotels" className="hover:text-primary transition-colors">Hotels</Link></li>
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
                <span>Jurka, Dopshari, Paro</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+975-17257452</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:oasistours.info@gmail.com" className="hover:text-primary transition-colors">oasistours.info@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-100 flex justify-center items-center w-full">
          <div className="text-xs text-zinc-400 text-center tracking-widest font-medium">
            © {new Date().getFullYear()} OASIS TOURS & TREKS ◉ All Rights Reserved
          </div>
        </div>
      </div>

      {/* Tawk.to Iframe Dialog */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] sm:h-[600px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[99999] overflow-hidden border border-zinc-100 flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <span className="font-bold flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Live Support
            </span>
            <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>
          <iframe 
            src="https://tawk.to/chat/696a46bbdc605b197c7eb8cd/1jf3i8jk6" 
            className="flex-1 w-full h-full border-none"
            title="Tawk.to Chat"
          />
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end gap-4">
        <div className="relative group">
          <button 
            onClick={toggleTawk}
            style={{
              backgroundColor: '#f09c0b',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}
          >
            {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className="fixed bottom-6 left-6 z-[9999]">
        <WhatsAppButton />
      </div>
    </footer>
  );
}
