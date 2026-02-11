import { 
  Shirt, 
  Sparkles, 
  Wind, 
  BedDouble, 
  ShieldCheck, 
  WashingMachine, 
  Layers, 
  Truck, 
  Hotel, 
  UserCheck, 
  Clock, 
  Droplets, 
  Tags,
  Calendar,
  CreditCard,
  Zap,
  Star
} from "lucide-react";

export const servicesData = [
  // Core Laundry Services
  {
    slug: "wash-and-fold",
    title: "Wash & Fold",
    icon: Shirt,
    description: "Everyday laundry washed, dried, and neatly folded. Perfect for your daily wear.",
    longDescription: "Our Wash & Fold service is the ultimate convenience for your everyday laundry needs. We sort, wash, dry, and neatly fold your clothes, so they represent the best version of you. We use premium detergents and softeners to ensure your clothes smell fresh and feel soft.",
    benefits: [
      "Sorted by color and fabric type",
      "Premium detergents and fabric softeners",
      "Neatly folded and packed",
      "Same-day service available"
    ],
    image: "/images/wash-and-fold.jpg",
    color: "bg-blue-50 text-blue-600"
  },
  {
    slug: "wash-dry-iron",
    title: "Wash, Dry & Iron",
    icon: Wind,
    description: "Full-service laundry with professional pressing included for a crisp finish.",
    longDescription: "Get the complete treatment for your garments. We wash, dry, and provide expert ironing for all your clothes. Perfect for work shirts, trousers, and any items that need a professional touch to look their best.",
    benefits: [
      "Professional steam ironing",
      "Crisp, wrinkle-free finish",
      "Hanger or folded options",
      "Premium fabric care"
    ],
    image: "/images/pressing.jpg",
    color: "bg-orange-50 text-orange-600"
  },
  {
    slug: "express-laundry",
    title: "Express / Same-Day",
    icon: Zap,
    description: "Fast turnaround for your urgent laundry needs without compromising quality.",
    longDescription: "When time is of the essence, our Express Laundry service delivers. Get your clothes cleaned and ready within hours. We prioritize your urgent items while maintaining our high standards of care.",
    benefits: [
      "Priority processing",
      "Ready in under 8 hours",
      "Ideal for travelers",
      "Reliable speed"
    ],
    image: "https://images.unsplash.com/photo-1489058535093-8f530d789c3b?q=80&w=2070&auto=format&fit=crop",
    color: "bg-yellow-50 text-yellow-600"
  },

  // Dry Cleaning Services
  {
    slug: "dry-cleaning",
    title: "Dry Cleaning",
    icon: Sparkles,
    description: "Professional care for delicate fabrics like silk, wool, and suits using eco-solvents.",
    longDescription: "Trust your most delicate garments to our expert dry cleaning service. We use eco-friendly solvents that are tough on stains but gentle on fabrics and the environment. Perfect for suits, dresses, silk, wool, and other delicate items.",
    benefits: [
      "Eco-friendly solvents",
      "Stain removal expertise",
      "Fabric protection",
      "Finished with professional pressing"
    ],
    image: "/images/dry-cleaning.jpg",
    color: "bg-purple-50 text-purple-600"
  },
  {
    slug: "specialized-fabric-care",
    title: "Specialized Care",
    icon: ShieldCheck,
    description: "Expert treatment for silk, wool, lace, linen, and heavy denim fabrics.",
    longDescription: "Different fabrics require different techniques. Our specialized care team understands the science of fabrics, providing the perfect temperature, detergent, and handling for everything from delicate lace to heavy denim.",
    benefits: [
      "Fiber-specific detergents",
      "Color preservation",
      "Texture maintenance",
      "Expert stain treatment"
    ],
    image: "/images/dry-cleaning.jpg",
    color: "bg-indigo-50 text-indigo-600"
  },

  // Household & Bulk
  {
    slug: "carpet-rug-cleaning",
    title: "Carpet & Rugs",
    icon: Layers,
    description: "Deep steam cleaning for carpets and rugs to remove deep-seated dirt and allergens.",
    longDescription: "Revitalize your living space with our professional carpet and rug cleaning service. We use deep-extraction steam cleaning to remove allergens, dust mites, and tough stains, leaving your carpets fresh, clean, and hygienic.",
    benefits: [
      "Deep-seated dirt removal",
      "Allergen and mite elimination",
      "Odor neutralization",
      "Quick-dry technology"
    ],
    image: "/images/carpet.jpg",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    slug: "bedding-and-duvets",
    title: "Bedding & Duvets",
    icon: BedDouble,
    description: "Deep cleaning for heavy comforters, sheets, and curtains for a hygienic sleep.",
    longDescription: "Ensure a hygienic and comfortable sleep environment with our bedding and duvet cleaning service. We have large-capacity machines capable of deep cleaning comforters, duvets, blankets, pillows, and curtains.",
    benefits: [
      "Hygienic deep cleaning",
      "Dust mite removal",
      "Soft and fresh finish",
      "Large item capacity"
    ],
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
    color: "bg-green-50 text-green-600"
  },

  // Commercial
  {
    slug: "commercial-laundry",
    title: "Commercial & B2B",
    icon: Hotel,
    description: "Expert laundry solutions for Hotels, Airbnbs, Restaurants, and Institutions.",
    longDescription: "We provide scalable laundry solutions for businesses. From hospitality linens to restaurant uniforms, we ensure your commercial textiles are handled with the highest standards of hygiene and professionalism, with reliable turnaround times.",
    benefits: [
      "Bulk processing efficiency",
      "Hospital-grade sanitation",
      "Custom billing & reporting",
      "Dedicated account manager"
    ],
    image: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?q=80&w=2070&auto=format&fit=crop",
    color: "bg-slate-50 text-slate-600"
  },

  // Pickup & Delivery
  {
    slug: "pickup-delivery",
    title: "Pickup & Delivery",
    icon: Truck,
    description: "Convenient doorstep service with scheduled weekly or monthly laundry plans.",
    longDescription: "Never worry about laundry day again. Our door-to-door service brings professional cleaning to your doorstep. Schedule one-off pickups or join our hassle-free weekly subscription plans for maximum convenience.",
    benefits: [
      "Real-time tracking",
      "Scheduled pickup slots",
      "Subscription discounts",
      "Contactless delivery"
    ],
    image: "/images/delivery.jpg",
    color: "bg-cyan-50 text-cyan-600"
  },

  // Leather & Luxury Care
  {
    slug: "leather-care",
    title: "Leather Cleaning",
    icon: ShieldCheck,
    description: "Specialized treatment for leather jackets, suede shoes, and luxury items.",
    longDescription: "Leather and suede require special attention to maintain their texture and longevity. Our specialized care process cleans, conditions, and restores your leather jackets, shoes, bags, and other luxury items, preventing cracking and fading of these premium materials.",
    benefits: [
      "Cleaning and conditioning",
      "Color restoration",
      "Suede and nubuck specialist care",
      "Protects against drying and cracking"
    ],
    image: "/images/leather-cleaning.jpg",
    color: "bg-amber-50 text-amber-600"
  }
];
