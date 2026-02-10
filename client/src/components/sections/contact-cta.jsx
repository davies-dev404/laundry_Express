import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { Link } from "wouter";

function ContactCTA() {
  const contactMethods = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+254 700 123 456",
      href: "tel:+254700123456"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat Now",
      href: "https://wa.me/254700123456"
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@expresslaundry.co.ke",
      href: "mailto:hello@expresslaundry.co.ke"
    }
  ];

  return (
    <section id="contact-cta" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display text-slate-900">
              Ready to Experience Premium Laundry Care?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Book your first collection today or reach out for any questions about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-slate-500 mb-1">{method.label}</div>
                  <div className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {method.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingDialog>
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                Book a Collection
              </Button>
            </BookingDialog>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                Send a Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactCTA };
