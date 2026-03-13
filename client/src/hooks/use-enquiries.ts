import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertEnquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateEnquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertEnquiry) => {
      const res = await fetch(api.enquiries.create.path, {
        method: api.enquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Invalid form data");
        }
        throw new Error("Failed to submit enquiry");
      }
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Enquiry Sent Successfully",
        description: "Thank you! We will be in touch shortly.",
        style: {
          backgroundColor: "hsl(var(--card))",
          borderColor: "hsl(var(--primary))",
          color: "hsl(var(--foreground))",
        }
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.message || "Please try again later or call us directly.",
      });
    }
  });
}
