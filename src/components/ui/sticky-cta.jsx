import React from "react";
import { MessageCircle, Calendar } from "lucide-react";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { Button } from "@/components/ui/button";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden p-4 bg-white/80 backdrop-blur-lg border-t border-border flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      <a
        href="https://wa.me/254700123456"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Button variant="outline" className="w-full h-12 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white flex gap-2 font-bold rounded-xl transition-all">
          <MessageCircle className="h-5 w-5 fill-current" />
          WhatsApp
        </Button>
      </a>
      
      <BookingDialog>
        <Button className="flex-[1.5] h-12 bg-primary hover:bg-primary/90 text-white flex gap-2 font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95">
          <Calendar className="h-5 w-5" />
          Book Now
        </Button>
      </BookingDialog>
    </div>
  );
}
