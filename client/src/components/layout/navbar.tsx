import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Shirt, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
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
        { name: "Wash & Fold", href: "/services" },
        { name: "Dry Cleaning", href: "/services" },
        { name: "Ironing", href: "/services" },
        { name: "Bedding", href: "/services" },
      ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled || location !== "/"
          ? "bg-white/90 backdrop-blur-md shadow-md py-2 border-b border-gray-100"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                <Shirt className="h-6 w-6 text-white" />
              </div>
              <span className={cn(
                "text-xl md:text-2xl font-bold font-display tracking-tight",
                scrolled || location !== "/" ? "text-slate-900" : "text-white"
              )}>
                Express<span className="text-primary">Laundry</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none",
                    scrolled || location !== "/" ? "text-slate-600" : "text-slate-100 hover:text-white"
                  )}>
                    {link.name} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link href={item.href} className="cursor-pointer w-full">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    scrolled || location !== "/" ? "text-slate-600" : "text-slate-100 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <BookingDialog>
              <Button 
                variant={scrolled || location !== "/" ? "default" : "secondary"}
                className={cn(
                  "font-semibold shadow-lg transition-transform hover:-translate-y-0.5",
                  !(scrolled || location !== "/") && "bg-white text-primary hover:bg-gray-100"
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className={cn("h-6 w-6", !(scrolled || location !== "/") && "text-white")} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-primary text-left block"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-2 flex flex-col space-y-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base text-slate-500 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <BookingDialog>
                <Button className="w-full text-lg py-6 shadow-md" onClick={() => setIsOpen(false)}>Book Now</Button>
              </BookingDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
