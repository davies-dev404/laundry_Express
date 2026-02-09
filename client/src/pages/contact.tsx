import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Contact } from "@/components/sections/contact";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Navbar />
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
