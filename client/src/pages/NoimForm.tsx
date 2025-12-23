import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertNoimSchema, type CreateNoimRequest } from "@shared/schema";
import { useCreateNoim } from "@/hooks/use-noim";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function NoimForm() {
  const mutation = useCreateNoim();
  
  const form = useForm<CreateNoimRequest>({
    resolver: zodResolver(insertNoimSchema),
    defaultValues: {
      party1Name: "",
      party2Name: "",
      email: "",
      phone: "",
      proposedDate: "",
      placeOfMarriage: "",
      formData: {}, // JSONB field
    },
  });

  function onSubmit(data: CreateNoimRequest) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen bg-muted/20 section-padding">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title="Notice of Intended Marriage (NOIM)" 
          subtitle="Please complete the preliminary details below. We will use this to generate the official legal document for you to sign."
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Party 1 */}
            <Card>
              <CardHeader className="bg-primary/5 border-b">
                <CardTitle className="flex items-center gap-2 font-display text-primary">
                  <User className="h-5 w-5" /> Party 1 Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <FormField
                  control={form.control}
                  name="party1Name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Legal Name</FormLabel>
                      <FormControl>
                        <Input placeholder="As per birth certificate/passport" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Party 2 */}
            <Card>
              <CardHeader className="bg-primary/5 border-b">
                <CardTitle className="flex items-center gap-2 font-display text-primary">
                  <User className="h-5 w-5" /> Party 2 Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <FormField
                  control={form.control}
                  name="party2Name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Legal Name</FormLabel>
                      <FormControl>
                        <Input placeholder="As per birth certificate/passport" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Ceremony Details */}
            <Card>
              <CardHeader className="bg-primary/5 border-b">
                <CardTitle className="font-display text-primary">Ceremony & Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="p-6 grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
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
                      <FormLabel>Contact Phone</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="proposedDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Proposed Date of Marriage</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="placeOfMarriage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Place of Marriage</FormLabel>
                      <FormControl>
                        <Input placeholder="Suburb/City, State" {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4">
              <div className="bg-blue-50 text-blue-900 p-4 rounded-lg text-sm border border-blue-100">
                <strong>Privacy Note:</strong> Your information is collected solely for the purpose of preparing legal marriage documents in accordance with the Marriage Act 1961. It is treated with strict confidentiality.
              </div>
              
              <Button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting Securely...
                  </>
                ) : (
                  "Submit NOIM Details"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
