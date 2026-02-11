import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FileText, CheckCircle, AlertCircle, Scale, CreditCard, Package } from "lucide-react";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-white/80">
              Last updated: February 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Agreement</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              Express Laundry Terms
            </h2>
            <p className="text-lg text-muted-foreground">
              By using our services, you agree to these terms. Please review them carefully as they outline our mutual responsibilities and commitment to quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Package className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Our Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Professional Wash & Fold
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Specialized Dry Cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Premium Ironing & Pressing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Shoe & Leather Care
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pricing and Payment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <CreditCard className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Pricing & Payment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Transparent KES pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Cash, M-Pesa & Card accepted
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Payment due upon delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Minimum order values apply
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pickup and Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Pickup & Delivery</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Free pickup in service areas
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Scheduled collection windows
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Real-time status updates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Reliable 24-48h turnaround
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Liability and Claims */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Scale className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Liability & Claims</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Pre-existing defect protection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    48h claim window after delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Standard industry coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Delicate item risk assessment
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Customer Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <AlertCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Your Responsibility</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Check pockets before collection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Disclose special care needs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Accurate contact information
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Timely payment for services
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Support and Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Questions?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Need clarification on our terms? We're here to explain our policies.
                </p>
                <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    hello@expresslaundry.co.ke
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    +254 700 123 456
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TermsOfService;
