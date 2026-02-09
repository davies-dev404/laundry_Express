import { motion } from "framer-motion";
import { Shirt, Sparkles, Wind, BedDouble, ShieldCheck } from "lucide-react";
import { BookingDialog } from "@/components/ui/booking-dialog";

const services = [
  {
    icon: Shirt,
    title: "Wash & Fold",
    description: "Everyday laundry washed, dried, and neatly folded. Perfect for your daily wear.",
    color: "bg-blue-50 text-blue-600",
    image: "/images/folded-laundry.jpg"
  },
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Professional care for delicate fabrics like silk, wool, and suits using eco-solvents.",
    color: "bg-purple-50 text-purple-600",
    image: "/images/dry-cleaning.jpg"
  },
  {
    icon: Wind,
    title: "Pressing & Ironing",
    description: "Crisp, wrinkle-free finishing for shirts, trousers, and blouses. Look sharp.",
    color: "bg-orange-50 text-orange-600",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: BedDouble,
    title: "Bedding & Duvets",
    description: "Deep cleaning for heavy comforters, sheets, and curtains for a hygienic sleep.",
    color: "bg-green-50 text-green-600",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
  },
  {
    icon: ShieldCheck,
    title: "Leather & Care",
    description: "Specialized treatment for leather jackets, suede shoes, and luxury items.",
    color: "bg-slate-50 text-slate-600",
    image: "https://images.unsplash.com/photo-1524389920243-4cc299b07115?q=80&w=1974&auto=format&fit=crop"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display text-slate-900">
            Premium Laundry Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From everyday basics to delicate couture, we have the expertise to handle all your fabric care needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <BookingDialog defaultService={service.title}>
                  <button className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 group/btn">
                    Book Service <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </BookingDialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
