import { useMutation } from "@tanstack/react-query";
import { api, type CreateEnquiryRequest, type CreateNoimRequest } from "@shared/routes";
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
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit enquiry");
      }

      return api.enquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Enquiry Received",
        description: "Thank you. We will review your details and contact you shortly.",
        className: "bg-primary text-primary-foreground border-primary",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useCreateNoim() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: CreateNoimRequest) => {
      const res = await fetch(api.noim.create.path, {
        method: api.noim.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit NOIM data");
      }

      return api.noim.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "NOIM Data Submitted",
        description: "Your Notice of Intended Marriage data has been securely received.",
        className: "bg-primary text-primary-foreground border-primary",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
