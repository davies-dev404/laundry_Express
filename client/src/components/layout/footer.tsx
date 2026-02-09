import { Shirt, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Shirt className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-display">
                Express<span className="text-primary">Laundry</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Premium laundry and dry cleaning services delivered to your doorstep. Fast, reliable, and eco-friendly.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-primary transition-colors">Wash & Fold</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Dry Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Ironing & Pressing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Bedding & Duvets</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Leather Care</a></li>
            </ul>
          </div>

          {/* Contact */}
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

          {/* Hours */}
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
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-sm">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Express Laundry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
