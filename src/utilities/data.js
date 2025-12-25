const { Leaf, Sun, Hand, Sparkles, Waves, Flower2 } = require("lucide-react");

export const services = [
  {
    id: 1,
    title: "Signature Aromatherapy",
    description:
      "A full-body massage using organic essential oils to harmonize the body, mind, and spirit.",
    category: "Massage",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    icon: <Flower2 className="w-5 h-5" />,
    tag: "Best Seller",
    durations: [
      { time: "60 min", price: 90 },
      { time: "90 min", price: 120 },
      { time: "120 min", price: 150 },
    ],
  },
  {
    id: 2,
    title: "Ocean Breeze Facial",
    description:
      "Deeply hydrating treatment using mineral-rich marine extracts for a naturally glowing skin.",
    category: "Facial",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    icon: <Waves className="w-5 h-5" />,
    tag: "Trending",
    durations: [
      { time: "45 min", price: 65 },
      { time: "60 min", price: 85 },
      { time: "90 min", price: 115 },
    ],
  },
  {
    id: 3,
    title: "Zen Stone Therapy",
    description:
      "Smooth volcanic stones are heated and placed on key energy points to melt away deep tension.",
    category: "Therapy",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    icon: <Sparkles className="w-5 h-5" />,
    tag: "Limited",
    durations: [
      { time: "60 min", price: 110 },
      { time: "75 min", price: 145 },
      { time: "90 min", price: 170 },
    ],
  },
  {
    id: 4,
    title: "Royal Thai Massage",
    description:
      "Traditional Thai stretching techniques combined with deep pressure to restore energy balance.",
    category: "Body",
    image:
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&q=80&w=800",
    icon: <Hand className="w-5 h-5" />,
    tag: "Popular",
    durations: [
      { time: "60 min", price: 100 },
      { time: "90 min", price: 130 },
      { time: "120 min", price: 165 },
    ],
  },
  {
    id: 5,
    title: "Golden Glow Skin Ritual",
    description:
      "A luxurious facial infused with gold particles to brighten skin tone and boost collagen.",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    icon: <Sun className="w-5 h-5" />,
    tag: "Premium",
    durations: [
      { time: "50 min", price: 90 },
      { time: "70 min", price: 110 },
      { time: "90 min", price: 140 },
    ],
  },
  {
    id: 6,
    title: "Ayurvedic Herbal Therapy",
    description:
      "Healing herbal oils and rhythmic massage techniques to detoxify the body.",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&q=80&w=800",
    icon: <Leaf className="w-5 h-5" />,
    tag: "Wellness",
    durations: [
      { time: "60 min", price: 115 },
      { time: "80 min", price: 140 },
      { time: "100 min", price: 170 },
    ],
  },
];

export const spaModels = [
  {
    id: 1,
    name: "Elena Rodriguez",
    city: "Dubai",
    rating: 4.9,
    reviews: 128,
    price: "500",
    currency: "AED",
    tags: ["Deep Tissue", "Holistic"],
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true,
  },
  {
    id: 2,
    name: "Aisha Khan",
    city: "Abu Dhabi",
    rating: 4.8,
    reviews: 94,
    price: "450",
    currency: "AED",
    tags: ["Relaxation", "Swedish"],
    image:
      "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true,
  },
  {
    id: 3,
    name: "Sophia Al-Maktoum",
    city: "Dubai",
    rating: 5.0,
    reviews: 215,
    price: "650",
    currency: "AED",
    tags: ["Aromatherapy", "Zen"],
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&q=80&w=400",
    verified: true,
  },
  {
    id: 4,
    name: "Natalie Brooks",
    city: "Sharjah",
    rating: 4.7,
    reviews: 88,
    price: "420",
    currency: "AED",
    tags: ["Hot Stone", "Balance"],
    image:
      "https://images.unsplash.com/photo-1621784563330-caee0b138a00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    verified: true,
  },
  {
    id: 5,
    name: "Layla Hassan",
    city: "Dubai",
    rating: 4.9,
    reviews: 176,
    price: "580",
    currency: "AED",
    tags: ["Thai Massage", "Flexibility"],
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400",
    verified: true,
  },
  {
    id: 6,
    name: "Isabella Moore",
    city: "Ajman",
    rating: 4.8,
    reviews: 132,
    price: "480",
    currency: "AED",
    tags: ["Reflexology", "Wellness"],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    verified: true,
  },
];

export const spaCategories = [
  {
    name: "Swedish Massage",
    value: "swedish_massage",
  },
  {
    name: "Deep Tissue Massage",
    value: "deep_tissue",
  },
  {
    name: "Thai Massage",
    value: "thai_massage",
  },
  {
    name: "Aromatherapy",
    value: "aromatherapy",
  },
  {
    name: "Hot Stone Therapy",
    value: "hot_stone",
  },
  {
    name: "Reflexology",
    value: "reflexology",
  },
];

export const location = [
  {
    city: "Dubai",
    shopLocation: [
      "House 12, Road 7, Jumeirah, Dubai",
      "Building 21, Business Bay, Dubai",
      "Villa 5, Dubai Marina, Dubai",
      "Shop 9, Deira Gold Souk Area, Dubai",
    ],
    states: [
      "Dubai Marina",
      "Jumeirah",
      "Deira",
      "Bur Dubai",
      "Palm Jumeirah",
      "Downtown Dubai",
      "Business Bay",
    ],
  },
  {
    city: "Abu Dhabi",
    shopLocation: [
      "Building 45, Al Zahiyah Area, Abu Dhabi",
      "Villa 8, Khalifa City, Abu Dhabi",
      "Shop 3, Yas Island, Abu Dhabi",
    ],
    states: [
      "Yas Island",
      "Saadiyat Island",
      "Al Reem Island",
      "Al Khalidiyah",
      "Al Mushrif",
    ],
  },
  {
    city: "Sharjah",
    shopLocation: [
      "Villa 9, Al Majaz 2, Sharjah",
      "Building 14, Al Nahda, Sharjah",
      "House 6, Muwaileh Area, Sharjah",
    ],
    states: ["Al Majaz", "Al Nahda", "Al Qasimia", "Al Taawun"],
  },
  {
    city: "Ajman",
    shopLocation: [
      "Building 18, Al Nuaimiya 1, Ajman",
      "Shop 4, Ajman Corniche, Ajman",
    ],
    states: ["Al Nuaimiya", "Al Rashidiya", "Al Jurf"],
  },
  {
    city: "Ras Al Khaimah",
    shopLocation: [
      "House 3, Al Nakheel Area, Ras Al Khaimah",
      "Villa 10, Al Hamra Village, Ras Al Khaimah",
    ],
    states: ["Al Nakheel", "Al Hamra", "Al Dhait"],
  },
];
