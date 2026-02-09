import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254700123456" // Replace with actual number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 fill-current" />
      </a>
    </div>
  );
}
