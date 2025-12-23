import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnquirySchema, type CreateEnquiryRequest } from "@shared/schema";
import { useCreateEnquiry } from "@/hooks/use-enquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const mutation = useCreateEnquiry();
  
  const form = useForm<CreateEnquiryRequest>({
    resolver: zodResolver(insertEnquirySchema),
    defaultValues: {
      coupleNames: "",
      email: "",
      phone: "",
      ceremonyDate: "",
      ceremonyLocation: "",
      ceremonyType: "wedding",
      message: "",
    },
  });

  function onSubmit(data: CreateEnquiryRequest) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen bg-background section-padding">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title="Intended Pair Enquiry" 
          subtitle="Tell us about your plans. We will respond within 24 hours to confirm availability."
        />

        <Card className="border-t-4 border-t-accent shadow-lg">
          <CardContent className="p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="coupleNames"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Couple Names (Both Parties)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Alex Smith & Jordan Lee" {...field} className="h-12 bg-muted/30" />
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
                          <Input type="email" placeholder="contact@example.com" {...field} className="h-12 bg-muted/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+61 400 000 000" {...field} className="h-12 bg-muted/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ceremonyDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Proposed Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} value={field.value || ""} className="h-12 bg-muted/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ceremonyLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location / Venue</FormLabel>
                        <FormControl>
                          <Input placeholder="City, Park, Venue Name..." {...field} value={field.value || ""} className="h-12 bg-muted/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ceremonyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ceremony Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-muted/30">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wedding">Full Wedding Ceremony</SelectItem>
                            <SelectItem value="elopement">Elopement (Intimate)</SelectItem>
                            <SelectItem value="registry">Registry Style (Legals Only)</SelectItem>
                            <SelectItem value="renewal">Vow Renewal</SelectItem>
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
                      <FormLabel>Additional Details or Questions</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us a bit about your story or any specific requirements..." 
                          className="min-h-[150px] bg-muted/30 resize-none p-4" 
                          {...field} 
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white transition-all shadow-lg hover:shadow-xl"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
