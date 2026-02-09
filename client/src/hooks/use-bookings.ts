import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { type InsertBooking } from "@shared/schema";

export function useCreateBooking() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertBooking) => {
      const res = await fetch(api.bookings.create.path, {
        method: api.bookings.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to create booking");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Confirmed!",
        description: "We have received your request and will contact you shortly.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Booking Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
