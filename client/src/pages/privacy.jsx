import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Shield, Lock, Eye, UserCheck, Database, Mail } from "lucide-react";

function PrivacyPolicy() {
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
              Privacy Policy
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
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Transparency</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              How We Handle Your Information
            </h2>
            <p className="text-lg text-muted-foreground">
              At Express Laundry, we are committed to protecting your privacy. This policy outlines our practices regarding the collection, use, and safeguarding of your personal data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Information We Collect */}
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
                  <Database className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Information Collection</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Contact details & delivery address
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Secure payment information
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Service preferences & history
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Website usage analytics
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* How We Use Your Information */}
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
                  <UserCheck className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Information Usage</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Processing & fulfilling orders
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Customer service communications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Service improvements & updates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Legal & safety compliance
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Data Security */}
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
                  <Lock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Data Security</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    SSL/TLS encrypted transmission
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Secure payment processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Regular security audits
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Restricted data access
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Your Rights */}
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
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Your Rights</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Access your personal data
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Request data corrections
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Request data deletion
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Opt-out of marketing
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Support and Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl lg:col-span-2"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>
              <div className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Privacy Assistance</h3>
                  <p className="text-muted-foreground mb-4">
                    Have questions about your privacy or our data practices? Our dedicated privacy team is here to help and ensure your rights are respected.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      hello@expresslaundry.co.ke
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      Data Protection Officer
                    </div>
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

export default PrivacyPolicy;
