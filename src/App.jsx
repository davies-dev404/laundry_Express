import React from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import PricingPage from "@/pages/pricing";
import ContactPage from "@/pages/contact";
import ServiceDetail from "@/components/sections/service-detail";
import Accessibility from "@/pages/accessibility";
import PrivacyPolicy from "@/pages/privacy";
import TermsOfService from "@/pages/terms";
import Gallery from "@/pages/gallery";
import NotFound from "@/pages/not-found";
import { StickyCTA } from "@/components/ui/sticky-cta";

function Router() {
  return /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, { path: "/", component: Home }), /* @__PURE__ */ React.createElement(Route, { path: "/about", component: AboutPage }), /* @__PURE__ */ React.createElement(Route, { path: "/services", component: ServicesPage }), /* @__PURE__ */ React.createElement(Route, { path: "/services/:slug", component: ServiceDetail }), /* @__PURE__ */ React.createElement(Route, { path: "/gallery", component: Gallery }), /* @__PURE__ */ React.createElement(Route, { path: "/pricing", component: PricingPage }), /* @__PURE__ */ React.createElement(Route, { path: "/accessibility", component: Accessibility }), /* @__PURE__ */ React.createElement(Route, { path: "/privacy", component: PrivacyPolicy }), /* @__PURE__ */ React.createElement(Route, { path: "/terms", component: TermsOfService }), /* @__PURE__ */ React.createElement(Route, { path: "/contact", component: ContactPage }), /* @__PURE__ */ React.createElement(Route, { component: NotFound }));
}
function App() {
  return /* @__PURE__ */ React.createElement(QueryClientProvider, { client: queryClient }, /* @__PURE__ */ React.createElement(TooltipProvider, null, /* @__PURE__ */ React.createElement(Toaster, null), /* @__PURE__ */ React.createElement(Router, null)));
}
var App_default = App;
export {
  App_default as default
};
