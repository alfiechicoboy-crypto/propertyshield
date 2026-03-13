import { PageHeader } from "@/components/ui/PageHeader";
import { Phone, Mail, MapPin, Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnquirySchema, type InsertEnquiry } from "@shared/schema";
import { useCreateEnquiry } from "@/hooks/use-enquiries";

export default function ContactPage() {
  const { mutate, isPending } = useCreateEnquiry();

  const form = useForm<InsertEnquiry>({
    resolver: zodResolver(insertEnquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      propertyAddress: "",
      serviceRequired: "",
      isEmergency: false,
      preferredContact: "phone",
      message: "",
    }
  });

  const onSubmit = (data: InsertEnquiry) => {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Request your free quote or get immediate help for roofing emergencies."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-10">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you need a minor repair or a complete re-roof, our expert team is ready to help. Fill out the form or contact us directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center shrink-0 border border-border">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Phone</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:07753351619" className="text-muted-foreground hover:text-primary transition-colors">Alfie: 07753 351619</a>
                      <a href="tel:07424376189" className="text-muted-foreground hover:text-primary transition-colors">Jacob: 07424 376189</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center shrink-0 border border-border">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Email</h3>
                    <a href="mailto:info@propertyshielduk.co.uk" className="text-muted-foreground hover:text-primary transition-colors">info@propertyshielduk.co.uk</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center shrink-0 border border-border">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Office</h3>
                    <p className="text-muted-foreground">Darlington, County Durham</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Emergency Repairs
                </h3>
                <p className="text-sm text-muted-foreground">
                  For storm damage and severe leaks, please call our 24/7 emergency line directly instead of using the form.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-xl">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-8">Request a Free Quote</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="fullName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl><Input placeholder="John Doe" {...field} className="bg-background" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl><Input placeholder="07123 456789" {...field} className="bg-background" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl><Input type="email" placeholder="john@example.com" {...field} className="bg-background" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      
                      <FormField control={form.control} name="propertyAddress" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Address / Area *</FormLabel>
                          <FormControl><Input placeholder="Darlington" {...field} className="bg-background" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="serviceRequired" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background">
                              <SelectValue placeholder="Select a service..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Roof Repairs">Roof Repairs</SelectItem>
                            <SelectItem value="Re-Roofing">Re-Roofing</SelectItem>
                            <SelectItem value="Flat Roofing">Flat Roofing</SelectItem>
                            <SelectItem value="Chimney Repairs">Chimney Repairs</SelectItem>
                            <SelectItem value="Fascias & Guttering">Fascias & Guttering</SelectItem>
                            <SelectItem value="Tile Replacement">Tile Replacement</SelectItem>
                            <SelectItem value="Roof Cleaning">Roof Cleaning</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                      <FormField control={form.control} name="preferredContact" render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Preferred Contact Method</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl><RadioGroupItem value="phone" /></FormControl>
                                <FormLabel className="font-normal cursor-pointer">Phone</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl><RadioGroupItem value="email" /></FormControl>
                                <FormLabel className="font-normal cursor-pointer">Email</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl><RadioGroupItem value="whatsapp" /></FormControl>
                                <FormLabel className="font-normal cursor-pointer">WhatsApp</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="isEmergency" render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4 bg-background/50">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-destructive font-semibold cursor-pointer">Is this an emergency?</FormLabel>
                            <p className="text-xs text-muted-foreground">Tick if you require urgent assistance.</p>
                          </div>
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Please provide any additional information about the issue..." className="min-h-32 bg-background resize-none" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground text-lg h-14" disabled={isPending}>
                      {isPending ? <Loader2 className="w-6 h-6 animate-spin" /> : "Submit Enquiry"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
