import React from "react";
import { motion } from "framer-motion";
import { Shirt, Sparkles, Wind, BedDouble, ShieldCheck } from "lucide-react";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { servicesData } from "@/lib/service-data";
import { Link } from "wouter";


function Services({ limit }) {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;
  
  return /* @__PURE__ */ React.createElement("section", { id: "services", className: "py-16 bg-slate-50" }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4 md:px-6" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-3xl mx-auto mb-16" }, /* @__PURE__ */ React.createElement("span", { className: "text-primary font-semibold tracking-wide uppercase text-sm" }, "Our Services"), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl md:text-4xl font-bold mt-2 mb-4 font-display text-slate-900" }, "Premium Laundry Solutions"), /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground text-lg" }, "From everyday basics to delicate couture, we have the expertise to handle all your fabric care needs.")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, displayedServices.map((service, idx) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: idx,
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: idx * 0.1, duration: 0.5 },
      className: "bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group cursor-pointer"
    },
    /* @__PURE__ */ React.createElement(Link, { href: `/services/${service.slug}` },
      /* @__PURE__ */ React.createElement("div", { className: "block h-full" },
        /* @__PURE__ */ React.createElement("div", { className: "h-48 overflow-hidden" }, /* @__PURE__ */ React.createElement(
          "img",
          {
            src: service.image,
            alt: service.title,
            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          }
        )),
        /* @__PURE__ */ React.createElement("div", { className: "p-8" }, /* @__PURE__ */ React.createElement("div", { className: `w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300` }, /* @__PURE__ */ React.createElement(service.icon, { className: "h-7 w-7" })), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors" }, service.title), /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground leading-relaxed mb-6" }, service.description), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 group/btn" }, "Learn More ", /* @__PURE__ */ React.createElement("span", { className: "group-hover/btn:translate-x-1 transition-transform" }, "\u2192")))
      )
    )
  ))), limit && /* @__PURE__ */ React.createElement("div", { className: "text-center mt-12" }, /* @__PURE__ */ React.createElement(Link, { href: "/services" }, /* @__PURE__ */ React.createElement("button", { className: "px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors" }, "View All Services")))));
}
export {
  Services
};
