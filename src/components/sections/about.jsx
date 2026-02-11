import React from "react";
import { motion } from "framer-motion";
import { Target, Heart, Zap, Shield, Clock, Award } from "lucide-react";

function About() {
  const coreValues = [
    {
      icon: Heart,
      title: "Care",
      description: "Care goes beyond just cleaning clothes; it encompasses treating every garment with respect and attention. We are dedicated to creating a restorative environment where every item feels valued, understood, and cared for throughout the cleaning process."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We believe that quality is a powerful catalyst for customer satisfaction. By fostering a culture of precision and excellence, we inspire our customers to trust in better results and empower our team to overcome challenges with skill and confidence."
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Our commitment to professionalism is unwavering. We uphold the highest ethical standards, maintain rigorous cleaning best practices, and treat every individual—customer, garment, or colleague—with the utmost respect, integrity, and accountability."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Trust is not just a goal; it is our standard. We relentlessly pursue reliability in every aspect of our service, from pickup precision to delivery excellence, continuously innovating and improving to serve our community better."
    }
  ];

  const milestones = [
    { year: "2018", event: "Express Laundry opens its first location in Nairobi" },
    { year: "2019", event: "Introduction of eco-friendly cleaning products" },
    { year: "2020", event: "Launch of contactless pickup and delivery service" },
    { year: "2021", event: "Expansion to multiple service areas across Nairobi" },
    { year: "2023", event: "Opening of state-of-the-art processing facility" },
    { year: "2024", event: "Celebrating 5+ years of premium laundry care" },
  ];

  return (
    <section id="about" className="bg-white">
      {/* Main About Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional Laundry Service"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-extrabold text-primary font-display">5+</div>
                  <div className="text-sm font-medium text-muted-foreground leading-tight">
                    Years of<br />Excellence
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-display text-slate-900">
                We Care For Your Clothes <br /> So You Don't Have To
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed text-justify">
                At Express Laundry, we understand that life in Nairobi is busy. That's why we're dedicated to providing convenient, high-quality laundry and dry cleaning services that fit seamlessly into your schedule.
              </p>
              <p className="text-muted-foreground mb-8 text-justify">
                We treat every garment with the utmost care, using premium eco-friendly products that are tough on stains but gentle on fabrics. Your satisfaction is our top priority.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-blue-50 rounded-2xl p-8 md:p-10 border-2 border-blue-100 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Animated border line effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional, customer-centered laundry services that improve the daily lives and well-being of our community. We are committed to delivering compassionate care, advancing cleaning knowledge, and fostering a convenient environment for all who seek our services.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-slate-50 rounded-2xl p-8 md:p-10 border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Animated border line effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
              </div>

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <Clock className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the region's most trusted laundry service provider, recognized for quality excellence, innovative cleaning methods, and an unwavering commitment to the customers and families we serve. We envision a cleaner community where everyone has access to quality care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto text-center mb-20">
              <span className="text-blue-400 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                A History of Excellence
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                For over five years, Express Laundry has been the cornerstone of premium laundry care in Nairobi. What began as a small operation has grown into a comprehensive service center, yet our commitment to personalized, quality care remains unchanged.
              </p>
            </div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-800" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-8 items-start relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)] z-10 mt-6 md:mt-8 border-2 border-slate-900" />

                  {/* Left Side */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'hidden md:block'}`}>
                    {index % 2 === 0 && (
                      <div className="group">
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-400/10">
                          <span className="text-3xl font-serif font-bold text-blue-400 block mb-2">{milestone.year}</span>
                          <p className="text-slate-300 font-medium">{milestone.event}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:pl-16 md:text-left' : 'hidden md:block'}`}>
                    {index % 2 !== 0 && (
                      <div className="group">
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-400/10">
                          <span className="text-3xl font-serif font-bold text-blue-400 block mb-2">{milestone.year}</span>
                          <p className="text-slate-300 font-medium">{milestone.event}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Card */}
                  <div className="md:hidden pl-12 w-full">
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50 shadow-lg">
                      <span className="text-2xl font-serif font-bold text-blue-400 block mb-2">{milestone.year}</span>
                      <p className="text-slate-300">{milestone.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                What Drives Us
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mt-2 font-display text-slate-900">
                Our Core Values
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative bg-white p-6 rounded-xl border-2 border-slate-100 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center"
                  >
                    {/* Animated border line effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 border-2 border-primary rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
                    </div>

                    <div className="relative">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export { About };
