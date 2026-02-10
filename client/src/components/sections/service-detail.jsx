import React from "react";
import { useRoute } from "wouter";
import { servicesData } from "@/lib/service-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";

export function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[35vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt={service.title}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-4 font-display"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto"
            >
              {service.description}
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">
                  Why Choose Our {service.title} Service?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className={`h-5 w-5 ${service.color.split(" ")[1]}`} />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <BookingDialog defaultService={service.title}>
                    <Button size="lg" className="text-base px-8">
                      Book Now
                    </Button>
                  </BookingDialog>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/pricing">View Pricing</a>
                  </Button>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                 <div className={`absolute inset-0 opacity-10 ${service.color.split(" ")[0]}`}></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className={`w-32 h-32 ${service.color.split(" ")[1]} opacity-20`} />
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default ServiceDetail;
