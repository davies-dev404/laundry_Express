import React from "react";
import { motion } from "framer-motion";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";
function Hero() {
  return /* @__PURE__ */ React.createElement("section", { id: "home", className: "relative min-h-[90vh] flex items-center overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 z-0" }, /* @__PURE__ */ React.createElement(
    "video",
    {
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
      className: "w-full h-full object-cover"
    },
    /* @__PURE__ */ React.createElement("source", { src: "/videos/hero-laundry.mp4", type: "video/mp4" })
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-slate-900/60" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" })), /* @__PURE__ */ React.createElement("div", { className: "container relative z-10 mx-auto px-4 md:px-6 pt-20" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 text-primary-foreground mb-6" }, /* @__PURE__ */ React.createElement(Truck, { className: "h-4 w-4 text-green-400" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-green-100" }, "Free pickup & delivery in Nairobi")),
    /* @__PURE__ */ React.createElement("h1", { className: "text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 font-display" }, "Fast, Reliable ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400" }, "Laundry Services")),
    /* @__PURE__ */ React.createElement("p", { className: "text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg" }, "We take the hassle out of your laundry day. Premium care for your clothes with convenient doorstep collection and delivery."),
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row gap-4" }, /* @__PURE__ */ React.createElement(BookingDialog, null, /* @__PURE__ */ React.createElement(Button, { size: "lg", className: "h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25" }, "Book Now", /* @__PURE__ */ React.createElement(ArrowRight, { className: "ml-2 h-5 w-5" }))), /* @__PURE__ */ React.createElement(BookingDialog, null, /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "outline", className: "h-14 px-8 text-lg font-semibold border-white/30 text-white hover:bg-white/10 backdrop-blur-sm" }, "Request Pickup")))
  ), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: 0.8, duration: 0.6 },
      className: "mt-12 flex items-center gap-8 text-slate-400 text-sm font-medium"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 rounded-full bg-green-500" }), /* @__PURE__ */ React.createElement("span", null, "24h Turnaround")),
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 rounded-full bg-green-500" }), /* @__PURE__ */ React.createElement("span", null, "Eco-friendly")),
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 rounded-full bg-green-500" }), /* @__PURE__ */ React.createElement("span", null, "100% Satisfaction"))
  ))));
}
export {
  Hero
};
