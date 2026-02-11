import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { motion } from "framer-motion";
function AboutPage() {
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen font-sans text-slate-900 bg-white" }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", { className: "pt-20" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 }
    },
    /* @__PURE__ */ React.createElement(About, null)
  )), /* @__PURE__ */ React.createElement(Footer, null));
}
export {
  AboutPage as default
};
