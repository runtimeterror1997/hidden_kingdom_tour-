"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionWrapper from "./SectionWrapper";

const faqData = [
  {
    question: "Do all visitors need a visa to enter Bhutan?",
    answer: "Yes, all international visitors (except those from India, Bangladesh, and the Maldives) require a visa to enter Bhutan. Indian nationals require a permit, while nationals of Bangladesh and the Maldives are eligible for a visa on arrival."
  },
  {
    question: "How and where do I apply for a Visa?",
    answer: "Our team will process your visa on your behalf. You simply need to submit the required documents to us. Alternatively, you can apply directly through the Bhutan Immigration Services Portal."
  },
  {
    question: "What documents are required for a Bhutan visa?",
    answer: "You will generally need a digital copy of your passport (valid for at least six months from your departure date), a recent digital passport-size photograph, and valid travel insurance for the duration of your trip."
  },
  {
    question: "How much does a Bhutan visa cost?",
    answer: "There is a one-off, non-refundable visa application fee of US$40 per person. This is typically paid alongside your Sustainable Development Fee (SDF)."
  },
  {
    question: "How long does it take to process a Bhutan visa?",
    answer: "A correctly submitted visa application usually takes up to five working days to process. We recommend applying at least 2-3 weeks in advance."
  },
  {
    question: "What is the Sustainable Development Fee (SDF)?",
    answer: "The SDF is a daily conservation fee. It is currently USD 100 per adult per night for most nationalities. Children aged 6-12 pay USD 50 per night, and those under 6 are exempt. For Indian nationals, the SDF is Nu. 1,200 per person per night."
  },
  {
    question: "Do I need a guide or a route permit to travel around Bhutan?",
    answer: "Guests no longer require a Route permit to travel around the country, as long as they are accompanied by a guide certified by the Department of Tourism."
  },
  {
    question: "Is it safe to travel in Bhutan?",
    answer: "Bhutan is very safe, even for solo travelers. Crime is very rare. However, please be cautious around stray dogs in some areas as they are not domesticated."
  },
  {
    question: "If I cancel or shorten my trip, will my SDF be refunded?",
    answer: "Yes, the SDF will be refunded by the Department of Immigration for any cancelled or unused nights. Any bank charges will be deducted from the total refund."
  },
  {
    question: "Where can I exchange currency?",
    answer: "You can exchange currency at Paro International Airport upon arrival, or at banks and larger hotels in Thimphu and other major towns."
  },
  {
    question: "How much cash can I bring into Bhutan?",
    answer: "You may bring cash equivalent to US$10,000 into the country."
  },
  {
    question: "Can I use my credit card and ATM card in Bhutan?",
    answer: "ATMs and banks accept Visa and Mastercard. International credit cards are widely used in urban areas. You can also use digital wallet apps like goBoB or MyPay, which can be connected to international cards."
  },
  {
    question: "Where can I get a visitor SIM card?",
    answer: "SIM cards can be purchased at the Paro International Airport's visitor information centre or from branch offices of Bhutan Telecom and TashiCell."
  },
  {
    question: "Are there any restrictions on dress?",
    answer: "There are no strict rules for general travel, but when visiting religious sites, respectful clothing that covers shoulders and knees is required."
  },
  {
    question: "Do I need a guide to enter monuments and Dzongs, and are there fees?",
    answer: "Yes, a guide is required to enter monuments and Dzongs. Some sites have entry fees (often payable in cash or via goBoB); children under 18 often get a 50% concession."
  },
  {
    question: "Where are good places to buy handicrafts and gifts?",
    answer: "Popular spots include the CSI Market, Centenary Farmers’ Market in Thimphu, the Textile Museum shop, and OGOP shops which feature artisan products."
  },
  {
    question: "Can I use a drone for photography in Bhutan?",
    answer: "A permit, applied for in advance, is required to fly a drone either recreationally or commercially. Regulations are strictly enforced."
  },
  {
    question: "If I drive my own car into Bhutan, do I still need a guide?",
    answer: "Yes, a guide is required at all times for guests driving their own vehicles into Bhutan. It is highly recommended to pre-book your guide."
  }
];

export function FAQ() {
  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-800">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Everything you need to know about traveling to Bhutan and booking your journey with Hidden Kingdom Tour.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-serif hover:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
