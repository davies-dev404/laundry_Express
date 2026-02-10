import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { 
  Accessibility as AccessibilityIcon, 
  Eye, 
  Headphones, 
  Heart, 
  Users, 
  Clock,
  Phone,
  MapPin,
  Shield,
  Sparkles,
  CheckCircle,
  Info,
  Mail
} from "lucide-react";

function Accessibility() {
  const accessibilityFeatures = [
    {
      icon: AccessibilityIcon,
      title: "Wheelchair Accessible",
      description: "All our facilities are fully wheelchair accessible with ramps and wide doorways for easy navigation."
    },
    {
      icon: Eye,
      title: "Visual Assistance",
      description: "Large print labels and clear signage throughout our facilities to assist customers with visual impairments."
    },
    {
      icon: Headphones,
      title: "Hearing Support",
      description: "Our staff is trained in basic sign language and we provide written communication options."
    },
    {
      icon: Users,
      title: "Assisted Service",
      description: "Dedicated staff available to help customers who need assistance with drop-off and pickup."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Extended hours and flexible pickup times to accommodate various schedules and needs."
    },
    {
      icon: Phone,
      title: "Multiple Contact Methods",
      description: "Reach us via phone, SMS, WhatsApp, or email - whatever works best for you."
    }
  ];

  const commitments = [
    {
      icon: Heart,
      title: "Inclusive Service",
      description: "We believe everyone deserves access to quality laundry services, regardless of physical ability or special needs."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Our facilities are designed with safety in mind, featuring non-slip floors and well-lit spaces."
    },
    {
      icon: Sparkles,
      title: "Continuous Improvement",
      description: "We regularly update our accessibility features based on customer feedback and best practices."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-r from-primary to-blue-600">
        <div className="container relative z-10 mx-auto px-4 md:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Accessibility & Inclusion
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              At Express Laundry, we're committed to providing accessible services for all our customers. Everyone deserves convenient, quality laundry care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Our Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display text-slate-900">
              Accessibility Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We've designed our services and facilities to be accessible to everyone in our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {accessibilityFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white p-8 rounded-xl border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Animated border line effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 border-2 border-primary rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
                </div>

                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display text-slate-900">
              Our Commitment to Accessibility
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {commitments.map((commitment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white p-8 rounded-xl border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center"
              >
                {/* Animated border line effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 border-2 border-primary rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
                </div>

                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <commitment.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {commitment.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {commitment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 border-l-4 border-primary p-8 rounded-r-xl"
            >
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Need Special Assistance?
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    If you have specific accessibility needs or requirements that aren't listed here, please don't hesitate to contact us. We're always happy to work with you to ensure you have the best possible experience with our services.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-slate-900 font-medium">+254 700 123 456</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-slate-900 font-medium">Westlands, Nairobi, Kenya</span>
                    </div>
                     <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-slate-900 font-medium">hello@expresslaundry.co.ke</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Help Us Improve
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your feedback helps us create a more accessible and inclusive service for everyone. Let us know how we can serve you better.
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Share Your Feedback
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Accessibility;
