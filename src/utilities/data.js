const { Leaf, Sun, Hand, Sparkles, Waves, Flower2 } = require("lucide-react");

export const services = [
    {
      id: 1,
      title: "Signature Aromatherapy",
      description:
        "A full-body massage using organic essential oils to harmonize the body, mind, and spirit and spirit.",
      duration: "90 min",
      price: "120",
      category: "Massage",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
      icon: <Flower2 className="w-5 h-5" />,
      tag: "Best Seller",
    },
    {
      id: 2,
      title: "Ocean Breeze Facial",
      description:
        "Deeply hydrating treatment using mineral-rich marine extracts for a naturally glowing.",
      duration: "60 min",
      price: "85",
      category: "Facial",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      icon: <Waves className="w-5 h-5" />,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Zen Stone Therapy",
      description:
        "Smooth volcanic stones are heated and placed on key energy points to melt away deep tension.",
      duration: "75 min",
      price: "145",
      category: "Therapy",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
      icon: <Sparkles className="w-5 h-5" />,
      tag: "Limited",
    },

    {
      id: 4,
      title: "Royal Thai Massage",
      description:
        "Traditional Thai stretching techniques combined with deep pressure to restore.",
      duration: "90 min",
      price: "130",
      category: "Body",
      image:
        "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&q=80&w=800",
      icon: <Hand className="w-5 h-5" />,
      tag: "Popular",
    },
    {
      id: 5,
      title: "Golden Glow Skin Ritual",
      description:
        "A luxurious facial infused with gold particles to brighten skin tone and boost collagen.",
      duration: "70 min",
      price: "110",
      category: "Luxury",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
      icon: <Sun className="w-5 h-5" />,
      tag: "Premium",
    },
    {
      id: 6,
      title: "Ayurvedic Herbal Therapy",
      description:
        "Healing herbal oils and rhythmic massage techniques to detoxify the body and .",
      duration: "80 min",
      price: "140",
      category: "Wellness",
      image:
        "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&q=80&w=800",
      icon: <Leaf className="w-5 h-5" />,
      tag: "Wellness",
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



  export  const spaCategories = [
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
  }
];

export const uaeCities = [
  {
    name: "Dubai",
    value: "dubai",
  },
  {
    name: "Abu Dhabi",
    value: "abu_dhabi",
  },
  {
    name: "Sharjah",
    value: "sharjah",
  },
  {
    name: "Ajman",
    value: "ajman",
  },
  {
    name: "Ras Al Khaimah",
    value: "ras_al_khaimah",
  },
  {
    name: "Fujairah",
    value: "fujairah",
  },
  {
    name: "Umm Al Quwain",
    value: "umm_al_quwain",
  },
  {
    name: "Al Ain",
    value: "al_ain",
  }
];

