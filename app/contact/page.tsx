"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Phone number is required." }),
  interest: z.string().min(1, { message: "Please select a tour interest." }),
  message: z.string().optional(),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Thank you for your inquiry!", {
        description: "We will get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/home/flags.png" 
            alt="Contact Us" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Have questions about your Bhutanese adventure? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-lg border-none">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-serif">Call us</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground pb-8">
              <p>+975-1777-7777</p>
              <p>+975-7777-7777</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-none">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-serif">Our Address</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground pb-8">
              <p>Thimphu City, Bhutan</p>
              <p>Main Post Box 123</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-none">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-serif">E-mail</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground pb-8">
              <p>info@hiddenkingdomtour.com</p>
              <p>bookings@hiddenkingdomtour.com</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Inquiry Form */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Send an Inquiry</h2>
              <p className="text-muted-foreground mb-8">
                Alternatively, please fill out the form below, and we will respond to you as soon as possible.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="h-12" />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Email Address" {...field} className="h-12" />
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
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Phone Number" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tour Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select type of tour" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="cultural">Cultural Tour</SelectItem>
                              <SelectItem value="trekking">Trekking</SelectItem>
                              <SelectItem value="festival">Festival</SelectItem>
                              <SelectItem value="luxury">Luxury / Custom</SelectItem>
                              <SelectItem value="adventure">Adventure</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                              placeholder="Tell us about your travel dates, group size, or specific interests..." 
                              className="min-h-[150px] resize-none"
                              {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" size="lg" className="w-full md:w-auto px-10 h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Contact Information / Sidebar */}
          <div className="space-y-12">
            <div className="bg-zinc-50 dark:bg-zinc-900/30 p-8 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif font-bold">Business Hours</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-muted-foreground uppercase tracking-wider">Monday – Friday</span>
                  <span className="text-foreground">09:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-sm border-t border-zinc-200 dark:border-zinc-800 pt-4">
                  <span className="font-semibold text-muted-foreground uppercase tracking-wider">Saturday</span>
                  <span className="text-foreground">09:00 AM – 1:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-sm border-t border-zinc-200 dark:border-zinc-800 pt-4">
                  <span className="font-semibold text-muted-foreground uppercase tracking-wider">Sunday</span>
                  <span className="text-red-500 font-bold uppercase">Closed</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold border-l-4 border-primary pl-4">Why Contact Us?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Hidden Kingdom Tour is a premier provider of travel experiences in Bhutan. Our expert team ensures seamless travel, accommodation, and ticketing services, crafting tailor-made itineraries to meet your unique aspirations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-zinc-900 border rounded-xl text-center">
                  <p className="text-primary font-bold text-2xl">24/7</p>
                  <p className="text-[10px] text-muted-foreground uppercase">Support</p>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-900 border rounded-xl text-center">
                  <p className="text-primary font-bold text-2xl">100%</p>
                  <p className="text-[10px] text-muted-foreground uppercase">Customized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

