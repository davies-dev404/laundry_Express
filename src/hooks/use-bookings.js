import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api-config";
import { useToast } from "@/hooks/use-toast";
function useCreateBooking() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data) => {
      const res = await fetch(api.bookings.create.path, {
        method: api.bookings.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
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
        variant: "default"
      });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message,
        variant: "destructive"
      });
    }
  });
}
export {
  useCreateBooking
};
