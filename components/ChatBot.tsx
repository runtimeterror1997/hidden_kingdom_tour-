"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  onClose: () => void;
}

export function ChatBot({ onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content: "Kuzuzangpo! I am your OASIS Guide. How can I help you plan your Bhutanese adventure today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI Response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: getBotResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Define patterns with word boundaries
    const patterns = {
      book: /\b(book|reserve|how to|register)\b/i,
      cultural: /\b(cultural|culture)\b/i,
      trekking: /\b(trek|trekking|hiking)\b/i,
      festival: /\b(festival|tshechu|festivals)\b/i,
      adventure: /\b(adventure|bike|motorcycle|rafting)\b/i,
      luxury: /\b(luxury|hotel|resort|amankora|six senses|pemako)\b/i,
      visa: /\b(visa|clearance)\b/i,
      sdf: /\b(sdf|fee|tax|cost|price|how much)\b/i,
      location: /\b(location|located|address|office|where are you)\b/i,
      greeting: /\b(hello|hi|kuzuzangpo|hey|greetings)\b/i,
      identity: /\b(who are you|your name|what are you)\b/i,
      popular: /\b(best|popular|recommended|top)\b/i,
      thanks: /\b(thank you|thanks|bye|tashi delek|cheers)\b/i
    };

    // 1. Check for specific tour/festival/location first (Priority 1)
    if (patterns.location.test(input)) {
      return "Our head office is located at:\n3rd Floor Ugyen Building,\nBabesa Express Highway,\nThimphu, Bhutan.\n\nWe are open from 9:00 AM to 5:00 PM, Monday to Friday. We would be delighted to welcome you for a consultation.";
    }
    if (patterns.popular.test(input)) {
      return "Based on guest favorites and our travel experts' recommendations, our most popular packages are:\n\n1. **Bhutan Express (4 Days)**: Perfect for a comprehensive first-time glimpse of Paro and Thimphu.\n2. **Druk Path Trek (9 Days)**: Our most popular short trek, famous for its ancient ridges and pristine alpine lakes.\n3. **Festival Tours**: Especially the Paro and Thimphu Tshechus, offering deep cultural and spiritual immersion.\n4. **Luxury Kingdom Journey**: A bespoke circuit staying at Bhutan's premier lodges like Amankora or Six Senses.\n\nYou can explore these in detail under our 'Tour Packages' menu.";
    }
    if (patterns.festival.test(input)) {
      return "Festival tours (Tshechus) provide a unique window into Bhutanese tradition. We offer specialized packages for major events such as the Paro Tshechu, Thimphu Tshechu, and the Royal Highland Festival in Laya. \n\nOur festival itineraries include premium seating at events and cultural briefings by expert guides.";
    }

    if (patterns.thanks.test(input)) {
      return "You're very welcome! It would be our pleasure to help you discover the magic of Bhutan with OASIS. \n\nIf you have more questions or are ready to start planning your journey, please reach out to our travel experts:\n- WhatsApp: +975-1755-6636\n- Email: oasistours.info@gmail.com\n\nTashi Delek!";
    }

    // 2. Booking intent (Priority 2)
    if (patterns.book.test(input)) {
      let category = "";
      if (patterns.cultural.test(input)) category = "Cultural";
      else if (patterns.trekking.test(input)) category = "Trekking";
      else if (patterns.adventure.test(input)) category = "Adventure";
      else if (patterns.luxury.test(input)) category = "Luxury";

      const tourType = category ? ` our ${category} Tour` : " a tour";
      
      return `To book${tourType}, please visit our official website at https://www.oasistours.com/ to select your package. \n\nAlternatively, you may contact our travel experts directly:\n- Phone: +975-1755-6636\n- Email: oasistours.info@gmail.com\n\nIs there a specific itinerary or date you are interested in?`;
    }

    // 3. Category specific info (Priority 3)
    if (patterns.cultural.test(input)) {
      return "Our Cultural tours offer a deep dive into Bhutan's heritage. Popular options include the 'Bhutan Express' (4 days) and 'Spiritual Immersion' (6 days). We cover essential landmarks like the Tiger's Nest and Punakha Dzong with expert guides.";
    }
    if (patterns.trekking.test(input)) {
      return "Bhutan offers world-class trekking experiences. We facilitate everything from the accessible 'Druk Path Trek' (9 days) to the challenging 'Snowman Trek' (25 days). All treks include professional support staff and quality equipment.";
    }
    if (patterns.adventure.test(input)) {
      return "For active travelers, we provide professional-led motorcycle tours on Royal Enfields and multi-day adventure packages combining mountain biking and white-water rafting.";
    }
    if (patterns.luxury.test(input)) {
      return "We collaborate with Bhutan's premier luxury brands, including Amankora, Six Senses, and Pemako. These curated experiences feature private touring, specialized wellness programs, and high-end accommodations.";
    }

    // 4. Logistics (Priority 4)
    if (patterns.visa.test(input)) {
      return "We manage the entire visa process for our guests. The application fee is USD 40. You will need a passport valid for at least six months. Once approved, we will provide your visa clearance letter prior to your departure.";
    }
    if (patterns.sdf.test(input)) {
      return "The Sustainable Development Fee (SDF) is a vital contribution to Bhutan's welfare, currently USD 100 per adult per night. Our tour rates (starting from USD 1,100) already include your visa, SDF, quality accommodations, meals, and professional guide services.";
    }

    // 5. Greetings & Identity (Priority 5 - Fallback)
    if (patterns.greeting.test(input)) {
      return "Kuzuzangpo! I am your OASIS Guide. It's a pleasure to assist you. How may I help you plan your journey through Bhutan today?";
    }
    if (patterns.identity.test(input)) {
      return "I am the digital assistant for OASIS Tours and Treks. My purpose is to provide professional guidance on our tour packages, visa requirements, and travel logistics in Bhutan.";
    }

    // Default Fallback
    return "Thank you for your inquiry. While I don't have the specific details on that topic here, our travel experts are available to provide comprehensive assistance. Would you like to check our 'Travel Info' page, or should I help you reach out via our 'Contact' page?";
  };

  return (
    <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 w-[calc(100vw-2rem)] sm:w-[400px] h-[70vh] sm:h-[600px] max-h-[85vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col z-[100] animate-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="p-4 bg-primary text-white rounded-t-2xl flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-sm">OASIS Guide</h3>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-[10px] text-white/80">Online</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10 rounded-full">
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50/50 dark:bg-zinc-950/20"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              "flex w-full mb-2",
              m.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div className={cn(
              "flex gap-2 max-w-[85%]",
              m.role === "user" ? "flex-row-reverse" : "flex-row"
            )}>
              <div className={cn(
                "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center",
                m.role === "user" ? "bg-zinc-200 dark:bg-zinc-800" : "bg-primary/10"
              )}>
                {m.role === "user" ? <User className="w-4 h-4 text-zinc-500" /> : <Bot className="w-4 h-4 text-primary" />}
              </div>
              <div className={cn(
                "p-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap",
                m.role === "user" 
                  ? "bg-zinc-800 text-white rounded-tr-none" 
                  : "bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-100 dark:border-zinc-800 rounded-tl-none"
              )}>
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start mb-2">
            <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 p-3 rounded-2xl rounded-tl-none border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <Loader2 className="w-4 h-4 text-primary animate-spin" />
              <span className="text-xs text-zinc-500">Guide is typing...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-b-2xl">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <Input 
            placeholder="Type your question..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-zinc-50 dark:bg-zinc-800 border-none focus-visible:ring-primary focus-visible:ring-2 h-10"
          />
          <Button type="submit" size="icon" className="h-10 w-10 shrink-0 bg-primary hover:bg-primary/90 text-white rounded-xl">
            <Send className="w-4 h-4" />
          </Button>
        </form>
        <p className="text-[10px] text-zinc-400 text-center mt-2">
          AI generated responses. For critical info, visit our Contact page.
        </p>
      </div>
    </div>
  );
}
