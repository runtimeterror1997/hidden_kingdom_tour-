"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar as CalendarIcon, Users, MapPin, Phone, Mail, Clock, Shield, Hotel, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Phone number is required." }),
  country: z.string().min(1, { message: "Country is required." }),
  travelDate: z.string().min(1, { message: "Tentative travel date is required." }),
  duration: z.string().min(1, { message: "Duration of stay is required." }),
  numTravellers: z.string().min(1, { message: "Number of travellers is required." }),
  interest: z.string().min(1, { message: "Please select a tour interest." }),
  ageGroup: z.string().min(1, { message: "Please select an age group." }),
  accommodation: z.string().min(1, { message: "Please select accommodation preference." }),
  message: z.string().optional(),
});

export default function BookNowPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}

function BookingForm() {
  const searchParams = useSearchParams();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      travelDate: "",
      duration: "",
      numTravellers: "",
      interest: searchParams.get("interest") || "",
      ageGroup: "",
      accommodation: "",
      message: searchParams.get("tour") 
        ? `I am interested in booking the "${searchParams.get("tour")}" tour. Please provide more details.` 
        : "",
    },
  });

  // Re-sync if params change after mount
  useEffect(() => {
    const interest = searchParams.get("interest");
    const tour = searchParams.get("tour");
    
    if (interest) {
      form.setValue("interest", interest);
    }
    if (tour && !form.getValues("message")) {
      form.setValue("message", `I am interested in booking the "${tour}" tour. Please provide more details.`);
    }
  }, [searchParams, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/book-tour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit booking');
      }

      toast.success("Booking Inquiry Sent!", {
          description: "One of our travel experts will contact you shortly to finalize your itinerary.",
      });
      form.reset();
    } catch (error: any) {
      console.error(error);
      toast.error("Submission Failed", {
        description: error.message || "Please try again later or contact us directly via email.",
      });
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/home/flags.png" 
            alt="Book Your Trip" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Book Your Trip</h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Start your journey to the Last Shangri-La. Fill out the form below to begin planning your custom Bhutanese experience.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Main Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-none p-2 md:p-6">
              <CardHeader>
                <CardTitle className="text-3xl font-serif font-bold text-primary">Booking Inquiry Form</CardTitle>
                <p className="text-muted-foreground mt-2">Please provide as much detail as possible to help us craft your perfect itinerary.</p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Full Name" {...field} className="h-12" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="email@example.com" {...field} className="h-12" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contact Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 234 567 890" {...field} className="h-12" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Country" {...field} className="h-12" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Travel Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        Travel Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField
                          control={form.control}
                          name="travelDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tentative Travel Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} className="h-12" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="duration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Duration of Stay (Days)</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="e.g. 7" {...field} className="h-12" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="numTravellers"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Number of Travellers</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="e.g. 2" {...field} className="h-12" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Preferences */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
                        <Hotel className="w-5 h-5 text-primary" />
                        Preferences
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField
                          control={form.control}
                          name="interest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tour Package Interest</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12">
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="cultural">Cultural Tours</SelectItem>
                                  <SelectItem value="festival">Festival Tours</SelectItem>
                                  <SelectItem value="trekking">Trekking</SelectItem>
                                  <SelectItem value="adventure">Adventures</SelectItem>
                                  <SelectItem value="luxury">Luxury Holidays</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="ageGroup"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Age Group of Travellers</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12">
                                    <SelectValue placeholder="Select ages" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="adults">Adults</SelectItem>
                                  <SelectItem value="seniors">Seniors</SelectItem>
                                  <SelectItem value="kids">Kids</SelectItem>
                                  <SelectItem value="teens">Teens</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="accommodation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Accommodation</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12">
                                    <SelectValue placeholder="Select preference" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="luxury">Luxury</SelectItem>
                                  <SelectItem value="mid-range">Mid-range</SelectItem>
                                  <SelectItem value="budget">Budget</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Any Other Comments / Requirements</FormLabel>
                          <FormControl>
                            <Textarea 
                                placeholder="Tell us more about your interests, specific places you want to visit, or dietary requirements..." 
                                className="min-h-[150px] resize-none"
                                {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full md:w-auto px-12 h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? "Sending Request..." : "Submit Booking Request"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="bg-primary text-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif">Why Book With Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white/20 p-2 rounded-lg h-fit">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Peace of Mind</h4>
                    <p className="text-sm text-white/80">Full support throughout your journey in Bhutan.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/20 p-2 rounded-lg h-fit">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Expert Guides</h4>
                    <p className="text-sm text-white/80">Knowledgeable local guides who speak fluent English.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/20 p-2 rounded-lg h-fit">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Quick Response</h4>
                    <p className="text-sm text-white/80">We respond to all inquiries within 24 business hours.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-zinc-50 dark:bg-zinc-900/50">
              <CardHeader>
                <CardTitle className="font-serif">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  If you have any questions before booking, feel free to reach out to our team.
                </p>
                <div className="space-y-3">
                  <a href="tel:+97517257452" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                    +975-17257452
                  </a>
                  <a href="mailto:oasistours.info@gmail.com" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    oasistours.info@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
