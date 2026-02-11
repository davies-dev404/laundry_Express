import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/ui/booking-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, Calendar, Package, DollarSign, Newspaper, 
  MessageCircle, Target, Heart, Zap, Shield, Quote,
  Sparkles, Shirt, Wind, BedDouble, Eye, Users, CheckCircle
} from "lucide-react";

function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  const features = [
    {
      title: "Premium Quality",
      desc: "Expert care for every garment using state-of-the-art equipment and eco-friendly products.",
      image: "/images/dry-cleaning.jpg",
      link: "/services/dry-cleaning"
    },
    {
      title: "Fast Turnaround",
      desc: "24-48 hour service with same-day options available for urgent needs.",
      image: "/images/pressing.jpg",
      link: "/services/pressing-and-ironing"
    },
    {
      title: "Doorstep Service",
      desc: "Free pickup and delivery within Nairobi - laundry made effortless.",
      image: "/images/wash-and-fold.jpg",
      link: "/services/wash-and-fold"
    }
  ];

  const testimonials = [
    {
      text: "Express Laundry has been a lifesaver! The quality of their work is exceptional, and the convenience of doorstep pickup makes my busy schedule so much easier to manage.",
      role: "Business Professional"
    },
    {
      text: "I've tried several laundry services in Nairobi, but Express Laundry stands out. They handle my delicate fabrics with such care, and everything always comes back perfect.",
      role: "Fashion Enthusiast"
    },
    {
      text: "The team is professional, punctual, and their eco-friendly approach aligns with my values. Highly recommend their services!",
      role: "Satisfied Customer"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 w-full h-full bg-muted">
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setHeroLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src="/videos/hero-laundry.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg">
                Nairobi's #1 Premium <br />
                <span className="text-blue-300 drop-shadow-md">Laundry Solution</span> <br />
                Right at Your Door
              </h1>
              <p className="text-xl md:text-2xl text-white mb-10 border-l-4 border-blue-300 pl-6 drop-shadow-md max-w-2xl px-2">
                Experience the gold standard in fabric care. Fast, reliable, and eco-friendly laundry service with free pickup and delivery across Nairobi.
              </p>
              <div>
                <BookingDialog>
                  <Button size="lg" className="group text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl">
                    Book Your Pickup Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </BookingDialog>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Boxes Section - Overlapping Hero */}
      <section className="relative z-20 -mt-16 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <BookingDialog>
                <div className="group h-full cursor-pointer">
                  <div className="bg-card hover:bg-primary transition-colors duration-300 p-8 rounded-xl shadow-lg border border-border/50 h-full flex flex-col items-start gap-4 group-hover:border-primary/20">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-white/20">
                      <Calendar className="w-8 h-8 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-white">Book Your Pickup</h3>
                      <p className="text-muted-foreground group-hover:text-white/90 text-sm">Schedule your laundry collection with ease online.</p>
                    </div>
                  </div>
                </div>
              </BookingDialog>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full"
            >
              <div className="group h-full">
                <div className="bg-card hover:bg-primary transition-colors duration-300 p-8 rounded-xl shadow-lg border border-border/50 h-full flex flex-col items-start gap-4 group-hover:border-primary/20">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-white/20">
                    <Package className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-white">Track Your Order</h3>
                    <p className="text-muted-foreground group-hover:text-white/90 text-sm">Real-time updates on your laundry status.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-full"
            >
              <Link href="/pricing">
                <div className="group h-full cursor-pointer">
                  <div className="bg-card hover:bg-primary transition-colors duration-300 p-8 rounded-xl shadow-lg border border-border/50 h-full flex flex-col items-start gap-4 group-hover:border-primary/20">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-white/20">
                      <DollarSign className="w-8 h-8 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-white">Transparent Pricing</h3>
                      <p className="text-muted-foreground group-hover:text-white/90 text-sm">Clear, competitive rates with no hidden fees.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-full"
            >
              <div className="group h-full">
                <div className="bg-card hover:bg-primary transition-colors duration-300 p-8 rounded-xl shadow-lg border border-border/50 h-full flex flex-col items-start gap-4 group-hover:border-primary/20">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-white/20">
                    <Shield className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-white">100% Satisfaction</h3>
                    <p className="text-muted-foreground group-hover:text-white/90 text-sm">Not happy? We'll re-clean your clothes for free.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Our Commitment</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Why Choose Express Laundry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence, Care, Speed, and Trust. These core values drive us to provide outstanding service and build lasting relationships with our customers.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Animated border line effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>

              <div className="relative">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional laundry services that save our customers time while delivering premium quality care for their garments. We're committed to excellence, convenience, and sustainability in everything we do.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Animated border line effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>

              <div className="relative">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Nairobi's most trusted laundry service provider, recognized for our reliability, quality, and customer-first approach. We envision a future where premium laundry care is accessible to everyone.
                </p>
              </div>
            </motion.div>

            {/* Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Animated border line effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>

              <div className="relative">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  Our Values
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground font-medium">Excellence in every service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground font-medium">Care for your garments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground font-medium">Speed and efficiency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground font-medium">Trust and reliability</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid with Hover Effects */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={item.link}>
                  <div className="group relative overflow-hidden rounded-2xl h-[400px] bg-accent cursor-pointer">
                    <div className="absolute inset-0">
                      <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                      <h3 className="text-2xl font-serif font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                        {item.title}
                      </h3>
                      <p className="text-white/90 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        {item.desc}
                      </p>
                      <Button variant="link" className="text-white p-0 h-auto justify-start mt-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Premium Laundry Solutions<br /> for Every Need
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card hover:shadow-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 group flex flex-col items-start text-left"
            >
              <div className="w-14 h-14 bg-blue-50 flex items-center justify-center mb-6 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                <Shirt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Wash & Fold</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Professional washing and folding service for your everyday laundry needs.
              </p>
              <div className="mt-auto flex flex-col gap-4 w-full">
                <BookingDialog>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-md hover:shadow-lg transition-all rounded-xl">
                    Book This Service
                  </Button>
                </BookingDialog>
                <Link href="/services/wash-and-fold">
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-bold uppercase text-xs tracking-wider relative mx-auto">
                    Learn more
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card hover:shadow-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 group flex flex-col items-start text-left"
            >
              <div className="w-14 h-14 bg-purple-50 flex items-center justify-center mb-6 rounded-xl text-purple-600 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Dry Cleaning</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Expert dry cleaning for delicate fabrics, suits, and special garments.
              </p>
              <div className="mt-auto flex flex-col gap-4 w-full">
                <BookingDialog>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-md hover:shadow-lg transition-all rounded-xl">
                    Book This Service
                  </Button>
                </BookingDialog>
                <Link href="/services/dry-cleaning">
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-bold uppercase text-xs tracking-wider relative mx-auto">
                    Learn more
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card hover:shadow-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 group flex flex-col items-start text-left"
            >
              <div className="w-14 h-14 bg-orange-50 flex items-center justify-center mb-6 rounded-xl text-orange-600 group-hover:scale-110 transition-transform duration-300">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Pressing</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Crisp, wrinkle-free finishing for a polished, professional look.
              </p>
              <div className="mt-auto flex flex-col gap-4 w-full">
                <BookingDialog>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-md hover:shadow-lg transition-all rounded-xl">
                    Book This Service
                  </Button>
                </BookingDialog>
                <Link href="/services/pressing-and-ironing">
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-bold uppercase text-xs tracking-wider relative mx-auto">
                    Learn more
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card hover:shadow-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 group flex flex-col items-start text-left"
            >
              <div className="w-14 h-14 bg-green-50 flex items-center justify-center mb-6 rounded-xl text-green-600 group-hover:scale-110 transition-transform duration-300">
                <BedDouble className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Bedding & Duvets</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Deep cleaning for comforters, sheets, and curtains for a hygienic home.
              </p>
              <div className="mt-auto flex flex-col gap-4 w-full">
                <BookingDialog>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-md hover:shadow-lg transition-all rounded-xl">
                    Book This Service
                  </Button>
                </BookingDialog>
                <Link href="/services/bedding-and-duvets">
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-bold uppercase text-xs tracking-wider relative mx-auto">
                    Learn more
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" className="px-8">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2 block">Customer Stories</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Real Stories of Satisfaction</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-16">
            Discover what our customers say about their experience with Express Laundry.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {testimonials.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors duration-300"
              >
                <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />
                <p className="text-sm leading-relaxed mb-6 opacity-90">{story.text}</p>
                <p className="font-bold text-blue-400">— {story.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Tour Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Facility Tour</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-slate-900 leading-tight">
                Tour Express Laundry <br /> Facilities - ELF
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-md border-l-4 border-primary pl-6">
                Bringing fabric care of international standards within the reach of every individual.
              </p>
              
              <Link href="/gallery">
                <Button size="lg" className="rounded-full bg-[#00A3AD] hover:bg-[#00828a] px-8 py-6 text-lg group">
                  Check Our Gallery
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <p className="mt-8 text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
                The Heartbeat of Premium Fabric Care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10]"
            >
              <img 
                src="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?q=80&w=2070&auto=format&fit=crop" 
                alt="Express Laundry Facility" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-6 left-6 text-white text-[10px] font-mono tracking-widest opacity-60">
                SYSTEM: ONLINE<br />
                TARGET: LAUNDRY FACILITY<br />
                ACQUIRING...
              </div>
              <div className="absolute bottom-6 right-6 text-white text-[10px] font-mono tracking-widest opacity-60 text-right">
                FABRIC_DIAGNOSTICS<br />
                V.2.0.4
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all group">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality Care Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Commitment to <br /> Quality Care
                </h2>
              </motion.div>

              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Sparkles className="w-6 h-6 text-teal-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Care</h3>
                    <p className="text-slate-600 leading-relaxed max-w-sm">
                      Meticulous attention to detail for every garment, ensuring sustainable fabric care outcomes.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Zap className="w-6 h-6 text-teal-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Innovative solutions</h3>
                    <p className="text-slate-600 leading-relaxed max-w-sm">
                      Using technology and best practices to address complex garment care challenges effectively.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Users className="w-6 h-6 text-teal-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Dedicated team</h3>
                    <p className="text-slate-600 leading-relaxed max-w-sm">
                      Passionate professionals committed to making a difference in laundry service delivery.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 h-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden h-full transform translate-y-12"
              >
                <img 
                  src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=2030&auto=format&fit=crop" 
                  alt="Delicate Fabric Care" 
                  className="w-full h-full object-cover shadow-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden h-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional Laundry Team" 
                  className="w-full h-full object-cover shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900 text-white border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-6 inline-block border border-blue-500/20">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Find answers to common questions about our laundry services, pricing, and delivery options.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white min-w-[150px]">Get in touch</Button>
              </Link>
            </div>
            
            <div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-none bg-slate-800 rounded-lg px-2 data-[state=open]:bg-blue-900/20">
                  <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-white [&[data-state=open]]:text-blue-400">
                    What services does Express Laundry provide?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-white/70">
                    We offer wash & fold, dry cleaning, pressing & ironing, bedding & duvets, laundry cleaning, and leather care services. All with free pickup and delivery in Nairobi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-none bg-slate-800 rounded-lg px-2 data-[state=open]:bg-blue-900/20">
                  <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-white [&[data-state=open]]:text-blue-400">
                    What is your turnaround time?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-white/70">
                    Our standard turnaround is 24-48 hours. We also offer same-day service for urgent requests at an additional fee.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-none bg-slate-800 rounded-lg px-2 data-[state=open]:bg-blue-900/20">
                  <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-white [&[data-state=open]]:text-blue-400">
                    Do you offer free pickup and delivery?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-white/70">
                    Yes! We provide free pickup and delivery within Nairobi for all orders. Simply book online or call us to schedule.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-none bg-slate-800 rounded-lg px-2 data-[state=open]:bg-blue-900/20">
                  <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-white [&[data-state=open]]:text-blue-400">
                    How can I track my order?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-white/70">
                    After booking, you'll receive updates via SMS and email. You can also call our customer service team for real-time status updates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-none bg-slate-800 rounded-lg px-2 data-[state=open]:bg-blue-900/20">
                  <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-white [&[data-state=open]]:text-blue-400">
                    Are your products eco-friendly?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-white/70">
                    Yes, we use eco-friendly detergents and processes that are tough on stains but gentle on fabrics and the environment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Callback Form Section */}
      <section className="relative z-20 py-20 lg:-mb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary text-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest bg-white/10 w-fit px-3 py-1 rounded mb-6">Need a Quote?</span>
              <h2 className="text-4xl font-serif font-bold mb-4">Request a Callback<br/>Today</h2>
              <p className="text-white/80 mb-8 max-w-md">
                Fill out the form and we'll get back to you within 24 hours with a personalized quote for your laundry needs.
              </p>
              
              <form className="space-y-4 max-w-md">
                <div>
                  <Input placeholder="Your Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus-visible:ring-white" />
                </div>
                <div>
                  <Input type="email" placeholder="Email Address" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus-visible:ring-white" />
                </div>
                <div>
                  <Input type="tel" placeholder="Phone Number" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus-visible:ring-white" />
                </div>
                <div>
                  <Textarea placeholder="Tell us about your laundry needs..." className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px] focus-visible:ring-white" />
                </div>
                <Button type="submit" className="w-full bg-white text-primary hover:bg-blue-50 h-12 text-lg mt-2 font-bold">Submit Request</Button>
              </form>
            </div>
            
            <div className="relative h-full min-h-[500px] lg:h-auto group">
              <img 
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop" 
                alt="Laundry Service" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent lg:w-1/3"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <p className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                  Have questions or ready to book?
                </p>
                <p className="text-lg font-medium text-blue-300">
                  We're here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/254700123456"
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

export { Home as default };
