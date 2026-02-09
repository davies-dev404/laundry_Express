import { motion } from "framer-motion";
import { CalendarClock, WashingMachine, Truck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: CalendarClock,
      title: "Schedule Pickup",
      desc: "Book online or call us. Choose a convenient time slot for pickup.",
    },
    {
      icon: WashingMachine,
      title: "We Clean & Care",
      desc: "Our experts sort, wash, dry, fold, and iron your clothes with care.",
    },
    {
      icon: Truck,
      title: "Doorstep Delivery",
      desc: "Fresh, clean clothes delivered back to you within 24-48 hours.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display text-slate-900">
            Laundry Day Done in 3 Steps
          </h2>
          <p className="text-muted-foreground text-lg">
            Our process is simple, transparent, and designed around your convenience.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-300 z-10">
                <step.icon className="h-10 w-10 text-primary" />
              </div>
              
              {/* Step Number Badge */}
              <div className="absolute top-0 right-[calc(50%-40px)] w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-md border-2 border-white">
                {idx + 1}
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
