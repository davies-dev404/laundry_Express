import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/ui/booking-dialog";

export function Pricing() {
  const items = [
    { name: "Shirts / Blouses", price: "KSh 200" },
    { name: "Trousers / Jeans", price: "KSh 250" },
    { name: "Suits (2 Piece)", price: "KSh 800" },
    { name: "Dresses", price: "KSh 400" },
    { name: "Duvet (Double)", price: "KSh 1,200" },
    { name: "Jackets", price: "KSh 450" },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 text-lg">
            No hidden fees. Pay for exactly what you need cleaned.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold mb-6 font-display text-white">Popular Items</h3>
              <ul className="space-y-4">
                {items.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-slate-700/50 pb-3 last:border-0 last:pb-0">
                    <span className="text-slate-300 font-medium">{item.name}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center text-sm text-slate-500 italic">
                *Prices may vary by fabric type and stain severity
              </div>
            </motion.div>

            {/* Value Proposition Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 shadow-2xl shadow-primary/20 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 font-display text-white">Wash & Fold Bag</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-extrabold text-white">KSh 1,500</span>
                  <span className="text-blue-100 ml-2">/ bag</span>
                </div>
                <p className="text-blue-100 mb-8">
                  Fill our standard laundry bag (approx. 6kg) with everyday clothes. We wash, dry, and fold everything perfectly.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Perfect for students & busy professionals",
                    "Includes detergent & softener",
                    "Separated by color",
                    "Neatly folded for drawers"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-medium">
                      <div className="bg-white/20 p-1 rounded-full">
                        <Check className="h-3 w-3" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              
              <BookingDialog defaultService="Wash & Fold">
                <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold h-12 text-lg">
                  Order Wash & Fold
                </Button>
              </BookingDialog>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
