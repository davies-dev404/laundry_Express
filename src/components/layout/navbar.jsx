import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Shirt, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Wash & Fold", href: "/services/wash-and-fold" },
        { name: "Wash, Dry & Iron", href: "/services/wash-dry-iron" },
        { name: "Dry Cleaning", href: "/services/dry-cleaning" },
        { name: "Carpet & Rugs", href: "/services/carpet-rug-cleaning" },
        { name: "Leather Care", href: "/services/leather-care" },
        { name: "Bedding & Duvets", href: "/services/bedding-and-duvets" },
        { name: "Commercial & B2B", href: "/services/commercial-laundry" },
        { name: "Pickup & Delivery", href: "/services/pickup-delivery" }
      ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" }
  ];
  return /* @__PURE__ */ React.createElement(
    "nav",
    {
      className: cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled || location !== "/" ? "bg-white/90 backdrop-blur-md shadow-md py-2 border-b border-gray-100" : "bg-transparent py-4"
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4 md:px-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement(Link, { href: "/" }, /* @__PURE__ */ React.createElement(Logo, { 
      textClassName: scrolled || location !== "/" ? "text-slate-900" : "text-white"
    })), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex items-center space-x-8" }, navLinks.map((link) => link.dropdown ? /* @__PURE__ */ React.createElement(DropdownMenu, { key: link.name }, /* @__PURE__ */ React.createElement(DropdownMenuTrigger, { className: cn(
      "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none",
      scrolled || location !== "/" ? "text-slate-600" : "text-slate-100 hover:text-white"
    ) }, link.name, " ", /* @__PURE__ */ React.createElement(ChevronDown, { className: "h-4 w-4" })), /* @__PURE__ */ React.createElement(DropdownMenuContent, { align: "start", className: "w-48" }, link.dropdown.map((item) => /* @__PURE__ */ React.createElement(DropdownMenuItem, { key: item.name, asChild: true }, /* @__PURE__ */ React.createElement(Link, { href: item.href, className: "cursor-pointer w-full" }, item.name))))) : /* @__PURE__ */ React.createElement(
      Link,
      {
        key: link.name,
        href: link.href,
        className: cn(
          "text-sm font-medium transition-colors hover:text-primary",
          scrolled || location !== "/" ? "text-slate-600" : "text-slate-100 hover:text-white"
        )
      },
      link.name
    )), /* @__PURE__ */ React.createElement(BookingDialog, null, /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "default",
        className: cn(
          "font-bold shadow-[0_4px_14px_0_rgba(0,163,173,0.39)] bg-[#00A3AD] hover:bg-[#00828a] text-white transition-all hover:scale-105 active:scale-95 px-6",
          !(scrolled || location !== "/") && "bg-white text-primary hover:bg-gray-100 shadow-white/20"
        )
      },
      "Book Now"
    ))), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "md:hidden text-slate-800 focus:outline-none",
        onClick: () => setIsOpen(!isOpen)
      },
      isOpen ? /* @__PURE__ */ React.createElement(X, { className: "h-6 w-6" }) : /* @__PURE__ */ React.createElement(Menu, { className: cn("h-6 w-6", !(scrolled || location !== "/") && "text-white") })
    ), isOpen && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5"
      },
      navLinks.map((link) => /* @__PURE__ */ React.createElement("div", { key: link.name }, /* @__PURE__ */ React.createElement(
        Link,
        {
          href: link.href,
          onClick: () => setIsOpen(false),
          className: "text-lg font-medium text-slate-700 hover:text-primary text-left block"
        },
        link.name
      ))),
      /* @__PURE__ */ React.createElement("div", { className: "pt-4" }, /* @__PURE__ */ React.createElement(BookingDialog, null, /* @__PURE__ */ React.createElement(Button, { className: "w-full text-lg py-6 shadow-md", onClick: () => setIsOpen(false) }, "Book Now")))
    )))
  );
}
export {
  Navbar
};
