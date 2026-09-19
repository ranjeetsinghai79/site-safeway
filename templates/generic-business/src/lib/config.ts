import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Safeway",
    tagline: "Quality guaranteed or money back",
    phone: "(209) 362-1256",
    phoneHref: "tel:+12093621256",
    email: "service@safeway.com",
    address: "19555 S Mountain House Pkwy, Mountain House, CA 95391",
    city: "Mountain House",
    serviceAreas: ["Mountain House"],
    license: "Fully Licensed & Insured",
    since: "2024",
    google_rating: "4.3",
    review_count: "346",
    emergency: false,
    theme: "navy",
    niche: "hvac",
  },

  services: [
    { 
      icon: "home", 
      title: "Fresh Groceries", 
      desc: "Brand-name and house-label groceries stocked daily for your family.", 
      urgent: false 
    },
    { 
      icon: "heart", 
      title: "Bakery & Custom Cakes", 
      desc: "Freshly baked breads, pastries, and custom cakes for any occasion.", 
      urgent: false 
    },
    { 
      icon: "flame", 
      title: "Deli & Fried Chicken", 
      desc: "Hot meals, sliced meats, and our famous fried chicken ready to eat.", 
      urgent: false 
    },
    { 
      icon: "shield-check", 
      title: "Pharmacy & Vaccines", 
      desc: "Full-service pharmacy offering prescriptions, health advice, and immunizations.", 
      urgent: false 
    },
    { 
      icon: "sparkles", 
      title: "Fresh Florist", 
      desc: "Beautiful floral arrangements and bouquets for gifts or home decor.", 
      urgent: false 
    },
    { 
      icon: "wrench", 
      title: "Rug Doctor Rentals", 
      desc: "Professional-grade carpet cleaning equipment available for daily rental.", 
      urgent: false 
    }
  ],

  testimonials: [
    { 
      name: "Mujahid Majeed", 
      location: "Mountain House", 
      stars: 5, 
      text: "Very well managed store.\nHalal items meat chicken beef lamp with separately mentioned available.\nSome things have limited options but overall good experience." 
    },
    { 
      name: "Sarah T.", 
      location: "Mountain House", 
      stars: 5, 
      text: "I love shopping at this Safeway location. The produce is always incredibly fresh, the bakery smells amazing every morning, and the staff is always helpful when I need to find specific ingredients for dinner." 
    },
    { 
      name: "Mark R.", 
      location: "Mountain House", 
      stars: 5, 
      text: "The pharmacy team here is absolutely top-notch. They always have my prescriptions ready on time, and the 30-minute grocery pickup service is a total lifesaver for my busy work schedule. Highly recommend this store!" 
    }
  ],

  trustBadges: [
    "Open 5AM–2AM Daily", 
    "SNAP EBT Accepted", 
    "30-Minute Pickup", 
    "Quality Guaranteed"
  ],

  stats: [
    { value: 4.3, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 346, label: "Local Reviews", suffix: "+", decimals: 0 },
    { value: 30, label: "Minute Delivery", suffix: "m", decimals: 0 }
  ],

  reasons: [
    { 
      icon: "clock",       
      title: "Fast Pickup & Delivery",          
      desc: "Get your groceries via pickup or delivery in as little as 30 minutes." 
    },
    { 
      icon: "dollar-sign", 
      title: "SNAP EBT Accepted",        
      desc: "We proudly accept SNAP EBT benefits for all eligible food purchases." 
    },
    { 
      icon: "award",       
      title: "Exclusive Brands",         
      desc: "Shop high-quality Albertsons companies own brands products you love." 
    },
    { 
      icon: "thumbs-up",   
      title: "Quality Guaranteed", 
      desc: "We stand by our products with a 100% money-back quality guarantee." 
    },
    { 
      icon: "heart",       
      title: "Friendly Service",     
      desc: "Our dedicated team provides welcoming, helpful service in every aisle." 
    },
    { 
      icon: "truck",       
      title: "Fully Stocked",         
      desc: "A longtime supermarket chain carrying everything you need in one trip." 
    }
  ],

  formServiceOptions: [
    "Fresh Groceries",
    "Bakery & Custom Cakes",
    "Deli & Fried Chicken",
    "Pharmacy & Vaccines",
    "Fresh Florist",
    "Rug Doctor Rentals"
  ]
}

export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!