import { useMutation } from "@tanstack/react-query";
import { api, type CreateEnquiryRequest } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateEnquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: CreateEnquiryRequest) => {
      const res = await fetch(api.enquiries.create.path, {
        method: api.enquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit enquiry");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Enquiry Sent",
        description: "We have received your message and will be in touch shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
