import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api-config";
import { useToast } from "@/hooks/use-toast";
function useSendMessage() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data) => {
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send message");
      }
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
        variant: "default"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  });
}
export {
  useSendMessage
};
