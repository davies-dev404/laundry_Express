import React from "react";
import { Shirt, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./logo";

function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/expresslaundry", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/expresslaundry", label: "Instagram" },
    { 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
        </svg>
      ), 
      href: "https://twitter.com/expresslaundry", 
      label: "X (formerly Twitter)" 
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo textClassName="text-white" />
            <p className="text-slate-400 leading-relaxed">
              Premium laundry and dry cleaning services delivered to your doorstep. Fast, reliable, and eco-friendly.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services/wash-and-fold" className="hover:text-primary transition-colors">
                  Wash & Fold
                </a>
              </li>
              <li>
                <a href="/services/dry-cleaning" className="hover:text-primary transition-colors">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="/services/pressing-and-ironing" className="hover:text-primary transition-colors">
                  Pressing & Ironing
                </a>
              </li>
              <li>
                <a href="/services/bedding-and-duvets" className="hover:text-primary transition-colors">
                  Bedding & Duvets
                </a>
              </li>
              <li>
                <a href="/services/leather-care" className="hover:text-primary transition-colors">
                  Leather Care
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-primary transition-colors">
                  Facility Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Westlands, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>hello@expresslaundry.co.ke</span>
              </li>
            </ul>
          </div>

          {/* Business Hours Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Monday - Saturday</p>
                  <p className="text-sm">7:30 AM – 9:30 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-slate-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Sunday & Public Holidays</p>
                  <p className="text-sm">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Express Laundry. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
