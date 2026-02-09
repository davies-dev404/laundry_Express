import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const benefits = [
    "Professional stain removal experts",
    "Eco-friendly detergents & processes",
    "State-of-the-art machinery",
    "Free pickup and delivery within Nairobi"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Unsplash image of folding clothes */}
              <img 
                src="https://pixabay.com/get/ga05649ac080293c13c66e12ca5f5833bad98d8133caad8d032cd5115608572b03bcf6227c2c785f2abd15f9a0e74d06fe5da63e99fe430a03c44a4f827736732_1280.jpg" 
                alt="Professional Laundry Service" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-extrabold text-primary font-display">5+</div>
                <div className="text-sm font-medium text-muted-foreground leading-tight">
                  Years of<br />Excellence
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-display text-slate-900">
              We Care For Your Clothes <br /> So You Don't Have To
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Express Laundry, we understand that life in Nairobi is busy. That's why we're dedicated to providing convenient, high-quality laundry and dry cleaning services that fit seamlessly into your schedule.
            </p>
            <p className="text-muted-foreground mb-8">
              We treat every garment with the utmost care, using premium eco-friendly products that are tough on stains but gentle on fabrics. Your satisfaction is our top priority.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="font-medium text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
