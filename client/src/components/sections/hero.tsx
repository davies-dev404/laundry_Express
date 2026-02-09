import { motion } from "framer-motion";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-laundry.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 text-primary-foreground mb-6">
              <Truck className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium text-green-100">Free pickup & delivery in Nairobi</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 font-display">
              Fast, Reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Laundry Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
              We take the hassle out of your laundry day. Premium care for your clothes with convenient doorstep collection and delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <BookingDialog>
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </BookingDialog>
              
              <BookingDialog>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  Request Pickup
                </Button>
              </BookingDialog>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 flex items-center gap-8 text-slate-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>24h Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Eco-friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>100% Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
