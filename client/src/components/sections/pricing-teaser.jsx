import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

function PricingTeaser() {
  const highlights = [
    { item: "Shirts / Blouses", price: "KSh 200" },
    { item: "Trousers", price: "KSh 250" },
    { item: "Suits (2 Piece)", price: "KSh 800" }
  ];

  return (
    <section id="pricing-teaser" className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">
              Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-display text-white">
              Affordable Rates, Premium Quality
            </h2>
            <p className="text-blue-100 text-lg mb-12">
              No hidden fees. Pay for exactly what you need cleaned.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{item.item}</span>
                  <span className="text-2xl font-bold text-white">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/pricing">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-blue-50 font-bold text-lg px-8 py-6 h-auto"
            >
              View Full Price List
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export { PricingTeaser };
