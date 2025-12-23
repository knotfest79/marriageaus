import { useMutation } from "@tanstack/react-query";
import { api, type CreateNoimRequest } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateNoim() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: CreateNoimRequest) => {
      // Ensure formData is present as empty object if not provided, though schema might handle it
      const payload = {
        ...data,
        formData: data.formData || {},
      };

      const res = await fetch(api.noim.create.path, {
        method: api.noim.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit NOIM data");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "NOIM Data Submitted",
        description: "Your Notice of Intended Marriage details have been securely received.",
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
