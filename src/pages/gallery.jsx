import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Camera, Sparkles, Shirt, Wind, BedDouble, ShieldCheck } from "lucide-react";
import { BookingDialog } from "@/components/ui/booking-dialog";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=2071&auto=format&fit=crop",
    title: "Eco-Friendly Washing",
    category: "Facility"
  },
  {
    url: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?q=80&w=2070&auto=format&fit=crop",
    title: "Premium Equipment",
    category: "Facility"
  },
  {
    url: "https://images.unsplash.com/photo-1594932224456-80696a4a83d3?q=80&w=2070&auto=format&fit=crop",
    title: "Professional Inspection",
    category: "Quality Control"
  },
  {
    url: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=2030&auto=format&fit=crop",
    title: "Delicate Fabric Care",
    category: "Expertise"
  },
  {
    url: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=2070&auto=format&fit=crop",
    title: "Dedicated Team",
    category: "Staff"
  },
  {
    url: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop",
    title: "Precision Pressing",
    category: "Services"
  },
  {
    url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
    title: "Fresh Bedding",
    category: "Services"
  },
  {
    url: "https://images.unsplash.com/photo-1590735204830-22728956ed07?q=80&w=2070&auto=format&fit=crop",
    title: "Leather Restoration",
    category: "Specialized"
  },
  {
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    title: "Premium Finish",
    category: "Quality"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3 block">Visual Tour</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Our Facilities & <br /> Quality Standards
              </h1>
              <p className="text-lg text-white/70 mb-8 border-l-4 border-blue-400 pl-6">
                Take a behind-the-scenes look at how we handle your garments with international standards of care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {galleryImages.map((image, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer break-inside-avoid"
                >
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">{image.category}</span>
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Ready for Premium Care?</h2>
              <p className="text-slate-600 mb-8">
                Experience the convenience of our doorstep laundry service in Nairobi.
              </p>
              <BookingDialog>
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl">
                  Book Your First Pickup
                </button>
              </BookingDialog>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
