import React from "react";
import { MessageCircle, Calendar } from "lucide-react";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { Button } from "@/components/ui/button";

export function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] lg:hidden">
      <a
        href="https://wa.me/254700123456"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Button 
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white flex items-center justify-center shadow-2xl transition-all active:scale-95 p-0"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="h-7 w-7 fill-white" />
        </Button>
      </a>
    </div>
  );
}
