import Image from "next/image";
import { Plane, FileText, DollarSign, Calendar, MapPin, Clock, Thermometer, Users, Shield, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SectionWrapper from "@/components/SectionWrapper";

export default function TravelInfoPage() {
  return (
    <div className="min-h-screen pt-0 pb-14">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 bg-[url('/assets/home/footer.png')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Travel Information</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Everything you need to know before visiting the Kingdom of Bhutan
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        {/* Visa & Entry Requirements */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Visa & Entry Requirements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Tourist Visa</CardTitle>
                <CardDescription>Required for all international visitors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All tourists (except Indian, Bangladeshi, and Maldivian nationals) must obtain a visa clearance before arrival. 
                  Your tour operator will process this on your behalf.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Visa fee: USD 40 (processed by tour operator)</li>
                  <li>Valid passport (minimum 6 months validity)</li>
                  <li>Visa approval letter required before travel</li>
                  <li>Visa stamped upon arrival at Paro Airport</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sustainable Development Fee (SDF)</CardTitle>
                <CardDescription>Contributing to Bhutan's preservation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The SDF supports free education, healthcare, and environmental conservation in Bhutan.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>USD 100 per person per night</li>
                  <li>USD 50 for children aged 6-12 years</li>
                  <li>Free for children under 6 years</li>
                  <li>Paid in advance through your tour operator</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Best Time to Visit */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Best Time to Visit</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-primary" />
                  Spring (Mar-May)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Ideal for trekking and witnessing rhododendrons in full bloom.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Temperature: 15-20°C</li>
                  <li>Clear mountain views</li>
                  <li>Paro Tshechu Festival</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-primary" />
                  Autumn (Sep-Nov)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Peak season with perfect weather and clear skies.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Temperature: 10-20°C</li>
                  <li>Best mountain visibility</li>
                  <li>Thimphu Tshechu Festival</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-muted-foreground" />
                  Winter & Monsoon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Off-season with fewer tourists and special experiences.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Winter: Cold but clear (Dec-Feb)</li>
                  <li>Monsoon: Rainy season (Jun-Aug)</li>
                  <li>Lower hotel rates available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Getting There */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Plane className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Getting There</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>By Air</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Paro International Airport is Bhutan's only international airport, considered one of the most challenging airports in the world.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Airlines Operating:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Drukair (Royal Bhutan Airlines)</li>
                    <li>Bhutan Airlines</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Connecting Cities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Delhi, Mumbai, Kolkata (India)</li>
                    <li>Kathmandu (Nepal)</li>
                    <li>Bangkok (Thailand)</li>
                    <li>Singapore</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>By Land</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Entry via land is possible through designated border points with India.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Border Entry Points:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Phuentsholing (from Jaigaon, West Bengal)</li>
                    <li>Gelephu (from Assam)</li>
                    <li>Samdrup Jongkhar (from Assam)</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Note: Visa clearance is still required for land entry. Your tour operator will arrange permits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Important Information */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Important Information</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Currency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Bhutanese Ngultrum (BTN) is the official currency. Indian Rupee is also accepted. 
                  ATMs available in major towns. Credit cards accepted in hotels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  Time Zone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Bhutan Standard Time (BST): UTC +6:00. Same as Bangladesh, 30 minutes ahead of India, 
                  15 minutes ahead of Nepal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  Language
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Dzongkha is the official language. English is widely spoken and is the medium of instruction 
                  in schools. Your guide will speak fluent English.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Camera className="h-5 w-5 text-primary" />
                  Photography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Photography is generally allowed, but restricted inside temples and dzongs. 
                  Always ask permission before photographing people or religious sites.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  Health & Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  No mandatory vaccinations required. Travel insurance recommended. 
                  Altitude sickness possible in high areas. Bhutan is one of the safest countries to visit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Dress Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Modest dress required when visiting dzongs and temples. Remove shoes before entering 
                  religious sites. Locals wear traditional dress (Gho for men, Kira for women).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* What to Pack */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">What to Pack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Essentials</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Valid passport and visa documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Comfortable walking shoes and trekking boots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Layered clothing for varying temperatures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Sunscreen, sunglasses, and hat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Personal medications and first-aid kit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Camera and extra batteries</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Seasonal Items</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Winter (Dec-Feb): Heavy jacket, thermal wear, gloves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Spring/Autumn: Light jacket, sweater for evenings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Monsoon (Jun-Aug): Rain jacket, waterproof bags</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Trekking: Sleeping bag, trekking poles, headlamp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Power adapter (Type D/F/G, 230V)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Useful External Links */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Useful External Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Tourism Council of Bhutan", url: "https://www.visitbhutan.com/" },
              { name: "Drukair", url: "https://www.drukair.com.bt/" },
              { name: "Bhutan Airlines", url: "https://www.bhutanairlines.bt/" },
              { name: "ABTO", url: "https://www.abto.org.bt/" },
              { name: "Immigration Office", url: "https://www.doi.gov.bt/" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-xl hover:border-primary/50 hover:shadow-sm transition-all group"
              >
                <span className="font-medium text-zinc-700 group-hover:text-primary transition-colors">{link.name}</span>
                <Camera className="h-4 w-4 text-zinc-400 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Ready to Plan Your Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our travel experts are here to help you plan the perfect Bhutanese adventure. 
            Contact us for personalized itineraries and assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book-now" 
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Book Your Trip
            </a>
            <a 
              href="/tours" 
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              View Tours
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
