import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2 border-b border-gray-100"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => scrollToSection("#home")}
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
              <Shirt className="h-6 w-6 text-white" />
            </div>
            <span className={cn(
              "text-xl md:text-2xl font-bold font-display tracking-tight",
              scrolled ? "text-slate-900" : "text-slate-900 md:text-white"
            )}>
              Express<span className="text-primary">Laundry</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  scrolled ? "text-slate-600" : "text-slate-100 hover:text-white"
                )}
              >
                {link.name}
              </button>
            ))}
            <BookingDialog>
              <Button 
                variant={scrolled ? "default" : "secondary"}
                className={cn(
                  "font-semibold shadow-lg transition-transform hover:-translate-y-0.5",
                  !scrolled && "bg-white text-primary hover:bg-gray-100"
                )}
              >
                Book Now
              </Button>
            </BookingDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className={cn("h-6 w-6", !scrolled && "text-white")} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-lg font-medium text-slate-700 hover:text-primary text-left"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4">
              <BookingDialog>
                <Button className="w-full text-lg py-6 shadow-md">Book Now</Button>
              </BookingDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
