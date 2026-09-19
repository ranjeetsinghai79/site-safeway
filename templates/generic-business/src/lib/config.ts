import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Safeway",
    tagline: "Quality guaranteed or money back.",
    phone: "(209) 362-1256",
    phoneHref: "tel:+12093621256",
    email: "info@safeway.com",
    address: "19555 S Mountain House Pkwy, Mountain House, CA 95391",
    city: "Mountain House",
    serviceAreas: ["Mountain House"],
    license: "",
    since: "1915",
    google_rating: "4.3",
    review_count: "346",
    emergency: true,
    theme: "navy",
    niche: "hvac",
  },

  services: [
    { icon: "home", title: "Groceries & Fresh Produce", desc: "Brand-name and house-label groceries with guaranteed freshness.", urgent: false },
    { icon: "truck", title: "Fast Delivery & Pickup", desc: "Get your order via pickup or delivery in as little as 30 minutes.", urgent: true },
    { icon: "shield-check", title: "Pharmacy & Vaccinations", desc: "Convenient on-site pharmacy for prescriptions and immunizations.", urgent: false },
    { icon: "heart", title: "Custom Cakes & Bakery", desc: "Freshly baked goods and custom cakes for any special occasion.", urgent: false },
    { icon: "star", title: "Catering & Party Food", desc: "Delicious party platters, deli trays, and catering for your events.", urgent: false },
    { icon: "droplets", title: "Rug Doctor Rentals", desc: "Professional-grade carpet cleaning equipment available for rent.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah Jenkins", location: "Mountain House", stars: 5, text: "I love the convenience of their 30-minute pickup service. The fresh produce is always top-notch, and the bakery made a stunning custom cake for my daughter's birthday. It's truly the one stop while you shop, saving me hours every week." },
    { name: "Michael Torres", location: "Mountain House", stars: 5, text: "The pharmacy staff here in Mountain House is incredibly helpful and fast. I got my vaccinations done quickly, and picking up my weekly groceries right after made my day so much easier. Quality is always guaranteed, and they actually mean it." },
    { name: "Emily Chen", location: "Mountain House", stars: 5, text: "We used their catering and party food service for our neighborhood block party. The sandwiches and party supplies were perfect. Having everything ready on time with such friendly service took all the stress out of hosting. Highly recommend this location!" }
  ],

  trustBadges: [
    "Quality Guaranteed",
    "30-Minute Pickup",
    "Accepts SNAP EBT",
    "Open 5AM–2AM Daily"
  ],

  stats: [
    { value: 4.3, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 346, label: "Local Reviews", suffix: "+", decimals: 0 },
    { value: 30, label: "Minute Pickup", suffix: "m", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Extended Hours", desc: "Open daily from 5:00 AM to 2:00 AM for your ultimate convenience." },
    { icon: "truck", title: "Fast Pickup & Delivery", desc: "Get your groceries as soon as 30 minutes with our rapid service." },
    { icon: "shield-check", title: "Quality Guaranteed", desc: "We stand by our products. Get top quality or your money back." },
    { icon: "dollar-sign", title: "Accepts SNAP EBT", desc: "We proudly accept SNAP EBT benefits to serve our entire community." },
    { icon: "home", title: "One-Stop Shop", desc: "From fresh groceries to pharmacy needs and rug rentals, we have it all." },
    { icon: "heart", title: "Friendly Service", desc: "Our Mountain House team is dedicated to making your shopping experience pleasant." }
  ],

  formServiceOptions: [
    "Groceries & Fresh Produce",
    "Fast Delivery & Pickup",
    "Pharmacy & Vaccinations",
    "Custom Cakes & Bakery",
    "Catering & Party Food",
    "Rug Doctor Rentals"
  ]
}

export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!